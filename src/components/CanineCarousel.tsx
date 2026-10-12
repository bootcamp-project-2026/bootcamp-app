"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./CanineCarousel.module.css";
import { type Canine } from "../database/canineSchema";

type CanineCarouselProps = {
  canines: Canine[];
};

export default function CanineCarousel({ canines }: CanineCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [activeName, setActiveName] = useState<string | null>(null);

  useEffect(() => {
    const closeStory = (event: PointerEvent) => {
      if (!(event.target as Element).closest("[data-card]")) {
        setActiveName(null);
      }
    };
    document.addEventListener("pointerdown", closeStory);
    return () => document.removeEventListener("pointerdown", closeStory);
  }, []);

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", onChange);
      emblaApi.on("reInit", onChange);
      emblaApi.on("resize", onChange);
      return () => {
        emblaApi.off("select", onChange);
        emblaApi.off("reInit", onChange);
        emblaApi.off("resize", onChange);
      };
    },
    [emblaApi],
  );

  const canPrev = useSyncExternalStore(
    subscribe,
    () => emblaApi?.canScrollPrev() ?? false,
    () => false,
  );
  const canNext = useSyncExternalStore(
    subscribe,
    () => emblaApi?.canScrollNext() ?? false,
    () => false,
  );

  if (canines.length === 0) {
    return (
      <p className={styles.empty}>
        No pups to show right now. Please check back soon!
      </p>
    );
  }

  return (
    <div className={styles.carousel} aria-roledescription="carousel">
      <button
        type="button"
        className={`${styles.button} ${styles.prev}`}
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canPrev}
        aria-label="Previous dog"
      >
        ‹
      </button>

      <div className={styles.viewport} ref={emblaRef}>
        <div
          className={`${styles.container} ${
            canines.length === 1 ? styles.single : ""
          }`}
        >
          {canines.map((canine) => (
            <div
              className={styles.slide}
              key={canine.Name}
              role="group"
              aria-roledescription="slide"
            >
              <div
                className={`${styles.card} ${
                  activeName === canine.Name ? styles.active : ""
                }`}
                data-card
                onClick={() =>
                  setActiveName((current) =>
                    current === canine.Name ? null : canine.Name,
                  )
                }
              >
                <p className={styles.name}>{canine.Name}</p>
                <p className={styles.details}>
                  {canine.Breed} · {canine.Age}
                </p>
                <div className={styles.imageWrap}>
                  <img
                    className={styles.image}
                    src={canine.Image}
                    alt={`A dog named ${canine.Name}.`}
                    draggable={false}
                    loading="lazy"
                  />
                  {canine.Story && (
                    <div className={styles.story}>
                      <p className={styles.storyText}>{canine.Story}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`${styles.button} ${styles.next}`}
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canNext}
        aria-label="Next dog"
      >
        ›
      </button>
    </div>
  );
}
