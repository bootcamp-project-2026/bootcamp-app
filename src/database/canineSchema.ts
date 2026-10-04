import mongoose, { Schema } from "mongoose";

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

const Canine = new Schema<Canine>(
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
      enum: ["Baby", "Young", "Adult", "Senior"],
    },
    Sex: {
      type: String,
      required: true,
      trim: true,
      enum: ["Male", "Female"],
    },
    Neutered: {
      type: Boolean,
      required: true,
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
    },
    Details: {
      type: [{ type: String, trim: true }],
      required: true,
    },
    Story: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "canines" },
);

export default mongoose.models.Canine ||
  mongoose.model<Canine>("Canine", Canine, "canines");
