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

      {/* <!-- Main Heading --> */}
      <section className="max-w-[1170px] w-full mx-auto px-4 py-20 sm:px-8 xl:px-0">
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

      {/* <!-- Quality Assurance --> */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Quality Assurance
        </h2>
        <p className="text-black leading-relaxed">
          At Hi-Amps, quality is our top priority. Our tubular batteries are
          built to last, with many delivering over <strong>10+ years</strong> of
          service under proper maintenance. Regular upkeep ensures consistent
          performance and longevity, staying true to our promise of{" "}
          <em>“Quality Beyond Your Need”</em>.
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
