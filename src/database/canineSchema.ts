import mongoose, { Schema } from "mongoose";

/*
export type Canine = {
  Image: File | string;
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
*/

const CanineSchema = new mongoose.Schema(
  {
    Image: {
      type: String,
      required: true,
      trim: true,
    },
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Breed: {
      type: String,
      required: true,
      trim: true,
    },
    Age: {
      type: String,
      required: true,
      trim: true,
      enum: ["Baby", "Young", "Adult", "Senior", "Unknown"],
      default: "Unknown",
    },
    Sex: {
      type: String,
      required: true,
      trim: true,
      enum: ["Male", "Female", "Unknown"],
      default: "Unknown",
    },
    Neutered: {
      type: Boolean,
      required: true,
      trim: true,
    },
    Immunization: {
      type: String,
      required: true,
      trim: true,
    },
    Size: {
      type: String,
      required: true,
      trim: true,
    },
    Weight: {
      type: Number,
      required: true,
      trim: true,
    },
    Details: {
      type: [String],
      required: true,
      trim: true,
    },
    Story: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "canine_list" },
);

export default mongoose.models.Canine || mongoose.model("Canine", CanineSchema);
