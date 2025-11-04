"use client";
import { motion } from "framer-motion";

export default function AboutUsAtHomeVideo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl "
        >
          <iframe
  width="100%"
  height="405px"
  src="https://www.youtube.com/embed/ruddomusGjc?autoplay=1&mute=1&loop=1&playlist=ruddomusGjc"
  title="Promo Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-full rounded-xl"
/>

        </motion.div>
      </div>
    </section>
  );
}
