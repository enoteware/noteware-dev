"use client";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const proofItems = [
  { metric: "6.7k", label: "Memory Rows" },
  { metric: "Real-time", label: "ERP Sync" },
  { metric: "Auto", label: "Triage & Routing" },
  { metric: "99.9%", label: "Uptime SLA" },
  { metric: "< 200ms", label: "API Response" },
];

export function ProofOfCraft() {
  const cards = proofItems.map((item) => ({
    key: item.label,
    content: (
      <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-10 py-6 text-center hover:border-[var(--color-brand-primary)]/40 transition-colors w-[200px]">
        <p className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-[var(--color-brand-primary)] transition-colors">
          {item.metric}
        </p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          {item.label}
        </p>
      </div>
    ),
  }));

  return (
    <div className="mt-16 animate-in opacity-0 delay-300">
      <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 text-center">
        Proof of Craft
      </h3>
      <InfiniteMovingCards items={cards} speed="slow" direction="left" />
    </div>
  );
}
