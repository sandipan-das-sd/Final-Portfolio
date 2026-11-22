import { NextResponse } from "next/server";
import {
  createStudyNote,
  isPortfolioDbConfigured,
  listStudyNotes,
  type StudyNoteInput,
} from "@/lib/portfolio";

export const parseStudyNote = (body: Record<string, unknown>): StudyNoteInput => ({
  title: String(body.title ?? "").trim(),
  slug: String(body.slug ?? "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  category: String(body.category ?? "Programming").trim(),
  description: String(body.description ?? "").trim(),
  pdfUrl: String(body.pdfUrl ?? "").trim(),
  pages: Math.max(0, Number(body.pages ?? 0)),
  level: String(body.level ?? "All levels").trim(),
  accent: String(body.accent ?? "#c9ff36").trim(),
  instagramUrl: String(body.instagramUrl ?? "").trim(),
  position: Number(body.position ?? 0),
  published: body.published !== false,
});

export async function GET() {
  return NextResponse.json({ notes: await listStudyNotes(true) });
}

export async function POST(request: Request) {
  if (!isPortfolioDbConfigured())
    return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  const input = parseStudyNote(await request.json());
  if (!input.title || !input.slug || !input.description || !input.pdfUrl)
    return NextResponse.json({ error: "Title, slug, description and PDF are required." }, { status: 400 });
  try {
    return NextResponse.json({ note: await createStudyNote(input) }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error && error.message.includes("unique")
      ? "That slug is already in use."
      : "Could not save the study note.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
