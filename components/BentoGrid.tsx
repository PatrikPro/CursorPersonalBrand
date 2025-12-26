"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
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
          {content.results.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {content.results.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-colors"
            >
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-serif font-bold text-accent">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">
                {stat.label}
              </h3>
              <p className="text-foreground/60 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

