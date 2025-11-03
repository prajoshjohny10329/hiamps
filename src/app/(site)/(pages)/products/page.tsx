"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "@/components/Common/Breadcrumb";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

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

  // ✅ Loader while fetching data
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-red-dark border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 font-medium">Loading products...</p>
      </div>
    );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumb title="Products" pages={["products"]} />

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
          >
            <Image
              width={600}
              height={600}
              src={product.image || "/placeholder.png"}
              alt={product.name}
              className="w-full h-60 object-contain"
              style={{ background: "red" }}
            />
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h2 className="font-semibold text-black text-xl">
                {product.name}
              </h2>
              <div className="flex justify-between items-center">
                <p className="text-sm text-red-dark">{product.category}</p>
              </div>

              {/* Buttons */}
              <div className="mt-2 flex gap-2">
                <Link
                  href={`/products/${product._id}`}
                  className="bg-red hover:bg-red text-white mt-5 px-10  py-2 rounded"
                >
                  View Product
                </Link>
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
