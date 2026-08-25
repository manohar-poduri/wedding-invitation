"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import styles from "./Countdown.module.css";

// Muhurtham: 4th September 2026, 3:50 AM IST
const TARGET = new Date("2026-09-04T03:50:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(TARGET - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <section className={`section ${styles.section}`} id="countdown">
      <div className="wrap center">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            Counting down to
          </p>
          <h2 className="section-title">The Auspicious Muhurtham</h2>
          <p className="section-sub" style={{ margin: "0 auto 48px" }}>
            Saturday, 4th September 2026 &middot; 3:50 AM &middot; (Early Hours of Saturday) Lee Paradise
            Convention, Vizianagaram
          </p>
        </Reveal>

        <div className={styles.grid}>
          {units.map((u, i) => (
            <Reveal key={u.label} delay={i * 90} variant="zoom">
              <div className={styles.medallion}>
                <span className={styles.value}>
                  {time ? String(u.value).padStart(2, "0") : "--"}
                </span>
                <span className={`${styles.label}`}>{u.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
