"use client";

import { motion } from "framer-motion";

const fireworks = Array.from({ length: 18 });

export default function Fireworks() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {fireworks.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 1600,
            y: Math.random() * 900,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.4,
          }}
          className="absolute"
        >
          <div
            className="h-28 w-28 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(247,231,206,0.9) 0%, rgba(183,110,121,0.6) 35%, transparent 70%)",
              filter: "blur(4px)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
