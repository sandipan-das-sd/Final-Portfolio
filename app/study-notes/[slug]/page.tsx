import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, FileText, Instagram } from "lucide-react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { defaultStudyNotes, getStudyNoteBySlug } from "@/lib/portfolio";

type Params = Promise<{ slug: string }>;

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return defaultStudyNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const note = await getStudyNoteBySlug(slug);
  if (!note) return { title: "Study Guide Not Found" };
  const path = `/study-notes/${note.slug}`;
  return {
    title: `${note.title} - Free PDF`,
    description: note.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: note.title,
      description: note.description,
      url: path,
    },
    keywords: [note.category, `${note.category} interview questions`, `${note.category} interview guide`, "free coding PDF", "developer study notes"],
  };
}

export default async function StudyNoteDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const note = await getStudyNoteBySlug(slug);
  if (!note) notFound();
  const pageUrl = `https://www.sandipandas.website/study-notes/${note.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: note.title,
    description: note.description,
    url: pageUrl,
    learningResourceType: "Study guide",
    educationalLevel: note.level,
    about: note.category,
    author: { "@type": "Person", name: "Sandipan Das", url: "https://www.sandipandas.website" },
    isAccessibleForFree: true,
    inLanguage: "en",
  };

  return (
    <main className="note-detail-page">
      <Header />
      <section className="note-detail-hero" style={{ "--note-accent": note.accent } as React.CSSProperties}>
        <Link href="/study-notes"><ArrowLeft size={16} /> All study notes</Link>
        <div className="note-detail-heading">
          <div>
            <p>{note.category} · {note.level}</p>
            <h1>{note.title}</h1>
            <span>{note.description}</span>
          </div>
          <div className="note-detail-facts"><b>{note.pages || "PDF"}</b><small>{note.pages ? "pages" : "guide"}</small></div>
        </div>
        <div className="note-detail-actions">
          <a href={`/study-notes/${note.slug}/pdf`} target="_blank" rel="noreferrer"><Download size={17} /> Download PDF</a>
          {note.instagramUrl && <a href={note.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> Follow @dev.sandipan</a>}
        </div>
      </section>
      <section className="pdf-reader-section">
        <div className="pdf-reader-head"><div><FileText size={18} /><span>Reading {note.title}</span></div><a href={`/study-notes/${note.slug}/pdf`} target="_blank" rel="noreferrer">Open full screen ↗</a></div>
        <iframe title={`${note.title} PDF reader`} src={`/study-notes/${note.slug}/pdf#view=FitH`} />
      </section>
      <section className="note-seo-copy">
        <p>Free {note.category} resource</p>
        <h2>Prepare smarter with a focused interview guide.</h2>
        <div><p>{note.description}</p><p>Use this guide for quick revision before technical interviews, structured practice, and reviewing the concepts that matter most.</p></div>
      </section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
