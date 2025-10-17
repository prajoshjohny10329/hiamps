import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Warranty from "@/models/Warranty";

export async function GET(req: Request, { params }: { params: { serial: string } }) {
  try {
    await connectDB();

    const warranty = await Warranty.findOne({ serialNumber: params.serial })

    if (!warranty) {
      return NextResponse.json({ message: "Warranty not found" }, { status: 404 });
    }

    return NextResponse.json(warranty);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
