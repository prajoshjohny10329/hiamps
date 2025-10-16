import mongoose, { Schema, Document, Model } from "mongoose";
import { ICategory } from "./Category";

export interface IProduct extends Document {
  name: string;
  description?: string;
  price?: number;
  image?: string;
  category: mongoose.Types.ObjectId | ICategory;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: String,
    price: Number,
    image: String,
    category: { type: Schema.Types.ObjectId, ref: "Category" }, // ✅ Must match Category model name exactly
  },
  { timestamps: true }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
