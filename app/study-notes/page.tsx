import type { Metadata } from "next";
import { BookOpen, Download, Instagram } from "lucide-react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { StudyNotesLibrary } from "@/components/StudyNotesLibrary";
import { listStudyNotes } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Free Coding Study Notes & Interview Guides",
  description: "Download clear, practical coding notes and interview guides for JavaScript, SQL and modern software development.",
  alternates: { canonical: "/study-notes" },
};

export const dynamic = "force-dynamic";

export default async function StudyNotesPage() {
  const notes = await listStudyNotes();
  return (
    <main className="study-notes-page">
      <Header />
      <section className="notes-hero">
        <div className="notes-kicker"><BookOpen size={16} /> Free developer resources</div>
        <h1>Learn the concept.<br /><em>Crack the interview.</em></h1>
        <p>Focused coding guides made for quick revision, deeper understanding and confident interview preparation.</p>
        <div className="notes-proof"><span><Download /> Free PDF downloads</span><span><Instagram /> Companion reels</span><span>Updated regularly</span></div>
      </section>
      <StudyNotesLibrary notes={notes} />
      <section className="notes-social-cta">
        <p>One concept at a time</p>
        <h2>See it in a reel.<br />Keep it in your notes.</h2>
        <span>Follow along on Instagram for daily coding concepts, then return here for the complete guide.</span>
        <a href="https://www.instagram.com/dev.sandipan/" target="_blank" rel="noreferrer"><Instagram size={18} /> Follow @dev.sandipan</a>
      </section>
      <SiteFooter />
    </main>
  );
}
