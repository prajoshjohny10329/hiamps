import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Warranty from "@/models/Warranty";
import Product from "@/models/Product";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const { serialNumber, userName, phone, email,  productID, purchaseDate, state, district, address, purpose  } = data;

    if (!serialNumber || !userName || !phone || !productID || !purchaseDate) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const product = await Product.findOne({ _id: productID });
    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    const sWarranty = product.warranty;
    const pWarranty = product.pWarranty;
    const category = product.category
    const productName = product.name

    const existing = await Warranty.findOne({ serialNumber });
    if (existing) {
      return NextResponse.json({ message: "Product already registered" }, { status: 409 });
    }

    const warrantyInput = new Warranty({
      serialNumber,
      userName,
      phone,
      email,
      category,
      productName,
      purchaseDate,
      sWarranty,
      pWarranty,
      state,
      district,
      address,
      purpose
    });

    await warrantyInput.save();
    return NextResponse.json(
      
  {
    message: "Product registered successfully!",
    redirectUrl: `/warranty-check?serial=${warrantyInput.serialNumber}`
  },
  { status: 201 }
);

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}


export async function GET() {
  try {
    await connectDB();
    const warranties = await Warranty.find().sort({ createdAt: -1 });
    console.log('warranties Get');
    console.log(warranties);
    
    return NextResponse.json(warranties);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
