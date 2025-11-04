import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact"; // You'll create this model below

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, subject, state, district, address } = body;

    if (!name || !phone || !state || !district || !address) {
      return NextResponse.json(
        { message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    await connectDB();

    await Contact.create({
      name,
      phone,
      subject,
      state,
      district,
      address,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
