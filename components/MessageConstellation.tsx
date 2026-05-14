"use client";

import { motion } from "framer-motion";

const messages = [
  "Never stop dreaming ✨",
  "You were born to shine 🌟",
  "18 looks magical on you 💖",
  "Keep becoming your best self 👑",
  "Your story is beautiful ❤️",
  "The future belongs to you 🌸",
];

export default function MessageConstellation() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#121212] px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,231,206,0.08),transparent_70%)]" />

      <div className="relative grid max-w-6xl gap-10 md:grid-cols-2">
        {messages.map((message, index) => (
          <motion.div
            key={message}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.06 }}
            className="rounded-full border border-[#F7E7CE]/10 bg-[#1a1a1a]/70 px-10 py-8 text-center backdrop-blur-xl"
            style={{
              boxShadow: "0 0 30px rgba(247,231,206,0.1)",
            }}
          >
            <p className="text-2xl text-[#F7E7CE] md:text-3xl">{message}</p>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-6 right-6 text-sm tracking-[0.3em] text-[#F7E7CE]/60 md:text-base">
        By MG S...
      </div>
    </section>
  );
}
