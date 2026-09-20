import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { getService, servicePages } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.shortTitle} in Kolkata`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.shortTitle} | Sandipan Das`, description: service.description, url: `/services/${service.slug}`, type: "website" },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const url = `https://www.sandipandas.website/services/${service.slug}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${url}#service`, name: service.shortTitle, description: service.description, url, areaServed: [{ "@type": "City", name: "Kolkata" }, { "@type": "Country", name: "India" }], provider: { "@type": "Person", "@id": "https://www.sandipandas.website/#person", name: "Sandipan Das" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sandipandas.website/" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://www.sandipandas.website/services" }, { "@type": "ListItem", position: 3, name: service.shortTitle, item: url }] },
    { "@type": "FAQPage", mainEntity: service.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ] };
  return <main className="service-page-shell">
    <Header />
    <article>
      <header className="service-detail-hero"><Link href="/services"><ArrowLeft /> All services</Link><p className="eyebrow"><i /> {service.eyebrow}</p><h1>{service.title}</h1><p>{service.intro}</p><div><a className="button lime" href={`mailto:dsandipan3002@gmail.com?subject=${encodeURIComponent(service.shortTitle + " enquiry")}`}>Start a conversation <ArrowUpRight /></a><Link className="under-link" href="/#work">See relevant work <ArrowUpRight /></Link></div></header>
      <section className="service-outcomes"><p className="section-label">01 / What you receive</p><div>{service.outcomes.map((item) => <p key={item}><Check /> {item}</p>)}</div></section>
      <section className="service-two-col"><div><p className="section-label">02 / Capabilities</p><h2>What I can build.</h2></div><ul>{service.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="service-process"><p className="section-label">03 / Delivery</p><h2>A practical path from requirement to release.</h2><div>{service.process.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div></section>
      <section className="service-stack"><p className="section-label">04 / Relevant toolkit</p><div>{service.technologies.map((item) => <span key={item}>{item}</span>)}</div></section>
      <section className="service-faq"><div><p className="section-label">05 / FAQ</p><h2>Useful answers before we begin.</h2></div><div>{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
      <section className="service-cta"><p>Need this capability for your business?</p><h2>Tell me what needs to work.</h2><a href={`mailto:dsandipan3002@gmail.com?subject=${encodeURIComponent(service.shortTitle + " enquiry")}`}>Start a conversation <ArrowUpRight /></a></section>
    </article>
    <footer><Link className="brand" href="/"><span>SD</span> Sandipan Das</Link><p>Full Stack Developer · Kolkata, West Bengal</p><div><Link href="/services">All services</Link><a href="mailto:dsandipan3002@gmail.com">Email</a></div><small>© 2026 Sandipan Das</small></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
