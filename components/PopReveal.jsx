"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import styles from "./PopReveal.module.css";

// Edit these two lines to change what's revealed underneath the decor
const WEDDING_DATE = "4th September 2026";
const MUHURTHAM = "3:50 AM Muhurtham";
const HASHTAG = "#SwethaSanthoshKalyanam";

const ROWS = 3;
const COLS = 4;
const TILE_COUNT = ROWS * COLS;

// Fixed (not random) so server and client render identically
const ROTATIONS = [-8, 6, -4, 10, 5, -9, 3, -6, 8, -3, 7, -5];

const ICONS = {
  flower: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3.5c1.8 0 3 1.6 2.2 3.6C13.4 8.9 12 10 12 10s-1.4-1.1-2.2-2.9C9 5.1 10.2 3.5 12 3.5ZM12 20.5c-1.8 0-3-1.6-2.2-3.6.8-1.8 2.2-2.9 2.2-2.9s1.4 1.1 2.2 2.9c.8 2-.4 3.6-2.2 3.6ZM4.5 8.5c.9-1.6 2.9-2 4.3-.5 1.3 1.3 1.4 3 1.4 3s-1.7.1-3-.6C5.7 9.6 4.5 8.5 4.5 8.5ZM19.5 15.5c-.9 1.6-2.9 2-4.3.5-1.3-1.3-1.4-3-1.4-3s1.7-.1 3 .6c1.5.8 2.7 1.9 2.7 1.9ZM4.5 15.5s1.2-1.1 2.7-1.9c1.3-.7 3-.6 3-.6s-.1 1.7-1.4 3c-1.4 1.5-3.4 1.1-4.3-.5ZM19.5 8.5s-1.2 1.1-2.7 1.9c-1.3.7-3 .6-3 .6s.1-1.7 1.4-3c1.4-1.5 3.4-1.1 4.3.5Z" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16c0-3.5.5-7.5 6-7.5s6 4 6 7.5H6Z" />
      <path d="M4.5 16h15M10.5 19h3M12 8.5V6" />
      <circle cx="12" cy="5" r="1.1" />
    </>
  ),
  diya: (
    <>
      <path d="M3.5 14.5C3.5 17 7.3 19 12 19s8.5-2 8.5-4.5c0-1.4-2-2.5-4.3-2.9M3.5 14.5c0-1.4 2-2.5 4.3-2.9M8 11.6c1.2-.3 2.6-.5 4-.5s2.8.2 4 .5" />
      <path d="M12 9.5c-1.1-1.4-1-3 0-4.5 1 1.5 1.1 3.1 0 4.5Z" />
    </>
  ),
  gem: (
    <>
      <path d="M6 9 12 3l6 6-6 12z" />
      <path d="M6 9h12M9.5 9 12 3l2.5 6" />
    </>
  ),
};

const ICON_ORDER = ["flower", "bell", "diya", "gem"];

export default function PopReveal() {
  const [popped, setPopped] = useState(() => new Set());

  const tiles = useMemo(
    () =>
      Array.from({ length: TILE_COUNT }, (_, i) => ({
        id: i,
        icon: ICON_ORDER[i % ICON_ORDER.length],
        rotate: ROTATIONS[i % ROTATIONS.length],
      })),
    []
  );

  const allPopped = popped.size === TILE_COUNT;

  const handlePop = (id) => {
    setPopped((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <section className={`section ${styles.section}`} id="reveal">
      <div className="wrap center">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            A Little Surprise
          </p>
          <h2 className={`section-title ${styles.title}`}>
            Pop the Decor to Reveal Our Wedding Date
          </h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerMark}>&#10022;</span>
            <span className={styles.dividerLine} />
          </div>
        </Reveal>

        <Reveal delay={100} className={styles.frame} as="div">
          <div className={`${styles.card} ${allPopped ? styles.celebrate : ""}`}>
            <div
              className={`${styles.revealLayer} ${
                allPopped ? styles.revealLayerShown : ""
              }`}
            >
              <p className={styles.revealMark}>&#10022;</p>
              <p className={styles.revealDate}>{WEDDING_DATE}</p>
              <p className={styles.revealTime}>{MUHURTHAM}</p>
              <p className={styles.revealHashtag}>{HASHTAG}</p>
            </div>

            <div className={styles.grid}>
              {tiles.map((tile) => {
                const isPopped = popped.has(tile.id);
                return (
                  <button
                    key={tile.id}
                    type="button"
                    onClick={() => handlePop(tile.id)}
                    disabled={isPopped}
                    aria-label="Pop decoration"
                    className={`${styles.tile} ${
                      isPopped ? styles.tilePopped : ""
                    }`}
                    style={{ "--rot": `${tile.rotate}deg` }}
                  >
                    <span className={styles.tileBurst} />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.tileIcon}
                    >
                      {ICONS[tile.icon]}
                    </svg>
                  </button>
                );
              })}
            </div>

            {allPopped && (
              <div className={styles.confetti}>
                {ROTATIONS.map((r, i) => (
                  <span
                    key={i}
                    className={styles.confettiBit}
                    style={{ "--a": `${(360 / ROTATIONS.length) * i}deg` }}
                  />
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <p className={styles.hint}>
          {allPopped ? "You found it \u2728" : "Tap each ornament to pop it"}
        </p>
      </div>
    </section>
  );
}