"use client";
import { preload } from "react-dom";
import styles from "./donate.module.css";
import Selector from "./Selector";

export default function DonatePage() {
  preload("/hex-light.svg", { as: "image" });

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>WE APPRECIATE YOUR SUPPORT!</h1>
        <hr className={styles.divider}></hr>
        <p className={styles.subtitle}>
          Meade Canine Rescue is a 501(c)(3) non-profit. 100% of donations go to
          supporting our rescues! We sincerely appreciate your generosity! :)
        </p>
        <div className={styles.card}>
          <Selector />
          <input
            type="text"
            id="amount"
            name="amount"
            placeholder="Other"
            className={styles.other}
          />
        </div>
      </div>
    </main>
  );
}
