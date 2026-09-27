import Image from "next/image";

export type Canine = {
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
    <article className="card">
      <Image
        src={`/pets/${imageFileName}`}
        alt={canine.Name}
        width={300}
        height={200}
      />
      <h2>{canine.Name}</h2>
      <p>Breed: {canine.Breed}</p>
      <p>Age: {canine.Age}</p>
      <p>Sex: {canine.Sex}</p>
    </article>
  );
}
