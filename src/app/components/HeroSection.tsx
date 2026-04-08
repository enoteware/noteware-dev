"use client";

import { SparklesCore } from "./ui/SparklesCore";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";
import { LinesGradientShader } from "./ui/LinesGradientShader";

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* === FULL-WIDTH WebGL shader background === */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <LinesGradientShader className="absolute inset-0 w-full h-full opacity-30 dark:opacity-70" />
        {/* Bottom fade into page */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black" style={{ top: "55%" }} />
      </div>

      {/* Spotlight */}
      <Spotlight fill="#00D4AA" />

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <SparklesCore
          particleCount={50}
          particleColor="#00D4AA"
          minSize={0.3}
          maxSize={1.4}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pb-32 pt-8" style={{ zIndex: 2 }}>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest mb-10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm animate-in opacity-0">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Now Accepting Partners for Q2 2026
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-10 selection:text-white selection:bg-black">
            <TextGenerateEffect
              words="AI-Native"
              className="inline"
              duration={0.6}
            />
            <br />
            <TextGenerateEffect
              words="Product Craft."
              className="inline text-zinc-400 dark:text-zinc-600"
              duration={0.6}
            />
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-14 leading-relaxed max-w-2xl font-medium delay-100 opacity-0 animate-in">
            We partner with founders to build high-stakes digital products.
            Senior-led design, robust engineering, and deep AI integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 delay-200 opacity-0 animate-in">
            <a
              href="mailto:dev@notewaredigital.com"
              className="px-8 py-4 sm:px-10 sm:py-5 bg-zinc-950 dark:bg-white text-white dark:text-black rounded-full font-bold text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-xl shadow-black/10 dark:shadow-white/5"
            >
              Start a Project
            </a>
            <a
              href="https://style.noteware.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 sm:px-10 sm:py-5 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold text-base sm:text-lg hover:bg-zinc-50/80 dark:hover:bg-zinc-900/80 backdrop-blur-sm transition-all text-center"
            >
              Explore Styles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
