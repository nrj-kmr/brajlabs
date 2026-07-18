"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/constants/data";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function Hero() {
  return (
    <section className="relative flex items-center pt-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.03]"></div>

      {/* Soft glowing ambient orb behind hero */}
      <div className="top-1/4 left-1/4 absolute bg-accent/10 blur-[100px] rounded-full w-96 h-96 pointer-events-none"></div>

      <div className="z-10 relative mx-auto px-6 py-20 w-full max-w-7xl">
        <div className="items-center gap-16 grid lg:grid-cols-2">

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="inline-flex items-center bg-accent/10 px-2.5 py-0.5 border border-accent/20 rounded-md font-semibold text-accent text-xs uppercase tracking-widest transition-colors">
                App Studio + AI
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-foreground text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05] tracking-tight"
            >
              Elite software <br/><span className="bg-clip-text bg-gradient-to-r from-accent to-emerald-300 text-transparent">infrastructure</span> <br/>&amp; automation.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-md font-sans text-muted-foreground text-lg leading-relaxed"
            >
              {SITE_DATA.subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#booking" className="group inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 shadow-sm px-5 py-3 border border-accent/40 hover:border-accent rounded-md font-medium text-accent text-sm transition-all hover:-translate-y-0.5 duration-200">
                <span className="z-10 relative">Start a sprint</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 duration-300" />
              </a>
              <a href="#work" className="group inline-flex items-center gap-2 bg-transparent hover:bg-secondary/50 shadow-sm px-5 py-3 border border-border/65 hover:border-border rounded-md font-medium text-muted-foreground text-sm transition-all hover:-translate-y-0.5 duration-200">
                View our work
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-10 mt-4 pt-8 border-border/40 border-t">
              <div>
                <div className="font-sans font-medium text-foreground text-3xl tracking-tight">12+</div>
                <div className="mt-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Pipelines Live</div>
              </div>
              <div>
                <div className="font-sans font-medium text-foreground text-3xl tracking-tight">3</div>
                <div className="mt-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">In Development</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
            className="hidden lg:block relative"
          >
            <div className="relative text-muted-foreground">
              <div className="group relative flex justify-center items-center bg-secondary/20 backdrop-blur-md p-8 border border-border/50 rounded-2xl min-h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <motion.svg
                  viewBox="0 0 200 200"
                  className="w-full max-w-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Cartesian Plane */}
                  <g strokeWidth="0.75" className="opacity-80">
                    <line x1="100" y1="0" x2="100" y2="200" className="stroke-emerald-500/60" />
                    <line x1="0" y1="100" x2="200" y2="100" className="stroke-amber-500/60" />

                    {/* Radial Crosshairs */}
                    <line x1="29.28" y1="29.28" x2="170.71" y2="170.71" className="stroke-foreground/20" strokeDasharray="4 4" />
                    <line x1="29.28" y1="170.71" x2="170.71" y2="29.28" className="stroke-foreground/20" strokeDasharray="4 4" />

                    {/* Vertical Tick Marks (Emerald) */}
                    <g className="stroke-emerald-500/80">
                      <line x1="97" y1="20" x2="103" y2="20" />
                      <line x1="97" y1="180" x2="103" y2="180" />
                      <line x1="97" y1="60" x2="103" y2="60" />
                      <line x1="97" y1="140" x2="103" y2="140" />
                    </g>

                    {/* Horizontal Tick Marks (Amber) */}
                    <g className="stroke-amber-500/80">
                      <line x1="20" y1="97" x2="20" y2="103" />
                      <line x1="180" y1="97" x2="180" y2="103" />
                      <line x1="60" y1="97" x2="60" y2="103" />
                      <line x1="140" y1="97" x2="140" y2="103" />
                    </g>
                  </g>

                  {/* Outer Ring - Clockwise */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="40s" repeatCount="indefinite" />
                    <circle cx="100" cy="100" r="80" className="stroke-foreground/30" strokeWidth="1" fill="none" strokeDasharray="4 8" />
                  </g>

                  {/* Middle Ring - Counter-Clockwise */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="30s" repeatCount="indefinite" />
                    <circle cx="100" cy="100" r="60" className="stroke-foreground/30 group-hover:stroke-emerald-400 transition-colors duration-500" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
                  </g>

                  {/* Inner Ring - Clockwise */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
                    <circle cx="100" cy="100" r="40" className="stroke-foreground/50 group-hover:stroke-amber-400 transition-colors duration-500" strokeWidth="1.25" fill="none" strokeDasharray="2 4" />
                  </g>

                  {/* Outer Frame (Static) */}
                  <circle cx="100" cy="100" r="95" className="stroke-foreground/10" strokeWidth="0.5" fill="none" />
                </motion.svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
