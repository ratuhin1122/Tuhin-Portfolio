"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-24 px-5 bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500 mb-8">
          About Me
        </h1>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <p className="text-neutral-300 text-lg leading-relaxed">
            I am a passionate software developer dedicated to building high-quality, 
            performant, and accessible web experiences. I love working with modern 
            technologies like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
