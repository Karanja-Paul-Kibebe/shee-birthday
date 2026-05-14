"use client";

import { motion } from "framer-motion";

const memories = [
  "18 years of smiles ✨",
  "A heart full of kindness ❤️",
  "A future full of greatness 👑",
  "Beautiful memories forever 🌸",
  "Keep shining always ⭐",
  "The world is brighter with you 💖",
];

export default function MemoryVault() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#121212] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center text-5xl font-black text-[#F7E7CE] md:text-7xl"
        >
          Memory Vault
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-3">
          {memories.map((memory, index) => (
            <motion.div
              key={memory}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              className="rounded-[30px] border border-[#B76E79]/20 bg-white/5 p-10 backdrop-blur-xl"
              style={{
                boxShadow: "0 0 40px rgba(183,110,121,0.12)",
              }}
            >
              <div className="mb-6 text-5xl">✨</div>

              <p className="text-2xl leading-relaxed text-[#F7E7CE]/90">
                {memory}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-sm tracking-[0.3em] text-[#F7E7CE]/60 md:text-base">
        By MG S...
      </div>
    </section>
  );
}
