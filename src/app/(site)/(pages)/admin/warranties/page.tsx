"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function AdminWarranties() {
  const [warranties, setWarranties] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<any[]>([]);
  const [selectedWarranty, setSelectedWarranty] = useState<any | null>(null);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  // Fetch warranty list
  useEffect(() => {
    setLoading(true);
    fetch("/api/warranty")
      .then((res) => res.json())
      .then((data) => {
        setWarranties(data);
        setFiltered(data);
      })
      .catch(() => toast.error("Failed to fetch warranty registrations"))
      .finally(() => setLoading(false)); // ✅ Stop loading
  }, []);

  // Filter on search
  useEffect(() => {
    const lower = search.toLowerCase();
    const results = warranties.filter(
      (item) =>
        item.serialNumber?.toLowerCase().includes(lower) ||
        item.userName?.toLowerCase().includes(lower) ||
        item.phone?.toLowerCase().includes(lower) ||
        item.district?.toLowerCase().includes(lower) ||
        item.state?.toLowerCase().includes(lower)
    );
    setFiltered(results);
  }, [search, warranties]);

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedWarranty ? "hidden" : "auto";
  }, [selectedWarranty]);

  // Close modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modalOverlay") {
      setSelectedWarranty(null);
    }
  };

  return (
    <section>
      <Breadcrumb title={"Warranty Registrations"} pages={["Warranty Registrations"]} />

      <div className="p-6 bg-white mt-10 rounded-md">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Warranty Registrations ({filtered.length})
          </h2>
          <input
            type="text"
            placeholder="Search by name, phone, serial, district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-80 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        {/* ✅ Loading State */}
        {loading ? (
          <div className="flex items-center justify-center h-60">
            <div className="flex flex-col items-center text-gray-600">
              <div className="loader mb-3"></div>
              <p className="text-sm font-medium">Loading warranty data...</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-100 text-black">
                  <th className="p-3 text-left whitespace-nowrap">Serial Number</th>
                  <th className="p-3 text-left whitespace-nowrap">User Name</th>
                  <th className="p-3 text-left whitespace-nowrap">Phone</th>
                  <th className="p-3 text-left whitespace-nowrap">Purchase Date</th>
                  <th className="p-3 text-left whitespace-nowrap">Address</th>
                  <th className="p-3 text-left whitespace-nowrap text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {filtered.length > 0 ? (
                  filtered.map((item) => (
                    <tr
                      key={item._id}
                      className={`${
                        !item.viewed ? "bg-yellow-50" : ""
                      } border-b hover:bg-gray-50 transition`}
                    >
                      <td className="p-3">{item.serialNumber}</td>
                      <td className="p-3">{item.userName}</td>
                      <td className="p-3">{item.phone}</td>
                      <td className="p-3">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-3 text-gray-700">
                        <p>{item.address}</p>
                        <p className="text-xs text-gray-500">
                          {item.district}, {item.state}
                        </p>
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => setSelectedWarranty(item)}
                          className="bg-red-dark hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs transition"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-6 text-gray-500 italic">
                      No warranty records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {selectedWarranty && (
        <div
          id="modalOverlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 animate-fadeIn"
        >
          <div className="bg-white top-17 rounded-lg shadow-lg w-full max-w-lg p-6 relative animate-slideUp">
            <button
              className="absolute top-3 right-3 text-black hover:text-red-dark font-semibold text-xl"
              onClick={() => setSelectedWarranty(null)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-red-dark mb-4">
              Warranty Details
            </h3>

            <div className="space-y-2 text-sm text-black">
              <p><strong>Serial Number:</strong> {selectedWarranty.serialNumber}</p>
              <p><strong>User Name:</strong> {selectedWarranty.userName}</p>
              <p><strong>Phone:</strong> {selectedWarranty.phone}</p>
              <p><strong>Email:</strong> {selectedWarranty.email || "N/A"}</p>
              <p><strong>Category:</strong> {selectedWarranty.category}</p>
              <p><strong>Product Name:</strong> {selectedWarranty.productName}</p>
              <p><strong>Product warranty:</strong> {selectedWarranty. warrantyMonths}</p>
              {/* <p><strong>Purchase Date:</strong> {new Date(selectedWarranty.purchaseDate).toLocaleDateString()}</p> */}
              <p><strong>Registered At:</strong> {new Date(selectedWarranty.createdAt).toLocaleString()}</p>
              <p>
                <strong>Warranty Expiry:</strong>{" "}
                    {new Date(
                      new Date(selectedWarranty.createdAt).setMonth(
                        new Date(selectedWarranty.createdAt).getMonth() +
                          (selectedWarranty.warrantyMonths || 0)
                      )
                    ).toLocaleDateString()}
              </p>
              <hr className="my-3" />
              <p><strong>Address:</strong> {selectedWarranty.address}</p>
              <p><strong>District:</strong> {selectedWarranty.district}</p>
              <p><strong>State:</strong> {selectedWarranty.state}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
