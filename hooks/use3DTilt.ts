import { useRef, useState } from "react";

interface Use3DTiltOptions {
  maxRotation?: number;
  perspective?: number;
}

export function use3DTilt({ maxRotation = 15, perspective = 1000 }: Use3DTiltOptions = {}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  const style = {
    transformStyle: "preserve-3d" as const,
    perspective: `${perspective}px`,
    transform: `perspective(${perspective}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
    transition: "transform 0.1s ease-out",
  };

  return {
    cardRef,
    handleMouseMove,
    handleMouseLeave,
    style,
  };
}

