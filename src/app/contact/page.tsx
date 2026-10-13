import styles from "./contact.module.css";
import ContactForm from "@/src/components/ContactForm";

export default function Contact() {
  return (
    <main>
      {/* Title */}
      <section id="contact-section" className={styles.contact}>
        <h1 className={styles.contactTitle}>Contact</h1>

        {/* Location */}
        <section id="location-subsection" className={styles.location}>
          <h2 id="location-title" className={styles.locationTitle}>
            Find us at...
          </h2>
          <div
            id="location-info-container"
            className={styles.locationInfoContainer}
          >
            <p id="location-subaddress" className={styles.locationAddress}>
              50 N. Chippawalla Road, Wingdale, NY 12594
            </p>
            <p id="location-information" className={styles.locationInformation}>
              If planning to visit, please call <em>805-239-4004</em> for an
              appointment
            </p>
          </div>
        </section>

        <ContactForm />

        {/* alternative contact section */}
        <section
          id="alternative-contact-subsection"
          className={styles.alternativeContact}
        >
          <h2 id="alternative-title" className={styles.alternativeTitle}>
            Alternatively, contact us through:{" "}
          </h2>
          <div
            id="alternative-contact-info"
            className={styles.alternativeContacts}
          >
            <p id="alternative-phone" className={styles.alternativePhone}>
              860-866-7986 or 805-239-4004
            </p>
            <p id="alternative-email" className={styles.alternativeEmail}>
              <a href="mailto:4dots@att.net">4dots@att.net</a>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
