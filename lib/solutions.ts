export type SolutionPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  capabilities: string[];
  outcomes: string[];
  process: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
};

const delivery = [
  "Understand the current workflow and bottlenecks",
  "Map users, data, permissions and integrations",
  "Design, build and validate in clear milestones",
  "Launch with documentation, training and support",
];

export const automationPages: SolutionPage[] = [
  {
    slug: "n8n-workflow-automation",
    title: "n8n Workflow Automation",
    eyebrow: "Business automation",
    description:
      "Connected n8n workflows that reduce repetitive work and move information reliably between your business tools.",
    intro:
      "I design maintainable automations around your real operating process—not disconnected demos—complete with validation, alerts and failure paths.",
    capabilities: [
      "Lead capture and CRM routing",
      "Email and notification workflows",
      "Spreadsheet and database synchronization",
      "Webhook and API orchestration",
      "Scheduled reports and alerts",
      "Human approval steps",
    ],
    outcomes: [
      "Less manual data entry",
      "Faster response times",
      "Visible and recoverable workflows",
    ],
    process: delivery,
    technologies: [
      "n8n",
      "REST APIs",
      "Webhooks",
      "PostgreSQL",
      "Google Sheets",
      "Email",
      "JavaScript",
    ],
    faqs: [
      {
        question: "Can n8n connect our existing tools?",
        answer:
          "Yes, when the tools provide an API, webhook, database connection or supported integration.",
      },
      {
        question: "What happens when an automation fails?",
        answer:
          "Critical workflows can include retries, error logging and notifications so failures are visible and recoverable.",
      },
    ],
  },
  {
    slug: "custom-erp-systems",
    title: "Custom ERP Systems",
    eyebrow: "Connected operations",
    description:
      "Focused ERP platforms for inventory, orders, approvals, reporting and role-based business operations.",
    intro:
      "A custom ERP should reflect how your team works while creating one reliable source of operational truth.",
    capabilities: [
      "Role-based dashboards",
      "Inventory and procurement",
      "Orders and invoicing workflows",
      "Approval and audit trails",
      "Operational reports",
      "Mobile-ready interfaces",
    ],
    outcomes: [
      "One connected operating view",
      "Clear ownership and permissions",
      "Fewer spreadsheet handoffs",
    ],
    process: delivery,
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "React Native",
      "REST APIs",
      "AWS",
    ],
    faqs: [
      {
        question: "Can we start with one ERP module?",
        answer:
          "Yes. A focused module is often the safest way to validate the architecture before expanding.",
      },
      {
        question: "Can it connect to existing software?",
        answer:
          "Yes. Integration options are assessed during discovery based on available APIs and data access.",
      },
    ],
  },
  {
    slug: "ai-assistants-agents",
    title: "AI Assistants & Agents",
    eyebrow: "Applied AI",
    description:
      "Grounded AI assistants for document search, customer support and tool-connected business workflows.",
    intro:
      "I combine language models with approved data, retrieval and controlled actions so the assistant serves a defined business task.",
    capabilities: [
      "Knowledge assistants",
      "Document question answering",
      "Support triage",
      "Tool-using agents",
      "Human handoff flows",
      "Evaluation and feedback",
    ],
    outcomes: [
      "Faster access to knowledge",
      "Consistent guided responses",
      "Clear safeguards and handoffs",
    ],
    process: delivery,
    technologies: [
      "RAG",
      "LangGraph",
      "Vector databases",
      "LLM APIs",
      "Next.js",
      "Node.js",
    ],
    faqs: [
      {
        question: "Will the assistant use our own documents?",
        answer:
          "Yes. A retrieval workflow can ground answers in approved company knowledge.",
      },
      {
        question: "Can a human take over?",
        answer:
          "Yes. Escalation and review paths can be included for sensitive or uncertain requests.",
      },
    ],
  },
  {
    slug: "system-integrations",
    title: "System Integrations",
    eyebrow: "Connected systems",
    description:
      "Reliable interfaces between SAP, internal software, cloud services and third-party platforms.",
    intro:
      "I map the data contract, ownership and failure scenarios before connecting systems, keeping integrations observable and maintainable.",
    capabilities: [
      "REST API integrations",
      "SAP-connected workflows",
      "Webhook processing",
      "Data transformation",
      "Scheduled synchronization",
      "Error monitoring",
    ],
    outcomes: [
      "Consistent data across tools",
      "Reduced duplicate entry",
      "Traceable integration failures",
    ],
    process: delivery,
    technologies: ["REST", "Webhooks", "SAP", "Node.js", "XML", "JSON", "SQL"],
    faqs: [
      {
        question: "Can you integrate a legacy system?",
        answer:
          "Often yes, depending on its database, export, API or middleware options.",
      },
      {
        question: "How is data protected?",
        answer:
          "Integrations use scoped credentials, validation, transport security and appropriate access controls.",
      },
    ],
  },
  {
    slug: "dashboards-analytics",
    title: "Dashboards & Analytics",
    eyebrow: "Operational intelligence",
    description:
      "Decision-ready dashboards, scheduled reports and alerts built around meaningful operational signals.",
    intro:
      "I turn scattered data into focused views that help each role understand what changed, what needs attention and what to do next.",
    capabilities: [
      "Executive dashboards",
      "Operational monitoring",
      "KPI and trend views",
      "Automated reports",
      "Threshold alerts",
      "Role-specific access",
    ],
    outcomes: [
      "Faster operational visibility",
      "Consistent KPI definitions",
      "Less manual report preparation",
    ],
    process: delivery,
    technologies: ["React", "Next.js", "PostgreSQL", "Charting", "ETL", "APIs"],
    faqs: [
      {
        question: "Can you combine multiple data sources?",
        answer:
          "Yes. Sources can be normalized into a reporting layer when access and data quality allow it.",
      },
      {
        question: "Can reports be emailed automatically?",
        answer:
          "Yes. Scheduled summaries and threshold-based alerts can be added.",
      },
    ],
  },
  {
    slug: "cloud-deployment",
    title: "Cloud & Deployment",
    eyebrow: "Production foundations",
    description:
      "Secure deployment, databases, monitoring and practical infrastructure for reliable applications.",
    intro:
      "I prepare applications for production with repeatable deployment, environment separation, data protection and useful operational visibility.",
    capabilities: [
      "Cloud deployment",
      "Managed databases",
      "Docker packaging",
      "Nginx and process management",
      "Backups and environment setup",
      "Monitoring foundations",
    ],
    outcomes: [
      "Repeatable releases",
      "More reliable environments",
      "Clearer operational ownership",
    ],
    process: delivery,
    technologies: [
      "AWS",
      "Vercel",
      "Docker",
      "Nginx",
      "PM2",
      "PostgreSQL",
      "MongoDB",
    ],
    faqs: [
      {
        question: "Can you deploy an existing application?",
        answer:
          "Yes. I can assess its runtime, storage and security requirements and prepare an appropriate deployment path.",
      },
      {
        question: "Do you configure monitoring?",
        answer:
          "Yes. The scope can include uptime, logs, application errors and important service signals.",
      },
    ],
  },
];

export const industryPages: SolutionPage[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Production, inventory and plant workflows connected through practical operational software.",
    intro:
      "Manufacturing systems should make shop-floor and enterprise information easier to act on without disrupting critical operations.",
    capabilities: [
      "Production visibility",
      "Material and inventory tracking",
      "Quality workflows",
      "Maintenance requests",
      "Plant dashboards",
      "SAP and API integration",
    ],
    outcomes: [
      "Clearer production status",
      "Fewer manual handoffs",
      "Better operational traceability",
    ],
    process: delivery,
    technologies: [
      "SAP MII",
      "ERP",
      "Dashboards",
      "APIs",
      "Mobile",
      "PostgreSQL",
    ],
    faqs: [
      {
        question: "Can you connect shop-floor and ERP data?",
        answer:
          "Yes, subject to the available plant interfaces, middleware and SAP access.",
      },
      {
        question: "Can we begin with one plant workflow?",
        answer: "Yes. A contained workflow is a practical starting point.",
      },
    ],
  },
  {
    slug: "tea-industry",
    title: "Tea Industry Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Connected garden, factory, inventory and dispatch visibility for tea operations.",
    intro:
      "Tea operations span field activity, processing, quality, stock and dispatch. A focused platform can connect those stages without adding unnecessary complexity.",
    capabilities: [
      "Garden activity records",
      "Leaf intake tracking",
      "Factory process visibility",
      "Quality and batch records",
      "Stock and dispatch",
      "Management reporting",
    ],
    outcomes: [
      "Connected garden-to-dispatch records",
      "Better batch visibility",
      "Faster reporting",
    ],
    process: delivery,
    technologies: [
      "Mobile workflows",
      "ERP modules",
      "Dashboards",
      "QR codes",
      "APIs",
      "Cloud",
    ],
    faqs: [
      {
        question: "Can field teams use mobile devices?",
        answer:
          "Yes. Mobile-friendly workflows can be designed for the connectivity and devices available on site.",
      },
      {
        question: "Can batches be traced?",
        answer:
          "Traceability can be designed around your intake, processing, grading and dispatch identifiers.",
      },
    ],
  },
  {
    slug: "food-processing",
    title: "Food Processing Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Batch, quality, inventory and dispatch workflows designed for food-processing operations.",
    intro:
      "I build systems that connect materials, batches, checks and finished-goods movement into a clearer operating record.",
    capabilities: [
      "Batch production records",
      "Raw-material inventory",
      "Quality checkpoints",
      "Expiry and lot visibility",
      "Dispatch coordination",
      "Operational dashboards",
    ],
    outcomes: [
      "Stronger batch traceability",
      "More consistent records",
      "Clear stock movement",
    ],
    process: delivery,
    technologies: [
      "ERP",
      "Barcode / QR",
      "Mobile",
      "Dashboards",
      "PostgreSQL",
      "APIs",
    ],
    faqs: [
      {
        question: "Can the system track lots and expiry dates?",
        answer:
          "Yes. Lot, batch and expiry fields can be modeled around the actual production flow.",
      },
      {
        question: "Can quality checks be included?",
        answer:
          "Yes. Required checks, approvals and exceptions can be captured by stage.",
      },
    ],
  },
  {
    slug: "pharmaceuticals",
    title: "Pharmaceutical Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Controlled workflows, traceability and operational visibility for pharmaceutical teams.",
    intro:
      "Pharmaceutical software requires careful permissions, auditability and validation. I focus on scoped operational tools that respect those constraints.",
    capabilities: [
      "Controlled data capture",
      "Role-based access",
      "Batch and material views",
      "Approval workflows",
      "Audit-ready activity history",
      "Management dashboards",
    ],
    outcomes: [
      "Clearer accountability",
      "Consistent controlled workflows",
      "Improved operational visibility",
    ],
    process: delivery,
    technologies: [
      "Role-based systems",
      "Audit logs",
      "ERP integration",
      "Dashboards",
      "APIs",
      "Cloud",
    ],
    faqs: [
      {
        question: "Do you support regulated workflows?",
        answer:
          "I can build scoped technical systems, while compliance ownership and formal validation remain with the organization and its qualified experts.",
      },
      {
        question: "Can changes be audited?",
        answer:
          "Yes. Important actions can include identity, timestamp and before/after records.",
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Fleet, shipment, delivery and exception workflows in one connected operating view.",
    intro:
      "Logistics teams need timely status and clear exception handling. I build tools that connect dispatch, drivers, customers and operations.",
    capabilities: [
      "Shipment management",
      "Driver and fleet workflows",
      "Live status updates",
      "Proof of delivery",
      "Route and exception views",
      "Customer notifications",
    ],
    outcomes: [
      "Better shipment visibility",
      "Faster exception response",
      "Clear delivery records",
    ],
    process: delivery,
    technologies: [
      "Maps",
      "GPS",
      "React Native",
      "Notifications",
      "APIs",
      "Cloud",
    ],
    faqs: [
      {
        question: "Can drivers use a mobile app?",
        answer:
          "Yes. Driver workflows can cover assignments, status, evidence and location where appropriate.",
      },
      {
        question: "Can customers receive updates?",
        answer:
          "Yes. Email, SMS, WhatsApp or in-app updates depend on the selected providers.",
      },
    ],
  },
  {
    slug: "retail",
    title: "Retail Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Orders, inventory, customer and reporting workflows for modern retail operations.",
    intro:
      "I connect the workflows behind the sale—from stock and order capture to fulfillment, customer communication and reporting.",
    capabilities: [
      "Inventory visibility",
      "Order management",
      "Store dashboards",
      "Customer workflows",
      "Payments and invoicing",
      "Sales reporting",
    ],
    outcomes: [
      "More accurate stock visibility",
      "Faster order handling",
      "Connected customer records",
    ],
    process: delivery,
    technologies: [
      "Commerce APIs",
      "ERP modules",
      "Payments",
      "Dashboards",
      "Mobile",
      "Cloud",
    ],
    faqs: [
      {
        question: "Can online and offline orders be combined?",
        answer:
          "Yes, when the participating systems provide appropriate access or integrations.",
      },
      {
        question: "Can it support multiple roles or stores?",
        answer:
          "Yes. Data boundaries and permissions can be designed by store, region and role.",
      },
    ],
  },
  {
    slug: "education",
    title: "Education Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Learning, assessment and administration platforms for educational institutions.",
    intro:
      "Drawing on production EdTech experience, I build accessible learning and administration workflows for students, educators and operations teams.",
    capabilities: [
      "Learning platforms",
      "Courses and content",
      "Assessments and analytics",
      "Student administration",
      "Notifications",
      "Web and mobile apps",
    ],
    outcomes: [
      "Connected learning journeys",
      "Less administrative repetition",
      "Clear progress visibility",
    ],
    process: delivery,
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "Video",
      "Assessments",
      "Analytics",
    ],
    faqs: [
      {
        question: "Can you build both web and mobile experiences?",
        answer:
          "Yes. A shared backend can support responsive web and cross-platform mobile applications.",
      },
      {
        question: "Can educators manage content?",
        answer:
          "Yes. Role-based content, assessment and reporting tools can be included.",
      },
    ],
  },
];

industryPages.push(
  {
    slug: "healthcare",
    title: "Healthcare Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Secure patient, appointment, clinical and administrative workflows for healthcare organizations.",
    intro:
      "Healthcare teams need connected information without losing control of privacy or responsibility. I build scoped systems around clearly defined roles and operational journeys.",
    capabilities: [
      "Patient and appointment management",
      "Role-based clinical dashboards",
      "Prescriptions and records",
      "Billing and administration",
      "Notifications and follow-up",
      "Operational reporting",
    ],
    outcomes: [
      "Connected patient-service journeys",
      "Less duplicate administration",
      "Clear responsibility by role",
    ],
    process: delivery,
    technologies: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
      "Dashboards",
      "APIs",
    ],
    faqs: [
      {
        question: "Can access differ by role?",
        answer:
          "Yes. Permissions can be separated for clinicians, reception, administration, finance and patients.",
      },
      {
        question: "Does software alone ensure compliance?",
        answer:
          "No. Technical controls support compliance, while governance and formal obligations remain with the healthcare organization.",
      },
    ],
  },
  {
    slug: "fintech",
    title: "Fintech Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Transaction, onboarding, wallet and agent workflows designed around trust and operational control.",
    intro:
      "Fintech products must make complex transactions understandable while respecting provider, security and regulatory boundaries.",
    capabilities: [
      "KYC onboarding",
      "Wallet workflows",
      "Bills and payments",
      "Agent dashboards",
      "Transaction history",
      "Provider integrations",
    ],
    outcomes: [
      "Clearer transaction journeys",
      "Connected agent operations",
      "Better activity visibility",
    ],
    process: delivery,
    technologies: [
      "React Native",
      "Node.js",
      "Payments",
      "KYC",
      "APIs",
      "Cloud",
    ],
    faqs: [
      {
        question: "Can external payment providers be connected?",
        answer:
          "Yes, when the provider supplies supported APIs, credentials and an approved integration path.",
      },
      {
        question: "How is sensitive data handled?",
        answer:
          "The design minimizes exposure, validates inputs and keeps regulated responsibilities with approved providers.",
      },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality Software Solutions",
    eyebrow: "Industry solution",
    description:
      "Web, reservation, service and customer journeys for restaurants and hospitality businesses.",
    intro:
      "Hospitality technology should express the brand while making discovery, enquiries and booking effortless on every device.",
    capabilities: [
      "Restaurant websites",
      "Menu experiences",
      "Reservation journeys",
      "Service booking",
      "Customer enquiries",
      "Operational integrations",
    ],
    outcomes: [
      "Stronger digital presentation",
      "Simpler booking journeys",
      "More qualified enquiries",
    ],
    process: delivery,
    technologies: [
      "Next.js",
      "Responsive Web",
      "Booking",
      "Notifications",
      "Analytics",
      "Cloud",
    ],
    faqs: [
      {
        question: "Can an existing booking tool be connected?",
        answer:
          "Yes, when the platform offers an embed, API or supported integration.",
      },
      {
        question: "Can staff update menus or services?",
        answer:
          "Yes. Editable content workflows can be included where ongoing updates are required.",
      },
    ],
  },
);

export const getAutomation = (slug: string) =>
  automationPages.find((item) => item.slug === slug);
export const getIndustry = (slug: string) =>
  industryPages.find((item) => item.slug === slug);
