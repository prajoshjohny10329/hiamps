"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Category from "@/models/Category";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  warranty: number;
  image: string;
}

export default function UserProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text -center mt-10">Loading products...</p>;

  return (
    <section>
      <Breadcrumb title={"Admin Products"} pages={["Admin Products"]} />
      <section className=" bg-white md:pt-10 lg:m-20 m-0 rounded-lg shadow-xl  overflow-hidden px-0 pb-8 pt-3 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex justify-start">
            <Link
              href="/admin/products/add-product"
              className="flex items-center m-3 rounded-md gap-2.5 py-3 px-4.5 ease-out bg-red-dark text-white  duration-200 hover:bg-green-dark hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <circle cx="12" cy="12" r="10" fill="#ff0000" />
                <path
                  d="M12 7v10M7 12h10"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Add New Product
            </Link>
            <Link
              href="/admin/category"
              className="flex items-center m-3 rounded-md gap-2.5 py-3 px-4.5 ease-out bg-red-dark text-white  duration-200 hover:bg-green-dark hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <circle cx="12" cy="12" r="10" fill="#ff0000" />
                <path
                  d="M12 7v10M7 12h10"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Category List
            </Link>
          </div>

          {products.length === 0 ? (
            <p className="text-2xl text-center font-bold text-red-dark mt-20 ">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white flex flex-col sm:flex-row rounded shadow-md p-4"
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
                      <h3 className="text-black text-xl font-semibold mb-3">
                        {product.name}
                      </h3>
                      <p className="px-3 pb-2 font-semibold text-red">
                        {product.category}
                      </p>
                      <p className="px-3 pb-2 font-semibold text-black">
                        <strong>{product.warranty}</strong> Months
                      </p>
                      <p className="px-3 pb-4 font-semibold text-black">
                        ₹{product.price}
                      </p>

                      <Link
                        href={`/admin/products/${product._id}`}
                        className="bg-red-dark hover:bg-red text-white mt-13 px-10  py-2 rounded"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
