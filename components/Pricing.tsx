"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import PricingCard from "./PricingCard";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
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
            {content.pricing.title}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 mb-8">
            {content.pricing.subtitle}
          </p>
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${
                !isYearly ? "text-foreground" : "text-foreground/50"
              }`}
            >
              {content.pricing.toggle.monthly}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? "bg-accent" : "bg-white/20"
              }`}
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-medium ${
                  isYearly ? "text-foreground" : "text-foreground/50"
                }`}
              >
                {content.pricing.toggle.yearly}
              </span>
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                {content.pricing.toggle.savings}
              </span>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.pricing.plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              isYearly={isYearly}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

