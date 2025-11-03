import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Warranty from "@/models/Warranty";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const serial = searchParams.get("serial");
    const phone = searchParams.get("phone");

    if (serial) {
      const warranty = await Warranty.findOne({ serialNumber: serial });
      if (!warranty)
        return NextResponse.json({ message: "Warranty not found" }, { status: 404 });
      return NextResponse.json(warranty);
    }

    if (phone) {
      const warranties = await Warranty.find({ phone });
      if (!warranties.length)
        return NextResponse.json({ message: "No warranties found" }, { status: 404 });
      return NextResponse.json(warranties);
    }

    return NextResponse.json({ message: "Invalid search" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
