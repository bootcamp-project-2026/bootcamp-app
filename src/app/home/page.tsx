import styles from "./home.module.css";

export default function home() {
  return (
    <main>
      <nav className="navbar">
        <h1 className="logo">
          <a href="index.html">Placeholder</a>
        </h1>
        <ul className="nav-list">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section
        id="Placeholder section ID"
        className="Placeholder className"
      ></section>
    </main>
  );
}
