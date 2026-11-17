import Link from "next/link";
import FooterEmail from "./FooterEmail";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t bg-sidebar pt-12 sm:pt-14 overflow-hidden" role="contentinfo">
      <div className="max-w-page mx-auto px-[var(--gutter)]">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3">
              <Logo />
            </div>
            <p className="text-muted-foreground max-w-sm">
              High-end product engineering for forward-thinking founders.
            </p>
          </div>
          <nav className="contents" aria-label="Footer navigation">
            <div className="space-y-3">
              <p className="footer-head">Studio</p>
              <ul className="space-y-2">
                <li><Link href="/#work" className="link-quiet">Work</Link></li>
                <li><Link href="/#portfolio" className="link-quiet">Portfolio</Link></li>
                <li><Link href="/#services" className="link-quiet">Services</Link></li>
                <li><Link href="/#about" className="link-quiet">About</Link></li>
                <li><Link href="/associations" className="link-quiet">For associations</Link></li>
                <li><Link href="/business-owners" className="link-quiet">For business owners</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="footer-head">Connect</p>
              <ul className="space-y-2">
                <li><FooterEmail /></li>
                <li><a href="https://github.com/enoteware" target="_blank" rel="noopener noreferrer" className="link-quiet">GitHub</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="footer-head">Platform</p>
              <a href="https://app.noteware.dev" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Client login
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6 border-t text-caption text-muted-foreground">
          <p>&copy; 2026 noteware.dev</p>
          <p className="flex items-center gap-2 flex-wrap">
            Built with AI-Native Craft <span aria-hidden="true">&middot;</span> San Diego, CA <span aria-hidden="true">&middot;</span> Animations by Aceternity UI
          </p>
        </div>
      </div>
      <div className="giant-wordmark text-center mt-12 -mb-[0.09em] select-none overflow-hidden" aria-hidden="true">noteware.dev</div>
    </footer>
  );
}
