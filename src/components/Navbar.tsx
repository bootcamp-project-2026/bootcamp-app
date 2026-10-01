import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">ABOUT</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/adopt">ADOPT</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/donate">DONATE</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
