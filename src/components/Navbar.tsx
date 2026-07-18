"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { SITE_DATA } from "@/constants/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
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
          <span className="font-mono text-sm tracking-widest text-foreground uppercase">
            {SITE_DATA.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {SITE_DATA.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase">
              {link.label}
            </a>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-border/50">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <a href="#booking" className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-5 py-2.5 rounded-md font-mono text-xs tracking-widest uppercase hover:bg-accent/20 transition-all hover:-translate-y-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Book Sprint
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-muted-foreground hover:bg-secondary/50 transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border/50"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {SITE_DATA.navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground uppercase">
                  {link.label}
                </a>
              ))}
              <a href="#booking" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-5 py-2.5 rounded-md font-mono text-xs tracking-widest uppercase transition-all w-fit mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Book Sprint
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
