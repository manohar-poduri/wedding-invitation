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
          <VineBorder
            className={`${styles.vine} ${styles.heroItem}`}
            style={{ animationDelay: "0.3s" }}
          />

          {/* Edit this line with your family's actual blessing wording */}
          <p
            className={`${styles.blessing} ${styles.heroItem}`}
            style={{ animationDelay: "0.45s" }}
          >
            With the divine blessings of our beloved elders,
          </p>

          <p
            className={`${styles.inviteLine} ${styles.heroItem}`}
            style={{ animationDelay: "0.6s" }}
          >
            we joyfully invite you to celebrate the wedding of
          </p>

          <div
            className={`${styles.names} ${styles.heroItem}`}
            style={{ animationDelay: "0.75s" }}
          >
            <span className={styles.scriptName}>Sai Swetha</span>
            <span className={styles.weds}>
              <span className={styles.wedsLine} />
              <span>&</span>
              <span className={styles.wedsLine} />
            </span>
            <span className={styles.scriptName}>Rama Prabha Sai Santhosh</span>
          </div>

          <p
            className={`${styles.dateLine} ${styles.heroItem}`}
            style={{ animationDelay: "0.9s" }}
          >
            Saturday, 4th September 2026
          </p>

          <p
            className={`${styles.venueName} ${styles.heroItem}`}
            style={{ animationDelay: "1.02s" }}
          >
            Lee Paradise Convention
          </p>
          <p
            className={`${styles.venueAddress} ${styles.heroItem}`}
            style={{ animationDelay: "1.1s" }}
          >
            100 Feet Ring Road, Vizianagaram
          </p>

          
           <a href="#hashtag"
            className={`${styles.hashtagPill} ${styles.heroItem}`}
            style={{ animationDelay: "1.22s" }}
          >
            #SaiSwethaWedsSaiSanthosh
          </a>

          <VineBorder
            className={`${styles.vine} ${styles.vineBottom} ${styles.heroItem}`}
            style={{ animationDelay: "1.3s" }}
          />
        </div>
      </div>
    </header>
  );
}