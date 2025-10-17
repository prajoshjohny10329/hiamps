import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find()
    console.log(products);
    
    return Response.json(products, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
