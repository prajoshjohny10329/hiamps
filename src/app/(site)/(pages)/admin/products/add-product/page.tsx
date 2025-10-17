"use client";
import { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import Breadcrumb from "@/components/Common/Breadcrumb";
import toast from "react-hot-toast";

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

export default function AddProductPage() {
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    description: "",
    price: "",
    warranty:"",
    category: "",
    image: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [uploading, setUploading] = useState(false);

  // 🧭 Fetch categories from MongoDB
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/admin/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("❌ Please upload a valid image file (jpeg, png, gif, webp)");
      e.target.value = "";
      return;
    }

    setUploading(true);

    const formDataImage = new FormData();
    formDataImage.append("file", file);

    try {
      const res = await axios.post("/api/upload", formDataImage);
      setFormData((prev) => ({ ...prev, image: res.data.url }));
      toast.success("✅ Product Image uploaded successfully!");
    } catch {
      toast.error("Product Image Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/products/add-products", formData);
      toast.success("Product added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Error adding product');
    }
  };

  return (
    <>
      <Breadcrumb title={"Add New Product"} pages={["Add New Product"]} />
      <div className="max-w-[1170px] mx-auto p-6 bg-white shadow-md rounded-lg mt-[30px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Product Name */}
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
            <div className="w-full">
              <label htmlFor="name" className="block mb-2.5">
                Product Name <span className="text-red">*</span>
              </label>
              <input
                name="name"
                placeholder="Hi-Amps Red Series – Solar Battery (C10)"
                onChange={handleChange}
                value={formData.name}
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="price" className="block mb-2.5">
                Price <span className="text-red">*</span>
              </label>
              <input
                name="price"
                type="number"
                placeholder="1000/-"
                onChange={handleChange}
                value={formData.price}
                className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none duration-200"
              />
            </div>
          </div>

          {/* Description */}
          <div className="w-full mb-5">
            <label htmlFor="description" className="block mb-2.5">
              Description <span className="text-red">*</span>
            </label>
            <input
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={formData.description}
              className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none duration-200"
              required
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
            {/* 🧩 Category Dropdown */}
            <div className="w-full mb-5">
              <label htmlFor="category" className="block mb-2.5">
                Category <span className="text-red">*</span>
              </label>
              <select
                name="category"
                onChange={handleChange}
                value={formData.category}
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
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
              <label htmlFor="warranty" className="block mb-2.5">
                Warranty <span className="text-red">*</span>
              </label>
              <input
                name="warranty"
                type="number"
                placeholder="12 (Month)"
                onChange={handleChange}
                value={formData.warranty}
                className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
            {/* 🖼️ Image Upload */}
            <div className="w-full">
              <label htmlFor="image" className="font-medium">
                Product Image<span className="text-red">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                required
                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200"
              />
            </div>

            <div className="w-full">
              {uploading && (
                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <div className="w-5 h-5 border-2 border-red-dark border-t-transparent rounded-full animate-spin"></div>
                  <span className="animate-bounce text-red">Uploading...</span>
                </div>
              )}

              {formData.image && !uploading && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded mt-2 border"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-dark hover:bg-red-light text-white py-2 rounded"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
