"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="py-32 px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {content.process.title}
        </motion.h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20" />
          {content.process.steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative pl-24 pb-16 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Circle indicator */}
              <div className="absolute left-6 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
              {/* Content */}
              <div className="sticky top-32 pb-8">
                <span className="text-2xl font-serif font-bold text-accent mb-2 block">
                  {step.number}
                </span>
                <h3 className="text-2xl font-serif font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

