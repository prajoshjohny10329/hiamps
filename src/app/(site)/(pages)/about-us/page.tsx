import BrandStorySection from "@/components/About/BrandStorySection";
import SunriseIndustries from "@/components/About/SunriseIndustries";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CounterSection from "@/components/Common/CounterSection";
import ContactSection from "@/components/Home/Contact/ContactSection";
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
      <CounterSection />
      <SunriseIndustries />
      <ContactSection />

    </section>
  );
}
