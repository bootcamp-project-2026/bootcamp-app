import styles from "./contact.module.css";

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

        {/* The actual form part */}
        <form id="contact-form" className={styles.contactForm}>
          <div
            id="personal-contact-info"
            className={styles.personalContactInfo}
          >
            {/* Name field */}
            <div id="name-container" className={styles.nameContainer}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className={styles.inputField} />
            </div>

            {/* Email field */}
            <div id="email-container" className={styles.emailContainer}>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" className={styles.inputField} />
            </div>
          </div>

          {/* Message field */}
          <div id="message-container" className={styles.messageContainer}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" className={styles.textareaField}></textarea>
          </div>

          {/* Submit button */}
          <input type="submit" className={styles.submitButton} />
        </form>

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
