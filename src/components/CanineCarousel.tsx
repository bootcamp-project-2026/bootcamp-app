"use client";

import { useCallback, useSyncExternalStore } from "react";
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
              <div className={styles.card}>
                <p className={styles.name}>{canine.Name}</p>
                <img
                  className={styles.image}
                  src={canine.Image}
                  alt={`A dog named ${canine.Name}.`}
                  draggable={false}
                  loading="lazy"
                />
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
