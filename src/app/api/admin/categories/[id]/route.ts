import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  try {
    const deleted = await Category.findByIdAndDelete(params.id);
    if (!deleted) {
      return Response.json({ error: "Category not found" }, { status: 404 });
    }

    return Response.json({ message: "Category deleted" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
