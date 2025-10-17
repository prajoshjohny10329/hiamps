"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState } from "react";
import { toast } from "react-hot-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function WarrantyCheck() {
  const [serial, setSerial] = useState("");
  const [warranty, setWarranty] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setWarranty(null);

    const res = await fetch(`/api/warranty/${serial}`);
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      toast.error(data.message || "Warranty not found");
    } else {
      setWarranty(data);
      console.log(data);
      
      toast.success("Warranty found!");
    }
  };

  const handleDownload = async () => {
    // const res = await fetch(`/api/warranty/${serial}/download`);
    // const blob = await res.blob();

    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = `Warranty-${serial}.pdf`;
    // document.body.appendChild(a);
    // a.click();
    // a.remove();
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
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth - 40;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 20, 20, imgWidth, imgHeight);
    pdf.save("WarrantyCard.pdf");
  };

  return (
    <section>
      <Breadcrumb title={"Product Warranty Check"} pages={["Warranty Check"]} />
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <form onSubmit={handleCheck} className="flex flex-col gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter Serial Number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            className="border p-2 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-red text-white py-2 rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Warranty"}
          </button>
        </form>

        {/* {warranty && (
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Warranty Card</h2>
            <div className="text-sm space-y-1">
              <p>
                <strong>Serial Number:</strong> {warranty.serialNumber}
              </p>
              <p>
                <strong>Customer Name:</strong> {warranty.userName}
              </p>
              <p>
                <strong>Phone:</strong> {warranty.phone}
              </p>
              <p>
                <strong>Email:</strong> {warranty.email || "N/A"}
              </p>
              <p>
                <strong>Category:</strong> {warranty.category?.name}
              </p>
              <p>
                <strong>Purchase Date:</strong>{" "}
                {new Date(warranty.purchaseDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Warranty Years:</strong> {warranty.warrantyYears} years
              </p>
              <p>
                <strong>Valid Until:</strong>{" "}
                {new Date(
                  new Date(warranty.purchaseDate).setFullYear(
                    new Date(warranty.purchaseDate).getFullYear() +
                      warranty.warrantyYears
                  )
                ).toLocaleDateString()}
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="mt-4 bg-green text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Download Warranty Card
            </button>
          </div>
        )} */}
        {warranty && (
          <div>
            <div
              id="warranty-card"
              className="relative bg-white p-8 border-4 border-blue-600 rounded-xl shadow-xl text-dark font-sans max-w-sm mx-auto mt-4"
              style={{
                backgroundImage: "url('/images/logo/logo.PNG')",
                backgroundSize: "120px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Logo */}
              <div className="flex justify-center mb-3">
                <img
                  src="/images/logo/logo.PNG"
                  alt="HiAmps Logo"
                  className="w-24 h-auto"
                />
              </div>

              {/* Header */}
              <h2 className="text-2xl font-bold text-center text-blue-700 mb-2 uppercase">
                Warranty Certificate
              </h2>
              <p className="text-center text-sm text-gray-500 mb-4">
                HiAmps Batteries — Powering Performance
              </p>

              {/* Body */}
              <div className="space-y-2 text-sm">
                <div className="text-sm space-y-1">
              <p>
                <strong>Serial Number:</strong> {warranty.serialNumber}
              </p>
              <p>
                <strong>Customer Name:</strong> {warranty.userName}
              </p>
              <p>
                <strong>Phone:</strong> {warranty.phone}
              </p>
              <p>
                <strong>Email:</strong> {warranty.email || "N/A"}
              </p>
              <p>
                <strong>Category:</strong> {warranty.category?.name}
              </p>
              <p>
                <strong>Purchase Date:</strong>{" "}
                {new Date(warranty.purchaseDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Warranty Years:</strong> {warranty.warrantyYears} years
              </p>
              <p>
                <strong>Valid Until:</strong>{" "}
                {new Date(
                  new Date(warranty.purchaseDate).setFullYear(
                    new Date(warranty.purchaseDate).getFullYear() +
                      warranty.warrantyYears
                  )
                ).toLocaleDateString()}
              </p>
            </div>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center text-xs text-gray-500">
                <p>For service, contact HiAmps Customer Support</p>
                <p>Kollam, Kerala | +91 98765 43210 | www.hiamps.com</p>
              </div>

              {/* Optional Signature */}
              <div className="absolute bottom-4 right-6 text-right text-xs text-gray-500">
                <p>Authorized Signatory</p>
                <img
                  src="/signature.png"
                  alt="Sign"
                  className="w-16 opacity-80"
                />
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="mt-4 w-full bg-red text-white py-2 rounded-lg hover:bg-green-700"
            >
              Download Warranty Card
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
