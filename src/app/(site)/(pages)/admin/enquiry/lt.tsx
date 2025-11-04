"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface ContactType {
  _id: string;
  name: string;
  phone: string;
  subject: string;
  state: string;
  district: string;
  address: string;
  createdAt: string;
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/admin/contact");
        const data = await res.json();

        if (res.ok) {
          setContacts(data);
        } else {
          toast.error("Failed to load enquiries.");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        toast.error("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <section>
      <Breadcrumb title={"Customer Enquiries"} pages={["Customer Enquiries"]} />
      {loading ? (
          <div className="flex flex-col justify-center items-center h-[375px] ">
        <div className="w-12 h-12 border-4 border-red-dark border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-black font-medium">Loading enquiries...</p>
      </div>
      ) : contacts.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[375px] ">
        <p className="mt-4 text-black font-medium">No enquiries yet.</p>
      </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Phone</th>
                <th className="py-3 px-4 border-b text-left">Subject</th>
                <th className="py-3 px-4 border-b text-left">State</th>
                <th className="py-3 px-4 border-b text-left">District</th>
                <th className="py-3 px-4 border-b text-left">Address</th>
                <th className="py-3 px-4 border-b text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{contact.name}</td>
                  <td className="py-3 px-4 border-b">{contact.phone}</td>
                  <td className="py-3 px-4 border-b">{contact.subject}</td>
                  <td className="py-3 px-4 border-b">{contact.state}</td>
                  <td className="py-3 px-4 border-b">{contact.district}</td>
                  <td className="py-3 px-4 border-b">{contact.address}</td>
                  <td className="py-3 px-4 border-b">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
