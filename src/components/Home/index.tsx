import React from "react";
import Hero from "./Hero";
import CounterSection from "../Common/CounterSection";
import PowerBackupBattery from "./Products/PowerBackupBattery";
import LithiumBatteries from "./Products/LithiumBatteries";
import InvertersUPS from "./Products/InvertersUPS";
import BatteryTrolleyCabinets from "./Products/BatteryTrolleyCabinets";
import HomePageProducts from "./Products/HomeProducts";
import ContactSection from "./Contact/ContactSection";
import AboutUsAtHome from "./About/AboutUsAtHome";

const Home = () => {
  return (
    <main style={{ background: 'red' }}>
      <Hero />
      <AboutUsAtHome />
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
