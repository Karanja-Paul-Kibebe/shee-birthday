"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const years = [
  "15 MAY 2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "15 MAY 2026",
];

export default function TimelineSequence() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (index >= years.length - 1) {
      setFinished(true);
      return;
    }

    const speed = Math.max(60, 500 - index * 20);

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#121212] px-6 text-center">
      <motion.div
        key={years[index]}
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <h1
          className="text-5xl font-black text-[#F7E7CE] md:text-[10rem]"
          style={{
            textShadow: "0 0 40px rgba(247,231,206,0.7)",
          }}
        >
          {years[index]}
        </h1>
      </motion.div>

      {finished && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-[#B76E79] md:text-7xl">
            18 YEARS
          </h2>

          <p className="mt-6 text-xl text-[#F7E7CE]/80 md:text-3xl">
            of beautiful existence ❤️
          </p>
        </motion.div>
      )}

      <div className="absolute bottom-6 right-6 text-sm tracking-[0.3em] text-[#F7E7CE]/60 md:text-base">
        By MG S...
      </div>
    </section>
  );
}
