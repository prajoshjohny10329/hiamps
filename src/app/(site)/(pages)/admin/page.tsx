"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";

interface Battery {
  _id: string;
  serialNumber: string;
  userName: string;
  phone: string;
  email?: string;
  productType: string;
  purchaseDate: string;
  warrantyMonths: number;
  createdAt: string;
}

export default function AdminPage() {
  const [batteries, setBatteries] = useState<Battery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/battery/list");
      const data = await res.json();
      setBatteries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section>
      <Breadcrumb title={"Admin DashBoard"} pages={["Admin DashBoard"]} />
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Registered Batteries
      </h2>

      {batteries.length === 0 ? (
        <p className="text-center">No registrations yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Serial No</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Product Type</th>
                <th className="p-2 border">Purchase Date</th>
                <th className="p-2 border">Warranty</th>
                <th className="p-2 border">Registered On</th>
              </tr>
            </thead>
            <tbody>
              {batteries.map((b, i) => (
                <tr key={b._id} className="text-center">
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{b.serialNumber}</td>
                  <td className="border p-2">{b.userName}</td>
                  <td className="border p-2">{b.phone}</td>
                  <td className="border p-2">{b.email || "-"}</td>
                  <td className="border p-2">{b.productType}</td>
                  <td className="border p-2">
                    {new Date(b.purchaseDate).toLocaleDateString()}
                  </td>
                  <td className="border p-2">{b.warrantyMonths} yrs</td>
                  <td className="border p-2">
                    {new Date(b.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </section>
  );
}
