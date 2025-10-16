"use client";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function WarrantyPage() {
  const [serial, setSerial] = useState("");
  const [result, setResult] = useState<null | {
    name: string;
    product: string;
    purchaseDate: string;
    expiryDate: string;
  }>(null);

  // Simulate checking warranty
  const handleCheck = () => {
    if (serial === "ABC123") {
      setResult({
        name: "John Doe",
        product: "Smart Home Controller",
        purchaseDate: "2024-05-01",
        expiryDate: "2026-05-01",
      });
    } else {
      setResult(null);
      alert("Warranty not found!");
    }
  };

  // Generate & download PDF
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
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth - 40;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 20, 20, imgWidth, imgHeight);
    pdf.save("WarrantyCard.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Check Your Warranty
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter Serial Number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 flex-1 focus:outline-none"
          />
          <button
            onClick={handleCheck}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Check
          </button>
        </div>

        {result && (
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
    <img src="/images/logo/logo.PNG" alt="HiAmps Logo" className="w-24 h-auto" />
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
    <div className="flex justify-between border-b border-gray-200 pb-1">
      <span className="font-medium">Customer Name:</span>
      <span>{result?.name}</span>
    </div>
    <div className="flex justify-between border-b border-gray-200 pb-1">
      <span className="font-medium">Product:</span>
      <span>{result?.product}</span>
    </div>
    <div className="flex justify-between border-b border-gray-200 pb-1">
      <span className="font-medium">Serial No:</span>
      <span>{serial}</span>
    </div>
    <div className="flex justify-between border-b border-gray-200 pb-1">
      <span className="font-medium">Purchase Date:</span>
      <span>{result?.purchaseDate}</span>
    </div>
    <div className="flex justify-between border-b border-gray-200 pb-1">
      <span className="font-medium">Warranty Expiry:</span>
      <span>{result?.expiryDate}</span>
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
    <img src="/signature.png" alt="Sign" className="w-16 opacity-80" />
  </div>
</div>


            <button
              onClick={handleDownload}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Download Warranty Card
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
