"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "@/components/Common/Breadcrumb";
import toast, { Toaster } from "react-hot-toast";

interface Category {
  _id: string;
  name: string;
  createdAt: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  // ✅ Fetch all categories
  const fetchCategories = async () => {
    const res = await axios.get("/api/admin/categories");
    setCategories(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ Add new category
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Enter a category name");

    setAdding(true);
    try {
      await axios.post("/api/admin/categories", { name });
      toast.success(`"${name}" added successfully!`);
      setName("");
      fetchCategories();
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Error adding category");
    } finally {
      setAdding(false);
    }
  };

  // ✅ Delete category (with double toast confirmation)
  const handleDelete = async (id: string, catName: string) => {
    // First confirmation toast
    toast((t1) => (
      <div className="text-sm">
        <p className="font-medium mb-2">
          Are you sure you want to delete <span className="text-red font-semibold">“{catName}”</span>?
        </p>
        <div className="flex justify-end gap-3 mt-3">
          <button
            onClick={() => toast.dismiss(t1.id)}
            className="px-3 py-1.5 text-xs rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss(t1.id);
              // Second confirmation toast
              toast((t2) => (
                <div className="text-sm">
                  <p className="font-medium mb-2 text-red-700">
                    ⚠️ This action cannot be undone.<br />
                    Delete permanently?
                  </p>
                  <div className="flex justify-end gap-3 mt-3">
                    <button
                      onClick={() => toast.dismiss(t2.id)}
                      className="px-3 py-1.5 text-xs rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={async () => {
                        toast.dismiss(t2.id);
                        try {
                          setDeleting(id);
                          await axios.delete(`/api/admin/categories/${id}`);
                          toast.success(`"${catName}" deleted successfully`);
                          fetchCategories();
                        } catch (error: any) {
                          toast.error(error.response?.data?.error || "Error deleting category");
                        } finally {
                          setDeleting(null);
                        }
                      }}
                      className="px-3 py-1.5 text-xs rounded-md bg-red text-white hover:bg-red"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ));
            }}
            className="px-3 py-1.5 text-xs rounded-md bg-red text-white hover:bg-blue"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    ));
  };

  if (loading)
    return <p className="text-center py-10">Loading categories...</p>;

  return (
    <>
      {/* ✅ Toast container */}
      <Toaster position="bottom-center" reverseOrder={false} />

      <Breadcrumb title={"Categories"} pages={["categories"]} />

      <div className="max-w-2xl mx-auto bg-white p-6 mt-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Manage Categories
        </h1>

        {/* ✅ Add category form */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="New Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            disabled={adding}
            className="bg-red text-white px-9 py-2 rounded hover:bg-green duration-200 disabled:opacity-70"
          >
            {adding ? "Adding..." : "Add"}
          </button>
        </form>

        {/* ✅ Category list */}
        {categories.length === 0 ? (
          <p className="text-center text-gray-500">No categories yet.</p>
        ) : (
          <ul className="divide-y">
            {categories.map((cat) => (
              <li
                key={cat._id}
                className="py-3 flex justify-between items-center"
              >
                <div>
                  <span className="font-medium">{cat.name}</span>
                </div>
                <button
                  onClick={() => handleDelete(cat._id, cat.name)}
                  disabled={deleting === cat._id}
                  className="bg-red text-white text-sm px-4 py-1 rounded hover:bg-red disabled:opacity-70"
                >
                  {deleting === cat._id ? "Deleting..." : "Delete"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
