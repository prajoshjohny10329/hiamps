"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";


import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
  const { ref, inView } = useInView({
    triggerOnce: false, // animation repeats on scroll up/down
    threshold: 0.2,
  });

  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // 🧭 Fetch single product (memoized)
  const fetchProduct = useCallback(async () => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      toast.error("Failed to load product details");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]); // ✅ depends only on `id`

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]); // ✅ no warning now

  if (loading) return <p className="text-center text-black mt-10">Loading...</p>;

  if (!product) return <p className="text-center text-black mt-10">Product not found.</p>;

  return (
    <main className="p-6 min-h-screen" style={{ background: 'red' }}>
    <Breadcrumb title={"View Single Product"} pages={["View Single Product"]} />
    <section ref={ref} className="mb-5" >
          <div className="xl:container ">
            <div className=" bg-white lg:m-20 m-0 rounded-lg shadow-xl  overflow-hidden px-8 pb-8 pt-0 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
    
              <div className="w-full">
                <div className="-mx-4 flex w-full flex-wrap items-center flex-col-reverse md:flex-row-reverse">
                  {/* Left Image Section */}
                  <motion.div
                    className="flex-1 mt-20  justify-center relative  w-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={450}
                      height={550}
                      className="mx-auto max-w-full transition delay-150 duration-300 -z-10 contrast-125"
                    />
                  </motion.div>
    
                  {/* Right Text Section */}
                  <motion.div
                    className="w-full flex-1 px-4 lg:w-1/2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="max-w-[565px] lg:ml-auto">
                      <h4 className="mb-3 text-xl font-medium text-red-dark">
                        {product.category}
                      </h4>
                      <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl  md:leading-tight dark:text-white">
                        {product.name}
                      </h2>
                      <div>
                          <p className="text-base text-black leading-relaxed mb-4">
                            <strong>Price:</strong> ₹{product.price}
                          </p>
                          <p className="text-base text-black leading-relaxed mb-4">
                            <strong>Warranty:</strong> {product.warranty} months
                          </p>
                        </div>
    
                      <p className="text-base text-black leading-relaxed mb-4">
                        <strong>Description:</strong> {product.description}
                      </p>
    
                      <div className="flex gap-3 mt-9">
                      <button
                        className="justify-center py-3 px-7 text-white bg-red-dark font-medium rounded-md ease-out duration-200 hover:bg-green"
                      >
                        Enquiry Now
                      </button>
                    </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
