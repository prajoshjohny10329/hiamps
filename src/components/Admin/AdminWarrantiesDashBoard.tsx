"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function AdminWarrantiesDashBoard() {
  const [warranties, setWarranties] = useState<any[]>([]);
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

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedWarranty ? "hidden" : "auto";
  }, [selectedWarranty]);

  return (
    <section className="max-h-[375px overflow-y-scroll">
      <div className=" bg-white rounded-md">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
          <h2 className="text-lg font-semibold text-black">
            Warranty Registrations ({filtered.length})
          </h2>
          <Link
            href={"/admin/warranties"}
            className="bg-red-dark hover:bg-red text-white px-4 py-2 rounded-md text-sm transition"
          >
            View All Warranty
          </Link>
        </div>

        {/* ✅ Loading State */}
        {loading ? (
          <div className="flex flex-col justify-center items-center h-[375px] ">
            <div className="w-12 h-12 border-4 border-red-dark border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-black font-medium">Loading Warranties...</p>
          </div>
        ) : (
          <div className="overflow-y-auto ">
            <table className="w-full border border-gray-200 text-sm mt-3">
              <thead>
                <tr className="bg-gray-100 text-black">
                  <th className="p-3 text-left whitespace-nowrap">
                    Serial Number
                  </th>
                  <th className="p-3 text-left whitespace-nowrap">User Name</th>
                  <th className="p-3 text-left whitespace-nowrap">Phone</th>
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
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No warranty records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
