import type { Metadata } from "next";
import { AudiencePage, type AudienceContent } from "../components/AudiencePage";
import { ehs, naturalCatch, propFirms } from "../work";

export const metadata: Metadata = {
  title: "For business owners | noteware.dev",
  description: "Brand, websites, Shopify stores, email marketing and automation for business owners, from one senior-led team.",
};

const content: AudienceContent = {
  chip: "For business owners",
  titleLead: "Your store, your site,",
  titleAccent: "and the work behind them.",
  sub: "We design and build the brand, the site and the automation that runs behind it. One senior-led team handles all of it, so you have one point of contact.",
  subject: "Business project",
  needsTitle: <>You run the business. <em>We handle the rest.</em></>,
  needs: [
    { title: "The website doesn't pull its weight", desc: "It looks dated, it is hard to change, and you aren't sure it brings in work." },
    { title: "Customers go quiet after the first order", desc: "Email and ads run separately, and nobody owns what happens next." },
    { title: "The same admin eats every week", desc: "Reports, follow-ups and triage still depend on someone remembering to do them." },
    { title: "Too many vendors to manage", desc: "Design, development and marketing each sit with someone different, and you connect them." },
  ],
  buildsTitle: <>Everything <em>under one roof.</em></>,
  builds: [
    { title: "Brand and design", items: ["Brand identity and visual systems", "UI and UX for web and mobile", "Packaging and print"] },
    { title: "Stores and websites", items: ["Shopify Plus architecture", "WordPress sites", "Training platforms"] },
    { title: "Growth", items: ["Klaviyo lifecycle and automation", "Meta and Google ad optimization", "Retention and revenue operations"] },
    { title: "AI and automation", items: ["Agentic workflows and triage", "Custom LLM integrations", "Knowledge systems over your own documents"] },
  ],
  proofTitle: <>Built for <em>real businesses.</em></>,
  proof: [naturalCatch, ehs, propFirms],
  quote: {
    text: "noteware.dev isn't just a dev shop. They're part of the team, building the tools that actually drive our growth.",
    who: "Natural Catch Team",
    role: "Long-term Strategic Partner",
    initials: "NC",
  },
  closing: <>Start a <em>project.</em></>,
};

export default function BusinessOwnersPage() {
  return <AudiencePage content={content} />;
}
