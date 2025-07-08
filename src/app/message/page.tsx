"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Great_Vibes, Quicksand } from "next/font/google";
import { Button } from "@/components/ui/button";

const cursive = Great_Vibes({ subsets: ["latin"], weight: "400" });
const sans = Quicksand({ subsets: ["latin"] });

const loveMessage = `
The moment we met, my life has been a beautiful adventure.

You bring warmth, laughter, and love into my world every single day.

On your birthday, I just want to say thank you — for being you, for loving me, and for making everything better.

Here’s to forever, hand in hand.

Happy Birthday, my love 💜

— Prakkhs 💌
`;

export default function MessagePage() {
  const [visibleText, setVisibleText] = useState("");
  const router = useRouter();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= loveMessage.length || !loveMessage[i]) {
        clearInterval(interval);
        return;
      }
      setVisibleText((prev) => prev + loveMessage[i]);
      i++;
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-[#f8d1ff] to-[#ffe5ec] text-[#6a0dad] flex flex-col justify-center items-center px-6 py-12 ${sans.className}`}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={`text-4xl md:text-5xl font-bold mb-8 text-center ${cursive.className}`}
      >
        A Letter For You 💌
      </motion.h1>

      <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-xl max-w-3xl p-6 md:p-10 text-lg md:text-xl leading-relaxed whitespace-pre-wrap border border-white/50 transition-all duration-700">
        {visibleText || ""}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1.5 }}
        className={`mt-10 text-3xl md:text-4xl font-bold text-center text-pink-600 ${cursive.className}`}
      >
        🎉 Happy Birthday, Kirti 🎉
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 9, duration: 1 }}
        className="mt-6"
      >
        <Button
          onClick={() => router.push("/cake")}
          className="bg-gradient-to-r from-[#fcb0e4] to-[#d387ff] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Cut the Cake 🎂
        </Button>
      </motion.div>
    </main>
  );
}
