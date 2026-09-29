import { preload } from "react-dom";
import styles from "./donate.module.css";

export default function DonatePage() {
  preload("/hex-light.svg", { as: "image" });

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Donate</h1>
        <p className={styles.subtitle}>pls donate.</p>
      </div>
    </main>
  );
}
