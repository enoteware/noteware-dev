"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

const externalIcon = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
  </svg>
);

export function FloatingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav
      className="site-nav fixed top-0 left-0 right-0 z-50 border-b"
      aria-label="Main navigation"
      onKeyDown={(e) => {
        if (e.key === "Escape" && mobileOpen) {
          setMobileOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="flex items-center gap-8 h-16 px-[var(--gutter)] max-w-page mx-auto w-full">
        <Link href="/" className="flex items-center" aria-label="noteware.dev home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-quiet">
              {link.label}
            </a>
          ))}
          <a
            href="https://style.noteware.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet flex items-center gap-1.5"
          >
            Design Picker
            {externalIcon}
          </a>
        </div>

        <a
          href="https://app.noteware.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden md:inline-flex ml-auto"
        >
          Client login
        </a>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden ml-auto flex flex-col justify-center items-center w-11 h-11 -mr-2.5 rounded-md hover:bg-secondary transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ease-standard ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground mt-1.5 transition-transform duration-200 ease-standard ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      <motion.div
        className="absolute left-0 right-0 bottom-[-1px] h-0.5 bg-primary origin-left"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      {/* Mobile dropdown. inert keeps closed links out of the tab order. */}
      <div
        id="mobile-menu"
        inert={!mobileOpen}
        className={`md:hidden grid bg-background transition-[grid-template-rows,opacity] duration-200 ease-standard ${
          mobileOpen ? "grid-rows-[1fr] opacity-100 border-t" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-[var(--gutter)] py-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="link-quiet flex items-center min-h-11 -mx-2 px-2 rounded-md hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://style.noteware.dev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="link-quiet flex items-center gap-1.5 min-h-11 -mx-2 px-2 rounded-md hover:bg-secondary"
            >
              Design Picker
              {externalIcon}
            </a>
            <a
              href="https://app.noteware.dev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="btn btn-primary mt-2"
            >
              Client login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
