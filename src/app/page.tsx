import Image from "next/image";
import Link from "next/link";
import FooterEmail from "./components/FooterEmail";

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

const proofItems = [
  { metric: "6.7k", label: "Memory Rows" },
  { metric: "Real-time", label: "ERP Sync" },
  { metric: "Auto", label: "Triage & Routing" },
  { metric: "99.9%", label: "Uptime SLA" },
  { metric: "< 200ms", label: "API Response" },
];

export default function Home() {
  return (
    <div className="grain-overlay flex flex-col min-h-screen bg-white dark:bg-black font-sans text-zinc-950 dark:text-zinc-50 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900" aria-label="Main navigation">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          <Link href="/" className="flex items-center gap-3" aria-label="noteware.dev home">
            <Image src="/logo-pixel.svg" alt="noteware.dev logo" width={40} height={40} className="rounded-xl shadow-lg shadow-black/20 dark:shadow-white/5" style={{ imageRendering: "pixelated" }} />
            <span className="text-lg font-bold tracking-tight">noteware.dev</span>
          </Link>
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest">
            <a href="#work" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all">Work</a>
            <a href="#services" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all">Services</a>
            <a href="#about" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all">About</a>
            <a href="https://style.noteware.dev" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white transition-all flex items-center gap-1">
              Design Picker
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 w-full pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pb-32 animate-in opacity-0">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest mb-10 bg-zinc-50 dark:bg-zinc-950">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Now Accepting Partners for Q2 2026
              </div>

              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-10 selection:text-white selection:bg-black">
                AI-Native <br />
                <span className="text-zinc-400 dark:text-zinc-600">Product Craft.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-14 leading-relaxed max-w-2xl font-medium delay-100 opacity-0 animate-in">
                We partner with founders to build high-stakes digital products. Senior-led design, robust engineering, and deep AI integration.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 delay-200 opacity-0 animate-in">
                <a
                  href="mailto:dev@notewaredigital.com"
                  className="px-10 py-5 bg-zinc-950 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-xl shadow-black/10 dark:shadow-white/5"
                >
                  Start a Project
                </a>
                <a
                  href="https://style.noteware.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-center"
                >
                  Explore Styles
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative h-[260px] md:h-[320px] lg:h-[360px] rounded-[2.5rem] border border-zinc-200/70 dark:border-zinc-800/80 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
              {/* Grid background */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.65),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-px rounded-[2.4rem] border border-white/10 dark:border-white/5 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_55%)]" />

              {/* Animated orbits */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px]">
                  <div className="absolute inset-0 rounded-full border border-white/5 dark:border-white/10" />
                  <div className="absolute inset-[18%] rounded-full border border-emerald-400/40 dark:border-emerald-300/40 blur-[0.5px]" />
                  <div className="absolute inset-[34%] rounded-full border border-sky-400/40 dark:border-sky-300/40 blur-[0.5px]" />

                  <div className="absolute inset-[12%] animate-[spin_26s_linear_infinite]">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
                    <div className="absolute -bottom-2 left-[8%] w-1.5 h-1.5 rounded-full bg-emerald-300/80" />
                  </div>

                  <div className="absolute inset-[30%] animate-[spin_20s_linear_infinite_reverse]">
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)]" />
                    <div className="absolute -left-1 top-[16%] w-1.5 h-1.5 rounded-full bg-sky-300/80" />
                  </div>

                  <div className="absolute inset-[46%] animate-[spin_32s_linear_infinite]">
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-zinc-100/80 dark:bg-zinc-300/80" />
                    <div className="absolute -right-1 top-[12%] w-1 h-1 rounded-full bg-zinc-200/80 dark:bg-zinc-400/80" />
                  </div>

                  <div className="absolute inset-[30%] backdrop-blur-2xl rounded-[2rem] border border-white/20 bg-gradient-to-br from-zinc-950/75 via-zinc-900/75 to-zinc-950/80 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
                    <div className="flex h-full flex-col justify-between p-5">
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-400">
                        <span className="inline-flex items-center gap-2">
                          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                          Live Signals
                        </span>
                        <span>Q2 • 2026</span>
                      </div>

                      <div className="space-y-2 text-xs text-zinc-300/90">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-medium text-zinc-200">AI Workflows</span>
                          <span className="text-[10px] font-mono text-emerald-300">active</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
                          <div className="h-full w-[76%] animate-[pulse_2.4s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500" />
                        </div>

                        <div className="flex items-center justify-between gap-3 pt-1">
                          <span className="text-zinc-400">Latency</span>
                          <span className="text-[11px] font-mono text-zinc-200">&lt; 200ms</span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-zinc-400">Throughput</span>
                          <span className="text-[11px] font-mono text-zinc-200">99.9% uptime</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">
                        <span>noteware.dev • control plane</span>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1 w-1 rounded-full bg-emerald-400" />
                          Stable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Case Study: Natural Catch */}
        <section id="work" className="bg-zinc-50 dark:bg-zinc-950 py-40 border-y border-zinc-100 dark:border-zinc-900 overflow-hidden" aria-labelledby="work-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8 animate-in opacity-0">
              <div className="max-w-xl">
                <h2 id="work-heading" className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Flagship Showcase</h2>
                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">Natural Catch Seafoods</h3>
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
            </div>

            <div className="relative group overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 aspect-[16/9] md:aspect-[21/9] shadow-2xl shadow-black/10 dark:shadow-black/40 animate-in opacity-0 delay-200">
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
            </div>

            {/* Proof of Craft */}
            <div className="mt-16 animate-in opacity-0 delay-300">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 text-center">Proof of Craft</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {proofItems.map((item) => (
                  <div
                    key={item.label}
                    className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 text-center hover:border-[var(--color-brand-primary)]/40 transition-colors"
                  >
                    <p className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-[var(--color-brand-primary)] transition-colors">
                      {item.metric}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-40" aria-labelledby="services-heading">
          <div className="text-center mb-20 animate-in opacity-0">
            <h2 id="services-heading" className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">What We Build</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]">
              Full-stack capability,<br />
              <span className="text-zinc-400 dark:text-zinc-600">single point of contact.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-in opacity-0 delay-200">
            {services.map((service) => (
              <div
                key={service.category}
                className="group relative rounded-[2rem] border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950 p-10 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30"
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
              </div>
            ))}
          </div>
        </section>

        {/* Studio Philosophy */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-40 border-t border-zinc-100 dark:border-zinc-900" aria-labelledby="about-heading">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="animate-in opacity-0">
              <h2 id="about-heading" className="sr-only">About noteware.dev</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10 leading-[1.1]">Built for speed, <br /><span className="text-zinc-400">scaled with intelligence.</span></h3>
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
            </div>

            <div className="relative animate-in opacity-0 delay-300">
              <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-100 to-white dark:from-zinc-900 dark:to-black rounded-[3rem] -z-10 blur-2xl opacity-50"></div>
              <div className="bg-white dark:bg-zinc-950 rounded-[2.5rem] p-12 md:p-16 border border-zinc-100 dark:border-zinc-900 shadow-2xl shadow-black/5">
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
            </div>
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
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24" aria-label="Footer navigation">
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
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              Built with AI-Native Craft <span className="w-1 h-1 rounded-full bg-zinc-800" aria-hidden="true"></span> San Diego, CA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
