import VineBorder from "./VineBorder";
import FloralCorner from "./FloralCorner";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero} id="home">
      <div className={`${styles.card} wrap`}>
        <FloralCorner className={`${styles.corner} ${styles.cornerTL}`} />
        <FloralCorner className={`${styles.corner} ${styles.cornerTR}`} />
        <FloralCorner className={`${styles.corner} ${styles.cornerBL}`} />
        <FloralCorner className={`${styles.corner} ${styles.cornerBR}`} />

        <div className={styles.content}>
          <VineBorder className={styles.vine} />

          {/* Edit this line with your family's actual blessing wording */}
          <p className={styles.blessing}>
            With the divine blessings of our beloved elders,
          </p>

          <p className={styles.inviteLine}>
            we joyfully invite you to celebrate the wedding of
          </p>

          <div className={styles.names}>
            <span className={styles.scriptName}>Sai Swetha</span>
            <span className={styles.weds}>
              <span className={styles.wedsLine} />
              <span>weds</span>
              <span className={styles.wedsLine} />
            </span>
            <span className={styles.scriptName}>Sai Santhosh</span>
          </div>

          <p className={styles.dateLine}>Saturday, 4th September 2026</p>

          <p className={styles.venueName}>Lee Paradise Convention</p>
          <p className={styles.venueAddress}>
            100 Feet Ring Road, Vizianagaram
          </p>

          <a href="#hashtag" className={styles.hashtagPill}>
            #SaiSwethaWedsSaiSanthosh
          </a>

          <VineBorder className={`${styles.vine} ${styles.vineBottom}`} />
        </div>
      </div>
    </header>
  );
}