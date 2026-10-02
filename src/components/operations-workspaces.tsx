"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { ArrowDownToLine, ArrowUpRight, BadgeAlert, Building2, Check, CircleAlert, FileCheck2, MessageSquareText, PackageCheck, Search, ShieldCheck, Upload, Users, WalletCards } from "lucide-react";
import { PageHeader, Panel, SectionHeader, StatusBadge } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import { centers, type Tone } from "@/lib/mock-data";

type WorkspaceKind = "debts" | "inventory" | "complaints" | "penalties" | "organization" | "worker-import" | "messages" | "payroll" | "people-activity" | "departments" | "usage";

const debtRows = [
  { center: "Northstar Academy", reference: "RCV-2026-018", amount: "1,250.00 USD", due: "Sep 21, 2026", status: "Overdue", tone: "danger" as Tone, days: "8 days overdue" },
  { center: "Helix School", reference: "RCV-2026-014", amount: "630.00 USD", due: "Sep 26, 2026", status: "Promise broken", tone: "warning" as Tone, days: "3 days overdue" },
  { center: "Atlas Education", reference: "RCV-2026-022", amount: "159.00 USD", due: "Oct 11, 2026", status: "Pending", tone: "pending" as Tone, days: "Due in 12 days" },
  { center: "Orion Learning Center", reference: "RCV-2026-027", amount: "199.00 USD", due: "Oct 20, 2026", status: "Scheduled", tone: "info" as Tone, days: "Due in 21 days" },
  { center: "Summit English Lab", reference: "RCV-2026-011", amount: "199.00 USD", due: "Sep 28, 2026", status: "Paid", tone: "success" as Tone, days: "Received Sep 28" },
];

const assetRows = [
  { sticker: "SF-CTR0018-0001", item: "Reception laptop", center: "Northstar Academy", location: "Main branch", assigned: "Reception", state: "In use", tone: "success" as Tone },
  { sticker: "SF-CTR0018-0002", item: "Projector · Epson EB-X06", center: "Northstar Academy", location: "Room 204", assigned: "Academic office", state: "In use", tone: "success" as Tone },
  { sticker: "SF-CTR0012-0007", item: "Teacher tablet", center: "Atlas Education", location: "Branch 2", assigned: "Unassigned", state: "Needs assignment", tone: "warning" as Tone },
  { sticker: "SF-CTR0021-0004", item: "Network access point", center: "Orion Learning Center", location: "Main branch", assigned: "IT operations", state: "Needs review", tone: "pending" as Tone },
];

const complaintRows = [
  { id: "CMP-1048", center: "Northstar Academy", subject: "Parent cannot see attendance messages", category: "Messaging", owner: "Aziza R.", age: "12 min ago", status: "New", tone: "danger" as Tone },
  { id: "CMP-1045", center: "Atlas Education", subject: "Teacher profile shows extra personal fields", category: "Privacy", owner: "Bekzod S.", age: "1 hour ago", status: "Investigating", tone: "warning" as Tone },
  { id: "CMP-1039", center: "Orion Learning Center", subject: "Student admission appears twice", category: "Admissions", owner: "Unassigned", age: "Yesterday", status: "Waiting", tone: "pending" as Tone },
];

const penaltyRows = [
  { id: "PNL-2208", center: "Northstar Academy", subject: "Late monthly subscription", amount: "25.00 USD", date: "Sep 21, 2026", status: "Review required", tone: "warning" as Tone },
  { id: "PNL-2204", center: "Atlas Education", subject: "Contractual service credit", amount: "15.00 USD", date: "Sep 17, 2026", status: "Draft", tone: "neutral" as Tone },
  { id: "PNL-2198", center: "Helix School", subject: "Late fee disputed by customer", amount: "12.60 USD", date: "Sep 12, 2026", status: "Disputed", tone: "danger" as Tone },
];

function WorkspaceHeading({ title, description, icon, action }: { title: string; description: string; icon: ReactNode; action?: ReactNode }) {
  const { t } = useLocale();
  return <header className="workspace-heading"><span className="workspace-heading-icon">{icon}</span><div><h1>{t(title)}</h1><p>{t(description)}</p></div>{action ? <div className="workspace-heading-action">{action}</div> : null}</header>;
}

function SearchFilter({ value, onChange, placeholder = "Search records" }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  const { t } = useLocale();
  return <div className="register-toolbar"><label className="register-search"><Search size={16} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={t(placeholder)} /></label></div>;
}

export function OperationsWorkspace({ kind }: { kind: WorkspaceKind }) {
  if (kind === "debts") return <DebtRegister />;
  if (kind === "inventory") return <InventoryRegister />;
  if (kind === "complaints") return <ComplaintRegister />;
  if (kind === "penalties") return <PenaltyRegister />;
  if (kind === "organization") return <OrganizationChart />;
  if (kind === "worker-import") return <WorkerImport />;
  if (kind === "messages") return <MessagesWorkspace />;
  if (kind === "payroll") return <PayrollWorkspace />;
  if (kind === "departments") return <DepartmentDirectory />;
  if (kind === "usage") return <UsageWorkspace />;
  return <PeopleActivity />;
}

function DebtRegister() {
  const { t } = useLocale();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All statuses");
  const rows = useMemo(() => debtRows.filter((row) => {
    const matchesSearch = `${row.center} ${row.reference}`.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = filter === "All statuses"
      || (filter === "Overdue" && ["Overdue", "Promise broken"].includes(row.status))
      || (filter === "Pending" && ["Pending", "Scheduled"].includes(row.status))
      || row.status === filter;
    return matchesSearch && matchesStatus;
  }), [filter, query]);
  return <div className="page-stack">
    <PageHeader eyebrow="Commercial · Receivables" title="Debt register" description="A separate view of customer balances, due dates, and collection status. No payment is taken from lesson screens." />
    <div className="metrics-grid"><Metric label="Open balance" value="2,238.00 USD" note="4 open receivables" tone="warning" /><Metric label="Overdue" value="1,880.00 USD" note="2 need follow-up" tone="danger" /><Metric label="Due next 30 days" value="358.00 USD" note="2 scheduled" /></div>
    <Panel><SectionHeader title="Receivables" meta="Customer subscription and service balances" /><SearchFilter value={query} onChange={setQuery} placeholder="Search center or reference" /><div className="filter-tabs" role="group" aria-label={t("Filter debt status")}>{["All statuses", "Overdue", "Pending", "Paid"].map((item) => <button key={item} className={filter === item ? "filter-tab filter-tab-active" : "filter-tab"} onClick={() => setFilter(item)}>{t(item)}</button>)}</div>
      <div className="table-scroll"><table className="data-table"><thead><tr><th>{t("Education center")}</th><th>{t("Reference")}</th><th>{t("Due date")}</th><th>{t("Balance")}</th><th>{t("Collection status")}</th></tr></thead><tbody>{rows.map((row) => <tr key={row.reference}><td><strong>{row.center}</strong><small>{t(row.days)}</small></td><td className="table-id">{row.reference}</td><td>{t(row.due)}</td><td className="money-cell">{row.amount}</td><td><StatusBadge tone={row.tone}>{row.status}</StatusBadge></td></tr>)}{!rows.length ? <tr><td colSpan={5} className="table-empty">{t("No receivables match this search.")}</td></tr> : null}</tbody></table></div>
    </Panel>
    <p className="prototype-footnote"><ShieldCheck size={15} />{t("Demo balances only. Payment posting is intentionally unavailable in this prototype.")}</p>
  </div>;
}

function InventoryRegister() {
  const { t } = useLocale();
  const [assets, setAssets] = useState(assetRows);
  const [query, setQuery] = useState("");
  const [assetName, setAssetName] = useState("");
  const [sticker, setSticker] = useState("");
  const [center, setCenter] = useState("Northstar Academy");
  const [created, setCreated] = useState(false);
  const [createError, setCreateError] = useState("");
  const rows = assets.filter((row) => `${row.sticker} ${row.item} ${row.center}`.toLowerCase().includes(query.toLowerCase()));
  const centerCode = centers.find((item) => item.name === center)?.code.replace("CTR-", "") ?? "";
  const stickerPattern = `SF-CTR${centerCode}-[0-9]{4}`;
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!assetName.trim()) { setCreateError("Enter an asset name."); setCreated(false); return; }
    if (!new RegExp(`^${stickerPattern}$`).test(sticker)) { setCreateError(`Use a sticker ID for this center, such as SF-CTR${centerCode}-0004.`); setCreated(false); return; }
    if (assets.some((asset) => asset.sticker === sticker)) { setCreateError("That sticker ID is already registered."); setCreated(false); return; }
    setCreateError("");
    setAssets((current) => [{ sticker, item: assetName.trim(), center, location: "To be assigned", assigned: "Unassigned", state: "Needs assignment", tone: "warning" as Tone }, ...current]);
    setCreated(true);
    setAssetName("");
    setSticker("");
  };
  return <div className="page-stack">
    <WorkspaceHeading title="Assets & inventory" description="Track equipment and shared resources for every education center by sticker ID." icon={<PackageCheck size={20} />} />
    <div className="metrics-grid"><Metric label="Registered assets" value="248" note="Across 18 centers" /><Metric label="Needs assignment" value="7" note="Review center custody" tone="warning" /><Metric label="Due for inspection" value="12" note="Next 30 days" tone="info" /></div>
    <Panel><SectionHeader title="Register an asset" meta="Sticker IDs use the selected center’s code and are unique across this register" />{created ? <p className="inline-success"><Check size={15} /> {t("Demo asset was added to this register.")}</p> : null}{createError ? <p className="field-error" role="alert">{t(createError.startsWith("Use a sticker ID") ? "Use a sticker ID for this center, such as " : createError)}{createError.startsWith("Use a sticker ID") ? `SF-CTR${centerCode}-0004.` : ""}</p> : null}<form className="asset-create-form" onSubmit={submit}><label className="form-field"><span>{t("Asset name")}</span><input className="form-control" required maxLength={100} value={assetName} onChange={(event) => setAssetName(event.target.value)} placeholder={t("e.g. Classroom projector")} /></label><label className="form-field"><span>{t("Sticker ID")}</span><input className="form-control" required maxLength={15} pattern={stickerPattern} title={`${t("Use an ID like SF-CTR")}${centerCode}-0004`} value={sticker} onChange={(event) => setSticker(event.target.value.toUpperCase())} placeholder={`SF-CTR${centerCode}-0004`} /></label><label className="form-field"><span>{t("Education center")}</span><select className="form-control" value={center} onChange={(event) => setCenter(event.target.value)}>{centers.map((item) => <option key={item.id}>{item.name}</option>)}</select></label><button className="button button-primary" type="submit">{t("Add to register")}</button></form></Panel>
    <Panel><SectionHeader title="Center asset register" meta={`${rows.length} ${t("assets shown")}`} /><SearchFilter value={query} onChange={setQuery} placeholder="Search sticker ID, asset, center" /><div className="table-scroll"><table className="data-table"><thead><tr><th>{t("Sticker ID")}</th><th>{t("Asset")}</th><th>{t("Center / location")}</th><th>{t("Custodian")}</th><th>{t("Status")}</th></tr></thead><tbody>{rows.map((row) => <tr key={row.sticker}><td className="table-id">{row.sticker}</td><td><strong>{row.item}</strong></td><td>{row.center}<small>{t(row.location)}</small></td><td>{t(row.assigned)}</td><td><StatusBadge tone={row.tone}>{row.state}</StatusBadge></td></tr>)}</tbody></table></div></Panel>
  </div>;
}

function ComplaintRegister() {
  const { t } = useLocale();
  const [rows, setRows] = useState(complaintRows);
  const [query, setQuery] = useState("");
  const [creating, setCreating] = useState(false);
  const [center, setCenter] = useState("Northstar Academy");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("Other");
  const [created, setCreated] = useState(false);
  const filtered = rows.filter((row) => `${row.id} ${row.center} ${row.subject} ${row.category}`.toLowerCase().includes(query.toLowerCase()));
  const resolve = (id: string) => setRows((current) => current.map((row) => row.id === id ? { ...row, status: "Resolved", tone: "success" as Tone } : row));
  const createComplaint = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = `CMP-${1050 + rows.length}`;
    setRows((current) => [{ id, center, subject: subject.trim(), category, owner: "Unassigned", age: "Just now", status: "New", tone: "warning" }, ...current]);
    setSubject("");
    setCreating(false);
    setCreated(true);
  };
  return <div className="page-stack"><WorkspaceHeading title="Customer complaints" description="Review complaints from education centers, assign an owner, and keep the resolution history attached." icon={<MessageSquareText size={20} />} action={<button className="button button-primary" onClick={() => setCreating((value) => !value)}>{t(creating ? "Cancel" : "Log complaint")}</button>} />
    <div className="metrics-grid"><Metric label="Open complaints" value={String(rows.filter((row) => row.status !== "Resolved").length)} note="Across 3 centers" tone="warning" /><Metric label="Needs first response" value={String(rows.filter((row) => row.status === "New").length)} note="Awaiting assignment" tone="danger" /><Metric label="Resolved this week" value={String(8 + rows.filter((row) => row.status === "Resolved").length - complaintRows.filter((row) => row.status === "Resolved").length)} note="Demo history" tone="success" /></div>
    {creating ? <Panel><SectionHeader title="Log a customer complaint" meta="Demo record · no message is sent" /><form className="asset-create-form complaint-create-form" onSubmit={createComplaint}><label className="form-field"><span>{t("Education center")}</span><select className="form-control" value={center} onChange={(event) => setCenter(event.target.value)}>{centers.map((item) => <option key={item.id}>{item.name}</option>)}</select></label><label className="form-field"><span>{t("Category")}</span><select className="form-control" value={category} onChange={(event) => setCategory(event.target.value)}>{["Other", "Privacy", "Messaging", "Admissions", "Billing", "Product access"].map((item) => <option key={item} value={item}>{t(item)}</option>)}</select></label><label className="form-field complaint-subject-field"><span>{t("Issue summary")}</span><input className="form-control" required minLength={4} maxLength={140} value={subject} onChange={(event) => setSubject(event.target.value)} placeholder={t("Describe the customer issue")} /></label><button type="submit" className="button button-primary">{t("Create complaint")}</button></form></Panel> : null}
    {created ? <p className="inline-success"><Check size={15} />{t("Complaint logged in this browser’s demo register.")}</p> : null}
    <Panel><SectionHeader title="Complaint queue" meta="Customer-reported issues and follow-up" /><SearchFilter value={query} onChange={setQuery} placeholder="Search ID, center, issue" /><div className="complaint-list">{filtered.map((row) => <article className="complaint-row" key={row.id}><div className="complaint-id">{row.id}<small>{t(row.category)}</small></div><div className="complaint-main"><strong>{t(row.subject)}</strong><span>{row.center} {t("· Owner:")} {t(row.owner)}</span></div><span className="complaint-age">{t(row.age)}</span><StatusBadge tone={row.tone}>{row.status}</StatusBadge>{row.status !== "Resolved" ? <button className="button button-secondary button-small" onClick={() => resolve(row.id)}>{t("Resolve")}</button> : <span className="inline-success"><Check size={14} />{t("Done")}</span>}</article>)}{!filtered.length ? <div className="table-empty">{t("No complaints match this search.")}</div> : null}</div></Panel>
    <p className="prototype-footnote"><CircleAlert size={15} />{t("Complaint actions update this browser’s demo state only.")}</p>
  </div>;
}

function PenaltyRegister() {
  const { locale, t } = useLocale();
  const [rows, setRows] = useState(penaltyRows);
  const [query, setQuery] = useState("");
  const [creating, setCreating] = useState(false);
  const [center, setCenter] = useState("Northstar Academy");
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const filtered = rows.filter((row) => `${row.id} ${row.center} ${row.subject}`.toLowerCase().includes(query.toLowerCase()));
  const markReviewed = (id: string) => setRows((current) => current.map((row) => row.id === id ? { ...row, status: "Reviewed", tone: "success" as Tone } : row));
  const createPenalty = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = `PNL-${2210 + rows.length}`;
    setRows((current) => [{ id, center, subject: subject.trim(), amount: `${Number(amount).toFixed(2)} USD`, date: new Date().toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", { month: "short", day: "numeric", year: "numeric" }), status: "Draft", tone: "info" }, ...current]);
    setSubject("");
    setAmount("");
    setCreating(false);
  };
  return <div className="page-stack"><WorkspaceHeading title="Penalties" description="Review proposed fines and contractual charges with a visible customer reason and dispute state." icon={<BadgeAlert size={20} />} action={<button className="button button-primary" onClick={() => setCreating((value) => !value)}>{t(creating ? "Cancel" : "Add penalty record")}</button>} />
    <div className="endpoint-notice"><ShieldCheck size={16} /><span>{t("Every penalty remains a draft until reviewed. Demo records do not charge a center or alter access.")}</span></div>
    {creating ? <Panel><SectionHeader title="Create a penalty draft" meta="Requires review before any customer action" /><form className="asset-create-form penalty-create-form" onSubmit={createPenalty}><label className="form-field"><span>{t("Education center")}</span><select className="form-control" value={center} onChange={(event) => setCenter(event.target.value)}>{centers.map((item) => <option key={item.id}>{item.name}</option>)}</select></label><label className="form-field"><span>{t("Reason")}</span><input className="form-control" required minLength={4} maxLength={120} value={subject} onChange={(event) => setSubject(event.target.value)} placeholder={t("Reason for this draft")} /></label><label className="form-field"><span>{t("Amount · USD")}</span><input className="form-control" required type="number" min="0.01" max="1000000" step="0.01" value={amount} onChange={(event) => setAmount(event.target.value)} /></label><button type="submit" className="button button-primary">{t("Save draft")}</button></form></Panel> : null}
    <Panel><SectionHeader title="Penalty register" meta="Amount, reason, and customer response stay linked" /><SearchFilter value={query} onChange={setQuery} /><div className="table-scroll"><table className="data-table"><thead><tr><th>{t("Reference / center")}</th><th>{t("Reason")}</th><th>{t("Amount")}</th><th>{t("Date")}</th><th>{t("Status")}</th><th>{t("Action")}</th></tr></thead><tbody>{filtered.map((row) => <tr key={row.id}><td className="table-id">{row.id}<small>{row.center}</small></td><td>{t(row.subject)}</td><td className="money-cell">{row.amount}</td><td>{t(row.date)}</td><td><StatusBadge tone={row.tone}>{row.status}</StatusBadge></td><td>{row.status !== "Reviewed" ? <button className="text-button" onClick={() => markReviewed(row.id)}>{t("Review record")} <ArrowUpRight size={14} /></button> : <span className="inline-success"><Check size={14} />{t("Reviewed")}</span>}</td></tr>)}</tbody></table></div></Panel>
  </div>;
}

function OrganizationChart() {
  const { t } = useLocale();
  return <div className="page-stack"><WorkspaceHeading title="Organization chart" description="See reporting lines and academic departments across Starforge and all connected education centers." icon={<Building2 size={20} />} />
    <Panel><SectionHeader title="Starforge · all centers" meta="Demo reporting structure · 18 education centers" /><div className="org-chart"><OrgNode name="Starforge Platform" detail="Owner · Global policy" tone="org-root" /><div className="org-branches"><div className="org-branch"><OrgNode name="Education Centers" detail="Customer operations · 18 centers" /><div className="org-children"><OrgNode name="Center leadership" detail="CEO · Branch managers" /><OrgNode name="Academic departments" detail="English · IELTS · General studies" /><OrgNode name="Teaching teams" detail="Teachers · Groups · Lessons" /></div></div><div className="org-branch"><OrgNode name="Company Operations" detail="Internal Starforge teams" /><div className="org-children"><OrgNode name="Customer Success" detail="Complaints · Onboarding" /><OrgNode name="Finance & HR" detail="Receivables · Payroll · People" /><OrgNode name="Engineering" detail="Products · Infrastructure" /></div></div></div></div></Panel>
    <div className="endpoint-notice"><Users size={16} /><span>{t("Center-specific names and reporting lines are illustrative until organization data is connected.")}</span></div>
  </div>;
}

function OrgNode({ name, detail, tone }: { name: string; detail: string; tone?: string }) {
  const { t } = useLocale();
  return <div className={`org-node${tone ? ` ${tone}` : ""}`}><strong>{t(name)}</strong><span>{t(detail)}</span></div>;
}

function DepartmentDirectory() {
  const { t } = useLocale();
  const departments = [
    { name: "English Language", centers: 16, lead: "Academic operations", status: "Active", tone: "success" as Tone },
    { name: "IELTS Preparation", centers: 12, lead: "Exam programs", status: "Active", tone: "success" as Tone },
    { name: "General Studies", centers: 9, lead: "Center leadership", status: "Review required", tone: "warning" as Tone },
    { name: "Mathematics", centers: 7, lead: "Academic operations", status: "Active", tone: "success" as Tone },
  ];
  return <div className="page-stack"><WorkspaceHeading title="Academic departments" description="Manage center department definitions and ownership. Group creation does not require a department." icon={<Users size={20} />} />
    <Panel><SectionHeader title="Department directory" meta="Shared definitions across customer workspaces" /><div className="table-scroll"><table className="data-table"><thead><tr><th>{t("Department")}</th><th>{t("Centers using it")}</th><th>{t("Owner group")}</th><th>{t("Status")}</th></tr></thead><tbody>{departments.map((department) => <tr key={department.name}><td><strong>{t(department.name)}</strong></td><td>{department.centers}</td><td>{t(department.lead)}</td><td><StatusBadge tone={department.tone}>{department.status}</StatusBadge></td></tr>)}</tbody></table></div></Panel>
    <p className="prototype-footnote"><Building2 size={15} />{t("Department definitions are separate from automatic student group creation.")}</p>
  </div>;
}

function UsageWorkspace() {
  const { t } = useLocale();
  const [center, setCenter] = useState("All centers");
  const [accounts, setAccounts] = useState([
    { id: "USR-0031", center: "Northstar Academy", role: "Teacher", products: "Staff Web · Staff Mobile", active: "Active", lastSeen: "4 min ago", tone: "success" as Tone },
    { id: "USR-0032", center: "Northstar Academy", role: "Center administrator", products: "CEO Web", active: "Active", lastSeen: "18 min ago", tone: "success" as Tone },
    { id: "USR-0068", center: "Atlas Education", role: "Finance", products: "CEO Web", active: "Active", lastSeen: "32 min ago", tone: "success" as Tone },
    { id: "USR-0082", center: "Atlas Education", role: "Teacher", products: "Staff Mobile", active: "Access review", lastSeen: "2 days ago", tone: "warning" as Tone },
    { id: "USR-0093", center: "Orion Learning Center", role: "Center administrator", products: "CEO Web · Staff Web", active: "Active", lastSeen: "11 min ago", tone: "success" as Tone },
  ]);
  const visible = center === "All centers" ? accounts : accounts.filter((account) => account.center === center);
  const toggleAccess = (accountId: string) => {
    const target = accounts.find((account) => account.id === accountId);
    if (!target) return;
    if (target.active !== "Revoked" && !window.confirm(`${t("Revoke product access for ")}${target.id}${t(" at ")}${target.center}${t("? This changes demo state only.")}`)) return;
    setAccounts((current) => current.map((account) => account.id !== accountId ? account : account.active === "Revoked" ? { ...account, active: "Active", tone: "success" as Tone } : { ...account, active: "Revoked", tone: "danger" as Tone }));
  };
  return <div className="page-stack"><WorkspaceHeading title="Usage & access" description="See who uses each center’s licensed products, account status, and recent activity without exposing student identity data." icon={<Users size={20} />} action={<label className="org-scope-picker">{t("Education center")}<select className="form-control" value={center} onChange={(event) => setCenter(event.target.value)}><option value="All centers">{t("All centers")}</option>{centers.map((item) => <option key={item.id}>{item.name}</option>)}</select></label>} />
    <div className="metrics-grid"><Metric label="Monthly active accounts" value="416" note="Across 18 centers" tone="success" /><Metric label="Licensed seats in use" value="78%" note="1,284 of 1,640" /><Metric label="Access reviews" value="4" note="No automatic changes" tone="warning" /><Metric label="Student personal data" value="Restricted" note="Teacher roles see scoped fields" tone="info" /></div>
    <Panel><SectionHeader title="Center accounts" meta="Synthetic IDs · no student names or contact details" /><div className="table-scroll"><table className="data-table"><thead><tr><th>{t("Account ID")}</th><th>{t("Center")}</th><th>{t("Role")}</th><th>{t("Licensed products")}</th><th>{t("Last activity")}</th><th>{t("Access")}</th><th>{t("Action")}</th></tr></thead><tbody>{visible.map((account) => <tr key={account.id}><td className="table-id">{account.id}</td><td>{account.center}</td><td>{t(account.role)}</td><td>{account.products}</td><td>{t(account.lastSeen)}</td><td><StatusBadge tone={account.tone}>{account.active}</StatusBadge></td><td><button className="text-button" onClick={() => toggleAccess(account.id)}>{t(account.active === "Revoked" ? "Restore access" : "Revoke access")}</button></td></tr>)}</tbody></table></div></Panel>
    <Panel><SectionHeader title="Recent product activity" meta="Actions grouped by center and role; personal student records are omitted" /><div className="activity-feed"><ActivityEntry center="Northstar Academy" role="Teacher account" action="Recorded lesson attendance" time="4 min ago" /><ActivityEntry center="Atlas Education" role="Finance account" action="Reviewed a pending lesson balance" time="32 min ago" /><ActivityEntry center="Orion Learning Center" role="Center administrator" action="Updated a group schedule" time="1 hour ago" /></div></Panel>
    <div className="endpoint-notice"><ShieldCheck size={16} /><span>{t("Account IDs and usage totals are demo data. Production access lists and event streams must be returned by permission-scoped backend APIs.")}</span></div>
  </div>;
}

function ActivityEntry({ center, role, action, time }: { center: string; role: string; action: string; time: string }) {
  const { t } = useLocale();
  return <article className="activity-entry"><span className="activity-entry-mark" /><div><strong>{t(action)}</strong><span>{center} · {t(role)}</span></div><time>{t(time)}</time></article>;
}

type ImportResult = { fileName: string; rows: number; valid: number; errors: Array<{ line: number; issue: string; value: string }>; issues: number; duplicates: number };

function parseCsv(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  let closedQuote = false;
  const appendRow = () => {
    row.push(cell.trim());
    if (row.some((value) => value.length > 0)) rows.push(row);
    if (rows.length > 10001) throw new Error("CSV has more than 10,000 data rows. Split the file and retry.");
    row = [];
    cell = "";
    closedQuote = false;
  };

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted) {
      if (character === '"' && text[index + 1] === '"') { cell += '"'; index += 1; }
      else if (character === '"') { quoted = false; closedQuote = true; }
      else cell += character;
    } else if (character === '"') {
      if (cell.length > 0 || closedQuote) throw new Error("CSV contains malformed quotation marks.");
      quoted = true;
    } else if (character === ",") {
      row.push(cell.trim());
      cell = "";
      closedQuote = false;
    } else if (character === "\n" || character === "\r") {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      appendRow();
    } else if (closedQuote && /\S/.test(character)) {
      throw new Error("CSV contains malformed quotation marks.");
    } else if (!closedQuote) cell += character;
  }

  if (quoted) throw new Error("CSV contains an unclosed quoted field.");
  if (cell.length > 0 || row.length > 0 || closedQuote) appendRow();
  return rows;
}

function WorkerImport() {
  const { t } = useLocale();
  const [result, setResult] = useState<ImportResult | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [imported, setImported] = useState(false);
  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setResult(null);
    setImported(false);
    setError("");
    if (!file.name.toLowerCase().endsWith(".csv")) { setError("Choose a CSV file exported as UTF-8."); return; }
    if (file.size > 5 * 1024 * 1024) { setError("This preflight accepts files up to 5 MB. Split the file and retry."); return; }
    setBusy(true);
    try {
      const text = (await file.text()).replace(/^\uFEFF/, "");
      const rows = parseCsv(text);
      if (rows.length < 2) { setError("The CSV needs a header row and at least one worker row."); return; }
      const headers = rows[0].map((header) => header.toLowerCase());
      const emailIndex = headers.findIndex((header) => ["email", "e-mail", "work email"].includes(header));
      const phoneIndex = headers.findIndex((header) => ["phone", "phone number", "mobile"].includes(header));
      const nameIndex = headers.findIndex((header) => ["name", "full name", "employee name"].includes(header));
      const missingHeaders = [nameIndex < 0 ? "name" : "", emailIndex < 0 ? "email" : "", phoneIndex < 0 ? "phone" : ""].filter(Boolean);
      if (missingHeaders.length) {
        setResult({ fileName: file.name, rows: rows.length - 1, valid: 0, errors: [{ line: 1, issue: `Missing required columns: ${missingHeaders.join(", ")}`, value: "CSV header" }], issues: 1, duplicates: 0 });
        return;
      }
      const lineErrors: ImportResult["errors"] = [];
      const seenEmails = new Set<string>();
      let valid = 0;
      let issues = 0;
      let duplicates = 0;
      for (const [index, cells] of rows.slice(1).entries()) {
        const name = cells[nameIndex] ?? "";
        const email = (cells[emailIndex] ?? "").toLowerCase();
        const phone = cells[phoneIndex] ?? "";
        let issue = "";
        if (!name) issue = "Worker name is required";
        else if (!email) issue = "Worker email is required";
        else if (email.length > 254 || !/^(?!.*\.\.)[A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,63}$/i.test(email)) issue = "Email format is invalid";
        else if (!phone) issue = "Worker phone number is required";
        else if (!/^\+?[1-9]\d{7,14}$/.test(phone.replace(/[ ()-]/g, ""))) issue = "Phone number is invalid";
        else if (seenEmails.has(email)) { issue = "Duplicate email in this file"; duplicates += 1; }
        if (email) seenEmails.add(email);
        if (issue) {
          issues += 1;
          if (lineErrors.length < 100) lineErrors.push({ line: index + 2, issue, value: email || name || `Row ${index + 2}` });
        } else valid += 1;
      }
      setResult({ fileName: file.name, rows: rows.length - 1, valid, errors: lineErrors, issues, duplicates });
    } catch (error) {
      setError(error instanceof Error && error.message.startsWith("CSV ") ? error.message : "The CSV could not be read. Re-export it as a UTF-8 CSV and retry.");
    } finally {
      setBusy(false);
    }
  };
  return <div className="page-stack"><WorkspaceHeading title="Import workers" description="Run a bounded preflight for CSV structure, duplicate accounts, email, and international phone formats before import." icon={<Upload size={20} />} />
    <div className="endpoint-notice"><ShieldCheck size={16} /><span>{t("Preflight does not upload or create employee records. Files are parsed in this browser; no file contents are sent to a server.")}</span></div>
    <Panel><SectionHeader title="Upload a worker CSV" meta="UTF-8 CSV · up to 5 MB · 10,000 rows per preflight" /><label className={`import-dropzone${busy ? " import-dropzone-busy" : ""}`}><input type="file" accept=".csv,text/csv" onChange={handleFile} disabled={busy} /><span className="import-icon"><Upload size={21} /></span><strong>{t(busy ? "Checking rows…" : "Choose a CSV file")}</strong><small>{t("Expected columns include name, email, and phone. Files stay in this browser.")}</small><span className="button button-secondary"><ArrowDownToLine size={15} />{t("Select file")}</span></label>{error ? <p role="alert" className="field-error"><CircleAlert size={15} />{t(error)}</p> : null}</Panel>
    {result ? <Panel><SectionHeader title="Preflight results" meta={result.fileName} /><div className="import-summary"><Metric label="Rows checked" value={String(result.rows)} note="All non-empty data rows" /><Metric label="Ready" value={String(result.valid)} note="Pass basic checks" tone="success" /><Metric label="Issues" value={String(result.issues)} note="Review before import" tone={result.issues ? "warning" : "success"} /><Metric label="Duplicates" value={String(result.duplicates)} note="Email repeated in file" tone={result.duplicates ? "danger" : undefined} /></div>{result.errors.length ? <div className="table-scroll"><table className="data-table"><thead><tr><th>{t("CSV row")}</th><th>{t("Record")}</th><th>{t("Issue")}</th></tr></thead><tbody>{result.errors.map((item) => <tr key={`${item.line}-${item.issue}`}><td>{item.line}</td><td>{item.value}</td><td><StatusBadge tone="warning">{item.issue}</StatusBadge></td></tr>)}</tbody></table></div> : <p className="inline-success"><Check size={15} />{t("No format or duplicate issues found in the preflight.")}</p>}{result.issues > result.errors.length ? <p className="prototype-footnote">{t("Showing the first ")}{result.errors.length}{t(" of ")}{result.issues}{t(" issues. Every row was checked.")}</p> : null}{imported ? <p className="inline-success"><Check size={15} />{t("Import simulation completed for ")}{result.valid}{t(" workers. No server records were created.")}</p> : <button className="button button-primary" disabled={result.issues > 0 || result.valid === 0} onClick={() => setImported(true)}>{t("Simulate import of ")}{result.valid}{t(" workers")}</button>}</Panel> : null}
  </div>;
}

function MessagesWorkspace() {
  const [selected, setSelected] = useState("Lesson status update");
  const [preview, setPreview] = useState(true);
  const { t } = useLocale();
  const messages = ["Lesson status update", "Payment reminder", "Complaint received"];
  return <div className="page-stack"><WorkspaceHeading title="Messages" description="Review template delivery, preview substitutions, and check the configured WhatsApp channel." icon={<MessageSquareText size={20} />} />
    <Panel><SectionHeader title="Message navigation" meta="Approved center templates" /><div className="message-workspace"><nav className="message-list" aria-label={t("Message templates")}>{messages.map((message) => <button key={message} className={selected === message ? "message-list-item message-list-item-active" : "message-list-item"} onClick={() => setSelected(message)}><MessageSquareText size={16} /><span>{t(message)}</span><StatusBadge tone="success">Ready</StatusBadge></button>)}</nav><section className="message-detail"><div className="message-detail-heading"><div><h2>{t(selected)}</h2><p>{t("Channel: WhatsApp · Language follows the center’s configured locale")}</p></div><button className="button button-secondary button-small" onClick={() => setPreview((value) => !value)}>{t(preview ? "Hide preview" : "Show preview")}</button></div>{preview ? <div className="message-preview message-preview-wide"><div className="message-preview-head"><strong>{t("Parent · Northstar Academy")}</strong><span>{t("WhatsApp preview")}</span></div><p>{selected === "Lesson status update" ? "Assalomu alaykum, Dilnoza opa! Madina uchun dars kutilmoqda." : selected === "Payment reminder" ? "Assalomu alaykum, Dilnoza opa. To‘lov holatini ko‘rib chiqishingizni so‘raymiz." : "Murojaatingiz qabul qilindi. Jamoamiz tez orada aloqaga chiqadi."}</p><small>{t("Preview only · no message sent")}</small></div> : null}<div className="endpoint-notice"><CircleAlert size={16} /><span>{t("Provider status is demo. A real WhatsApp provider connection is required to send.")}</span></div></section></div></Panel>
  </div>;
}

function PayrollWorkspace() {
  const { locale } = useLocale();
  const labels = locale === "ru" ? {
    title: "Зарплата", body: "Краткий обзор выплат сотрудникам.", paid: "Выплачено", pending: "Ожидает", period: "Период", employee: "Сотрудник", amount: "Сумма", status: "Статус", month: "Сентябрь 2026", pendingCount: "Ожидают 3 выплаты", academicOps: "Учебный отдел", customerSupport: "Служба поддержки клиентов", tableTitle: "Выплаты сотрудникам", tableMeta: "Понятные статусы и периоды", periodRange: "1–30 сентября", timezone: "Азия/Ташкент", footer: "Язык применяется ко всей панели. Суммы демонстрационные.",
  } : {
    title: "Salary", body: "A simple overview of employee payments.", paid: "Paid", pending: "Pending", period: "Period", employee: "Employee", amount: "Amount", status: "Status", month: "September 2026", pendingCount: "3 payroll items", academicOps: "Academic operations", customerSupport: "Customer support", tableTitle: "Employee payments", tableMeta: "Clear statuses and periods", periodRange: "Sep 1–30", timezone: "Asia/Tashkent", footer: "Language applies throughout the control panel. Salary amounts are synthetic.",
  };
  return <div className="page-stack" lang={locale}><WorkspaceHeading title={labels.title} description={labels.body} icon={<WalletCards size={20} />} />
    <div className="metrics-grid"><Metric label={labels.paid} value="42,800,000 UZS" note={labels.month} tone="success" /><Metric label={labels.pending} value="6,400,000 UZS" note={labels.pendingCount} tone="warning" /><Metric label={labels.period} value={labels.periodRange} note={labels.timezone} /></div>
    <Panel><SectionHeader title={labels.tableTitle} meta={labels.tableMeta} /><div className="table-scroll"><table className="data-table"><thead><tr><th>{labels.employee}</th><th>{labels.period}</th><th>{labels.amount}</th><th>{labels.status}</th></tr></thead><tbody><tr><td><strong>Aziza Rahimova</strong><small>{labels.academicOps}</small></td><td>{labels.month}</td><td className="money-cell">8,200,000 UZS</td><td><StatusBadge tone="success">{labels.paid}</StatusBadge></td></tr><tr><td><strong>Bekzod Saidov</strong><small>{labels.customerSupport}</small></td><td>{labels.month}</td><td className="money-cell">7,600,000 UZS</td><td><StatusBadge tone="warning">{labels.pending}</StatusBadge></td></tr></tbody></table></div></Panel>
    <p className="prototype-footnote"><FileCheck2 size={15} />{labels.footer}</p>
  </div>;
}

function PeopleActivity() {
  const { t } = useLocale();
  const events = [{ time: "10:42", actor: "Aziza Rahimova", action: "Imported 12 worker records", detail: "Northstar Academy · 10 accepted · 2 need review", tone: "info" as Tone }, { time: "09:18", actor: "Bekzod Saidov", action: "Updated payroll period", detail: "September 2026 · Finance & HR", tone: "success" as Tone }, { time: "Yesterday", actor: "System", action: "Employment agreement generated", detail: "Orion Learning Center · Draft", tone: "neutral" as Tone }];
  return <div className="page-stack"><WorkspaceHeading title="HR activity" description="Employee imports, payroll changes, and HR document events are grouped with People & HR." icon={<Users size={20} />} /><Panel><SectionHeader title="People timeline" meta="HR-scoped activity · demo data" /><div className="timeline-list">{events.map((event) => <article className="timeline-row" key={event.action}><span className={`timeline-marker timeline-marker-${event.tone}`} /><time>{t(event.time)}</time><div><strong>{t(event.action)}</strong><span>{t(event.detail)}</span><small>{t("By ")}{event.actor}</small></div><StatusBadge tone={event.tone}>{event.tone === "success" ? "Complete" : event.tone === "info" ? "Review" : "Recorded"}</StatusBadge></article>)}</div></Panel></div>;
}

function Metric({ label, value, note, tone }: { label: string; value: string; note: string; tone?: Tone }) {
  const { t } = useLocale();
  return <article className={`metric-card${tone ? ` metric-${tone}` : ""}`}><p>{t(label)}</p><strong>{t(value)}</strong><span>{t(note)}</span></article>;
}
