import mongoose, { Schema, Document, Model } from "mongoose";

// 1️⃣ Define an interface for your document
export interface IBattery extends Document {
  serialNumber: string;
  userName: string;
  phone: string;
  email?: string;
  productType: string;
  purchaseDate: Date;
  warrantyYears: number;
  createdAt: Date;
  updatedAt: Date;
}

// 2️⃣ Define your schema using the interface
const batterySchema = new Schema<IBattery>(
  {
    serialNumber: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    productType: { type: String, required: true },
    purchaseDate: { type: Date, required: true },
    warrantyYears: { type: Number, default: 2 },
  },
  { timestamps: true }
);

// 3️⃣ Explicitly type your model to avoid union issues
const Battery: Model<IBattery> =
  mongoose.models.Battery || mongoose.model<IBattery>("Battery", batterySchema);

export default Battery;
