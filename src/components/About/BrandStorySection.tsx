"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function BrandStorySection() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animation repeats on scroll up/down
    threshold: 0.2,
  });

  return (
    <section ref={ref}>
      <div className="px-4 xl:container">
        <div className="bg-white lg:m-20 m-0 rounded-lg shadow-2xl relative z-10 overflow-hidden px-8 pb-8 pt-0 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>

          <div className="w-full">
            <div className="-mx-4 flex w-full flex-wrap items-center pt-[70px] flex-row-reverse">
              
              {/* Left Image Section */}
              <motion.div
                className="w-full px-4 lg:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">

                  {/* First Image - from top */}
                  <motion.div
                    className="aspect-[86/121] absolute left-0 top-0 w-full max-w-[344px]"
                    initial={{ opacity: 0, y: -80 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -80 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/pages/products/hiamps-ups-inverter-bg.webp"
                      alt="about image 1"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </motion.div>

                  {/* Second Image - from right */}
                  <motion.div
                    className="aspect-[53/66] absolute right-0 top-15 z-10 w-full max-w-[315px] -translate-y-1/2"
                    initial={{ opacity: 0, x: 80 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    <Image
                      src="/images/pages/products/hiamps-ups-inverter-bg.webp"
                      alt="about image 2"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                    <div className="border-red/10 bg-red-dark absolute -left-5 -top-5 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-red/10 dark:bg-red/10"></div>
                  </motion.div>

                  {/* Decorative SVG */}
                  <div className="absolute right-0 top-24 z-40">
                    {/* your SVG unchanged */}
                  </div>
                </div>
              </motion.div>

              {/* Right Text Section */}
              <motion.div
                className="w-full px-4 lg:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="max-w-[565px] lg:ml-auto">
                  <h2 className="font-heading text-black mb-8 text-2xl font-bold sm:text-[40px] sm:leading-[50px] dark:text-white">
                    <span className="text-red-dark">Hi-Amps</span> Brand Story
                  </h2>
                  <p className="mb-6 text-base text-black">
                    <strong>Hi-Amps</strong>, the flagship brand of Sunrise
                    Industries, is trusted across South India for delivering
                    reliable batteries and inverters. With a modern facility
                    capable of producing 5,000 units monthly and an experienced
                    workforce, we ensure every product meets the highest standards.
                  </p>
                  <p className="mb-6 text-base text-black">
                    Our tubular batteries last over 10 years, providing
                    dependable power for homes, businesses, and industries.
                    Guided by our promise —{" "}
                    <em>“Quality Beyond Your Need”</em> — Hi-Amps continues to
                    innovate toward solar and future-ready energy solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
