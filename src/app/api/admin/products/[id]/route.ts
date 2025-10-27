import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

// 🟢 Get single product
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);
    if (!product) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(product, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// 🟠 Update product
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    await connectDB();

    const updated = await Product.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    if (!updated)
      return Response.json({ error: "Product not found" }, { status: 404 });

    return Response.json(updated, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to update product" }, { status: 500 });
  }
}

// 🔴 Delete product (already implemented)
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const deleted = await Product.findByIdAndDelete(params.id);
    if (!deleted)
      return Response.json({ error: "Product not found" }, { status: 404 });
    return Response.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to delete" }, { status: 500 });
  }
}
