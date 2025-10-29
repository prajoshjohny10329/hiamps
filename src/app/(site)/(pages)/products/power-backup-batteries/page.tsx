"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

export default function PowerBackupBatteries() {
  return (
    <section>
      <Breadcrumb
        title={"Power Backup Batteries"}
        pages={["Power Backup Batteries"]}
      />

      <section className="mx-auto max-w-[1390px] px-4 md:px-8 xl:px-9">
        <div className="row-auto md:flex items-center gap-8 xl:gap-[30px]">
          {/* Left Images Section */}
          <div className="animate_right md:w-1/2">
            <h4 className="mb-5 text-xl font-medium text-red-dark">
              Why Choose Us
            </h4>
            <h2 className="mb-[7.5px] text-3xl font-semibold text-black dark:text-white lg:text-4xl xl:text-title-xl">
              Power Backup Batteries
            </h2>
            <p className="lg:w-[95%] text-black mt-3">
              At Hi-Amps, quality is our top priority. Our tubular batteries are
              built to last, with many delivering over{" "}
              <strong>10+ years</strong> of service under proper maintenance.
              Regular upkeep ensures consistent performance and longevity,
              staying true to our promise of <em>“Quality Beyond Your Need”</em>
              .
            </p>
            <a className="mt-10 inline-flex items-center gap-[6.5px]" href="#">
              <span className="relative z-[1] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-dark">
                <span className="absolute -z-[1] inline-flex h-full w-full animate-ping rounded-full bg-red-dark opacity-75"></span>
                <img
                  alt="Play"
                  loading="lazy"
                  width={24}
                  height={24}
                  decoding="async"
                  style={{ color: "transparent" }}
                  src="/images/icons/icon-play.svg"
                />
              </span>
              <span className="text-black dark:text-white ms-3">
                SEE HOW WE WORK
              </span>
            </a>
          </div>

          {/* Right Text Section */}
          <div className="animate_left relative flex gap-8 md:flex md:w-1/2">
            <div>
              <img
                alt="About"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg object-cover"
                style={{ color: "transparent" }}
                src="/images/pages/slider-1.webp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1390px] px-4 md:px-8 xl:px-9 py-20">
        <div className="row-auto md:flex items-center gap-8 xl:gap-[30px]">
          {/* First Row */}
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            {/* Right Content */}
            <div className="w-full px-4 lg:w-1/2 py-5">
              <div className="lg:ml-auto ">
                <span className="text-red mb-4 block text-lg font-medium md:text-[22px]">
                  The King of Backup and Life
                </span>
                <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                  Hi-Amps Red Series
                </h2>
                <p className="text-lg md:text-base leading-relaxed text-gray-7 mb-4">
                  The <strong>Hi-Amps Red Series</strong> represents the
                  strength and endurance of our tubular battery technology.
                  Engineered with heavy positive and negative plates, this
                  series has been extensively tested and proven to deliver
                  exceptional reliability in the toughest solar applications.
                  Branded as the <em>“King of Backup and Life,”</em> the Red
                  Series provides maximum backup hours, rugged durability, and
                  consistent power delivery, even under high-demand conditions.
                  Built with <strong>C10-rated plates</strong>, it is designed
                  to sustain long discharge cycles, making it ideal for solar
                  systems, industrial use, and heavy-duty environments.
                </p>
                <p className="text-lg md:text-base leading-relaxed text-black">
                  Customers across South India trust the{" "}
                  <strong>Hi-Amps Red Series</strong> as the benchmark for
                  long-lasting solar batteries that deliver dependable energy
                  year after year.
                </p>
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
                  src="/images/pages/products/hiamps-red-series-battery.webp"
                  alt="hiamps-red-series-battery"
                  width={450}
                  height={550}
                  className="mx-auto max-w-full"
                />

                {/* Right Image */}
                <Image
                  src="/images/pages/products/hiamps-red-series-battery.webp"
                  alt="hiamps-red-series-battery"
                  width={420}
                  height={550}
                  className="mx-auto max-w-full absolute top-5 right-10 sm:right-16 md:right-20 lg:right-30 -z-10"
                />

                {/* Left Image */}
                <Image
                  src="/images/pages/products/hiamps-red-series-battery.webp"
                  alt="hiamps-red-series-battery"
                  width={420}
                  height={550}
                  className="mx-auto max-w-full absolute top-5 left-10 sm:left-16 md:left-20 lg:left-30 -z-10"
                />

                <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-to-tr from-blue-200 to-purple-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* green series Battery */}
      <section className="mx-auto max-w-[1390px] px-4 md:px-8 xl:px-9 py-20">
        <div className="row-auto md:flex items-center gap-8 xl:gap-[30px]">
          {/* First Row */}
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            {/* Right Content */}
            <div className="w-full px-4 lg:w-1/2 py-5">
              <div className="lg:ml-auto ">
                <span className="text-red mb-4 block text-lg font-medium md:text-[22px]">
                  Solar &amp; Home UPS Battery (C20)
                </span>
                
                <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                  Hi-Amps <span className="text-green animate-bounce">Green Series</span>
                </h2>
                <p className="text-lg md:text-base leading-relaxed text-black">
                  The <strong>Hi-Amps Green Series</strong> is our
                  multi-application powerhouse, created for customers who
                  require both versatility and durability in their power backup.
                  Designed with <strong>C10 tubular plates</strong> that are
                  thoroughly tried and perfected, the Green Series ensures a
                  long operational life with consistent performance. This
                  battery adapts seamlessly to{" "}
                  <strong>homes, offices, industries,</strong>
                  and <strong>solar installations</strong>, offering a balanced
                  solution that combines strength, efficiency, and
                  affordability. Customers value the Green Series for its
                  ability to handle frequent power cuts, deliver stable backup,
                  and reduce downtime.
                </p>

                <p className="text-lg md:text-base leading-relaxed text-black">
                  Whether it’s keeping homes running smoothly, offices
                  productive, or industries powered without interruption, the{" "}
                  <strong>Hi-Amps Green Series</strong> stands as the trusted
                  all-rounder in our product family.
                </p>
              </div>
            </div>

            {/* Left Image */}
            <div className="w-full px-4 lg:w-1/2 flex justify-center pb-5 pt-15 md:pt-25 ">
              <div
                className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                data-wow-delay=".2s"
              >
                {/* Main Image */}
                <Image
                  src="/images/pages/products/hiamps-green-series-battery.webp"
                  alt="Hiamps Green Series Battery"
                  width={450}
                  height={550}
                  className="mx-auto max-w-full"
                />

                {/* Right Image */}
                <Image
                  src="/images/pages/products/hiamps-green-series-battery.webp"
                  alt="Hiamps Green Series Battery"
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
          </div>
        </div>
      </section>

      {/* Blue series Battery */}
      <section className="mx-auto max-w-[1390px] px-4 md:px-8 xl:px-9 py-20">
        <div className="row-auto md:flex items-center gap-8 xl:gap-[30px]">
          {/* First Row */}
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            {/* Right Content */}
            <div className="w-full px-4 lg:w-1/2 py-5">
              <div className="lg:ml-auto ">
                <span className="text-red mb-4 block text-lg font-medium md:text-[22px]">
                  Home UPS &amp; Office Battery (C20)
                </span>
                
                <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                  Hi-Amps <span className="text-blue-dark animate-bounce">Blue Series</span>
                </h2>
        <p className="text-lg md:text-base leading-relaxed text-black">
                  The <strong>Hi-Amps Blue Series</strong> is our latest innovation, developed
          to address the specific needs of home and office power backup systems.
          Unlike traditional solutions, the Blue Series is optimized with
          <strong>C20 plates</strong>, making it the perfect choice for setups where
          multiple batteries are required to provide smooth, extended backup. With its refined design and improved performance standards, the
          <strong>Blue Series</strong> delivers steady power output, easy maintenance,
          and reliable service life, making it a preferred choice for both
          residential and commercial users. <br />Since its introduction, the <strong>Hi-Amps Blue Series</strong> has received
          an overwhelmingly positive response from customers, reflecting its superior
          quality, reliability, and modern engineering. It represents our continuous
          effort to bring <strong>future-ready, customer-focused solutions</strong> to
          the market under the trusted Hi-Amps name.
                </p>
              </div>
            </div>

            {/* Left Image */}
            <div className="w-full px-4 lg:w-1/2 flex justify-center pb-5 pt-15 md:pt-25 ">
              <div
                className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                data-wow-delay=".2s"
              >
                {/* Main Image */}
                <Image
                  src="/images/pages/products/hiamps-blue-series-battery.webp"
                  alt="Hiamps Blue Series Battery"
                  width={450}
                  height={550}
                  className="mx-auto max-w-full transition delay-150 duration-300"
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
                  src="/images/pages/products/hiamps-blue-series-battery.webp"
                  alt="Hiamps Blue Series Battery"
                  width={420}
                  height={550}
                  className="mx-auto max-w-full absolute top-6 left-10 sm:left-16 md:left-20 lg:left-30 -z-10 "
                />

                <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-to-tr from-blue-200 to-purple-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
