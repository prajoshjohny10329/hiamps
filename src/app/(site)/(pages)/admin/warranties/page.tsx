"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function AdminWarranties() {
  const [warranties, setWarranties] = useState([]);

  useEffect(() => {
    fetch("/api/warranty")
      .then((res) => res.json())
      .then((data) => setWarranties(data))
      .catch(() => toast.error("Failed to fetch warranty registrations"));
  }, []);

  return (
    <section>
        <Breadcrumb title={"Warranty Registrations"} pages={["Warranty Registrations"]} />
    <div className="p-6">
      <table className="w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">serialNumber</th>
            <th className="p-2 text-left">userName</th>
            <th className="p-2 text-left">phone</th>
            <th className="p-2 text-left">Purchase Date</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {warranties.map((item: any) => (
            <tr
              key={item._id}
              className={`${!item.viewed ? "bg-yellow-50" : ""} border-b`}
            >
              <td className="p-2">{item.serialNumber}</td>
              <td className="p-2">{item.userName}</td>
              <td className="p-2">{item.phone}</td>
              <td className="p-2">{new Date(item.createdAt).toLocaleDateString()}</td>
              <td className="p-2">
                {!item.viewed ? (
                  <span className="text-red-500 font-medium">New Registration</span>
                ) : (
                  <span className="text-green ">Viewed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
}
