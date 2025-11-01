"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AllProducts() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animation repeats on scroll up/down
    threshold: 0.2,
  });

  return (
    <section ref={ref}>
      <div className="px-4 xl:container">
        <div className=" bg-white md:pt-10 lg:m-20 m-0 rounded-lg shadow-xl  overflow-hidden px-0 pb-8 pt-3 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>

          <div className="w-full">
            <div className="-mx-4 flex w-full flex-wrap items-center pt-[70px] flex-row-reverse">
              {/* Left Image Section */}
              <motion.div
                className="flex-1 justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/pages/banner/hiamps-all-products.webp"
                  alt="Sunrise Industries"
                  width={1000}
                  height={1001}
                  className="mx-auto max-w-full rounded-lg"
                />
              </motion.div>

              {/* Right Text Section */}
              <motion.div
                className="w-full px-4 lg:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="max-w-[565px] lg:ml-auto">
                  <h4 className="mb-3 text-xl font-medium text-red-dark">
                    Quality Beyond Your Need
                  </h4>
                  <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[44px] md:leading-tight dark:text-white">
                    📞 Get in Touch with Us
                  </h2>
                  <p className="text-black text-xl md:text-3xl font-bold underline mb-6 uppercase"></p>

                  <p className="text-base text-black leading-relaxed mb-4">
                    Have questions or need assistance choosing the right power solution? Our team at Sunrise Industries is always ready to help. Reach out today — we’re just a call or message away!
                  </p>

                  <p className="text-base text-black leading-relaxed">
                    Our flagship brand, <strong>Hi-Amps Tubular Battery</strong>
                    , is engineered for performance and longevity, with a proven
                    lifespan of over 10 years under proper usage. Designed for
                    households, businesses, and industrial applications, Hi-Amps
                    has become a trusted name in dependable backup power.
                  </p>
                  <Link href={'/products'} className=" justify-center py-3 px-7 text-white bg-red-dark font-medium rounded-md ease-out duration-200 hover:bg-red"> View All Our Products
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
