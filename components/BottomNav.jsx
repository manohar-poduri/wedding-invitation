"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BottomNav.module.css";

const ICONS = {
  home: <path d="M4 11.5 12 4l8 7.5M6 9.5V20h5v-6h2v6h5V9.5" />,
  couple: (
    <>
      <circle cx="9" cy="13.5" r="4.2" />
      <circle cx="15" cy="13.5" r="4.2" />
      <path d="M9 6.5 12 3l3 3.5" />
    </>
  ),
  events: (
    <>
      <path d="M6 9 12 3l6 6-6 12z" />
      <path d="M6 9h12M9.5 9 12 3l2.5 6M9 9l3 12M15 9l-3 12" />
    </>
  ),
  gallery: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2.2" />
      <circle cx="8.5" cy="9.7" r="1.4" />
      <path d="m4.5 17 4.6-4.6a1.6 1.6 0 0 1 2.26 0L15 16" />
      <path d="m13.5 15 1.9-1.9a1.6 1.6 0 0 1 2.26 0L20 15.5" />
    </>
  ),
  hashtag: <path d="M8.5 3.5 6 20.5M18 3.5l-2.5 17M4 8.5h16M3 15.5h16" />,
};

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "couple", label: "Couple" },
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "hashtag", label: "Share" },
];

// How far down the viewport the "trigger line" sits (as a fraction of height).
// A section is considered active once its top has scrolled past this line.
const TRIGGER_FRACTION = 0.35;

export default function BottomNav() {
  const [active, setActive] = useState("home");
  const clickLock = useRef(false);
  const clickLockTimeout = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const elements = SECTIONS.map((s) => ({
      id: s.id,
      el: document.getElementById(s.id),
    })).filter((s) => s.el);

    if (!elements.length) return;

    const computeActive = () => {
      tickingRef.current = false;
      if (clickLock.current) return; // don't fight a click-triggered scroll

      const line = window.innerHeight * TRIGGER_FRACTION;

      // Pick the last section whose top has crossed the trigger line.
      // This is deterministic (no flip-flopping between simultaneously
      // "intersecting" entries) and works for sections of any height.
      let current = elements[0].id;
      for (const { id, el } of elements) {
        const top = el.getBoundingClientRect().top;
        if (top <= line) {
          current = id;
        } else {
          break;
        }
      }

      // Special-case the very bottom of the page so the last tab (e.g.
      // "Share") still lights up even if its section is shorter than the
      // trigger offset.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        current = elements[elements.length - 1].id;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(computeActive);
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (clickLockTimeout.current) clearTimeout(clickLockTimeout.current);
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id);

    // Suppress scroll-spy updates while the smooth scroll is in flight so
    // sections passed over on the way don't briefly steal the highlight.
    clickLock.current = true;
    if (clickLockTimeout.current) clearTimeout(clickLockTimeout.current);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    clickLockTimeout.current = setTimeout(() => {
      clickLock.current = false;
    }, 800);
  };

  return (
    <nav className={styles.nav} aria-label="Section navigation">
      {SECTIONS.map((s) => (

        <a key={s.id}
          href={`#${s.id}`}
          onClick={(e) => handleClick(e, s.id)}
          className={`${styles.item} ${active === s.id ? styles.active : ""}`}
          aria-label={s.label}
          aria-current={active === s.id ? "true" : undefined}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.icon}
          >
            {ICONS[s.id]}
          </svg>
        </a>
      ))}
    </nav>
  );
}