import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main>
      <section id="class-section" className={styles.contact}>
        <h1 className={styles.pageTitle}>Contact</h1>
        <form id="contact-form" className={styles.contactForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className={styles.inputField} />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" className={styles.inputField} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" className={styles.textareaField}></textarea>
          <input type="submit" className={styles.submitButton} />
        </form>
      </section>
    </main>
  );
}
