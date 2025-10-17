import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function POST(req: Request) {
  try {
    const { name, description, price, image, category, warranty } = await req.json();


    if (!name || !category) {
      return Response.json({ error: "Name and category are required" }, { status: 400 });
    }

    await connectDB();

    console.log(warranty);

    // Create product
    const product = await Product.create({
      name,
      description,
      price,
      image,
      category,
      warranty,
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
