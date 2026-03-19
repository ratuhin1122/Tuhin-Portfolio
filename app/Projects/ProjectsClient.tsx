import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBrandGithub,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Projects() {
  return (
    <div className="relative flex !h-auto lg:!h-full min-h-[120vh] lg:min-h-screen flex-col items-center  pb-48 lg:pb-20 px-6 bg-slate-950 font-sans overflow-hidden z-0 lg:z-10">
      
      {/* <BackgroundBeams /> */}
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)] pointer-events-none" />

      <div className="relative z-50 max-w-7xl w-full mt-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-neutral-50 to-neutral-500 mb-16 md:mb-24 text-center tracking-tight drop-shadow-xl">
          Projects
        </h1>
        
        <BentoGrid className="max-w-6xl mx-auto w-full md:auto-rows-[16rem]">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={cn(
                 i === 3 || i === 6 ? "md:col-span-2" : "",
                 "relative group/card p-[1px] overflow-hidden rounded-2xl h-full w-full hover:-translate-y-1.5 transition-transform duration-500 shadow-2xl hover:shadow-indigo-500/20"
              )}
            >
              {/* Spinning Conic Gradient Border (visible on hover) */}
              <div className="absolute top-1/2 left-1/2 h-[250%] w-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(99,102,241,1)_360deg)] animate-[spin_3s_linear_infinite] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0" />
              
              <BentoGridItem
                title={<span className="text-xl md:text-2xl font-bold tracking-tight text-neutral-100">{item.title}</span>}
                description={
                  <div className="flex flex-col h-full gap-5 mt-3 mb-4 relative z-20">
                    <span className="text-neutral-400 text-sm md:text-base leading-relaxed flex-grow">{item.description}</span>
                    <div className="mt-auto pt-2 pb-1">
                      <a 
                        href={item.link || "#"} 
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black/60 border border-neutral-500 text-neutral-300 text-sm font-semibold hover:text-white hover:bg-neutral-800 hover:border-neutral-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 group/btn relative overflow-hidden active:scale-95 z-50 cursor-pointer"
                      >
                        <IconBrandGithub className="w-5 h-5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                }
                header={undefined}
                icon={<div className="flex items-center justify-center h-10 w-10 bg-slate-800/50 rounded-xl text-blue-400 border border-white/5 shrink-0 relative z-20">{item.icon}</div>}
                className="h-full w-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-900/90 backdrop-blur-2xl border border-white/10 flex flex-col justify-start group/bento relative z-10 rounded-2xl"
              />
            </div>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Europa",
    description: "A web application for managing and tracking personal Jobs.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/Europa",
  },
  {
    title: "Fleek Burgers ",
    description: "A Ecommerce website for burgers.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/fleek-burgers",
  },
  {
    title: "Youtuber Portfolio",
    description: "A portfolio website for a Youtuber.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/Portfolio",
  },
   {
    title: "Temperature Analysis in Python",
    description: "A web application for analyzing temperature data.",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/Temperature-Analysist-Python-",
  },
  {
    title: "Java Projects (Swing)",
    description: "A collection of Java Swing projects.",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/Swing-Java-",
  },
 
  {
    title: "URL Shortner in laravel ",
    description: "A web application for shortening URLs.",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/URL-Shorten-Laravel-",
  },
  {
    title: "Clients and Password manager (Laravel)",
    description: "A web application for managing clients and passwords.",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/Client-and-Password-Manager-Laravel-",
  },
  {
    title: "Age generator (PHP) ",
    description: "A web application for generating ages.",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/Age-Generator-PHP-",
  },
  {
    title: "TODO App (PHP)",
    description: "A web application for managing tasks.",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/ratuhin1122/TODO-APP-PHP-",
  },
];
