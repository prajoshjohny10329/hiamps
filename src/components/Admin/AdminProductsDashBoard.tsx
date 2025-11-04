"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  warranty: number;
  pWarranty: number;
  image: string;
}

export default function AdminProductsDashBoard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/admin/dash-board/products");
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

  return (
    <section className="p-3 max-h-[375px] overflow-y-scroll">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
          <h2 className="text-lg font-semibold text-black">
            Product List
          </h2>
          <Link
            href={"/admin/products"}
            className="bg-red-dark hover:bg-red text-white px-4 py-2 rounded-md text-sm transition"
          >
            View Product
          </Link>
        </div>

      {loading ? (
          <div className="flex flex-col justify-center items-center h-[375px] ">
        <div className="w-12 h-12 border-4 border-red-dark border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-black font-medium">Loading products...</p>
      </div>
      ):
      (
      <div>
        {products.length === 0 ? (
            <p className="text-2xl text-center font-bold text-red-dark mt-20 ">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {products.map((product) => (
                <Link href={`/admin/products/${product._id}`} key={product._id}>
                <div
                  className="bg-white flex flex-col sm:flex-row shadow-md p-4"
                >
                  <div className="basis-1/3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={600}
                      className="rounded "
                    />
                  </div>
                  <div className="basis-2/3 flex justify-start p-4 items-center">
                    <div>
                      <h3 className="text-black text-lg font-semibold mb-3">
                        {product.name}
                      </h3>
                      <p className="pb-1 font-semibold text-red-dark">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          )}
      </div>
      )}
    </section>
  );
}
