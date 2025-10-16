import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Battery from "@/models/Battery";

export async function GET() {
  try {
    await connectDB();

    const batteries = await Battery.find().sort({ createdAt: -1 }); // latest first
    return NextResponse.json(batteries, { status: 200 });
  } catch (error) {
    console.error("Error fetching batteries:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
