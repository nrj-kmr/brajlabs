"use client";

import { CalEmbed } from "./CalEmbed";

export function TrustSection() {
  return (
    <section id="booking" className="relative bg-secondary/10 py-24 md:py-32 border-border/20 border-t">
      <div className="absolute inset-0 overflow-hidden noise-overlay">
        <div className="absolute inset-0 dot-grid opacity-[0.02]"></div>
      </div>

      <div className="z-10 relative mx-auto px-6 max-w-7xl">

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center bg-accent/10 px-2.5 py-0.5 border border-accent/20 rounded-md font-semibold text-accent text-xs uppercase tracking-widest transition-colors">
              Discovery Sprint
            </span>
          </div>
          <h2 className="mb-3 font-serif text-foreground text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.1]">
            Eliminate the Risk
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-lg leading-relaxed">
            A low-risk way to map out full software architecture before committing to a large-scale build. Grab a slot below.
          </p>
        </div>

        <div className="relative shadow-2xl mx-auto ring-border/50 rounded-2xl ring-1 max-w-4xl">
          <CalEmbed />
        </div>

      </div>
    </section>
  );
}
