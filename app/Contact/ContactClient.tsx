"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { World } from "@/components/ui/globe";
import { IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 23.8103, lng: 90.4125 }, // Centered on Bangladesh
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const sampleArcs = [
  { order: 1, startLat: 23.8103, startLng: 90.4125, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: "#8b5cf6" },
  { order: 2, startLat: 23.8103, startLng: 90.4125, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.3, color: "#3b82f6" },
  { order: 3, startLat: 23.8103, startLng: 90.4125, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.3, color: "#6366f1" },
  { order: 4, startLat: 23.8103, startLng: 90.4125, endLat: 35.6895, endLng: 139.6917, arcAlt: 0.3, color: "#a855f7" }
];

export default function Contact() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center py-20 px-6 bg-slate-950 font-sans overflow-hidden z-0 lg:z-10">
      
      {/* Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* Radial Mask for Vignette Fade */}
      <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-50 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-16 lg:gap-8 min-h-[70vh] px-4 md:px-8 mt-16 md:mt-24">
        
        {/* Left Side: Text and Buttons */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center gap-8 relative z-50 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-500 tracking-tight leading-tight drop-shadow-xl">
              Let's Connect
            </h1>
            <p className="text-neutral-400 text-base md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              I’m always open to new opportunities and collaborations. 
            </p>
            <div className="text-white text-base md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            Email : ruhulamintuhin715@gmail.com
            </div>
              
            
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4 w-full">
            

            <Link href="https://github.com/ratuhin1122" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-black border border-white/10 text-neutral-300 text-sm md:text-base font-semibold hover:text-white hover:bg-neutral-900 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                <IconBrandGithub className="w-5 h-5" />
                GitHub
              </button>
            </Link>

            <Link href="https://www.linkedin.com/in/ruhul-amin-tuhin-abbabb2aa/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/30 text-neutral-200 text-sm md:text-base font-semibold hover:text-white hover:bg-[#0077b5]/20 hover:border-[#0077b5]/60 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] transition-all duration-300">
                <IconBrandLinkedin className="w-5 h-5 text-[#0077b5]" />
                LinkedIn
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side: 3D Globe */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] z-0 pointer-events-none lg:pointer-events-auto mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {/* Wrapper to scale and position globe on varying screens safely */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center mix-blend-screen scale-110 lg:scale-[1.0] opacity-80 md:opacity-100">
             <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
