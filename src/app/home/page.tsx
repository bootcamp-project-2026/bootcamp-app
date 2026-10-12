"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./home.module.css";
import shared from "../../styles/shared.module.css";
import CanineCarousel from "../../components/CanineCarousel";
import { type Canine } from "../database/canineSchema";

const CAROUSEL_SIZE = 10;

function pickRandom<T>(items: T[], count: number): T[] {
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
}

export default function Home() {
  const [canines, setCanines] = useState<Canine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCanines() {
      try {
        const response = await fetch("/api/canines");
        if (!response.ok) {
          throw new Error("unable to load canines.");
        }

        const data: Canine[] = await response.json();
        setCanines(pickRandom(data, CAROUSEL_SIZE));
      } catch {
        setError("Unable to load pups right now.");
      } finally {
        setLoading(false);
      }
    }

    loadCanines();
  }, []);

  return (
    <main className={`${styles.page} ${shared.hexBackground}`}>
      <section id="home-section" className={styles.home}>
        <h1 className={`${styles.titleContainer} ${shared.wobble}`}>
          <span className={styles.titleTopHalf}>MEADE CANINE</span>
          <span className={styles.titleBottomHalf}>Rescue & Sanctuary</span>
        </h1>

        {/* Hero section */}
        <section id="hero-subsection" className={styles.hero}>
          <div className={styles.heroImage}>
            <img
              src="/homeimage.jpeg"
              alt="A very cute and happy dog in an open grassy field."
            />
          </div>
          <div className={styles.heroText}>
            <h2 className={styles.heroTitle}>GIVING OLD DOGS NEW LIVES</h2>
            <p id="paragraph-1" className={styles.heroParagraph}>
              It’s been over a year since Meade Canine Rescue returned to its
              roots after 13 prolific and hard working years in the west. Many
              followers joined us on that harrowing journey across the country
              with eight mostly elderly volunteers, 33 mostly elderly dogs and
              one cat loaded into one definitely elderly truck and trailer, two
              elderly cars and a rundown elderly bus. We hope even more have
              continued to follow us during another hardworking 13 months of bi
              coastal dog rescue. Our beloved Meade Canine Rescue Resale shop
              has remained open in Atascadero thanks to efforts of amazing
              volunteers, helping fund vet care for local pets and extensive
              care for pets at the rescue.
            </p>
            <p id="paragraph-2" className={styles.heroParagraph}>
              Approximately 75 dogs have been rescued and cared for through
              intakes and diverts over these 13 months.
            </p>
          </div>
        </section>

        {/* Dogs section */}
        <section id="dog-subsection" className={styles.dogContainer}>
          <h2 className={`${styles.dogTitle} ${shared.wobble}`}>
            Meet Some Pups!
          </h2>
          {loading ? (
            <p>Loading canines...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <CanineCarousel canines={canines} />
          )}
          <Link href="/adopt" className={styles.viewButton}>
            VIEW ALL DOGS
          </Link>
        </section>
      </section>
    </main>
  );
}
