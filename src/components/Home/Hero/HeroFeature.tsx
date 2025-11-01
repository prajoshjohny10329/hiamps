import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "🧪",
    title: "Quality",
    description: "100% Tested & Certified",
  },
  {
    img: "🔋",
    title: "Battery Life Guarantee",
    description: "10+ Years Lifespan",
  },
  {
    img: "☀️",
    title: "Solar-Ready Solutions",
    description: "Future-Ready Power",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 md:px-0 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex flex-1 items-center gap-4" key={key}>
            {/* <Image src={item.img} alt="icons" width={60} height={60} /> */}
            <p className="text-4xl">{item.img}</p>

            <div>
              <h3 className="text-xl font-semibold text-red-dark">{item.title}</h3>
              <p className="text-sm text-black">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
