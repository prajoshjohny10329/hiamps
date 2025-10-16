import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Category from "@/models/Category";

export async function POST(req: Request) {
  try {
    const { name, description, price, image, categoryName } = await req.json();

    if (!name || !categoryName) {
      return Response.json({ error: "Name and category are required" }, { status: 400 });
    }

    await connectDB();

    // Check for existing category or create one
    let category = await Category.findOne({ name: categoryName });
    if (!category) {
      category = await Category.create({ name: categoryName });
    }

    // Create product
    const product = await Product.create({
      name,
      description,
      price,
      image,
      category: category._id,
    });

    return Response.json(product, { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().populate("category");
    return Response.json(products, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
