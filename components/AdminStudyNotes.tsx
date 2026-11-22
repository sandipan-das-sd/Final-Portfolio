"use client";

import { useState } from "react";
import type { StudyNote } from "@/lib/portfolio";

const emptyNote: StudyNote = {
  id: 0,
  title: "",
  slug: "",
  category: "JavaScript",
  description: "",
  pdfUrl: "",
  pages: 0,
  level: "Interview prep",
  accent: "#c9ff36",
  instagramUrl: "",
  position: 0,
  published: true,
  createdAt: "",
};

const slugify = (value: string) =>
  value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function AdminStudyNotes({
  configured,
  initialNotes,
}: {
  configured: boolean;
  initialNotes: StudyNote[];
}) {
  const [notes, setNotes] = useState(initialNotes);
  const [form, setForm] = useState<StudyNote>(emptyNote);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);
  const field = <K extends keyof StudyNote>(name: K, value: StudyNote[K]) =>
    setForm((current) => ({ ...current, [name]: value }));

  async function uploadPdf(file: File) {
    setUploading(true);
    setStatus("Uploading PDF to Vercel Blob...");
    try {
      const data = new FormData();
      data.set("file", file);
      data.set("kind", "study-note");
      const response = await fetch("/api/admin/upload", { method: "POST", body: data });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error);
      setForm((current) => ({
        ...current,
        pdfUrl: body.url,
        title: current.title || file.name.replace(/[_-]+/g, " ").replace(/\.pdf$/i, ""),
        slug: current.slug || slugify(file.name.replace(/\.pdf$/i, "")),
      }));
      setStatus("PDF uploaded. Complete the details and save the note.");
    } catch (error) {
      setStatus((error as Error).message);
    } finally {
      setUploading(false);
    }
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setStatus("Saving study note...");
    const url = form.id > 0 ? `/api/admin/study-notes/${form.id}` : "/api/admin/study-notes";
    const response = await fetch(url, {
      method: form.id > 0 ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const body = await response.json();
    if (!response.ok) return setStatus(body.error);
    setNotes((current) =>
      form.id > 0
        ? current.map((item) => (item.id === body.note.id ? body.note : item))
        : [...current, body.note].sort((a, b) => a.position - b.position),
    );
    setForm(emptyNote);
    setStatus("Study note saved and ready for the public library.");
  }

  async function remove(note: StudyNote) {
    if (!confirm(`Delete “${note.title}” from the library?`)) return;
    const response = await fetch(`/api/admin/study-notes/${note.id}`, { method: "DELETE" });
    if (response.ok) {
      setNotes((current) => current.filter((item) => item.id !== note.id));
      setStatus("Study note deleted.");
    }
  }

  return (
    <section className="admin-notes">
      <div className="admin-section-heading">
        <div>
          <p>Content library</p>
          <h2>Study notes</h2>
        </div>
        <a href="/study-notes" target="_blank">View public library ↗</a>
      </div>
      <div className="admin-grid">
        <form onSubmit={save} className="project-form note-form">
          <h2>{form.id > 0 ? "Edit study note" : "Publish a PDF"}</h2>
          <label className={`note-dropzone${form.pdfUrl ? " uploaded" : ""}`}>
            <span>{uploading ? "Uploading..." : form.pdfUrl ? "PDF uploaded ✓" : "Choose PDF to upload"}</span>
            <small>Stored securely in Vercel Blob · maximum 15 MB</small>
            <input
              disabled={!configured || uploading}
              type="file"
              accept="application/pdf"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) uploadPdf(file);
              }}
            />
          </label>
          <label>Title<input required value={form.title} onChange={(e) => setForm((current) => ({ ...current, title: e.target.value, slug: current.id ? current.slug : slugify(e.target.value) }))} /></label>
          <div className="form-row">
            <label>Slug<input required value={form.slug} onChange={(e) => field("slug", slugify(e.target.value))} /></label>
            <label>Category<input required value={form.category} onChange={(e) => field("category", e.target.value)} /></label>
          </div>
          <label>Description<textarea required rows={4} value={form.description} onChange={(e) => field("description", e.target.value)} /></label>
          <div className="form-row note-fields">
            <label>Pages<input type="number" min="0" value={form.pages} onChange={(e) => field("pages", Number(e.target.value))} /></label>
            <label>Level<select value={form.level} onChange={(e) => field("level", e.target.value)}><option>Interview prep</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>All levels</option></select></label>
            <label>Accent<input type="color" value={form.accent} onChange={(e) => field("accent", e.target.value)} /></label>
          </div>
          <label>Instagram reel URL <small>optional</small><input type="url" placeholder="https://instagram.com/reel/..." value={form.instagramUrl} onChange={(e) => field("instagramUrl", e.target.value)} /></label>
          <div className="form-row">
            <label>Order<input type="number" value={form.position} onChange={(e) => field("position", Number(e.target.value))} /></label>
            <label className="check"><input type="checkbox" checked={form.published} onChange={(e) => field("published", e.target.checked)} /> Published</label>
          </div>
          <div className="form-actions">
            <button disabled={!configured || !form.pdfUrl || uploading} type="submit">{form.id > 0 ? "Update note" : "Publish note"}</button>
            {form.id > 0 && <button className="secondary" type="button" onClick={() => setForm(emptyNote)}>Cancel</button>}
          </div>
          {status && <p className="admin-message" role="status">{status}</p>}
        </form>
        <div className="admin-projects admin-note-list">
          <h2>PDF library <span>{notes.length}</span></h2>
          {notes.length === 0 && <p className="admin-empty">Upload your first guide to make the public library live.</p>}
          {notes.map((note) => (
            <article key={note.id}>
              <div className="admin-note-icon" style={{ background: note.accent }}>PDF</div>
              <div>
                <span>{note.published ? "Published" : "Draft"} · {note.pages || "—"} pages</span>
                <h3>{note.title}</h3>
                <p>{note.category} · {note.level}</p>
              </div>
              <div><button disabled={note.id < 0 || !configured} onClick={() => setForm(note)}>Edit</button><button disabled={note.id < 0 || !configured} className="danger" onClick={() => remove(note)}>Delete</button></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
