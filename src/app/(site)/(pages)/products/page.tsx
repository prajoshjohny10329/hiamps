"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "@/components/Common/Breadcrumb";
import toast, { Toaster } from "react-hot-toast";

interface Product {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  category: string;
}

export default function UserProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading)
    return <p className="text-center py-10">Loading products...</p>;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumb title="Products" pages={["products"]} />

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
          >
            <img
              src={product.image || "/placeholder.png"}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              {product.price && (
                <p className="text-blue font-medium">₹ {product.price}</p>
              )}
              <p className="text-sm text-gray-700 line-clamp-3">
                {product.description}
              </p>

              {/* Buttons */}
              <div className="mt-2 flex gap-2">
                <button
                  className="flex-1 text-center bg-gray text-gray-800 py-1 rounded hover:bg-gray-300"
                >
                  View Warranty
                </button>
              </div>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-10">
            No products available.
          </p>
        )}
      </div>
    </>
  );
}
