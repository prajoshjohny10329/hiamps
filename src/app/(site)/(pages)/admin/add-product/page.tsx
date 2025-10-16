"use client";
import { useState, FormEvent } from "react";
import axios from "axios";

interface ProductForm {
  name: string;
  description: string;
  price: number | string;
  categoryName: string;
  image: string;
}

export default function AddProductPage() {
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    description: "",
    price: "",
    categoryName: "",
    image: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const formDataImage = new FormData();
    formDataImage.append("file", file);

    try {
      const res = await axios.post("/api/upload", formDataImage);
      setFormData((prev) => ({ ...prev, image: res.data.url }));
      alert("✅ Image uploaded successfully!");
    } catch {
      alert("❌ Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/products", formData);
      alert("✅ Product added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Error adding product");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-[200px]">
      <h1 className="text-2xl font-semibold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="name" placeholder="Product Name" onChange={handleChange} className="border p-2 rounded" required />
        <input name="description" placeholder="Description" onChange={handleChange} className="border p-2 rounded" />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="border p-2 rounded" />
        <input name="categoryName" placeholder="Category" onChange={handleChange} className="border p-2 rounded" required />

        <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 rounded" />
        {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
        {formData.image && (
          <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded mt-2" />
        )}

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Add Product</button>
      </form>
    </div>
  );
}
