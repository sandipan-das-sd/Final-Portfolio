import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, MoveRight, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import type { SolutionPage } from "@/lib/solutions";

export function SolutionDetail({ item, section, related }: { item: SolutionPage; section: "automation" | "industries"; related: SolutionPage[] }) {
  const sectionName = section === "automation" ? "Automation" : "Industries";
  return <main className="solution-shell"><Header /><article>
    <header className="solution-hero"><div className="solution-orbit" aria-hidden="true"><i /><i /><i /><Sparkles /></div><Link href={`/${section}`}><ArrowLeft /> All {sectionName.toLowerCase()}</Link><p className="eyebrow"><i /> {item.eyebrow}</p><h1>{item.title}</h1><p>{item.intro}</p><div><Link className="button lime" href="/#contact">Book a free consultation <ArrowUpRight /></Link><a className="under-link" href="mailto:dsandipan3002@gmail.com">Email directly <ArrowUpRight /></a></div></header>
    <section className="solution-outcomes"><p className="section-label">Designed for results</p><div>{item.outcomes.map((outcome,index)=><article key={outcome}><span>0{index+1}</span><Check/><b>{outcome}</b></article>)}</div></section>
    <section className="solution-capabilities"><div><p className="section-label">What we can build</p><h2>Technology shaped around the workflow.</h2><p>{item.description}</p></div><div className="capability-cards">{item.capabilities.map((capability,index)=><article key={capability}><span>{String(index+1).padStart(2,"0")}</span><h3>{capability}</h3><MoveRight/></article>)}</div></section>
    <section className="solution-process"><div><p className="section-label">A clear delivery path</p><h2>From discovery to a working system.</h2></div><ol>{item.process.map((step,index)=><li key={step}><span>{String(index+1).padStart(2,"0")}</span><b>{step}</b></li>)}</ol></section>
    <section className="solution-tools"><p className="section-label">Relevant toolkit</p><div>{item.technologies.map(tool=><span key={tool}>{tool}</span>)}</div></section>
    <section className="solution-faq"><div><p className="section-label">Questions, answered</p><h2>Good to know.</h2></div><div>{item.faqs.map(faq=><details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></section>
    <section className="related-solutions"><div><p className="section-label">Explore next</p><h2>Related solutions.</h2></div><div>{related.map(next=><Link href={`/${section}/${next.slug}`} key={next.slug}><span>{next.eyebrow}</span><h3>{next.title}</h3><ArrowUpRight/></Link>)}</div></section>
    <section className="solution-cta"><p>Have a workflow that needs attention?</p><h2>Let&apos;s make it simpler,<br/>faster and connected.</h2><Link href="/#contact">Start a conversation <ArrowUpRight/></Link></section>
  </article></main>;
}
