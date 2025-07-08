"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Great_Vibes, Quicksand } from "next/font/google";

const cursive = Great_Vibes({ subsets: ["latin"], weight: "400" });
const sans = Quicksand({ subsets: ["latin"] });

export default function CakePage() {
  const [isCut, setIsCut] = useState(false);
  const [knifeAnim, setKnifeAnim] = useState(false);

  const handleCut = () => {
    setKnifeAnim(true);
    setTimeout(() => {
      setIsCut(true);
    }, 1200); // match knife animation
  };

  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-[#ffe6f0] to-[#fddcff] flex flex-col items-center justify-center px-4 py-10 text-[#6a0dad] ${sans.className}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`text-4xl md:text-5xl mb-6 ${cursive.className}`}
      >
        Let’s Cut the Cake 🎂
      </motion.h1>

      {/* Cake & Knife */}
      <div className="relative w-full max-w-xs md:max-w-md mb-8">
        <Image
          src="/cake.png"
          alt="Cake"
          width={500}
          height={500}
          className={`mx-auto transition-transform duration-700 ${
            isCut ? "opacity-80 scale-95 rotate-1" : ""
          }`}
        />

        {/* Knife animation */}
        <AnimatePresence>
          {knifeAnim && !isCut && (
            <motion.img
              src="/knife.png"
              alt="Knife"
              initial={{ x: 200, y: -150, rotate: 45, opacity: 0 }}
              animate={{
                x: 20,
                y: -20,
                rotate: -10,
                opacity: 1,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-1/2 w-32 transform -translate-x-1/2 -rotate-45 z-10"
            />
          )}
        </AnimatePresence>

        {/* Confetti */}
        <AnimatePresence>
          {isCut && (
            <motion.img
              src="/confeeti.png"
              alt="Confetti"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-20"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Button */}
      {!isCut ? (
        <Button
          onClick={handleCut}
          className="bg-gradient-to-r from-[#fcb0e4] to-[#d387ff] text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:scale-105 transition-all duration-300"
        >
          Cut the Cake 🎂
        </Button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p
            className={`text-2xl md:text-3xl text-pink-600 mt-6 ${cursive.className}`}
          >
            Love you forever 💖
          </p>
          <Button
            onClick={() => {
              setIsCut(false);
              setKnifeAnim(false);
            }}
            className="mt-6 bg-[#6a0dad] text-white px-5 py-2 rounded-full hover:scale-105 transition"
          >
            Replay 🎉
          </Button>
        </motion.div>
      )}
    </main>
  );
}
