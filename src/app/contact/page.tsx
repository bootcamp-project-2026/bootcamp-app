import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main>
      <section id="class-section" className="contact">
        <h1 className="page-title">Contact</h1>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message"></textarea>
          <input type="submit" />
        </form>
      </section>
    </main>
  );
}
