"use client";

import { motion } from "framer-motion";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"] });

const techStackImages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
];

const experiences = [
  {
    id: 1,
    year: "2024 - 2025 ( 8 month )",
    role: "Web Developer ( Internship )",
    company: "OLT Digital Agency",
    description: "Lead the development of core web applications using modern stacks like Next.js and Tailwind CSS. Rapidly improved application performance by 40% while actively mentoring junior developers and instilling best practices."
  }
];

export default function Experience() {
  return (
    <div className={cn("relative flex min-h-screen flex-col items-center py-20 px-6 bg-slate-950 font-sans overflow-hidden z-0 lg:z-10", outfit.className)}>
      
      {/* Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* Radial Mask for Vignette Fade */}
      <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-50 max-w-7xl w-full mt-10 md:mt-16 flex flex-col items-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-neutral-50 to-neutral-500 mb-8 md:mb-12 text-center tracking-tight drop-shadow-xl"
        >
          Tech Stack & Experience
        </motion.h1>

        {/* Custom Infinite Sliding Marquee */}
        <div className="w-full max-w-6xl mx-auto overflow-hidden relative py-12 mb-10 md:mb-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-12 md:gap-24 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {[...techStackImages, ...techStackImages].map((img, i) => (
              <div key={i} className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={img} 
                  alt="Tech logo" 
                  className="max-h-full max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="w-full max-w-4xl mt-12 space-y-16 relative">
          
          {/* Vertical Timeline Line indicator (Desktop) */}
          <div className="absolute left-[calc(33.333%-1px)] top-4 bottom-4 w-[2px] bg-slate-800/50 hidden md:block"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row items-start border-l-[3px] md:border-l-0 border-slate-800/80 md:border-transparent pl-6 md:pl-0 relative overflow-visible">
                
                {/* Timeline Dot (Mobile) */}
                <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-slate-700 group-hover:bg-blue-500 md:hidden shadow-[0_0_10px_rgba(59,130,246,0.0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-500"></div>

                {/* Left side: Date & Company */}
                <div className="md:w-1/3 mb-4 md:mb-0 md:pr-16 md:text-right relative">
                  {/* Timeline Dot (Desktop) */}
                  <div className="absolute -right-[7px] xl:-right-[5px] top-2 w-3 h-3 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors duration-500 hidden md:block group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>

                  <span className="text-blue-400 text-xs md:text-sm font-bold tracking-widest uppercase">{exp.year}</span>
                  <h3 className="text-2xl font-extrabold text-neutral-100 mt-2 tracking-tight group-hover:text-blue-300 transition-colors duration-300">{exp.role}</h3>
                  <span className="inline-block mt-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-neutral-300 text-xs font-semibold backdrop-blur-md shadow-sm">{exp.company}</span>
                </div>

                {/* Right side: Description */}
                <div className="md:w-2/3 md:pl-16">
                  <p className="text-neutral-400 text-base md:text-lg leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
