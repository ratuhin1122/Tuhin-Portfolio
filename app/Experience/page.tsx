"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="flex min-h-screen flex-col items-center py-24 px-5 bg-slate-950">
      <div className="max-w-3xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500 mb-12 text-center"
        >
          Experience
        </motion.h1>
        <div className="space-y-8">
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-center justify-between border-b border-slate-800 pb-8">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <span className="text-neutral-400 text-sm font-medium">2023 - Present</span>
                  <h3 className="text-xl font-bold text-neutral-100 mt-1">Senior Developer</h3>
                  <span className="text-blue-500 text-sm">Tech Corp</span>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-neutral-300">
                    Lead the development of core web applications using Next.js and Tailwind CSS.
                    Improved performance by 40% and mentored junior developers.
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
