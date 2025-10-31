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

const Home = () => {
  return (
    <main>
      <Hero />
      <BrandStorySection />
      <CounterSection />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
