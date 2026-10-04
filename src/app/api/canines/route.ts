import { Canine, test_canines } from "@/types/PetType";
import { validateCanine } from "@/src/lib/canineValidation";

/**
 * GET /api/canines
 * @returns all canines from test_canines found in types/PetTypes
 */
export async function GET() {
  return Response.json(test_canines, { status: 200 });
}

/**
 * POST /api/canines
 * Accepts a new canine and adds it to test_canines in types/PetTypes
 */
export async function POST(request: Request) {
  const newCanine: Canine = await request.json();

  const errors = validateCanine(newCanine);
  if (errors.length > 0) {
    return Response.json({ error: errors.join(", ") }, { status: 400 });
  }

  test_canines.push(newCanine);

  return Response.json({ message: "Canine added" }, { status: 201 });
}

/**
 * DELETE /api/canines?name=Name
 * Removes a canine from test_canines by name or ID
 */
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name) {
    return Response.json(
      { error: "A canine name is required" },
      { status: 400 },
    );
  }

  const index = test_canines.findIndex(
    (canine) => canine.Name.toLowerCase() === name.toLowerCase(),
  );

  if (index === -1) {
    return Response.json({ error: "Canine not found" }, { status: 404 });
  }

  const [deletedCanine] = test_canines.splice(index, 1);

  return Response.json({ message: "Canine deleted" }, { status: 200 });
}
