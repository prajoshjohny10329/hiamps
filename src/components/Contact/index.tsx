"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { stateDistrictData } from "@/data/stateDistricts";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [districts, setDistricts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    state: "",
    district: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "state") {
      setDistricts(stateDistrictData[value] || []);
      setForm((prev) => ({ ...prev, state: value, district: "" }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 📨 Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validation for all fields
    if (!form.name.trim()) {
      toast.error("Name is required.");
      return;
    }

    const nameRegex = /^[A-Za-z\s]{3,20}$/;
    if (!nameRegex.test(form.name)) {
      toast.error(
        "Name must be 3–10 letters and contain only alphabets and spaces."
      );
      return;
    }

    // ✅ Phone validation (exactly 10 digits)
    if (!form.phone.trim()) {
      toast.error("Phone number is required.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      toast.error("Please enter a valid phone number (10 digits).");
      return;
    }

    if (!form.address.trim()) {
      toast.error("Address is required.");
      return;
    }

    if (!form.state.trim()) {
      toast.error("Please select a state.");
      return;
    }

    if (!form.district.trim()) {
      toast.error("Please select a district.");
      return;
    }

    if (!form.subject.trim()) {
      toast.error("Please select a subject.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent successfully! Our executive will call you soon.");
        setForm({
          name: "",
          phone: "",
          subject: "",
          state: "",
          district: "",
          address: "",
        });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb title={"Contact"} pages={["contact"]} />
      <section className="overflow-hidden py-20 bg-red-dark">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            <div className="xl:max-w-[370px] w-full bg-white rounded-xl shadow-xl">
              <div className="py-5 px-4 sm:px-7.5 border-b border-gray-3">
                <p className="font-medium text-xl text-black">
                  Contact Information
                </p>
              </div>

              <div className="p-4 sm:p-7.5">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-red-dark w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">Address</h4>
                      <p className="text-black text-sm">
                        Sunrise Industries, Bangalore, Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-red-dark w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">Email</h4>
                      <p className="text-black text-sm">
                        info@hiampsbatteries.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-red-dark w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">Phone</h4>
                      <p className="text-black text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-red-dark w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black mb-1">
                        Working Hours
                      </h4>
                      <p className="text-black text-sm">
                        Mon – Sat: 9:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:max-w-[770px] w-full bg-white rounded-xl shadow-xl p-4 sm:px-7.5 xl:px-10">
              <div className=" mb-3 border-b border-gray-3 py-5">
                <p className="font-medium text-2xl text-black text-center">
                  Send Us an Enquiry
                </p>
                <p className="mt-3 text-black text-sm text-center px-5">Please provide your contact details and requirements. Our support team will respond within 24 hours.</p>
              </div>
              <form onSubmit={handleSubmit} className="mt-10">
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="name" className="block mb-2.5 text-black">
                      Your Name <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul"
                      className="w-full border-0 border-b border-gray-6 bg-transparent py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="phone" className="block mb-2.5 text-black">
                      Phone Number <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      className="w-full border-0 border-b border-gray-6 bg-transparent py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label
                      htmlFor="address"
                      className="block mb-2.5 text-black"
                    >
                      Address <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      className="w-full border-0 border-b border-gray-6 bg-transparent py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="state" className="block mb-2.5 text-black">
                      State <span className="text-red">*</span>
                    </label>

                    <select
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      className="w-full border-0 border-b border-gray-6 bg-white py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                    >
                      <option value="">Select State</option>
                      {Object.keys(stateDistrictData).map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="district"
                      className="block mb-2.5 text-black"
                    >
                      District <span className="text-red">*</span>
                    </label>

                    <select
                      name="district"
                      value={form.district}
                      onChange={handleChange}
                      required
                      className="w-full border-0 border-b border-gray-6 bg-white py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                      disabled={!districts.length}
                    >
                      <option value="">Select District</option>
                      {districts.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label
                      htmlFor="subject"
                      className="block mb-2.5 text-black"
                    >
                      Subject
                    </label>

                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full border-0 border-b border-gray-6 bg-white py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                    >
                      <option value="">Select Service</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Customer Support">Customer Support</option>
                      <option value="Sales Inquiry">Sales Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex font-medium text-white bg-red-dark py-3 px-7 rounded-md ease-out duration-200 hover:bg-red-dark-dark"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
