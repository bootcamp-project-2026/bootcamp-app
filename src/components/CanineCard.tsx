import Image from "next/image";
import Link from "next/link";
import styles from "../app/adopt/adopt.module.css";

export type Canine = {
  _id: string;
  Image: string;
  Name: string;
  Breed: string;
  Age: "Baby" | "Young" | "Adult" | "Senior";
  Sex: "Male" | "Female";
};

type CanineCardProps = {
  canine: Canine;
};

export default function CanineCard({ canine }: CanineCardProps) {
  // Extract the file name from the Image path (e.g., "Ace.jpg" from "/pets/Ace.jpg")
  const imageFileName = canine.Image.split("/").pop();

  return (
    <article className={styles.card}>
      <Image
        className={styles.image}
        src={`/pets/${imageFileName}`}
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
      <Link href="/sign-in" className={styles.deletebutton}>
        DELETE ME
      </Link>
    </article>
  );
}
