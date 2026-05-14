"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SecretDoor from "@/components/SecretDoor";
import FlowerShower from "@/components/FlowerShower";
import MGCursor from "@/components/MGCursor";
import EraTransition from "@/components/EraTransition";
import TimelineSequence from "@/components/TimelineSequence";
import SignatureAnimation from "@/components/SignatureAnimation";
import MemoryVault from "@/components/MemoryVault";
import MessageConstellation from "@/components/MessageConstellation";
import Finale from "@/components/Finale";
import FloatingParticles from "@/components/FloatingParticles";
import AudioController from "@/components/AudioController";
import LuxuryDivider from "@/components/LuxuryDivider";

export default function HomePage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    document.body.style.background = "#121212";
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121212] text-[#F7E7CE]">
      <MGCursor />
      <FlowerShower />
      <FlowerShower />
      <AudioController />
      <FloatingParticles />

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <SecretDoor key="secret" onUnlock={() => setUnlocked(true)} />
        ) : (
          <>
            <motion.section
              key="main"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center"
            >
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="mb-6 text-5xl font-bold tracking-wide md:text-8xl"
                style={{
                  textShadow: "0 0 25px rgba(247,231,206,0.8)",
                }}
              >
                HAPPY 18TH BIRTHDAY SHEE ❤️
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="max-w-3xl text-lg leading-relaxed text-[#F7E7CE]/80 md:text-2xl"
              >
                Today the world celebrates 18 beautiful years of your story.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-12 space-y-5"
              >
                <p className="text-xl italic text-[#B76E79] md:text-3xl">
                  “May your future shine brighter than every star above.”
                </p>

                <p className="text-lg text-[#F7E7CE]/80 md:text-2xl">
                  “18 looks magical on you.”
                </p>
              </motion.div>

              <div className="absolute bottom-6 right-6 text-sm tracking-[0.3em] text-[#F7E7CE]/60 md:text-base">
                By MG S...
              </div>
            </motion.section>
            <EraTransition />
            <LuxuryDivider />

            <MemoryVault />
            <LuxuryDivider />

            <MessageConstellation />
            <LuxuryDivider />

            <TimelineSequence />
            <LuxuryDivider />

            <SignatureAnimation />
            <LuxuryDivider />

            <Finale />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
