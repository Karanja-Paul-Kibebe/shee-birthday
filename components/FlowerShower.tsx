"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 24 });

export default function FlowerShower() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            y: -100,
            x: Math.random() * 1200,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "120vh",
            x: [null, Math.random() * 1000],
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "linear",
          }}
          className="absolute h-4 w-4 rounded-full bg-[#B76E79] blur-[1px]"
          style={{
            boxShadow: "0 0 15px rgba(183,110,121,0.8)",
          }}
        />
      ))}
    </div>
  );
}
