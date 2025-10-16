"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Category from "@/models/Category";

interface Product {
  _id: string;
  name: string;
  category: { _id: string; name: string };
  price: number;
  image: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(products);
  

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/admin/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 mt-[200px]">
      <h1 className="text-3xl font-bold mb-6">Admin - Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Image</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="p-3 border-b">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded" />
                  )}
                </td>
                <td className="p-3 border-b">{product.name}</td>
                <td className="p-3 border-b">{product.category?.name}</td>
                <td className="p-3 border-b">₹{product.price}</td>
                <td className="p-3 border-b text-center">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-3 py-1 text-sm bg-red text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
