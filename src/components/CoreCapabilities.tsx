"use client";

import { SITE_DATA } from "@/constants/data";

export function CoreCapabilities() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Infinite Marquee Ticker */}
      <div className="relative border-y border-border/20 bg-secondary/10 overflow-hidden py-4 mb-20 backdrop-blur-sm">
        <div className="flex animate-scroll-marquee">
          {[...SITE_DATA.capabilities, ...SITE_DATA.capabilities, ...SITE_DATA.capabilities].map((cap, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0 px-8">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase whitespace-nowrap">
                {cap.title}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/30"></span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="flex flex-wrap items-center gap-2 font-semibold text-muted-foreground text-sm uppercase tracking-[0.16em]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
            </svg>
            Core Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SITE_DATA.capabilities.map((cap, index) => (
            <div key={cap.title} className="group flex flex-col p-6 border border-border/60 bg-secondary/20 hover:bg-secondary/40 rounded-xl h-full transition-all duration-300 hover:border-border hover:shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <cap.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground bg-background px-2 py-1 rounded-md border border-border/50">0{index + 1}</span>
              </div>
              
              <h3 className="font-serif text-2xl text-foreground mb-3">{cap.title}</h3>
              
              <p className="text-sm leading-relaxed text-muted-foreground flex-grow">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
