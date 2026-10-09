"use client";
import { useEffect, useState } from "react";
import { preload } from "react-dom";
import styles from "./adopt.module.css";
import shared from "../../styles/shared.module.css";
import CanineCard, { type Canine } from "../../components/CanineCard";
import Link from "next/link";

export default function AdoptPage() {
  preload("/hex-light.svg", { as: "image" });

  const [canines, setCanines] = useState<Canine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCanines() {
      try {
        // fetch the list of canines from the API route instead of test_canines directly
        const response = await fetch("/api/canines");
        if (!response.ok) {
          throw new Error("unable to load canines.");
        }

        const data: Canine[] = await response.json();
        setCanines(data);
      } catch {
        setError("unable to load canines");
      } finally {
        setLoading(false);
      }
    }

    loadCanines();
  }, []);

  if (loading) {
    return (
      <main>
        <p>Loading canines...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className={`${styles.page} ${shared.hexBackground}`}>
      <p className={`${styles.title} ${shared.wobble}`}>ADOPT A CANINE</p>
      <Link href="/sign-in" className={styles.viewbutton}>
        ADD A LISTING
      </Link>
      <div className={styles.container}>
        {/* make one reusable card for every canine returned by the API */}
        {canines.map((canine) => (
          <CanineCard key={canine.Name} canine={canine} />
        ))}
      </div>
    </main>
  );
}
