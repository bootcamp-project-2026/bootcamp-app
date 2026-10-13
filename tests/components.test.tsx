import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import DonateButton from "../src/components/DonateButton";


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


