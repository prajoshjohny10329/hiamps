import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Battery from "@/models/Battery";

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();
    console.log("its came api");
    console.log(data);
    
    
    const { serialNumber, userName, phone, email, productType, purchaseDate } = data;

    if (!serialNumber || !userName || !phone || !productType || !purchaseDate) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const existing = await Battery.findOne({ serialNumber });
    if (existing) {
      return NextResponse.json({ message: "Battery already registered" }, { status: 409 });
    }

    const battery = new Battery({
      serialNumber,
      userName,
      phone,
      email,
      productType,
      purchaseDate,
    });

    await battery.save();

    return NextResponse.json({ message: "Battery registered successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
