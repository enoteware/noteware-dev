"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "./useMotionPreference";

const proofItems = [
  { metric: "6.7k", label: "Memory Rows", count: { to: 6.7, decimals: 1, prefix: "", suffix: "k" } },
  { metric: "Real-time", label: "ERP Sync" },
  { metric: "Auto", label: "Triage & Routing" },
  { metric: "99.9%", label: "Uptime SLA", count: { to: 99.9, decimals: 1, prefix: "", suffix: "%" } },
  { metric: "< 200ms", label: "API Response", count: { to: 200, decimals: 0, prefix: "< ", suffix: "ms" } },
];

type Count = { to: number; decimals: number; prefix: string; suffix: string };

/** The final value is in the HTML; the count only runs once it scrolls into view. */
function Metric({ metric, count }: { metric: string; count?: Count }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!inView || !count || reduced) return;
    const controls = animate(0, count.to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (ref.current) ref.current.textContent = `${count.prefix}${value.toFixed(count.decimals)}${count.suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, count, reduced]);

  return <dd ref={ref} className="giant-stat">{metric}</dd>;
}

export function ProofOfCraft() {
  return (
    <div className="mt-14">
      <h3 className="eyebrow mb-6">Proof of Craft</h3>
      <dl className="grid grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr_1.1fr_1.3fr] gap-x-6 gap-y-10 border-t pt-8">
        {proofItems.map((item) => (
          <div key={item.label} className="flex flex-col-reverse gap-2 last:col-span-2 lg:last:col-span-1">
            <dt className="text-muted-foreground">{item.label}</dt>
            <Metric metric={item.metric} count={item.count} />
          </div>
        ))}
      </dl>
    </div>
  );
}
