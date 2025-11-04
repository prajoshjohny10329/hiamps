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
          Are you sure you want to delete{" "}
          <span className="text-red font-semibold">“{catName}”</span>?
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
                    ⚠️ This action cannot be undone.
                    <br />
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
                          toast.error(
                            error.response?.data?.error ||
                              "Error deleting category"
                          );
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
      <section className=" bg-white md:pt-10 lg:m-20 m-0 rounded-lg shadow-xl  overflow-hidden px-0 pb-8 pt-3 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
        <div className=" mx-auto bg-white p-6 mt-10 rounded-lg">
          

          <div className="flex flex-col lg:flex-row">
            {/* ✅ Add category form */}
          <div className="flex-1">
            <h2 className="text-2xl text-black font-semibold mb-6 text-center">
            Add New Categories
          </h2>
            <form onSubmit={handleSubmit} className=" mb-6">
            <input
              type="text"
              placeholder="New Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
            <button
              type="submit"
              disabled={adding}
              className="inline-flex font-medium text-white bg-red-dark mt-3 py-2 px-7 rounded-md ease-out duration-200 hover:bg-red-dark-dark"
            >
              {adding ? "Adding..." : "Add New Categories"}
            </button>
          </form>
          </div>

          <div className="flex-1 mt-8 lg:mt-0 pl-0 lg:pl-14">
            <h2 className="text-2xl text-black font-semibold mb-6 text-center">
            View Current Categories
          </h2>
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
                    <span className="font-medium text-black">{cat.name}</span>
                  </div>
                  <button
                    onClick={() => handleDelete(cat._id, cat.name)}
                    disabled={deleting === cat._id}
                    className="bg-red-dark  text-white text-sm px-6 py-1.5 rounded hover:bg-green disabled:opacity-70"
                  >
                    {deleting === cat._id ? "Deleting..." : "Delete"}
                  </button>
                </li>
              ))}
            </ul>
          )}
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
