"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Great_Vibes, Quicksand } from "next/font/google";

// Load fonts
const cursive = Great_Vibes({ subsets: ["latin"], weight: "400" });
const sans = Quicksand({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [lightsOn, setLightsOn] = useState(false);

  useEffect(() => {
    if (lightsOn) {
      const timer = setTimeout(() => {
        router.push("/surprise");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [lightsOn, router]);

  return (
    <main
      className={`min-h-screen flex flex-col justify-center items-center px-4 transition-colors duration-1000 ${
        lightsOn ? "bg-[#f8d1ff] text-[#6a0dad]" : "bg-black text-white"
      } ${sans.className}`}
    >
      {lightsOn && (
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-4xl md:text-5xl text-center mb-10 drop-shadow ${cursive.className}`}
        >
          Light Up My Life
        </motion.h1>
      )}

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Button
          className="bg-gradient-to-r from-[#fcb0e4] to-[#d387ff] text-white font-semibold text-base py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => setLightsOn(true)}
        >
          Turn the Lights On ✨
        </Button>
      </motion.div>
    </main>
  );
}
