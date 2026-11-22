import { getStudyNoteBySlug } from "@/lib/portfolio";

type Params = Promise<{ slug: string }>;

export async function GET(request: Request, { params }: { params: Params }) {
  const { slug } = await params;
  const note = await getStudyNoteBySlug(slug);
  if (!note) return new Response("Study guide not found.", { status: 404 });

  const range = request.headers.get("range");
  const upstream = await fetch(note.pdfUrl, {
    headers: range ? { Range: range } : undefined,
    next: { revalidate: 86400 },
  });
  if (!upstream.ok && upstream.status !== 206)
    return new Response("The PDF is temporarily unavailable.", { status: 502 });

  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set("Content-Disposition", `inline; filename="${note.slug}.pdf"`);
  headers.set("X-Robots-Tag", "noindex, nofollow");
  headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800");
  for (const name of ["content-length", "content-range", "accept-ranges", "etag", "last-modified"])
    if (upstream.headers.has(name)) headers.set(name, upstream.headers.get(name)!);

  return new Response(upstream.body, { status: upstream.status, headers });
}
