"use client";

import { useEffect, useState } from "react";
import CanineCard, { type Canine } from "@/src/components/CanineCard";

/**
 * canine display page.
 * fetches canine data from GET /api/canines and renders one card per canine
 */
export default function CaninesPage() {
  // canines starts empty, setCanines replaces list after api call
  const [canines, setCanines] = useState<Canine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * requests canine data when the page first loads.
   * stores the API response in state or displays an error if the request fails
   */
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
    <main>
      <h1>Available Canines</h1>
      {/* make one reusable card for every canine returned by the API */}
      {canines.map((canine) => (
        <CanineCard key={canine.Name} canine={canine} />
      ))}
    </main>
  );
}
