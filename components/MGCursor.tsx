"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MGCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 30);
      mouseY.set(e.clientY - 30);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex"
    >
      <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#F7E7CE]/50 bg-[#B76E79]/20 backdrop-blur-xl">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 30px rgba(183,110,121,0.7)",
          }}
        />

        <span className="relative text-sm font-bold tracking-[0.3em] text-[#F7E7CE]">
          MG
        </span>
      </div>
    </motion.div>
  );
}
