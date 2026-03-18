"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center py-24 px-5 bg-slate-950">
      <div className="max-w-5xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500 mb-12 text-center"
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl hover:border-slate-700 transition-colors"
            >
              <div className="h-40 bg-slate-800 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">Project {item}</h3>
              <p className="text-neutral-400 text-sm">A brief description of this amazing project and the technologies used.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
