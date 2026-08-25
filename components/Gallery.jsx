"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import styles from "./Gallery.module.css";

// Drop your photos into /public/gallery using these exact file names
// (any common format works — jpg, jpeg, png, webp — just update the
// extension below to match what you add).
const PHOTOS = [
  { file: "/gallery/groom.jpg", caption: "Sai Swetha & Sai Santhosh" },
  { file: "/gallery/wedding.png", caption: "WeddingCard" },
  { file: "/gallery/bride.jpg", caption: "Engagement1" },
  { file: "/gallery/engagement.jpg", caption: "Engagement" },
  { file: "/gallery/couple1.jpg", caption: "Couple" },
  // { file: "/gallery/.jpg", caption: "Bride" },
];

function GalleryTile({ photo, index }) {
  const [missing, setMissing] = useState(false);

  return (
    <Reveal delay={(index % 3) * 90} className={styles.tile} variant="zoom">
      {missing ? (
        <div className={styles.placeholder}>
          <span className={styles.placeholderMark}>&#10022;</span>
          <span className={styles.placeholderText}>Photo coming soon</span>
        </div>
      ) : (
        <img
          src={photo.file}
          alt={photo.caption || "Sai Swetha & Sai Santhosh"}
          loading="lazy"
          onError={() => setMissing(true)}
        />
      )}
    </Reveal>
  );
}

export default function Gallery() {
  return (
    <section className={`section ${styles.section}`} id="gallery">
      <div className="wrap center">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            A few moments
          </p>
          <h2 className="section-title">Photo Gallery</h2>
          {/* <p className="section-sub" style={{ margin: "0 auto 48px" }}>
            Add your favourite pictures to <code>/public/gallery</code> and
            they&rsquo;ll appear here automatically.
          </p> */}
        </Reveal>

        <div className={styles.grid}>
          {PHOTOS.map((photo, i) => (
            <GalleryTile photo={photo} index={i} key={photo.file} />
          ))}
        </div>
      </div>
    </section>
  );
}
