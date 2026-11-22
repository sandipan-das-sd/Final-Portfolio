import { NextResponse } from "next/server";
import { deleteStudyNote, isPortfolioDbConfigured, updateStudyNote } from "@/lib/portfolio";
import { parseStudyNote } from "../route";

type Params = Promise<{ id: string }>;

export async function PATCH(request: Request, { params }: { params: Params }) {
  if (!isPortfolioDbConfigured())
    return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  const id = Number((await params).id);
  const input = parseStudyNote(await request.json());
  if (!Number.isInteger(id) || !input.title || !input.slug || !input.description || !input.pdfUrl)
    return NextResponse.json({ error: "Invalid study note data." }, { status: 400 });
  try {
    const note = await updateStudyNote(id, input);
    return note ? NextResponse.json({ note }) : NextResponse.json({ error: "Not found." }, { status: 404 });
  } catch {
    return NextResponse.json({ error: "Could not update the study note. Check that the slug is unique." }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Params }) {
  if (!isPortfolioDbConfigured())
    return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  const id = Number((await params).id);
  if (!Number.isInteger(id))
    return NextResponse.json({ error: "Invalid id." }, { status: 400 });
  return (await deleteStudyNote(id))
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ error: "Not found." }, { status: 404 });
}
