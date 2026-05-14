"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 });

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: Math.random() * 1600,
            y: Math.random() * 900,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [null, -300],
            x: [null, Math.random() * 1600],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute h-2 w-2 rounded-full bg-[#F7E7CE]"
          style={{
            boxShadow: "0 0 15px rgba(247,231,206,1)",
          }}
        />
      ))}
    </div>
  );
}
