"use client";

import { useEffect, useState } from "react";
import { memories } from "@/lib/memories";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const MirrorCarousel = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const current = memories[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % memories.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % memories.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + memories.length) % memories.length);

  const downloadImage = () => {
    const a = document.createElement("a");
    a.href = current.image;
    a.download = "memory.jpg";
    a.click();
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center space-y-6">
      <div className="relative w-full h-[400px] bg-white/20 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg border border-white/30 transition-all duration-500">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.image}
            src={current.image}
            alt="memory"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-4">
          <motion.p
            key={current.caption}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-lg md:text-xl font-semibold"
          >
            {current.caption}
          </motion.p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button variant="ghost" size="icon" onClick={prev}>
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button variant="outline" onClick={downloadImage}>
          <Download className="mr-2 h-4 w-4" />
          Download Memory
        </Button>

        <Button variant="ghost" size="icon" onClick={next}>
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      <Button
        className="mt-4 bg-gradient-to-r from-[#d387ff] to-[#fcb0e4] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
        onClick={() => router.push("/message")}
      >
        Next Page <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};
