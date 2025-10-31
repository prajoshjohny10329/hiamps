import React from "react";
import Image from "next/image";
import FeaturesAccordion from "@/components/Products/UPS/FeaturesAccordion";

const page = () => {
  return (
    <>
    <section className="mt-[150px] mx-auto max-w-[1390px] px-4 md:px-8 ">
      <div className="mt-[220px] ">
        <h1 className="text-red mb-4 block text-lg font-medium md:text-[22px] text-center">
          Hi-Amps Inverters & UPS Systems
        </h1>
        <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] text-center md:leading-tight dark:text-white">
          Power You Can Trust <br /> Intelligent, Efficient, and Reliable
        </h2>
      </div>
      <div className="px-0  flex items-center pt-6 sm:pt-0 flex-col md:flex-row">
        <div className="flex-1  py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
          <h2 className="mb-2 text-3xl font-bold text-black text-black">Complete <strong className="text-red">Power Solutions</strong> <br /> from a  Trusted Name</h2>
          <p className="text-black mt-7">
            With decades of expertise in long-lasting{" "}
            <strong>tubular battery manufacturing, Hi-Amps</strong> proudly
            expands into <strong>power inverters and UPS systems</strong>,
            offering a complete energy solution under one trusted brand. Our
            products are designed to provide{" "}
            <strong>uninterrupted power</strong>, ensuring your home, office, or
            business stays running smoothly even during power outages.
          </p>

        </div>
        <div className="relative flex-1 w-full">
          <Image
            src="/images/pages/products/hiamps-ups-inverter-1.webp"
            alt="Hiamps UPS Inverter"
            width={450}
            height={550}
            className="mx-auto max-w-full transition delay-150 duration-300 -z-10 contrast-125"
          />

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

      <div className="row-auto md:flex items-center gap-8 xl:gap-[30px]">
              {/* First Row */}
              <div className="-mx-4 flex flex-wrap items-center justify-between">
                {/* Right Content */}
                <div className="flex-1  py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
                  <div className="lg:ml-auto  ">
                    <span className="text-red mb-4 block text-lg font-medium md:text-[22px]">
                      Smart Technology for
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                      Stable Performance
                    </h2>
                    <p className="text-lg  leading-relaxed text-black mb-2">
                      Every Hi-Amps Inverter is powered by <strong>advanced DSP (Digital Signal Processor) Sinewave Technology,</strong> delivering pure, stable, and noise-free power output. This ensures safe performance for <strong>sensitive appliances</strong> such as computers, medical equipment, and home electronics.
                    </p>
                    <FeaturesAccordion />
                  </div>
                </div>
    
                {/* Left Image */}
                <div className="w-full px-4 lg:w-1/2 flex justify-center py-5 pt-15 md:pt-25">
                  <div
                    className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                    data-wow-delay=".2s"
                  >
                    {/* Main Image */}
                    <Image
                      src="/images/pages/products/hiamps-ups-inverter-2.webp"
                      alt="hiamps-red-series-battery"
                      width={450}
                      height={550}
                      className="mx-auto max-w-full contrast-125"
                    />
    
                    <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-to-tr from-blue-200 to-purple-200"></div>
                  </div>
                </div>
              </div>
        </div>

    </section>

    </>
    
  );
};

export default page;
