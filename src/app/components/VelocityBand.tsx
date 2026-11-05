"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "./useMotionPreference";

/** Full-bleed type that moves only while the page scrolls, so nothing loops at rest. */
export function VelocityBand() {
  const reduced = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollY, { stiffness: 90, damping: 24, mass: 0.4 });
  const left = useTransform(smooth, (v) => `${-((v * 0.012) % 25)}%`);
  const right = useTransform(smooth, (v) => `${-25 + ((v * 0.012) % 25)}%`);

  const words = (
    <>
      Senior-led design <em>&amp;</em> robust engineering <em>&amp;</em> deep AI integration <em>&amp;</em>&nbsp;
    </>
  );

  return (
    <div className="primary-band overflow-hidden py-8 sm:py-12" aria-hidden="true">
      <motion.div className="band-text w-max" style={reduced ? undefined : { x: left }}>
        {words}{words}{words}{words}
      </motion.div>
      <motion.div className="band-text w-max" style={reduced ? undefined : { x: right }}>
        {words}{words}{words}{words}
      </motion.div>
    </div>
  );
}
