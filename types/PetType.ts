export type Canine = {
  Image: string;
  Name: string;
  Breed: string;
  Age: "Baby" | "Young" | "Adult" | "Senior";
  Sex: "Male" | "Female";
  Neutered: boolean;
  Immunization: string;
  Size: string;
  Weight: number;
  Details: string[];
  Story: string;
};

export const test_canines: Canine[] = [
  {
    Image: "../public/pets/Ace.jpg",
    Name: "Ace",
    Breed: "German Shepard",
    Age: "Young",
    Sex: "Male",
    Neutered: true,
    Immunization: "Unvaxxed",
    Size: "Huge",
    Weight: 900,
    Details: ["Not friendly", "Evil"],
    Story: "Wittle baby from the wittle baby dog streets",
  },
  {
    Image: "../public/pets/Bella.jpg",
    Name: "Bella",
    Breed: "Pit Bull Terrier",
    Age: "Senior",
    Sex: "Female",
    Neutered: false,
    Immunization: "Fully vaccinated",
    Size: "Midsize",
    Weight: 4,
    Details: ["Good with babies", "Bad with dogs"],
    Story: "Bella the real og from the og og",
  },
  {
    Image: "../public/pets/BellaLinda.png",
    Name: "Bella Linda",
    Breed: "Poodle (Miniature)",
    Age: "Senior",
    Sex: "Female",
    Neutered: true,
    Immunization: "Polio",
    Size: "Small",
    Weight: 1,
    Details: ["Chill", "Swag"],
    Story: "Dope dog from the dope dog underworld",
  },
  {
    Image: "../public/Brownie.jpg",
    Name: "Brownie",
    Breed: "Rat Terrier",
    Age: "Senior",
    Sex: "Female",
    Neutered: false,
    Immunization: "Chicken pox",
    Size: "Eeny meeny",
    Weight: 9000,
    Details: ["Spawn of satan", "Aggressive"],
    Story: "Incarnation of the devil, stay away at all costs.",
  },
];
