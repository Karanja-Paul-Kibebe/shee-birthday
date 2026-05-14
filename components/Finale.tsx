"use client";

import { motion } from "framer-motion";
import Fireworks from "@/components/Fireworks";

export default function Finale() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <h1
            className="text-5xl font-black text-[#F7E7CE] md:text-8xl"
            style={{
              textShadow: "0 0 40px rgba(247,231,206,0.9)",
            }}
          >
            HAPPY 18TH
          </h1>

          <h2 className="mt-4 text-4xl font-bold text-[#B76E79] md:text-7xl">
            SHEE ❤️
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 max-w-4xl text-2xl leading-relaxed text-[#F7E7CE]/80 md:text-4xl"
        >
          Some people simply make the world brighter just by being in it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-20"
        >
          <p className="text-xl tracking-[0.4em] text-[#F7E7CE]/60 md:text-3xl">
            THE END OF CHAPTER 17
          </p>

          <p className="mt-6 text-3xl font-bold text-[#B76E79] md:text-5xl">
            WELCOME TO CHAPTER 18 ✨
          </p>
          <p className="mt-4 text-xl text-[#F7E7CE]/80 md:text-2xl">
            ADULT NI WENYE WAKO NA ID NA MENO 32 😉😂😂
          </p>
        </motion.div>

        <div className="absolute bottom-6 right-6 text-sm tracking-[0.3em] text-[#F7E7CE]/60 md:text-base">
          By MG S...
        </div>
      </section>
      <Fireworks />
    </>
  );
}
