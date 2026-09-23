import Image from "next/image";
import { Header } from "@/components/Header";
import { ProjectSlider } from "@/components/ProjectSlider";
import { ContactForm } from "@/components/ContactForm";
import { MotionLayer } from "@/components/MotionLayer";
import { getResumeUrl, listProjects } from "@/lib/portfolio";
import {
  ArrowDown, ArrowUpRight, Award, Bot, Braces, BrainCircuit, BriefcaseBusiness, Check, Database, MessageSquare, Search, Sparkles,
  CloudCog, Code2, Download, Github, GraduationCap, Layers3, Linkedin, Mail, Package,
  ServerCog, Smartphone, Workflow,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Full-stack products", text: "Responsive React experiences backed by secure Node.js or Spring Boot APIs.", href: "/services/full-stack-development" },
  { icon: ServerCog, title: "Business websites", text: "Fast, responsive websites with clear conversion paths and technical SEO foundations.", href: "/services/website-development-kolkata" },
  { icon: Smartphone, title: "Mobile applications", text: "Cross-platform React Native products with notifications, payments and cloud services.", href: "/services/mobile-app-development" },
  { icon: BrainCircuit, title: "AI applications", text: "RAG, LangGraph agents, vector search and useful LLM-powered product workflows.", href: "/services/ai-ml-development" },
  { icon: Workflow, title: "SAP ABAP", text: "Open SQL, Data Dictionary objects, reports, modularization, CRUD and debugging.", href: "/services/sap-abap-development" },
  { icon: Layers3, title: "SAP integrations", text: "Technical MII, FICO and MM support for defined enterprise requirements.", href: "/services/sap-mii-integration" },
];

const stack = [
  ["Languages", "Java, JavaScript, HTML, CSS, SQL"],
  ["Front end", "React, React Native, Redux"],
  ["Back end", "Node.js, Express, Spring Boot, REST APIs"],
  ["Data", "MongoDB, PostgreSQL, MySQL"],
  ["Cloud & tools", "AWS, Docker, Git, PM2, Nginx"],
  ["Enterprise", "SAP ABAP, Open SQL, Data Dictionary"],
];

const sapProjects = [
  ["Student Management", "CRUD operations, internal tables, Open SQL and filtered reports."],
  ["Employee Records", "Dictionary tables, domains, data elements and record management."],
  ["Sales Report Generator", "Classical reports, modularization, debugging and testing in ADT."],
];

const mobileApps = [
  {
    name: "PulpitFill",
    type: "Faith-tech marketplace · iOS",
    description: "A role-based mobile marketplace helping churches find trusted preachers, manage requests, coordinate availability and communicate in one product.",
    platforms: ["iPhone", "iPad", "Role-based accounts", "Messaging"],
    images: ["/work/pulpitfill-ios-dashboard.webp", "/work/pulpitfill-ios-messages.webp"],
    storeLabel: "View on the App Store",
    storeUrl: "https://apps.apple.com/us/app/pulpitfill/id6799709331",
    websiteUrl: "https://pulpitfill.com",
  },
  {
    name: "Gyanoda",
    type: "EdTech learning app · Android",
    description: "A mobile learning experience for WBJEE preparation with previous-year questions, step-by-step video solutions, course discovery and doubt support.",
    platforms: ["Android", "Video learning", "Mock tests", "Secure accounts"],
    images: ["/work/gyanoda-android-home.webp", "/work/gyanoda-android-learning.webp"],
    storeLabel: "Get it on Google Play",
    storeUrl: "https://play.google.com/store/apps/details?id=com.gyanodapyq.studybloom24",
    websiteUrl: "https://www.gyanoda.com",
  },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const [projects, resumeUrl] = await Promise.all([listProjects(), getResumeUrl()]);
  return (
    <main>
      <MotionLayer />
      <Header />

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="orbit"><span /><span /><span /><div><Braces /></div></div>
        <div className="hero-copy">
          <p className="eyebrow"><i /> Full Stack Developer · Kolkata</p>
          <h1>I build digital<br /><em>systems that work.</em></h1>
          <p className="hero-note">From responsive interfaces to scalable APIs, real-time products and SAP applications—I turn complex requirements into useful software.</p>
          <div className="hero-actions">
            <a className="button lime" href="#work">Explore my work <ArrowDown size={17} /></a>
            <a className="under-link" href="mailto:dsandipan3002@gmail.com">dsandipan3002@gmail.com <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-stats">
          <span><b>6+</b>Production projects</span><span><b>3</b>SAP ABAP builds</span><span><b>1st</b>Hackathon prize</span><span><b>2026</b>B.Tech graduate</span>
        </div>
      </section>

      <section className="intro section" id="about">
        <p className="section-label">01 / Profile</p>
        <div>
          <h2>Product-minded.<br />Backend-strong.</h2>
          <p>I&apos;m a computer science graduate focused on full-stack engineering, scalable backend systems and SAP ABAP. I enjoy owning a product from its data model and API to the final interface people use.</p>
          <div className="socials">
            <a href="https://github.com/sandipan-das-sd" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={14} /></a>
            <a href="https://linkedin.com/in/sandipan-das-13968b1b0" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} /></a>
            <a href="https://leetcode.com/u/sandipanbabu/" target="_blank" rel="noreferrer"><Code2 size={18} /> LeetCode <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <figure className="profile-portrait">
          <div className="portrait-ring" aria-hidden="true"><span>React</span><span>Node</span><span>ABAP</span></div>
          <div className="portrait-frame"><Image src="/generated/sandipan-professional-portrait-v2.png" alt="Sandipan Das, Full Stack and SAP ABAP Developer" fill priority sizes="(max-width: 850px) 72vw, 26vw" /></div>
          <figcaption><i /><span><b>Open to opportunities</b><small>Full Stack · SAP ABAP</small></span></figcaption>
        </figure>
      </section>

      <section className="services section" id="services">
        <div className="section-head"><div><p className="section-label">02 / What I do</p><h2>Ideas, engineered<br />end to end.</h2></div><p>I combine product thinking with hands-on development to take useful software from concept to deployment.</p></div>
        <div className="service-grid">{services.map((service, index) => <a href={service.href} key={service.title}><span>0{index + 1}</span><service.icon /><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight /></a>)}</div>
      </section>

      <section className="work section" id="work">
        <div className="section-head"><div><p className="section-label">03 / Selected work</p><h2>Built to solve<br />real problems.</h2></div><p>Products I&apos;ve helped build across healthcare, community, fintech, enterprise, communication and travel.</p></div>
        <ProjectSlider projects={projects} />
      </section>

      <section className="mobile-work section" id="mobile-work">
        <div className="section-head"><div><p className="section-label">04 / Mobile products</p><h2>Apps built for<br />the small screen.</h2></div><p>Production mobile experiences spanning community marketplaces and exam preparation, available through verified public store listings.</p></div>
        <div className="mobile-app-grid">{mobileApps.map((app) => <article className="mobile-app-card" key={app.name}>
          <div className="mobile-app-visual">
            <div className="phone-shot phone-shot-primary"><Image src={app.images[0]} alt={`${app.name} mobile application screen`} fill sizes="(max-width: 700px) 58vw, 24vw" /></div>
            <div className="phone-shot phone-shot-secondary"><Image src={app.images[1]} alt={`${app.name} secondary mobile application screen`} fill sizes="(max-width: 700px) 42vw, 18vw" /></div>
            <span className="mobile-platform-orbit">{app.name === "PulpitFill" ? "iOS" : "Android"}</span>
          </div>
          <div className="mobile-app-copy"><p>{app.type}</p><h3>{app.name}</h3><div className="mobile-tags">{app.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div><p>{app.description}</p><div className="mobile-app-links"><a href={app.storeUrl} target="_blank" rel="noreferrer">{app.storeLabel} <ArrowUpRight /></a><a href={app.websiteUrl} target="_blank" rel="noreferrer">Visit website <ArrowUpRight /></a></div></div>
        </article>)}</div>
      </section>

      <section className="oss-feature section" id="open-source">
        <div className="oss-copy"><p className="eyebrow"><i /> Featured open source</p><div className="oss-title"><span><Package /></span><h2>LaTeX Content<br />Renderer.</h2></div><p>A universal npm package I built to render mathematics, chemistry, molecular structures and scientific content across web and mobile applications—with safe output for streamed AI responses.</p><div className="oss-pills"><span>TypeScript</span><span>MathJax 3</span><span>SMILES</span><span>React Native</span><span>MIT</span></div><div className="oss-links"><a className="button lime" href="/open-source/latex-content-renderer">Explore the package <ArrowUpRight /></a><a href="https://www.npmjs.com/package/latex-content-renderer" target="_blank" rel="noreferrer">npm <ArrowUpRight /></a><a href="https://github.com/sandipan-das-sd/latex-content-renderer" target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a></div></div>
        <div className="oss-terminal" aria-label="latex-content-renderer installation and React example"><div className="oss-terminal-bar"><span><i/><i/><i/></span><b>quick-start.tsx</b><small>v1.1.3</small></div><pre><code><em>$</em> npm install latex-content-renderer{"\n\n"}<strong>import</strong> &#123; SciContent &#125; <strong>from</strong>{"\n"}  <mark>&apos;latex-content-renderer&apos;</mark>;{"\n\n"}<strong>export default function</strong> Science() &#123;{"\n"}  <strong>return</strong> &lt;SciContent{"\n"}    content=&#123;<mark>&quot;E = mc² · H₂O · CCO&quot;</mark>&#125;{"\n"}  /&gt;;{"\n"}&#125;</code></pre><div className="oss-output"><span>Rendered output</span><b>E = mc<sup>2</sup></b><i>H<sub>2</sub>O</i><svg viewBox="0 0 120 50" aria-label="Simple molecular structure illustration"><path d="M10 25h25l15-18 20 18 20-18 20 18"/><circle cx="10" cy="25" r="4"/><circle cx="110" cy="25" r="4"/></svg></div></div>
      </section>

      <section className="skills section" id="skills">
        <div className="skills-copy"><p className="section-label">05 / Toolkit</p><h2>One developer,<br />across the stack.</h2><p>Comfortable moving between interface details, server architecture, data and deployment.</p></div>
        <div className="stack-list">{stack.map(([name, list], index) => <div key={name}><span>0{index + 1}</span><b>{name}</b><p>{list}</p><ArrowUpRight size={18} /></div>)}</div>
        <div className="tech-marquee"><div>{[...stack.flatMap(item => item[1].split(", ")), ...stack.flatMap(item => item[1].split(", "))].map((tech, i) => <span key={`${tech}-${i}`}>{tech} <i>✦</i></span>)}</div></div>
      </section>

      <section className="ai-practice section">
        <div className="ai-copy"><p className="eyebrow"><i /> AI engineering</p><h2>Intelligence,<br />grounded in data.</h2><p>I build practical LLM workflows that connect models with trusted knowledge, tools and production applications.</p><div className="ai-tags">{["LangChain","LangGraph","RAG","Vector databases","LLM APIs","Embeddings","AI agents","Prompt engineering"].map(item=><span key={item}>{item}</span>)}</div></div>
        <div className="ai-flow" aria-label="Animated retrieval augmented generation workflow">
          <div className="flow-top"><span><i/><i/><i/></span><b>rag_pipeline.graph</b><small>Live workflow</small></div>
          <div className="flow-canvas">
            <svg viewBox="0 0 660 430" preserveAspectRatio="none" aria-hidden="true">
              <path className="flow-line" d="M118 98 C185 98 180 195 255 195"/>
              <path className="flow-line" d="M355 195 C420 195 405 92 480 92"/>
              <path className="flow-line" d="M355 210 C430 210 415 220 480 220"/>
              <path className="flow-line" d="M535 136 L535 176"/>
              <path className="flow-line" d="M535 264 C535 325 430 330 355 330"/>
              <path className="flow-line" d="M255 330 C190 330 190 350 118 350"/>
              <circle className="flow-particle p1" r="5"><animateMotion dur="2.8s" repeatCount="indefinite" path="M118 98 C185 98 180 195 255 195"/></circle>
              <circle className="flow-particle p2" r="5"><animateMotion dur="3.2s" repeatCount="indefinite" path="M355 195 C420 195 405 92 480 92"/></circle>
              <circle className="flow-particle p3" r="5"><animateMotion dur="3s" repeatCount="indefinite" path="M535 264 C535 325 430 330 355 330"/></circle>
              <circle className="flow-particle p4" r="5"><animateMotion dur="2.5s" repeatCount="indefinite" path="M255 330 C190 330 190 350 118 350"/></circle>
            </svg>
            <div className="flow-node query-node"><Search/><span><small>Input</small><b>User query</b></span></div>
            <div className="flow-node agent-node"><Workflow/><span><small>Orchestrate</small><b>LangGraph agent</b></span></div>
            <div className="flow-node vector-node"><Database/><span><small>Retrieve</small><b>Vector database</b></span></div>
            <div className="flow-node context-node"><Sparkles/><span><small>Ground</small><b>RAG context</b></span></div>
            <div className="flow-node llm-node"><BrainCircuit/><span><small>Reason</small><b>LLM response</b></span></div>
            <div className="flow-node answer-node"><MessageSquare/><span><small>Output</small><b>Grounded answer</b></span></div>
          </div>
          <div className="flow-status"><span><i/> Pipeline active</span><b>6 connected steps</b></div>
        </div>
      </section>

      <section className="sap section">
        <div className="sap-visual">
          <Image src="/generated/sap-enterprise-systems.png" alt="Three connected SAP enterprise applications for education, employee records and sales analytics" fill sizes="(max-width: 850px) 100vw, 50vw" />
          <div className="code-window" aria-label="Animated SAP ABAP code example">
            <div className="code-bar"><span><i /><i /><i /></span><b>z_student_manager.abap</b><small>ABAP</small></div>
            <div className="code-body">
              <div className="code-line line-one"><em>01</em><code><strong>REPORT</strong> z_student_manager.</code></div>
              <div className="code-line line-two"><em>02</em><code>&nbsp;</code></div>
              <div className="code-line line-three"><em>03</em><code><strong>SELECT</strong> * <strong>FROM</strong> zstudents</code></div>
              <div className="code-line line-four"><em>04</em><code>&nbsp;&nbsp;<strong>INTO TABLE</strong> lt_students.</code></div>
              <div className="code-line line-five"><em>05</em><code><strong>IF</strong> sy-subrc = 0.</code></div>
              <div className="code-line line-six"><em>06</em><code>&nbsp;&nbsp;<mark>WRITE</mark>: / &apos;Records loaded&apos;.</code></div>
              <div className="code-line line-seven"><em>07</em><code><strong>ENDIF</strong>.<i className="caret" /></code></div>
            </div>
            <div className="code-status"><span>✓</span> Build successful <b>3 enterprise systems</b></div>
          </div>
        </div>
        <div className="sap-copy"><p className="eyebrow"><i /> SAP ABAP practice</p><h2>Enterprise logic,<br />built with precision.</h2><p>Hands-on mini projects in Eclipse ADT covering core ABAP development, data modeling, reporting and debugging.</p><div className="sap-projects">{sapProjects.map(([title, text]) => <div key={title}><Check size={16} /><span><b>{title}</b><small>{text}</small></span></div>)}</div></div>
      </section>

      <section className="journey section" id="education">
        <p className="section-label">06 / Education</p>
        <div className="timeline">
          <article><span>2022 — 2026</span><GraduationCap /><div><h3>B.Tech in Computer Science</h3><p>Future Institute of Engineering and Management · MAKAUT</p><b>CGPA 7.39 / 10</b></div></article>
          <article><span>2020 — 2022</span><GraduationCap /><div><h3>Higher Secondary · Science</h3><p>Naihati Narendra Vidyaniketan · West Bengal</p><b>83.6%</b></div></article>
          <article><span>2015 — 2020</span><GraduationCap /><div><h3>Secondary Education</h3><p>Shyamnagar Kanti Chandra High School · WBBSE</p><b>89.5%</b></div></article>
          <article><span>2025 — 2026</span><Award /><div><h3>Specialised learning</h3><p>Cloud Computing with AWS · MERN Full Stack Development · SAP ABAP</p><div className="certs"><a href="https://certificate.ardentsoftware.co.in/generate/136286" target="_blank" rel="noreferrer">AWS ↗</a><a href="https://certificate.ardentsoftware.co.in/generate/100044" target="_blank" rel="noreferrer">MERN ↗</a><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-ab34d519-8174-40d2-b57b-5a78d8b9217f.jpg" target="_blank" rel="noreferrer">ABAP ↗</a></div></div></article>
          <article><span>Achievement</span><BriefcaseBusiness /><div><h3>1st Prize · Directrix Hackathon</h3><p>Built a C-based college library system with inventory, issue/return tracking and fine calculation.</p><b>Also participated in Smart India Hackathon</b></div></article>
        </div>
      </section>

      <section className="resume section" id="resume">
        <div className="resume-head"><div><p className="eyebrow"><i /> My résumé</p><h2>See the complete<br />résumé right here.</h2><p>Review my education, technical skills, SAP practice, certifications, achievements and complete project experience below.</p></div><div className="resume-actions"><a href={resumeUrl} target="_blank" rel="noreferrer">Open full résumé <ArrowUpRight /></a><a className="resume-download-button" href={resumeUrl} download><Download /> Download PDF</a></div></div>
        <div className="resume-viewer"><iframe src={`${resumeUrl}#view=FitH&toolbar=1`} title="Sandipan Das résumé PDF" /><div className="resume-mobile-fallback"><span>Sandipan Das</span><b>Full Stack Developer</b><p>The résumé preview opens best in your browser&apos;s PDF viewer.</p><a href={resumeUrl} target="_blank" rel="noreferrer">View résumé <ArrowUpRight /></a></div></div>
      </section>

      <section className="contact section" id="contact">
        <div><p className="eyebrow"><i /> Available for opportunities</p><h2>Have a problem<br />worth building?</h2><p className="contact-note">Tell me what you&apos;re working on. Your message is saved securely and delivered to my inbox when email delivery is connected.</p></div>
        <ContactForm />
      </section>

      <footer><a className="brand" href="#top"><span>SD</span> Sandipan Das</a><p>Full Stack Developer · Kolkata, West Bengal</p><div><a href="tel:+918335019404">+91 83350 19404</a><a href="mailto:dsandipan3002@gmail.com">Email</a><a href="https://github.com/sandipan-das-sd">GitHub</a></div><small>© 2026 Sandipan Das</small></footer>
    </main>
  );
}
