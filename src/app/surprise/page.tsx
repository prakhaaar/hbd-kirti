"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Great_Vibes, Quicksand } from "next/font/google";

// Fonts
const cursive = Great_Vibes({ subsets: ["latin"], weight: "400" });
const sans = Quicksand({ subsets: ["latin"] });

export default function SurprisePage() {
  const router = useRouter();

  return (
    <main
      className={`min-h-screen bg-[#fff0f6] flex flex-col justify-center items-center px-4 text-[#6a0dad] text-center transition-colors duration-1000 ${sans.className}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`text-4xl md:text-5xl mb-6 drop-shadow ${cursive.className}`}
      >
        Happy Birthday My Love 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-lg md:text-xl max-w-2xl mb-10"
      >
        You make every day brighter, but today is extra special. So here’s a
        little surprise — a walk down memory lane, from my heart to yours 💌
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Button
          className="bg-gradient-to-r from-[#fcb0e4] to-[#d387ff] text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => router.push("/memories")}
        >
          Begin Your Surprise 💝
        </Button>
      </motion.div>
    </main>
  );
}
