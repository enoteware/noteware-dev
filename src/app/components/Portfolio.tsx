"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  { name: "Natural Catch", kind: "Client", url: "https://naturalcatchtuna.com", host: "naturalcatchtuna.com", img: "/work/naturalcatch.jpg", what: "Shopify theme, brand hub and packaging." },
  { name: "EHS Analytical Solutions", kind: "Client", url: "https://ehsanalytical.com", host: "ehsanalytical.com", img: "/work/ehs.jpg", what: "WordPress site and training platform." },
  { name: "IEPA", kind: "Client", url: "https://reg.iepa.com", host: "reg.iepa.com", img: "/work/iepa.jpg", what: "Conference registration, payments and admin." },
  { name: "Association of California Airports", kind: "Client", url: "https://calairports.org", host: "calairports.org", img: "/work/aca.jpg", what: "WordPress site and Regably setup." },
  { name: "California Strategies", kind: "Client", url: "https://calstrat.com", host: "calstrat.com", img: "/work/calstrat.jpg", what: "Website tooling." },
  { name: "Regably", kind: "Our product", url: "https://regably.com", host: "regably.com", img: "/work/regably.jpg", what: "Membership and conference registration for associations." },
  { name: "Invoi", kind: "Our product", url: "https://app.noteware.dev", host: "app.noteware.dev", img: "/work/invoi.jpg", what: "Our client workspace for projects, tasks and invoices." },
];

const QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";
function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function Project({ project, tilt }: { project: (typeof projects)[number]; tilt: boolean }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 180, damping: 20 });

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block shrink-0 ${tilt ? "portfolio-card" : "w-full"}`}
      style={tilt ? { rotateX, rotateY, transformPerspective: 1200 } : undefined}
      onPointerMove={(e) => {
        if (!tilt || e.pointerType === "touch") return;
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 7);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <div className="browser-frame">
        <div className="browser-bar" aria-hidden="true">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="ml-2 truncate">{project.host}</span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.img}
            alt={`${project.name} website`}
            fill
            sizes="(min-width: 768px) 62vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-standard group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 mt-4">
        <div>
          <h4 className="text-h2 font-bold tracking-tighter group-hover:text-primary transition-colors">{project.name}</h4>
          <p className="text-muted-foreground mt-1">{project.what}</p>
        </div>
        <span className="chip shrink-0">{project.kind}</span>
      </div>
    </motion.a>
  );
}

function Heading() {
  return (
    <div className="max-w-page mx-auto w-full px-[var(--gutter)] mb-8">
      <h2 id="portfolio-heading" className="eyebrow">Portfolio</h2>
      <h3 className="section-title mt-3">Live and <em>in use.</em></h3>
    </div>
  );
}

function StackedPortfolio() {
  return (
    <section id="portfolio" className="py-14 border-t" aria-labelledby="portfolio-heading">
      <Heading />
      <div className="px-[var(--gutter)] max-w-page mx-auto grid gap-12">
        {projects.map((project) => (
          <Project key={project.name} project={project} tilt={false} />
        ))}
      </div>
    </section>
  );
}

/** Mounts only when pinned, so its scroll target exists when useScroll starts. */
function PinnedPortfolio() {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  useLayoutEffect(() => {
    if (!track.current) return;
    const measure = () => {
      if (track.current) setTravel(Math.max(track.current.scrollWidth - window.innerWidth, 0));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  // Keyboard focus moves the page to the matching scroll position, because the
  // track only moves with vertical scroll.
  const revealFocused = (e: React.FocusEvent<HTMLDivElement>) => {
    const card = e.target as HTMLElement;
    if (!outer.current || !track.current || !card.matches(":focus-visible")) return;
    const gutter = track.current.children[0] as HTMLElement;
    const offset = Math.min(Math.max(card.offsetLeft - gutter.offsetLeft, 0), travel);
    window.scrollTo(0, outer.current.offsetTop + offset);
  };

  return (
    <section id="portfolio" ref={outer} className="relative border-t" style={{ height: `calc(100vh + ${travel}px)` }} aria-labelledby="portfolio-heading">
      <div className="sticky top-0 h-screen overflow-clip flex flex-col justify-center pt-16">
        <Heading />
        <motion.div ref={track} className="flex gap-8 w-max px-[max(var(--gutter),calc((100vw-77.5rem)/2+var(--gutter)))]" style={{ x }} onFocus={revealFocused}>
          {projects.map((project) => (
            <Project key={project.name} project={project} tilt />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/** Pins and scrolls sideways on desktop. Phones and reduced motion get a plain stack. */
export function Portfolio() {
  const pinned = useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
  return pinned ? <PinnedPortfolio /> : <StackedPortfolio />;
}
