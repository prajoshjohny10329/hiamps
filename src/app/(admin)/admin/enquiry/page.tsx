"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
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
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/admin/contact");
        const data = await res.json();

        if (res.ok) {
          setContacts(data);
          setFiltered(data);
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

  // Filter on search
  useEffect(() => {
    const lower = search.toLowerCase();
    const results = contacts.filter(
      (item) =>
        item.name?.toLowerCase().includes(lower) ||
        item.phone?.toLowerCase().includes(lower) ||
        item.district?.toLowerCase().includes(lower) ||
        item.state?.toLowerCase().includes(lower)
    );
    setFiltered(results);
  }, [search, contacts]);

  return (
    <section>
      <Breadcrumb title={"Customer Enquiries"} pages={["Customer Enquiries"]} />
      <section className="p-6 bg-white mt-10 rounded-md">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
          <h2 className="text-lg font-semibold text-black">
            Customer Enquiry ({filtered.length})
          </h2>
          <input
            type="text"
            placeholder="Search by name, phone, serial, district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-80 placeholder:text-dark focus:ring-2 focus:ring-red-dark outline-none"
          />
        </div>
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
                <tr className="text-black">
                  <th className="py-3 px-4 border-b text-left">Name</th>
                  <th className="py-3 px-4 border-b text-left">Phone</th>
                  <th className="py-3 px-4 border-b text-left">Subject</th>
                  <th className="py-3 px-4 border-b text-left">Address</th>
                  <th className="py-3 px-4 border-b text-left">Date</th>
                  <th className="py-3 px-4 border-b text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((contact) => (
                  <tr key={contact._id} className="text-black">
                    <td className="py-3 px-4 border-b">{contact.name}</td>
                    <td className="py-3 px-4 border-b">{contact.phone}</td>
                    <td className="py-3 px-4 border-b">{contact.subject}</td>
                    <td className="py-3 px-4 border-b">
                      {contact.district}, {contact.state}
                      <p className="text-xs text-gray-500">
                        {contact.address}
                      </p>
                    </td>
                    <td className="py-3 px-4 border-b gap-2">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 border-b ">
                      <Link
                        href={`tel:${contact.phone}`}
                        className="bg-red-dark hover:bg-red text-white px-3 py-1  rounded-md text-sm transition"
                      >
                        Call Now
                      </Link>

                      <Link
  href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(
    `Hi, I am from HiAmps. I saw your enquiry about "${contact.subject}". How can I help you? Please share more details.`
  )}`}
  target="_blank"
  className="bg-green-dark hover:bg-green text-white px-3 py-1 ml-3 rounded text-sm transition"
>
  WhatsApp Now
</Link>


                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </section>
  );
}
