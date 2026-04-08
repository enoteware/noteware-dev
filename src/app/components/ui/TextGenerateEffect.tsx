"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const [rendered, setRendered] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (rendered) return;
    setRendered(true);
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.08) }
    );
  }, [animate, rendered, filter, duration]);

  return (
    <div ref={scope} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="inline-block"
          style={{
            opacity: 0,
            filter: filter ? "blur(8px)" : "none",
          }}
        >
          {word}
          {idx < wordsArray.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </div>
  );
}
