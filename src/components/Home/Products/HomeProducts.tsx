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

export default function HomePageProducts() {
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
      <div className="flex flex-col justify-center items-center min-h-fit bg-white">
        <div className="w-12 h-12 border-4 border-red-dark border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-white font-medium">Loading products...</p>
      </div>
    );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className=" bg-white md:pt-10 lg:m-20 m-0 rounded-lg shadow-xl  overflow-hidden px-0 pb-8 pt-3 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
        <div className="flex">
                <div className="flex-1" >
                    <h4 className="mb-3 text-xl font-medium text-red-dark">
                    Complete Power Solutions Under One Roof
                  </h4>
                  <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                    Our Products
                  </h2>
                </div>
            </div>
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            
        {products.slice(0, 3).map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
          >
            <Image
              width={600}
              height={600}
              src={product.image || "/placeholder.png"}
              alt={product.name}
              className="w-full h-60 object-contain brightness-110" 
              style={{background:"red"}}
            />
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h2 className="font-semibold text-black text-xl">{product.name}</h2>
              <div className="flex justify-between items-center">
                <p className="text-sm text-red-dark">{product.category}</p>
                {product.price && (
                  <p className="text-black font-extrabold text-xl">₹ {product.price}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="mt-2 flex gap-2">
                <Link
                        href={`/products/${product._id}`}
                        className="bg-red-dark hover:bg-red text-white mt-5 px-10  py-2 rounded"
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
       <div>
            <p className="text-black text-center mt-10 mx-4 mb-4">From long-lasting tubular batteries to advanced lithium systems, Hi-Amps delivers dependable energy for every need. Each product reflects our promise of “Quality Beyond Your Need” — engineered for performance, durability, and trust.</p>
            <div className="flex justify-center">
                <Link href={'/products'} className=" justify-center py-3 px-7 text-white bg-red-dark font-medium rounded-md ease-out duration-200 hover:bg-red"> View All Our Products
                              </Link>
            </div>
        </div>

      </section>
      
    </>
  );
}
