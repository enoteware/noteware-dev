import Image from "next/image";
import FooterEmail from "./components/FooterEmail";
import { HeroSection } from "./components/HeroSection";
import { ProofOfCraft } from "./components/ProofOfCraft";
import { ScrollReveal } from "./components/ui/ScrollReveal";
import { CardSpotlight } from "./components/ui/CardSpotlight";
import { FloatingNav } from "./components/FloatingNav";
import { BrandMarquee } from "./components/BrandMarquee";

const services = [
  {
    category: "Strategic Branding",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
    ),
    items: [
      "Brand Identity & Visual Systems",
      "Design Systems & Component Libraries",
      "UI/UX for Web & Mobile",
      "Packaging & Print Collateral",
    ],
  },
  {
    category: "AI Engineering",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Z"/><circle cx="12" cy="14" r="2"/><path d="M12 16v2"/></svg>
    ),
    items: [
      "Custom LLM Integrations",
      "Agentic Workflows & Triage",
      "Predictive Analytics Pipelines",
      "RAG & Knowledge Systems",
    ],
  },
  {
    category: "Managed Growth",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
    ),
    items: [
      "Klaviyo Lifecycle & Automation",
      "Meta & Google Ad Optimization",
      "Shopify Plus Architecture",
      "Retention & Revenue Operations",
    ],
  },
];

export default function Home() {
  return (
    <div className="grain-overlay flex flex-col min-h-screen bg-white dark:bg-black font-sans text-zinc-950 dark:text-zinc-50 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <main className="flex-1 w-full pt-32 overflow-hidden">
        <HeroSection />

        {/* Brand Marquee */}
        <BrandMarquee />

        {/* Featured Case Study: Natural Catch */}
        <section id="work" className="bg-zinc-50 dark:bg-zinc-950 py-20 sm:py-40 border-y border-zinc-100 dark:border-zinc-900 overflow-hidden" aria-labelledby="work-heading">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="flex flex-col md:flex-row items-baseline justify-between mb-12 sm:mb-20 gap-8">
              <div className="max-w-xl">
                <h2 id="work-heading" className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Flagship Showcase</h2>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-8">Natural Catch Seafoods</h3>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                  End-to-end brand transformation and e-commerce infrastructure for the world&apos;s premier sustainable seafood brand.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Shopify Plus', 'Klaviyo', 'Custom ERP', 'AI Insights'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-white dark:bg-black">
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="relative group overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-zinc-100 dark:bg-white/5 backdrop-blur-xl border border-zinc-200 dark:border-white/10 aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] shadow-2xl shadow-black/10 dark:shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>

              <div className="absolute inset-0 flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-105">
                <div className="text-center">
                  <span className="text-[10vw] font-black text-black/5 dark:text-white/5 select-none leading-none" aria-hidden="true">NATURAL CATCH</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-20 text-white max-w-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                   <span className="w-8 h-px bg-zinc-600" aria-hidden="true"></span> The Results
                </p>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Scaling a premier brand with <br className="hidden sm:block" />intelligent automation.
                </h4>
              </div>

              <div className="absolute top-8 right-8 sm:top-12 sm:right-12 z-20">
                <a href="https://naturalcatchtuna.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-[var(--color-brand-primary)] text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-[var(--color-brand-primary)]/25">
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </a>
              </div>
            </ScrollReveal>

            {/* Proof of Craft — Infinite Scroll */}
            <ProofOfCraft />
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-20 sm:py-40" aria-labelledby="services-heading">
          <ScrollReveal className="text-center mb-20">
            <h2 id="services-heading" className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">What We Build</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]">
              Full-stack capability,<br />
              <span className="text-zinc-400 dark:text-zinc-600">single point of contact.</span>
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={200} className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <CardSpotlight
                key={service.category}
                className="group rounded-2xl sm:rounded-[2rem] border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950 p-7 sm:p-10 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30"
              >
                <div className="mb-8 w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)]/10 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold tracking-tight mb-6">{service.category}</h4>
                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 group-hover:bg-[var(--color-brand-primary)] transition-colors" aria-hidden="true"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardSpotlight>
            ))}
          </ScrollReveal>
        </section>

        {/* Studio Philosophy */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-20 sm:py-40 border-t border-zinc-100 dark:border-zinc-900" aria-labelledby="about-heading">
          <div className="grid lg:grid-cols-2 gap-16 sm:gap-32 items-center">
            <ScrollReveal>
              <h2 id="about-heading" className="sr-only">About noteware.dev</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-10 leading-[1.1]">Built for speed, <br /><span className="text-zinc-400">scaled with intelligence.</span></h3>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12 font-medium">
                We don&apos;t just write code. We build integrated systems that run your business. From brand foundations to automated operations, we&apos;re your technical and strategic partners.
              </p>

              <div className="space-y-8">
                {[
                  { title: "AI-Driven Engineering", desc: "Custom LLM integrations and automated workflows built into the core." },
                  { title: "E-commerce Infrastructure", desc: "Elite Shopify + Klaviyo setups optimized for conversion and retention." },
                  { title: "Business Intelligence", desc: "Real-time data layers that provide actionable insights across your stack." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-sm font-black uppercase tracking-widest mb-3 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white transition-transform group-hover:scale-150" aria-hidden="true"></span>
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 pl-5 border-l border-zinc-100 dark:border-zinc-900 ml-1 py-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-100 to-white dark:from-zinc-900 dark:to-black rounded-[3rem] -z-10 blur-2xl opacity-50"></div>
              <div className="bg-white dark:bg-zinc-950 rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-zinc-100 dark:border-zinc-900 shadow-2xl shadow-black/5">
                <svg className="w-12 h-12 text-zinc-200 dark:text-zinc-800 mb-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H15.0171C14.4648 8 14.0171 7.55228 14.0171 7V4H21.0171V15C21.0171 16.1046 20.1216 17 19.0171 17H16.0171V21H14.0171ZM3.01709 21L3.01709 18C3.01709 16.8954 3.91252 16 5.01709 16H8.01709C8.56937 16 9.01709 15.5523 9.01709 15V9C9.01709 8.44772 8.56937 8 8.01709 8H4.01709C3.46481 8 3.01709 7.55228 3.01709 7V4H10.0171V15C10.0171 16.1046 9.12157 17 8.01709 17H5.01709V21H3.01709Z"/></svg>
                <blockquote className="text-2xl md:text-3xl font-medium leading-[1.4] mb-12 text-zinc-800 dark:text-zinc-200 tracking-tight">
                  &ldquo;noteware.dev isn&apos;t just a dev shop. They&apos;re part of the team, building the tools that actually drive our growth.&rdquo;
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-black text-xl italic" aria-hidden="true">NC</div>
                  <div>
                    <p className="font-bold text-lg">Natural Catch Team</p>
                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Long-term Strategic Partner</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 px-6 py-24" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo-pixel.svg" alt="noteware.dev logo" width={40} height={40} className="rounded-xl shadow-lg shadow-black/20 dark:shadow-white/5" style={{ imageRendering: "pixelated" }} />
                <span className="text-sm font-bold tracking-tight">noteware.dev</span>
              </div>
              <p className="text-zinc-500 max-w-sm font-medium">
                High-end product engineering for forward-thinking founders.
              </p>
            </div>
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 md:gap-24" aria-label="Footer navigation">
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Studio</p>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.15em]">
                  <li><a href="#work" className="hover:text-zinc-500 transition-colors">Work</a></li>
                  <li><a href="#services" className="hover:text-zinc-500 transition-colors">Services</a></li>
                  <li><a href="#about" className="hover:text-zinc-500 transition-colors">About</a></li>
                  <li><a href="https://style.noteware.dev" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-500 transition-colors flex items-center gap-2">Style Hub <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/></svg></a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Connect</p>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.15em]">
                  <li><FooterEmail /></li>
                  <li><a href="https://github.com/enoteware" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-500 transition-colors">GitHub</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Platform</p>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.15em]">
                  <li>
                    <a href="https://app.noteware.dev" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-lg transition-colors inline-block text-zinc-900 dark:text-zinc-100">
                      Client Login
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">&copy; 2026 noteware.dev</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              Built with AI-Native Craft <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800" aria-hidden="true"></span> San Diego, CA <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800" aria-hidden="true"></span> Animations by Aceternity UI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
