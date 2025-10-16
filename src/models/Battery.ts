import mongoose, { Schema, models } from "mongoose";

const batterySchema = new Schema(
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

const Battery = models.Battery || mongoose.model("Battery", batterySchema);
export default Battery;
