"use client";
import { preload } from "react-dom";
import styles from "./adopt.module.css";

export default function DonatePage() {
  preload("/hex-light.svg", { as: "image" });

  return (
    <main className={styles.page}>
      <div className={styles.container}></div>
    </main>
  );
}
