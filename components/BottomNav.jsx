"use client";

import { useEffect, useState } from "react";
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
      <rect x="4" y="5.5" width="16" height="14.5" rx="2.4" />
      <path d="M4 10h16M8 3.5v3M16 3.5v3" />
    </>
  ),
  venue: (
    <>
      <path d="M12 21s7-6.1 7-11.5a7 7 0 1 0-14 0C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
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
  { id: "events", label: "Events"},
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Gallery" },
  { id: "hashtag", label: "Share" },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav className={styles.nav} aria-label="Section navigation">
      {SECTIONS.map((s) => (

        <a key={s.id}
          href={'#${s.id}'}
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