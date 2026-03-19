"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Terminal } from "@/components/ui/terminal";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Outfit } from "next/font/google";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={cn("relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 font-sans", outfit.className)}>
      
      {/* Dynamic Background Elements */}
      <BackgroundBeams />
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)] pointer-events-none" />
      
      {/* Hero Content */}
      <div className="z-50 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16">
        
        {/* Left Col - Typography & CTA */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-50 mb-6 drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Tuhin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Dev</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed mb-10 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            I am a software developer building modern, beautiful web applications. Turning complex problems into elegant, highly-performant interfaces.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center  gap-5 w-full sm:w-auto z-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-8 py-3 w-full sm:w-auto"
            >
              <Link href="/Projects" className="font-semibold">View Projects</Link>
            </HoverBorderGradient>
            
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-neutral-900/50 cursor-pointer bg-neutral-100 text-black dark:text-neutral-300 flex items-center justify-center space-x-2 px-8 py-3 w-full sm:w-auto"
            >
              <Link href="/Contact" className="font-semibold">Contact Me</Link>
            </HoverBorderGradient>
          </motion.div>
        </div>

        {/* Right Col - Terminal Component */}
        <motion.div 
          className="w-full max-w-lg lg:w-1/2 lg:pl-10 mt-4 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative group">
            {/* Ambient terminal glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative rounded-2xl border border-neutral-800/80 bg-black/60 shadow-2xl backdrop-blur-2xl p-2 sm:p-4 overflow-hidden">
               <div className="flex items-center gap-2 mb-4 px-2 pt-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 <span className="ml-2 text-xs text-neutral-500 font-mono font-medium">bash ~ tuhin-dev</span>
               </div>
               <Terminal
                commands={[
                  "git clone tuhin-production/portfolio-v2.git",
                  "npm install && composer install",
                  "php artisan migrate --seed",
                  "npm run dev",
                ]}
                outputs={{
                  0: [
                    "✔ Preflight checks passed.",
                    "✔ Created components.json",
                    "✔ Initialized project.",
                  ],
                  1: ["added 1 package in 2s"],
                  2: ["✔ Done. Installed button, card."],
                }}
                typingSpeed={45}
                delayBetweenCommands={1000}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
