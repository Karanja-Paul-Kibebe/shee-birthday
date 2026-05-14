"use client";

import { motion } from "framer-motion";

export default function LuxuryDivider() {
  return (
    <div className="relative flex items-center justify-center py-20">
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="h-[2px] w-[70%]"
        style={{
          background:
            "linear-gradient(to right, transparent, #B76E79, #F7E7CE, #B76E79, transparent)",
          boxShadow: "0 0 20px rgba(183,110,121,0.8)",
        }}
      />
    </div>
  );
}
