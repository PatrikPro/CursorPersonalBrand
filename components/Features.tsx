"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (
    <section
      id="features"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {content.features.title}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60">
            {content.features.subtitle}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {content.features.items.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

