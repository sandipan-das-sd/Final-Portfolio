import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bot, Braces, Check, Database, Github, Server, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";

const liveUrl = "https://ai-assisted-text-classification-api.vercel.app/";
const apiUrl = "https://ai-assisted-text-classification-api-delta.vercel.app/api/classify";
const githubUrl = "https://github.com/sandipan-das-sd/AI-Assisted-Text-Classification-API";

export const metadata: Metadata = {
  title: "AI Text Classification API - MERN and Ollama Project",
  description: "Case study of an AI-assisted MERN text classification API by Sandipan Das using React, Express, MongoDB and Ollama to classify complaints, queries and feedback.",
  keywords: ["AI text classification API", "MERN AI project", "Ollama API", "Express text classifier", "Sandipan Das projects", "MongoDB AI application"],
  alternates: { canonical: "/projects/ai-text-classifier" },
  openGraph: {
    title: "AI Text Classification API by Sandipan Das",
    description: "A production REST API that classifies customer messages with Ollama and returns validated confidence scores.",
    url: "/projects/ai-text-classifier",
    type: "article",
    images: [{ url: "/work/ai-text-classifier.png", width: 1600, height: 1000, alt: "AI Text Classifier application interface" }],
  },
  twitter: { card: "summary_large_image", title: "AI Text Classification API", description: "MERN and Ollama text classification project by Sandipan Das.", images: ["/work/ai-text-classifier.png"] },
};

const architecture = [
  { icon: Braces, title: "React client", text: "Captures customer text and displays the category with a visual confidence score." },
  { icon: Server, title: "Express API", text: "Validates requests and exposes a focused POST /api/classify endpoint." },
  { icon: Bot, title: "Ollama model", text: "Uses llama3.2:3b with a deterministic prompt and strict JSON output." },
  { icon: Database, title: "MongoDB", text: "Optionally stores successful classifications through Mongoose." },
];

export default function AiTextClassifierPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: "AI-Assisted Text Classification API",
    applicationCategory: "DeveloperApplication", operatingSystem: "Web", url: liveUrl, codeRepository: githubUrl,
    image: "https://www.sandipandas.website/work/ai-text-classifier.png",
    description: "A MERN and Ollama application that classifies text as Complaint, Query, Feedback or Other with a confidence score.",
    author: { "@type": "Person", "@id": "https://www.sandipandas.website/#person", name: "Sandipan Das" },
  };

  return <main className="classifier-case">
    <Header />
    <header className="classifier-hero">
      <Link href="/#work"><ArrowLeft /> Back to portfolio</Link>
      <div className="classifier-hero-grid">
        <div><p className="eyebrow"><i /> AI engineering case study</p><h1>Every message,<br /><em>understood.</em></h1><p>A full-stack classification service that turns unstructured customer text into a reliable category and confidence score through a clean REST API.</p><div className="classifier-actions"><a className="button lime" href={liveUrl} target="_blank" rel="noreferrer">Open live app <ArrowUpRight /></a><a href={githubUrl} target="_blank" rel="noreferrer"><Github /> View source <ArrowUpRight /></a></div></div>
        <div className="classifier-preview"><Image src="/work/ai-text-classifier.png" alt="AI Text Classifier interface showing the message classification form" fill priority sizes="(max-width: 900px) 90vw, 46vw" /></div>
      </div>
      <div className="classifier-facts"><span><b>4</b>Categories</span><span><b>REST</b>Integration</span><span><b>0-1</b>Confidence</span><span><b>3/3</b>Tests passing</span></div>
    </header>

    <section className="classifier-story"><p className="section-label">01 / The challenge</p><div><h2>Customer messages arrive without structure.</h2><p>Support teams receive complaints, questions, feedback and unrelated messages in the same stream. Manual triage slows response time and creates inconsistent routing. This project provides a small, integration-ready service that applies one shared classification policy to every message.</p></div></section>

    <section className="classifier-architecture"><div><p className="section-label">02 / Architecture</p><h2>A focused path from input to insight.</h2></div><div className="classifier-architecture-grid">{architecture.map(({icon: Icon,title,text},index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="classifier-api"><div className="classifier-code"><div><span><i/><i/><i/></span><b>POST /api/classify</b><small>JSON</small></div><pre><code><em>{`{\n  "text": "My order arrived damaged."\n}`}</em>{`\n\n`}<strong>{`{\n  "category": "Complaint",\n  "confidence": 0.96\n}`}</strong></code></pre></div><div><p className="section-label">03 / API design</p><h2>One endpoint.<br />Predictable output.</h2><p>The API accepts a text string, validates it, invokes the model service and normalizes the response. Consumers always receive an allowed category and a confidence value between zero and one.</p><a href={apiUrl.replace("/classify","/health")} target="_blank" rel="noreferrer">Check API health <ArrowUpRight /></a></div></section>

    <section className="classifier-quality"><div><p className="section-label">04 / Engineering decisions</p><h2>AI output treated as untrusted input.</h2></div><div>{[
      ["Allow-listed categories", "Model output is matched case-insensitively against Complaint, Query, Feedback and Other."],
      ["Bounded confidence", "Numeric confidence is clamped to the valid 0-1 range, with a documented fallback."],
      ["Defensive validation", "Empty text and payloads over 5,000 characters return clear HTTP 400 responses."],
      ["Optional persistence", "The classifier remains available when MongoDB is not configured or connected."],
    ].map(([title,text])=><article key={title}><ShieldCheck /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="classifier-stack"><p className="section-label">05 / Technology</p><div>{["React","Vite","Node.js","Express","MongoDB","Mongoose","Ollama","LangChain","Vercel","Cloudflare Tunnel"].map(item=><span key={item}>{item}</span>)}</div></section>

    <section className="classifier-results"><div><p className="section-label">06 / Delivered</p><h2>Built, tested and documented.</h2></div><div>{["Responsive React testing interface","Layered controller, route and service structure","Automated API and normalization tests","Postman collection and environment examples","Vercel serverless deployment configuration","Detailed local and production setup guide"].map(item=><p key={item}><Check />{item}</p>)}</div></section>

    <section className="classifier-cta"><p>Explore the working product</p><h2>Classify your first<br />message.</h2><div><a href={liveUrl} target="_blank" rel="noreferrer">Launch live demo <ArrowUpRight /></a><a href={githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub repository</a></div></section>
    <footer><Link className="brand" href="/"><span>SD</span> Sandipan Das</Link><p>AI-assisted full-stack engineering</p><div><a href={liveUrl}>Live app</a><a href={githubUrl}>GitHub</a></div><small>© 2026 Sandipan Das</small></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
