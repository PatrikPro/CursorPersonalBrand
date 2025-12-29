"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef } from "react";
import InteractiveDemo from "./InteractiveDemo";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              {content.hero.headline}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-foreground/70 font-medium"
            >
              {content.hero.subheadline}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-xl"
            >
              {content.hero.description}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <MagneticButton
                href="#pricing"
                className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors text-center"
                distance={15}
                shimmer={true}
                glow={true}
              >
                {content.hero.cta}
              </MagneticButton>
              <motion.a
                href="#"
                className="px-8 py-4 bg-background border border-white/20 text-foreground font-semibold rounded-full hover:border-accent/50 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.hero.ctaSecondary}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Product Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <InteractiveDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
