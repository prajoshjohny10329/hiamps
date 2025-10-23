import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiamps Products About Us",
  description: "This is Home for Hiamps Products ",
  // other metadata
};

export default function AboutPage() {
  return (
<section id="about-us" className="max-w-6xl mx-auto p-6 md:p-12">
  {/* <!-- Main Heading --> */}
  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Sunrise Industries</h1>
  
  {/* <!-- Company Overview --> */}
  <div className="mb-8">
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      For years, <strong>Sunrise Industries</strong> has been at the forefront of reliable energy solutions, delivering trusted power across South India. With decades of expertise in lead-acid battery manufacturing, we have built a reputation for unmatched quality, durability, and service.
    </p>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
      Our flagship brand, <strong>Hi-Amps Tubular Battery</strong>, is engineered for performance and longevity, with a proven lifespan of 10+ years under proper usage. Designed for households, businesses, and industrial applications, Hi-Amps has become a trusted name in dependable backup power.
    </p>
  </div>

  {/* <!-- Manufacturing & Capacity --> */}
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Manufacturing Excellence</h2>
    <p className="text-gray-700 leading-relaxed">
      From our state-of-the-art facility in Bangalore, we produce up to <strong>5,000 units monthly</strong>, including batteries and inverters of different capacities. Every product undergoes strict quality checks using selenium-lead alloys and precision processes that guarantee consistency and excellence.
    </p>
  </div>

  {/* <!-- Brand Story --> */}
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Hi-Amps Brand Story</h2>
    <p className="text-gray-700 leading-relaxed">
      <strong>Hi-Amps</strong>, our flagship brand, is trusted across South India for reliable batteries and inverters. Our tubular batteries last over 10 years, providing dependable power for homes, businesses, and industries. Guided by our promise — <em>“Quality Beyond Your Need”</em> — Hi-Amps continues to innovate toward solar and future-ready energy solutions.
    </p>
  </div>

  {/* <!-- Quality Assurance --> */}
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Quality Assurance</h2>
    <p className="text-gray-700 leading-relaxed">
      At Hi-Amps, quality is our top priority. Our tubular batteries are built to last, with many delivering over <strong>10+ years</strong> of service under proper maintenance. Regular upkeep ensures consistent performance and longevity, staying true to our promise of <em>“Quality Beyond Your Need”</em>.
    </p>
  </div>

  {/* <!-- Future Vision --> */}
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Our Vision</h2>
    <p className="text-gray-700 leading-relaxed">
      Sunrise Industries is not just committed to the present—we are building the future. We focus on next-generation energy technologies, including solar integration and advanced storage systems, to meet the evolving demands of a greener tomorrow.
    </p>
  </div>

  {/* <!-- CTA --> */}
  <div className="mt-10 text-center">
    <a href="/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition">
      Contact Us
    </a>
  </div>
</section>

  );
}
