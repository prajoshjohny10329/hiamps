"use client";
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Get in Touch with Us
        </h2>
        <p className="text-black mb-10 max-w-2xl mx-auto">
          Have questions or need assistance choosing the right power solution?
          Our team at <strong>Sunrise Industries</strong> is always ready to
          help. Reach out today — we’re just a call or message away!
        </p>

        <div className="grid md:grid-cols-2 my-5 lg:grid-cols-4 gap-8 text-left">
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

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+91 994 500 4857"
            className="bg-red-dark text-white px-6 py-3 rounded-lg shadow hover:bg-red transition"
          >
            Call Now
          </a>
          <a
            href="mailto:info@hiampsbatteries.com"
            className="bg-red-dark text-white px-6 py-3 rounded-lg shadow hover:bg-red transition"
          >
            Send an Enquiry
          </a>
          <a
            href="https://maps.google.com?q=Sunrise+Industries+Bangalore"
            target="_blank"
            className="bg-red-dark text-white px-6 py-3 rounded-lg shadow hover:bg-red transition"
          >
            Locate Us on Map
          </a>
        </div>
      </div>
    </section>
  );
}
