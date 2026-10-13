"use client";

import React, { useState } from "react";
import styles from "../app/contact/contact.module.css";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setSuccess(true);
    console.log("Form submitted perfectly!");
  };

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {success && (
        <p
          style={{
            color: "green",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          {"Thank you! We'll get back to you soon."}{" "}
        </p>
      )}

      <div id="personal-contact-info" className={styles.personalContactInfo}>
        {/* Name field */}
        <div id="name-container" className={styles.nameContainer}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className={styles.inputField}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email field */}
        <div id="email-container" className={styles.emailContainer}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Message field */}
      <div id="message-container" className={styles.messageContainer}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className={styles.textareaField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      {/* Submit button */}
      <input type="submit" className={styles.submitButton} />
    </form>
  );
}
