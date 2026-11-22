import { neon } from "@neondatabase/serverless";

export type PortfolioProject = {
  id: number;
  title: string;
  type: string;
  tech: string[];
  text: string;
  href: string;
  image: string;
  position: number;
  published: boolean;
};

export type ProjectInput = Omit<PortfolioProject, "id">;

export type StudyNote = {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  pdfUrl: string;
  pages: number;
  level: string;
  accent: string;
  instagramUrl: string;
  position: number;
  published: boolean;
  createdAt: string;
};

export type StudyNoteInput = Omit<StudyNote, "id" | "createdAt">;

export const defaultStudyNotes: StudyNote[] = [
  {
    id: -1,
    title: "Advanced JavaScript Interview Guide",
    slug: "advanced-javascript-interview-guide",
    category: "JavaScript",
    description: "A practical 2026 interview guide with concept notes, frequently asked questions, coding problems and output puzzles for confident JavaScript preparation.",
    pdfUrl: "https://2o3mjnuymwzjdt9b.public.blob.vercel-storage.com/sandipan-portfolio/study-note/advanced-javascript-interview-guide.pdf",
    pages: 20,
    level: "Interview prep",
    accent: "#c9ff36",
    instagramUrl: "https://www.instagram.com/dev.sandipan/",
    position: 0,
    published: true,
    createdAt: "2026-11-22T00:00:00.000Z",
  },
  {
    id: -2,
    title: "Advanced SQL Queries Interview Guide",
    slug: "advanced-sql-queries-interview-guide",
    category: "SQL",
    description: "A focused SQL interview guide covering core concepts, real query problems and frequently asked questions with tested examples.",
    pdfUrl: "https://2o3mjnuymwzjdt9b.public.blob.vercel-storage.com/sandipan-portfolio/study-note/advanced-sql-queries-interview-guide.pdf",
    pages: 26,
    level: "Interview prep",
    accent: "#7dd3fc",
    instagramUrl: "https://www.instagram.com/dev.sandipan/",
    position: 1,
    published: true,
    createdAt: "2026-11-22T00:00:00.000Z",
  },
];

export const defaultProjects: PortfolioProject[] = [
  [
    "Aaranya",
    "Restaurant experience",
    ["UI/UX", "Responsive Web", "JavaScript", "Motion"],
    "An editorial restaurant website blending modern Indian dining with immersive storytelling, seasonal menus and a polished table-booking experience.",
    "https://aaranya.sandipandas.website",
    "/work/aaranya-restaurant.png",
  ],
  [
    "Hospital Management System",
    "Healthcare platform",
    ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    "A secure hospital operations platform with role-based access for seven user types, covering appointments, prescriptions, billing and patient records.",
    "https://hospitalmangemntsystem.com/",
    "/generated/hospital-management-dashboard.png",
  ],
  [
    "MelBuddy",
    "Social activity platform",
    ["Node.js", "React Native", "MongoDB", "AWS"],
    "A social activity booking product with identity verification, payments, real-time notifications, moderation and scalable cloud integrations.",
    "https://www.melbuddy.com",
    "/work/melbuddy.jpg",
  ],
  [
    "Real-Time Chat",
    "Communication product",
    ["MERN", "Socket.io", "Redux", "JWT"],
    "A scalable chat application built for instant bidirectional communication, authenticated sessions and reliable concurrent conversations.",
    "https://github.com/sandipan-das-sd/MERN_ChatApp",
    "/work/chat-app.png",
  ],
  [
    "Rental & Travel",
    "Booking platform",
    ["React", "Node.js", "MongoDB", "REST API"],
    "A two-sided booking platform with owner and user dashboards, advanced filters, availability tracking and date-conflict validation.",
    "https://github.com/sandipan-das-sd/Rental",
    "/work/cloud-data.png",
  ],
  [
    "Geo Attendance",
    "Location-based workforce app",
    ["React Native", "GPS", "Geofencing", "REST API"],
    "A mobile attendance application using GPS geofencing for automatic check-in and check-out, live location tracking and secure attendance history.",
    "",
    "/generated/geo-attendance-app.png",
  ],
  [
    "EMA Alert System",
    "Real-time trading alerts",
    ["EMA 20", "Market Data", "Automation", "Signal Detection"],
    "An automated monitoring system that identifies EMA 20 breakouts, generates timely trade alerts and reduces false signals.",
    "",
    "/generated/ema-alert-dashboard.png",
  ],
  [
    "Relic Atlas",
    "Archaeology community",
    ["React", "Node.js", "Maps", "LiDAR"],
    "An archaeology community platform mapping Britain's finds with member dashboards and LiDAR-backed discovery tools.",
    "https://relicatlas.co.uk",
    "/work/relic-atlas.png",
  ],
  [
    "Pulpit Fill",
    "Faith-tech marketplace",
    ["iOS", "Android", "Firebase"],
    "A focused marketplace connecting churches with available preachers through a simple mobile experience.",
    "https://pulpitfill.com",
    "/work/pulpit-fill.png",
  ],
  [
    "Gyanoda",
    "Learning platform",
    ["React", "Node.js", "Mobile", "EdTech"],
    "A digital learning ecosystem helping students discover courses, practise effectively and make clear progress across web and mobile.",
    "https://www.gyanoda.com",
    "/work/learning-platform.png",
  ],
  [
    "Infinite Laundry",
    "Service booking",
    ["Web", "Booking", "Responsive UI"],
    "A premium laundry service experience with a clear marketing journey and frictionless service booking.",
    "",
    "/work/infinite-laundry.png",
  ],
  [
    "Samprit Media",
    "Creative agency",
    ["Web Design", "Brand", "Motion"],
    "A high-energy digital studio storefront designed to present creative services and turn attention into enquiries.",
    "",
    "/work/samprit-media.png",
  ],
  [
    "SAP Freelance Hub",
    "Enterprise SAP",
    ["SAP CPI", "ABAP", "MII"],
    "An enterprise SAP practice covering integration, development and specialist technical services.",
    "https://sap.gyanoda.com",
    "/work/sap-freelance-hub-mii.png",
  ],
  [
    "BillBnk",
    "Fintech application",
    ["React Native", "KYC", "Wallet", "AEPS"],
    "Agent banking, bill payments, AEPS, wallet operations and multi-bank payouts in one mobile product.",
    "",
    "/work/billbank.jpg",
  ],
  [
    "EarnHub",
    "Freelance marketplace",
    ["Full Stack", "Marketplace", "Matching"],
    "A freelance marketplace that simplifies discovery for clients and skilled professionals.",
    "",
    "/work/earnhub.png",
  ],
  [
    "AI Code Editor",
    "AI developer tool",
    ["MERN", "LLM", "Code Intelligence", "WebSockets"],
    "An intelligent browser-based code editor with contextual assistance, code explanation, generation and real-time development workflows.",
    "",
    "/work/ai-operations.png",
  ],
  [
    "AI Interview Platform",
    "AI career platform",
    ["MERN", "LLM", "RAG", "Vector DB"],
    "An AI interview practice platform with adaptive questions, résumé-aware RAG, structured feedback and progress analytics.",
    "",
    "/work/learning-platform.png",
  ],
  [
    "AI Text Classifier",
    "AI-assisted classification API",
    ["React", "Node.js", "Express", "MongoDB", "Ollama"],
    "A full-stack classification service that uses a local LLM to categorize customer messages as complaints, queries, feedback or other, returning a validated confidence score through a production REST API.",
    "/projects/ai-text-classifier",
    "/work/ai-text-classifier.png",
  ],
].map((p, index) => ({
  id: -(index + 1),
  title: p[0] as string,
  type: p[1] as string,
  tech: p[2] as string[],
  text: p[3] as string,
  href: p[4] as string,
  image: p[5] as string,
  position: index,
  published: true,
}));

const featureClassifier = (projects: PortfolioProject[]) => {
  const classifier = defaultProjects.find(
    (project) => project.title === "AI Text Classifier",
  )!;
  return [
    classifier,
    ...projects.filter(
      (project) =>
        project.title !== "AI Text Classifier" &&
        !project.href.includes(
          "ai-assisted-text-classification-api.vercel.app",
        ) &&
        !project.href.includes("/projects/ai-text-classifier"),
    ),
  ];
};

const connection = () => process.env.DATABASE_URL || process.env.POSTGRES_URL;
export const isPortfolioDbConfigured = () => Boolean(connection());
const client = () => {
  const value = connection();
  return value ? neon(value) : null;
};
let ready: Promise<void> | null = null;

function ensureTables(sql: NonNullable<ReturnType<typeof client>>) {
  if (!ready)
    ready = (async () => {
      await sql`CREATE TABLE IF NOT EXISTS portfolio_projects (id SERIAL PRIMARY KEY, title TEXT NOT NULL, type TEXT NOT NULL, tech JSONB NOT NULL DEFAULT '[]', description TEXT NOT NULL, href TEXT NOT NULL DEFAULT '', image TEXT NOT NULL, position INTEGER NOT NULL DEFAULT 0, published BOOLEAN NOT NULL DEFAULT true, created_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at TIMESTAMPTZ NOT NULL DEFAULT now())`;
      await sql`CREATE TABLE IF NOT EXISTS portfolio_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TIMESTAMPTZ NOT NULL DEFAULT now())`;
      await sql`CREATE TABLE IF NOT EXISTS portfolio_messages (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, subject TEXT NOT NULL DEFAULT '', message TEXT NOT NULL, received_at TIMESTAMPTZ NOT NULL DEFAULT now())`;
      await sql`CREATE TABLE IF NOT EXISTS portfolio_study_notes (id SERIAL PRIMARY KEY, title TEXT NOT NULL, slug TEXT NOT NULL UNIQUE, category TEXT NOT NULL, description TEXT NOT NULL, pdf_url TEXT NOT NULL, pages INTEGER NOT NULL DEFAULT 0, level TEXT NOT NULL DEFAULT 'All levels', accent TEXT NOT NULL DEFAULT '#c9ff36', instagram_url TEXT NOT NULL DEFAULT '', position INTEGER NOT NULL DEFAULT 0, published BOOLEAN NOT NULL DEFAULT true, created_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at TIMESTAMPTZ NOT NULL DEFAULT now())`;
      const noteCount = await sql`SELECT COUNT(*)::int AS count FROM portfolio_study_notes`;
      if (Number(noteCount[0].count) === 0)
        for (const note of defaultStudyNotes)
          await sql`INSERT INTO portfolio_study_notes (title,slug,category,description,pdf_url,pages,level,accent,instagram_url,position,published) VALUES (${note.title},${note.slug},${note.category},${note.description},${note.pdfUrl},${note.pages},${note.level},${note.accent},${note.instagramUrl},${note.position},${note.published})`;
      const count =
        await sql`SELECT COUNT(*)::int AS count FROM portfolio_projects`;
      if (Number(count[0].count) === 0)
        for (const p of defaultProjects)
          await sql`INSERT INTO portfolio_projects (title,type,tech,description,href,image,position,published) VALUES (${p.title},${p.type},${JSON.stringify(p.tech)}::jsonb,${p.text},${p.href},${p.image},${p.position},${p.published})`;
    })().catch((error) => {
      ready = null;
      throw error;
    });
  return ready;
}

const mapProject = (r: Record<string, unknown>): PortfolioProject => ({
  id: Number(r.id),
  title: String(r.title),
  type: String(r.type),
  tech: Array.isArray(r.tech) ? r.tech.map(String) : [],
  text: String(r.description),
  href: String(r.href ?? ""),
  image: String(r.image),
  position: Number(r.position),
  published: Boolean(r.published),
});

export async function listProjects(includeDrafts = false) {
  try {
    const sql = client();
    if (!sql) return featureClassifier(defaultProjects);
    await ensureTables(sql);
    const rows = includeDrafts
      ? await sql`SELECT * FROM portfolio_projects ORDER BY position,id`
      : await sql`SELECT * FROM portfolio_projects WHERE published=true ORDER BY position,id`;
    let projects = rows.map(mapProject);
    const aaranya = defaultProjects.find(
      (project) => project.title === "Aaranya",
    )!;
    if (
      !projects.some(
        (project) =>
          project.title.toLowerCase() === "aaranya" ||
          project.href.includes("aaranya.sandipandas.website"),
      )
    )
      projects = [aaranya, ...projects];
    return featureClassifier(projects);
  } catch (error) {
    console.error(
      "Portfolio database unavailable; using built-in projects.",
      error,
    );
    return featureClassifier(defaultProjects);
  }
}
export async function createProject(p: ProjectInput) {
  const sql = client();
  if (!sql) throw new Error("Database is not configured.");
  await ensureTables(sql);
  const rows =
    await sql`INSERT INTO portfolio_projects (title,type,tech,description,href,image,position,published) VALUES (${p.title},${p.type},${JSON.stringify(p.tech)}::jsonb,${p.text},${p.href},${p.image},${p.position},${p.published}) RETURNING *`;
  return mapProject(rows[0]);
}
export async function updateProject(id: number, p: ProjectInput) {
  const sql = client();
  if (!sql) throw new Error("Database is not configured.");
  await ensureTables(sql);
  const rows =
    await sql`UPDATE portfolio_projects SET title=${p.title},type=${p.type},tech=${JSON.stringify(p.tech)}::jsonb,description=${p.text},href=${p.href},image=${p.image},position=${p.position},published=${p.published},updated_at=now() WHERE id=${id} RETURNING *`;
  return rows[0] ? mapProject(rows[0]) : null;
}
export async function deleteProject(id: number) {
  const sql = client();
  if (!sql) throw new Error("Database is not configured.");
  await ensureTables(sql);
  const rows =
    await sql`DELETE FROM portfolio_projects WHERE id=${id} RETURNING id`;
  return rows.length > 0;
}
export async function getResumeUrl() {
  try {
    const sql = client();
    if (!sql) return "/documents/Sandipan-Das-Resume.pdf";
    await ensureTables(sql);
    const rows =
      await sql`SELECT value FROM portfolio_settings WHERE key='resume_url'`;
    return rows[0]?.value
      ? String(rows[0].value)
      : "/documents/Sandipan-Das-Resume.pdf";
  } catch (error) {
    console.error(
      "Portfolio résumé setting unavailable; using bundled PDF.",
      error,
    );
    return "/documents/Sandipan-Das-Resume.pdf";
  }
}
export async function setResumeUrl(value: string) {
  const sql = client();
  if (!sql) throw new Error("Database is not configured.");
  await ensureTables(sql);
  await sql`INSERT INTO portfolio_settings (key,value) VALUES ('resume_url',${value}) ON CONFLICT (key) DO UPDATE SET value=excluded.value,updated_at=now()`;
  return value;
}
export async function saveMessage(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const sql = client();
  if (!sql) throw new Error("Message storage is not configured.");
  await ensureTables(sql);
  await sql`INSERT INTO portfolio_messages (name,email,subject,message) VALUES (${input.name},${input.email},${input.subject},${input.message})`;
}
export type PortfolioMessage = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  receivedAt: string;
};
export async function listMessages(): Promise<PortfolioMessage[]> {
  try {
    const sql = client();
    if (!sql) return [];
    await ensureTables(sql);
    const rows =
      await sql`SELECT id,name,email,subject,message,received_at AS "receivedAt" FROM portfolio_messages ORDER BY received_at DESC LIMIT 500`;
    return rows.map((r) => ({
      id: Number(r.id),
      name: String(r.name),
      email: String(r.email),
      subject: String(r.subject),
      message: String(r.message),
      receivedAt: new Date(String(r.receivedAt)).toISOString(),
    }));
  } catch (error) {
    console.error("Portfolio messages unavailable.", error);
    return [];
  }
}
export async function deleteMessage(id: number) {
  const sql = client();
  if (!sql) throw new Error("Database is not configured.");
  await ensureTables(sql);
  const rows =
    await sql`DELETE FROM portfolio_messages WHERE id=${id} RETURNING id`;
  return rows.length > 0;
}

const mapStudyNote = (r: Record<string, unknown>): StudyNote => ({
  id: Number(r.id),
  title: String(r.title),
  slug: String(r.slug),
  category: String(r.category),
  description: String(r.description),
  pdfUrl: String(r.pdf_url),
  pages: Number(r.pages),
  level: String(r.level),
  accent: String(r.accent),
  instagramUrl: String(r.instagram_url ?? ""),
  position: Number(r.position),
  published: Boolean(r.published),
  createdAt: new Date(String(r.created_at)).toISOString(),
});

export async function listStudyNotes(includeDrafts = false) {
  try {
    const sql = client();
    if (!sql) return defaultStudyNotes;
    await ensureTables(sql);
    const rows = includeDrafts
      ? await sql`SELECT * FROM portfolio_study_notes ORDER BY position,id`
      : await sql`SELECT * FROM portfolio_study_notes WHERE published=true ORDER BY position,id`;
    return rows.length ? rows.map(mapStudyNote) : defaultStudyNotes;
  } catch (error) {
    console.error("Study notes unavailable.", error);
    return defaultStudyNotes;
  }
}

export async function getStudyNoteBySlug(slug: string, includeDrafts = false) {
  const notes = await listStudyNotes(includeDrafts);
  return notes.find((note) => note.slug === slug) ?? null;
}

export async function createStudyNote(note: StudyNoteInput) {
  const sql = client();
  if (!sql) throw new Error("Database is not configured.");
  await ensureTables(sql);
  const rows = await sql`INSERT INTO portfolio_study_notes (title,slug,category,description,pdf_url,pages,level,accent,instagram_url,position,published) VALUES (${note.title},${note.slug},${note.category},${note.description},${note.pdfUrl},${note.pages},${note.level},${note.accent},${note.instagramUrl},${note.position},${note.published}) RETURNING *`;
  return mapStudyNote(rows[0]);
}

export async function updateStudyNote(id: number, note: StudyNoteInput) {
  const sql = client();
  if (!sql) throw new Error("Database is not configured.");
  await ensureTables(sql);
  const rows = await sql`UPDATE portfolio_study_notes SET title=${note.title},slug=${note.slug},category=${note.category},description=${note.description},pdf_url=${note.pdfUrl},pages=${note.pages},level=${note.level},accent=${note.accent},instagram_url=${note.instagramUrl},position=${note.position},published=${note.published},updated_at=now() WHERE id=${id} RETURNING *`;
  return rows[0] ? mapStudyNote(rows[0]) : null;
}

export async function deleteStudyNote(id: number) {
  const sql = client();
  if (!sql) throw new Error("Database is not configured.");
  await ensureTables(sql);
  const rows = await sql`DELETE FROM portfolio_study_notes WHERE id=${id} RETURNING id`;
  return rows.length > 0;
}
