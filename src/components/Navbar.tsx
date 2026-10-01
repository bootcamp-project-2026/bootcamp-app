import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/home">HOME</a>
        </li>
        <li className={styles.navItem}>
          <a href="/about">ABOUT</a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
