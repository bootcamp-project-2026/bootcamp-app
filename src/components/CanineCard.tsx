import Image from "next/image";
import styles from "../app/adopt/adopt.module.css";

import { type Canine } from "../database/canineSchema";

type CanineCardProps = {
  canine: Canine;
};

export default function CanineCard({ canine }: CanineCardProps) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        src={canine.Image}
        alt={canine.Name}
        width={300}
        height={200}
      />
      <div className={styles.details}>
        <h2>{canine.Name}</h2>
        <p>Breed: {canine.Breed}</p>
        <p>Age: {canine.Age}</p>
        <p>Sex: {canine.Sex}</p>
      </div>
      <button className={styles.viewbutton}>VIEW ME</button>
    </article>
  );
}
