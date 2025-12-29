"use client";

import { motion } from "framer-motion";
import { use3DTilt } from "@/hooks/use3DTilt";

interface PricingCardProps {
  plan: {
    name: string;
    price: { monthly: number; yearly: number };
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
  };
  index: number;
  isYearly: boolean;
  isInView: boolean;
}

export default function PricingCard({
  plan,
  index,
  isYearly,
  isInView,
}: PricingCardProps) {
  const { cardRef, handleMouseMove, handleMouseLeave, style } = use3DTilt({
    maxRotation: 10,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={style}
      className={`relative bg-background/50 backdrop-blur-sm border rounded-2xl p-6 sm:p-8 cursor-pointer ${
        plan.popular
          ? "border-accent shadow-lg shadow-accent/20"
          : "border-white/10"
      }`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)`,
        }}
      />
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full relative z-10">
          Most Popular
        </div>
      )}
      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-foreground/60 text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-bold">
            ${isYearly ? plan.price.yearly : plan.price.monthly}
          </span>
          <span className="text-foreground/60">/month</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8 relative z-10">
        {plan.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-foreground/70">{feature}</span>
          </li>
        ))}
      </ul>
      <motion.a
        href="#"
        className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-colors relative z-10 ${
          plan.popular
            ? "bg-accent text-white hover:bg-accent/90"
            : "bg-background border border-white/20 text-foreground hover:border-accent/50"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {plan.cta}
      </motion.a>
    </motion.div>
  );
}

