"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

interface SecretDoorProps {
  onUnlock: () => void;
}

const unlockingMessages = [
  "Beautiful... keep going ✨",
  "The magic is beginning 🌸",
  "A special journey awaits you 💖",
  "Almost there Shee ✨",
  "Your chapter 18 is waiting 👑",
];

export default function SecretDoor({ onUnlock }: SecretDoorProps) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(
    "Enter the special name (SHEE) to unlock the experience: FUNGULIA KWA LAPI😉",
  );

  const normalized = useMemo(() => value.toUpperCase(), [value]);

  const handleChange = (input: string) => {
    const upper = input.toUpperCase();

    setValue(upper);

    if (upper.length > 0 && upper !== "SHEE") {
      setMessage(unlockingMessages[upper.length % unlockingMessages.length]);
    }

    if (upper === "SHEE") {
      setMessage("Access Granted ✨ Welcome Shee ❤️");

      setTimeout(() => {
        onUnlock();
      }, 1800);
    }
  };

  return (
    <section className="relative z-20 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,110,121,0.18),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="mb-6 text-5xl font-bold md:text-8xl"
          style={{
            textShadow: "0 0 30px rgba(247,231,206,0.7)",
            fontFamily: "serif",
          }}
        >
          The Secret Door
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-12 text-lg leading-relaxed text-[#F7E7CE]/70 md:text-2xl"
        >
          Some stories deserve a grand entrance...
        </motion.p>

        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(183,110,121,0.3)",
              "0 0 40px rgba(183,110,121,0.7)",
              "0 0 20px rgba(183,110,121,0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="rounded-full border border-[#B76E79]/40 bg-[#1a1a1a]/80 p-10 backdrop-blur-xl"
        >
          <div className="mb-6 text-7xl">🗝️</div>

          <input
            value={normalized}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="ENTER NAME (SHEE) FUNGULIA KWA LAPI"
            className="w-[320px] rounded-full border border-[#B76E79]/40 bg-black/40 px-6 py-4 text-center text-2xl tracking-[0.5em] text-[#F7E7CE] outline-none transition-all duration-300 placeholder:text-[#F7E7CE]/30 focus:border-[#F7E7CE]"
          />
        </motion.div>

        <motion.p
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-xl text-[#B76E79] md:text-2xl"
        >
          {message}
        </motion.p>
      </motion.div>

      <div className="absolute bottom-6 right-6 text-sm tracking-[0.3em] text-[#F7E7CE]/60 md:text-base">
        By MG S...
      </div>
    </section>
  );
}
