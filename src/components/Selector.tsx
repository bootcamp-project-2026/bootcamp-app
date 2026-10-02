/*
 Multiple choice selector for choosing amounts to donate
*/

import styles from "../app/donate/donate.module.css";

const DONATE_URL =
  "https://www.paypal.com/donate?token=CXg6UHV177pOZOamyXYUq4R93zRAO8HQmeVZsOP6XuAlM2e2h3dI-rzQ5Le58kR_oArAHl5gGvkGWz7l";

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
