"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsMounted(true);
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  // Generate grid dots - optimized for performance
  const dots = [];
  const spacing = 60; // Increased spacing for fewer dots
  const cols = Math.ceil(dimensions.width / spacing) || 15;
  const rows = Math.ceil(dimensions.height / spacing) || 15;

  // Only render dots within viewport + buffer
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * spacing;
      const y = j * spacing;
      const distance = Math.sqrt(
        Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
      );
      const maxDistance = 200;
      const intensity = Math.max(0, 1 - distance / maxDistance);

      dots.push(
        <motion.div
          key={`${i}-${j}`}
          className="absolute w-1 h-1 rounded-full bg-accent/20"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: "translate(-50%, -50%)",
            willChange: isHovering ? "opacity, transform, box-shadow" : "auto",
          }}
          animate={{
            opacity: isHovering ? 0.1 + intensity * 0.2 : 0.05,
            scale: isHovering ? 1 + intensity * 1.2 : 1,
            boxShadow: isHovering
              ? `0 0 ${intensity * 6}px rgba(59, 130, 246, ${intensity * 0.4})`
              : "none",
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        />
      );
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      {dots}
    </div>
  );
}

