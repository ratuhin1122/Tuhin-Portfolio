"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-24 px-5 bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-neutral-100 mb-6 text-center">Get in Touch</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-1">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
              placeholder="How can I help you?"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
