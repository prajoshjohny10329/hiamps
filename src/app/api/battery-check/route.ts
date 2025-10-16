import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Battery from "@/models/Battery";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { serialNumber } = await req.json();

    if (!serialNumber) {
      return NextResponse.json({ message: "Serial number is required" }, { status: 400 });
    }

    const battery = await Battery.findOne({ serialNumber });
    if (!battery) {
      return NextResponse.json({ message: "Battery not found" }, { status: 404 });
    }

    // Calculate warranty validity
    const purchaseDate = new Date(battery.createdAt);
    const warrantyYears = battery.warrantyYears || 2;
    const warrantyEnd = new Date(purchaseDate);
    warrantyEnd.setFullYear(purchaseDate.getFullYear() + warrantyYears);

    const today = new Date();
    const remainingDays = Math.ceil((warrantyEnd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    let warrantyStatus;
    if (remainingDays > 0) {
      warrantyStatus = `Valid for ${remainingDays} more day(s)`;
    } else {
      warrantyStatus = "Warranty expired";
    }

    return NextResponse.json({
      serialNumber: battery.serialNumber,
      userName: battery.userName,
      productType: battery.productType,
      purchaseDate: purchaseDate.toDateString(),
      warrantyYears,
      warrantyStatus,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
