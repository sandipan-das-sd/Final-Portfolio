import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, Building2, Factory, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { servicePages } from "@/lib/services";
import { automationPages, industryPages } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Software Development, ERP, Automation & Industry Solutions",
  description:
    "Full-stack, mobile, AI, SAP, n8n automation, custom ERP and industry-specific software solutions for healthcare, manufacturing, education, fintech, logistics, retail and hospitality.",
  alternates: { canonical: "/services" },
};

const groups = [
  {
    id: "engineering",
    number: "01",
    icon: Building2,
    eyebrow: "Product engineering",
    title: "Digital products, built end to end.",
    text: "Websites, applications, mobile products, AI systems and SAP development—from interface and APIs to data and deployment.",
    items: servicePages.map((item) => ({
      title: item.shortTitle,
      text: item.description,
      href: `/services/${item.slug}`,
    })),
  },
  {
    id: "automation-services",
    number: "02",
    icon: Workflow,
    eyebrow: "Automation & ERP",
    title: "Less manual work. Better operations.",
    text: "Connected systems that remove repetition, centralize operations and make business information easier to act on.",
    items: automationPages.map((item) => ({
      title: item.title,
      text: item.description,
      href: `/automation/${item.slug}`,
    })),
  },
  {
    id: "industry-services",
    number: "03",
    icon: Factory,
    eyebrow: "Industry solutions",
    title: "Software shaped around the real workflow.",
    text: "Focused solutions for sectors where roles, processes, data and operational constraints matter as much as the interface.",
    items: industryPages.map((item) => ({
      title: item.title,
      text: item.description,
      href: `/industries/${item.slug}`,
    })),
  },
];

export default function ServicesPage() {
  return (
    <main className="service-page-shell">
      <Header />
      <header className="service-hub-hero">
        <div>
          <p className="eyebrow">
            <i /> Complete software capability
          </p>
          <h1>
            One place for every
            <br />
            <em>digital business need.</em>
          </h1>
          <p>
            From a fast business website to a custom ERP, AI assistant, mobile
            product or industry platform—I design connected software around the
            outcome your team needs.
          </p>
          <div>
            <Link className="button lime" href="/#contact">
              Book a free consultation <ArrowUpRight />
            </Link>
            <Link className="under-link" href="/#work">
              Explore case studies <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="service-hub-orbit">
          <Bot />
          <span>Build</span>
          <span>Connect</span>
          <span>Automate</span>
        </div>
      </header>
      <nav className="service-jump" aria-label="Service categories">
        {groups.map((group) => (
          <a href={`#${group.id}`} key={group.id}>
            <span>{group.number}</span>
            {group.eyebrow}
          </a>
        ))}
      </nav>
      {groups.map((group) => (
        <section className="service-hub-group" id={group.id} key={group.id}>
          <div className="service-hub-intro">
            <span>
              <group.icon />
            </span>
            <p className="section-label">
              {group.number} / {group.eyebrow}
            </p>
            <h2>{group.title}</h2>
            <p>{group.text}</p>
          </div>
          <div className="service-hub-cards">
            {group.items.map((item, index) => (
              <Link href={item.href} key={item.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <b>
                  Explore <ArrowUpRight />
                </b>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <section className="service-hub-guide">
        <div>
          <p className="section-label">Not sure what to choose?</p>
          <h2>Start with the business problem, not a technology name.</h2>
        </div>
        <p>
          Share the current workflow, the people involved and what should
          improve. I&apos;ll help map the requirement to the right combination
          of product development, automation, integration or industry-specific
          software.
        </p>
        <Link href="/#contact">
          Discuss your requirement <ArrowUpRight />
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
