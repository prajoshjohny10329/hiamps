import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import CounterSection from "../Common/CounterSection";
import BrandStorySection from "../About/BrandStorySection";
import AllProducts from "./AllProducts";
import PowerBackupBattery from "./Products/PowerBackupBattery";
import LithiumBatteries from "./Products/LithiumBatteries";
import InvertersUPS from "./Products/InvertersUPS";
import BatteryTrolleyCabinets from "./Products/BatteryTrolleyCabinets";
import HomePageProducts from "./Products/HomeProducts";
import ContactSection from "./Contact/ContactSection";

const Home = () => {
  return (
    <main style={{ background: 'red' }}>
      <Hero />
      <BrandStorySection />
      <HomePageProducts />
      <CounterSection />
      <PowerBackupBattery />
      <LithiumBatteries />
      <InvertersUPS />
      <BatteryTrolleyCabinets />
      <ContactSection />
    </main>
  );
};

export default Home;
