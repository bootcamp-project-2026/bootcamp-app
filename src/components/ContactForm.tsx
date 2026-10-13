"use client";

import React, { useState } from "react";
import styles from "../app/contact/contact.module.css";

export default function ContactForm() {
  return (
    <form id="contact-form" className={styles.contactForm}>
      <div id="personal-contact-info" className={styles.personalContactInfo}>
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
  );
}
