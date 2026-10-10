import { put } from "@vercel/blob";

const ALLOWED_TYPES = ["image/jpeg", "image/png"];
const MAX_SIZE = 4 * 1024 * 1024; // 4 MB, under vercel's 4.5 MB body limit

/**
 * POST /api/canines/upload
 * Accepts multipart form data with a "file" field, stores it in Vercel Blob
 * @returns the public url of the uploaded image
 */
export async function POST(request: Request) {
  try {
    //user auth goes here

    const formData = await request.formData();
    const file = formData.get("file");

    // formData values can be strings, so make sure it's actually a File
    if (!(file instanceof File)) {
      return Response.json(
        { error: "An image file is required" },
        { status: 400 },
      );
    }

    //file must be jpeg or png
    if (!ALLOWED_TYPES.includes(file.type)) {
      return Response.json(
        { error: "Image must be a JPEG or PNG" },
        { status: 400 },
      );
    }

    //file must be under max size (4MB)
    if (file.size > MAX_SIZE) {
      return Response.json(
        { error: "Image must be 4 MB or smaller" },
        { status: 400 },
      );
    }

    //actually stores the blob in vercel
    const blob = await put(`canines/${file.name}`, file, {
      access: "public",
    });

    return Response.json({ url: blob.url }, { status: 201 });
  } catch {
    return Response.json({ error: "Unable to upload image" }, { status: 500 });
  }
}
