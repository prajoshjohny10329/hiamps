import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Category from "@/models/Category";

export async function GET() {
  await connectDB();
  const products = await Product.find().populate("category", "name");
  return NextResponse.json(products);
}
