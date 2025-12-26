"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {content.portfolio.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.portfolio.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-background border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all cursor-pointer"
            >
              <div className="mb-4">
                <span className="text-sm text-accent font-medium">
                  {item.category}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/60 mb-4">{item.description}</p>
              <p className="text-sm text-foreground/40 italic">
                {item.client}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

