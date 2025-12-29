"use client";

import { motion } from "framer-motion";
import { Award, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const badges = [
  {
    icon: Award,
    text: "Award Winner",
    position: { top: "10%", left: "5%" },
    delay: 0,
  },
  {
    icon: Shield,
    text: "Enterprise Security",
    position: { top: "20%", right: "5%" },
    delay: 0.5,
  },
  {
    icon: Zap,
    text: "99.9% Uptime",
    position: { bottom: "15%", left: "8%" },
    delay: 1,
  },
];

export default function FloatingBadges() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Hide badges when scrolled down more than 100px
      setIsVisible(scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isMounted || typeof window === "undefined") {
    return null;
  }

  const badgesContent = (
    <>
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={index}
            className="hidden lg:flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-foreground/80 pointer-events-none"
            style={{
              position: "fixed",
              ...badge.position,
              zIndex: 50,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.8,
              y: isVisible ? [0, -10, 0] : 20,
              pointerEvents: isVisible ? "auto" : "none",
            }}
            transition={{
              opacity: { duration: 0.3, ease: "easeInOut" },
              scale: { duration: 0.3, ease: "easeInOut" },
              y: isVisible
                ? {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: badge.delay,
                  }
                : { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <Icon className="w-4 h-4 text-accent" />
            <span>{badge.text}</span>
          </motion.div>
        );
      })}
    </>
  );

  return createPortal(badgesContent, document.body);
}

