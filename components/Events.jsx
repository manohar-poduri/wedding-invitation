"use client";

import Reveal from "./Reveal";
import styles from "./Events.module.css";

// Edit each event below — add/remove entries freely, the timeline
// connector draws itself automatically.
const EVENTS = [
  {
    icon: "dinner",
    title: "Dinner",
    when: "4rd September 2026 · 7:00 PM",
    venue: "Lee Paradise Convention, Vizianagaram",
    description:
      "An evening of dinner and celebration with family and friends ahead of the wedding muhurtham.",
  },
  {
    icon: "muhurtham",
    title: "Wedding Muhurtham",
    when: "4th September 2026 · 3:50 AM (early hours of Saturday)",
    venue: "Lee Paradise Convention, Vizianagaram",
    description:
      "Under the mangala vaidyalu and vedic mantras, Sai Swetha and Rama Prabha Sai Santhosh take their sacred seven steps together.",
  },
];

const ICONS = {
  dinner: (
    <>
      <path d="M7 3v7a2 2 0 0 0 4 0V3M9 10v11M9 3v4M5 3v4" />
      <path d="M16 3c-1.5 0-2.5 2-2.5 5s1 5 2.5 5v8" />
    </>
  ),
  muhurtham: (
    <>
      <path d="M6 9 12 3l6 6-6 12z" />
      <path d="M6 9h12M9.5 9 12 3l2.5 6M9 9l3 12M15 9l-3 12" />
    </>
  ),
};

function EventCard({ event, delay, variant }) {
  const query = encodeURIComponent(`${event.venue}`);

  return (
    <li className={styles.row}>
      <div className={styles.markerCol}>
        <span className={styles.marker}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.markerIcon}
          >
            {ICONS[event.icon]}
          </svg>
        </span>
      </div>

      <Reveal delay={delay} className={styles.card} variant={variant}>
        <h3 className={styles.eventTitle}>{event.title}</h3>
        <p className={styles.when}>{event.when}</p>
        <p className={styles.venue}>{event.venue}</p>
        <p className={styles.description}>{event.description}</p>
        
         <a className={styles.btn}
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.btnIcon}
          >
            <path d="M12 21s7-6.1 7-11.5a7 7 0 1 0-14 0C5 14.9 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.4" />
          </svg>
          Get Directions
        </a>
      </Reveal>
    </li>
  );
}

export default function Events() {
  return (
    <section className={`section ${styles.section}`} id="events">
      <div className="wrap center">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            Celebrations
          </p>
          <h2 className={`section-title ${styles.title}`}>
            The Wedding Events
          </h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerMark}>&#10022;</span>
            <span className={styles.dividerLine} />
          </div>
        </Reveal>

        <ol className={styles.timeline}>
          {EVENTS.map((event, i) => (
            <EventCard event={event} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"} key={event.title} />
          ))}
        </ol>
      </div>
    </section>
  );
}