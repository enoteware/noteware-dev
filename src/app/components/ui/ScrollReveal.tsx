"use client";

import { MotionConfig, motion } from "framer-motion";
import { ReactNode } from "react";

export function ScrollReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
