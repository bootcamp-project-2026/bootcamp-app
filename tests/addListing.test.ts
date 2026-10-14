import { describe, expect, test } from "vitest";
import { validateCanine } from "../src/lib/canineValidation";
import type { Canine } from "../src/database/canineSchema";

function makeCanine(overrides: Partial<Canine> = {}): Canine {
  return {
    //fake image url, doesn't need to be real
    Image: "https://abc123.public.blob.vercel-storage.com/ziggy.jpg",
    Name: "Ziggy",
    Breed: "Terrier",
    Age: "Senior",
    Sex: "Male",
    Neutered: true,
    Immunization: "Up to date",
    Size: "Small",
    Weight: 15,
    Details: ["friendly"],
    Story: "Ziggy loves naps in the sun.",
    AdoptionLink: "",
    ...overrides,
  };
}

describe("validateCanine (add listing form)", () => {
  test("returns no errors for a fully valid listing", () => {
    expect(validateCanine(makeCanine())).toEqual([]);
  });

  test("reports an error for each missing or invalid required field", () => {
    const errors = validateCanine(
      makeCanine({ Name: "", Story: "", Details: [], Weight: 0 }),
    );

    expect(errors).toContain("Name is required");
    expect(errors).toContain("Story is required");
    expect(errors).toContain("Add at least one detail");
    expect(errors).toContain("Weight must be a positive number");
    expect(errors).toHaveLength(4);
  });

  test("only accepts http(s) adoption links", () => {
    const linkError = "Adoption link must be a valid http(s) URL";

    expect(
      validateCanine(makeCanine({ AdoptionLink: "javascript:alert(1)" })),
    ).toContain(linkError);
    expect(validateCanine(makeCanine({ AdoptionLink: "not a url" }))).toContain(
      linkError,
    );
    expect(
      validateCanine(makeCanine({ AdoptionLink: "https://example.com" })),
    ).toEqual([]);
  });
});
