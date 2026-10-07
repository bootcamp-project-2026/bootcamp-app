/*
 Multiple choice selector for choosing amounts to donate
*/

import styles from "../app/donate/donate.module.css";

const DONATE_URL =
  "https://www.paypal.com/us/fundraiser/charity/2024146";

export default function Selector() {
  return (
    <div>
      <a
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.donateButton}
      >
        Donate with PayPal
      </a>
    </div>
  );
}
