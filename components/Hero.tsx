"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Large Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8">
              {content.hero.headline}
            </h1>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.hero.cta}
            </motion.a>
          </motion.div>

          {/* Right: Social Proof Ticker */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {content.hero.socialProof.map((proof, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-accent pl-6 py-2"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <p className="text-lg text-foreground/70 font-light">
                  {proof}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

