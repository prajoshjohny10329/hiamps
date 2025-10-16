import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Category from "@/models/Category";

interface Params {
  params: { id: string };
}

// PATCH = Update Product
export async function PATCH(req: Request, { params }: Params) {
  await connectDB();
  const { name, description, price, image, categoryName } = await req.json();

  let category = await Category.findOne({ name: categoryName });
  if (!category) category = await Category.create({ name: categoryName });

  const updated = await Product.findByIdAndUpdate(
    params.id,
    { name, description, price, image, category: category._id },
    { new: true }
  );

  if (!updated) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json(updated);
}

// DELETE = Remove Product
export async function DELETE(req: Request, { params }: Params) {
  await connectDB();
  const deleted = await Product.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ message: "Deleted successfully" });
}
