import { type ReactNode } from "react";
import { FloatingNav } from "./FloatingNav";
import { HeroSection } from "./HeroSection";
import { ProjectSlab } from "./Portfolio";
import { SiteFooter } from "./SiteFooter";
import { ScrollReveal } from "./ui/ScrollReveal";
import { type Project } from "../work";

export type AudienceContent = {
  chip: string;
  titleLead: string;
  titleAccent: string;
  sub: string;
  subject: string;
  needsTitle: ReactNode;
  needs: { title: string; desc: string }[];
  buildsTitle: ReactNode;
  builds: { title: string; items: string[] }[];
  proofTitle: ReactNode;
  proof: Project[];
  quote?: { text: string; who: string; role: string; initials: string };
  closing: ReactNode;
};

const steps = [
  { title: "Tell us what is stuck", desc: "Send a short email about what is slowing you down." },
  { title: "We agree what comes first", desc: "We pick the first piece of work with you and scope it." },
  { title: "We build it and stay on", desc: "One senior-led team builds it and keeps it running." },
];

export function AudiencePage({ content }: { content: AudienceContent }) {
  const mailto = `mailto:dev@notewaredigital.com?subject=${encodeURIComponent(content.subject)}`;
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">Skip to content</a>
      <FloatingNav />
      <main id="main" className="flex-1 w-full pt-16">
        <HeroSection
          chip={content.chip}
          lead={content.titleLead}
          accent={content.titleAccent}
          sub={content.sub}
          mailto={mailto}
          compact
        />

        <section className="max-w-page mx-auto w-full px-[var(--gutter)] py-14 sm:py-20" aria-labelledby="needs-heading">
          <ScrollReveal className="mb-10">
            <p className="eyebrow">Sound familiar?</p>
            <h2 id="needs-heading" className="section-title mt-3">{content.needsTitle}</h2>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-2 gap-4">
            {content.needs.map((need, i) => (
              <div key={need.title} className="flow-step">
                <div className="num" aria-hidden="true">0{i + 1}</div>
                <h3 className="text-h3 font-semibold tracking-tight mb-1.5">{need.title}</h3>
                <p>{need.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </section>

        <section className="bg-sidebar border-y py-14 sm:py-20" aria-labelledby="builds-heading">
          <div className="max-w-page mx-auto px-[var(--gutter)]">
            <ScrollReveal className="mb-10">
              <p className="eyebrow">What we build</p>
              <h2 id="builds-heading" className="section-title mt-3">{content.buildsTitle}</h2>
            </ScrollReveal>
            <ScrollReveal className="grid md:grid-cols-2 gap-4">
              {content.builds.map((build) => (
                <div key={build.title} className="card sm:p-8">
                  <h3 className="text-h2 font-bold tracking-tighter mb-4">{build.title}</h3>
                  <ul className="space-y-2.5">
                    {build.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                        <span className="chip-dot mt-2" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        <section className="py-14 sm:py-20 overflow-x-clip" aria-labelledby="proof-heading">
          <div className="max-w-page mx-auto px-[var(--gutter)]">
            <ScrollReveal className="mb-12">
              <p className="eyebrow">Our work</p>
              <h2 id="proof-heading" className="section-title mt-3">{content.proofTitle}</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
              {content.proof.map((project) => (
                <ProjectSlab key={project.name} project={project} fill />
              ))}
            </div>
            {content.quote && (
              <ScrollReveal className="cta-band mt-16">
                <blockquote className="section-title !font-medium !text-[clamp(24px,3vw,44px)] !leading-[1.15] mb-8">
                  &ldquo;{content.quote.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="tile rounded-pill font-mono font-semibold text-caption" aria-hidden="true">{content.quote.initials}</div>
                  <div>
                    <p className="font-semibold">{content.quote.who}</p>
                    <p className="text-caption text-muted-foreground">{content.quote.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        <section className="max-w-page mx-auto w-full px-[var(--gutter)] pb-14 sm:pb-20" aria-labelledby="steps-heading">
          <ScrollReveal className="mb-8">
            <p className="eyebrow">How it starts</p>
            <h2 id="steps-heading" className="section-title mt-3">Three <em>small steps.</em></h2>
          </ScrollReveal>
          <ScrollReveal className="grid md:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <div key={step.title} className="flow-step">
                <div className="num" aria-hidden="true">0{i + 1}</div>
                <h3 className="text-h3 font-semibold tracking-tight mb-1.5">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </section>

        <a href={mailto} className="primary-band group block overflow-hidden py-14 sm:py-20 px-[var(--gutter)] text-center">
          <span className="band-text block whitespace-normal transition-transform duration-500 ease-standard group-hover:scale-[1.03]">
            {content.closing}
          </span>
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
