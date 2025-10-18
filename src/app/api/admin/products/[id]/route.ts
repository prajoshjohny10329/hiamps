import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
    console.log('hi');
    
  await connectDB();
  try {
    const { id } = await context.params;
    const product = await Product.findById(id);
    console.log(product);
    
    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
