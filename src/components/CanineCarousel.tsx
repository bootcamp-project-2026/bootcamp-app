"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./CanineCarousel.module.css";
import { type Canine } from "../database/canineSchema";

type CanineCarouselProps = {
  canines: Canine[];
};

export default function CanineCarousel({ canines }: CanineCarouselProps) {
  return (
    <div className={styles.carousel} aria-roledescription="carousel"></div>
  );
}
