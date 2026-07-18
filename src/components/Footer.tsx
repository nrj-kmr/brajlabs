import { SITE_DATA } from "@/constants/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-10">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
                  
                  <g stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="4.5" x2="12" y2="9.5" />
                    <line x1="12" y1="14.5" x2="12" y2="19.5" />
                    <line x1="4.5" y1="12" x2="9.5" y2="12" />
                    <line x1="14.5" y1="12" x2="19.5" y2="12" />
                  </g>
                  
                  <g stroke="currentColor" strokeWidth="1.5" transform="rotate(45 12 12)">
                    <line x1="12" y1="4.5" x2="12" y2="9.5" />
                    <line x1="12" y1="14.5" x2="12" y2="19.5" />
                    <line x1="4.5" y1="12" x2="9.5" y2="12" />
                    <line x1="14.5" y1="12" x2="19.5" y2="12" />
                  </g>
                  
                  <g fill="currentColor">
                    <circle cx="12" cy="2" r="1" />
                    <circle cx="12" cy="22" r="1" />
                    <circle cx="2" cy="12" r="1" />
                    <circle cx="22" cy="12" r="1" />
                    <circle cx="12" cy="2" r="1" transform="rotate(45 12 12)" />
                    <circle cx="12" cy="22" r="1" transform="rotate(45 12 12)" />
                    <circle cx="2" cy="12" r="1" transform="rotate(45 12 12)" />
                    <circle cx="22" cy="12" r="1" transform="rotate(45 12 12)" />
                  </g>
                </svg>
              </div>
              <span className="font-mono text-xs tracking-wider text-foreground uppercase">{SITE_DATA.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineered globally, delivering to US, UK, and Australia.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-4">Connect</h4>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="font-mono text-xs text-foreground/70 hover:text-foreground transition-colors uppercase">Email</a>
              <a href="#" className="font-mono text-xs text-foreground/70 hover:text-foreground transition-colors uppercase">LinkedIn</a>
              <a href="#" className="font-mono text-xs text-foreground/70 hover:text-foreground transition-colors uppercase">Twitter</a>
            </div>
          </div>

          <div className="flex md:justify-end">
            <div>
              <h4 className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-4">Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-xs text-foreground/70 uppercase">Accepting new projects</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
            {SITE_DATA.name} {currentYear}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <div className="dotted-leader w-24 text-muted-foreground/20"></div>
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">Engineered to scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
