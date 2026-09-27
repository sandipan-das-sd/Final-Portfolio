import Link from "next/link";
import { ArrowUpRight, Boxes, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import type { SolutionPage } from "@/lib/solutions";

export function SolutionIndex({ type, items }: { type:"automation"|"industries"; items:SolutionPage[] }) {
  const automation=type==="automation";
  return <main className="solution-shell"><Header/><header className="solution-index-hero"><span>{automation?<Workflow/>:<Boxes/>}</span><p className="eyebrow"><i/> {automation?"Connected business systems":"Industry-specific software"}</p><h1>{automation?<>Less manual work.<br/><em>Better operations.</em></>:<>Smart technology.<br/><em>Built for your industry.</em></>}</h1><p>{automation?"Automation, ERP, AI and integrations designed around the way your business actually works.":"Practical software that starts with your users, operating constraints and measurable outcomes."}</p></header><section className="solution-index-cards">{items.map((item,index)=><Link href={`/${type}/${item.slug}`} key={item.slug}><span>{String(index+1).padStart(2,"0")}</span><h2>{item.title}</h2><p>{item.description}</p><b>Explore solution <ArrowUpRight/></b></Link>)}</section><section className="solution-cta"><p>Not sure where to begin?</p><h2>Start with the problem.<br/>We&apos;ll map the solution.</h2><Link href="/#contact">Book a free consultation <ArrowUpRight/></Link></section></main>;
}
