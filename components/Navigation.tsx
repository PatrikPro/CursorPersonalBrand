"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useState, useEffect } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`backdrop-blur-xl bg-background/80 border border-white/10 rounded-full px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-accent/10" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-xl sm:text-2xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
            >
              {content.nav.logo}
            </motion.a>
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {content.nav.links.map((link, index) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            {(() => {
              const { ref, handleMouseMove, handleMouseLeave, style } = useMagnetic({
                distance: 10,
              });

              return (
                <motion.a
                  ref={ref}
                  href="#pricing"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative px-4 sm:px-6 py-2 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors text-sm sm:text-base overflow-hidden group"
                  style={style}
                  whileTap={{ scale: 0.95 }}
                >
              <span className="relative z-20">{content.nav.cta}</span>
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
              <motion.div
                className="absolute inset-0 bg-accent rounded-full -z-10"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 15px rgba(59, 130, 246, 0.4)",
                    "0 0 0px rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
                </motion.a>
              );
            })()}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
