"use client";
import { useState } from "react";

export default function CheckProductDetails() {
  const [serialNumber, setSerialNumber] = useState("");
  const [details, setDetails] = useState<any>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Checking...");
    setDetails(null);

    const res = await fetch("/api/battery-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serialNumber }),
    });

    const data = await res.json();

    if (res.ok) {
      setDetails(data);
      setMessage("");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-[200px] p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center text-red-dark">
        Check Battery Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Serial Number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-light hover:bg-blue-dark text-white py-2 rounded hover:bg-green-700"
        >
          Check Now
        </button>
        
      </form>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}

      {details && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Product Information</h3>
          <p><strong>Serial Number:</strong> {details.serialNumber}</p>
          <p><strong>Name:</strong> {details.userName}</p>
          <p><strong>Product Type:</strong> {details.productType}</p>
          <p><strong>Purchase Date:</strong> {details.purchaseDate}</p>
          <p><strong>Warranty:</strong> {details.warrantyYears} Year(s)</p>
          <p className="text-blue-600 font-medium mt-2">
            {details.warrantyStatus}
          </p>
        </div>
      )}
    </div>
  );
}
