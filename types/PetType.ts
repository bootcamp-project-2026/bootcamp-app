export type Canine = {
    Image: File | String;
    Name: string;
    Breed: string;
    Age: "Baby" | "Young" | "Adult" | "Senior";
    Sex: "Male" | "Female";
}

export const test_canines: Canine[] = [
    { Image: "../public/pets/Ace.jpg", Name: "Ace", Breed: "German Shepard", Age: "Young", Sex: "Male" },
    { Image: "../public/pets/Bella.jpg", Name: "Bella", Breed: "Pit Bull Terrier", Age: "Senior", Sex: "Female"},
    { Image: "../public/pets/BellaLinda.png", Name: "Bella Linda", Breed: "Poodle (Miniature)", Age: "Senior", Sex: "Female"},
    { Image: "../public/Brownie.jpg", Name: "Brownie", Breed: "Rat Terrier", Age: "Senior", Sex: "Female"},
]