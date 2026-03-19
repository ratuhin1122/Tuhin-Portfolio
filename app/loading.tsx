import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Ambient background glows to match portfolio aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15rem] h-[15rem] bg-purple-500/10 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />

      {/* Modern Rotating Loader */}
      <div className="relative flex flex-col items-center gap-8 relative z-10">
        <div className="relative w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-t-[3px] border-l-[3px] border-indigo-500 animate-[spin_3s_linear_infinite]" />
          
          {/* Middle Ring */}
          <div className="absolute inset-3 rounded-full border-r-[3px] border-b-[3px] border-purple-500 animate-[spin_2s_linear_infinite_reverse]" />
          
          {/* Inner Ring */}
          <div className="absolute inset-6 rounded-full border-t-[3px] border-l-[3px] border-blue-400 animate-[spin_1.5s_linear_infinite]" />
          
          {/* Core Dot */}
          <div className="absolute inset-[38%] rounded-full bg-white glow-pulse animate-pulse shadow-[0_0_15px_rgba(255,255,255,1)]" />
        </div>
        
        {/* Loading Text */}
        <div className="font-sans text-neutral-300 tracking-[0.3em] text-sm md:text-base uppercase animate-pulse font-medium bg-clip-text text-transparent bg-linear-to-r from-neutral-200 to-neutral-500">
          Loading
        </div>
      </div>
      
    </div>
  );
}
