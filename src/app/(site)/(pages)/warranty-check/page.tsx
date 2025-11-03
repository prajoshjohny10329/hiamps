"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState } from "react";
import { toast } from "react-hot-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

export default function WarrantyCheck() {
  const [searchType, setSearchType] = useState("serial");
  const [searchValue, setSearchValue] = useState("");
  const [warranties, setWarranties] = useState<any[]>([]);
  const [selectedWarranty, setSelectedWarranty] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      toast.error("Please enter a value");
      return;
    }

    setLoading(true);
    setWarranties([]);
    setSelectedWarranty(null);

    try {
      const res = await fetch(`/api/warranty/search?${searchType}=${searchValue}`);
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Warranty not found");
      } else {
        if (Array.isArray(data)) {
          setWarranties(data);
          toast.success(`Found ${data.length} warranties`);
        } else {
          setSelectedWarranty(data);
          toast.success("Warranty found!");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    const card = document.getElementById("warranty-card");
    if (!card) return;

    const canvas = await html2canvas(card);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth - 40;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 20, 20, imgWidth, imgHeight);
    pdf.save("WarrantyCard.pdf");
  };

  return (
    <section>
      <Breadcrumb title="Product Warranty Check" pages={["Warranty Check"]} />

      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column — Search Form */}
          <div>
            <h2 className="text-2xl font-semibold text-red-dark mb-4">
              Check Your Product Warranty
            </h2>
            <p className="text-black mb-4 text-sm">
              Search your product warranty using either <strong>Serial Number</strong> or{" "}
              <strong>Phone Number</strong>.
            </p>

            <form
              onSubmit={handleCheck}
              className="flex flex-col gap-4 p-4 bg-gray-50 rounded-lg"
            >
              {/* Search Type */}
              <div className="flex gap-6 text-black text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="serial"
                    checked={searchType === "serial"}
                    className="accent-red-dark cursor-pointer"
                    onChange={() => setSearchType("serial")}
                  />
                  Serial Number
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="phone"
                    checked={searchType === "phone"}
                    className="accent-red-dark cursor-pointer"
                    onChange={() => setSearchType("phone")}
                  />
                  Phone Number
                </label>
              </div>

              {/* Input */}
              <input
                type={searchType === "phone" ? "tel" : "text"}
                placeholder={
                  searchType === "serial"
                    ? "Enter your product serial number"
                    : "Enter your registered phone number"
                }
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                required
              />

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-red-dark hover:bg-red text-white py-2 rounded-md transition font-semibold"
              >
                {loading ? "Checking..." : "Check Warranty"}
              </button>
            </form>

            {loading && (
              <p className="text-center mt-4 text-gray-500 text-sm">
                Checking warranty details...
              </p>
            )}

            {/* Show list if multiple warranties */}
            {warranties.length > 1 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Select Your Product:
                </h3>
                <ul className="space-y-2">
                  {warranties.map((item) => (
                    <li
                      key={item._id}
                      onClick={() => setSelectedWarranty(item)}
                      className={`p-3 border rounded-md cursor-pointer hover:bg-gray-100 transition ${
                        selectedWarranty?._id === item._id
                          ? "border-red-500 bg-gray-50"
                          : "border-gray-300"
                      }`}
                    >
                      <p className="font-medium text-red-dark">{item.productName}</p>
                      <p className="text-sm text-black">
                        Serial: {item.serialNumber} — Purchased on{" "}
                        {new Date(item.purchaseDate).toLocaleDateString("en-IN")}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column — Warranty Card */}
          <div>
            {selectedWarranty && (
              <div className="animate-fadeIn">
                <div
                  id="warranty-card"
                  className="relative bg-white p-8 border-4 border-blue-600 rounded-xl shadow-xl text-dark font-sans mx-auto mt-4 max-w-md"
                  // style={{
                  //   backgroundImage: "url('/images/pages/products/hi-amps-all-products.webp')",
                  //   backgroundSize: "120px",
                  //   backgroundPosition: "right",
                  //   backgroundRepeat: "no-repeat",
                  // }}
                >
                  {/* Logo */}
                  <div className="flex justify-center mb-3">
                    {/* <div className="w-full flex justify-center">
                      <Image
                      width={50}
                      height={50}
                      src="/images/logo/hiamps-logo.webp"
                      alt="HiAmps Logo"
                      className="w-24 h-auto"
                    />
                    </div> */}
                  </div>

                  <h2 className="text-2xl font-bold text-center text-blue-700 mb-5 uppercase">
                    Warranty Certificate
                  </h2>
                  {/* <p className="text-center text-sm text-gray-500 mb-4">
                    
                  </p> */}

                  {/* Warranty Info */}
                  <div className="space-y-2 text-sm">
                    <p><strong>Serial Number:</strong> {selectedWarranty.serialNumber}</p>
                    <p><strong>Customer Name:</strong> {selectedWarranty.userName}</p>
                    <p><strong>Phone:</strong> {selectedWarranty.phone}</p>
                    <p><strong>Email:</strong> {selectedWarranty.email || "N/A"}</p>
                    <p><strong>Category:</strong> {selectedWarranty.category}</p>
                    <p><strong>Product Name:</strong> {selectedWarranty.productName}</p>
                    <p>
                      <strong>Purchase Date:</strong>{" "}
                      {new Date(selectedWarranty.purchaseDate).toLocaleDateString("en-IN", {
                        timeZone: "Asia/Kolkata",
                      })}
                    </p>
                    <p>
                      <strong>Warranty Months:</strong>{" "}
                      {selectedWarranty.warrantyMonths} Months
                    </p>
                    <p>
                      <strong>Valid Until:</strong>{" "}
                      {new Date(
                        new Date(selectedWarranty.purchaseDate).setMonth(
                          new Date(selectedWarranty.purchaseDate).getMonth() +
                            selectedWarranty.warrantyMonths
                        )
                      ).toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 text-center text-xs text-gray-500">
                    <p>For service, contact HiAmps Customer Support</p>
                    <p>
                      Karnataka, Kerala, Tamil Nadu | +91 994 500 4857 |{" "}
                      <a
                        href="https://www.hiamps.co"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        www.hiamps.co
                      </a>
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-6 text-right text-xs text-gray-500">
                    <p>Authorized Signatory</p>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="mt-6 w-full bg-red-dark hover:bg-red text-white py-2 rounded-md font-semibold transition"
                >
                  Download Warranty Card
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
