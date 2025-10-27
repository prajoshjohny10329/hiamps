"use client";

import { useEffect, useState, FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";

interface Category {
  _id: string;
  name: string;
}

interface ProductForm {
  name: string;
  description: string;
  price: number | string;
  warranty: number | string;
  category: string;
  image: string;
}

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    description: "",
    price: "",
    warranty: "",
    category: "",
    image: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/admin/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/admin/products/${id}`);
        setFormData(res.data);
      } catch (err) {
        toast.error("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid image format");
      return;
    }

    setUploading(true);
    const formDataImage = new FormData();
    formDataImage.append("file", file);

    try {
      const res = await axios.post("/api/upload", formDataImage);
      setFormData((prev) => ({ ...prev, image: res.data.url }));
      toast.success("✅ Image uploaded successfully");
    } catch {
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/api/admin/products/${id}`, formData);
      toast.success("✅ Product updated successfully");
      router.push(`/admin/products/${id}`);
    } catch (err) {
      toast.error("Failed to update product");
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-[1170px] mx-auto p-6 bg-white shadow-md rounded-lg mt-[120px]">
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Product Name + Price */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full">
            <label className="block mb-2.5">Product Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-md border border-gray-300 w-full py-2.5 px-5"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2.5">Price</label>
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="rounded-md border border-gray-300 w-full py-2.5 px-5"
            />
          </div>
        </div>

        {/* Description */}
        <div className="w-full mb-5">
          <label className="block mb-2.5">Description</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 w-full py-2.5 px-5"
          />
        </div>

        {/* Category + Warranty */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full">
            <label className="block mb-2.5">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="rounded-md border border-gray-300 w-full py-2.5 px-5"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full">
            <label className="block mb-2.5">Warranty (months)</label>
            <input
              name="warranty"
              type="number"
              value={formData.warranty}
              onChange={handleChange}
              className="rounded-md border border-gray-300 w-full py-2.5 px-5"
            />
          </div>
        </div>

        {/* Image Upload + Preview */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full">
            <label className="block mb-2.5">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="rounded-md border border-gray-300 w-full py-2.5 px-5"
            />
          </div>

          {formData.image && (
            <div className="w-full flex items-center">
              <Image
                src={formData.image}
                alt="Preview"
                width={100}
                height={100}
                className="rounded border"
              />
            </div>
          )}
        </div>

        {/* Save Button with Spinner */}
        <button
          type="submit"
          disabled={uploading}
          className={`flex justify-center items-center gap-2 text-white py-2 rounded transition duration-300 ${
            uploading
              ? "bg-black cursor-not-allowed"
              : "bg-red-dark hover:bg-red"
          }`}
        >
          {uploading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-green"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
              Uploading...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </div>
  );
}
