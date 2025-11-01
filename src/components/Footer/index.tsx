import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- footer menu start --> */}
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          {/* first div  */}
          <div className="max-w-[330px] w-full">
            <ul className="flex flex-col gap-3 text-black">
              <li>
                <Image
                  src={"/images/logo/sunrise-logo.webp"}
                  className="mb-4"
                  width={280}
                  height={36}
                  alt="sunrise-logo"
                />
              </li>

              <li>
                <p className="text-black">For decades, Sunrise Industries has been delivering trusted energy solutions across South India. Our flagship brand Hi-Amps stands for reliability, performance, and quality — powering homes, offices, and industries with innovation and trust.</p>
              </li>
            </ul>
          </div>
          {/* first div end  */}

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-black">
              Quick Link
            </h2>

            <ul className="flex flex-col gap-3 text-black">
              <li>
                <Link href="/" className="ease-out duration-200 hover:text-red">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="ease-out duration-200 hover:text-red"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="ease-out duration-200 hover:text-red"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="ease-out duration-200 hover:text-red"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="ease-out duration-200 hover:text-red"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-black">
              Products Links
            </h2>
            <ul className="flex flex-col gap-3 text-black">
              <li>
                <Link
                  href="/products/power-backup-batteries"
                  className="ease-out duration-200 hover:text-red"
                >
                  Backup Batteries
                </Link>
              </li>
              <li>
                <Link
                  href="/products/inverter-ups"
                  className="ease-out duration-200 hover:text-red"
                >
                  Inverter/UPS
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lithium-batteries"
                  className="ease-out duration-200 hover:text-red"
                >
                  Lithium Batteries
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ups-battery-cabinet"
                  className="ease-out duration-200 hover:text-red"
                >
                  UPS Battery Cabinet
                </Link>
              </li>
              <li>
                <Link
                  href="/user-guide"
                  className="ease-out duration-200 hover:text-red"
                >
                  Users Guide
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
             <h2 className="mb-7.5 text-custom-1 font-medium text-black">
              Products Links
            </h2>
            <ul className="flex flex-col gap-3 text-black">
              <li>
                <Link
                  href="/products/power-backup-batteries"
                  className="ease-out duration-200 hover:text-red"
                >
                  Backup Batteries
                </Link>
              </li>
              <li>
                <Link
                  href="/products/inverter-ups"
                  className="ease-out duration-200 hover:text-red"
                >
                  Inverter/UPS
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lithium-batteries"
                  className="ease-out duration-200 hover:text-red"
                >
                  Lithium Batteries
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ups-battery-cabinet"
                  className="ease-out duration-200 hover:text-red"
                >
                  UPS Battery Cabinet
                </Link>
              </li>
              <li>
                <Link
                  href="/user-guide"
                  className="ease-out duration-200 hover:text-red"
                >
                  Users Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      {/* <!-- footer bottom start --> */}
      <div className="py-5 xl:py-7.5 bg-gray-1">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <p className="text-black font-medium">
              &copy; {year}. All rights reserved by Hiamps.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};

export default Footer;
