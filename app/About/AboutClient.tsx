"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"] });

export default function About() {
  return (
    <BackgroundLines className={cn("relative flex !h-auto lg:!h-full min-h-[120vh] lg:min-h-screen flex-col items-center pt-20 pb-48 lg:pb-20 px-6 bg-slate-950 font-sans overflow-hidden z-0 lg:z-10", outfit.className)}>
      <div className="max-w-7xl w-full flex flex-col items-center mt-10 z-20">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-neutral-50 to-neutral-500 mb-16 lg:mb-24 text-center tracking-tight drop-shadow-xl"
        >
          About Me
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-40 justify-center items-center w-full">
          
          {/* Left Side: Image Profile */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group perspective-[1000px]">
              {/* Outer Glow */}
              <div className="absolute -inset-3  rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-300 animate-pulse"></div>
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center bg-slate-900">
                  <Image 
                    src="/images/tuhin.png" 
                    height={400} 
                    width={400} 
                    alt="Ruhul Amin Tuhin"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text Description */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="z-50 relative w-full max-w-lg"
            >
              <div className="p-8 md:p-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center lg:text-left">
                <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
                  Hi, This is <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 text-2xl md:text-3xl">Ruhul Amin Tuhin</span>.
                  <br /><br />
                  I am a passionate web developer and an university student, constantly exploring modern technologies to build highly performant, accessible digital experiences.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </BackgroundLines>
  );
}
