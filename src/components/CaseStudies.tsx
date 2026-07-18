"use client";

import { SITE_DATA } from "@/constants/data";
import { ArrowUpRight } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="flex flex-wrap items-center gap-2 font-semibold text-muted-foreground text-sm uppercase tracking-[0.16em]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path>
              <path d="M16 8 2 22"></path>
              <path d="M17.5 15H9"></path>
            </svg>
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_DATA.caseStudies.map((study) => (
            <a key={study.id} href="#" className="group">
              <div className="flex flex-col p-6 border border-border/60 bg-secondary/30 hover:bg-secondary/50 rounded-xl h-full transition-all duration-300 hover:border-border hover:shadow-md hover:-translate-y-1">
                
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground bg-background px-2 py-1 rounded-md border border-border/50 uppercase">
                    Case {study.id}
                  </span>
                </div>
                
                <h3 className="flex items-center font-medium text-xl text-foreground group-hover:text-accent transition-colors font-serif mb-2">
                  {study.title}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 w-4 h-4 transition-all -translate-y-1 translate-x-1 group-hover:translate-x-0 group-hover:translate-y-0" />
                </h3>
                
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed flex-grow">
                  {study.challenge}
                </p>
                
                <div className="mt-6 pt-4 border-t border-border/40">
                  <p className="text-sm font-medium text-foreground line-clamp-2">
                    <span className="text-accent">Outcome:</span> {study.outcome}
                  </p>
                </div>
                
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
