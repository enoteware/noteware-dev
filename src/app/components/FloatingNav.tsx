"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-lg shadow-black/5"
          : "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900"
      }`}
      aria-label="Main navigation"
    >
      <div
        className={`flex items-center justify-between px-6 max-w-7xl mx-auto w-full transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <a href="/" className="flex items-center gap-3" aria-label="noteware.dev home">
          <Image
            src="/logo-pixel.svg"
            alt="noteware.dev logo"
            width={40}
            height={40}
            className={`rounded-xl shadow-lg shadow-black/20 dark:shadow-white/5 transition-all duration-300 ${
              scrolled ? "scale-85" : ""
            }`}
            style={{ imageRendering: "pixelated" }}
          />
          <span
            className={`font-bold tracking-tight transition-all duration-300 ${
              scrolled ? "text-base" : "text-lg"
            }`}
          >
            noteware.dev
          </span>
        </a>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest">
          <a href="#work" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all">Work</a>
          <a href="#services" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all">Services</a>
          <a href="#about" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all">About</a>
          <a
            href="https://style.noteware.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black dark:hover:text-white transition-all flex items-center gap-1"
          >
            Design Picker
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
