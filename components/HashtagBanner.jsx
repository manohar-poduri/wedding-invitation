import Reveal from "./Reveal";
import Gopuram from "./Gopuram";
import styles from "./HashtagBanner.module.css";

export default function HashtagBanner() {
  return (
    <footer className={styles.footer} id="hashtag">
      <Gopuram className={styles.gopuram} />
      <div className={`wrap center ${styles.content}`}>
        <Reveal variant="fade">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>
            Share the celebration
          </p>
          <p className={styles.hashtag}>#SwethaSanthoshKalyanam</p>
          <div className="divider-line" />
          <p className={styles.signOff}>
            With love,
            <br />
            the families of Sai Swetha &amp; Rama Prabha Sai Santhosh
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
