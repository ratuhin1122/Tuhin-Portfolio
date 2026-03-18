"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
 


export default function Home() {
  return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="z-50 flex flex-col items-center text-center">
        <motion.h1 
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          className="mt-4 text-base md:text-xl text-neutral-300 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am a software developer building modern, beautiful web applications.
        </motion.p>
      </div>
      
      {/* Placeholder for Background Beams or Hero Highlight from Aceternity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-50 blur-3xl" />
      </div>
      
    </div>
  );
}
