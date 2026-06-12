"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#071B38] text-white overflow-hidden">

      <div className="absolute inset-0">

        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      </div>

      <div className="container relative flex items-center min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div
            className="
            inline-flex
            border
            border-cyan-400/30
            rounded-full
            px-5
            py-2
          "
          >
            AI • DATA • INNOVATION • BUSINESS MODELING
          </div>

          <h1
            className="
            mt-8
            text-6xl
            md:text-8xl
            font-bold
            max-w-5xl
          "
          >
            Transform Ideas Into Intelligent Growth.
          </h1>

          <p
            className="
            mt-8
            text-xl
            text-slate-300
            max-w-2xl
          "
          >
            Helping organizations leverage AI, data and
            innovation to create sustainable competitive
            advantage.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-[#00AEEF] px-8 py-4 rounded-xl">
              Schedule Consultation
            </button>

            <button className="border px-8 py-4 rounded-xl">
              Explore Services
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
