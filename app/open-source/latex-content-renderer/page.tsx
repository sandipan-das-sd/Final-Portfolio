import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Github, Package } from "lucide-react";
import { Header } from "@/components/Header";

const npmUrl = "https://www.npmjs.com/package/latex-content-renderer";
const githubUrl = "https://github.com/sandipan-das-sd/latex-content-renderer";

export const metadata: Metadata = {
  title: "LaTeX Content Renderer — Open-Source npm Package",
  description: "A universal TypeScript package by Sandipan Das for rendering LaTeX math, chemistry, SMILES molecules and AI-streamed scientific content in React, React Native, Flutter and WebViews.",
  alternates: { canonical: "/open-source/latex-content-renderer" },
  openGraph: { title: "LaTeX Content Renderer by Sandipan Das", description: "One rendering toolkit for math, chemistry and scientific content across web, mobile and AI applications.", url: "/open-source/latex-content-renderer", type: "website" },
};

const features = [
  ["Mathematics", "Inline and display equations rendered through MathJax 3."],
  ["Chemistry", "mhchem reactions plus 2D molecular structures from eight SMILES input formats."],
  ["Cross-platform", "React, React Native, Expo, Flutter, Android, iOS, WebViews and plain HTML."],
  ["AI streaming", "Buffers incomplete LaTeX chunks so live LLM responses do not flash broken equations."],
  ["Accessibility", "ARIA descriptions for equations, tables, images and chemistry structures."],
  ["Export", "Convert equations to SVG strings or data URLs for documents and presentations."],
];

export default function LatexContentRendererPage() {
  const schema = { "@context": "https://schema.org", "@type": "SoftwareSourceCode", name: "latex-content-renderer", codeRepository: githubUrl, downloadUrl: npmUrl, programmingLanguage: "TypeScript", license: "https://opensource.org/license/mit", version: "1.1.3", author: { "@type": "Person", "@id": "https://www.sandipandas.website/#person", name: "Sandipan Das" }, description: "Universal LaTeX, math and chemistry renderer for web and mobile applications." };
  return <main className="package-page">
    <Header />
    <header className="package-hero"><Link href="/#open-source"><ArrowLeft /> Back to portfolio</Link><p className="eyebrow"><i /> Published npm package · Open source</p><div className="package-mark"><Package /></div><h1>Scientific content,<br /><em>one renderer.</em></h1><p>LaTeX Content Renderer brings math, chemistry, molecular structures and rich scientific notation into React, mobile WebViews and AI products without rebuilding the rendering pipeline for every platform.</p><div className="package-actions"><a href={npmUrl} target="_blank" rel="noreferrer" className="button lime">📦 View on npm <ArrowUpRight /></a><a href={githubUrl} target="_blank" rel="noreferrer"><Github /> View source <ArrowUpRight /></a></div><div className="package-facts"><span><b>v1.1.3</b>Current release</span><span><b>MIT</b>Open-source license</span><span><b>0</b>Runtime dependencies</span><span><b>27KB</b>Gzipped CDN build</span></div></header>
    <section className="package-problem"><p className="section-label">01 / Why it exists</p><div><h2>Scientific rendering was fragmented.</h2><p>Math tools do not automatically solve chemistry, molecule drawing, mobile WebViews or partial equations arriving from an AI stream. This package unifies those concerns behind a small set of components and functions.</p></div></section>
    <section className="package-demo"><div className="package-code"><div><span><i/><i/><i/></span><b>App.tsx</b><small>React</small></div><pre><code><em>npm install latex-content-renderer</em>{"\n\n"}<strong>import</strong> &#123; SciContent &#125; <strong>from</strong>{"\n"}  <mark>&apos;latex-content-renderer&apos;</mark>;{"\n\n"}&lt;SciContent content=&#123;&#96;{"\n"}  Solve: $x = \\frac&#123;-b \\pm \\sqrt&#123;b^2-4ac&#125;&#125;&#123;2a&#125;{"\n"}  Water: $\\ce&#123;H2O&#125;${"\n"}  Ethanol: \\smiles&#123;CCO&#125;{"\n"}&#96;&#125; /&gt;</code></pre></div><div className="package-render"><span>Live output concept</span><p>Solve the quadratic equation</p><b>x = <i>−b ± √(b² − 4ac)</i> / 2a</b><div><strong>H<sub>2</sub>O</strong><svg viewBox="0 0 180 80" aria-label="Ethanol molecular structure"><path d="M18 42h40l28-27 30 27 30-27 25 27"/><circle cx="18" cy="42" r="6"/><circle cx="171" cy="42" r="6"/></svg></div></div></section>
    <section className="package-features"><div><p className="section-label">02 / Capabilities</p><h2>Built for actual science products.</h2></div><div>{features.map(([title, text]) => <article key={title}><Check /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="package-platforms"><p className="section-label">03 / Run it anywhere</p><div>{["React", "Next.js", "React Native", "Expo", "Flutter", "Android", "iOS", "Vue", "Angular", "Svelte", "Node.js", "Plain HTML"].map(item => <span key={item}>{item}</span>)}</div></section>
    <section className="package-cta"><span>npm install latex-content-renderer</span><h2>Render the content.<br />Keep building the product.</h2><div><a href={npmUrl} target="_blank" rel="noreferrer">Open npm <ArrowUpRight /></a><a href={githubUrl} target="_blank" rel="noreferrer"><Github /> Star on GitHub <ArrowUpRight /></a></div></section>
    <footer><Link className="brand" href="/"><span>SD</span> Sandipan Das</Link><p>Open-source software · Kolkata, India</p><div><a href={npmUrl}>npm</a><a href={githubUrl}>GitHub</a></div><small>© 2026 Sandipan Das</small></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
