"use client";
import { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
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
  pWarranty: number | string;
  category: string;
  image: string;
}

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    description: "",
    price: "",
    warranty: "",
    pWarranty: "",
    category: "",
    image: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [uploading, setUploading] = useState(false);

  // 🧭 Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/admin/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  // 🧩 Handle field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🖼️ Handle image upload
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
      toast.error("❌ Product Image Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // 🧾 Submit form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/products/add-products", formData);

      if (res.status === 201) {
        toast.success("✅ Product added successfully!");
        const productId = res.data._id;
        router.push(`/admin/products/${productId}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Error adding product");
    }
  };

  // ✅ Enable button only if all fields are filled
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.description.trim() !== "" &&
    formData.price !== "" &&
    formData.warranty !== "" &&
    formData.category.trim() !== "" &&
    formData.image.trim() !== "" &&
    !uploading;

  return (
    <>
      <Breadcrumb title={"Add New Product"} pages={["Add New Product"]} />
      <section className=" bg-white lg:m-20 m-0 rounded-lg shadow-xl  overflow-hidden px-8 pb-8 pt-0 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
        <div className="max-w-[1170px] mx-auto p-6 bg-white rounded-lg mt-[30px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Product Name & Price */}
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
            <div className="w-full">
              <label htmlFor="name" className="block mb-2.5 text-black">
                Product Name <span className="text-red">*</span>
              </label>
              <input
                name="name"
                placeholder="Hi-Amps Red Series – Solar Battery (C10)"
                onChange={handleChange}
                value={formData.name}
                className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="price" className="block mb-2.5 text-black">
                Price <span className="text-red">*</span>
              </label>
              <input
                name="price"
                type="number"
                placeholder="1000/-"
                onChange={handleChange}
                value={formData.price}
                className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="w-full mb-5">
            <label htmlFor="description" className="block mb-2.5 text-black">
              Description <span className="text-red">*</span>
            </label>
            <input
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={formData.description}
              className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none"
              required
            />
          </div>

          {/* Category & Warranty */}
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
            <div className="w-full">
              <label htmlFor="category" className="block mb-2.5 text-black">
                Category <span className="text-red">*</span>
              </label>
              <select
                name="category"
                onChange={handleChange}
                value={formData.category}
                className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none"
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
              <label htmlFor="warranty" className="block mb-2.5 text-black">
                Warranty <span className="text-red">*</span>
              </label>
              <input
                name="warranty"
                type="number"
                placeholder="12 (Month)"
                onChange={handleChange}
                value={formData.warranty}
                className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="pWarranty" className="block mb-2.5 text-black">
                Pro-Rate Warranty <span className="text-red">*</span>
              </label>
              <input
                name="pWarranty"
                type="number"
                placeholder="12 (Month)"
                onChange={handleChange}
                value={formData.pWarranty}
                className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
            <div className="w-full">
              <label htmlFor="image" className="font-medium">
                Product Image <span className="text-red">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="rounded-md border border-gray-3 bg-gray-1 w-full py-2.5 px-5 outline-none"
                required
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
                <Image
                  width={128}
                  height={128}
                  src={formData.image}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded mt-2 border"
                />
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`py-2 rounded text-white transition-colors ${
              isFormValid
                ? "bg-red-dark hover:bg-red-light cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {uploading ? "Uploading..." : "Add Product"}
          </button>

          {!isFormValid && (
            <p className="text-sm text-gray-500 mt-1">
              ⚠️ Please fill all fields and upload an image to continue.
            </p>
          )}
        </form>
      </div>
      </section>
      
    </>
  );
}
