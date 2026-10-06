"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../adopt.module.css";
import formStyles from "./add-listing.module.css";
import { AGES, SEXES, validateCanine } from "@/src/lib/canineValidation";
import { Canine } from "@/src/database/canineSchema";

// The photos we have in /public/pets. There is no image upload yet,
// so the user picks one of these instead
const IMAGES = [
  { file: "/pets/Ace.jpg", label: "Ace" },
  { file: "/pets/Bella.jpg", label: "Bella" },
  { file: "/pets/Brownie.jpg", label: "Brownie" },
  { file: "/pets/griselda.jpg", label: "Griselda" },
  { file: "/pets/sweetpea.jpg", label: "Sweetpea" },
  { file: "/pets/ziggy.jpg", label: "Ziggy" },
];

/**
 * Form page for adding a new canine listing.
 * Submits to POST /api/canines and goes back to the adopt page on success
 */
export default function AddListingPage() {
  //router used to swap pages
  const router = useRouter();

  // Form values, kept as plain strings while the user types
  // Neutered, Weight and Details are converted to a boolean, a number and an
  // array on submit
  const [form, setForm] = useState({
    Image: IMAGES[0].file,
    Name: "",
    Breed: "",
    Age: AGES[0],
    Sex: SEXES[0],
    Neutered: "false",
    Immunization: "",
    Size: "",
    Weight: "",
    Details: "",
    Story: "",
  });

  // Message shown under the form when validation or the request fails
  const [error, setError] = useState("");

  // One handler for every input. Each input's "name" matches a key in form,
  // so we can update the right field without writing one handler per input
  function handleChange(
    // event refers to the type of menu that appears, we have 3 to choose from
    // Input is a text input, select is a drop down menu textarea is a larger input (only for story)
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event: React.FormEvent) {
    // stop the browser from reloading the page
    event.preventDefault();

    // Build the Canine the API expects out of the form values
    const canine: Canine = {
      ...form,
      // the dropdown gives back the text "true" or "false"
      Neutered: form.Neutered === "true",
      Weight: Number(form.Weight),
      //  Details needs to be in format of a string array "friendly, house trained" -> ["friendly", "house trained"]
      Details: form.Details.split(",")
        .map((detail) => detail.trim())
        .filter(Boolean),
    };

    // Check the data in the browser first so the user gets quick feedback
    const errors = validateCanine(canine);
    if (errors.length > 0) {
      setError(errors.join(", "));
      return;
    }

    //sends new listing to server using post
    const response = await fetch("/api/canines", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(canine),
    });

    // The server checks the data again, so show its error if it rejects it
    if (!response.ok) {
      const data = await response.json();
      setError(data.error);
      return;
    }

    //send user to back to the adopt page after clicking submit
    router.push("/adopt");
  }

  return (
    <main className={styles.page}>
      {/* Title */}
      <p className={styles.title}>ADD A LISTING</p>

      {/* Form */}
      <form className={formStyles.form} onSubmit={handleSubmit}>
        {/* Name field */}
        <label className={formStyles.label}>
          Name
          <input name="Name" value={form.Name} onChange={handleChange} />
        </label>

        {/* Breed field */}
        <label className={formStyles.label}>
          Breed
          <input name="Breed" value={form.Breed} onChange={handleChange} />
        </label>

        {/* Age dropdown */}
        <label className={formStyles.label}>
          Age
          <select name="Age" value={form.Age} onChange={handleChange}>
            {AGES.map((age) => (
              <option key={age}>{age}</option>
            ))}
          </select>
        </label>

        {/* Sex dropdown */}
        <label className={formStyles.label}>
          Sex
          <select name="Sex" value={form.Sex} onChange={handleChange}>
            {SEXES.map((sex) => (
              <option key={sex}>{sex}</option>
            ))}
          </select>
        </label>

        {/* Neutered dropdown */}
        <label className={formStyles.label}>
          Neutered
          <select name="Neutered" value={form.Neutered} onChange={handleChange}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>

        {/* Immunization field */}
        <label className={formStyles.label}>
          Immunization
          <input
            name="Immunization"
            value={form.Immunization}
            onChange={handleChange}
          />
        </label>

        {/* Size field */}
        <label className={formStyles.label}>
          Size
          <input name="Size" value={form.Size} onChange={handleChange} />
        </label>

        {/* Weight field */}
        <label className={formStyles.label}>
          Weight
          <input
            type="number"
            name="Weight"
            value={form.Weight}
            onChange={handleChange}
          />
        </label>

        {/* Image dropdown */}
        <label className={formStyles.label}>
          Image
          <select name="Image" value={form.Image} onChange={handleChange}>
            {IMAGES.map((image) => (
              <option key={image.file} value={image.file}>
                {image.label}
              </option>
            ))}
          </select>
        </label>

        {/*  Details field: this would take the full width of the form */}
        <label className={`${formStyles.label} ${formStyles.full}`}>
          Details (comma-separated)
          <input name="Details" value={form.Details} onChange={handleChange} />
        </label>

        {/* Story field: this would also take the full width of the form */}
        <label className={`${formStyles.label} ${formStyles.full}`}>
          Story
          <textarea name="Story" value={form.Story} onChange={handleChange} />
        </label>

        {/* Error message, only shown when there is one */}
        {error && <p className={formStyles.error}>{error}</p>}

        {/* Submit button */}
        <button
          type="submit"
          className={`${styles.viewbutton} ${formStyles.full}`}
        >
          ADD LISTING
        </button>
      </form>
    </main>
  );
}
