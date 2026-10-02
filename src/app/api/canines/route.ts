import CanineSchema from "@/src/database/canineSchema";
import connectDB from "@/src/database/db";

/**
 * GET /api/canines
 * @returns all canines from the database test/canines
 */
export async function GET() {
  await connectDB();

  try {
    const canines = await CanineSchema.find().sort({ Name: 1 }).orFail();

    return Response.json({ canines: canines }, { status: 200 });
  } catch (err) {
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

    if (
      !newCanine ||
      typeof newCanine !== "object" ||
      Array.isArray(newCanine)
    ) {
      return Response.json({ error: "Invalid canine data" }, { status: 400 });
    }
    const createdCanine = await CanineSchema.create(newCanine);
    return Response.json({ createdCanine }, { status: 201 });
  } catch (err) {
    return Response.json(
      { error: "Unable to insert canine into database" },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/canines?name=Name
 * Removes a canine fromthe database test/canines by id
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

    const deletedCanine = await CanineSchema.findByIdAndDelete(id);

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
