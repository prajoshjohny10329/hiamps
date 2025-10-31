import BrandStorySection from "@/components/About/BrandStorySection";
import SunriseIndustries from "@/components/About/SunriseIndustries";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hiamps Products About Us",
  description: "This is Home for Hiamps Products ",
  // other metadata
};

export default function AboutPage() {
  return (
    <section id="about-us" className="mx-auto py-6 ">
      <Breadcrumb title={"About Us"} pages={["About-us"]} />
      <BrandStorySection />
      <SunriseIndustries />
      <section className="relative pt-[80px]">
        <div className="container lg:max-w-[1120px]">
          {/* First Row */}
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            {/* Left Image */}
            <div className="w-full px-4 lg:w-1/2 flex justify-center pb-5 pt-15 md:pt-25 ">
              <div
                className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                data-wow-delay=".2s"
              >
                {/* Main Image */}

                <Image
                  src="/images/pages/products/hiamps-red-series-battery.webp"
                  alt="Hiamps Red Series Battery"
                  width={450}
                  height={550}
                  className="mx-auto max-w-full"
                />

                {/* Right Image */}
                <Image
                  src="/images/pages/products/hiamps-blue-series-battery.webp"
                  alt="Hiamps Blue Series Battery"
                  width={420}
                  height={550}
                  className="mx-auto max-w-full absolute top-6 right-10 sm:right-16 md:right-20 lg:right-30 -z-10"
                />

                {/* Left Image */}
                <Image
                  src="/images/pages/products/hiamps-green-series-battery.webp"
                  alt="Hiamps Green Series Battery"
                  width={420}
                  height={550}
                  className="mx-auto max-w-full absolute top-6 left-10 sm:left-16 md:left-20 lg:left-30 -z-10 "
                />

                <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-to-tr from-blue-200 to-purple-200"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="lg:ml-auto lg:max-w-[510px]">
                <span className="text-red mb-4 block text-lg font-medium md:text-[22px]">
                  Quality Beyond Your Need.
                </span>
                <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                  Power Backup Batteries
                </h2>
                <p className="text-black mb-[30px] text-base leading-relaxed">
                  Experience unmatched power and reliability with Hi-Amps
                  Tubular Batteries — engineered for long-lasting performance,
                  faster charging, and superior backup efficiency. Built to
                  deliver consistent energy for homes, offices, and solar
                  applications.
                </p>

                {/* Features */}
                {[
                  {
                    num: "01",
                    title: "Hi-Amps Red Series",
                    desc: "The King of Backup and Life",
                  },
                  {
                    num: "02",
                    title: "Hi-Amps Green Series",
                    desc: "Solar & Home UPS Battery (C20)",
                  },
                  {
                    num: "03",
                    title: "Hi-Amps Blue Series",
                    desc: "Home UPS & Office Battery (C20)",
                  },
                ].map((item) => (
                  <div key={item.num} className="mb-[30px] flex items-center">
                    <div className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-300 text-xl font-semibold text-black dark:text-white">
                      {item.num}
                    </div>
                    <div>
                      <h5 className="text-xl font-medium text-black dark:text-white">
                        {item.title}
                      </h5>
                      <p className="text-body text-base text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex ml-10 my-5">
                <a
                  href="/products/power-backup-batteries"
                  className="hidden md:inline-flex justify-center py-3 px-7 text-white bg-red-dark font-medium rounded-md ease-out duration-200 hover:bg-red"
                >
                  Discover Power Backup Batteries
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </section>
  );
}
