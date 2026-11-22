"use client";

import { useMemo, useState } from "react";
import { Download, FileText, Instagram, Search, Sparkles } from "lucide-react";
import type { StudyNote } from "@/lib/portfolio";

export function StudyNotesLibrary({ notes }: { notes: StudyNote[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(notes.map((note) => note.category))];
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return notes.filter((note) =>
      (category === "All" || note.category === category) &&
      (!needle || `${note.title} ${note.description} ${note.category}`.toLowerCase().includes(needle)),
    );
  }, [notes, query, category]);

  return (
    <>
      <section className="notes-toolbar" aria-label="Filter study notes">
        <label><Search size={19} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search JavaScript, SQL, React..." /><span>{visible.length} guides</span></label>
        <div>{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
      </section>
      <section className="notes-grid" aria-live="polite">
        {visible.map((note, index) => (
          <article className="note-card" key={note.id} style={{ "--note-accent": note.accent } as React.CSSProperties}>
            <div className="note-cover">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <FileText />
              <div><small>INTERVIEW GUIDE</small><b>{note.category}</b></div>
            </div>
            <div className="note-content">
              <div className="note-meta"><span>{note.level}</span><span>{note.pages ? `${note.pages} pages` : "PDF guide"}</span></div>
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <div className="note-actions">
                <a className="note-download" href={note.pdfUrl} target="_blank" rel="noreferrer"><Download size={17} /> Open PDF</a>
                {note.instagramUrl && <a className="note-instagram" href={note.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Watch the ${note.title} reel on Instagram`}><Instagram size={18} /></a>}
              </div>
            </div>
          </article>
        ))}
        {visible.length === 0 && <div className="notes-empty"><Sparkles /><h2>{notes.length ? "No matching guides" : "Fresh notes are being prepared"}</h2><p>{notes.length ? "Try another search or category." : "The first interview guides will appear here shortly."}</p></div>}
      </section>
    </>
  );
}
