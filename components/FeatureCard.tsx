"use client";

import { motion } from "framer-motion";
import { use3DTilt } from "@/hooks/use3DTilt";
import * as LucideIcons from "lucide-react";

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: string;
    size: string;
  };
  index: number;
  variants: any;
}

export default function FeatureCard({ feature, index, variants }: FeatureCardProps) {
  const { cardRef, handleMouseMove, handleMouseLeave, style } = use3DTilt({
    maxRotation: 8,
  });

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const IconComponent =
    (LucideIcons as any)[feature.icon] || LucideIcons.Sparkles;

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={style}
      className={`bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all cursor-pointer relative ${getSizeClasses(
        feature.size
      )}`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)`,
        }}
      />
      <div className="mb-4">
        <IconComponent
          className="w-10 h-10 sm:w-12 sm:h-12 text-accent"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold mb-2 relative z-10">
        {feature.title}
      </h3>
      <p className="text-foreground/60 text-sm sm:text-base leading-relaxed relative z-10">
        {feature.description}
      </p>
    </motion.div>
  );
}

