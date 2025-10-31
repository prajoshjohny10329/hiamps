"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "DSP Sinewave Technology",
    description:
      "Provides pure and consistent power, ideal for all appliances.",
  },
  {
    title: "Heavy-Duty Transformer",
    description: "Enhances durability and extends inverter lifespan.",
  },
  {
    title: "MCB Input Protection",
    description: "Shields your system and users from electrical faults.",
  },
  {
    title: "DSP Processor",
    description: "Offers intelligent control and optimized efficiency.",
  },
  {
    title: "Real-Time LCD Display",
    description: "Shows clear updates on load, battery level, and backup time.",
  },
  {
    title: "Flexible Battery Compatibility",
    description:
      "Works seamlessly with all battery types, especially Hi-Amps Tubular Batteries.",
  },
];

export default function FeaturesAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-5 mb-10">
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="px-4  text-lg  leading-relaxed text-black mb-4 text-black  shadow-sm transition-all bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left font-medium text-gray-800"
            >
              <span className="before:content-['•'] before:mr-2 before:text-red-dark text-xl font-medium">
                {feature.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180 text-red-dark" : ""
                }`}
              />
            </button>

            {activeIndex === index && (
              <p className="m-3 pl-5 text-black text-lg font-base transition-all duration-300">
                {feature.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
