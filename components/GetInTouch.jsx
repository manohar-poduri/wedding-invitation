"use client";

import Reveal from "./Reveal";
import styles from "./GetInTouch.module.css";

// Edit this list — add, remove, or update contacts freely.
// phone: used for both the Call and WhatsApp buttons (E.164 format, e.g. +91XXXXXXXXXX)
const CONTACTS = [
    {
        name: "Sai Santhosh",
        role: "Groom",
        phone: "+919866526642",
        email: "ramupoduri@gmail.com",
    },
    {
        name: "Sai Swetha",
        role: "Bride",
        phone: "+919866745980",
        email: "subrahmanyam.subhadra@gmail.com",
    },
];

function digitsOnly(phone) {
    return phone.replace(/[^\d]/g, "");
}

function ContactCard({ contact, delay, variant }) {
    const waNumber = digitsOnly(contact.phone);

    return (
        <Reveal delay={delay} className={styles.card} variant={variant}>
            <p className={styles.name}>{contact.name}</p>
            <p className={styles.role}>{contact.role}</p>

            <div className={styles.actions}>

                <a className={`${styles.action} ${styles.call}`}
                    href={`tel:${contact.phone}`}
                    aria-label={`Call ${contact.name}`}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <path d="M6.5 4h3l1.5 4.5-2 1.5a11 11 0 0 0 5 5l1.5-2L20 14.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
                    </svg>
                    <span>Call</span>
                </a>


                <a className={`${styles.action} ${styles.whatsapp}`}
                    href={`https://wa.me/${waNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Message ${contact.name} on WhatsApp`}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2 22l5.35-1.4a9.9 9.9 0 0 0 4.69 1.19h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
                    </svg>
                    <span>WhatsApp</span>
                </a>


                <a className={`${styles.action} ${styles.email}`}
                    href={`mailto:${contact.email}`}
                    aria-label={`Email ${contact.name}`}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                        <path d="m4.5 7 7.5 6 7.5-6" />
                    </svg>
                    <span>Email</span>
                </a>
            </div>
        </Reveal>
    );
}

export default function GetInTouch() {
    return (
        <section className={`section ${styles.section}`} id="contact">
            <div className="wrap center">
                <Reveal>
                    <p className="eyebrow" style={{ color: "var(--gold)" }}>
                        Questions?
                    </p>
                    <h2 className={`section-title ${styles.title}`}>Get in Touch</h2>
                    <div className={styles.divider}>
                        <span className={styles.dividerLine} />
                        <span className={styles.dividerMark}>&#10022;</span>
                        <span className={styles.dividerLine} />
                    </div>
                    <p className={styles.subtitle}>
                        We'd love to hear from you — reach out anytime.
                    </p>
                </Reveal>

                <div className={styles.grid}>
                    {CONTACTS.map((contact, i) => (
                        <ContactCard contact={contact} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"} key={contact.name} />
                    ))}
                </div>
            </div>
        </section>
    );
}