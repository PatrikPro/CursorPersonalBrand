"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-background/30 border border-accent/20 rounded-full px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-2xl font-serif font-semibold text-accent"
              whileHover={{ scale: 1.05 }}
            >
              Ghostwriter
            </motion.a>
            <ul className="hidden md:flex items-center gap-8">
              {content.nav.links.map((link, index) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
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
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

