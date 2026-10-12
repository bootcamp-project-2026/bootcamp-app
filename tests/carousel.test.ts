import { afterEach, describe, expect, test, vi } from "vitest";
import { createElement } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import CanineCarousel from "../src/components/CanineCarousel";
import type { Canine } from "../src/database/canineSchema";

const embla = vi.hoisted(() => ({
  canScrollPrev: () => false,
  canScrollNext: () => true,
  scrollPrev: () => {},
  scrollNext: () => {},
  on: () => {},
  off: () => {},
}));

vi.mock("embla-carousel-react", () => ({
  default: () => [() => {}, embla],
}));

function makeCanine(overrides: Partial<Canine> = {}): Canine {
  return {
    Image: "/pets/ziggy.jpg",
    Name: "Ziggy",
    Breed: "Terrier",
    Age: "Senior",
    Sex: "Male",
    Neutered: true,
    Immunization: "Up to date",
    Size: "Small",
    Weight: 15,
    Details: [],
    Story: "Ziggy loves naps in the sun.",
    ...overrides,
  };
}

afterEach(cleanup);

describe("CanineCarousel", () => {
  test("renders a single listing with its image, breed and age", () => {
    render(createElement(CanineCarousel, { canines: [makeCanine()] }));

    expect(screen.getAllByRole("group")).toHaveLength(1);
    expect(screen.getByText("Ziggy")).toBeTruthy();
    expect(screen.getByText("Terrier · Senior")).toBeTruthy();

    const image = screen.getByRole("img", { name: "A dog named Ziggy." });
    expect(image.getAttribute("src")).toBe("/pets/ziggy.jpg");
  });

  test("renders every listing and the navigation buttons when there are several", () => {
    const canines = [
      makeCanine({ Name: "Ziggy" }),
      makeCanine({ Name: "Griselda", Image: "/pets/griselda.jpg" }),
      makeCanine({ Name: "Sweetpea", Image: "/pets/sweetpea.jpg" }),
    ];
    render(createElement(CanineCarousel, { canines }));

    expect(screen.getAllByRole("group")).toHaveLength(3);
    expect(screen.getByText("Griselda")).toBeTruthy();
    expect(screen.getByText("Sweetpea")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Previous dog" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Next dog" })).toBeTruthy();
  });

  test("shows a friendly message and no buttons when there are no listings", () => {
    render(createElement(CanineCarousel, { canines: [] }));

    expect(screen.getByText(/No pups to show right now/)).toBeTruthy();
    expect(screen.queryByRole("group")).toBeNull();
    expect(screen.queryByRole("button", { name: "Next dog" })).toBeNull();
  });
});
