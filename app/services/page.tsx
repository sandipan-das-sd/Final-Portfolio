import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { servicePages } from "@/lib/services";

export const metadata: Metadata = {
  title: "Development Services in Kolkata",
  description: "Website, mobile app, full-stack, SAP ABAP, SAP MII and AI application development services from Sandipan Das in Kolkata.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <main className="service-page-shell">
    <Header />
    <section className="service-index-hero">
      <p className="eyebrow"><i /> Development services · Kolkata</p>
      <h1>Technical services,<br /><em>built around outcomes.</em></h1>
      <p>Focused web, mobile, SAP and AI engineering for businesses, product teams and clearly defined technical requirements.</p>
    </section>
    <section className="service-index-grid" aria-label="Development services">
      {servicePages.map((service, index) => <Link href={`/services/${service.slug}`} key={service.slug}>
        <span>{String(index + 1).padStart(2, "0")}</span><h2>{service.shortTitle}</h2><p>{service.description}</p><b>Explore service <ArrowUpRight /></b>
      </Link>)}
    </section>
    <section className="service-cta"><p>Have a defined requirement or an early idea?</p><h2>Let&apos;s turn it into a clear build plan.</h2><a href="mailto:dsandipan3002@gmail.com?subject=Project%20enquiry">Discuss your project <ArrowUpRight /></a></section>
    <footer><Link className="brand" href="/"><span>SD</span> Sandipan Das</Link><p>Full Stack Developer · Kolkata, West Bengal</p><div><Link href="/">Portfolio</Link><a href="mailto:dsandipan3002@gmail.com">Email</a></div><small>© 2026 Sandipan Das</small></footer>
  </main>;
}
