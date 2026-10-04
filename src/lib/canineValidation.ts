import { Canine } from "@/types/PetType";

export const AGES = ["Baby", "Young", "Adult", "Senior"] as const;
export const SEXES = ["Male", "Female"] as const;

/**
 * Checks a canine listing to see if all values are valid
 * @param canine the canine data to check
 * @returns a list of error messages. An empty list means the data is valid
 */
export function validateCanine(canine: Canine) {
  const errors: string[] = [];

  if (!canine.Image) {
    errors.push("Image is required");
  }

  if (!canine.Name) {
    errors.push("Name is required");
  }

  if (!canine.Breed) {
    errors.push("Breed is required");
  }

  if (!AGES.includes(canine.Age)) {
    errors.push(`Age must be one of: ${AGES.join(", ")}`);
  }

  if (!SEXES.includes(canine.Sex)) {
    errors.push(`Sex must be one of: ${SEXES.join(", ")}`);
  }

  if (typeof canine.Neutered !== "boolean") {
    errors.push("Neutered must be true or false");
  }

  if (!canine.Immunization) {
    errors.push("Immunization is required");
  }

  if (!canine.Size) {
    errors.push("Size is required");
  }

  if (!canine.Weight || canine.Weight <= 0) {
    errors.push("Weight must be a positive number");
  }

  if (!canine.Details || canine.Details.length === 0) {
    errors.push("Add at least one detail");
  }

  if (!canine.Story) {
    errors.push("Story is required");
  }

  return errors;
}
