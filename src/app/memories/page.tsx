"use client";

import { MirrorCarousel } from "@/components/MirrorCarousel";
import { motion } from "framer-motion";

export default function MemoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8d1ff] to-[#ffe5ec] flex flex-col items-center justify-center py-10 px-4 text-[#6a0dad]">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-[Satisfy] text-center mb-8 drop-shadow-xl"
      >
        Mirror of Memories 🪞
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-lg md:text-xl font-sans text-center max-w-2xl mb-10 leading-relaxed"
      >
        A few frozen moments, a thousand unspoken emotions — here's our gallery
        of love, laughter, and everything that makes you, you 💖
      </motion.p>

      <MirrorCarousel />
    </main>
  );
}
