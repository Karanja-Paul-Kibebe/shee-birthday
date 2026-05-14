"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCounter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (val) => Math.floor(val));

  useEffect(() => {
    const controls = animate(count, [0, 10, 15, 18], {
      duration: 3,
      times: [0, 0.4, 0.75, 1],
      ease: "linear",
    });
    return controls.stop;
  }, [count]);

  return <motion.span className="inline-block">{rounded}</motion.span>;
}

export default function EraTransition() {
  const [show18, setShow18] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow18(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#121212]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,110,121,0.2),transparent_60%)]" />

      {!show18 ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.04, 1],
            opacity: 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative"
        >
          <motion.h1
            animate={{
              textShadow: [
                "0 0 20px rgba(247,231,206,0.5)",
                "0 0 80px rgba(247,231,206,1)",
                "0 0 20px rgba(247,231,206,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[10rem] font-black text-[#F7E7CE] md:text-[18rem]"
          >
            17
          </motion.h1>

          <motion.div
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-white blur-3xl"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.3, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.6, type: "spring" }}
          className="relative text-center"
        >
          <motion.h1
            animate={{
              scale: [1, 1.08, 1],
              textShadow: [
                "0 0 20px rgba(183,110,121,0.5)",
                "0 0 100px rgba(183,110,121,1)",
                "0 0 20px rgba(183,110,121,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[10rem] font-black text-[#B76E79] md:text-[18rem]"
          >
            <AnimatedCounter /> YEARS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-2xl tracking-[0.4em] text-[#F7E7CE]"
          >
            A NEW ERA BEGINS
          </motion.p>
        </motion.div>
      )}

      <div className="absolute bottom-6 right-6 text-sm tracking-[0.3em] text-[#F7E7CE]/60 md:text-base">
        By MG S...
      </div>
    </section>
  );
}
