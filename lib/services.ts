export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  outcomes: string[];
  capabilities: string[];
  process: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "website-development-kolkata",
    eyebrow: "Website development · Kolkata",
    title: "Fast, modern websites built to win trust and enquiries.",
    shortTitle: "Website Development",
    description: "Professional website development in Kolkata for businesses, startups and personal brands. Responsive design, SEO foundations, CMS and reliable deployment.",
    intro: "I design and develop responsive business websites that explain your offer clearly, load quickly and make it easy for customers to contact you—from Kolkata or anywhere your business serves.",
    outcomes: ["A polished website designed around your business goals", "Mobile-first pages that work across modern devices", "Technical SEO, analytics-ready structure and clear calls to action"],
    capabilities: ["Business and company websites", "Portfolio and personal-brand websites", "Landing pages and lead-generation forms", "CMS and editable content", "Performance and accessibility improvements", "Domain, hosting and deployment support"],
    process: ["Understand your audience, services and conversion goal", "Plan the page structure and visual direction", "Build, test and optimise every screen size", "Launch with metadata, sitemap and analytics foundations"],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Vercel", "AWS"],
    faqs: [{ question: "Can you build a website for a Kolkata-based business?", answer: "Yes. I build professional websites for local businesses, startups and service providers, with location-aware content and enquiry journeys." }, { question: "Will the website work on mobile phones?", answer: "Yes. Every project is designed and tested for phones, tablets and desktop screens." }, { question: "Is SEO included?", answer: "Technical SEO foundations are included: semantic pages, metadata, canonical URLs, sitemap, robots rules, structured data and performance-focused development." }],
  },
  {
    slug: "mobile-app-development",
    eyebrow: "Mobile product engineering",
    title: "Mobile applications designed for real users and real workflows.",
    shortTitle: "Mobile App Development",
    description: "Cross-platform mobile app development with React Native, secure APIs, notifications, payments and cloud-connected business workflows.",
    intro: "I develop cross-platform applications that connect clean interfaces with reliable backend services, authentication and the operational features a production app needs.",
    outcomes: ["One maintainable product for Android and iOS", "Secure API and account architecture", "A responsive experience designed for everyday use"],
    capabilities: ["React Native applications", "Authentication and user profiles", "Push notifications", "Maps and location workflows", "Payments and subscriptions", "Admin dashboards and APIs"],
    process: ["Define the core user journey", "Prototype the interface and data model", "Build the app and backend integrations", "Test devices, edge cases and release readiness"],
    technologies: ["React Native", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
    faqs: [{ question: "Can one app support both Android and iOS?", answer: "Yes. React Native enables a shared codebase while still allowing platform-specific behaviour where it matters." }, { question: "Can you build the backend too?", answer: "Yes. I can build the application, REST APIs, database, authentication and supporting admin tools as one connected system." }],
  },
  {
    slug: "full-stack-development",
    eyebrow: "End-to-end development",
    title: "Full-stack products engineered from interface to infrastructure.",
    shortTitle: "Full-Stack Development",
    description: "Full-stack development services using React, Next.js, Node.js, Spring Boot, PostgreSQL and MongoDB for scalable web products and APIs.",
    intro: "I turn product requirements into complete web systems, owning the interface, API design, database logic, authentication and deployment rather than treating each layer in isolation.",
    outcomes: ["One coherent architecture across frontend and backend", "Secure, documented and maintainable application flows", "Production deployment with practical monitoring foundations"],
    capabilities: ["SaaS and dashboard development", "REST API engineering", "Role-based access and JWT authentication", "Real-time Socket.io features", "Search and booking workflows", "Cloud deployment and optimisation"],
    process: ["Translate requirements into flows and data models", "Build the API contract and interface system", "Integrate, secure and test the full product", "Deploy and document the working application"],
    technologies: ["Next.js", "React", "Node.js", "Spring Boot", "Java", "PostgreSQL", "MongoDB", "AWS"],
    faqs: [{ question: "Do you work on existing applications?", answer: "Yes. I can add features, improve performance, repair responsive layouts and modernise selected parts of an existing product." }, { question: "Can you implement real-time features?", answer: "Yes. My project work includes Socket.io chat, concurrent conversations and live application updates." }],
  },
  {
    slug: "sap-abap-development",
    eyebrow: "SAP technical development",
    title: "Clear, dependable SAP ABAP development and support.",
    shortTitle: "SAP ABAP Development",
    description: "SAP ABAP development for reports, Open SQL, Data Dictionary objects, modularisation, debugging and enterprise data workflows.",
    intro: "I build and support focused ABAP solutions with careful data modelling, readable program structure and disciplined testing in Eclipse ADT.",
    outcomes: ["Maintainable ABAP programs aligned to the requirement", "Reliable data retrieval and validation", "Clear handover notes for future support"],
    capabilities: ["Classical and interactive reports", "Open SQL queries", "Data Dictionary objects", "Internal tables and modularisation", "CRUD applications", "Debugging and technical documentation"],
    process: ["Clarify the business and data requirement", "Design dictionary objects and program flow", "Implement and test expected scenarios", "Document the solution and known dependencies"],
    technologies: ["SAP ABAP", "Open SQL", "Eclipse ADT", "Data Dictionary", "Reports", "Debugging"],
    faqs: [{ question: "What ABAP work do you cover?", answer: "My work covers reports, Open SQL, internal tables, Dictionary objects, modularisation, CRUD flows, debugging and testing." }, { question: "Can you support an existing ABAP program?", answer: "Yes. I can review a defined technical issue, trace program behaviour and implement scoped corrections or enhancements." }],
  },
  {
    slug: "sap-mii-integration",
    eyebrow: "Manufacturing integration",
    title: "SAP MII interfaces that connect shop-floor context with enterprise data.",
    shortTitle: "SAP MII Integration",
    description: "SAP MII technical integration and dashboard development for manufacturing visibility, plant data flows and connected enterprise applications.",
    intro: "I approach SAP MII work as an integration problem: clarify the operational signal, connect the right enterprise data and present it through a usable workflow or dashboard.",
    outcomes: ["A clear integration design around the plant workflow", "Usable operational views and data transformations", "Documented interfaces and failure paths"],
    capabilities: ["Manufacturing dashboards", "Plant and enterprise data integration", "Transaction and query design", "Data transformation workflows", "Technical troubleshooting", "Integration documentation"],
    process: ["Map systems, users and data boundaries", "Define the transaction and transformation flow", "Build and validate the integration", "Test errors, permissions and operational handover"],
    technologies: ["SAP MII", "SAP Integration", "XML", "SQL", "REST APIs", "JavaScript"],
    faqs: [{ question: "What is SAP MII used for?", answer: "SAP Manufacturing Integration and Intelligence connects manufacturing data with enterprise workflows and presents operational information through applications and dashboards." }, { question: "Can you scope a small MII requirement?", answer: "Yes. A focused discovery can identify source systems, transformations, users and the safest delivery path before implementation." }],
  },
  {
    slug: "sap-fico-mm-technical-support",
    eyebrow: "SAP module technical support",
    title: "ABAP support for SAP FICO and MM technical requirements.",
    shortTitle: "SAP FICO & MM Support",
    description: "Technical SAP ABAP support for FICO and MM-related reports, data validation, interfaces, enhancements and troubleshooting.",
    intro: "I support clearly scoped technical requirements around finance and materials workflows, working from the functional specification to the ABAP report, data rule, interface or correction required.",
    outcomes: ["Technical implementation tied to a defined business rule", "Traceable validation and error handling", "A solution that respects existing SAP process ownership"],
    capabilities: ["Custom reports and extracts", "Data validation logic", "Interface support", "Debugging and issue analysis", "Technical specifications", "ABAP enhancements for scoped requirements"],
    process: ["Review the functional requirement with the module owner", "Identify tables, dependencies and authorisations", "Implement and unit-test the technical change", "Support validation and document the result"],
    technologies: ["SAP ABAP", "SAP FICO", "SAP MM", "Open SQL", "Data Dictionary", "Eclipse ADT"],
    faqs: [{ question: "Do you provide functional FICO or MM consulting?", answer: "My focus is technical ABAP development supporting a defined FICO or MM requirement. Functional configuration should remain with the relevant module consultant." }, { question: "Can you build module-related custom reports?", answer: "Yes, when the required fields, business rules, authorisations and expected output are clearly defined." }],
  },
  {
    slug: "ai-ml-development",
    eyebrow: "Applied AI engineering",
    title: "AI applications grounded in your data and connected to useful workflows.",
    shortTitle: "AI & ML Development",
    description: "AI application development with LLM APIs, RAG, LangChain, LangGraph, embeddings, vector databases and production web interfaces.",
    intro: "I build practical AI features that combine language models with trusted knowledge, tools and product interfaces—focusing on traceable workflows rather than AI added without a purpose.",
    outcomes: ["An AI workflow designed around a measurable use case", "Grounded answers using your approved knowledge sources", "A usable web application with safeguards and feedback paths"],
    capabilities: ["RAG knowledge assistants", "LangGraph agent workflows", "Document search and question answering", "AI interview platforms", "AI-assisted code tools", "LLM API integration and evaluation"],
    process: ["Define the user task and acceptable failure boundaries", "Prepare retrieval, prompts and tool connections", "Build the application and evaluation examples", "Measure results, latency and operational cost"],
    technologies: ["LangChain", "LangGraph", "RAG", "Vector databases", "Embeddings", "LLM APIs", "Next.js", "Node.js"],
    faqs: [{ question: "What is a RAG application?", answer: "Retrieval-augmented generation finds relevant information from an approved knowledge source and supplies it to a model before the answer is produced." }, { question: "Can AI be added to an existing MERN application?", answer: "Yes. An AI service can be integrated behind a controlled API and connected to existing authentication, data and user workflows." }],
  },
];

export function getService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
