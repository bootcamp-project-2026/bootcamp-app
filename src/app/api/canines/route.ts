import Canine from "@/src/database/canineSchema";
import connectDB from "@/src/database/db";
import mongoose from "mongoose";
import { validateCanine } from "@/src/lib/canineValidation";

/**
 * GET /api/canines
 * @returns all canines from the database test/canines
 */
export async function GET() {
  try {
    await connectDB();
    const canines = await Canine.find().sort({ Name: 1 });

    return Response.json(canines, { status: 200 });
  } catch {
    return Response.json(
      { error: "Unable to get canine data from database" },
      { status: 500 },
    );
  }
}

/**
 * POST /api/canines
 * Accepts a new canine and adds it to the database test/canines
 */
export async function POST(request: Request) {
  try {
    await connectDB();
    const newCanine = await request.json();

    if (validateCanine(newCanine).length > 0) {
      return Response.json({ error: "Invalid canine data" }, { status: 400 });
    }
    const createdCanine = await Canine.create(newCanine);
    return Response.json({ createdCanine }, { status: 201 });
  } catch {
    return Response.json(
      { error: "Unable to insert canine into database" },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/canines?id=<MongoDB ObjectId>
 * Removes a canine from the database test/canines by id
 */
export async function DELETE(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json(
        { error: "A canine id is required" },
        { status: 400 },
      );
    }

    if (!mongoose.isValidObjectId(id)) {
      return Response.json({ error: "Invalid canine id" }, { status: 400 });
    }

    const deletedCanine = await Canine.findByIdAndDelete(id);

    if (!deletedCanine) {
      return Response.json({ error: "Canine not found" }, { status: 404 });
    }

    return Response.json({ message: "Canine deleted" }, { status: 200 });
  } catch {
    return Response.json(
      { error: "Unable to delete canine from database" },
      { status: 500 },
    );
  }
}
