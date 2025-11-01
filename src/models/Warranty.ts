import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWarranty extends Document {
  serialNumber: string;
  userName: string;
  phone: string;
  email?: string;
  category: string;
  productName: string;
  purchaseDate: Date;
  warrantyMonths: number;
  viewed: boolean;
  createdAt: Date;
  updatedAt: Date;
  state: string;
  district: string;
  address: string;

}

const warrantySchema = new Schema<IWarranty>(
  {
    serialNumber: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    category: { type: String, required: true },
    productName: { type: String, required: true },
    purchaseDate: { type: Date, required: true },
    warrantyMonths: { type: Number },
    viewed: { type: Boolean, default: false },
    state: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
      
  },
  { timestamps: true }
);

const Warranty: Model<IWarranty> =
  mongoose.models.Warranty || mongoose.model<IWarranty>("Warranty", warrantySchema);

export default Warranty;
