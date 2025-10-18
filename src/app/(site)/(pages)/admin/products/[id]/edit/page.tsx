"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";


interface Product {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  category?: string;
}

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<Product>({
    _id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/admin/products/${id}`);
      setFormData(res.data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload (mocked — you can integrate Cloudinary or similar)
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result as string });
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Update product
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.put(`/api/admin/products/${id}`, formData);
    alert("Product updated successfully!");
    router.push("/admin/products");
  };

  if (loading) return <p className="text-center py-10">Loading product...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-semibold mb-4 text-center">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Custom Image Upload */}
        <div>
          <label className="block font-medium mb-1">Product Image</label>
          <label className="inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
            Browse
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          {uploading && (
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-blue-600"></div>
              Uploading...
            </div>
          )}
          {formData.image && (
            <Image
              src={formData.image}
              alt="Preview"
              className="w-32 h-32 object-cover rounded mt-3 border"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 duration-200"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
