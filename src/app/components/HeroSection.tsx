"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import { HeroField } from "./HeroField";
import { usePrefersReducedMotion } from "./useMotionPreference";

const HUES = [245, 220, 245, 195];
const cells = Array.from({ length: 120 }, (_, i) => {
  const step = (i * 37) % 120;
  return step % 7 === 0 ? HUES[step % 4] : null;
});

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE_OUT }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection({
  chip = "Now accepting partners for Q2 2026",
  lead = "AI-Native",
  accent = "Product Craft.",
  sub = "We partner with founders to build high-stakes digital products. Senior-led design, robust engineering, and deep AI integration.",
  mailto = "mailto:dev@notewaredigital.com",
  compact = false,
}: {
  chip?: string;
  lead?: string;
  accent?: string;
  sub?: string;
  mailto?: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const reduced = usePrefersReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={ref}
        className="relative overflow-hidden border-b grid place-items-center min-h-[calc(100svh-4rem)] px-[var(--gutter)] pt-10 pb-24"
      >
        {!ready && (
          <>
            <div className="hero-dashed" aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true">
              <div className="hero-grid-inner">
                {cells.map((hue, i) => (
                  <div
                    key={i}
                    className="hg-cell"
                    data-on={hue ? "" : undefined}
                    style={hue ? ({ "--h": hue } as React.CSSProperties) : undefined}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        <HeroField paused={paused} onReady={onReady} />
        <div className="hero-text-scrim" aria-hidden="true" />

        <motion.div className="relative text-center" style={reduced ? { opacity } : { y, opacity }}>
          <motion.div
            className="chip"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <span className="chip-dot" aria-hidden="true" />
            {chip}
          </motion.div>

          <h1 className={`headline mt-[22px] mb-6 ${compact ? "headline-page" : ""}`}>
            <Line delay={0.1}>{lead}</Line>
            <Line delay={0.22}><em>{accent}</em></Line>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
          >
            <p className="sub max-w-[620px] mx-auto mb-7">
              {sub}
            </p>

            <div className="inline-flex flex-wrap justify-center items-center gap-2.5">
              <a href={mailto} className="btn btn-primary">
                Start a project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
              {compact ? (
                <Link href="/#portfolio" className="btn btn-ghost bg-background">See our work</Link>
              ) : (
                <a
                  href="https://style.noteware.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost bg-background"
                >
                  Explore styles
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        <button
          type="button"
          className="hero-pause btn btn-ghost btn-sm absolute bottom-4 right-[var(--gutter)] bg-background"
          onClick={() => setPaused(!paused)}
          aria-label={`${paused ? "Play" : "Pause"} background animation`}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </MotionConfig>
  );
}
