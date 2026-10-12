"use client";
import { preload } from "react-dom";
import styles from "./donate.module.css";
import shared from "../../styles/shared.module.css";
import DonateButton from "../../components/DonateButton";

const WISH_LIST_ITEMS = [
  "Dog kibble and treats",
  "“Wet and soaky” cat food",
  "Old towels, rags and blankets",
  "Wee-wee pads",
  "Cleaning supplies",
];

const CHEWY_URL =
  "https://www.chewy.com/g/meade-canine-rescue-foundation_b149841541";

export default function DonatePage() {
  preload("/hex-light.svg", { as: "image" });

  return (
    <main className={`${styles.page} ${shared.hexBackground}`}>
      <div className={`${styles.container} ${shared.wobble}`}>
        <h1 className={styles.title}>WE APPRECIATE YOUR SUPPORT!</h1>
        <hr className={styles.divider}></hr>
        <p className={styles.subtitle}>
          Meade Canine Rescue is a 501(c)(3) non-profit. 100% of donations go to
          supporting our rescues! We sincerely appreciate your generosity! :)
        </p>
        <div className={styles.card}>
          <DonateButton />
        </div>

        <hr className={`${styles.divider} ${styles.sectionDivider}`}></hr>
        <h2 className={styles.title}>WISH LIST</h2>
        <p className={styles.subtitle}>
          Meade Canine Rescue has an ongoing need for the following items:
        </p>
        <ul className={styles.wishList}>
          {WISH_LIST_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a
          href={CHEWY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.donateButton}
        >
          Chewy Wish List
        </a>
      </div>
    </main>
  );
}
