"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Divider from "../ui/Divider";

export default function Hero() {
  return (
    <section className="relative pt-16 px-6 text-center overflow-hidden bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // className="text-5xl md:text-6xl font-bold tracking-tight"
          className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
        >
          Building <span className="text-indigo-600">Scalable</span> Web Applications
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            for Modern Web Experiences
          </span>
        </motion.h1>

        <p 
          // className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto"
          className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
          Full Stack Developer focused on performance, clean architecture, 
          and building real-world projects.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 shadow-md hover:shadow-lg transition"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            // className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Contact Me
          </Link>
        </div>
        <p 
          // className="mt-6 text-sm text-slate-500"
          className="mt-6 text-sm text-slate-400"
          >
          Built real systems for real clients • Focused on performance & scalability
        </p>
      </div>

    <Divider />
    </section>
  );
}

