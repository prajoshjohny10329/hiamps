"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState } from "react";

export default function BatteryRegister() {
  const [form, setForm] = useState({
    serialNumber: "",
    userName: "",
    phone: "",
    email: "",
    productType: "",
    purchaseDate: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");

    const res = await fetch("/api/battery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <>
    {/* <!-- ===== Breadcrumb Section Start ===== --> */}
      <section>
        <Breadcrumb title={"Battery Registration"} pages={["Battery Registration"]} />
      </section>
      {/* <!-- ===== Breadcrumb Section End ===== --> */}
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl text-red-dark font-semibold mb-4 text-center">
        Battery Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="serialNumber"
          placeholder="Serial Number"
          value={form.serialNumber}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="userName"
          placeholder="Full Name"
          value={form.userName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="productType"
          placeholder="Product Type"
          value={form.productType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="date"
          name="purchaseDate"
          value={form.purchaseDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
    </>
  );
}
