import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { Mail, Phone, MapPin, Clock } from "lucide-react";


const Contact = () => {
  return (
    <>
      <Breadcrumb title={"Contact"} pages={["contact"]} />

      <section className="overflow-hidden py-20 bg-red-dark">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            <div className="xl:max-w-[370px] w-full bg-white rounded-xl shadow-xl">
              <div className="py-5 px-4 sm:px-7.5 border-b border-gray-3">
                <p className="font-medium text-xl text-dark">
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
              <p className="text-black text-sm">info@hiampsbatteries.com</p>
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
              <h4 className="font-semibold text-black mb-1">Working Hours</h4>
              <p className="text-black text-sm">
                Mon – Sat: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
                </div>
              </div>
            </div>

            <div className="xl:max-w-[770px] w-full bg-white rounded-xl shadow-xl p-4 sm:p-7.5 xl:p-10">
              <form>
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="firstName" className="block mb-2.5 text-black" >
                      First Name <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Jhon"
                      className="w-full border-0 border-b border-gray-6 bg-transparent py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="lastName" className="block mb-2.5 text-black">
                      Last Name <span className="text-red">*</span>
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Deo"
                      className="w-full border-0 border-b border-gray-6 bg-transparent py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                  <div className="w-full">
                    <label htmlFor="subject" className="block mb-2.5 text-black">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Type your subject"
                      className="w-full border-0 border-b border-gray-6 bg-transparent py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="phone" className="block mb-2.5 text-black">
                      Phone
                    </label>

                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone"
                      className="w-full border-0 border-b border-gray-6 bg-transparent py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="mb-7.5">
                  <label htmlFor="message" className="block mb-2.5 text-black">
                    Message
                  </label>

                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    placeholder="Type your message"
                    className="w-full border-0 border-b border-gray-6 bg-transparent py-2.5 px-5 outline-none focus:border-red-dark focus:ring-0 placeholder:text-gray-400"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex font-medium text-white bg-red-dark py-3 px-7 rounded-md ease-out duration-200 hover:bg-red-dark-dark"
                >
                  Send Message
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
