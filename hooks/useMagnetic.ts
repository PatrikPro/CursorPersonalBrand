import { useRef, useState, useCallback } from "react";

interface UseMagneticOptions {
  distance?: number;
}

export function useMagnetic({ distance = 20 }: UseMagneticOptions = {}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const distanceX = (x / (rect.width / 2)) * distance;
      const distanceY = (y / (rect.height / 2)) * distance;

      setPosition({ x: distanceX, y: distanceY });
    },
    [distance]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 && position.y === 0 ? "transform 0.3s ease-out" : "none",
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
    style,
  };
}

