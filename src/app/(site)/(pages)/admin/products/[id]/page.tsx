"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";


interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  createdAt: string;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/admin/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

      {product.image && (
        <Image
          width={300}
          height={64}
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}

      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}</p>

      <button
        onClick={() => history.back()}
        className="mt-6 bg-gray-700 text-white px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
}
