"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import styles from "./Gallery.module.css";

// Drop your photos into /public/gallery using these exact file names
// (any common format works — jpg, jpeg, png, webp — just update the
// extension below to match what you add).
const PHOTOS = [
  { file: "/gallery/photo-1.jpg", caption: "Sai Swetha & Sai Santhosh" },
  { file: "/gallery/photo-2.jpg", caption: "" },
  { file: "/gallery/photo-3.jpg", caption: "" },
  { file: "/gallery/photo-4.jpg", caption: "" },
  { file: "/gallery/photo-5.jpg", caption: "" },
  { file: "/gallery/photo-6.jpg", caption: "" },
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
          <p className="section-sub" style={{ margin: "0 auto 48px" }}>
            Add your favourite pictures to <code>/public/gallery</code> and
            they&rsquo;ll appear here automatically.
          </p>
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
