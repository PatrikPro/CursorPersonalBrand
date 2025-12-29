"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef } from "react";
import * as LucideIcons from "lucide-react";
import { use3DTilt } from "@/hooks/use3DTilt";

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
          {content.features.items.map((feature, index) => {
            const { cardRef, handleMouseMove, handleMouseLeave, style } = use3DTilt({
              maxRotation: 8,
            });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                variants={itemVariants}
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
                    background: `radial-gradient(circle at ${style.transform.includes("rotateY") ? "50%" : "50%"} ${style.transform.includes("rotateX") ? "50%" : "50%"}, rgba(59, 130, 246, 0.1), transparent 70%)`,
                  }}
                />
              <div className="mb-4">
                {(() => {
                  const IconComponent =
                    (LucideIcons as any)[feature.icon] ||
                    LucideIcons.Sparkles;
                  return (
                    <IconComponent
                      className="w-10 h-10 sm:w-12 sm:h-12 text-accent"
                      strokeWidth={1.5}
                    />
                  );
                })()}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/60 text-sm sm:text-base leading-relaxed relative z-10">
                {feature.description}
              </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

