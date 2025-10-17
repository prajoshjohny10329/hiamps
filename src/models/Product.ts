import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description?: string;
  price?: number;
  warranty?: number;
  image?: string;
  category: string; 
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: String,
    price: Number,
    warranty: Number,
    image: String,
    category: { type: String, required: true }, // ✅ simple string (not ObjectId)
  },
  { timestamps: true }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
