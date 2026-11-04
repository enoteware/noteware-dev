"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "./useMotionPreference";

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

/** Text that lights up word by word as it crosses the screen. */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");

  if (reduced) return <p ref={ref} className={className}>{text}</p>;

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} word={word} range={[i / words.length, (i + 1) / words.length]} progress={scrollYProgress} />
      ))}
    </p>
  );
}
