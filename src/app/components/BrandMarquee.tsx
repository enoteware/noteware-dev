"use client";

import Image from "next/image";
import { useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const clients = [
  { key: "natural-catch", src: "/clients/natural-catch.svg", name: "Natural Catch", w: 1202, h: 305 },
  { key: "ehs", src: "/clients/ehs.svg", name: "EHS Analytical Solutions", w: 300, h: 300 },
  { key: "iepa", src: "/clients/iepa.png", name: "Independent Energy Producers Association", w: 915, h: 267 },
  { key: "aca", src: "/clients/aca.svg", name: "Association of California Airports", w: 300, h: 300 },
  { key: "propfirms", src: "/clients/propfirms.png", name: "PropFirms", w: 1453, h: 397 },
  { key: "calstrat", src: "/clients/calstrat.svg", name: "California Strategies", w: 586, h: 309, label: "California Strategies" },
];

const brands = [
  { slug: "shopify", name: "Shopify" },
  { slug: "vercel", name: "Vercel" },
  { slug: "cloudflare", name: "Cloudflare" },
  { slug: "stripe", name: "Stripe" },
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "tailwindcss", name: "Tailwind CSS" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "figma", name: "Figma" },
  { slug: "github", name: "GitHub" },
  { slug: "react", name: "React" },
  { slug: "postgresql", name: "PostgreSQL" },
];

export function BrandMarquee() {
  const [paused, setPaused] = useState(false);

  const clientItems = clients.map((client) => ({
    key: client.key,
    content: (
      <div className="logo-tile">
        <Image src={client.src} alt={client.name} width={client.w} height={client.h} unoptimized />
        {client.label && <span aria-hidden="true">{client.label}</span>}
      </div>
    ),
  }));

  const brandItems = brands.map((brand) => ({
    key: brand.slug,
    content: (
      <div className="flex items-center justify-center w-28 h-16 px-4">
        <span
          role="img"
          aria-label={brand.name}
          className="brand-mark"
          style={{ maskImage: `url(/brands/${brand.slug}.svg)`, WebkitMaskImage: `url(/brands/${brand.slug}.svg)` }}
        />
      </div>
    ),
  }));

  return (
    <section className="relative py-14 sm:py-20 border-b overflow-hidden">
      <div className="max-w-page mx-auto px-[var(--gutter)] mb-8 text-center">
        <p className="eyebrow">Trusted by</p>
      </div>
      <InfiniteMovingCards items={clientItems} paused={paused} repeat={3} seconds={45} />

      <div className="max-w-page mx-auto px-[var(--gutter)] mt-12 mb-4 text-center">
        <p className="eyebrow">Built with</p>
      </div>
      <InfiniteMovingCards items={brandItems} paused={paused} reverse repeat={3} seconds={150} />

      <div className="marquee-toggle mt-6 flex justify-center">
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => setPaused(!paused)}
          aria-label={`${paused ? "Play" : "Pause"} logos`}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </section>
  );
}
