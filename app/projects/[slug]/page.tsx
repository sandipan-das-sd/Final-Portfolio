import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Github, Scale, Target, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { defaultProjects, listProjects } from "@/lib/portfolio";
import { getProjectInsight, projectSlug } from "@/lib/projectCaseStudies";

type PageProps = { params: Promise<{ slug: string }> };

const findProject = async (slug: string) => (await listProjects()).find(project => projectSlug(project.title) === slug);

export function generateStaticParams() {
  return defaultProjects.filter(project => project.title !== "AI Text Classifier").map(project => ({ slug: projectSlug(project.title) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await findProject(slug);
  if (!project) return { title: "Project not found" };
  const title = `${project.title} - ${project.type} Case Study`;
  const description = `${project.text} Explore the problem, solution, features, business value, benefits, trade-offs and technology behind this project by Sandipan Das.`;
  return {
    title,
    description,
    keywords: [project.title, `${project.title} case study`, project.type, ...project.tech, "Sandipan Das portfolio", "full stack development project"],
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: `${project.title} by Sandipan Das`, description, url: `/projects/${slug}`, type: "article", images: [{ url: project.image, alt: `${project.title} project preview` }] },
    twitter: { card: "summary_large_image", title, description, images: [project.image] },
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = await findProject(slug);
  if (!project) notFound();
  const insight = getProjectInsight(project);
  const isGithub = project.href.includes("github.com");
  const schema = {
    "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, headline: `${project.title} ${project.type} case study`,
    description: project.text, image: `https://www.sandipandas.website${project.image}`, url: `https://www.sandipandas.website/projects/${slug}`,
    keywords: project.tech.join(", "), creator: { "@type": "Person", "@id": "https://www.sandipandas.website/#person", name: "Sandipan Das" },
  };

  return <main className="project-case-page">
    <Header />
    <header className="project-case-hero">
      <Link href="/#work"><ArrowLeft /> Back to selected work</Link>
      <div className="project-case-hero-grid"><div><p className="eyebrow"><i /> {project.type}</p><h1>{project.title}<br /><em>case study.</em></h1><p>{project.text}</p><div className="project-case-actions"><a className="button lime" href="#story">Explore the project <ArrowUpRight /></a>{project.href&&<a href={project.href} target="_blank" rel="noreferrer">{isGithub?<Github />:<ExternalLink />}{isGithub?"View source":"Visit project"}<ArrowUpRight /></a>}</div></div><div className="project-case-image"><Image src={project.image} alt={`${project.title} interface and project preview`} fill priority sizes="(max-width: 900px) 90vw, 46vw" unoptimized={project.image.startsWith("http")} /></div></div>
      <div className="project-case-facts"><span><b>{project.tech.length}</b>Core technologies</span><span><b>Full</b>Case study</span><span><b>UX</b>User focused</span><span><b>Web</b>Responsive</span></div>
    </header>

    <section className="project-case-story" id="story"><p className="section-label">01 / Project story</p><div><h2>Why {project.title} needed to exist.</h2><p>{insight.challenge}</p><p>{insight.solution}</p></div></section>

    <section className="project-case-context"><article><Users /><span>Who it serves</span><h3>{insight.audience}</h3></article><article><Target /><span>Business value</span><h3>{insight.businessValue}</h3></article></section>

    <section className="project-case-features"><div><p className="section-label">02 / Product capabilities</p><h2>Designed around the essential workflow.</h2></div><div>{insight.features.map((feature,index)=><article key={feature}><span>{String(index+1).padStart(2,"0")}</span><h3>{feature}</h3><p>Designed as part of a cohesive {project.type.toLowerCase()} experience, with clarity, reliability and practical use in mind.</p></article>)}</div></section>

    <section className="project-case-value"><div><p className="section-label">03 / Benefits</p><h2>Value for users and the business.</h2><div>{insight.benefits.map(item=><p key={item}><Check />{item}</p>)}</div></div><div><p className="section-label">04 / Trade-offs</p><h2>Built with constraints in view.</h2><div>{insight.tradeoffs.map(item=><p key={item}><Scale />{item}</p>)}</div></div></section>

    <section className="project-case-stack"><p className="section-label">05 / Technology stack</p><div>{project.tech.map(item=><span key={item}>{item}</span>)}</div></section>

    <section className="project-case-process"><p className="section-label">06 / Delivery approach</p><div>{[["Discover","Understand the users, business objective and constraints."],["Design","Map the core journey and reduce unnecessary interaction."],["Build","Implement maintainable interfaces, services and data flows."],["Validate","Test behavior, responsiveness and failure paths before release."]].map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="project-case-cta"><p>Project by Sandipan Das</p><h2>Have a similar<br />problem to solve?</h2><div><a href="mailto:dsandipan3002@gmail.com">Start a conversation <ArrowUpRight /></a>{project.href&&<a href={project.href} target="_blank" rel="noreferrer">{isGithub?"Open GitHub":"View live project"}<ArrowUpRight /></a>}</div></section>
    <footer><Link className="brand" href="/"><span>SD</span> Sandipan Das</Link><p>{project.type} · Case study</p><div><Link href="/#work">All projects</Link><a href="mailto:dsandipan3002@gmail.com">Contact</a></div><small>© 2026 Sandipan Das</small></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
