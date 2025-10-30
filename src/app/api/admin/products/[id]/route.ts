import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

// 🟢 Get single product
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    await connectDB();
    const product = await Product.findById(id);
    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }
    return Response.json(product, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

// 🟠 Update product
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    const data = await req.json();
    await connectDB();
    const updatedProduct = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedProduct) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }
    return Response.json(updatedProduct, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to update product" }, { status: 500 });
  }
}

// 🔴 Delete product
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    await connectDB();
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }
    return Response.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
