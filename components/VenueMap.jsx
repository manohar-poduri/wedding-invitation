import Reveal from "./Reveal";
import styles from "./VenueMap.module.css";

const VENUE_NAME = "Lee Paradise Convention";
const VENUE_ADDRESS = "100 Feet Ring Road, Vizianagaram, Andhra Pradesh";
const QUERY = encodeURIComponent(`${VENUE_NAME}, ${VENUE_ADDRESS}`);

export default function VenueMap() {
  return (
    <section className={`section ${styles.section}`} id="venue">
      <div className="wrap">
        <Reveal className={styles.grid} as="div">
          <div className={styles.details}>
            <p className="eyebrow" style={{ color: "var(--gold-bright)" }}>
              Where to find us
            </p>
            <h2 className={`section-title ${styles.title}`}>The Venue</h2>
            <p className={styles.venueName}>{VENUE_NAME}</p>
            <p className={styles.venueAddress}>{VENUE_ADDRESS}</p>
            <div className={styles.divider} />
            <p className={styles.note}>
              The wedding ceremony begins in the early hours &mdash; guests are
              welcome to arrive from 2:30 AM onward for the muhurtham at
              3:50 AM.
            </p>
            <a
              className="btn-gold"
              href={`https://www.google.com/maps/dir/?api=1&destination=${QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>

          <div className={styles.mapFrame}>
            <iframe
              title="Venue map — Lee Paradise Convention, Vizianagaram"
              src={`https://maps.google.com/maps?q=${QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
