"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InvertersUPS() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animation repeats on scroll up/down
    threshold: 0.2,
  });

  return (
    <section ref={ref}>
      <div className="xl:container">
        <div className="bg-white lg:m-20 m-0 rounded-lg shadow-xl relative z-10 overflow-hidden px-8 pb-8 pt-0 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>

          <div className="w-full">
            <div className="-mx-4 flex w-full flex-wrap items-center flex-col-reverse md:flex-row-reverse">
              {/* Left Image Section */}
              <motion.div
                className="flex-1 mt-20  justify-center w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/pages/products/hiamps-ups-inverter-2.webp"
                  alt="Hiamps Blue Series Battery"
                  width={450}
                  height={550}
                  className="mx-auto max-w-full transition delay-150 duration-300 -z-10 contrast-125"
                />
              </motion.div>

              {/* Right Text Section */}
              <motion.div
                className="w-full flex-1 px-4 lg:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="max-w-[565px] lg:ml-auto">
                  <h4 className="mb-3 text-xl font-medium text-red-dark">
                    Intelligent Power, Total Reliability
                  </h4>
                  <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                    Hiamps Inverters & UPS
                  </h2>
                  <p className="text-black text-xl md:text-3xl font-bold underline mb-6 uppercase"></p>

                  <p className="text-base text-black leading-relaxed mb-4">
                    With advanced DSP Sinewave Technology and real-time LCD
                    monitoring, Hi-Amps Inverters & UPS Systems deliver pure,
                    stable power for homes and offices. Designed for durability
                    and efficiency, they work seamlessly with Hi-Amps Batteries
                    to ensure uninterrupted performance every time.
                  </p>
                  <div className="mt-9">
                    <Link
                      href={"/products/inverter-ups"}
                      className=" justify-center py-3 px-7 text-white bg-red-dark font-medium rounded-md ease-out duration-200 hover:bg-red"
                    >
                      {" "}
                      Explore Inverters & UPS
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
