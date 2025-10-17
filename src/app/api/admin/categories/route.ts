import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";

export async function GET() {
  await connectDB();
  const categories = await Category.find().sort({ createdAt: -1 });
  return Response.json(categories);
}

export async function POST(req: Request) {
  await connectDB();
  const { name } = await req.json();

  if (!name || !name.trim()) {
    return Response.json({ error: "Category name is required" }, { status: 400 });
  }

  const normalizedName = name.trim().toLowerCase(); // remove spaces + make lowercase

  // ✅ Case-insensitive and space-trimmed check
  const existing = await Category.findOne({
    name: { $regex: new RegExp(`^${normalizedName}$`, "i") },
  });

  if (existing) {
    return Response.json(
      { error: "Category with similar name already exists" },
      { status: 400 }
    );
  }

  // Save with trimmed, capitalized version
  const formattedName =
    name.trim().charAt(0).toUpperCase() + name.trim().slice(1);

  const category = await Category.create({ name: formattedName });
  return Response.json(category, { status: 201 });
}
