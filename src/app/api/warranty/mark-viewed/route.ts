import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Warranty from "@/models/Warranty";

export async function PUT() {
  try {
    await connectDB();

    // Update all warranties to viewed: true
    await Warranty.updateMany({ viewed: false }, { viewed: true });
    console.log("All warranties marked as viewed");
    
    return NextResponse.json({ message: "All warranties marked as viewed" }, { status: 200 });
  } catch (error) {
    console.error("Error updating viewed status:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
