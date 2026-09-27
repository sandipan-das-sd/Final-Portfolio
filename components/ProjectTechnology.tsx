import {
  Braces,
  CloudCog,
  Code2,
  Database,
  Layers3,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const details: Record<string, string> = {
  React:
    "Builds reusable, state-driven interfaces and keeps complex user journeys organized into maintainable components.",
  Vite: "Provides a fast development server and optimized production bundling for the client application.",
  "Node.js":
    "Runs the server-side JavaScript services, integration logic and non-blocking application workflows.",
  Express:
    "Defines focused HTTP routes, middleware, validation and consistent REST API responses.",
  MongoDB:
    "Stores flexible application records and supports evolving product data without rigid table structures.",
  Mongoose:
    "Adds schemas, validation and model-level consistency to MongoDB persistence workflows.",
  Ollama:
    "Runs the language model used for local, controlled AI inference and structured classification output.",
  LangChain:
    "Organizes prompts and model calls behind a reusable service layer that can evolve independently.",
  Vercel:
    "Hosts the web experience and serverless endpoints with repeatable deployment from source control.",
  "Cloudflare Tunnel":
    "Creates a protected route from the deployed API to the Ollama runtime without exposing local network ports.",
  Java: "Supports strongly typed backend services and enterprise application logic.",
  "Spring Boot":
    "Provides structured Java APIs, dependency injection, validation and production-ready service conventions.",
  MySQL:
    "Stores relational business records where transactional structure and joins are important.",
  JWT: "Protects authenticated sessions and carries signed identity claims between clients and APIs.",
  "React Native":
    "Delivers shared mobile product experiences across Android and iOS.",
  AWS: "Provides cloud infrastructure for application services, storage and scalable deployment.",
  "Socket.io":
    "Enables low-latency bidirectional events for live messages, status and presence.",
  Redux:
    "Centralizes predictable client state for multi-screen and real-time application workflows.",
  PostgreSQL:
    "Provides reliable relational storage, constraints and query support for operational data.",
  Docker:
    "Packages runtime dependencies into consistent, portable deployment units.",
  "REST API":
    "Defines stable, integration-friendly communication between interfaces and backend services.",
  Maps: "Presents location-aware data and spatial interactions in an understandable visual workflow.",
  GPS: "Supplies device location signals for proximity and field-operation features.",
  Geofencing:
    "Applies geographic boundaries to automate validated location-based actions.",
  Firebase:
    "Supports mobile authentication, data services, notifications and application infrastructure.",
  Payments:
    "Connects secure transaction journeys while keeping provider responsibilities clearly separated.",
  RAG: "Grounds AI output in retrieved, approved knowledge instead of relying only on model memory.",
  "Vector DB":
    "Stores embeddings and supports semantic retrieval for context-aware AI experiences.",
  LLM: "Provides language understanding and generation for assisted product workflows.",
  WebSockets:
    "Maintains persistent two-way connections for real-time collaborative experiences.",
  ABAP: "Implements SAP-side reports, data logic and enterprise enhancements.",
  "SAP CPI":
    "Orchestrates cloud integrations and message flows between SAP and external systems.",
  MII: "Connects manufacturing information with plant and enterprise workflows.",
  LiDAR:
    "Adds terrain and elevation context to geographic research experiences.",
  KYC: "Structures identity-verification steps required by financial workflows.",
  AEPS: "Supports assisted banking transactions through the Aadhaar Enabled Payment System.",
  Wallet:
    "Tracks stored-value operations, transaction history and balance-oriented workflows.",
  "UI/UX":
    "Shapes clear information hierarchy, interactions and responsive journeys around user intent.",
  JavaScript:
    "Powers interactive browser behavior and shared application logic.",
  Motion:
    "Adds purposeful transitions and feedback while respecting performance and accessibility.",
  Mobile:
    "Adapts workflows for touch interaction, variable screens and use away from a desk.",
  "Responsive Web":
    "Keeps content and interactions usable across phone, tablet and desktop breakpoints.",
  "Full Stack":
    "Connects interface, API, data and deployment decisions as one coherent product system.",
  Marketplace:
    "Coordinates discovery and transactions between distinct user roles.",
  Matching:
    "Ranks or filters relevant people, services or opportunities for faster discovery.",
  Booking:
    "Manages availability, selection, confirmation and conflict-aware reservation flows.",
  Web: "Provides a browser-accessible experience without requiring installation.",
  "Web Design":
    "Combines visual direction, hierarchy and responsive presentation for brand communication.",
  Brand:
    "Creates a consistent visual and verbal identity across the customer experience.",
  Fintech:
    "Structures transaction-focused experiences around trust, accuracy and operational controls.",
  "Code Intelligence":
    "Uses project context to explain, generate and assist with source-code tasks.",
  "Market Data":
    "Supplies time-sensitive price information to monitoring and signal workflows.",
  Automation:
    "Runs repeatable rules and actions without continuous manual intervention.",
  "Signal Detection":
    "Evaluates defined conditions and identifies events that require attention.",
  "EMA 20":
    "Provides the moving-average reference used by the breakout-monitoring strategy.",
};

const describe = (name: string, project: string) =>
  details[name] ||
  `Supports the ${project} workflow as a focused part of the product architecture, selected for practical delivery and maintainability.`;
const classify = (name: string) =>
  /React|Vite|UI|Web Design|Responsive|Mobile|Redux|Motion/.test(name)
    ? "Experience"
    : /Mongo|MySQL|Postgre|Mongoose|Vector|Data/.test(name)
      ? "Data"
      : /AWS|Vercel|Cloudflare|Docker|Firebase|Nginx|PM2/.test(name)
        ? "Cloud & delivery"
        : /Ollama|Lang|LLM|RAG|Intelligence|Signal|EMA/.test(name)
          ? "Intelligence"
          : /Node|Express|Spring|Java|API|Socket|WebSocket|ABAP|SAP|MII/.test(
                name,
              )
            ? "Services & integration"
            : "Product capability";
const iconFor = (category: string) =>
  category === "Experience"
    ? Code2
    : category === "Data"
      ? Database
      : category === "Cloud & delivery"
        ? CloudCog
        : category === "Intelligence"
          ? Braces
          : category === "Services & integration"
            ? ServerCog
            : Layers3;

export function ProjectTechnology({
  project,
  technologies,
}: {
  project: string;
  technologies: string[];
}) {
  const groups = [...new Set(technologies.map(classify))];
  return (
    <section className="project-technology">
      <div className="technology-heading">
        <div>
          <p className="section-label">05 / Technology</p>
          <h2>A stack where every tool has a clear responsibility.</h2>
        </div>
        <p>
          The architecture for {project} was shaped around the product workflow,
          integration boundaries and long-term maintainability. Technologies are
          used for specific responsibilities rather than added only to make the
          stack appear larger.
        </p>
      </div>
      <div className="technology-groups">
        {groups.map((group) => {
          const Icon = iconFor(group);
          return (
            <article key={group}>
              <header>
                <Icon />
                <span>{group}</span>
                <b>
                  {
                    technologies.filter((item) => classify(item) === group)
                      .length
                  }{" "}
                  tools
                </b>
              </header>
              <div>
                {technologies
                  .filter((item) => classify(item) === group)
                  .map((item) => (
                    <section key={item}>
                      <i>
                        <Workflow />
                      </i>
                      <div>
                        <h3>{item}</h3>
                        <p>{describe(item, project)}</p>
                      </div>
                    </section>
                  ))}
              </div>
            </article>
          );
        })}
      </div>
      <div className="technology-principles">
        <article>
          <ShieldCheck />
          <div>
            <b>Clear boundaries</b>
            <p>
              Interface, business logic, persistence and external services
              remain separated so changes are easier to reason about.
            </p>
          </div>
        </article>
        <article>
          <Database />
          <div>
            <b>Defensive data handling</b>
            <p>
              Validation and predictable contracts protect downstream workflows
              from incomplete or unexpected input.
            </p>
          </div>
        </article>
        <article>
          <CloudCog />
          <div>
            <b>Deployment-aware design</b>
            <p>
              Runtime limits, secrets, external dependencies and failure paths
              are considered as part of the implementation.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
