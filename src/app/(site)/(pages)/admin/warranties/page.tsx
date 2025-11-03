"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function AdminWarranties() {
  const [warranties, setWarranties] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/warranty")
      .then((res) => res.json())
      .then((data) => {
        setWarranties(data);
        setFiltered(data);
      })
      .catch(() => toast.error("Failed to fetch warranty registrations"));
  }, []);

  // 🔍 Filter when search changes
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

  return (
    <section>
      <Breadcrumb title={"Warranty Registrations"} pages={["Warranty Registrations"]} />

      <div className="p-6 bg-white min-h-screen mt-10 rounded-md">
        {/* 🔎 Search Bar */}
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

        {/* 🧾 Table Container (responsive scroll) */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="p-3 text-left whitespace-nowrap">Serial Number</th>
                <th className="p-3 text-left whitespace-nowrap">User Name</th>
                <th className="p-3 text-left whitespace-nowrap">Phone</th>
                <th className="p-3 text-left whitespace-nowrap">Purchase Date</th>
                <th className="p-3 text-left whitespace-nowrap">Address</th>
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
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No warranty records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
