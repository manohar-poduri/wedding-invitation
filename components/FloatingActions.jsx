"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FloatingActions.module.css";

// Add your background music file at public/audio/bg-music.mp3
const AUDIO_SRC = "/audio/bg-music.mp3";

const SHARE_TEXT =
  "You're invited! Join us for the wedding of Sai Swetha & Sai Santhosh — 4th September 2026. Open the invitation:";

export default function FloatingActions() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const startOnInvitationOpen = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Some browsers may still block this; the visible music button
          // remains available as a manual fallback.
        });
    };

    window.addEventListener("invitation:opened", startOnInvitationOpen);
    return () =>
      window.removeEventListener("invitation:opened", startOnInvitationOpen);
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Autoplay can be blocked until the user interacts with the page;
        // clicking the button itself counts as that interaction, so this
        // should normally succeed.
      });
  };

  const shareOnWhatsApp = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = encodeURIComponent(`${SHARE_TEXT} ${url}`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.wrap}>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />

      <button
        type="button"
        onClick={toggleAudio}
        aria-label={playing ? "Pause background music" : "Play background music"}
        aria-pressed={playing}
        className={`${styles.fab} ${styles.music}`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`${styles.icon} ${playing ? styles.spin : ""}`}
        >
          <path
            d="M9 18V5.2l10-1.7v12.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6.5" cy="18" r="2.5" fill="currentColor" />
          <circle cx="16.5" cy="16" r="2.5" fill="currentColor" />
        </svg>
        {!playing && <span className={styles.dot} aria-hidden="true" />}
      </button>

      <button
        type="button"
        onClick={shareOnWhatsApp}
        aria-label="Share this invitation on WhatsApp"
        className={`${styles.fab} ${styles.whatsapp}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2 22l5.35-1.4a9.9 9.9 0 0 0 4.69 1.19h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
        </svg>
      </button>
    </div>
  );
}