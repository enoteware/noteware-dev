"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

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
  const [validBrands, setValidBrands] = useState(brands);

  useEffect(() => {
    // Verify each SVG exists and is non-empty by attempting to fetch it
    Promise.all(
      brands.map(async (brand) => {
        try {
          const res = await fetch(`/brands/${brand.slug}.svg`, { method: "HEAD" });
          const length = res.headers.get("content-length");
          if (res.ok && length && parseInt(length, 10) > 0) return brand;
          return null;
        } catch {
          return null;
        }
      })
    ).then((results) => {
      const valid = results.filter(Boolean) as typeof brands;
      if (valid.length > 0) setValidBrands(valid);
    });
  }, []);

  const items = validBrands.map((brand) => ({
    key: brand.slug,
    content: (
      <div className="flex items-center justify-center w-28 h-16 px-4">
        <Image
          src={`/brands/${brand.slug}.svg`}
          alt={brand.name}
          width={80}
          height={32}
          className="object-contain h-7 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 dark:invert"
        />
      </div>
    ),
  }));

  return (
    <section className="relative py-16 border-b border-zinc-100 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 text-center">
          Trusted by founders at
        </p>
      </div>
      <InfiniteMovingCards
        items={items}
        speed="slow"
        direction="left"
        pauseOnHover={false}
      />
    </section>
  );
}
