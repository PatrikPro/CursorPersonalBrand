"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  distance?: number;
  shimmer?: boolean;
  glow?: boolean;
}

export default function MagneticButton({
  children,
  href,
  className = "",
  distance = 15,
  shimmer = false,
  glow = false,
}: MagneticButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave, style } = useMagnetic({
    distance,
  });

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : {};

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group ${className}`}
      style={style}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-20">{children}</span>
      {shimmer && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-0"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />
      )}
      {glow && (
        <motion.div
          className="absolute inset-0 bg-accent rounded-full -z-10"
          animate={{
            boxShadow: [
              "0 0 0px rgba(59, 130, 246, 0)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 0px rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      )}
    </Component>
  );
}

