import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWarranty extends Document {
  serialNumber: string;
  userName: string;
  phone: string;
  email?: string;
  category: string;
  purchaseDate: Date;
  warrantyYears: number;
  viewed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const warrantySchema = new Schema<IWarranty>(
  {
    serialNumber: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    category: { type: String, required: true },
    purchaseDate: { type: Date, required: true },
    warrantyYears: { type: Number, default: 2 },
    viewed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Warranty: Model<IWarranty> =
  mongoose.models.Warranty || mongoose.model<IWarranty>("Warranty", warrantySchema);

export default Warranty;
