"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface InfiniteMovingCardsProps {
  items: { content: ReactNode; key: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started || !containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      scrollerRef.current?.appendChild(clone);
    });

    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "35s" : "50s";
    containerRef.current.style.setProperty("--animation-duration", duration);
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    setStarted(true);
  }, [direction, speed, started]);

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 gap-4 ${
          started ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item) => (
          <li key={item.key} className="flex-shrink-0">
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
