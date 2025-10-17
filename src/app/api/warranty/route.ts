import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Warranty from "@/models/Warranty";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    const { serialNumber, userName, phone, email, category, purchaseDate } = data;

    console.log(category);
    

    if (!serialNumber || !userName || !phone || !category || !purchaseDate) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const existing = await Warranty.findOne({ serialNumber });
    if (existing) {
      return NextResponse.json({ message: "Product already registered" }, { status: 409 });
    }

    const warranty = new Warranty({
      serialNumber,
      userName,
      phone,
      email,
      category,
      purchaseDate,
    });

    await warranty.save();

    return NextResponse.json({ message: "Product registered successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const warranties = await Warranty.find().populate("category", "name").sort({ createdAt: -1 });
    console.log('warranties Get');
    console.log(warranties);
    
    return NextResponse.json(warranties);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
