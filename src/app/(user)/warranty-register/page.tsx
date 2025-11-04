"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { stateDistrictData } from "@/data/stateDistricts";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";


export default function WarrantyRegister() {
  const router = useRouter(); // ✅ Initialize router
  const [form, setForm] = useState({
    serialNumber: "",
    userName: "",
    phone: "",
    email: "",
    category: "",
    productID: "",
    purchaseDate: "",
    purpose: "",
    state: "",
    district: "",
    address: "",
  });

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [districts, setDistricts] = useState<string[]>([]);

  // Fetch categories
  useEffect(() => {
    fetch("/api/admin/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => toast.error("Failed to load categories"));
  }, []);

  useEffect(() => {
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch(() => toast.error("Failed to load product names"));
}, []);


  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Update district options when state changes
    if (name === "state") {
      setDistricts(stateDistrictData[value] || []);
      setForm((prev) => ({ ...prev, state: value, district: "" }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Handle submit
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
        productID: "",
        purchaseDate: "",
        purpose: "",
        state: "",
        district: "",
        address: "",
      });
      setDistricts([]);
      setTimeout(() => {
        router.push(`/warranty-check?serial=${form.serialNumber}`);
      }, 1000);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <section>
      <Breadcrumb
        title={"Product Warranty Registration"}
        pages={["Warranty Registration"]}
      />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            <div className="w-full bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="serialNumber" className="block mb-2.5">
                      Serial Number <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="serialNumber"
                      placeholder="Serial Number"
                      value={form.serialNumber}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  <div className="w-full"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="userName" className="block mb-2.5">
                      User Name <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="userName"
                      placeholder="Full Name"
                      value={form.userName}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="phone" className="block mb-2.5">
                      Phone Number <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="email" className="block mb-2.5">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email (optional)"
                      value={form.email}
                      onChange={handleChange}
                      className="rounded-md border border-gray-3 text-dark placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="category" className="block mb-2.5">
                      Product Category <span className="text-red">*</span>
                    </label>

                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark bg-white placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat: any) => (
                        <option key={cat.name} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full">
                    <label htmlFor="productID" className="block mb-2.5">
                      Product Name <span className="text-red">*</span>
                    </label>

                    <select
                      name="productID"
                      value={form.productID}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark bg-white placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    >
                      <option value="">Select You Product</option>
                      {products.map((pro: any) => (
                        <option key={pro.name} value={pro._id}>
                          {pro.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="state" className="block mb-2.5">
                      State <span className="text-red">*</span>
                    </label>

                    <select
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark bg-white placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    >
                      <option value="">Select State</option>
                      {Object.keys(stateDistrictData).map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full">
                    <label htmlFor="district" className="block mb-2.5">
                      District <span className="text-red">*</span>
                    </label>

                    <select
                      name="district"
                      value={form.district}
                      onChange={handleChange}
                      required
                      className="w-full ttext-dark bg-white rounded-md border border-gray-3 py-3 pl-5 pr-9 duration-200 appearance-none outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      disabled={!districts.length}
                    >
                      <option value="">Select District</option>
                      {districts.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="address" className="block mb-2.5">
                      Address <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="purpose" className="block mb-2.5">
                      Purpose <span className="text-red">*</span>
                    </label>

                    <select
                      name="purpose"
                      value={form.purpose}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark bg-white placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    >
                      <option value="">Select Purpose </option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                        <option value="Factory">Factory</option>
                        <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="purchaseDate" className="block mb-2.5">
                      purchaseDate <span className="text-red">*</span>
                    </label>

                    <input
                      type="date"
                      name="purchaseDate"
                      value={form.purchaseDate}
                      onChange={handleChange}
                      required
                      className="rounded-md border border-gray-3 text-dark placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>
                  <div className="w-full">
                    
                    <button
                  type="submit"
                  className="inline-flex font-medium text-white bg-red-dark mt-9 hover:bg-red py-2.5 px-5 rounded-md ease-out duration-200 hover:bg-red-dark-dark"
                >
                  Resgister Your Product
                </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
