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

      <div className="h-14 bg-gradient-to-r from-red to-red-dark"></div>


      {/* <!-- Main Heading --> */}
      <section  className="max-w-[1170px] w-full mx-auto px-4 py-20 sm:px-8 xl:px-0">
        <div className="flex  flex-col md:flex-row">
        <div className="flex-1 ">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-black ">
            <span className="text-red">Sunrise Industries</span>
          </h2>
          <p className="text-black text-xl md:text-3xl font-bold underline mb-6 uppercase">Quality Beyond Your Need</p>

          <p className="text-base text-black leading-relaxed mb-4">
            For years, <strong>Sunrise Industries</strong> has been at the
            forefront of reliable energy solutions, delivering trusted power
            across South India. With decades of expertise in lead-acid battery
            manufacturing, we have built a reputation for unmatched quality,
            durability, and service.
          </p>

          <p className="text-base text-black leading-relaxed">
            Our flagship brand, <strong>Hi-Amps Tubular Battery</strong>, is
            engineered for performance and longevity, with a proven lifespan of
            over 10 years under proper usage. Designed for households,
            businesses, and industrial applications, Hi-Amps has become a
            trusted name in dependable backup power.
          </p>
        </div>
        <div className="flex-1 mt-10 md:mt-0  justify-center  ">
            <img
              src="/images/pages/slider-1.webp"
              alt="Sunrise Industries"
              width="100%"
            />
        </div>
        </div>
      </section>

       {/* images  */}
      <section className="mb-10">
        <div className="mx-auto max-w-[1390px] px-4 md:px-8 xl:px-9">
          <div className="flex items-center gap-8 xl:gap-[30px]">
            {/* Left Images Section */}
            <div className="animate_left relative hidden gap-8 md:flex md:w-1/2">
              <div className="relative">
                <img
                  alt="Shape"
                  loading="lazy"
                  width={36}
                  height={66}
                  decoding="async"
                  className="absolute -left-5 top-5"
                  style={{ color: "transparent" }}
                  src="/images/shape/shape-05.svg"
                />
                <img
                  alt="About"
                  loading="lazy"
                  width={274}
                  height={323}
                  decoding="async"
                  className="mb-8 aspect-[274/323] rounded-lg object-cover"
                  style={{ color: "transparent" }}
                  src="/images/pages/slider-1.webp"
                />
                <img
                  alt="About"
                  loading="lazy"
                  width={290}
                  height={343}
                  decoding="async"
                  className="aspect-[290/343] rounded-lg object-cover"
                  style={{ color: "transparent" }}
                  src="/images/pages/slider-1.webp"
                />
              </div>

              <div>
                <img
                  alt="Shape"
                  loading="lazy"
                  width={43}
                  height={86}
                  decoding="async"
                  style={{ color: "transparent" }}
                  src="/images/shape/shape-06.svg"
                />
                <img
                  alt="About"
                  loading="lazy"
                  width={290}
                  height={485}
                  decoding="async"
                  className="mb-5 mt-[7.5px] aspect-[273/457] rounded-lg object-cover"
                  style={{ color: "transparent" }}
                  src="/images/pages/slider-1.webp"
                />
                <img
                  alt="Shape"
                  loading="lazy"
                  width={198}
                  height={99}
                  decoding="async"
                  className="mx-auto"
                  style={{ color: "transparent" }}
                  src="/images/shape/shape-07.svg"
                />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="animate_right md:w-1/2">
              <h4 className="mb-5 text-xl font-medium text-red-dark">Why Choose Us</h4>
              <h2 className="mb-[7.5px] text-3xl font-semibold text-black dark:text-white lg:text-4xl xl:text-title-xl">
                Quality Assurance
              </h2>
              <p className="lg:w-[95%] text-black mt-3">
                At Hi-Amps, quality is our top priority. Our tubular batteries are
                built to last, with many delivering over <strong>10+ years</strong> of
                service under proper maintenance. Regular upkeep ensures consistent
                performance and longevity, staying true to our promise of{" "}
                <em>“Quality Beyond Your Need”</em>.
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
                <span className="text-black dark:text-white ms-3">SEE HOW WE WORK</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
            <span className="title">ABOUT US</span>
            <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              Know Details About Our Company
            </h2>
            <p className="text-base text-dark-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
            </p>
          </div>

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
                src="/images/pages/slider-1.webp"
                alt="about image 1"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            {/* Second Image */}
            <div className="aspect-[53/66] absolute right-0 top-1/2 z-10 w-full max-w-[315px] -translate-y-1/2">
              <Image
                src="/images/pages/slider-1.webp"
                alt="about image 2"
                fill
                className="object-cover"
                priority={false}
              />
              <div className="border-primary/10 bg-primary/5 absolute -left-5 -top-5 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10"></div>
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
            <h2 className="font-heading text-dark mb-8 text-2xl font-bold sm:text-[40px] sm:leading-[50px] dark:text-white">
              Built-with Latest Tools and Technologies
            </h2>
            <p className="mb-6 text-base text-dark-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
              accumsan ultricies at in libero accumsan.
            </p>
            <p className="mb-6 text-base text-dark-text">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>
            <p className="text-base text-dark-text">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative pt-[150px]">
      <div className="container lg:max-w-[1120px]">
        {/* First Row */}
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* Left Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
              data-wow-delay=".2s"
            >
              <Image
                src="/images/about/about-1-light.png"
                alt="About Image"
                width={470}
                height={594}
                className="mx-auto max-w-full"
              />
              <div className="absolute top-0 right-5 -z-10">
                {/* Decorative SVG */}
                <svg
                  width="72"
                  height="50"
                  viewBox="0 0 72 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8126 0.216481C21.8159 0.143661 21.8196 0.071493 21.8237 0C21.4747 7.63863 25.1425 21.8522 42.5976 21.0032C35.4678 21.503 21.3391 26.5685 21.822 42.8298C21.6005 35.7375 17.0094 21.7229 0.441399 21.645C7.47462 21.5363 20.8883 17.1617 21.8126 0.216481Z"
                    fill="#7083F5"
                  />
                  <path
                    d="M58.7832 24.2896C58.5804 28.7428 60.7811 37.271 71.2541 36.7616C66.9763 37.0614 58.499 40.1008 58.7888 49.8576C58.6559 45.6022 55.9013 37.1934 45.9605 37.1467C50.1803 37.0815 58.2286 34.4567 58.7832 24.2896Z"
                    fill="#7ED8FF"
                  />
                </svg>
              </div>
              <div className="bg-gradient-1 absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-to-tr from-blue-200 to-purple-200"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="lg:ml-auto lg:max-w-[510px]">
              <span className="text-primary mb-4 block text-lg font-medium md:text-[22px]">
                Track Audience Activities
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                Track Your Audience Activities
              </h2>
              <p className="text-body mb-[30px] text-base leading-relaxed text-gray-600">
                Schedule your posts for times when your audience is most active.
                Choose from our best-time predictions, or create your own
                publishing schedule.
              </p>

              {/* Features */}
              {[
                {
                  num: "01",
                  title: "Lorem ipsum dolor.",
                  desc: "Ut ultricies lacus non fermentum ultrices.",
                },
                {
                  num: "02",
                  title: "Lorem ipsum dolor.",
                  desc: "Ut ultricies lacus non fermentum ultrices.",
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
          </div>
        </div>

        {/* Second Row */}
        <div className="pt-[100px]">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            {/* Left Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="lg:max-w-[510px]">
                <span className="text-primary mb-4 block text-lg font-medium md:text-[22px]">
                  Create Audience Reports
                </span>
                <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                  Know More About Your Audience
                </h2>
                <p className="text-body mb-[30px] text-base leading-relaxed text-gray-600">
                  Schedule your posts for times when your audience is most
                  active. Choose from our best-time predictions, or create your
                  own publishing schedule.
                </p>
                <a
                  href="#"
                  className="bg-primary hover:bg-primary/90 inline-block rounded-md px-8 py-[10px] text-base font-medium text-white"
                >
                  Know More
                </a>
              </div>
            </div>
            

            {/* Right Image */}
            <div className="order-first w-full px-4 lg:order-last lg:w-1/2">
              <div className="relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mr-0 lg:mb-0">
                <Image
                  src="/images/about/about-2-light.png"
                  alt="About Image 2"
                  width={470}
                  height={594}
                  className="mx-auto max-w-full"
                />
                <div className="absolute top-0 right-5 -z-10">
                  {/* Decorative SVG 2 */}
                  <svg
                    width="72"
                    height="50"
                    viewBox="0 0 72 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.8126 0.216481C21.8159 0.143661 21.8196 0.071493 21.8237 0C21.4747 7.63863 25.1425 21.8522 42.5976 21.0032C35.4678 21.503 21.3391 26.5685 21.822 42.8298C21.6005 35.7375 17.0094 21.7229 0.441399 21.645C7.47462 21.5363 20.8883 17.1617 21.8126 0.216481Z"
                      fill="#FF9996"
                    />
                    <path
                      d="M58.7832 24.2896C58.5804 28.7428 60.7811 37.271 71.2541 36.7616C66.9763 37.0614 58.499 40.1008 58.7888 49.8576C58.6559 45.6022 55.9013 37.1934 45.9605 37.1467C50.1803 37.0815 58.2286 34.4567 58.7832 24.2896Z"
                      fill="#FFCB78"
                    />
                  </svg>
                </div>
                <div className="bg-gradient-2 absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-to-tr from-pink-200 to-yellow-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      


      {/* <!-- Company Overview --> */}

      {/* <!-- Manufacturing & Capacity --> */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Manufacturing Excellence
        </h2>
        <p className="text-black leading-relaxed">
          From our state-of-the-art facility in Bangalore, we produce up to{" "}
          <strong>5,000 units monthly</strong>, including batteries and
          inverters of different capacities. Every product undergoes strict
          quality checks using selenium-lead alloys and precision processes that
          guarantee consistency and excellence.
        </p>
      </div>

      {/* <!-- Brand Story --> */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Hi-Amps Brand Story
        </h2>
        <p className="text-black leading-relaxed">
          <strong>Hi-Amps</strong>, our flagship brand, is trusted across South
          India for reliable batteries and inverters. Our tubular batteries last
          over 10 years, providing dependable power for homes, businesses, and
          industries. Guided by our promise —{" "}
          <em>“Quality Beyond Your Need”</em> — Hi-Amps continues to innovate
          toward solar and future-ready energy solutions.
        </p>
      </div>


      {/* <!-- Future Vision --> */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Our Vision
        </h2>
        <p className="text-black leading-relaxed">
          Sunrise Industries is not just committed to the present—we are
          building the future. We focus on next-generation energy technologies,
          including solar integration and advanced storage systems, to meet the
          evolving demands of a greener tomorrow.
        </p>
      </div>

      {/* <!-- CTA --> */}
      <div className="mt-10 text-center">
        <a
          href="/contact"
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
