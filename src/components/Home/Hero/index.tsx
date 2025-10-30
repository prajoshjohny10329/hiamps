import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-44 xl:pt-42.5 bg-[#ffffff]">
      <div className=" w-full mx-auto ">
        <div className="flex flex-wrap gap-5">
          <div className=" w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/pages/bg/3.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1 blur-sm"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
