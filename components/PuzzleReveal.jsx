"use client";

import { useLayoutEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import styles from "./PuzzleReveal.module.css";

// Edit these two lines to change what's revealed once the puzzle is solved
const WEDDING_DATE = "4th September 2026";
const MUHURTHAM = "3:50 AM Muhurtham";

const GRID = 3; // 3x3 sliding puzzle (8 tiles + 1 blank)
const TILE_COUNT = GRID * GRID;
const SOLVED = Array.from({ length: TILE_COUNT }, (_, i) => (i + 1) % TILE_COUNT); // [1,2,...,8,0]
const SHUFFLE_MOVES = 120;

// The "poster" is an inline SVG data URI (not an uploaded image) so it stays
// crisp at any size. It's sliced into tiles purely with CSS background-position.
function buildPosterDataUri(dateText, timeText) {
  // Split the date across two lines if it has a space before the year,
  // e.g. "4th September 2026" -> "4th September" / "2026"
  const lastSpace = dateText.lastIndexOf(" ");
  const dateLine1 = lastSpace === -1 ? dateText : dateText.slice(0, lastSpace);
  const dateLine2 = lastSpace === -1 ? "" : dateText.slice(lastSpace + 1);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="360" viewBox="0 0 360 360">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="1" stop-color="#eef1f6" />
        </linearGradient>
      </defs>
      <rect width="360" height="360" fill="url(#bg)" />
      <rect x="14" y="14" width="332" height="332" fill="none" stroke="#c9a24b" stroke-width="2" opacity="0.6" />
      <text x="180" y="150" text-anchor="middle" font-family="Georgia, serif" font-size="30" fill="#c9a24b">&#10022;</text>
      <text x="180" y="205" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="30" fill="#163a70">${dateLine1}</text>
      <text x="180" y="242" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="30" fill="#163a70">${dateLine2}</text>
      <text x="180" y="278" text-anchor="middle" font-family="Georgia, serif" letter-spacing="3" font-size="14" fill="#c9a24b">${timeText.toUpperCase()}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function isAdjacent(a, b) {
  const rowA = Math.floor(a / GRID);
  const colA = a % GRID;
  const rowB = Math.floor(b / GRID);
  const colB = b % GRID;
  return (
    (rowA === rowB && Math.abs(colA - colB) === 1) ||
    (colA === colB && Math.abs(rowA - rowB) === 1)
  );
}

function shuffledTiles() {
  let tiles = [...SOLVED];
  let blank = tiles.indexOf(0);

  for (let i = 0; i < SHUFFLE_MOVES; i++) {
    const neighbors = [];
    for (let slot = 0; slot < TILE_COUNT; slot++) {
      if (isAdjacent(slot, blank)) neighbors.push(slot);
    }
    const swapWith = neighbors[Math.floor(Math.random() * neighbors.length)];
    [tiles[blank], tiles[swapWith]] = [tiles[swapWith], tiles[blank]];
    blank = swapWith;
  }

  // Make sure a shuffle never lands back on the solved arrangement
  if (tiles.every((v, i) => v === SOLVED[i])) {
    [tiles[0], tiles[1]] = [tiles[1], tiles[0]];
  }

  return tiles;
}

export default function PuzzleReveal() {
  const posterUrl = useMemo(
    () => buildPosterDataUri(WEDDING_DATE, MUHURTHAM),
    []
  );
  const [tiles, setTiles] = useState(SOLVED);
  const [ready, setReady] = useState(false);
  const [solved, setSolved] = useState(false);

  // Shuffle before the first paint so guests never glimpse the solved image.
  useLayoutEffect(() => {
    setTiles(shuffledTiles());
    setReady(true);
  }, []);

  const handleTileClick = (slot) => {
    if (solved) return;
    const blank = tiles.indexOf(0);
    if (!isAdjacent(slot, blank)) return;

    const next = [...tiles];
    [next[slot], next[blank]] = [next[blank], next[slot]];
    setTiles(next);

    if (next.every((v, i) => v === SOLVED[i])) {
      setSolved(true);
    }
  };

  const tileBackground = (id) => {
    if (id === 0) return {};
    const row = Math.floor(id / GRID);
    const col = id % GRID;
    const step = 100 / (GRID - 1);
    return {
      backgroundImage: `url("${posterUrl}")`,
      backgroundSize: `${GRID * 100}% ${GRID * 100}%`,
      backgroundPosition: `${col * step}% ${row * step}%`,
    };
  };

  return (
    <section className={`section ${styles.section}`} id="reveal">
      <div className="wrap center">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            A Little Surprise
          </p>
          <h2 className={`section-title ${styles.title}`}>
            Solve the Puzzle to Reveal Our Wedding Date
          </h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerMark}>&#10022;</span>
            <span className={styles.dividerLine} />
          </div>
        </Reveal>

        <Reveal delay={100} className={styles.frame} as="div">
          <div
            className={`${styles.board} ${solved ? styles.solved : ""} ${
              ready ? styles.ready : ""
            }`}
          >
            {tiles.map((id, slot) => (
              <button
                key={id}
                type="button"
                onClick={() => handleTileClick(slot)}
                disabled={id === 0 || solved}
                aria-label={id === 0 ? "Empty slot" : "Puzzle piece"}
                className={`${styles.tile} ${id === 0 ? styles.blank : ""}`}
                style={tileBackground(id)}
              />
            ))}

            {solved && (
              <div className={styles.confetti}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className={styles.confettiBit}
                    style={{ "--a": `${(360 / 10) * i}deg` }}
                  />
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <p className={styles.hint}>
          {solved ? "You solved it \u2728" : "Slide the tiles to reveal the date"}
        </p>
      </div>
    </section>
  );
}