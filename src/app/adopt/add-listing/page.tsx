"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../adopt.module.css";
import formStyles from "./add-listing.module.css";
import { AGES, SEXES, validateCanine } from "@/src/lib/canineValidation";
import { Canine } from "@/src/database/canineSchema";

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
    Image: "",
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

  // the file a user uploaded stays in the browser until submit, then it gets
  // uploaded and replaced by a url in form.Image
  const [imageFile, setImageFile] = useState<File | null>(null);

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

  //
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImageFile(event.target.files?.[0] ?? null);
  }

  async function handleSubmit(event: React.FormEvent) {
    // stop the browser from reloading the page
    event.preventDefault();

    // a file has to be picked before we can upload anything
    if (!imageFile) {
      setError("Image is required");
      return;
    }

    // uploadData is an empty box of fields, append the image in it named file
    const uploadData = new FormData();
    uploadData.append("file", imageFile);

    // sends image to upload route, (upload in api/canines/upload)
    const uploadResponse = await fetch("/api/canines/upload", {
      method: "POST",
      body: uploadData,
    });

    if (!uploadResponse.ok) {
      const data = await uploadResponse.json();
      setError(data.error);
      return;
    }

    // the route answers with { url } pointing at the stored image
    const { url } = await uploadResponse.json();

    // Build the Canine the API expects out of the form values
    const canine: Canine = {
      ...form,
      //blob url replaces empty string from form
      Image: url,
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
            <option value="Baby">Baby (0-1)</option>
            <option value="Young">Young (1-3)</option>
            <option value="Adult">Adult (3-7)</option>
            <option value="Senior">Senior (7+)</option>
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
          Immunizations (ex. Rabies, DHPP, etc)
          <input
            name="Immunization"
            value={form.Immunization}
            onChange={handleChange}
          />
        </label>

        {/* Size field */}
        <label className={formStyles.label}>
          Size (length in inches)
          <input name="Size" value={form.Size} onChange={handleChange} />
        </label>

        {/* Weight field */}
        <label className={formStyles.label}>
          Weight (in lbs)
          <input
            type="number"
            name="Weight"
            value={form.Weight}
            onChange={handleChange}
          />
        </label>

        {/* Image dropdown */}
        <label className={formStyles.label}>
          Image (JPEG or PNG, max 4MB)
          <input
            type="file"
            name="Image"
            accept="image/jpeg,image/png"
            onChange={handleFileChange}
          />
        </label>

        {/*  Details field: this would take the full width of the form */}
        <label className={`${formStyles.label} ${formStyles.full}`}>
          Details (comma-separated)
          <input name="Details" value={form.Details} onChange={handleChange} />
        </label>

        {/* Story field: this would also take the full width of the form */}
        <label className={`${formStyles.label} ${formStyles.full}`}>
          Their Story
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
