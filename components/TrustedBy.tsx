"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-center text-sm sm:text-base text-foreground/60 mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {content.trustedBy.title}
        </motion.p>
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap marquee">
            {[...content.trustedBy.logos, ...content.trustedBy.logos].map(
              (logo, index) => (
                <div
                  key={index}
                  className="mx-8 sm:mx-12 text-2xl sm:text-3xl font-bold text-foreground/40 hover:text-accent transition-colors flex-shrink-0"
                >
                  {logo}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

