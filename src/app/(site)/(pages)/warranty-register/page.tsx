"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function WarrantyRegister() {
  const [form, setForm] = useState({
    serialNumber: "",
    userName: "",
    phone: "",
    email: "",
    category: "",
    purchaseDate: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/admin/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => toast.error("Failed to load categories"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("Submitting...");

    const res = await fetch("/api/warranty", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    toast.dismiss();

    if (res.ok) {
      toast.success(data.message);
      setForm({
        serialNumber: "",
        userName: "",
        phone: "",
        email: "",
        category: "",
        purchaseDate: "",
      });
    } else {
      toast.error(data.message);
    }
  };

  return (
   <section>
    <Breadcrumb title={"Product Warranty Registration"} pages={["Warranty Registration"]} />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="serialNumber"
            placeholder="Serial Number"
            value={form.serialNumber}
            onChange={handleChange}
            required
            className="border w-full p-2 rounded-md"
          />

          <input
            type="text"
            name="userName"
            placeholder="Full Name"
            value={form.userName}
            onChange={handleChange}
            required
            className="border w-full p-2 rounded-md"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="border w-full p-2 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={handleChange}
            className="border w-full p-2 rounded-md"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="border w-full p-2 rounded-md"
          >
            <option value="">Select Category</option>
            {categories.map((cat: any) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="purchaseDate"
            value={form.purchaseDate}
            onChange={handleChange}
            required
            className="border w-full p-2 rounded-md"
          />

          <button type="submit" className="w-full bg-red text-white py-2 rounded">
            Register Product
          </button>
        </form>
      </div>
   </section>
  );
}
