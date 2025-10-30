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
          {/* second part  */}
          <div className="relative flex-1 w-full">
            <Image
              src="/images/pages/products/hi-amps-all-products.webp"
              alt="headphone"
              width={1000}
              height={1000}
              className="w-full h-auto ml-3"
            />
            <Image
              src="/images/pages/products/hi-amps-all-products.webp"
              alt="headphone"
              width={1000}
              height={1000}
              className="w-full h-auto absolute left-2 -z-1 md:left-10 bottom-0"
            />
            
          </div>

        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">True Wireless Noise Cancelling Headphone</a>
            </h1>

            <p>
              Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum
              nec suscipit.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-red-dark mt-10"
            >
              Shop Now
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">True Wireless Noise Cancelling Headphone</a>
            </h1>

            <p>
              Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum
              nec suscipit.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-red-dark mt-10"
            >
              Shop Now
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default HeroCarousal;
