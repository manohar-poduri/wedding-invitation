"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import styles from "./Couple.module.css";

// Edit the details below — photo file names live in /public/gallery/
const BRIDE = {
  photo: "/gallery/bride.jpg",
  name: "Sai Swetha",
  role: "",
  parents: (
    <>
      Beloved elder daughter of Dr. Cherukumilli Subramanyam  &amp; Smt. Subhadra.
    </>
  ),
};

const GROOM = {
  photo: "/gallery/groom.jpg",
  name: "Rama Prabha Sai Santhosh",
  role: "",
  parents: (
    <>
      Beloved elder son of Sri Poduri Rama Murthy &amp; Smt. Vijaya Padma Sailaja.
    </>
  ),
};

function Portrait({ person, delay, side }) {
  const [missing, setMissing] = useState(false);

  return (
    <Reveal delay={delay} className={styles.card} variant="false">
      <div className={styles.photoFrame}>
        {missing ? (
          <div className={styles.placeholder}>
            <span className={styles.placeholderMark}>&#10022;</span>
            <span className={styles.placeholderText}>Photo coming soon</span>
          </div>
        ) : (
          <img
            src={person.photo}
            alt={person.name}
            loading="lazy"
            onError={() => setMissing(true)}
          />
        )}
      </div>

      <p className={styles.name}>{person.name}</p>
      {person.role && <p className={styles.role}>{person.role}</p>}
      <p className={styles.parents}>{person.parents}</p>
    </Reveal>
  );
}

export default function Couple() {
  return (
    <section className={`section ${styles.section}`} id="couple">
      <div className="wrap center">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            The Couple
          </p>
          <h2 className={`section-title ${styles.title}`}>
            A Love Worth Celebrating
          </h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerMark}>&#10022;</span>
            <span className={styles.dividerLine} />
          </div>
        </Reveal>

        <div className={styles.grid}>
          <Portrait person={GROOM} delay={0} side="left" />
          <span className={styles.amp}>&amp;</span>
          <Portrait person={BRIDE} delay={120} side="right" />
        </div>
      </div>
    </section>
  );
}