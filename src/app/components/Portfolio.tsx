"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Logo } from "./Logo";
import { projects as allProjects, type Project } from "../work";

const QUERY = "(min-width: 768px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";
const TILT_QUERY = "(hover: hover) and (prefers-reduced-motion: no-preference)";

function useMedia(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

/**
 * A screenshot as a thick angled slab, with the company logo floating in front.
 * With a track position, it swings to face the visitor as it reaches the center.
 */
export function ProjectSlab({
  project,
  fill = false,
  trackX,
}: {
  project: Project;
  fill?: boolean;
  trackX?: MotionValue<number>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const tilt = useMedia(TILT_QUERY);
  const zero = useMotionValue(0);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const hoverX = useSpring(rx, { stiffness: 180, damping: 20 });
  const hoverY = useSpring(ry, { stiffness: 180, damping: 20 });

  const swing = useTransform(trackX ?? zero, (x) => {
    if (!trackX || !ref.current) return -8;
    const center = ref.current.offsetLeft + x + ref.current.offsetWidth / 2;
    const offset = (center - window.innerWidth / 2) / window.innerWidth;
    return Math.max(-20, Math.min(20, offset * -30));
  });
  const rotateY = useTransform([swing, hoverY], ([a, b]: number[]) => a + b);
  const rotateX = useTransform(hoverX, (x) => 4 + x);

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group slab-scene block shrink-0 ${fill ? "w-full" : "portfolio-card"}`}
      onPointerMove={(e) => {
        if (!tilt || e.pointerType === "touch") return;
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <motion.div
        className={`slab ${tilt || trackX ? "" : "slab-static"}`}
        style={tilt || trackX ? { rotateX, rotateY } : undefined}
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
              loading={trackX ? "eager" : "lazy"}
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="slab-logo" aria-hidden="true">
          <div className="logo-tile">
            {project.logo ? (
              // eslint-disable-next-line @next/next/no-img-element -- local logo files, sized by CSS
              <img src={project.logo.src} alt="" width={project.logo.w} height={project.logo.h} />
            ) : (
              <Logo />
            )}
          </div>
        </div>
      </motion.div>
      <div className="flex items-start justify-between gap-4 mt-6">
        <div>
          <h4 className="text-h2 font-bold tracking-tighter group-hover:text-primary transition-colors">{project.name}</h4>
          <p className="text-muted-foreground mt-1">{project.what}</p>
        </div>
        <span className="chip shrink-0">{project.kind}</span>
      </div>
    </a>
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
    <section id="portfolio" className="py-14 border-t overflow-x-clip" aria-labelledby="portfolio-heading">
      <Heading />
      <div className="px-[var(--gutter)] max-w-page mx-auto grid gap-14">
        {allProjects.map((project) => (
          <ProjectSlab key={project.name} project={project} fill />
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
    const first = track.current.children[0] as HTMLElement;
    const offset = Math.min(Math.max(card.offsetLeft - first.offsetLeft, 0), travel);
    window.scrollTo(0, outer.current.offsetTop + offset);
  };

  return (
    <section id="portfolio" ref={outer} className="relative border-t" style={{ height: `calc(100vh + ${travel}px)` }} aria-labelledby="portfolio-heading">
      <div className="sticky top-0 h-screen overflow-clip flex flex-col justify-center pt-16">
        <Heading />
        <motion.div ref={track} className="flex gap-16 w-max px-[max(var(--gutter),calc((100vw-77.5rem)/2+var(--gutter)))]" style={{ x }} onFocus={revealFocused}>
          {allProjects.map((project) => (
            <ProjectSlab key={project.name} project={project} trackX={x} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/** Pins and scrolls sideways on tall desktop screens. Everything else gets a plain stack. */
export function Portfolio() {
  const pinned = useMedia(QUERY);
  return pinned ? <PinnedPortfolio /> : <StackedPortfolio />;
}
