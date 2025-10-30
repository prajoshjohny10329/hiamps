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

      <section >
        <div className="px-4 xl:container">
          <div className="relative z-10 overflow-hidden rounded-sm px-8 pb-8 pt-0 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>

            <div className="w-full">
              <div className="-mx-4 flex w-full flex-wrap items-center pt-[70px] flex-row-reverse">
                {/* Left Image Section */}
                <div className="w-full px-4 lg:w-1/2">
                  <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
                    {/* First Image */}
                    <div className="aspect-[86/121] absolute left-0 top-0 w-full max-w-[344px]">
                      <Image
                        src="/images/pages/products/hiamps-ups-inverter-bg.webp"
                        alt="about image 1"
                        fill
                        className="object-cover"
                        priority={false}
                      />
                    </div>

                    {/* Second Image */}
                    <div className="aspect-[53/66] absolute right-0 top-1/2 z-10 w-full max-w-[315px] -translate-y-1/2">
                      <Image
                        src="/images/pages/products/hiamps-ups-inverter-bg.webp"
                        alt="about image 2"
                        fill
                        className="object-cover"
                        priority={false}
                      />
                      <div className="border-red/10 bg-red/5 absolute -left-5 -top-5 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-red/10 dark:bg-red/10"></div>
                    </div>

                    {/* Decorative SVG */}
                    <div className="absolute right-0 top-24 z-40">
                      <svg
                        width="72"
                        height="38"
                        viewBox="0 0 72 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                          fill="#4A6CF7"
                        />
                        {/* Other SVG paths truncated for brevity */}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Text Section */}
                <div className="w-full px-4 lg:w-1/2">
                  <div className="max-w-[565px] lg:ml-auto">
                    <h2 className="font-heading text-black mb-8 text-2xl font-bold sm:text-[40px] sm:leading-[50px] dark:text-white">
                      <span className="text-red-dark">Hi-Amps</span> Brand Story
                    </h2>
                    <p className="mb-6 text-base text-black">
                      <strong>Hi-Amps</strong>, the flagship brand of Sunrise
                      Industries, is trusted across South India for delivering
                      reliable batteries and inverters. With a modern facility
                      capable of producing 5,000 units monthly and an
                      experienced workforce, we ensure every product meets the
                      highest standards.
                    </p>
                    <p className="mb-6 text-base text-black">
                      Our tubular batteries last over 10 years, providing
                      dependable power for homes, businesses, and industries.
                      Guided by our promise —{" "}
                      <em>“Quality Beyond Your Need”</em> — Hi-Amps continues to
                      innovate toward solar and future-ready energy solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Main Heading --> */}
      <section className="max-w-[1170px] w-full mx-auto px-4 py-20 sm:px-8 xl:px-0">
        <div className="flex  flex-col md:flex-row">
          <div className="flex-1 ">
            <h4 className="mb-3 text-xl font-medium text-red-dark">
              Quality Beyond Your Need
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
              Sunrise Industries
            </h2>
            <p className="text-black text-xl md:text-3xl font-bold underline mb-6 uppercase"></p>

            <p className="text-base text-black leading-relaxed mb-4">
              For years, <strong>Sunrise Industries</strong> has been at the
              forefront of reliable energy solutions, delivering trusted power
              across South India. With decades of expertise in lead-acid battery
              manufacturing, we have built a reputation for unmatched quality,
              durability, and service.
            </p>

            <p className="text-base text-black leading-relaxed">
              Our flagship brand, <strong>Hi-Amps Tubular Battery</strong>, is
              engineered for performance and longevity, with a proven lifespan
              of over 10 years under proper usage. Designed for households,
              businesses, and industrial applications, Hi-Amps has become a
              trusted name in dependable backup power.
            </p>
          </div>
          <div className="flex-1 mt-20  justify-center">
            <Image
                  src="/images/pages/bg/hi-amps-banner.webp"
                  alt="Sunrise Industries"
                  width={1000}
                  height={1001}
                  className="mx-auto max-w-full"
                />
          </div>
        </div>
      </section>

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
              <div className="flex justify-center my-5">
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
