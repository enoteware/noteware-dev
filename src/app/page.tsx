import Link from "next/link";
import { HeroSection } from "./components/HeroSection";
import { ProofOfCraft } from "./components/ProofOfCraft";
import { ScrollReveal } from "./components/ui/ScrollReveal";
import { FloatingNav } from "./components/FloatingNav";
import { BrandMarquee } from "./components/BrandMarquee";
import { SiteFooter } from "./components/SiteFooter";
import { Portfolio } from "./components/Portfolio";
import { ScrollWords } from "./components/ScrollWords";
import { VelocityBand } from "./components/VelocityBand";

const services = [
  {
    category: "Strategic branding",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
    ),
    items: [
      "Brand Identity & Visual Systems",
      "Design Systems & Component Libraries",
      "UI/UX for Web & Mobile",
      "Packaging & Print Collateral",
    ],
  },
  {
    category: "AI engineering",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Z"/><circle cx="12" cy="14" r="2"/><path d="M12 16v2"/></svg>
    ),
    items: [
      "Custom LLM Integrations",
      "Agentic Workflows & Triage",
      "Predictive Analytics Pipelines",
      "RAG & Knowledge Systems",
    ],
  },
  {
    category: "Managed growth",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">Skip to content</a>

      {/* Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <main id="main" className="flex-1 w-full pt-16">
        <HeroSection />

        {/* Brand Marquee */}
        <BrandMarquee />

        <VelocityBand />

        {/* Who we help */}
        <section className="max-w-page mx-auto w-full px-[var(--gutter)] py-14 sm:py-20" aria-labelledby="audience-heading">
          <ScrollReveal className="mb-10">
            <h2 id="audience-heading" className="eyebrow">Who we help</h2>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-2 gap-4">
            {[
              { href: "/associations", lead: "For", accent: "associations.", desc: "Conference registration, dues, member directories, board records and websites." },
              { href: "/business-owners", lead: "For", accent: "business owners.", desc: "Brand, websites, Shopify stores, email marketing and automation." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="cta-band group block !p-8 sm:!p-12 transition-transform duration-200 ease-standard motion-safe:hover:-translate-y-0.5">
                <span className="section-title block">{item.lead} <em>{item.accent}</em></span>
                <span className="sub block mt-4">{item.desc}</span>
                <span className="btn btn-primary mt-6">
                  See how we help
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </ScrollReveal>
        </section>

        {/* Featured Case Study: Natural Catch */}
        <section id="work" className="py-14 sm:py-20" aria-labelledby="work-heading">
          <div className="max-w-page mx-auto px-[var(--gutter)]">
            <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div className="max-w-2xl">
                <h2 id="work-heading" className="eyebrow">Flagship Showcase</h2>
                <h3 className="section-title mt-3 mb-3">Natural Catch Seafoods</h3>
                <p className="sub">
                  End-to-end brand transformation and e-commerce infrastructure for the world&apos;s premier sustainable seafood brand.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Shopify Plus', 'Klaviyo', 'Custom ERP', 'AI Insights'].map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="cta-band flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <p className="eyebrow mb-3">The Results</p>
                <h4 className="section-title">
                  Scaling a premier brand with <br className="hidden sm:block" /><em>intelligent automation.</em>
                </h4>
              </div>
              <a href="https://naturalcatchtuna.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary self-start md:self-end">
                View project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
            </ScrollReveal>

            <ProofOfCraft />
          </div>
        </section>

        <Portfolio />

        {/* Services Grid */}
        <section id="services" className="bg-sidebar border-y py-14 sm:py-20" aria-labelledby="services-heading">
          <div className="max-w-page mx-auto px-[var(--gutter)]">
            <ScrollReveal className="mb-12">
              <h2 id="services-heading" className="eyebrow">What We Build</h2>
              <h3 className="section-title mt-3">
                Full-stack capability, <br /><em>single point of contact.</em>
              </h3>
            </ScrollReveal>

            <div className="grid gap-6">
              {services.map((service, i) => (
                <div
                  key={service.category}
                  className="card service-card grid md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-12 items-start p-6 sm:p-10"
                  style={{ "--stack-top": `calc(5.5rem + ${i * 1.5}rem)` } as React.CSSProperties}
                >
                  <div className="service-num" aria-hidden="true">0{i + 1}</div>
                  <div>
                    <div className="tile mb-4">{service.icon}</div>
                    <h4 className="section-title !text-[clamp(26px,3vw,44px)]">{service.category}</h4>
                  </div>
                  <ul className="space-y-3 md:pt-14">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 sub">
                        <span className="chip-dot mt-2.5" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Philosophy */}
        <section id="about" className="max-w-page mx-auto w-full px-[var(--gutter)] py-14 sm:py-20" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">About noteware.dev</h2>
          <ScrollReveal className="mb-8">
            <h3 className="section-title">Built for speed, <br /><em>scaled with intelligence.</em></h3>
          </ScrollReveal>
          <ScrollWords
            className="section-title !font-medium !text-[clamp(26px,3.6vw,56px)] !leading-[1.12] mb-16"
            text="We don't just write code. We build integrated systems that run your business. From brand foundations to automated operations, we're your technical and strategic partners."
          />

          <ScrollReveal className="cta-band mb-10">
            <svg className="w-9 h-9 text-primary mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H15.0171C14.4648 8 14.0171 7.55228 14.0171 7V4H21.0171V15C21.0171 16.1046 20.1216 17 19.0171 17H16.0171V21H14.0171ZM3.01709 21L3.01709 18C3.01709 16.8954 3.91252 16 5.01709 16H8.01709C8.56937 16 9.01709 15.5523 9.01709 15V9C9.01709 8.44772 8.56937 8 8.01709 8H4.01709C3.46481 8 3.01709 7.55228 3.01709 7V4H10.0171V15C10.0171 16.1046 9.12157 17 8.01709 17H5.01709V21H3.01709Z"/></svg>
            <blockquote className="section-title !font-medium !text-[clamp(24px,3vw,44px)] !leading-[1.15] mb-8">
              &ldquo;noteware.dev isn&apos;t just a dev shop. They&apos;re part of the team, building the tools that actually drive our growth.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="tile rounded-pill font-mono font-semibold text-caption" aria-hidden="true">NC</div>
              <div>
                <p className="font-semibold">Natural Catch Team</p>
                <p className="text-caption text-muted-foreground">Long-term Strategic Partner</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-3 gap-4">
            {[
              { title: "AI-driven engineering", desc: "Custom LLM integrations and automated workflows built into the core." },
              { title: "E-commerce infrastructure", desc: "Elite Shopify + Klaviyo setups optimized for conversion and retention." },
              { title: "Business intelligence", desc: "Real-time data layers that provide actionable insights across your stack." }
            ].map((item, i) => (
              <div key={item.title} className="flow-step">
                <div className="num" aria-hidden="true">0{i + 1}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </section>

        {/* Closing call to action */}
        <a href="mailto:dev@notewaredigital.com" className="primary-band group block overflow-hidden py-14 sm:py-20 px-[var(--gutter)] text-center">
          <span className="band-text block whitespace-normal transition-transform duration-500 ease-standard group-hover:scale-[1.03]">
            Start a <em>project.</em>
          </span>
        </a>
      </main>

      <SiteFooter />
    </div>
  );
}
