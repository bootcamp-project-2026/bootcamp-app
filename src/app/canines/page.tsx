"use client";

import { useEffect, useState } from "react";
import CanineCard, { type Canine } from "./CanineCard";

/*creating a page component that fetches and displays a list 
of canines using the CanineCard component for each canine*/
export default function CaninesPage() {
  //canines starts empty, setCanines replaces list after api call
  const [canines, setCanines] = useState<Canine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCanines() {
      try {
        // fetch the list of canines from the API route
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
    <main>
      <h1>Available Canines</h1>

      {canines.map((canine) => (
        <CanineCard key={canine.Name} canine={canine} />
      ))}
    </main>
  );
}
