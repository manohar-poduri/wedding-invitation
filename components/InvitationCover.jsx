"use client";

import Image from "next/image";
import Gopuram from "./Gopuram";
import styles from "./InvitationCover.module.css";

export default function InvitationCover({ onOpen, closing }) {
  return (
    <div
      className={`${styles.cover} ${closing ? styles.closing : ""}`}
      style={{position:"fixed", inset: 0, zIndex:100}}
      role="dialog"
      aria-label="Wedding invitation cover"
    >
      <div className={styles.sky} />

      <div className={styles.content}>
        <Image
          src="/icon.png"
          alt="Sai Swetha & Rama Prabha Sai Santhosh"
          width={92}
          height={92}
          className={styles.logo}
          priority
        />

        <div className={styles.textBlock}>
          <p className={`eyebrow ${styles.eyebrow}`}>You are invited to the wedding of</p>

          <p className={styles.names}>
           Rama Prabha Sai Santhosh <span className={styles.amp}>&amp;</span> Sai Swetha
          </p>

          <div className={styles.divider} />

          <p className={styles.dateLine}>4th September 2026</p>
        </div>

        <div className={styles.sealWrap}>
          <button type="button" className={styles.seal} onClick={onOpen}>
            <span className={styles.sealRing}>
              <span className={styles.sealMark}>&#10022;</span>
            </span>
            <span className={styles.sealLabel}>Open Invitation</span>
          </button>
        </div>
      </div>

      <Gopuram className={styles.gopuram} />
    </div>
  );
}