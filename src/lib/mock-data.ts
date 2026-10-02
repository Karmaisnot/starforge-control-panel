export type Tone = "success" | "warning" | "danger" | "info" | "neutral" | "pending";

export type AttentionItem = {
  id: string;
  title: string;
  entity: string;
  meta: string;
  due: string;
  tone: Tone;
  action: string;
};

export const attentionItems: AttentionItem[] = [
  {
    id: "att-001",
    title: "Collect overdue payment",
    entity: "Northstar Academy",
    meta: "1,250.00 USD · 8 days overdue",
    due: "Today",
    tone: "danger",
    action: "Review collection",
  },
  {
    id: "att-002",
    title: "Decide trial conversion",
    entity: "Orion Learning Center",
    meta: "Trial ends Sep 5 · 4 of 6 criteria met",
    due: "In 2 days",
    tone: "warning",
    action: "Review trial",
  },
  {
    id: "att-003",
    title: "Review contract draft",
    entity: "Employment agreement · Dilshod Karimov",
    meta: "2 variables need confirmation",
    due: "Today",
    tone: "warning",
    action: "Open draft",
  },
  {
    id: "att-004",
    title: "Resolve partial enforcement",
    entity: "Atlas Education · Staff Mobile",
    meta: "2 targets confirmed · 1 target pending",
    due: "12 min ago",
    tone: "pending",
    action: "View enforcement",
  },
  {
    id: "att-005",
    title: "Renew domain registration",
    entity: "learn.orion.uz",
    meta: "Certificate remains valid until Oct 18",
    due: "In 7 days",
    tone: "warning",
    action: "Review domain",
  },
];

export type Center = {
  id: string;
  name: string;
  code: string;
  location: string;
  status: string;
  tone: Tone;
  plan: string;
  deployment: string;
  branches: number;
  products: number;
  nextPayment: string;
  paymentState: string;
  attention: string;
  tickets: number;
  freshness: string;
};

export const centers: Center[] = [
  {
    id: "northstar",
    name: "Northstar Academy",
    code: "CTR-0018",
    location: "Tashkent, UZ",
    status: "Past due",
    tone: "danger",
    plan: "Pro · Custom",
    deployment: "Starforge cloud",
    branches: 3,
    products: 5,
    nextPayment: "1,250.00 USD · Aug 26",
    paymentState: "8 days overdue",
    attention: "Payment collection",
    tickets: 1,
    freshness: "Updated 4 min ago",
  },
  {
    id: "orion",
    name: "Orion Learning Center",
    code: "CTR-0021",
    location: "Samarkand, UZ",
    status: "Trial active",
    tone: "info",
    plan: "Max trial",
    deployment: "Starforge cloud",
    branches: 2,
    products: 6,
    nextPayment: "199.00 USD · Sep 6",
    paymentState: "After conversion",
    attention: "Trial ends in 2 days",
    tickets: 0,
    freshness: "Updated 9 min ago",
  },
  {
    id: "atlas",
    name: "Atlas Education",
    code: "CTR-0012",
    location: "Bukhara, UZ",
    status: "Restricted",
    tone: "warning",
    plan: "Pro",
    deployment: "Hybrid",
    branches: 3,
    products: 4,
    nextPayment: "159.00 USD · Sep 14",
    paymentState: "Due in 11 days",
    attention: "Staff Mobile pending",
    tickets: 2,
    freshness: "Partial · 12 min ago",
  },
  {
    id: "nova",
    name: "Nova Study House",
    code: "CTR-0025",
    location: "Fergana, UZ",
    status: "Onboarding",
    tone: "pending",
    plan: "Basic",
    deployment: "On-premise",
    branches: 1,
    products: 3,
    nextPayment: "89.00 USD · Oct 1",
    paymentState: "Scheduled",
    attention: "Domain not ready",
    tickets: 1,
    freshness: "Updated 26 min ago",
  },
  {
    id: "summit",
    name: "Summit English Lab",
    code: "CTR-0009",
    location: "Tashkent, UZ",
    status: "Active",
    tone: "success",
    plan: "Max",
    deployment: "Starforge cloud",
    branches: 5,
    products: 7,
    nextPayment: "199.00 USD · Sep 18",
    paymentState: "Due in 15 days",
    attention: "No urgent items",
    tickets: 0,
    freshness: "Live",
  },
];

export const serviceHealth = [
  { product: "CEO Web", environment: "Production", version: "v3.18.2", status: "Healthy", tone: "success" as Tone, freshness: "Live", centers: 18 },
  { product: "Staff Mobile", environment: "Production", version: "v2.9.0", status: "Degraded", tone: "warning" as Tone, freshness: "4 min ago", centers: 12 },
  { product: "Family Mobile", environment: "Production", version: "v1.14.6", status: "Healthy", tone: "success" as Tone, freshness: "Live", centers: 9 },
  { product: "Starforge Writer", environment: "Production", version: "v1.7.1", status: "Stale", tone: "neutral" as Tone, freshness: "Last seen 2h ago", centers: 4 },
];

export const activity = [
  { time: "10:42", action: "Payment follow-up logged", entity: "Northstar Academy", actor: "Sheikh", tone: "info" as Tone },
  { time: "09:18", action: "Product restriction requested", entity: "Atlas Education · Staff Mobile", actor: "Sheikh", tone: "warning" as Tone },
  { time: "08:51", action: "Expense recorded", entity: "Cloud provider · 420.00 USD", actor: "Sheikh", tone: "success" as Tone },
  { time: "Yesterday", action: "Contract draft generated", entity: "Orion Learning Center", actor: "System", tone: "neutral" as Tone },
];

export type ModuleOverviewData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: string;
  primaryActionHref?: string;
  metrics: Array<{ label: string; value: string; detail: string; tone?: Tone }>;
  attentionTitle: string;
  attention: Array<{ title: string; meta: string; status: string; tone: Tone }>;
  recentTitle: string;
  recent: Array<{ title: string; meta: string; value: string }>;
};

export const moduleOverview: Record<string, ModuleOverviewData> = {
  today: {
    eyebrow: "Command",
    title: "Today",
    description: "A focused view of customer follow-ups, product health, and recent Starforge activity.",
    primaryAction: "Open action center",
    primaryActionHref: "/actions",
    metrics: [
      { label: "Open action items", value: String(attentionItems.length), detail: "Across the shared demo queue", tone: "warning" },
      { label: "Centers needing follow-up", value: String(centers.filter((center) => center.tone !== "success").length), detail: `Of ${centers.length} demo centers`, tone: "danger" },
      { label: "Product alerts", value: String(serviceHealth.filter((service) => service.status !== "Healthy").length), detail: "Degraded or stale", tone: "warning" },
      { label: "Recent activity", value: String(activity.length), detail: "Entries in this demo feed" },
    ],
    attentionTitle: "Focus for today",
    attention: attentionItems.map((item) => ({ title: item.title, meta: `${item.entity} · ${item.meta}`, status: item.due, tone: item.tone })),
    recentTitle: "Recent activity",
    recent: activity.map((item) => ({ title: item.action, meta: `${item.entity} · ${item.actor}`, value: item.time })),
  },
  actions: {
    eyebrow: "Command",
    title: "Action Center",
    description: "Review the shared follow-up queue and make the next owner decision visible.",
    primaryAction: "Review first action",
    metrics: [
      { label: "Open action items", value: String(attentionItems.length), detail: "Across customer and company work", tone: "warning" },
      { label: "Due today", value: String(attentionItems.filter((item) => item.due === "Today").length), detail: "Needs a decision today", tone: "danger" },
      { label: "Centers needing follow-up", value: String(centers.filter((center) => center.tone !== "success").length), detail: "Based on seeded center status", tone: "warning" },
      { label: "Recent activity", value: String(activity.length), detail: "Entries in this demo feed" },
    ],
    attentionTitle: "Shared action queue",
    attention: attentionItems.map((item) => ({ title: item.title, meta: `${item.entity} · ${item.meta}`, status: item.due, tone: item.tone })),
    recentTitle: "Recent decisions",
    recent: activity.map((item) => ({ title: item.action, meta: `${item.entity} · ${item.actor}`, value: item.time })),
  },
  centers: {
    eyebrow: "Customers",
    title: "Education Centers",
    description: "Review seeded customer profiles, product coverage, deployment, and account follow-ups.",
    primaryAction: "Add education center",
    metrics: [
      { label: "Demo education centers", value: String(centers.length), detail: "Seeded profiles only" },
      { label: "Active centers", value: String(centers.filter((center) => center.status === "Active").length), detail: "Status is demo data", tone: "success" },
      { label: "Follow-ups", value: String(centers.filter((center) => center.tone !== "success").length), detail: "Trial, billing, access, or onboarding", tone: "warning" },
      { label: "Product assignments", value: String(centers.reduce((total, center) => total + center.products, 0)), detail: "Across seeded profiles" },
    ],
    attentionTitle: "Center follow-ups",
    attention: centers.filter((center) => center.tone !== "success").map((center) => ({ title: center.name, meta: `${center.code} · ${center.attention}`, status: center.status, tone: center.tone })),
    recentTitle: "Customer portfolio",
    recent: centers.map((center) => ({ title: center.name, meta: `${center.code} · ${center.location} · ${center.plan}`, value: center.status })),
  },
  catalog: {
    eyebrow: "Commercial",
    title: "Plans & Products",
    description: "Versioned price book, product entitlements, limits, and customer deal foundations.",
    primaryAction: "Create plan version",
    metrics: [
      { label: "Available products", value: "7", detail: "5 core · 2 desktop" },
      { label: "Active plan versions", value: "3", detail: "Basic · Pro · Max" },
      { label: "Custom deals", value: "6", detail: "33% of active centers", tone: "info" },
      { label: "Migration reviews", value: "2", detail: "No automatic impact", tone: "warning" },
    ],
    attentionTitle: "Catalog attention",
    attention: [
      { title: "IELTS entitlement needs release rule", meta: "Pro and Max plans · coming-soon product", status: "Policy needed", tone: "warning" },
      { title: "Backend seed differs from price book", meta: "Keep accepted customer snapshots unchanged", status: "Protected", tone: "info" },
    ],
    recentTitle: "Current plan book",
    recent: [
      { title: "Basic", meta: "600 students · 1 branch · 20 GB", value: "89.00 USD / month" },
      { title: "Pro", meta: "1,000 students · up to 3 branches · 100 GB", value: "159.00 USD / month" },
      { title: "Max", meta: "1,500 students · up to 6 branches · 200 GB", value: "199.00 USD / month" },
    ],
  },
  revenue: {
    eyebrow: "Commercial",
    title: "Revenue & Billing",
    description: "Collections, receivables, schedules, and reporting in every original currency.",
    metrics: [
      { label: "Collected this month", value: "8,420.00 USD", detail: "+12% comparable month", tone: "success" },
      { label: "Expected this month", value: "11,780.00 USD", detail: "Across 18 schedules" },
      { label: "Overdue", value: "1,880.00 USD", detail: "3 centers", tone: "danger" },
      { label: "Next 30 days", value: "9,460.00 USD", detail: "Estimated from schedules", tone: "info" },
    ],
    attentionTitle: "Collection queue",
    attention: [
      { title: "Northstar Academy", meta: "1,250.00 USD · 8 days overdue", status: "Follow up today", tone: "danger" },
      { title: "Helix School", meta: "630.00 USD · promise to pay was Sep 1", status: "Promise broken", tone: "warning" },
      { title: "Orion Learning Center", meta: "No schedule after trial conversion", status: "Decision needed", tone: "warning" },
    ],
    recentTitle: "Recent payments",
    recent: [
      { title: "Summit English Lab", meta: "Bank transfer · Sep 2", value: "199.00 USD" },
      { title: "Atlas Education", meta: "Bank transfer · Sep 1", value: "159.00 USD" },
      { title: "Bright Future Center", meta: "Card · Aug 30", value: "2,800,000 UZS" },
    ],
  },
  expenses: {
    eyebrow: "Company",
    title: "Expenses & Purchases",
    description: "Operational management view of bills, recurring obligations, purchases, and company assets.",
    primaryAction: "Record expense",
    metrics: [
      { label: "Recorded this month", value: "3,260.00 USD", detail: "Plus 8,400,000 UZS" },
      { label: "Awaiting payment", value: "740.00 USD", detail: "4 obligations", tone: "warning" },
      { label: "People cost", value: "1,920.00 USD", detail: "Linked salary obligations" },
      { label: "Infrastructure", value: "890.00 USD", detail: "27% of USD spend", tone: "info" },
    ],
    attentionTitle: "Needs review",
    attention: [
      { title: "Cloud invoice missing evidence", meta: "420.00 USD · recorded today", status: "Receipt missing", tone: "warning" },
      { title: "September salary obligations", meta: "3 obligations · linked to People", status: "Due Sep 5", tone: "warning" },
    ],
    recentTitle: "Recent expenses",
    recent: [
      { title: "Cloud provider", meta: "Infrastructure · Sep 3", value: "420.00 USD" },
      { title: "Figma", meta: "Software · Sep 2", value: "75.00 USD" },
      { title: "Office internet", meta: "Utilities · Sep 1", value: "680,000 UZS" },
    ],
  },
  documents: {
    eyebrow: "Company",
    title: "Contracts & Documents",
    description: "Versioned templates, review, generation jobs, signed evidence, and renewal obligations.",
    primaryAction: "Generate document",
    metrics: [
      { label: "Active contracts", value: "24", detail: "18 customer · 6 company" },
      { label: "Awaiting signature", value: "4", detail: "2 due this week", tone: "warning" },
      { label: "Expiring in 90 days", value: "3", detail: "Review obligations created" },
      { label: "Generation jobs", value: "1", detail: "Rendering demo DOCX", tone: "pending" },
    ],
    attentionTitle: "Document attention",
    attention: [
      { title: "Employment agreement", meta: "Dilshod Karimov · 2 missing variables", status: "Needs review", tone: "warning" },
      { title: "Northstar master agreement", meta: "Expires Nov 22", status: "Renewal review", tone: "info" },
    ],
    recentTitle: "Recent artifacts",
    recent: [
      { title: "Orion trial agreement", meta: "PDF · demo watermark · Sep 2", value: "Generated" },
      { title: "Atlas order form v3", meta: "PDF + DOCX · Aug 29", value: "Signed" },
      { title: "Vendor NDA", meta: "PDF · Aug 27", value: "In review" },
    ],
  },
  people: {
    eyebrow: "Company",
    title: "People & HR",
    description: "Starforge employees, hiring, compensation history, obligations, access, and equipment.",
    primaryAction: "Add employee",
    metrics: [
      { label: "Active employees", value: "6", detail: "2 contractors" },
      { label: "Starting soon", value: "1", detail: "Sep 9" },
      { label: "Probation reviews", value: "2", detail: "Next 30 days", tone: "warning" },
      { label: "Access reviews", value: "1", detail: "GitHub membership", tone: "warning" },
    ],
    attentionTitle: "People attention",
    attention: [
      { title: "Prepare Dilshod's employment agreement", meta: "Starts Sep 9 · offer accepted", status: "2 fields missing", tone: "warning" },
      { title: "Review Aziza's probation", meta: "Due Sep 12 · goals attached", status: "Due soon", tone: "info" },
    ],
    recentTitle: "Team",
    recent: [
      { title: "Sheikh", meta: "Founder · Tashkent", value: "Active" },
      { title: "Aziza Rakhimova", meta: "Customer Operations", value: "Probation" },
      { title: "Timur Saidov", meta: "Frontend Engineer", value: "Active" },
    ],
  },
  company: {
    eyebrow: "Company",
    title: "Company & Ownership",
    description: "Legal profile, founding record, holders, ownership events, and internal governance history.",
    primaryAction: "Create ownership event",
    metrics: [
      { label: "Allocated", value: "100.0000%", detail: "As of Sep 1, 2026", tone: "success" },
      { label: "Verified holders", value: "2 of 2", detail: "Management record" },
      { label: "Draft scenarios", value: "1", detail: "Not company record", tone: "info" },
      { label: "Records needing review", value: "2", detail: "Legal verification", tone: "warning" },
    ],
    attentionTitle: "Governance attention",
    attention: [
      { title: "Verify initial issuance evidence", meta: "Founding record · legal review required", status: "In review", tone: "warning" },
      { title: "Draft employee grant scenario", meta: "Would dilute existing holders by 3%", status: "Scenario only", tone: "info" },
    ],
    recentTitle: "Current holdings",
    recent: [
      { title: "Founder holding", meta: "Common · verified", value: "82.0000%" },
      { title: "Co-founder holding", meta: "Common · verified", value: "18.0000%" },
      { title: "Unallocated reserve", meta: "No active reserve", value: "0.0000%" },
    ],
  },
  support: {
    eyebrow: "Operations",
    title: "Support",
    description: "Customer conversations, service targets, escalations, incidents, and resolution history.",
    primaryAction: "Create ticket",
    metrics: [
      { label: "Needs response", value: "3", detail: "Oldest 47 min", tone: "warning" },
      { label: "Critical / high", value: "2", detail: "1 linked incident", tone: "danger" },
      { label: "Waiting on customer", value: "5", detail: "Targets paused where allowed" },
      { label: "Resolved this week", value: "14", detail: "2 reopened" },
    ],
    attentionTitle: "Priority queue",
    attention: [
      { title: "Staff Mobile cannot sync attendance", meta: "Atlas Education · production · 47 min", status: "High", tone: "danger" },
      { title: "Writer export is missing fonts", meta: "Summit English Lab · desktop", status: "Needs response", tone: "warning" },
    ],
    recentTitle: "Recent tickets",
    recent: [
      { title: "SUP-1048 · Attendance sync", meta: "Atlas Education · assigned to Timur", value: "In progress" },
      { title: "SUP-1047 · Writer PDF fonts", meta: "Summit English Lab", value: "New" },
      { title: "SUP-1044 · Billing contact update", meta: "Northstar Academy", value: "Resolved" },
    ],
  },
  infrastructure: {
    eyebrow: "Operations",
    title: "Infrastructure",
    description: "Service health, providers, servers, domains, bots, deployments, incidents, and cost.",
    primaryAction: "Add asset",
    metrics: [
      { label: "Production services", value: "12", detail: "10 healthy", tone: "success" },
      { label: "Degraded", value: "1", detail: "Staff Mobile sync", tone: "warning" },
      { label: "Renewals due", value: "2", detail: "Next 30 days", tone: "warning" },
      { label: "Monthly cost", value: "890.00 USD", detail: "Native currency total" },
    ],
    attentionTitle: "Operational attention",
    attention: [
      { title: "Staff Mobile sync is degraded", meta: "Production · affects 3 centers", status: "Incident open", tone: "danger" },
      { title: "learn.orion.uz renewal", meta: "Domain due in 7 days · certificate due Oct 18", status: "Renewal due", tone: "warning" },
      { title: "Writer backup freshness unknown", meta: "Last confirmed 2 hours ago", status: "Stale", tone: "neutral" },
    ],
    recentTitle: "Service map",
    recent: serviceHealth.map((item) => ({ title: item.product, meta: `${item.environment} · ${item.version}`, value: item.status })),
  },
  repositories: {
    eyebrow: "Operations",
    title: "Repositories",
    description: "Source ownership connected to products, deployments, releases, incidents, and runbooks.",
    primaryAction: "Link repository",
    metrics: [
      { label: "Active repositories", value: "11", detail: "Across 7 products" },
      { label: "Failed CI", value: "1", detail: "Default branch", tone: "danger" },
      { label: "Security alerts", value: "2", detail: "Review required", tone: "warning" },
      { label: "Missing owner", value: "1", detail: "Experimental repo", tone: "warning" },
    ],
    attentionTitle: "Engineering attention",
    attention: [
      { title: "staff-mobile default branch failing", meta: "2 checks · affects next deployment", status: "Failed CI", tone: "danger" },
      { title: "writer runbook is stale", meta: "Last reviewed 142 days ago", status: "Review due", tone: "warning" },
    ],
    recentTitle: "Repository health",
    recent: [
      { title: "starforge-ceo-web", meta: "CEO Web · pushed 34 min ago", value: "Passing" },
      { title: "starforge-staff-mobile", meta: "Staff Mobile · pushed 2h ago", value: "Failing" },
      { title: "starforge-writer", meta: "Writer · release v1.7.1", value: "Passing" },
    ],
  },
  audit: {
    eyebrow: "Governance",
    title: "Audit & Activity",
    description: "Immutable record of sensitive actions, failures, enforcement, and system changes.",
    primaryAction: "Export filtered audit",
    metrics: [
      { label: "Events today", value: "38", detail: "31 human · 7 system" },
      { label: "Failed attempts", value: "2", detail: "No state change", tone: "warning" },
      { label: "Partial results", value: "1", detail: "Enforcement pending", tone: "warning" },
      { label: "Last event", value: "4 min ago", detail: "Payment follow-up" },
    ],
    attentionTitle: "Review signals",
    attention: [
      { title: "Partial restriction enforcement", meta: "Atlas Education · correlation COR-8D21", status: "Partial", tone: "warning" },
      { title: "Failed salary reveal", meta: "Session required reauthentication", status: "Denied", tone: "neutral" },
    ],
    recentTitle: "Recent activity",
    recent: activity.map((item) => ({ title: item.action, meta: `${item.entity} · ${item.actor}`, value: item.time })),
  },
  settings: {
    eyebrow: "Governance",
    title: "Settings",
    description: "Company defaults, finance policy, reminders, dictionaries, integrations, security, and access preparation.",
    primaryAction: "Review setup",
    metrics: [
      { label: "Setup completeness", value: "76%", detail: "5 items remaining", tone: "info" },
      { label: "Connected services", value: "3 of 10", detail: "Demo adapters" },
      { label: "Security review", value: "Required", detail: "Before production", tone: "warning" },
      { label: "Default timezone", value: "Asia/Tashkent", detail: "UTC+05:00" },
    ],
    attentionTitle: "Setup decisions",
    attention: [
      { title: "Select reporting currency", meta: "Required for converted financial views", status: "Policy TBD", tone: "warning" },
      { title: "Configure identity and MFA", meta: "Mock states are ready · provider not selected", status: "Backend TBD", tone: "warning" },
      { title: "Review retention classes", meta: "Restricted HR and ownership records", status: "Legal review", tone: "warning" },
    ],
    recentTitle: "Configuration areas",
    recent: [
      { title: "General & localization", meta: "Company identity · locale · timezone", value: "Configured" },
      { title: "Finance", meta: "Currencies · fiscal year · categories", value: "Needs review" },
      { title: "Integrations", meta: "GitHub · Telegram · cloud · FX", value: "3 connected" },
    ],
  },
};
