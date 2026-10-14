import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import DonateButton from "../src/components/DonateButton";
import CanineCard from "../src/components/CanineCard";
import Navbar from "../src/components/Navbar";

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

describe("DonateButton", () => {
  test("renders a secure link to the donation page", () => {
    render(<DonateButton />);

    const link = screen.getByRole("link", { name: "Donate with PayPal" });

    expect(link.getAttribute("href")).toBe(
      "https://www.paypal.com/us/fundraiser/charity/2024146",
    );
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });
});

describe("CanineCard", () => {
  test("renders a canine's image and basic details", () => {
    render(
      <CanineCard
        canine={{
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
          AdoptionLink: "/",
        }}
      />,
    );

    expect(screen.getByRole("img", { name: "Ziggy" }).getAttribute("src")).toBe(
      "/pets/ziggy.jpg",
    );
    expect(screen.getByRole("heading", { name: "Ziggy" })).toBeTruthy();
    expect(screen.getByText("Breed: Terrier")).toBeTruthy();
    expect(screen.getByText("Age: Senior")).toBeTruthy();
    expect(screen.getByText("Sex: Male")).toBeTruthy();
    expect(screen.getByRole("link", { name: "ADOPT ME" })).toBeTruthy();
  });
});

describe("Navbar", () => {
  test("renders links to every main page", () => {
    render(<Navbar />);

    const links = [
      ["HOME", "/"],
      ["ABOUT", "/about"],
      ["ADOPT", "/adopt"],
      ["DONATE", "/donate"],
      ["CONTACT", "/contact"],
    ] as const;

    links.forEach(([name, href]) => {
      expect(screen.getByRole("link", { name }).getAttribute("href")).toBe(
        href,
      );
    });
  });
});
