"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  warranty: number;
  image: string;
  category: string;
}

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // 🧭 Fetch single product (memoized)
  const fetchProduct = useCallback(async () => {
    try {
      const res = await axios.get(`/api/admin/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      toast.error("Failed to load product details");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]); // ✅ depends only on `id`

  // 🗑️ Delete product
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`/api/admin/products/${id}`);
      toast.success("Product deleted successfully");
      router.push("/admin/products");
    } catch (err) {
      toast.error("Failed to delete product");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]); // ✅ no warning now

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-[150px]">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="rounded border"
          />
        </div>

        <div>
          <p className="mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="mb-2">
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p className="mb-2">
            <strong>Warranty:</strong> {product.warranty} months
          </p>
          <p className="mb-2">
            <strong>Description:</strong> {product.description}
          </p>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => router.push(`/admin/products/edit/${product._id}`)}
          className="bg-blue text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-dark hover:bg-red-light text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
