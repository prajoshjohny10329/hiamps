"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="px-0 md:px-20 lg:px-30 flex items-center pt-6 sm:pt-0 flex-col sm:flex-row">
          {/* first part  */}
          <div className="w-full md:w-110   py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <h1 className="font-semibold text-black text-3xl  mb-1">
              Hi-Amps {" "}
              <span className="text-red-dark font-bold mb-3 text-3xl">
                Inverters,
              </span>
            </h1>
            <h2 className="font-semibold text-black text-3xl  mb-3">
              Intelligent Power, Total Reliability
            </h2>

            <p className="text-black mt-7">
              Built with <strong>DSP Sinewave Technology, heavy-duty transformers,</strong> and <strong>real-time LCD monitoring</strong>, Hi-Amps Inverters deliver clean, efficient, and safe power for every application. Designed to work seamlessly with Hi-Amps Tubular Batteries, they ensure unmatched backup performance and long service life.
            </p>

            <a
              href="/products/inverter-ups"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-dark py-3 px-9 ease-out duration-200 hover:bg-red-dark mt-5"
            >
              Explore Hi-Amps Inverters
            </a>
          </div>
          {/* second part  */}
          <div className="relative flex-1 w-full">
            <Image
              src="/images/pages/products/hiamps-ups-inverter-1.webp"
              alt="Hiamps UPS Inverter"
              width={450}
              height={550}
              className="mx-auto max-w-full transition delay-150 duration-300 -z-10 contrast-125"
            />
            {/* Left Image */}
            
            <Image
              src="/images/pages/products/hiamps-ups-inverter-1.webp"
              alt="Hiamps UPS Inverter"
              width={420}
              height={550}
              className="mx-auto max-w-full absolute -top-3 left-20 contrast-125 -z-1 blur-sm"
            />
            <Image
              src="/images/pages/products/hiamps-ups-inverter-1.webp"
              alt="Hiamps UPS Inverter"
              width={420}
              height={550}
              className="mx-auto max-w-full absolute -top-5 right-20 contrast-125 -z-1 blur-sm"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <div className="px-0 md:px-20 lg:px-30 flex items-center pt-6 sm:pt-0 flex-col sm:flex-row">
          <div className="w-full md:w-110   py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <h1 className="font-semibold text-black text-3xl  mb-1">
              Welcome To{" "}
              <span className="text-red-dark font-bold mb-3 text-3xl">
                Hiamps,
              </span>
            </h1>
            <h2 className="font-semibold text-black text-3xl  mb-3">
              Reliable Power Backup for Every Need
            </h2>

            <p className="text-black mt-7">
              Choose from our advanced Hi-Amps{" "}
              <span className="text-red font-bold">Red</span>,{" "}
              <span className="text-green font-bold">Green</span>, and{" "}
              <span className="text-blue font-bold">Blue</span> Series —
              engineered for consistent performance, long life, and trusted
              backup power for homes and offices.
            </p>

            <a
              href="/products/power-backup-batteries"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-dark py-3 px-9 ease-out duration-200 hover:bg-red-dark mt-5"
            >
              Explore Power Backup Batteries
            </a>
          </div>
          <div className="relative flex-1 w-full">
            <Image
              src="/images/pages/products/hiamps-blue-series-battery.webp"
              alt="Hiamps Blue Series Battery"
              width={450}
              height={550}
              className="mx-auto max-w-full transition delay-150 duration-300 -z-10 contrast-125"
            />
            <Image
              src="/images/pages/products/hiamps-green-series-battery.webp"
              alt="Hiamps Blue Series Battery"
              width={420}
              height={550}
              className="mx-auto max-w-full absolute top-9 left-10 brightness-105 contrast-125"
            />

            <Image
              src="/images/pages/products/hiamps-red-series-battery.webp"
              alt="Hiamps Blue Series Battery"
              width={420}
              height={550}
              className="mx-auto max-w-full absolute top-9 right-10 brightness-105 contrast-125"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="px-0 md:px-20 lg:px-30 flex items-center pt-6 sm:pt-0 flex-col sm:flex-row">
          {/* first part  */}
          <div className="w-full md:w-110   py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <h1 className="font-semibold text-black text-3xl  mb-1">
              Hi-Amps {" "}
              <span className="text-red-dark font-bold mb-3 text-3xl">
                Inverters,
              </span>
            </h1>
            <h2 className="font-semibold text-black text-3xl  mb-3">
              Intelligent Power, Total Reliability
            </h2>

            <p className="text-black mt-7">
              Built with <strong>DSP Sinewave Technology, heavy-duty transformers,</strong> and <strong>real-time LCD monitoring</strong>, Hi-Amps Inverters deliver clean, efficient, and safe power for every application. Designed to work seamlessly with Hi-Amps Tubular Batteries, they ensure unmatched backup performance and long service life.
            </p>

            <a
              href="/products/inverter-ups"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-dark py-3 px-9 ease-out duration-200 hover:bg-red-dark mt-5"
            >
              Explore Hi-Amps Inverters
            </a>
          </div>
          {/* second part  */}
          <div className="relative flex-1 w-full">
            <Image
              src="/images/pages/products/hiamps-ups-inverter-1.webp"
              alt="Hiamps UPS Inverter"
              width={450}
              height={550}
              className="mx-auto max-w-full transition delay-150 duration-300 -z-10 contrast-125"
            />
            {/* Left Image */}
            
            <Image
              src="/images/pages/products/hiamps-ups-inverter-1.webp"
              alt="Hiamps UPS Inverter"
              width={420}
              height={550}
              className="mx-auto max-w-full absolute -top-3 left-20 contrast-125 -z-1 blur-sm"
            />
            <Image
              src="/images/pages/products/hiamps-ups-inverter-1.webp"
              alt="Hiamps UPS Inverter"
              width={420}
              height={550}
              className="mx-auto max-w-full absolute -top-5 right-20 contrast-125 -z-1 blur-sm"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="px-0 md:px-20 lg:px-30 flex items-center pt-6 sm:pt-0 flex-col sm:flex-row">
          <div className="w-full md:w-110   py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            
            <h1 className="font-semibold text-black text-3xl  mb-1">Welcome To <span className="text-red-dark font-bold mb-3 text-3xl">Hiamps</span></h1>
            <h2 className="font-semibold text-black text-3xl  mb-3">
              Explore Our Complete Range of Power Solutions
            </h2>

            <p className="text-black mt-7">
            From high-performance tubular batteries to advanced inverters — find the perfect power solution designed for your home, office, or industry.
            </p>

            <a
              href="/products"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-red-dark py-3 px-9 ease-out duration-200 hover:bg-red-dark mt-5"
            >
              View All Our Products
            </a>
          </div>
          <div className="relative flex-1 w-full">
            <Image
              src="/images/pages/products/hi-amps-all-products.webp"
              alt="headphone"
              width={1000}
              height={1000}
              className="w-full h-auto ml-3  contrast-125"
            />
            <Image
              src="/images/pages/products/hi-amps-all-products.webp"
              alt="headphone"
              width={1000}
              height={1000}
              className="w-full h-auto absolute left-2 -z-1 md:left-10 bottom-0 brightness-105 contrast-125"
            />
            
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
