"use client";

import { motion } from "framer-motion";

export default function SignatureAnimation() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#121212] px-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        <svg
          width="600"
          height="300"
          viewBox="0 0 600 300"
          className="max-w-full"
        >
          <motion.path
            d="M80 180 C120 40 170 260 220 120 S320 180 370 120 C400 90 450 90 500 180"
            fill="transparent"
            stroke="#F7E7CE"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{
              filter: "drop-shadow(0 0 12px rgba(247,231,206,0.9))",
            }}
          />
        </svg>

        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute right-[15%] top-[55%] h-5 w-5 rounded-full bg-[#B76E79]"
          style={{
            boxShadow: "0 0 20px rgba(183,110,121,1)",
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="mt-8 text-2xl italic text-[#F7E7CE]/80 md:text-4xl"
      >
        Forever cheering for your happiness.
        <p className="mt-4 text-xl text-[#F7E7CE]/80 md:text-2xl">
          ADULT NI WENYE WAKO NA ID NA MENO 32 😉😂😂
        </p>
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="mt-10 text-3xl tracking-[0.5em] text-[#B76E79] md:text-5xl"
      >
        By MG S...
      </motion.h2>
    </section>
  );
}
