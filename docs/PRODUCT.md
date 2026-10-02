# Starforge Control Panel — Frontend Product & Delivery Specification

<!-- impeccable:product-schema 1 -->

> Status: planning source of truth for product behavior and frontend delivery. This document specifies the product, UX requirements, information architecture, frontend behavior, and recommended Next.js implementation. The companion `DESIGN.md` is the source of truth for visual design and screen composition. Backend implementation and final API contracts will be designed separately.

## Platform

web

## Stack

- Next.js with TypeScript, using the App Router.
- Frontend-only scope for this phase; all backend contracts are provisional adapters and must remain replaceable.
- Responsive authenticated application for desktop, tablet, and mobile web.

## Users

- Primary user: the Starforge founder/owner, operating the whole Starforge business from one private control panel.
- The product should be structurally ready for future delegated access by finance, support, HR, operations, or engineering staff, but the first version must optimize for one owner with complete visibility.
- Education-center employees, students, parents, and center CEOs do not use this control panel. They use their own Starforge products.

## Product Purpose

Create one private command center for running Starforge as a company and as a multi-product education SaaS platform. The owner must be able to understand the state of the business, onboard and license education centers, control access to individual Starforge applications, configure each customer, operate support, track revenue and expenses, manage employees and company ownership, and supervise infrastructure without moving between disconnected spreadsheets and tools.

Success means the owner can answer, quickly and confidently:

- Which education centers are active, testing, overdue, blocked, or at risk?
- What plan, negotiated terms, licensed apps, limits, and configuration does each center have?
- Who owes Starforge money, when should it be collected, what was paid, and in which currency?
- What must Starforge pay this month, what was purchased, and how is the business performing?
- Which employees, salaries, contracts, shareholders, ownership percentages, and company obligations are current?
- Which support tickets need attention?
- Which servers, providers, domains, bots, repositories, environments, and deployments belong to each product or customer?
- What can be disabled safely: a whole center, one application, one capability, AI access, or a specific deployment?

## Positioning

This is not a generic admin template and not the education center CEO console. It is Starforge's internal operating system: customer commercial truth, product licensing, finance, people, support, infrastructure, and company governance connected around the same education-center and product records.

## Operating Context

- The owner uses the product throughout the day for quick checks, detailed administrative work, payment collection, support follow-up, hiring, expense entry, and infrastructure oversight.
- The product holds operationally and financially sensitive information. Consequential actions require explicit targeting, review, confirmation, and an audit-friendly result.
- Education centers may run different combinations of CEO Web/Mobile, Staff Web/Mobile, Family Mobile, Starforge IELTS Desktop, Starforge Writer, AI capabilities, and custom/on-premise services.
- Customer agreements can use any currency and may differ from public list pricing after negotiation.
- Some centers are in a test/trial or onboarding stage before becoming active customers.
- Starforge incurs recurring and one-time expenses, including infrastructure, providers, domains, bots, equipment, software, salaries, and other purchases.
- Starforge may employ staff, issue employment contracts, record compensation, and maintain company ownership percentages and founding records.
- Product source code spans multiple GitHub repositories that should be cataloged and connected to products, owners, environments, and deployments.

## Capabilities and Constraints

### Confirmed customer and licensing scope

- Manually add and maintain education centers and contacts.
- Record public or custom-negotiated plans, prices, billing cadence, currency, payment start date, due dates, trial/test periods, renewal, and contract terms.
- License or lock an entire center, a single Starforge application, or configurable capabilities such as AI.
- Inspect customer branches, usage, limits, domains, environments, deployed bots, infrastructure, support history, payments, and contracts.
- Support cloud and on-premise deployments and track the extra tasks, assets, credentials references, renewals, and maintenance obligations involved.
- Generate reminders for collections, renewals, trial expiry, contracts, domains, servers, providers, and other recurring obligations.

### Confirmed Starforge business scope

- Multi-currency revenue, receivables, expenses, purchases, recurring obligations, cash-flow views, and monthly reporting.
- Support ticket intake, prioritization, assignment, communication history, SLA/target dates, and resolution records.
- Employee hiring/onboarding, employment status, department/role, salary and compensation history, contracts, company assets, and offboarding.
- Generate contract documents from templates, preview them, preserve versions, and export/download PDF and Word-compatible DOCX files.
- Maintain founders, shareholders/percentage holders, ownership percentages, share history, supporting documents, and company founding/legal profile.
- Catalog GitHub repositories and connect them to products, owners, environments, deployments, incidents, and documentation.
- Catalog servers, hosting/cloud providers, domains, certificates, Telegram bots, integrations, credentials references, costs, renewal dates, and health/status metadata.

### Product family and current public plans

- CEO Web and CEO Mobile.
- Staff Web and Staff Mobile.
- Family Mobile.
- Starforge IELTS Desktop, currently described publicly as coming soon.
- Starforge Writer Desktop.
- Public monthly plan references from the landing page: Basic USD 89, Pro USD 159, and Max USD 199 per education center. Customer-specific negotiated pricing must remain separate from public list pricing.

### Frontend-only delivery boundary

- Backend implementation is explicitly out of scope for this phase.
- The frontend must use a typed API boundary, mock service layer, realistic fixtures, and documented request/response assumptions so a later backend can replace mocks without rewriting pages.
- UI must never pretend that a mock mutation is a real production action. Development/demo data must be visibly labeled.
- Secrets such as server passwords, private keys, provider tokens, bot tokens, and GitHub tokens must never be placed in frontend code, fixtures, browser storage, URLs, telemetry, or error logs. The UI may display masked references and secret-management status only.
- Legal, employment, tax, accounting, and equity records require professional validation before production use; the frontend must preserve uncertainty and approval status rather than imply legal correctness.

## Design Ownership

- Visual direction is fixed as **Orbital Ledger** and is fully specified in the companion `DESIGN.md`.
- `DESIGN.md` owns styling, typography, color, spacing, component appearance, application shell, responsive transformations, interaction patterns, and page composition.
- This product specification owns what information and actions the product needs, how business states behave, and the safety, accessibility, responsive, and performance constraints the finished interface must satisfy.
- A design change that alters information hierarchy, workflow safety, accessibility, or product behavior requires a recorded product decision rather than an undocumented implementation choice.
- Product copy should remain direct, calm, trustworthy, and technically clear.

## Evidence on Hand

- Current backend and platform-control contracts: `/home/cosmic/Projects/up_starforge_edu`.
- Landing-page product, plans, and product-family truth: `/home/cosmic/Projects/starforge_landing_page`.
- Existing Starforge applications may be inspected by implementers for brand context: `/home/cosmic/Projects/starforge_ceo_web`.
- Staff web and mobile product references: `/home/cosmic/Projects/starforge_staff_web` and `/home/cosmic/Projects/starforge_staff_mobile`.
- Desktop product references: `/home/cosmic/Projects/starforge_ielts_desktop` and `/home/cosmic/Projects/writer`.
- The current backend already exposes foundational platform concepts for centers, subscriptions, trials, usage, domains, suspension, and auditing, but its seeded plan catalog conflicts with the newer landing-page prices and it does not yet provide the complete business-control domain described here.
- No approved production customer data, employee data, shareholder records, legal templates, server secrets, or GitHub credentials are provided. Frontend fixtures must be synthetic and clearly labeled.

## Product Principles

1. One connected company truth, not a collection of unrelated admin pages.
2. Deadlines and exceptions should find the owner before the owner has to search for them.
3. Every consequential action names its target, impact, reason, and resulting state.
4. Commercial history is immutable evidence: never overwrite negotiated prices, salaries, contracts, ownership changes, or payment records without preserving versions.
5. Dense information must remain calm, scannable, responsive, and accessible.
6. Backend truth and security boundaries remain authoritative when integration begins.

## Accessibility & Inclusion

- Meet WCAG 2.2 AA for the implemented frontend.
- Full keyboard operation, visible focus, semantic landmarks/tables/forms, screen-reader names, non-color status cues, reduced-motion support, and robust zoom/text scaling.
- Minimum 44px touch targets on mobile-width layouts.
- Responsive behavior must transform complex tables into task-appropriate cards, summaries, or focused detail views rather than shrinking desktop tables until unreadable.
- Money, date, number, timezone, and locale formatting must be explicit and consistent. Multi-currency records must never rely on color or symbol alone to identify currency.

---

# 1. Document Purpose and Delivery Status

This document is the product-requirements, UX-behavior, information-architecture, and frontend-engineering specification for the **Starforge Control Panel**. It is paired with `DESIGN.md`, which prescribes the visual system and screen composition. Together they allow a frontend team to:

1. Understand what is being built and why.
2. Design every major screen without inventing business behavior.
3. Build a high-fidelity Next.js frontend against realistic mock adapters.
4. Keep all backend-dependent behavior behind explicit interfaces.
5. Hand the finished frontend to a future backend team with a clear integration contract.

## 1.1 Status

| Area | Status | Meaning |
|---|---|---|
| Product scope | Confirmed at planning level | Includes every capability requested by the founder |
| Information architecture | Recommended and ready for design | Changes should be documented before routes are renamed |
| Visual design | Specified | `DESIGN.md` defines the Orbital Ledger direction, tokens, shell, components, responsive behavior, and screen blueprints |
| Frontend stack | Recommended | Pin exact patch versions at project initialization |
| Backend API | Not selected | All API paths and DTOs in this document are provisional |
| Accounting/legal rules | Product scaffolding only | A qualified accountant/lawyer must validate jurisdiction-specific behavior |
| Document generation | Frontend experience specified | Authoritative rendering/signing/storage requires backend services later |
| Integrations | Adapter-ready | GitHub, Telegram, email, cloud, FX, AI, and e-sign providers remain selectable |

## 1.2 How the Team Should Use This File

- Product and design should treat sections 1–27 as the source of truth for scope and interaction behavior.
- Frontend engineers should treat sections 28–36 as the source of truth for architecture and quality.
- Backend engineers should later use sections 19, 25, 27, 32, 33, 37, and 40 as the starting contract—not as a finalized database schema.
- All implementers should treat `DESIGN.md` as the source of truth for visual decisions, layout, components, interaction behavior, and responsive transformation.
- Any deliberately deferred item must remain visibly labeled **Backend TBD**, **Policy TBD**, or **Legal review required** in tickets and mock screens.
- Do not silently simplify money, licensing, permissions, employment, equity, or suspension behavior.

## 1.3 Product Boundary

This project is the internal owner control panel. It is not:

- The public Starforge marketing/landing site.
- The CEO Web product used by an education center.
- A replacement for Staff Web, Staff Mobile, CEO Mobile, Family Mobile, IELTS Desktop, or Writer Desktop.
- A student tuition collection interface.
- A public customer self-service portal in version one.
- A complete accounting, payroll, legal-signature, cloud-management, or Git-hosting platform.

It may summarize and control those systems through future integrations, but its job is to provide a reliable operating layer above them.

---

# 2. Executive Product Summary

Starforge Control Panel is the private operating system for the Starforge company. It brings commercial operations, customer control, finance, people, support, infrastructure, software assets, and governance into one coherent workspace.

The product must answer seven questions immediately:

1. **What needs my attention today?**
2. **Which education centers are healthy, at risk, overdue, in trial, or blocked?**
3. **What money came in, what money must be collected, and what money is going out?**
4. **What did Starforge promise each customer, and what products are they allowed to use?**
5. **What company obligations—contracts, salaries, renewals, domains, servers, and vendor bills—are approaching?**
6. **What is happening across employees, support, infrastructure, repositories, deployments, and incidents?**
7. **Who changed something sensitive, when, why, and what was the previous state?**

The first version is optimized for a single founder/operator. Its information architecture and data boundaries must, however, be ready for future controlled delegation to finance, support, HR, and technical staff.

## 2.1 Product Name

Working product name: **Starforge Control Panel**

The internal product title is **Starforge Control Panel**. The visual direction is **Orbital Ledger**, defined in `DESIGN.md`. Any later rename or brand-direction change must be recorded as a product decision because it affects navigation, copy, assets, and implementation tokens.

## 2.2 Primary Outcomes

- No payment collection date, salary obligation, contract expiry, domain renewal, server bill, or follow-up should be forgotten.
- The owner can find the complete commercial and operational story of any education center from one record.
- The owner can suspend an entire center or restrict one Starforge product through a deliberate, auditable flow.
- Every transaction remains understandable in its original currency.
- Every negotiated plan preserves what was sold at the time, even when the public price book changes later.
- Expenses and purchases produce a trustworthy monthly business view.
- Hiring, salary history, employment documents, and company ownership records are organized without exposing sensitive information unnecessarily.
- Operational assets—servers, providers, domains, bots, deployments, and repositories—are connected to the customers and products they serve.

## 2.3 Success Measures

Until real analytics exist, use these as acceptance targets:

| Goal | Product measure |
|---|---|
| Daily clarity | Owner can identify all overdue and due-soon obligations from the opening screen in under 30 seconds |
| Customer control | Any center, branch, plan, license, payment, contract, ticket, and infrastructure link is reachable within three navigation actions |
| Payment discipline | Every active commercial agreement can have an explicit next collection date or a documented reason why it does not |
| Safe restriction | No center or app can be blocked without target, scope, timing, reason, impact preview, and confirmation |
| Financial legibility | Monthly inflows/outflows can be viewed by original currency and optionally in one configured reporting currency |
| Auditability | Every sensitive mutation has actor, time, reason, before/after summary, correlation ID, and linked entity |
| Responsive utility | Urgent review and common update tasks remain usable from a phone without desktop-only tables |
| Accessibility | All critical flows work by keyboard, expose meaningful screen-reader labels, and meet WCAG 2.2 AA targets |

---

# 3. Confirmed Scope, Assumptions, and Open Policies

## 3.1 Confirmed by the Founder

- The founder will be the sole initial operator.
- The control panel should eventually be used for the whole internal Starforge operation.
- Education centers are entered and managed manually.
- Each center can have branches, contacts, center-side employees, contracts, payments, trials, plans, custom commercial terms, support tickets, infrastructure, and product configuration.
- Customers may pay in any currency.
- The founder must be reminded when to collect payments.
- Company expenses and purchases must be entered throughout each month.
- The system must help explain how the business is doing and what is due next.
- A center can be blocked completely.
- An individual Starforge application can be restricted without necessarily blocking the whole center.
- Starforge should support negotiated/custom plans and on-premise arrangements.
- AI and other dynamic Starforge configuration should be representable per customer.
- Servers, providers, domains, Telegram bots, deployments, and related operating costs should be tracked.
- The panel includes Starforge employees, hiring, salaries, support, and tickets.
- Employment and other contracts should be generated as PDF and Word documents from inside the interface.
- Company founding information and percentage holders/equity records should be tracked.
- GitHub repositories should be collected and connected to products, environments, and deployments.
- Only the frontend is being planned and built at this stage. Backend implementation is a later decision.

## 3.2 Explicit Planning Assumptions

These assumptions allow the frontend to be designed now without pretending that policy choices are settled:

- **Reporting currency:** configurable. The prototype may use UZS as a sample, but UZS must never be hardcoded as the only reporting currency.
- **Fiscal calendar:** calendar year and calendar months by default; configurable fiscal-year start later.
- **Timezone:** each dated event stores an instant plus relevant timezone. The operator display defaults to Asia/Tashkent until changed in settings.
- **Language:** English first. The layout and copy system must be ready for Uzbek and Russian.
- **Tax:** tax fields exist, but calculations are not assumed to be jurisdictionally correct until backend/accounting review.
- **Payroll:** salary and obligation tracking are included; statutory payroll calculation is not assumed.
- **Equity:** the control panel is a governance record and scenario tool; it is not automatically the legal share register.
- **Document signatures:** signed status and evidence can be recorded. An e-sign provider is not selected.
- **Notifications:** in-app is required in the frontend. Email and Telegram are adapter-ready and provider-dependent.
- **GitHub:** metadata is expected from a future GitHub App or backend token broker. No GitHub token belongs in browser storage.
- **AI:** the interface models entitlements, limits, and policy—not direct secret/provider administration from the browser.
- **On-premise licensing:** interface and lifecycle are specified; cryptographic license issuance is Backend TBD.

## 3.3 Decisions That Must Be Made Before Production

| Decision | Owner | Blocking for frontend mock build? | Blocking for production? |
|---|---|---:|---:|
| Backend framework and API protocol | Engineering | No | Yes |
| Identity provider and MFA approach | Engineering/founder | No | Yes |
| Accounting basis and tax handling | Founder/accountant | No | Yes |
| Official reporting currency | Founder/accountant | No | Yes |
| Legal company/share data requirements | Founder/lawyer | No | Yes |
| Contract templates and approved clauses | Founder/lawyer | No | Yes |
| E-signature provider | Founder/engineering | No | Only for native e-sign |
| Currency-rate provider and rate policy | Founder/accountant | No | Yes for converted reporting |
| GitHub organization/account model | Engineering | No | Yes for sync |
| Infrastructure/cloud integrations | Engineering | No | Only for live synchronization |
| Telegram/email notification providers | Engineering | No | Only for external notifications |
| Exact product entitlement matrix | Founder/product | No | Yes |
| Customer suspension enforcement contract | Backend/product teams | No | Yes |

---

# 4. Product Model: Three Operational Layers Plus Time

The interface is organized around three durable layers and one overlay.

## 4.1 Company Layer

What belongs to Starforge itself:

- Company identity and founding record.
- Employees, candidates, salaries, contracts, access, and equipment.
- Shareholders/percentage holders and equity history.
- Revenue, expenses, purchases, budgets, obligations, and cash position.
- Vendors and providers.
- Global product catalog, plans, price book, templates, settings, and integrations.
- Repositories and company-level infrastructure.

## 4.2 Customer Layer

What belongs to an education-center relationship:

- Organization identity, lifecycle, health, contacts, and branches.
- Center-side employees visible from connected Starforge products.
- Deal, chosen plan, custom price, trial, subscription, payment schedule, payments, and receivables.
- Commercial contracts, amendments, documents, and promised work.
- Product licenses, per-app restrictions, usage, limits, and configuration.
- AI policy and configuration.
- On-premise sites, deployments, support tickets, and linked infrastructure.
- Full center activity timeline.

## 4.3 Asset Layer

What runs or represents the Starforge service:

- Starforge application family.
- Servers and environments.
- Cloud/hosting providers.
- Domains and certificates.
- Telegram bots.
- Deployments, incidents, maintenance, and backups.
- GitHub repositories, branches, releases, workflows, and pull-request health.
- Costs and ownership for every asset.

## 4.4 Time and Obligations Overlay

Time connects all three layers. Every actionable date can become an obligation:

- Payment collection.
- Invoice due date.
- Trial ending.
- Contract review, renewal, or expiry.
- Salary/payroll due date.
- Expense or recurring bill.
- Domain/certificate renewal.
- Server/provider renewal.
- Employee probation review.
- Equity vesting event.
- On-premise maintenance or license expiry.
- Ticket SLA breach.
- Deployment maintenance window.
- Promised customization deadline.

The Action Center is the unified surface for these obligations. Domain pages remain the authoritative context.

---

# 5. Design Authority and Required UX Behavior

`DESIGN.md` owns visual style, typography, color, spacing, component appearance, composition, responsive transformation, and motion. The frontend must implement that system while satisfying these functional requirements:

- Information needed for one decision must be available together or linked clearly.
- Important exceptions, overdue work, and upcoming obligations must be easy to find.
- Every major entity needs a summary of current status and next actions.
- Lists must support search, filtering, sorting, saved views, and usable mobile alternatives.
- Long or risky forms need clear progress, validation, review, and unsaved-change handling.
- Destructive or service-affecting actions require target, impact, reason, timing, and confirmation.
- Sensitive or service-affecting actions wait for confirmed backend results.
- Loading, empty, error, stale, offline, partial-success, and permission-denied states are required.
- The finished interface must be responsive, keyboard operable, screen-reader understandable, and usable at 200% zoom.
- Status must never depend on color alone.
- Product copy should be direct and specific. For example: “Collect payment,” “Block this center,” and “Why are you changing this?”
- Finance, salary, equity, security, suspension, and incident messages must state consequences without jokes or ambiguous wording.

---

# 6. Information Architecture

## 6.1 Primary Navigation

Navigation labels should remain stable. Counts appear only when they help action.

| Group | Destination | Purpose |
|---|---|---|
| Command | **Today** | Opening control-room view |
| Command | **Action Center** | Reminders, approvals, overdue work, calendar |
| Customers | **Education Centers** | Customer portfolio and every center workspace |
| Commercial | **Plans & Products** | Product catalog, plan price book, entitlements |
| Commercial | **Revenue & Billing** | Receivables, schedules, payments, credits, reporting |
| Company | **Expenses & Purchases** | Expenses, bills, vendors, purchases, assets |
| Company | **Contracts & Documents** | Templates, generated files, signatures, renewals |
| Company | **People & HR** | Hiring, employees, salary, onboarding, offboarding |
| Company | **Company & Ownership** | Founding record, legal profile, cap table |
| Operations | **Support** | Ticket inbox, queues, SLA, escalations |
| Operations | **Infrastructure** | Servers, providers, domains, bots, deployments |
| Operations | **Repositories** | GitHub repository catalog and engineering health |
| Governance | **Audit & Activity** | Sensitive actions and system-wide timeline |
| Governance | **Settings** | Preferences, dictionaries, templates, integrations |

## 6.2 Navigation Behavior

- All primary areas must remain reachable on desktop, tablet, and mobile using the responsive shell and navigation pattern specified in `DESIGN.md` section 8.
- Provide a globally available create action for: center, payment, expense, employee, ticket, contract, reminder, infrastructure asset, and repository link.
- Provide global search/command access, including a documented keyboard shortcut, across centers, contacts, branches, payments, contracts, people, tickets, servers, domains, bots, and repositories.
- Search results group by entity type, show matched field, and never reveal masked salary/equity values in global results.
- Provide recent and pinned entities.
- Nested workspaces need clear location context and reliable browser-back behavior.

## 6.3 Route-Level Access Preparation

Although version one has one owner, routes must be classifiable for future authorization:

- Commercial.
- Finance.
- HR-sensitive.
- Governance-sensitive.
- Support.
- Technical operations.
- Read-only audit.
- System settings.

Do not scatter owner checks across components. The future backend and route policy layer must decide access; components consume already-scoped DTOs.

---

# 7. Global Application Requirements

The application shell is specified in `DESIGN.md` section 8. At every supported viewport, it must provide access to:

- Primary navigation and current-location context.
- Universal search.
- Global create actions.
- Action Center/unresolved obligations.
- Sync/connection freshness.
- Current operator and session controls.
- Current date/timezone context where relevant.
- Related records, recent activity, notes, warnings, and next actions on entity pages.

No critical fact or action may exist only inside a hover interaction or an optional secondary panel.

## 7.1 Global Feedback

- Toasts confirm simple success and offer undo only when true rollback is supported.
- Long-running generation/sync work appears in a persistent Jobs tray.
- Connectivity banner distinguishes offline, API unavailable, stale cached view, and degraded integration.
- Session-expiry dialog preserves unsaved non-sensitive draft data only in memory.
- Errors include a human summary, suggested next step, and correlation ID when available.

---

# 8. Core Domain Vocabulary

Use these names consistently in UI, types, mocks, design files, and tickets.

| Term | Definition |
|---|---|
| Education center | A customer organization licensed to use Starforge |
| Branch | A physical or logical site belonging to one center |
| Center employee | A staff member at the customer organization; not a Starforge employee |
| Starforge employee | A person hired by Starforge and managed in People & HR |
| Product | One deployable Starforge application or service |
| Plan | A reusable commercial package containing limits and default entitlements |
| Deal | The negotiated commercial agreement offered to a center |
| Subscription | The time-bounded activation of deal terms for a center |
| License grant | Effective permission for one center/site to use a product |
| Restriction | A full-center or per-product access limitation |
| Trial | A defined evaluation period with scope, milestones, and outcome |
| Receivable | Money expected from a center |
| Payment schedule | Planned installments or recurring collection dates |
| Payment | Money actually received, recorded in its original currency |
| Expense | A company cost recognized for management reporting |
| Purchase | Acquisition of a good/service, optionally tracked as a company asset |
| Obligation | Something that must be paid, collected, reviewed, renewed, delivered, or decided |
| Contract | Versioned legal/commercial/employment/vendor text plus generated artifacts |
| Document artifact | A generated PDF, DOCX, attachment, or signed evidence file |
| Provider | A company supplying hosting, domains, messaging, AI, or another service |
| Deployment | A product version running in an environment or customer site |
| Repository | A source-code repository linked to Starforge products and deployments |
| Holding | A person/entity’s recorded ownership percentage or share amount |
| Audit event | Immutable account of a meaningful action or system event |

## 8.1 Customer Employees Versus Starforge Employees

This distinction is mandatory:

- **Center employees** appear inside an education center and describe users/staff at that customer.
- **Starforge employees** appear in People & HR and contain salary, employment, access, and company documents.
- Global search labels the entity type visibly.
- No salary or HR fields may accidentally be added to center-employee tables.
- The generic term “employees” should not be used in navigation without context.

---

# 9. Entity Relationship Overview

This is a frontend mental model, not a finalized database model.

    Starforge Company
    ├── Products ── Plans ── Plan versions
    ├── Employees ── Salary revisions / contracts / equipment / access
    ├── Owners ── Holdings / vesting / ownership events
    ├── Vendors ── Expenses / bills / purchases / provider services
    ├── Infrastructure ── servers / domains / bots / deployments
    ├── Repositories ── products / deployments / releases
    └── Education Centers
        ├── branches / contacts / center employees
        ├── deal ── subscription ── plan snapshot
        ├── payment schedule ── receivables ── payments
        ├── contracts / amendments / generated documents
        ├── product licenses / restrictions / usage / configuration
        ├── trial / onboarding / promised work
        ├── on-premise sites / deployments / infrastructure links
        ├── tickets / notes / attachments
        └── audit timeline / reminders / tasks

Cross-cutting links:

- Every obligation can link to exactly one primary entity and any number of supporting entities.
- Every financial record can link to a center, employee, vendor, asset, contract, or provider as appropriate.
- Every technical asset can link to products, environments, centers, branches, repositories, expenses, and incidents.
- Every sensitive record change produces an audit event.

---

# 10. Global Patterns and Reusable Behaviors

## 10.1 Registers

Directories and ledgers use a shared register pattern:

- Saved views.
- Search.
- Structured filters.
- Sort.
- Column selection.
- Density option.
- Grouping where meaningful.
- Bulk selection only for safe, homogeneous actions.
- Export request only when policy allows.
- Shareable URL state for query, sort, page, view, and non-sensitive filters.

Rules:

- Default visible columns must fit the decision, not mirror every entity property.
- Rows have one obvious primary navigation action.
- Row overflow actions are keyboard accessible and labeled with the target.
- Financial amounts show an explicit currency.
- Mobile views must present the same essential decisions without forcing an unreadably wide desktop table.

## 10.2 Detail Workspaces

Entity workspaces use:

- Stable identity and status context.
- A current-attention and next-action summary.
- The essential facts for the entity.
- Separate, linkable areas for distinct jobs.
- Related records, warnings, notes, and recent activity.
- Activity timeline as a standard final tab.
- URL-addressable subsections and meaningful browser back behavior.

## 10.3 Forms

- Short forms can use modal dialogs.
- Creation wizards, contract editing, center onboarding, plan building, and configuration use full pages.
- Long forms are divided into named sections and show completion status.
- Required fields are identified in labels, not only after submit.
- Money fields separate amount and currency.
- Date fields clarify date-only versus date-time and show timezone where relevant.
- Destructive consequences never appear as a tiny checkbox buried in a form.
- Unsaved changes prompt before navigation.
- Successful creation routes to the new record and states what remains incomplete.

## 10.4 Notes and Attachments

- Notes support plain text/Markdown-style formatting, mentions prepared for future users, pinning, and entity links.
- Attachments show filename, type, size, uploader, upload time, malware-scan state, and access classification.
- Sensitive attachments must never be embedded into analytics or console logs.
- Preview only safe formats; download remains a separate explicit action.

## 10.5 Status Representation

- Every status is written in text.
- Status and urgency remain distinguishable without color.
- Similar states use consistent labels across lists, detail pages, filters, exports, and assistive-technology announcements.
- Unknown and stale are explicit states, never displayed as healthy or zero.

## 10.6 Empty States

Every empty state says:

1. What belongs here.
2. Why it matters.
3. The safest next action.

Example: “No payment schedule yet. Add expected collection dates so the Action Center can remind you before money is due.”

## 10.7 Activity Timeline

The standard event row contains:

- Human-readable action.
- Actor or system source.
- Exact date/time with timezone tooltip.
- Reason/comment when required.
- Before/after summary when sensitive.
- Source integration.
- Correlation ID.
- Links to related entities.

Technical raw payload is hidden behind a developer/debug disclosure and permission boundary.

---

# 11. Today Dashboard

Route: **/today**

Purpose: provide an owner-ready view of the day without requiring exploration.

## 11.1 Required Dashboard Information

The opening page must make these areas easy to find using the composition and responsive priority specified in `DESIGN.md` section 15.1:

1. Current date and a concise summary of what needs attention.
2. Counts for critical, overdue, due-today, and waiting items.
3. **Decision Queue:** the next 5–8 items that require the owner’s choice.
4. **Business Pulse:** cash collected, expenses recorded, and expected obligations for the current month, separated by currency.
5. **Customer Watch:** centers in trial, overdue, restricted, support escalation, or unusual usage.
6. **Service Health:** products, production environments, domains, bots, and deployments.

## 11.2 Dashboard Modules

### Decision Queue

Sources:

- Overdue/approaching collections.
- Trial conversion decision.
- Custom plan needing approval.
- Contract awaiting review/signature.
- Expense/bill needing classification or approval.
- Salary revision or hiring step.
- Ticket escalation/SLA risk.
- Domain/certificate/server renewal.
- Failed/stale deployment or backup.
- Ownership event awaiting completion.

Each item shows:

- Urgency and due date.
- Action verb.
- Primary entity.
- Amount/currency when relevant.
- Responsible party.
- Why it surfaced.
- Primary action and defer/snooze.

### Business Pulse

- Collected this month by currency.
- Expected this month by currency.
- Expenses this month by currency.
- Overdue receivables.
- Optional estimated reporting-currency net, clearly labeled with conversion date/source.
- Compare with prior month and plan only when comparable data exists.

### Customer Watch

- Center status and health.
- Next obligation.
- Plan/trial.
- Last payment.
- Ticket severity.
- Product/license incident.
- Quick link to center workspace.

### Service Map

- Product and environment.
- Health.
- Version.
- Last deployment.
- Provider/server.
- Affected centers.
- Open incident/maintenance.

## 11.3 Dashboard Controls

- Date scope: Today, This week, This month.
- Currency display: Original currencies, Reporting currency estimate.
- Pin/unpin modules.
- Hide zero/healthy sections.
- Refresh with visible last-updated timestamp.

No drag-and-drop dashboard builder is required in version one.

## 11.4 Dashboard States

- First use: guided checklist for company, products/plans, first center, finance categories, reminders, and infrastructure.
- Healthy day: do not manufacture alerts; show upcoming plan and quiet service state.
- Partial integration: module-level “data not connected” with manual-entry alternative.
- Stale: retain last-known safe data with timestamp and exclude it from claims that require freshness.

---

# 12. Action Center, Reminders, and Calendar

Routes:

- **/actions**
- **/actions/calendar**
- **/actions/rules**

## 12.1 Purpose

Unify time-bound work from every module while preserving the linked record as the source of truth.

## 12.2 Inbox Views

- Mine/All (same in owner-only V1, retained for future delegation).
- Overdue.
- Today.
- This week.
- Waiting.
- Snoozed.
- Completed.
- Auto-generated versus manually created.

Filters:

- Obligation type.
- Source module.
- Center/vendor/employee.
- Severity.
- Currency and amount range.
- Assignee.
- Due-date range.
- Recurrence.

## 12.3 Reminder Model

Every reminder supports:

- Title and description.
- Primary linked entity.
- Optional supporting links.
- Owner/assignee.
- Due date or date-time.
- Display timezone.
- Severity.
- Lead-time notifications.
- Recurrence rule.
- Channel preference: in-app, email, Telegram when configured.
- Snooze with reason.
- Completion outcome and note.
- Escalation rule.
- Auto-close condition if generated from a source record.

## 12.4 Generated Reminder Examples

- Collection 7 days before, 1 day before, on due date, and daily after overdue.
- Trial check-in halfway through and conversion review before the end.
- Contract renewal 90/30/7 days before expiry.
- Domain/certificate 60/30/14/7/1 days before expiry.
- Salary payment on configured payroll cadence.
- Employee probation review.
- Recurring provider invoice.
- On-premise maintenance/license renewal.
- Ticket approaching SLA.
- Promised customization milestone.

Users can adjust defaults globally and override them per record.

## 12.5 Calendar

- Month, week, and agenda views.
- Filters by source/type/severity.
- Original timezone preserved; operator timezone is display default.
- Money obligations show amount plus currency.
- Multi-day ranges for trials, employment probation, contracts, and maintenance.
- Dragging to reschedule is allowed only for manually controlled reminders and requires save confirmation.
- Source-controlled dates open the source editor instead of silently changing from the calendar.

## 12.6 Action Detail

The detail panel shows:

- What is due and why.
- Source record facts.
- Timeline.
- Checklist.
- Attachments/notes.
- Complete, snooze, reassign, edit, or open source.

Completing a reminder does not automatically mark a payment received, contract signed, bill paid, or ticket resolved. The domain action must be completed explicitly.

---

# 13. Authentication and Session UX

Routes:

- **/login**
- **/verify**
- **/recover**
- **/session/locked**

Backend selection is deferred, but frontend states must be complete.

## 13.1 Login

- Starforge editorial identity, minimal composition, no dashboard preview clutter.
- Email/username and password or future SSO button.
- Password visibility toggle with accessible label.
- Caps Lock notice.
- Submit progress prevents duplicates.
- Generic invalid-credential response to avoid account enumeration.
- Link to account recovery when supported.

## 13.2 Multi-Factor Verification

- Authenticator-code first design.
- Backup code alternative.
- Paste-friendly six-digit input without six inaccessible independent fields.
- Clear retry timeout and recovery path.
- Trusted-device option shown only when backend policy allows.

## 13.3 Session Lock and Reauthentication

- Automatic lock view can preserve route context without exposing the underlying sensitive page.
- Reauthentication is required for salary reveal/export, equity export, API/integration changes, center suspension, bulk destructive actions, and ownership changes when backend policy enables it.
- After success, return to the exact reviewed action; do not execute automatically without the final confirmation.

## 13.4 Session States

- Expiring soon.
- Expired.
- Revoked on another device.
- Insufficient permission.
- Account disabled.
- Network unavailable.
- Maintenance.

The app must distinguish these states instead of showing one generic error.

---

# 14. Education Centers

Routes:

- **/centers**
- **/centers/new**
- **/centers/[centerId]/...**

The education-center workspace is the most connected area of the application. It must tell the complete customer story without forcing the owner to assemble it from separate modules.

## 14.1 Center Portfolio

Default register columns:

- Center name and logo/initial.
- Lifecycle status.
- City/country.
- Active plan or “Custom.”
- Deployment model: Starforge cloud, customer cloud, or on-premise.
- Branch count.
- Enabled products count.
- Next payment date and amount/currency.
- Open critical ticket count.
- Trial/renewal/contract date.
- Health/attention summary.

Recommended saved views:

- All.
- Prospects and negotiating.
- Onboarding.
- Trials.
- Active.
- Payment due soon.
- Past due.
- Restricted or suspended.
- On-premise.
- Contract renewal.
- Support risk.
- Archived.

Portfolio actions:

- Add education center.
- Import draft from a structured file later; manual creation is required now.
- Export filtered list through a backend-generated job later.
- Compare selected centers on plan, usage, revenue, support load, and cost.
- Bulk tagging and assignment only; never bulk suspend centers by default.

## 14.2 Center Creation and Onboarding Wizard

Route: **/centers/new**

The wizard can be saved as a draft after the minimum identity step.

### Step 1 — Organization

- Legal name.
- Trading/display name.
- Country, region, city, address.
- Timezone and preferred locale.
- Tax/company registration identifiers as optional classified fields.
- Website.
- Logo.
- Internal owner.
- Acquisition/source tag.
- Internal summary and tags.

### Step 2 — Contacts

- Primary decision maker.
- Billing contact.
- Technical contact.
- Support contact.
- Name, role, email, phone, Telegram handle where appropriate.
- Communication preference and consent/source note.
- One contact may hold multiple roles.

### Step 3 — Branches

- Branch name/code.
- Address and timezone.
- Primary contact.
- Expected student and employee counts.
- Opening/active status.
- Deployment/site notes.
- Add multiple branches before proceeding.

### Step 4 — Deal and Plan

- Choose Basic, Pro, Max, another future price-book plan, or Custom.
- Display public/list price as a reference, never an enforced price.
- Billing cadence.
- Agreed amount and currency.
- Discount type/value and stated reason.
- Setup/implementation fee.
- Tax treatment placeholder.
- Payment start date.
- Contract start/end.
- Renewal behavior.
- Sales/negotiation notes.
- Promise/custom-work items with dates and owners.

### Step 5 — Trial or Direct Activation

- No trial, fixed trial, or custom test phase.
- Trial start/end.
- Trial products and temporary limits.
- Trial success criteria.
- Check-in dates.
- Conversion decision date.
- Data cleanup/retention behavior if declined—Policy TBD.

### Step 6 — Products and Licenses

- Product-by-product entitlement.
- Plan defaults shown beside negotiated overrides.
- Usage limits: students, branches, storage, seats, AI quota, and future metrics.
- License validity and grace policy placeholders.
- Initial product state: enabled, read-only, disabled, or scheduled.
- Explain effective source for every override.

### Step 7 — Deployment and Configuration

- Starforge cloud, customer cloud, or on-premise.
- Environments/sites.
- Domains and subdomains.
- Required Telegram bots.
- Required integrations.
- AI capability and policy.
- Data residency/backup/maintenance notes.
- Technical tasks checklist with owners and dates.

### Step 8 — Contract and Documents

- Choose contract template.
- Map organization/deal variables.
- Preview missing variables.
- Generate draft PDF/DOCX request.
- Attach an externally signed contract if one already exists.
- Mark legal-review state.

### Step 9 — Payment Schedule

- One-time, recurring, installment, milestone-based, or manually scheduled.
- Generate expected receivables from start date/cadence.
- Set lead-time reminders.
- Select communication channel placeholder.
- Add opening balance or a payment already received.

### Step 10 — Review

Review sections show:

- Missing required facts.
- Conflicting dates.
- Entitlement overrides.
- Financial summary in original currency.
- Products that will become accessible.
- Domains/deployments not ready.
- Contract status.
- First collection date.
- All auto-created reminders.

Final actions:

- Save draft.
- Start onboarding.
- Start trial.
- Activate now.
- Schedule activation.

Activation must not be enabled when a backend-required critical condition is unresolved. In the frontend-only prototype, simulate this with realistic validation.

## 14.3 Center Workspace Header

Persistent identity includes:

- Center name and unique code.
- Lifecycle status.
- Plan/deal label.
- Deployment model.
- Primary city/timezone.
- Owner.
- Health/attention summary.
- Global center actions.

Global actions:

- Add payment.
- Create reminder.
- Create ticket.
- Generate document.
- Edit organization.
- Change lifecycle.
- Restrict access.
- Archive.

“Restrict access” must be clearly distinguished from routine actions and cannot be triggered accidentally.

## 14.4 Center Workspace Tabs

Recommended tab order:

1. Overview.
2. Branches.
3. Center team.
4. Deal & billing.
5. Licenses & products.
6. Trial & onboarding.
7. Contracts.
8. Usage.
9. Configuration & AI.
10. Deployments & assets.
11. Support.
12. Activity.

### Overview Tab

Contains:

- Relationship summary.
- Current attention and next-action summary.
- Active products and restrictions.
- Current commercial terms.
- Next/last payment.
- Trial/onboarding/renewal progress.
- Open tickets and support risk.
- Usage against limits.
- Linked domains, deployments, and providers.
- Primary contacts.
- Pinned note.
- Recent activity.

### Branches Tab

Register fields:

- Name/code.
- Location/timezone.
- Status.
- Contact.
- Student/staff counts.
- Enabled/assigned products.
- Deployment/site.
- Last synchronization.
- Open incidents/tickets.

Branch detail:

- Contact/address.
- Limits and usage.
- Product assignment.
- Domains/deployments.
- Center employees.
- Notes/tasks.
- Activity.

A branch may be disabled operationally only if the future platform supports branch-level enforcement. Until then, the UI labels it as an internal status rather than implying access was blocked.

### Center Team Tab

Shows customer-side users/staff:

- Name and center role.
- Branches.
- Starforge app roles.
- Active/disabled state.
- Last active date if available.
- Contact details.
- Support/contact responsibility.

Safety:

- This is not Starforge HR.
- No salary, company ownership, employment contract, or Starforge payroll data.
- Account disabling is shown only if supported by the connected identity system.

### Deal & Billing Tab

Contains:

- Deal summary and negotiation history.
- Immutable accepted commercial snapshot.
- Subscription period/status.
- Payment schedule.
- Receivables and aging.
- Recorded payments.
- Credits/refunds.
- Billing contacts.
- Collection reminders.
- Related contracts/amendments.
- Revenue timeline.

Actions:

- Propose plan change.
- Create custom terms.
- Revise future schedule.
- Record payment.
- Add credit/refund record.
- Pause renewal.
- Close agreement.

Never edit an accepted price in place. Create a new deal/term version with an effective date and reason.

### Licenses & Products Tab

Shows a row/card per Starforge product:

- Product name/platform.
- Entitled by.
- Effective state.
- Effective dates.
- Plan default.
- Negotiated override.
- Emergency restriction.
- Usage/limit.
- Deployment/version.
- Last enforcement confirmation.
- Reason for non-default state.

Actions:

- Enable or schedule.
- Set read-only if supported.
- Disable one product.
- Adjust limit.
- Configure product.
- View affected users/branches.
- Review history.

### Trial & Onboarding Tab

Contains:

- Lifecycle timeline.
- Trial dates and remaining time.
- Products and temporary limits.
- Success criteria with pass/at-risk/not-assessed states.
- Check-ins and notes.
- Implementation checklist.
- Data migration tasks.
- Training tasks.
- Domain/deployment readiness.
- Promised customization work.
- Conversion decision and outcome.

Trial outcomes:

- Converted.
- Extended, with reason and new decision date.
- Declined.
- Paused.
- Expired without decision.

### Contracts Tab

Center-scoped view of:

- Master service agreement.
- Subscription/order form.
- Amendments.
- Data/privacy documents.
- On-premise agreement.
- Support/SLA agreement.
- Custom development statement of work.
- Signed evidence and attachments.
- Renewal/expiry obligations.

### Usage Tab

Metrics should be product-aware:

- Students.
- Branches.
- Staff/user seats.
- Storage.
- AI calls/tokens/cost quota where available.
- Active users.
- Product-specific transactions.
- Last metering time.

Display:

- Current value, limit, percentage, forecast if supported, and last updated.
- Normal, nearing limit, exceeded, unknown, and stale states.
- Historical chart plus accessible data table.
- Plan-change or limit-override action.

Never treat missing usage data as zero.

### Configuration & AI Tab

Configuration is grouped by product and environment:

- Branding and locale.
- Enabled modules/features.
- Workflow switches.
- Notifications.
- Integrations.
- AI capabilities.
- Limits/budgets.
- Data and retention policy references.
- Custom customer requirements.
- Effective source and override history.

AI controls can model:

- AI enabled/disabled.
- Allowed Starforge AI features.
- Approved model/provider class—not secret credentials.
- Monthly budget/quota.
- Token/request limit.
- Per-role or per-product access.
- Human approval requirement.
- Data-use/data-residency policy.
- Overage behavior.
- Safety/policy profile.
- Last health/usage update.

The UI must warn when configuration is unsupported by the deployed product version.

### Deployments & Assets Tab

Center-scoped technical view:

- Deployment model.
- Environments and sites.
- Server/provider.
- Domain/certificate.
- Telegram bots.
- Product versions.
- Repository/release link.
- Backup and maintenance status.
- On-premise license.
- Open technical tasks/incidents.
- Allocated recurring cost.

### Support Tab

Center-scoped ticket list, service targets, recent conversations, unresolved themes, satisfaction notes, and linked incidents.

### Activity Tab

Chronological customer history across commercial, access, support, finance, documents, configuration, and infrastructure. Sensitive data is summarized rather than dumped.

## 14.5 Full Center Restriction Flow

This is a consequential workflow and must be designed as a full review sequence.

### Entry

Action label: **Restrict center access**

### Step 1 — Scope

- Entire center.
- Selected branches, only if backend enforcement exists.
- Selected products.
- Specific capability such as AI.

### Step 2 — Mode and Timing

- Block/disable.
- Read-only, where supported.
- Maintenance mode, where supported.
- Start immediately or schedule.
- End automatically at a date/time or remain until manually restored.

### Step 3 — Reason and Communication

- Reason category: payment overdue, contract ended, security, customer request, maintenance, policy, other.
- Required internal explanation.
- Customer-facing message.
- Whether communication has been sent; future send adapter.
- Related ticket, invoice, incident, or contract.

### Step 4 — Impact Preview

Show:

- Products and branches affected.
- Approximate users affected.
- Active sessions and ongoing operations if known.
- Data access behavior.
- APIs/integrations affected.
- Scheduled jobs affected.
- Conflicting trial/contract/plan state.
- Restore path.

### Step 5 — Confirmation

- Require reauthentication when policy says so.
- For entire-center immediate suspension, require typing the center display name.
- Submit once; show a non-optimistic “applying restriction” state.
- Success requires enforcement confirmation/correlation ID from backend.
- Partial enforcement is a first-class failure state with affected/unaffected products and emergency next steps.

### Restoring Access

Restoration has its own impact review:

- Previous state.
- Restrictions to remove.
- New effective entitlements.
- Whether expired contracts/licences still prevent access.
- Reason for restoration.
- Enforcement confirmation.

## 14.6 Center Archiving

- Archiving is not suspension and does not silently affect product access.
- Active financial, legal, support, or infrastructure obligations must be reviewed.
- The system should normally require offboarding completion before archive.
- Archived centers remain searchable and auditable but leave default active views.

---

# 15. Plans, Products, Deals, and Licensing

Routes:

- **/catalog/products**
- **/catalog/plans**
- **/catalog/plans/[planId]**
- **/catalog/deals**
- **/catalog/features**

## 15.1 Current Product Catalog Seed

The mock frontend should seed the product family found in the current Starforge materials:

| Product | Platform | Current public posture |
|---|---|---|
| CEO Web | Web | Core |
| CEO Mobile | Mobile | Core |
| Staff Web | Web | Core |
| Staff Mobile | Mobile | Core |
| Family Mobile | Mobile | Included from Pro according to current landing content |
| Starforge IELTS | Desktop | Coming soon/demo posture |
| Starforge Writer | Desktop | Included from Max according to current landing content |
| Starforge AI capabilities | Cross-product | Configurable/negotiated; exact packaging TBD |

Product fields:

- Stable product code.
- Name and description.
- Platform.
- Lifecycle: planned, beta, available, maintenance, deprecated, retired.
- Current versions/channels.
- Feature/entitlement definitions.
- Usage metrics.
- Configuration schema version.
- Repository/deployment links.
- Customer count.
- Default support tier.

## 15.2 Current Public Plan Seed

Use the landing page as the current public price-book reference:

| Plan | Public monthly price | Student limit | Branch limit | Storage | Product notes |
|---|---:|---:|---:|---:|---|
| Basic | USD 89 | 600 | 1 | 20 GB | CEO and staff core |
| Pro | USD 159 | 1,000 | Up to 3 | 100 GB | Basic plus Family Mobile and IELTS Desktop when released; scoped adaptations; priority support |
| Max | USD 199 | 1,500 | Up to 6 | 200 GB | Pro plus Starforge Writer; priority partnership |

Important:

- The existing backend seed catalog is different and stale. Do not let it silently overwrite this visible reference.
- Public prices are list-price versions, not customer invoices.
- Plan versions need effective-from/effective-to dates.
- Existing accepted deals retain their own snapshot even after a plan changes.
- “Custom” is a negotiated deal path, not merely a fourth fixed plan.

## 15.3 Plan Builder

Sections:

- Identity and sales description.
- Effective dates and availability.
- Base prices by supported currency/cadence.
- Included products.
- Product feature entitlements.
- Usage limits and overage behavior.
- Branch/student/user/storage limits.
- Support tier.
- Implementation/onboarding defaults.
- Trial defaults.
- Contract/payment defaults.
- Optional add-ons.

Plan state:

- Draft.
- Scheduled.
- Active.
- Retired.

Publishing a new plan version presents:

- Changed prices.
- Changed entitlements/limits.
- New-customer behavior.
- Existing-deal impact—normally none until explicitly migrated.
- Centers eligible for a proposed migration.

## 15.4 Custom Deal Builder

The deal builder starts from:

- A current plan version.
- A previous deal.
- A blank custom agreement.

Editable commercial terms:

- Agreed price and currency.
- Cadence/installments.
- Discount and reason.
- Setup fee.
- Tax/withholding placeholder.
- Contract dates.
- Renewal.
- Payment grace.
- Products/features.
- Limits.
- Support tier.
- Trial.
- On-premise fees.
- Custom development.
- Promised outcomes/tasks.
- Special terms and internal negotiation notes.

The review screen compares:

- Public plan.
- Proposed customer terms.
- Difference in money.
- Added/removed products.
- Limit overrides.
- Operational cost/risk notes.
- Required approval status.

Accepted deals become immutable snapshots. A revision creates a successor with effective timing.

## 15.5 Effective Entitlement Resolution

The frontend must explain configuration using this precedence:

1. Product system default.
2. Plan-version default.
3. Accepted deal override.
4. Center or site configuration override.
5. Temporary/emergency restriction.

For every effective value, show:

- Effective value.
- Source layer.
- Source record/version.
- Effective date.
- Who changed the topmost override.
- Reason.
- Whether the deployed product has confirmed enforcement.

This prevents a dangerous interface where the owner sees a toggle but cannot tell why it is on.

## 15.6 License States

Per product/site:

- Scheduled.
- Enabled.
- Trial.
- Read-only.
- Maintenance.
- Grace period.
- Disabled.
- Expired.
- Enforcement pending.
- Enforcement failed.
- Unknown/stale.

Whole-center commercial lifecycle and individual product-license state are separate dimensions.

---

# 16. Revenue, Billing, and Collections

Routes:

- **/revenue**
- **/revenue/receivables**
- **/revenue/schedules**
- **/revenue/payments**
- **/revenue/credits**
- **/revenue/reports**

This module tracks company revenue from centers. It must not be confused with student tuition payments inside a center’s own tenant data.

## 16.1 Revenue Overview

Show:

- Collected this month by currency.
- Expected this month by currency.
- Overdue by currency and aging bucket.
- Forecast next 30/60/90 days.
- New recurring value based on accepted schedules.
- Lost/ended value.
- Collection effectiveness.
- Centers without a next collection date.
- Revenue by plan, product, deployment model, and center.
- Optional estimated reporting-currency view.

All metrics include definitions, date basis, and data-freshness indicator.

## 16.2 Receivables Register

Fields:

- Receivable ID.
- Center.
- Deal/subscription.
- Description/period.
- Issue/expected date.
- Due date.
- Original amount/currency.
- Paid and remaining amount.
- Status.
- Days overdue.
- Collection owner.
- Next follow-up.
- Related contract/invoice/evidence.

Statuses:

- Draft.
- Scheduled.
- Due.
- Partially paid.
- Paid.
- Overdue.
- Disputed.
- Waived.
- Written off.
- Canceled.

Written-off and waived are different and require reasons.

## 16.3 Payment Schedules

Supported patterns:

- One time.
- Monthly/quarterly/annual recurrence.
- Fixed installments.
- Milestones.
- Irregular custom dates.

The schedule editor includes:

- Start date.
- Cadence.
- Number of installments or end condition.
- Amount/currency per item.
- Due-day behavior.
- Weekend/holiday policy placeholder.
- Grace days.
- Reminder sequence.
- Proration placeholder.
- Renewal generation behavior.

Editing a schedule:

- Paid periods never change.
- Due/overdue items require explicit adjustment handling.
- Future items can be regenerated only after a before/after preview.
- Rounding remainder is visibly allocated.

## 16.4 Record Payment Flow

Required fields:

- Center and receivable.
- Amount.
- ISO currency code.
- Received date and optional exact time.
- Payment method: bank transfer, cash, card, wallet, check, other.
- Destination account/register.
- External reference/transaction ID.
- Payer name.
- Processing fee if applicable.
- Notes.
- Receipt/evidence attachment.

Allocation:

- Apply to one receivable.
- Split across receivables.
- Record as unapplied customer credit.

Review:

- Original expected amount.
- New remaining balance.
- Overpayment/underpayment.
- Currency mismatch and conversion treatment.
- Duplicate-reference warning.
- Next collection date/reminder.

A payment record is append-only in principle. Corrections use reversal/adjustment records with linked reasons rather than silent edits.

## 16.5 Collection Queue

Prioritizes:

- Overdue.
- Due today.
- Due within configured lead window.
- Broken promise-to-pay.
- Trial ending without commercial terms.
- Active center without a schedule.

Each collection item includes:

- Center/contact.
- Amount/currency.
- Due/overdue age.
- Last contact.
- Promise-to-pay date.
- Contract/access context.
- Open dispute.
- Suggested next action.

Actions:

- Log contact attempt.
- Record promise to pay.
- Snooze follow-up.
- Record payment.
- Open dispute.
- Adjust schedule.
- Start restriction review.

The app must never automatically suspend a center solely because a receivable is overdue. It may generate a recommended action based on policy, which still requires review.

## 16.6 Credits, Refunds, Waivers, and Write-Offs

These are separate record types with:

- Original payment/receivable.
- Amount/currency.
- Reason.
- Requested/approved/processed dates.
- Method/reference.
- Supporting evidence.
- Accounting state placeholder.
- Audit trail.

## 16.7 Multi-Currency Rules

Mandatory presentation rules:

- Store and display original amount and ISO currency.
- Never add unlike currencies into one raw total.
- Summary blocks group native totals by currency.
- A converted reporting view is optional and labeled **Estimated**.
- Converted values show reporting currency, FX rate, rate date/time, source, and conversion method.
- Historical reports use the configured historical-rate policy rather than today’s rate.
- Deals snapshot agreed currency and amount.
- Changing display currency does not mutate the original transaction.
- Amount calculations use decimal-safe values; never JavaScript floating-point arithmetic for money.

## 16.8 Revenue Reports

Initial reports:

- Collections by month and currency.
- Expected versus received.
- Aging.
- Revenue by center.
- Revenue by plan/product.
- New, expanded, contracted, and ended commercial value.
- Upcoming 90-day collections.
- Discount/custom-deal analysis.
- On-premise versus cloud revenue.

Every chart has a corresponding accessible table and export request.

---

# 17. Expenses, Purchases, Vendors, and Company Cash View

Routes:

- **/expenses**
- **/expenses/ledger**
- **/expenses/bills**
- **/expenses/purchases**
- **/expenses/vendors**
- **/expenses/budgets**
- **/expenses/reports**

## 17.1 Expense Overview

Show:

- Expenses recorded this month by currency.
- Paid versus unpaid.
- Recurring obligations due this month.
- Spend by category.
- Spend by vendor/provider.
- Infrastructure cost.
- People cost.
- Purchases/assets.
- Budget versus actual where budgets exist.
- Upcoming bills.
- Missing receipt/classification queue.

## 17.2 Expense Entry

Fields:

- Expense date.
- Merchant/vendor.
- Description.
- Category/subcategory.
- Amount and currency.
- Tax amount/rate placeholder.
- Payment status and paid date.
- Payment method/account.
- Recurring or one-time.
- Due date.
- Invoice/reference number.
- Receipt/invoice attachments.
- Related provider/server/domain/bot/repository/product/center.
- Cost center/project/tag.
- Business purpose.
- Reimbursable and employee, if applicable.
- Notes.

Statuses:

- Draft.
- Awaiting payment.
- Paid.
- Reimbursable.
- Reimbursed.
- Disputed.
- Canceled.

## 17.3 Recurring Bills and Obligations

Examples:

- Server/hosting.
- Domain/certificate.
- SaaS tool.
- Telegram/SMS/email provider.
- AI provider.
- Office/rent/utilities.
- Contractor.
- Salary obligation.
- Tax/advisory placeholder.
- Insurance.

Recurring rule includes:

- Vendor.
- Amount/currency or variable estimate.
- Cadence.
- Next due date.
- Reminder lead times.
- Auto-create draft expense behavior.
- Contract/service link.
- End date.

The frontend distinguishes a predicted obligation from an actual paid expense.

## 17.4 Purchases and Company Assets

A purchase may create an asset record:

- Asset name/type.
- Serial/identifier.
- Purchase amount/currency/date.
- Vendor.
- Warranty.
- Assigned employee/location.
- Condition.
- Depreciation/accounting placeholder.
- Return/disposal date.
- Receipt and documents.

Examples include laptops, phones, networking hardware, test devices, office equipment, and licenses.

## 17.5 Vendors

Vendor profile:

- Legal/display name.
- Category.
- Contacts.
- Country/currency.
- Tax/bank placeholders.
- Contracts.
- Services/assets supplied.
- Recurring bills.
- Total spend by currency.
- Renewal dates.
- Risk/notes.

Infrastructure providers can link to the same vendor without duplicating financial records.

## 17.6 Budgets and Monthly Close

Budget:

- Month/quarter/year.
- Reporting/native currency.
- Category/project/cost center.
- Planned amount.
- Actual.
- Committed but unpaid.
- Variance.

Monthly review checklist:

- Review unclassified expenses.
- Attach missing evidence.
- Confirm recurring bills.
- Reconcile salary obligations without double counting.
- Review unpaid bills.
- Review expected collections.
- Confirm FX rate policy.
- Add closing note.
- Lock/close reporting period later—Backend/accounting policy TBD.

## 17.7 Salary and Expense Double-Count Rule

People & HR owns salary agreements and salary revisions. Finance owns actual salary obligations/payments.

- An employee’s active salary can generate a finance obligation.
- Recording that obligation as paid creates/links the expense.
- Do not also create an unrelated manual salary expense for the same period.
- Duplicate detection uses employee, pay period, amount/currency, and payment reference.

## 17.8 Business Health View

The app may show a management cash view:

- Opening cash by currency/account.
- Collections.
- Other inflows.
- Paid expenses.
- Expected receivables.
- Upcoming bills.
- Estimated closing cash.

It must be labeled as operational management reporting until bank reconciliation and accounting rules are implemented.

---

# 18. Contracts and Document Generation

Routes:

- **/documents**
- **/documents/contracts**
- **/documents/templates**
- **/documents/[documentId]**
- **/documents/jobs**

## 18.1 Supported Document Families

- Customer master service agreement.
- Subscription/order form.
- Custom-plan amendment.
- Trial/pilot agreement.
- On-premise license/service agreement.
- Support/SLA agreement.
- Statement of work.
- Employment agreement.
- Offer letter.
- Salary-change letter.
- Confidentiality/IP agreement.
- Vendor/contractor agreement.
- Ownership/shareholder supporting document.
- Company letter or certificate template.

## 18.2 Contract Register

Fields:

- Contract/document ID.
- Title/type.
- Counterparty.
- Related center/employee/vendor/owner.
- Status.
- Version.
- Effective date.
- Expiry/renewal.
- Value/currency if relevant.
- Reviewer.
- Signature state.
- Generated formats.
- Next obligation.

## 18.3 Lifecycle

- Draft.
- In review.
- Approved.
- Generated.
- Sent.
- Partially signed.
- Signed.
- Active.
- Expiring.
- Expired.
- Terminated.
- Superseded.
- Voided.

Status transitions require dates and actor. “Signed” requires evidence or provider confirmation, not a UI checkbox alone in production.

## 18.4 Template Builder

Features:

- Template title/type/jurisdiction/language.
- Structured sections and clauses.
- Locked required clauses.
- Optional clause library.
- Variables with human labels, types, validation, fallback, and data source.
- Repeating blocks for products, installments, branches, compensation, or holders.
- Conditional clauses.
- Page header/footer, company identity, numbering, signature blocks.
- Version notes and legal approval state.

Recommended editing model:

- Structured rich-text editing for clauses.
- Variables inserted as protected tokens.
- Outline navigator.
- Side-by-side rendered preview.
- Validation panel for missing/invalid variables.
- Diff between template versions and generated contract revisions.

Avoid an unrestricted page-layout designer in V1. Controlled templates generate more dependable PDF and DOCX output.

## 18.5 Generate Contract Flow

1. Choose template/version.
2. Choose counterparty and source records.
3. Review populated variables.
4. Fill approved manual variables.
5. Select optional clauses.
6. Preview commercial/employment summary.
7. Render preview.
8. Resolve validation warnings.
9. Mark review/approval.
10. Request PDF and DOCX generation.
11. Download, send through future adapter, or record external delivery.

The generated artifact stores:

- Template version.
- Data snapshot.
- Manual overrides.
- File checksum.
- Generation time.
- Generator version.
- Actor.
- Relationship to earlier/superseding artifact.

## 18.6 PDF and DOCX Frontend Boundary

Frontend responsibilities:

- Template and variable UI.
- Safe preview.
- Validation.
- Generation-job request.
- Progress and failure states.
- Artifact list, metadata, download, and version comparison.

Production backend responsibilities:

- Authoritative deterministic rendering.
- Secure file storage and signed download URLs.
- Malware scanning for uploaded files.
- Font and layout consistency.
- Checksums.
- Permissions.
- Signature/provider integration.
- Audit events.

For a frontend-only prototype, PDF and DOCX libraries may run in a dynamically imported worker/client boundary using synthetic data. Prototype artifacts must be watermarked **Demo — not an executed agreement**.

## 18.7 Contract Safety

- Legal-review status is visible.
- Unapproved templates show a warning.
- Generated text is never described as legal advice.
- Signed artifacts cannot be overwritten.
- Amendments point to the agreement they modify.
- Termination and supersession preserve history.
- Sensitive documents are excluded from generic search snippets and analytics.

---

# 19. People, Hiring, Salary, and HR

Routes:

- **/people**
- **/people/employees**
- **/people/employees/[employeeId]**
- **/people/hiring**
- **/people/jobs**
- **/people/candidates**
- **/people/payroll-obligations**
- **/people/equipment**

## 19.1 People Overview

Show:

- Active Starforge employees.
- Hiring pipeline.
- Starting soon.
- Probation reviews.
- Contracts expiring.
- Salary obligations due.
- Missing documents.
- Unassigned/missing equipment.
- Access reviews.
- Leave/availability summary later.

Sensitive amounts remain masked by default on overview pages.

## 19.2 Hiring Pipeline

Job fields:

- Title.
- Department/team.
- Hiring owner.
- Employment type.
- Location/remote policy.
- Headcount.
- Target start.
- Compensation range and currency, classified.
- Status.
- Description and requirements.

Candidate stages:

- Sourced/applied.
- Screening.
- Interview.
- Technical/task assessment.
- Reference/check placeholder.
- Offer preparation.
- Offer sent.
- Accepted.
- Hired.
- Rejected.
- Withdrawn.
- On hold.

Candidate profile:

- Contact information.
- Source.
- Resume/portfolio attachments.
- Stage history.
- Notes/interviews.
- Evaluation rubric.
- Expected compensation.
- Availability/start date.
- Consent/retention placeholder.

## 19.3 Offer and Hire Flow

1. Select job/candidate or start direct hire.
2. Define role/team/manager.
3. Define employment type/location/start date/probation.
4. Enter salary and compensation.
5. Select offer/employment templates.
6. Configure onboarding checklist.
7. Review sensitive details.
8. Generate offer.
9. Record accepted/rejected outcome.
10. On acceptance, create employee record without losing candidate history.

## 19.4 Employee Directory

Default fields:

- Name/photo.
- Role/department.
- Employment status.
- Manager.
- Location/timezone.
- Start date.
- Contract status.
- Next HR obligation.
- Access/equipment completeness.

Saved views:

- Active.
- Starting soon.
- Probation.
- Contractors.
- On leave.
- Offboarding.
- Former.
- Contract/salary review due.

## 19.5 Employee Workspace

Tabs:

1. Overview.
2. Employment.
3. Compensation.
4. Contracts & documents.
5. Onboarding/tasks.
6. Access.
7. Equipment.
8. Leave/availability.
9. Notes.
10. Activity.

### Overview

- Role/team/manager.
- Employment lifecycle.
- Start/tenure/probation.
- Contact/emergency contact classification.
- Next obligations.
- Contract state.
- Masked compensation.
- Equipment/access status.

### Employment

- Employment type.
- Work location/timezone.
- Start/end dates.
- Probation.
- Department/role/manager history.
- Working schedule placeholder.
- Legal/tax identifiers as classified optional fields.

### Compensation

Each salary revision is append-only:

- Base amount.
- ISO currency.
- Frequency: hourly, monthly, annual, project, other.
- Gross/net designation—required and policy-defined.
- Effective start/end.
- Reason.
- Approved by.
- Bonus/commission/allowance components.
- Deductions placeholder.
- Supporting letter/contract.

Rules:

- Display current and historical compensation.
- Never overwrite the prior amount.
- Future-dated revision is visible as scheduled.
- Converted reporting amount is optional and estimated.
- Salary is masked by default and requires deliberate reveal.
- Compensation must not enter client logs, URLs, global search snippets, or telemetry.

### Contracts and Documents

- Offer.
- Employment agreement.
- NDA/IP.
- Salary-change letter.
- Contractor agreement.
- Identity/legal attachments under strict classification.
- Generated PDF/DOCX and signed evidence.

### Access

- Starforge internal systems.
- GitHub teams/repositories.
- Infrastructure environments.
- Support/finance/HR/control-panel roles later.
- Granted/removed dates.
- Review date.
- Status from future integration.

No access token or password is displayed.

### Equipment

- Assigned assets.
- Handover/return date.
- Condition.
- Documents.
- Offboarding return requirement.

## 19.6 Salary Obligations

People defines the agreement; finance records the obligation/payment.

The payroll-obligation register shows:

- Employee.
- Pay period.
- Due date.
- Gross/net policy label.
- Amount/currency.
- Bonus/deductions.
- Status.
- Linked expense/payment.
- Evidence.

Statuses:

- Planned.
- Due.
- Paid.
- Partially paid.
- Deferred.
- Disputed.
- Canceled.

No statutory tax or payroll calculation is implied until a validated payroll backend exists.

## 19.7 Onboarding and Offboarding

Onboarding checklist categories:

- Contract/documents.
- Company accounts/access.
- GitHub.
- Equipment.
- Orientation/training.
- Role goals.
- Payroll details.
- Probation reviews.

Offboarding flow:

- Effective end date and reason.
- Contract obligations.
- Final compensation placeholder.
- Access removal.
- GitHub/infrastructure removal.
- Equipment return.
- Knowledge transfer.
- Document retention.
- Exit note.

Employee deletion is not a normal action. Former employees remain in a restricted historical state.

---

# 20. Company Profile, Founding Record, and Ownership

Routes:

- **/company**
- **/company/profile**
- **/company/founding**
- **/company/ownership**
- **/company/ownership/events**
- **/company/records**

## 20.1 Company Profile

Sections:

- Legal and trading names.
- Logo/brand identifiers.
- Registration number.
- Incorporation/founding date.
- Jurisdiction.
- Registered/operating addresses.
- Tax identifiers.
- Company contacts.
- Bank/payment account references—masked.
- Official website/domains.
- Fiscal year.
- Reporting currency.
- Timezone and locales.
- Legal/advisory contacts.
- Supporting registration documents.

## 20.2 Founding Story and Milestones

The product may preserve an internal operating history:

- Founding date.
- Founders and initial roles.
- Original mission/note.
- Incorporation.
- First product/version.
- First customer.
- Major releases.
- Funding/contribution events.
- Team milestones.
- Supporting images/documents.

This timeline is separate from the legal ownership ledger but may link to ownership events.

## 20.3 Ownership Overview

Show:

- Current total allocated percentage.
- Unallocated/reserved percentage if modeled.
- Shareholder/holder list.
- Percentage and share/unit count.
- Holder type: founder, employee, investor, company, option pool, other.
- Voting/economic class placeholder.
- Vesting state.
- Effective/as-of date.
- Legal-record verification status.

Validation:

- Active percentages must total 100% when the configured model requires it.
- If they do not, show the exact variance and prevent marking the view as verified.
- Do not silently normalize percentages.
- Decimal precision policy is explicit.
- Percentage and share-count representations must identify which is authoritative.

## 20.4 Holder Profile

- Person/entity identity.
- Contact details.
- Relationship/role.
- Current holding.
- Acquisition/contribution basis placeholder.
- Vesting schedule.
- Documents.
- Tax/legal identifiers, classified.
- Ownership-event history.
- Notes.

## 20.5 Ownership Events

Supported record concepts:

- Initial issuance/allocation.
- Transfer.
- New issuance.
- Repurchase/cancellation.
- Split/consolidation placeholder.
- Option/reserve allocation.
- Vesting milestone.
- Correction with explanation.

Every event contains:

- Effective date.
- From/to holder where relevant.
- Shares/units and percentage effect.
- Class.
- Consideration amount/currency placeholder.
- Approval/reference.
- Supporting document.
- Before/after ownership preview.
- Reason.
- Verification status.

Finalizing an event requires reauthentication, explicit impact review, and immutable audit history.

## 20.6 Scenario Modeling Versus Official Record

Scenario mode supports:

- Proposed hire grant.
- Proposed investor/holder addition.
- Dilution preview.
- Transfer preview.

Scenario output is visibly labeled **Draft scenario — not the company record**. It never changes official holdings until converted through a reviewed ownership event.

## 20.7 Confidentiality

- Ownership values and documents are classified.
- Default dashboard and global search show only non-sensitive attention indicators.
- Reveal/export is deliberate and auditable.
- The UI states “Internal management record; legal verification required” until an approved source-of-truth process exists.

---

# 21. Support and Ticket System

Routes:

- **/support**
- **/support/tickets**
- **/support/tickets/[ticketId]**
- **/support/queues**
- **/support/service-targets**
- **/support/knowledge**

## 21.1 Support Overview

Show:

- New/untriaged.
- Waiting on Starforge.
- Waiting on customer.
- Critical/high-severity open.
- First-response and resolution target risks.
- Tickets by center/product/category.
- Reopened tickets.
- Linked incidents.
- Oldest unresolved.
- Workload by future assignee.

## 21.2 Ticket Register

Fields:

- Ticket ID.
- Subject.
- Center and branch.
- Contact.
- Product/environment.
- Status.
- Severity/priority.
- Assignee.
- Channel.
- Created/updated.
- First-response due.
- Resolution target.
- Waiting state.
- Linked incident/deployment.

Saved views:

- Untriaged.
- Critical.
- Needs response.
- Waiting on customer.
- SLA risk/breached.
- Bugs.
- Billing.
- On-premise.
- Resolved recently.

## 21.3 Ticket Creation

Sources:

- Manual internal creation.
- Email/Telegram/form/API later.
- Center workspace.
- Incident/deployment.

Fields:

- Center/branch/contact.
- Subject and description.
- Product/version/environment.
- Category/subcategory.
- Severity and business impact.
- Channel.
- Attachments.
- Related contract/payment/deployment/incident.
- Assignee.
- Target dates.

Severity is based on impact and urgency, not customer plan alone.

## 21.4 Ticket Workspace

Header:

- Ticket ID/subject.
- Center/product.
- Status/severity.
- Assignee.
- SLA clocks.
- Last response.

Main conversation:

- Customer-visible messages.
- Internal notes with unmistakably different treatment.
- Attachments.
- Delivery state.
- Edited/redacted markers.
- Message source/channel.

Side context:

- Center health and access state.
- Plan/support tier.
- Relevant usage/configuration.
- Active incidents/deployments.
- Recent related tickets.
- Contact/timezone.
- Contract/SLA.

Actions:

- Assign.
- Change status/severity/category.
- Reply.
- Add internal note.
- Request information.
- Link bug/repository/incident.
- Create technical task.
- Schedule follow-up.
- Resolve with outcome/root-cause category.
- Reopen.

## 21.5 Ticket Lifecycle

- New.
- Triaged.
- In progress.
- Waiting on customer.
- Waiting on Starforge/internal.
- Scheduled.
- Resolved.
- Closed.
- Reopened.
- Canceled/duplicate.

Resolution records:

- Resolution summary.
- Root-cause category.
- Workaround/fix.
- Product version/deployment.
- Customer confirmation state.
- Follow-up/prevention task.

## 21.6 Service Targets

The frontend supports:

- First-response target.
- Update-frequency target.
- Resolution target/goal.
- Coverage calendar/timezone placeholder.
- Severity-specific rules.
- Plan/customer overrides.
- Pause behavior while waiting on customer.

“SLA” should only be used for contractually agreed targets. Otherwise label them “service targets.”

## 21.7 Customer Context and Impersonation

Existing backend concepts include read-only impersonation. The future control panel may offer **Open customer view** when supported.

Requirements:

- Read-only by default.
- Permanent impersonation banner.
- Target center/user and reason.
- Time-limited session.
- No hidden transition from owner context.
- Sensitive owner-only panels unavailable within impersonation.
- Full audit event on start/end.
- Write impersonation requires a separate future policy and is out of scope.

## 21.8 Knowledge and Reuse

Initial knowledge view:

- Internal runbooks.
- Reusable response snippets.
- Known issues.
- Product/version applicability.
- Related repositories/incidents.
- Last reviewed date.

Do not auto-send AI-generated support responses. AI assistance, if added, must show sources, remain a draft, avoid secret/sensitive context, and require human review.

---

# 22. Infrastructure, Providers, Domains, Bots, and Deployments

Routes:

- **/infrastructure**
- **/infrastructure/providers**
- **/infrastructure/servers**
- **/infrastructure/domains**
- **/infrastructure/bots**
- **/infrastructure/deployments**
- **/infrastructure/incidents**
- **/infrastructure/maintenance**

## 22.1 Infrastructure Overview

Organize by operational health, not provider marketing:

- Production/service health.
- Expiring domains/certificates.
- Provider/server renewals.
- Stale monitoring/backups.
- Failed or waiting deployments.
- Open incidents.
- Maintenance windows.
- Monthly infrastructure cost by currency.
- Cost allocation by product/center/environment.
- On-premise site status.

The overview supports two modes:

- **Service view:** product → environment → deployment → infrastructure.
- **Asset view:** provider → server/resource → services/centers.

## 22.2 Providers

Provider categories:

- Cloud/hosting.
- Domain/DNS.
- Email.
- Telegram/messaging/SMS.
- AI.
- Monitoring.
- Storage/backup.
- Payments/banking.
- Development tools.
- Other.

Provider profile:

- Legal/display name.
- Account reference, masked.
- Support contacts.
- Status.
- Services.
- Regions.
- Contracts.
- Bills/expenses.
- Renewal dates.
- Service URLs.
- Security review state.
- Credential reference and last rotation date—never the credential.
- Incidents and dependencies.

## 22.3 Servers and Technical Resources

Resource types:

- Physical server.
- Virtual machine.
- Container cluster.
- Database.
- Object storage.
- Managed service.
- On-premise appliance.
- Network/DNS resource.
- Other.

Fields:

- Name and stable asset code.
- Provider/account.
- Environment.
- Region/location.
- Public/private classification.
- Hostname/IP, masked as policy requires.
- Operating system/runtime metadata.
- Capacity.
- Products/services.
- Centers/sites.
- Owner.
- Health/monitoring.
- Last check.
- Provisioned/renewal/end dates.
- Recurring cost/currency.
- Backup policy/status.
- Patch/maintenance state.
- Credential/vault reference.
- Documentation/runbook.

No terminal, raw secret viewer, or arbitrary cloud mutation is required in V1.

## 22.4 Domains and Certificates

Domain fields:

- Domain/subdomain.
- Purpose.
- Center/product/environment.
- Registrar/provider.
- DNS provider.
- Registration and expiry.
- Auto-renew state.
- Renewal amount/currency.
- Nameserver/DNS health.
- TLS certificate issuer.
- Certificate expiry.
- Last check.
- Owner.
- Related server/deployment.

States distinguish:

- Healthy.
- Renewal due.
- Certificate due.
- DNS issue.
- Verification pending.
- Parked.
- Transferring.
- Expired.
- Unknown/stale.

Renewal reminders can be generated from both domain and certificate dates without duplicate owner alerts.

## 22.5 Telegram Bots

Bot fields:

- Display name and username.
- Purpose.
- Product/center/environment.
- Owner.
- Deployment/server.
- Webhook/polling mode.
- Health/last update.
- Release/version.
- Provider/cost.
- Bot token secret-reference status and last rotation—never the token.
- Allowed chats/policy summary without exposing unnecessary personal data.
- Incidents.

Actions are metadata and controlled integration actions only. Token copy/reveal is not a frontend feature.

## 22.6 Deployments

Deployment record:

- Product/service.
- Environment.
- Center/site if dedicated.
- Version/release/commit.
- Repository.
- Provider/server.
- Domain.
- Deployment status.
- Initiator/source.
- Started/finished.
- Change summary.
- Migrations/compatibility state.
- Health verification.
- Rollback reference.
- Linked tickets/incidents.

Statuses:

- Planned.
- Queued.
- Deploying.
- Verifying.
- Healthy.
- Degraded.
- Failed.
- Rolled back.
- Canceled.
- Unknown/stale.

The panel may trigger an approved deployment pipeline later, but V1 primarily catalogs and observes. A future trigger must use a server-side integration and reviewed environment/action, never a browser token.

## 22.7 On-Premise Sites

Each site tracks:

- Center and branch/location.
- Site code.
- Customer technical contact.
- Hardware/server.
- Installed products and versions.
- License ID, masked.
- License validity.
- Offline grace.
- Activation/last heartbeat.
- Update channel.
- Connectivity.
- Backup.
- Maintenance agreement.
- Next visit/check.
- Open installation/custom tasks.
- Remote-support policy.
- Documents.

On-premise onboarding checklist:

- Requirements confirmed.
- Hardware/network ready.
- Security/data policy agreed.
- Installation scheduled.
- License issued.
- Products installed.
- Domain/certificate configured.
- Backup verified.
- Monitoring/heartbeat verified.
- Staff trained.
- Acceptance document generated/signed.
- Maintenance and renewal reminders active.

## 22.8 Incidents

Incident fields:

- Title/status/severity.
- Start/detected/resolved times.
- Affected products/environments/centers.
- Symptoms and impact.
- Lead/participants.
- Timeline.
- Mitigation.
- Root cause.
- Related deployments/tickets/providers.
- Customer communication log.
- Follow-up actions.
- Post-incident review.

Incident status:

- Investigating.
- Identified.
- Monitoring.
- Resolved.
- Closed.

## 22.9 Infrastructure Costs

- Link expenses to provider and assets.
- Show native-currency recurring/actual cost.
- Allocate by product, environment, center, or shared company cost using explicit percentages.
- Allocation totals validate to 100% when finalized.
- Do not duplicate provider bills when one invoice covers multiple assets; use allocations.

---

# 23. GitHub Repository Collection

Routes:

- **/repositories**
- **/repositories/[repositoryId]**
- **/repositories/releases**
- **/repositories/engineering-health**

## 23.1 Purpose

Create a navigable internal catalog of Starforge source code and connect software ownership to products, deployments, incidents, and operational responsibility.

## 23.2 Repository Register

Fields:

- Organization/name.
- Description.
- Visibility.
- Lifecycle: active, maintenance, archived, experimental.
- Product(s).
- Technical owner/team.
- Default branch.
- Primary language/stack.
- Last push.
- Latest release.
- CI status.
- Open pull requests/issues.
- Security/dependency status summary when available.
- Environments/deployments.
- Documentation/runbook status.
- Sync freshness.

Saved views:

- Active products.
- Needs attention.
- No recent activity.
- No owner.
- Failed CI.
- Release pending.
- Security updates.
- Archived.

## 23.3 Repository Workspace

Tabs:

- Overview.
- Products & ownership.
- Activity.
- Pull requests/issues.
- Releases.
- Workflows.
- Deployments.
- Documentation.
- Incidents.
- Access summary.

Overview includes:

- Repository link.
- Description/topics.
- Lifecycle.
- Owner.
- Product/environment relationships.
- Current release/commit in each environment.
- CI/security health.
- Recent changes.
- Open operational risks.

## 23.4 Sync and Integration

Frontend states:

- Not connected.
- Connecting.
- Synced.
- Syncing.
- Partially synced.
- Rate limited.
- Permission missing.
- Stale.
- Failed.

Security:

- Use a GitHub App or backend-managed credential in production.
- Never ask the user to paste a long-lived personal access token into browser storage.
- The frontend sees scoped repository DTOs, not installation secrets.
- Repository visibility and access membership are treated as sensitive metadata.
- External links identify that the operator is leaving the Starforge Control Panel.

## 23.5 Engineering Health

Use factual signals, not one opaque score:

- Default branch checks.
- Last successful deployment.
- Dependency/security alerts.
- Open high-priority bugs.
- Review backlog.
- Release freshness.
- Documentation/runbook freshness.
- Named owner.

Any combined health label must show which signals produced it.

---

# 24. Audit and System Activity

Routes:

- **/audit**
- **/audit/events/[eventId]**

## 24.1 Audit Register

Filters:

- Date/time.
- Actor.
- Source/system.
- Entity type and ID.
- Action.
- Severity.
- Result.
- Correlation ID.
- IP/session/device metadata when policy permits.

Default event categories:

- Authentication/security.
- Center lifecycle.
- License/restriction.
- Commercial terms.
- Payment/expense.
- Contract/document.
- Salary/HR.
- Ownership.
- Support/impersonation.
- Infrastructure/deployment.
- Integration/settings.

## 24.2 Audit Event Detail

Contains:

- Human action summary.
- Actor/source.
- Timestamp.
- Target.
- Reason.
- Request/result.
- Before/after field-level diff with masking.
- Related events under one correlation.
- Enforcement/integration confirmation.
- Error/retry status.
- Export/reference metadata.

## 24.3 Audit Rules

- Audit events cannot be edited or deleted through the normal UI.
- Sensitive values are redacted even within diffs.
- “Who viewed/revealed/exported salary/equity data” can itself be audited.
- Failed attempts are events.
- System-generated and human-generated actions look distinct.
- Client analytics are not the audit log.

---

# 25. Settings and Administration

Routes:

- **/settings/general**
- **/settings/localization**
- **/settings/finance**
- **/settings/reminders**
- **/settings/dictionaries**
- **/settings/templates**
- **/settings/integrations**
- **/settings/security**
- **/settings/access**
- **/settings/data**

## 25.1 General

- Company display identity.
- Default timezone/locale.
- Week start.
- Date/number format.
- Application title.
- Support/contact identity.

## 25.2 Finance

- Reporting currency.
- Fiscal-year start.
- Native supported currencies.
- Currency display precision.
- FX provider/policy placeholder.
- Expense categories.
- Revenue categories.
- Payment methods/accounts.
- Tax labels placeholder.
- Default collection rules.

## 25.3 Reminder Rules

- Default lead times by obligation type.
- Recurrence defaults.
- Quiet hours.
- Escalation.
- In-app/email/Telegram channels.
- Digest schedule.
- Auto-generation rules.

## 25.4 Dictionaries

Configurable controlled values:

- Tags.
- Center sources.
- Deal-loss reasons.
- Payment methods.
- Expense categories.
- Ticket categories.
- Resolution/root-cause categories.
- Employee departments/roles.
- Asset types.
- Provider types.
- Environments.

Deleting a value already in use becomes archive/replace, not destructive removal.

## 25.5 Templates

- Contract/document templates.
- Email/message templates.
- Collection reminder copy.
- Ticket replies.
- Center restriction notices.
- Internal checklist templates.

## 25.6 Integrations

Cards for:

- Current Starforge backend.
- GitHub.
- Telegram.
- Email.
- Hosting/cloud providers.
- Domain/DNS providers.
- Monitoring.
- AI providers.
- Currency rates.
- E-signature.
- File storage.

Each card shows:

- Connected state.
- Scope/account.
- Last sync.
- Permission summary.
- Health.
- Configure/test/disconnect actions.

Credentials are never returned to or stored by the frontend.

## 25.7 Security

- MFA status.
- Active sessions.
- Recent sign-ins.
- Reauthentication policy summary.
- Sensitive-view/export policy.
- Audit retention placeholder.
- CSP/security-header status from deployment diagnostics.

## 25.8 Access Preparation

Owner-only V1 still defines future roles:

- Owner.
- Finance manager.
- Customer operations.
- Support agent.
- HR manager.
- Technical operator.
- Auditor/read-only.
- Custom.

The frontend should include a read-only capability matrix prototype, but actual invitations/delegation should stay hidden behind a feature flag until backend authorization is complete.

## 25.9 Data and Retention

- Export jobs.
- Retention policy placeholders.
- Archived records.
- Data classifications.
- Backup status.
- Customer offboarding/data-handling defaults.
- Development/demo data reset.

Production destructive data deletion is not specified and must not be improvised.

---

# 26. End-to-End Operating Workflows

These workflows are cross-module acceptance journeys.

## 26.1 Add and Activate an Education Center

1. Create draft organization and contacts.
2. Add branches.
3. Choose public plan or custom deal.
4. Define payment start/cadence/currency.
5. Choose trial or direct activation.
6. Confirm product entitlements and limits.
7. Configure cloud/on-premise requirements.
8. Prepare contract.
9. Generate payment schedule and reminders.
10. Review blockers.
11. Start onboarding/trial/activation.
12. Land on center Overview with next actions.

Acceptance:

- Draft resumes safely.
- Back navigation does not erase later steps.
- Review names all overrides and missing work.
- Activation status is not optimistic.

## 26.2 Negotiate and Accept a Custom Plan

1. Start from a price-book plan or blank terms.
2. Change price/currency/cadence and entitlements.
3. Add setup/on-premise/custom-work terms.
4. Compare against the list plan.
5. Add negotiation note and approval state.
6. Generate proposal/order form.
7. Mark accepted only with accepted date/evidence.
8. Create immutable deal snapshot.
9. Generate future schedule/licensing changes from effective date.

## 26.3 Record a Customer Payment

1. Open collection item or center billing.
2. Choose expected receivable(s).
3. Enter amount/currency/date/method/reference.
4. Attach evidence.
5. Review allocation and duplicate warning.
6. Confirm.
7. View remaining balance and updated status.
8. Confirm or schedule next collection.

## 26.4 Follow Up on a Due Payment

1. Action Center surfaces due item.
2. Open collection context.
3. Review contacts, deal, previous attempts, dispute, and center access.
4. Log communication.
5. Record promise-to-pay or revised date.
6. Schedule reminder.
7. If needed, start—not skip to—the restriction review.

## 26.5 Restrict One App

1. Open center Licenses & Products.
2. Select product.
3. Choose restriction state and timing.
4. Enter reason/customer message.
5. Preview users/branches/integrations affected.
6. Confirm with reauthentication if required.
7. Wait for enforcement confirmation.
8. Record reminder/condition to restore.

## 26.6 Suspend a Whole Center

1. Enter Restrict center access.
2. Select entire-center scope.
3. Choose timing and possible end date.
4. Link cause/payment/contract/incident.
5. Review full impact.
6. Type center name and reauthenticate.
7. Submit once.
8. Show applied, partially applied, or failed result.
9. Create restoration follow-up.

## 26.7 Configure AI for a Center

1. Open Configuration & AI.
2. Review plan/deal entitlement and deployed version.
3. Enable permitted feature set.
4. Set quota/budget, roles, approval, data policy, and overage behavior.
5. Compare override with inherited default.
6. Review estimated impact.
7. Save and wait for enforcement confirmation.
8. Verify health/usage later.

## 26.8 Prepare an On-Premise Customer

1. Select on-premise in center deployment.
2. Create site and technical checklist.
3. Link hardware/server and contacts.
4. Define products, license validity, grace, maintenance, and updates.
5. Configure domain/certificate/backup/monitoring.
6. Generate on-premise agreement.
7. Track installation and acceptance.
8. Start maintenance/license/payment reminders.

## 26.9 Record a Monthly Expense

1. Choose vendor/category.
2. Enter original amount/currency and date.
3. Set paid/due state.
4. Link provider/asset/product/center when useful.
5. Attach receipt.
6. Set recurrence if applicable.
7. Confirm.
8. Review its effect in the month and reporting estimate.

## 26.10 Record a Company Purchase

1. Enter purchase/expense.
2. Mark it as a tracked asset.
3. Add serial/warranty/condition.
4. Assign employee/location.
5. Add return/review date.
6. Link evidence and vendor.

## 26.11 Hire an Employee and Generate Contract

1. Move accepted candidate to hire or start direct hire.
2. Enter employment and compensation.
3. Set start/probation dates.
4. Select approved template.
5. Review generated variables/clauses.
6. Generate watermarked draft in frontend prototype.
7. Record review/signature state.
8. Create onboarding checklist.
9. Activate employee on start date.
10. Generate salary obligations.

## 26.12 Change Salary

1. Open employee Compensation.
2. Create salary revision.
3. Set amount/currency/frequency/gross-net/effective date.
4. Enter reason/approval.
5. Preview old and new terms plus future obligations.
6. Generate change letter if required.
7. Confirm; preserve old salary unchanged.

## 26.13 Record an Ownership Change

1. Create draft ownership event.
2. Choose event type/holders.
3. Enter units/percentage/effective date.
4. Preview cap table before/after and validate totals.
5. Link approval/document.
6. Mark legal verification status.
7. Reauthenticate.
8. Finalize immutable event.

## 26.14 Resolve a Support Ticket

1. Triage center/product/impact.
2. Set severity, owner, and target.
3. Communicate or add internal note.
4. Link incident/repository/deployment if technical.
5. Track waiting states without losing SLA logic.
6. Record resolution/root cause/fix version.
7. Schedule prevention/follow-up if needed.
8. Resolve and later close.

## 26.15 Add a Server, Domain, or Bot

1. Choose asset type.
2. Enter identity/provider/environment.
3. Link products/centers/deployments.
4. Add cost and renewal.
5. Add health/monitoring metadata.
6. Add secret reference—not secret.
7. Generate renewal/maintenance reminder.
8. Confirm and view topology links.

## 26.16 Link a GitHub Repository

1. Select connected GitHub installation/organization.
2. Choose repository.
3. Assign lifecycle, owner, products, and environments.
4. Link deployments/runbooks.
5. Review permission/sync scope.
6. Save.
7. Show first-sync progress and partial errors.

---

# 27. Lifecycle and State Models

State labels should be centralized and type-safe. Backend validation remains authoritative.

## 27.1 Education Center Lifecycle

Recommended states:

- Prospect.
- Negotiating.
- Draft.
- Onboarding.
- Trial active.
- Trial paused.
- Active.
- Past due.
- Restricted.
- Suspended.
- Offboarding.
- Archived.

Important:

- “Past due” can be a commercial health state while product access remains active.
- “Restricted” means some access is limited.
- “Suspended” means center-wide access enforcement.
- Do not infer one from the other without explicit policy.

## 27.2 Subscription

- Draft.
- Scheduled.
- Trial.
- Active.
- Grace.
- Paused.
- Ended.
- Canceled.

## 27.3 Receivable and Payment

Receivable:

- Draft → Scheduled → Due → Partially paid/Paid.
- Due → Overdue.
- Any open state → Disputed.
- Controlled exits: Waived, Written off, Canceled.

Payment:

- Recorded.
- Confirmed.
- Partially allocated.
- Allocated.
- Reversed.
- Refunded/partially refunded.
- Failed only when representing an attempted digital payment.

## 27.4 License

- Scheduled.
- Trial.
- Enabled.
- Read-only.
- Maintenance.
- Grace.
- Disabled.
- Expired.
- Pending enforcement.
- Enforcement failed.
- Unknown.

## 27.5 Contract

- Draft → In review → Approved → Generated → Sent → Partially signed → Signed → Active.
- Active → Expiring → Expired.
- Controlled alternatives: Terminated, Superseded, Voided.

## 27.6 Ticket

- New → Triaged → In progress.
- In progress ↔ Waiting on customer/Waiting on Starforge/Scheduled.
- In progress → Resolved → Closed.
- Resolved/Closed → Reopened.
- Any appropriate open state → Canceled/Duplicate.

## 27.7 Employee

Hiring pipeline states, before an employee record exists:

- Candidate.
- Offered.
- Accepted.

Employee record states:

- Starting.
- Active.
- Probation.
- On leave.
- Suspended.
- Offboarding.
- Former.

Employment state and system-access state are separate.

## 27.8 Infrastructure Asset

- Planned.
- Provisioning.
- Active/healthy.
- Degraded.
- Maintenance.
- Retiring.
- Retired.
- Unknown/stale.

## 27.9 Reminder/Obligation

- Upcoming.
- Due.
- Overdue.
- Snoozed.
- Waiting.
- Completed.
- Canceled.
- Auto-resolved.

Every state transition shown in the frontend should have a clear cause, allowed next actions, and human copy.

---

# 28. Frontend Technology Stack

This recommendation is current as of **2026-09-03**. Pin exact versions in the lockfile and review security advisories at project initialization and before every production release.

## 28.1 Required Foundation

| Concern | Selection | Decision |
|---|---|---|
| Framework | Next.js 16.3 Active LTS line | Start at a patched release at or above 16.3.3; use App Router |
| Runtime | Node.js 24 LTS | Pin the current supported 24.x patch in tool-version and CI files |
| UI runtime | React generation supported by pinned Next.js | Declare compatible react/react-dom versions explicitly |
| Language | TypeScript strict | No implicit any and no unchecked boundary data |
| Package manager | pnpm | Commit lockfile; use frozen installs in CI |
| Bundler | Turbopack via Next.js defaults | Avoid custom bundler configuration without measured need |
| Styling | Tailwind CSS v4 plus semantic CSS custom properties | Preserve Starforge tokens; utilities are implementation, not visual authority |
| Accessible primitives | Radix Primitives | Build owned Starforge components around accessible behavior |
| Icons | Lucide React plus the existing Starforge mark | One icon language; no emoji as interface icons |
| Server state | TanStack Query v5 where live client interaction needs it | Server Components handle initial/read-oriented data |
| Complex registers | TanStack Table | Headless behavior; Starforge owns markup and visuals |
| Forms | React Hook Form plus Zod | Same Zod schemas validate form payloads and API boundaries where appropriate |
| URL state | Native search params; optionally nuqs after a small compatibility spike | Filters, sort, page, tabs, and views should be linkable |
| Dates | date-fns plus Intl.DateTimeFormat | Store ISO dates/instants; format explicitly |
| Money/numbers | Intl.NumberFormat plus decimal-safe utility | Never calculate money with binary floating-point numbers |
| Localization | next-intl | English first; Uzbek/Russian-ready messages and routing policy |
| Charts | Visx primitives | Custom Starforge charts with accessible table fallback |
| Rich template editor | Lexical, loaded only on editor routes | Controlled structured clauses/variables; confirm with an implementation spike |
| Motion | CSS transitions first; Motion for focused shared/exit interactions only | Dynamically import heavy motion where useful |
| Mocking | Mock Service Worker v2 and deterministic fixtures | Browser/test mock adapter matches the documented API contract |
| Unit/component tests | Vitest plus React Testing Library | Behavior and accessibility-oriented tests |
| End-to-end tests | Playwright plus axe-core | Cover critical desktop and mobile flows |
| Component workshop | Storybook | States, responsive behavior, themes, visual regression |
| Error monitoring | Sentry or equivalent adapter later | Scrub PII/secrets; provider is Backend/Operations TBD |

## 28.2 Dependency Philosophy

- Prefer browser and React/Next capabilities over a dependency when the behavior is simple.
- Every dependency needs an owner, purpose, bundle-cost check, maintenance check, and license review.
- Avoid an all-in-one admin-dashboard kit. It will fight the Starforge brand and often ships unused code.
- Radix provides behavior; the team owns components and tokens.
- Do not copy a generic shadcn theme. Individual source patterns may be adapted only when they use Starforge primitives and pass the same quality gates.
- Avoid Redux/Zustand until a proven shared client-state problem remains after URL state, component state, context, and TanStack Query.
- Do not install both overlapping date, chart, form, icon, or toast libraries.
- Keep PDF, DOCX, rich editor, charting, and syntax/diff tooling out of the base route bundle.

## 28.3 Frontend-Only Means

Allowed in this phase:

- Next.js rendering and routing.
- Server Components as part of the frontend delivery architecture.
- Mock adapters and synthetic fixtures.
- Route handlers used only when necessary to support a clearly labeled local demo/mock transport.
- Client-side demo generation of watermarked documents.
- Contract/interface definitions for future APIs.

Not allowed in this phase:

- A new production database.
- Production authentication logic.
- Authoritative billing, licensing, payroll, legal, document, or audit logic.
- Secrets in environment variables exposed with NEXT_PUBLIC.
- Direct browser connections to privileged GitHub, cloud, bot, AI, domain, or infrastructure APIs.
- Treating local mock success as real enforcement.

## 28.4 TypeScript Configuration Expectations

Enable:

- strict.
- noUncheckedIndexedAccess.
- exactOptionalPropertyTypes.
- noImplicitOverride.
- noFallthroughCasesInSwitch.
- useUnknownInCatchVariables.
- consistent type-only imports.

Rules:

- Use unknown at external boundaries, then validate.
- Avoid non-null assertions except when a library contract has already been proven.
- Exhaustively handle discriminated unions.
- Domain IDs use branded/string aliases where confusion is plausible.
- Do not use TypeScript enums for values that cross the API. Prefer readonly literal objects/unions.

## 28.5 Formatting and Linting

- ESLint flat configuration with Next.js, TypeScript, hooks, import-boundary, and accessibility rules.
- Prettier for formatting.
- Run lint explicitly in CI because modern Next.js builds do not automatically run it.
- Enforce no direct environment access outside the typed environment module.
- Enforce no cross-feature deep imports.
- Enforce no unapproved raw color values outside token files.

---

# 29. Next.js Application Architecture

## 29.1 Rendering Strategy

Use this hierarchy:

1. **Server Components by default** for route layouts, initial reads, summaries, and non-interactive composition.
2. **Small Client Components** for dialogs, forms, command menu, tables with local interaction, charts, editors, drag behaviors, and live query refresh.
3. **TanStack Query** for data that is actively refetched/mutated in a client workspace.
4. **URL search parameters** for user-shareable view state.
5. **Local component state** for temporary UI state.

Do not mark a whole page as a Client Component because one button opens a dialog.

## 29.2 Cache and Freshness

Control-panel data is often sensitive and time-dependent.

- Authentication-scoped data is dynamic.
- Finance, HR, ownership, audit, and current license/enforcement reads should default to no shared cache.
- Product catalog/reference dictionaries may use deliberate revalidation when safe.
- Every API DTO that can be stale includes updatedAt and, where relevant, dataFreshness.
- UI labels stale/unknown; it never silently treats old infrastructure or usage data as current.
- Mutations invalidate precise query keys, not the entire application.

## 29.3 Navigation Performance

- Layouts remain stable across sibling routes.
- Use route loading boundaries and meaningful skeletons.
- Prefetch only likely, authorized, safe routes; avoid mass-prefetching sensitive detail.
- Preserve list filter/scroll context when opening and returning from a record.
- Use progressive rendering for large detail workspaces.
- Critical action dialogs are preloaded only when bundle cost is small.

## 29.4 Error Boundaries

Provide:

- Root fatal boundary.
- Auth/session boundary.
- Route-group boundaries.
- Widget/module boundaries for dashboard and integrations.
- Not-found page with entity-aware copy.

An infrastructure sync failure must not blank the customer’s commercial record. A chart error must not hide the data table.

## 29.5 Mutation Pattern

All domain mutations use one typed command interface:

1. Form validates client-visible rules.
2. UI builds explicit command payload.
3. Adapter sends idempotency key and current version/etag when supported.
4. UI shows pending state without claiming success.
5. Server/API returns canonical result and audit correlation.
6. UI updates canonical caches and announces success.
7. Conflicts show latest server state and a comparison/retry path.

Do not use optimistic mutation for:

- Center/product restriction.
- Payment creation/reversal/refund.
- Expense finalization.
- Contract status/signature.
- Salary revision.
- Ownership event.
- Infrastructure/deployment trigger.
- Integration/credential changes.

## 29.6 Concurrency

Editable records carry version or etag metadata.

On HTTP 409/412 equivalent:

- Keep the user’s unsaved input.
- Fetch current canonical record.
- Explain who/what changed it when known.
- Show field-level comparison.
- Allow safe copy/reapply, reload, or cancel.
- Never silently overwrite.

---

# 30. Proposed Route Map

Route groups do not have to appear in the URL. This is the recommended App Router structure:

    src/app/
    ├── (auth)/
    │   ├── login/page.tsx
    │   ├── verify/page.tsx
    │   ├── recover/page.tsx
    │   └── session/locked/page.tsx
    ├── (control)/
    │   ├── layout.tsx
    │   ├── today/page.tsx
    │   ├── actions/
    │   │   ├── page.tsx
    │   │   ├── calendar/page.tsx
    │   │   └── rules/page.tsx
    │   ├── centers/
    │   │   ├── page.tsx
    │   │   ├── new/page.tsx
    │   │   └── [centerId]/
    │   │       ├── layout.tsx
    │   │       ├── page.tsx
    │   │       ├── branches/page.tsx
    │   │       ├── team/page.tsx
    │   │       ├── billing/page.tsx
    │   │       ├── licenses/page.tsx
    │   │       ├── onboarding/page.tsx
    │   │       ├── contracts/page.tsx
    │   │       ├── usage/page.tsx
    │   │       ├── configuration/page.tsx
    │   │       ├── deployments/page.tsx
    │   │       ├── support/page.tsx
    │   │       └── activity/page.tsx
    │   ├── catalog/
    │   │   ├── products/page.tsx
    │   │   ├── plans/page.tsx
    │   │   ├── plans/[planId]/page.tsx
    │   │   ├── deals/page.tsx
    │   │   └── features/page.tsx
    │   ├── revenue/
    │   │   ├── page.tsx
    │   │   ├── receivables/page.tsx
    │   │   ├── schedules/page.tsx
    │   │   ├── payments/page.tsx
    │   │   ├── credits/page.tsx
    │   │   └── reports/page.tsx
    │   ├── expenses/
    │   │   ├── page.tsx
    │   │   ├── ledger/page.tsx
    │   │   ├── bills/page.tsx
    │   │   ├── purchases/page.tsx
    │   │   ├── vendors/page.tsx
    │   │   ├── budgets/page.tsx
    │   │   └── reports/page.tsx
    │   ├── documents/
    │   │   ├── page.tsx
    │   │   ├── contracts/page.tsx
    │   │   ├── templates/page.tsx
    │   │   ├── [documentId]/page.tsx
    │   │   └── jobs/page.tsx
    │   ├── people/
    │   │   ├── page.tsx
    │   │   ├── employees/page.tsx
    │   │   ├── employees/[employeeId]/page.tsx
    │   │   ├── hiring/page.tsx
    │   │   ├── jobs/page.tsx
    │   │   ├── candidates/page.tsx
    │   │   ├── payroll-obligations/page.tsx
    │   │   └── equipment/page.tsx
    │   ├── company/
    │   │   ├── page.tsx
    │   │   ├── profile/page.tsx
    │   │   ├── founding/page.tsx
    │   │   ├── ownership/page.tsx
    │   │   ├── ownership/events/page.tsx
    │   │   └── records/page.tsx
    │   ├── support/
    │   │   ├── page.tsx
    │   │   ├── tickets/page.tsx
    │   │   ├── tickets/[ticketId]/page.tsx
    │   │   ├── queues/page.tsx
    │   │   ├── service-targets/page.tsx
    │   │   └── knowledge/page.tsx
    │   ├── infrastructure/
    │   │   ├── page.tsx
    │   │   ├── providers/page.tsx
    │   │   ├── servers/page.tsx
    │   │   ├── domains/page.tsx
    │   │   ├── bots/page.tsx
    │   │   ├── deployments/page.tsx
    │   │   ├── incidents/page.tsx
    │   │   └── maintenance/page.tsx
    │   ├── repositories/
    │   │   ├── page.tsx
    │   │   ├── [repositoryId]/page.tsx
    │   │   ├── releases/page.tsx
    │   │   └── engineering-health/page.tsx
    │   ├── audit/
    │   │   ├── page.tsx
    │   │   └── events/[eventId]/page.tsx
    │   └── settings/
    │       ├── general/page.tsx
    │       ├── appearance/page.tsx
    │       ├── localization/page.tsx
    │       ├── finance/page.tsx
    │       ├── reminders/page.tsx
    │       ├── dictionaries/page.tsx
    │       ├── templates/page.tsx
    │       ├── integrations/page.tsx
    │       ├── security/page.tsx
    │       ├── access/page.tsx
    │       └── data/page.tsx
    ├── layout.tsx
    ├── error.tsx
    ├── global-error.tsx
    ├── not-found.tsx
    └── globals.css

## 30.1 Modal/Drawer Routes

Use intercepting/parallel routes only after testing browser history, reload, deep-link, and accessibility behavior. A simple URL-addressable full page is preferable to a clever modal route that breaks back navigation.

## 30.2 Canonical URLs

- Stable opaque IDs appear in URLs.
- Human slugs may follow IDs for readability but are not identity.
- Tabs use paths for durable workspaces.
- Filters and register state use search parameters.
- Dialog state enters the URL only when deep linking is genuinely valuable.
- Never put money, salary, token, personal identifier, message body, or secret in a URL.

---

# 31. Recommended Source Organization

Use feature boundaries rather than one enormous components folder:

    src/
    ├── app/
    ├── components/
    │   ├── primitives/
    │   ├── shell/
    │   ├── feedback/
    │   ├── data-display/
    │   ├── forms/
    │   └── charts/
    ├── features/
    │   ├── action-center/
    │   ├── centers/
    │   ├── catalog/
    │   ├── revenue/
    │   ├── expenses/
    │   ├── documents/
    │   ├── people/
    │   ├── company/
    │   ├── support/
    │   ├── infrastructure/
    │   ├── repositories/
    │   ├── audit/
    │   └── settings/
    ├── lib/
    │   ├── api/
    │   │   ├── contracts/
    │   │   ├── http/
    │   │   ├── mock/
    │   │   ├── query-keys.ts
    │   │   └── errors.ts
    │   ├── auth/
    │   ├── money/
    │   ├── dates/
    │   ├── permissions/
    │   ├── telemetry/
    │   ├── env/
    │   └── validation/
    ├── styles/
    │   ├── tokens.css
    │   ├── themes.css
    │   └── utilities.css
    ├── i18n/
    ├── mocks/
    │   ├── fixtures/
    │   ├── factories/
    │   ├── handlers/
    │   └── scenarios/
    └── test/

Rules:

- A feature exposes a public index; other features do not deep-import internals.
- Shared components are promoted only after genuine reuse.
- Domain contract types live at the API/domain boundary, not inside visual components.
- Formatters do not import React.
- Permission helpers do not decide security; they render capabilities supplied by trusted DTOs.
- Business state-label maps are centralized and exhaustively tested.

---

# 32. Data and API Boundary

## 32.1 Adapter Contract

Pages/features depend on interfaces, not transport details:

- Mock adapter for design/development.
- HTTP adapter for future backend.
- Optional server-side adapter facade for Server Components.

Do not call fetch directly from random page/component files. Centralize:

- Base URL.
- Authentication behavior.
- CSRF.
- Timeouts/cancellation.
- Headers.
- Request IDs/idempotency.
- Zod response parsing.
- Error mapping.
- Telemetry redaction.

## 32.2 DTO Shapes

Use purpose-built DTOs:

- Summary DTO for registers.
- Detail DTO for workspaces.
- Edit/input DTO for forms.
- Command result DTO for mutations.
- Export/job DTO for asynchronous work.

Do not ship a giant center object containing every payment, employee, ticket, contract, message, and event.

## 32.3 Pagination and Query

Preferred future contract:

- Cursor pagination for activity, tickets, payments, audit, and other growing ledgers.
- Offset/page pagination is acceptable for stable small dictionaries.
- Server-side filter/sort for large registers.
- Explicit allowed sort/filter fields.
- Search returns typed grouped matches.
- Response includes applied filters, next cursor, and data freshness where helpful.

## 32.4 Error Contract

Map backend errors to:

    interface FieldIssue {
      path: string;
      code: string;
      message: string;
    }

    type ApiError =
      | { kind: 'unauthenticated'; requestId?: string }
      | { kind: 'forbidden'; message?: string; requestId?: string }
      | { kind: 'not-found'; resource: string; requestId?: string }
      | { kind: 'validation'; message: string; fields: FieldIssue[]; requestId?: string }
      | { kind: 'conflict'; message: string; currentVersion?: string; requestId?: string }
      | { kind: 'rate-limited'; retryAfterSeconds?: number; requestId?: string }
      | { kind: 'integration'; provider: string; retryable: boolean; requestId?: string }
      | { kind: 'unavailable'; retryable: boolean; requestId?: string }
      | { kind: 'unexpected'; requestId?: string };

The UI never prints raw server stack traces or arbitrary HTML error messages.

## 32.5 Mutation Result

Sensitive commands should return:

    interface UserVisibleWarning {
      code: string;
      message: string;
      severity: 'informational' | 'warning' | 'critical';
      fieldPath?: string;
    }

    interface EnforcementTargetResult {
      target: EntityRef;
      state: 'confirmed' | 'pending' | 'failed' | 'unknown';
      message?: string;
      confirmedAt?: ISOInstant;
    }

    interface CommandResult<T> {
      data: T;
      canonicalVersion: string;
      auditEventId: string;
      correlationId: string;
      enforcement?: {
        state: 'confirmed' | 'pending' | 'partial' | 'failed';
        targets: EnforcementTargetResult[];
      };
      warnings: UserVisibleWarning[];
    }

## 32.6 Dates and Time

- Date-only fields use YYYY-MM-DD strings and must not be coerced through UTC midnight.
- Instants use ISO 8601 UTC strings.
- Recurrence rules include a source timezone.
- UI shows relative wording plus absolute date where ambiguity matters.
- Hover/focus reveals exact timestamp and timezone.
- Tests freeze time and cover month/year/timezone boundaries.

## 32.7 Money

Recommended base type:

    type CurrencyCode = string;

    interface Money {
      amount: string;
      currency: CurrencyCode;
    }

`amount` is a canonical base-10 decimal string in the currency's major unit, with `.` as the decimal separator, no grouping characters, and no exponent notation—for example `"159.00"`. Validation must enforce the configured precision for the currency. Minor-unit integers, if used by a provider integration, are converted only inside that adapter and never cross the Starforge domain boundary.

Converted money:

    interface MoneyConversion {
      original: Money;
      reporting: Money;
      rate: string;
      rateDate: string;
      source: string;
      method: 'spot' | 'period-average' | 'period-end' | 'manual';
      estimated: true;
    }

## 32.8 Files

File DTOs expose metadata and short-lived authorized links:

    interface FileArtifact {
      id: string;
      name: string;
      mediaType: string;
      sizeBytes: number;
      classification: 'internal' | 'confidential' | 'restricted';
      scanState: 'pending' | 'safe' | 'rejected' | 'unknown';
      checksum?: string;
      createdAt: string;
      createdBy: ActorRef;
      downloadCapability?: 'allowed' | 'reauth-required' | 'denied';
    }

The browser must not receive permanent storage credentials or public URLs for private files.

---

# 33. Provisional Domain Contracts

These contracts exist to keep frontend fixtures and screens coherent. They are **Backend TBD**, deliberately incomplete for jurisdictional/accounting rules, and expected to evolve through versioned API design.

## 33.1 Shared Primitives

    type EntityId = string;
    type ISODate = string;
    type ISOInstant = string;
    type TimeZoneId = string;

    interface ActorRef {
      id: EntityId;
      type: 'operator' | 'employee' | 'system' | 'integration';
      displayName: string;
    }

    interface EntityRef {
      id: EntityId;
      type:
        | 'center'
        | 'branch'
        | 'center-contact'
        | 'center-employee'
        | 'product'
        | 'plan'
        | 'deal'
        | 'subscription'
        | 'license'
        | 'restriction'
        | 'trial'
        | 'receivable'
        | 'payment'
        | 'payment-schedule'
        | 'expense'
        | 'vendor'
        | 'company-asset'
        | 'contract'
        | 'document'
        | 'employee'
        | 'candidate'
        | 'salary-revision'
        | 'payroll-obligation'
        | 'holder'
        | 'ownership-event'
        | 'ticket'
        | 'provider'
        | 'server'
        | 'domain'
        | 'bot'
        | 'deployment'
        | 'on-premise-site'
        | 'incident'
        | 'repository'
        | 'reminder';
      label: string;
    }

    interface VersionedRecord {
      version: string;
      createdAt: ISOInstant;
      updatedAt: ISOInstant;
    }

    interface DataFreshness {
      observedAt: ISOInstant;
      state: 'live' | 'fresh' | 'stale' | 'unknown';
      source: string;
    }

## 33.2 Center and Branch

    interface CenterContact extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      displayName: string;
      roles: string[];
      emailMasked?: string;
      phoneMasked?: string;
      telegramHandleMasked?: string;
      isPrimary: boolean;
      status: 'active' | 'inactive';
    }

    interface CenterEmployeeSummary extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      branchIds: EntityId[];
      displayName: string;
      centerRole?: string;
      productRoles: Array<{ productId: EntityId; role: string }>;
      status: 'invited' | 'active' | 'blocked' | 'inactive' | 'unknown';
      freshness?: DataFreshness;
    }

    interface UsageReading {
      key: string;
      label: string;
      value: string;
      unit?: string;
      limit?: string;
      period?: { startsOn: ISODate; endsOn: ISODate };
      freshness: DataFreshness;
    }

    type CenterLifecycle =
      | 'prospect'
      | 'negotiating'
      | 'draft'
      | 'onboarding'
      | 'trial-active'
      | 'trial-paused'
      | 'active'
      | 'past-due'
      | 'restricted'
      | 'suspended'
      | 'offboarding'
      | 'archived';

    interface CenterSummary extends VersionedRecord {
      id: EntityId;
      code: string;
      displayName: string;
      legalName?: string;
      lifecycle: CenterLifecycle;
      city?: string;
      countryCode?: string;
      timezone: TimeZoneId;
      planLabel?: string;
      deploymentModel?: 'starforge-cloud' | 'customer-cloud' | 'on-premise' | 'hybrid';
      branchCount: number;
      enabledProductCount: number;
      nextCollection?: { dueDate: ISODate; amount: Money; state: ReceivableState };
      openCriticalTicketCount: number;
      attention: AttentionItem[];
    }

    interface CenterDetail extends CenterSummary {
      website?: string;
      registrationIdMasked?: string;
      locale: string;
      contacts: CenterContact[];
      dealSummary?: DealSummary;
      trialSummary?: TrialSummary;
      licenseSummary: LicenseSummary[];
      usageSummary: UsageReading[];
      deploymentSummary: DeploymentSummary[];
      capabilities: CenterCapabilities;
    }

    interface BranchSummary extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      code: string;
      name: string;
      status: 'planned' | 'active' | 'inactive' | 'closed';
      city?: string;
      timezone: TimeZoneId;
      studentCount?: number;
      centerEmployeeCount?: number;
      deploymentIds: EntityId[];
      freshness?: DataFreshness;
    }

## 33.3 Products, Plans, Deals, and Licenses

    type BillingCadence =
      | 'one-time'
      | 'monthly'
      | 'quarterly'
      | 'annual'
      | 'installments'
      | 'milestones'
      | 'custom';

    interface EntitlementValue {
      key: string;
      value: string | number | boolean | null;
      unit?: string;
      source?: 'product-default' | 'plan' | 'deal' | 'center-override' | 'restriction';
    }

    interface Product extends VersionedRecord {
      id: EntityId;
      code: string;
      name: string;
      platform: 'web' | 'mobile' | 'desktop' | 'service' | 'cross-product';
      lifecycle: 'planned' | 'beta' | 'available' | 'maintenance' | 'deprecated' | 'retired';
      entitlementKeys: string[];
      configurationSchemaVersion?: string;
    }

    interface PlanVersion extends VersionedRecord {
      id: EntityId;
      planId: EntityId;
      versionLabel: string;
      name: string;
      state: 'draft' | 'scheduled' | 'active' | 'retired';
      effectiveFrom?: ISODate;
      effectiveTo?: ISODate;
      listPrices: Array<{ cadence: BillingCadence; money: Money }>;
      limits: Record<string, string | number | boolean>;
      entitlements: EntitlementValue[];
      supportTier?: string;
    }

    interface DealSummary extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      label: string;
      state: 'draft' | 'proposed' | 'in-negotiation' | 'accepted' | 'declined' | 'superseded';
      basePlanVersionId?: EntityId;
      agreedPrice: Money;
      cadence: BillingCadence;
      startsOn: ISODate;
      endsOn?: ISODate;
      acceptedOn?: ISODate;
      successorDealId?: EntityId;
    }

    interface SubscriptionSummary extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      dealId: EntityId;
      state: 'draft' | 'scheduled' | 'trial' | 'active' | 'grace' | 'paused' | 'ended' | 'canceled';
      startsOn: ISODate;
      endsOn?: ISODate;
      renewalOn?: ISODate;
      cancellationReason?: string;
    }

    type LicenseState =
      | 'scheduled'
      | 'trial'
      | 'enabled'
      | 'read-only'
      | 'maintenance'
      | 'grace'
      | 'disabled'
      | 'expired'
      | 'enforcement-pending'
      | 'enforcement-failed'
      | 'unknown';

    interface LicenseSummary extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      productId: EntityId;
      siteId?: EntityId;
      state: LicenseState;
      effectiveFrom?: ISOInstant;
      effectiveUntil?: ISOInstant;
      inheritedFrom: 'product' | 'plan' | 'deal' | 'center-override' | 'restriction';
      limitSummary: Array<{ key: string; effectiveValue: string; source: string }>;
      enforcement?: {
        state: 'confirmed' | 'pending' | 'partial' | 'failed' | 'unknown';
        confirmedAt?: ISOInstant;
        correlationId?: string;
      };
    }

    interface RestrictionRecord extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      productId?: EntityId;
      capabilityKey?: string;
      scope: 'center' | 'product' | 'capability';
      mode: 'read-only' | 'disabled' | 'suspended';
      state: 'scheduled' | 'enforcement-pending' | 'active' | 'restore-pending' | 'restored' | 'failed' | 'canceled';
      effectiveFrom: ISOInstant;
      effectiveUntil?: ISOInstant;
      reasonCategory: 'payment-overdue' | 'contract-ended' | 'security' | 'customer-request' | 'maintenance' | 'policy' | 'other';
      reason: string;
      correlationId?: string;
      enforcementTargets: EnforcementTargetResult[];
    }

    interface CenterConfigurationSnapshot extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      schemaVersion: string;
      state: 'draft' | 'scheduled' | 'active' | 'superseded' | 'failed';
      effectiveFrom?: ISOInstant;
      values: Record<string, string | number | boolean | null>;
      aiPolicy?: {
        enabled: boolean;
        monthlyBudget?: Money;
        quota?: string;
        approvalRequired: boolean;
        overageBehavior: 'block' | 'warn' | 'allow' | 'policy-undefined';
      };
    }

## 33.4 Trial and Onboarding

    interface TrialSummary extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      state: 'scheduled' | 'active' | 'paused' | 'converted' | 'declined' | 'expired';
      startsOn: ISODate;
      endsOn: ISODate;
      decisionOn?: ISODate;
      productIds: EntityId[];
      criteria: Array<{
        id: EntityId;
        label: string;
        state: 'not-assessed' | 'on-track' | 'at-risk' | 'met' | 'not-met';
      }>;
      completedTaskCount: number;
      totalTaskCount: number;
    }

## 33.5 Revenue

    type ReceivableState =
      | 'draft'
      | 'scheduled'
      | 'due'
      | 'partially-paid'
      | 'paid'
      | 'overdue'
      | 'disputed'
      | 'waived'
      | 'written-off'
      | 'canceled';

    interface Receivable extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      dealId?: EntityId;
      scheduleId?: EntityId;
      label: string;
      period?: { startsOn: ISODate; endsOn: ISODate };
      expectedOn?: ISODate;
      dueOn: ISODate;
      originalAmount: Money;
      paidAmount: Money;
      remainingAmount: Money;
      state: ReceivableState;
      nextFollowUpOn?: ISODate;
    }

    type PaymentState =
      | 'recorded'
      | 'confirmed'
      | 'partially-allocated'
      | 'allocated'
      | 'partially-refunded'
      | 'refunded'
      | 'reversed'
      | 'failed';

    interface PaymentBase extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      amount: Money;
      method: 'bank-transfer' | 'cash' | 'card' | 'wallet' | 'check' | 'other';
      externalReference?: string;
      payerName?: string;
      fee?: Money;
      allocations: Array<{ receivableId: EntityId; amount: Money }>;
      evidence: FileArtifact[];
      reversalOfPaymentId?: EntityId;
    }

    type Payment = PaymentBase &
      (
        | {
            state: 'failed';
            attemptedAt: ISOInstant;
            receivedAt?: never;
            refundedAmount?: never;
            failureReasonMasked?: string;
          }
        | {
            state: Extract<PaymentState, 'partially-refunded' | 'refunded'>;
            attemptedAt?: ISOInstant;
            receivedAt: ISOInstant;
            refundedAmount: Money;
            failureReasonMasked?: never;
          }
        | {
            state: Exclude<PaymentState, 'failed' | 'partially-refunded' | 'refunded'>;
            attemptedAt?: ISOInstant;
            receivedAt: ISOInstant;
            refundedAmount?: never;
            failureReasonMasked?: never;
          }
      );

    interface PaymentSchedule extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      dealId: EntityId;
      kind: 'one-time' | 'recurring' | 'installments' | 'milestones' | 'custom';
      currency: CurrencyCode;
      startsOn: ISODate;
      endsOn?: ISODate;
      cadence?: BillingCadence;
      graceDays: number;
      nextGenerationOn?: ISODate;
      itemCount: number;
    }

## 33.6 Expenses and Vendors

    interface Expense extends VersionedRecord {
      id: EntityId;
      expenseDate: ISODate;
      dueOn?: ISODate;
      paidOn?: ISODate;
      vendorId?: EntityId;
      description: string;
      categoryId: EntityId;
      amount: Money;
      tax?: Money;
      state: 'draft' | 'awaiting-payment' | 'paid' | 'reimbursable' | 'reimbursed' | 'disputed' | 'canceled';
      recurrenceId?: EntityId;
      relatedEntities: EntityRef[];
      evidence: FileArtifact[];
      payrollObligationId?: EntityId;
    }

    interface Vendor extends VersionedRecord {
      id: EntityId;
      displayName: string;
      legalName?: string;
      category: string;
      countryCode?: string;
      preferredCurrency?: CurrencyCode;
      serviceIds: EntityId[];
      nextRenewalOn?: ISODate;
      status: 'active' | 'inactive' | 'under-review';
    }

    interface CompanyAsset extends VersionedRecord {
      id: EntityId;
      name: string;
      type: string;
      serialMasked?: string;
      purchasedOn: ISODate;
      purchaseExpenseId: EntityId;
      assignedEmployeeId?: EntityId;
      condition: 'new' | 'good' | 'fair' | 'damaged' | 'retired';
      warrantyEndsOn?: ISODate;
    }

## 33.7 Contracts and Documents

    type ContractState =
      | 'draft'
      | 'in-review'
      | 'approved'
      | 'generated'
      | 'sent'
      | 'partially-signed'
      | 'signed'
      | 'active'
      | 'expiring'
      | 'expired'
      | 'terminated'
      | 'superseded'
      | 'voided';

    interface ContractRecord extends VersionedRecord {
      id: EntityId;
      title: string;
      type: string;
      state: ContractState;
      counterparty: EntityRef;
      relatedEntities: EntityRef[];
      templateVersionId?: EntityId;
      effectiveOn?: ISODate;
      expiresOn?: ISODate;
      renewsOn?: ISODate;
      value?: Money;
      legalReview: 'not-requested' | 'required' | 'in-review' | 'approved' | 'rejected';
      signatureState: 'not-required' | 'not-started' | 'in-progress' | 'complete' | 'declined';
      artifacts: FileArtifact[];
      supersedesId?: EntityId;
    }

    interface DocumentGenerationJob extends VersionedRecord {
      id: EntityId;
      contractId: EntityId;
      formats: Array<'pdf' | 'docx'>;
      state: 'queued' | 'rendering' | 'complete' | 'partial' | 'failed' | 'canceled';
      progress?: number;
      artifacts: FileArtifact[];
      validationIssues: FieldIssue[];
    }

## 33.8 People and Compensation

    type EmployeeState =
      | 'starting'
      | 'active'
      | 'probation'
      | 'on-leave'
      | 'suspended'
      | 'offboarding'
      | 'former';

    interface EmployeeSummary extends VersionedRecord {
      id: EntityId;
      displayName: string;
      jobTitle: string;
      department?: string;
      managerId?: EntityId;
      state: EmployeeState;
      employmentType: 'employee' | 'contractor' | 'intern' | 'advisor' | 'other';
      startsOn: ISODate;
      endsOn?: ISODate;
      timezone: TimeZoneId;
      nextObligation?: AttentionItem;
      compensationRevealCapability: 'allowed' | 'reauth-required' | 'denied';
    }

    interface SalaryRevision extends VersionedRecord {
      id: EntityId;
      employeeId: EntityId;
      amount: Money;
      frequency: 'hourly' | 'monthly' | 'annual' | 'project' | 'other';
      basis: 'gross' | 'net' | 'policy-undefined';
      effectiveFrom: ISODate;
      effectiveTo?: ISODate;
      reason: string;
      components: Array<{ type: 'bonus' | 'commission' | 'allowance' | 'deduction'; label: string; amount?: Money }>;
      supportingContractId?: EntityId;
      approvedBy?: ActorRef;
    }

    interface PayrollObligation extends VersionedRecord {
      id: EntityId;
      employeeId: EntityId;
      salaryRevisionId?: EntityId;
      period: { startsOn: ISODate; endsOn: ISODate };
      dueOn: ISODate;
      amount: Money;
      state: 'draft' | 'due' | 'partially-paid' | 'paid' | 'deferred' | 'canceled';
      expenseId?: EntityId;
      paidOn?: ISODate;
    }

    interface CandidateSummary extends VersionedRecord {
      id: EntityId;
      displayName: string;
      jobId?: EntityId;
      stage: string;
      source?: string;
      expectedCompensation?: Money;
      availableOn?: ISODate;
      retentionReviewOn?: ISODate;
    }

## 33.9 Ownership

    interface Holder extends VersionedRecord {
      id: EntityId;
      displayName: string;
      type: 'founder' | 'employee' | 'investor' | 'company' | 'option-pool' | 'other';
      relationship?: string;
      verification: 'unverified' | 'in-review' | 'verified';
    }

    interface HoldingSnapshot {
      asOf: ISODate;
      holderId: EntityId;
      shareClass?: string;
      units?: string;
      percentage: string;
      vestedUnits?: string;
      sourceEventId: EntityId;
    }

    interface OwnershipEvent extends VersionedRecord {
      id: EntityId;
      type: 'initial' | 'issuance' | 'transfer' | 'repurchase' | 'cancellation' | 'reserve' | 'vesting' | 'correction';
      effectiveOn: ISODate;
      fromHolderId?: EntityId;
      toHolderId?: EntityId;
      units?: string;
      percentageEffect?: string;
      consideration?: Money;
      reason: string;
      verification: 'draft' | 'in-review' | 'verified';
      evidence: FileArtifact[];
    }

## 33.10 Support

    type TicketState =
      | 'new'
      | 'triaged'
      | 'in-progress'
      | 'waiting-customer'
      | 'waiting-starforge'
      | 'scheduled'
      | 'resolved'
      | 'closed'
      | 'reopened'
      | 'canceled'
      | 'duplicate';

    type TicketChannel = 'manual' | 'email' | 'telegram' | 'form' | 'api';

    interface TicketSummary extends VersionedRecord {
      id: EntityId;
      displayId: string;
      centerId?: EntityId;
      branchId?: EntityId;
      productId?: EntityId;
      subject: string;
      state: TicketState;
      severity: 'critical' | 'high' | 'medium' | 'low';
      assigneeId?: EntityId;
      channel: TicketChannel;
      firstResponseDueAt?: ISOInstant;
      resolutionTargetAt?: ISOInstant;
      latestMessageAt?: ISOInstant;
      incidentId?: EntityId;
    }

    interface TicketMessage extends VersionedRecord {
      id: EntityId;
      ticketId: EntityId;
      visibility: 'customer' | 'internal';
      author: ActorRef;
      body: string;
      channel: TicketChannel;
      sentAt: ISOInstant;
      deliveryState?: 'pending' | 'sent' | 'failed';
      attachments: FileArtifact[];
    }

## 33.11 Infrastructure

    interface Provider extends VersionedRecord {
      id: EntityId;
      displayName: string;
      category: string;
      state: 'active' | 'degraded' | 'inactive' | 'under-review';
      accountReferenceMasked?: string;
      credentialReferenceState?: 'configured' | 'missing' | 'rotation-due' | 'unknown';
      nextRenewalOn?: ISODate;
      recurringCost?: Money;
    }

    interface ServerAsset extends VersionedRecord {
      id: EntityId;
      code: string;
      name: string;
      resourceType: string;
      providerId?: EntityId;
      environment: string;
      region?: string;
      state: 'planned' | 'provisioning' | 'healthy' | 'degraded' | 'maintenance' | 'retiring' | 'retired' | 'unknown';
      productIds: EntityId[];
      centerIds: EntityId[];
      hostnameMasked?: string;
      recurringCost?: Money;
      healthFreshness?: DataFreshness;
      backupState?: 'healthy' | 'failed' | 'stale' | 'not-configured' | 'unknown';
    }

    interface DomainAsset extends VersionedRecord {
      id: EntityId;
      hostname: string;
      purpose: string;
      providerId?: EntityId;
      centerId?: EntityId;
      productId?: EntityId;
      environment?: string;
      expiresOn?: ISODate;
      autoRenew?: boolean;
      certificateExpiresOn?: ISOInstant;
      state: 'healthy' | 'renewal-due' | 'certificate-due' | 'dns-issue' | 'pending' | 'parked' | 'transferring' | 'expired' | 'unknown';
      freshness?: DataFreshness;
    }

    interface TelegramBotAsset extends VersionedRecord {
      id: EntityId;
      displayName: string;
      username: string;
      purpose: string;
      centerId?: EntityId;
      productId?: EntityId;
      environment: string;
      deploymentId?: EntityId;
      state: 'healthy' | 'degraded' | 'disabled' | 'unknown';
      tokenReferenceState: 'configured' | 'missing' | 'rotation-due' | 'unknown';
      freshness?: DataFreshness;
    }

    interface DeploymentSummary extends VersionedRecord {
      id: EntityId;
      productId: EntityId;
      environment: string;
      centerId?: EntityId;
      repositoryId?: EntityId;
      commitShaShort?: string;
      versionLabel?: string;
      state: 'planned' | 'queued' | 'deploying' | 'verifying' | 'healthy' | 'degraded' | 'failed' | 'rolled-back' | 'canceled' | 'unknown';
      deployedAt?: ISOInstant;
      freshness?: DataFreshness;
    }

    interface OnPremiseSiteSummary extends VersionedRecord {
      id: EntityId;
      centerId: EntityId;
      branchId?: EntityId;
      name: string;
      state: 'planned' | 'preparing' | 'ready' | 'active' | 'maintenance' | 'degraded' | 'retired' | 'unknown';
      timezone: TimeZoneId;
      deploymentIds: EntityId[];
      domainIds: EntityId[];
      credentialReferenceState: 'configured' | 'missing' | 'rotation-due' | 'unknown';
      backupState: 'healthy' | 'failed' | 'stale' | 'not-configured' | 'unknown';
      maintenanceDueOn?: ISODate;
      freshness?: DataFreshness;
    }

    interface IncidentSummary extends VersionedRecord {
      id: EntityId;
      displayId: string;
      title: string;
      severity: 'critical' | 'high' | 'medium' | 'low';
      state: 'investigating' | 'identified' | 'monitoring' | 'resolved' | 'closed';
      startedAt: ISOInstant;
      resolvedAt?: ISOInstant;
      productIds: EntityId[];
      centerIds: EntityId[];
      deploymentIds: EntityId[];
      ownerId?: EntityId;
      ticketIds: EntityId[];
    }

## 33.12 Repository

    interface RepositorySummary extends VersionedRecord {
      id: EntityId;
      provider: 'github';
      owner: string;
      name: string;
      visibility: 'private' | 'internal' | 'public';
      lifecycle: 'active' | 'maintenance' | 'archived' | 'experimental';
      productIds: EntityId[];
      technicalOwnerId?: EntityId;
      defaultBranch: string;
      primaryLanguage?: string;
      lastPushedAt?: ISOInstant;
      latestRelease?: string;
      ciState?: 'passing' | 'failing' | 'pending' | 'unknown';
      openPullRequestCount?: number;
      openIssueCount?: number;
      syncState: 'not-connected' | 'syncing' | 'synced' | 'partial' | 'rate-limited' | 'permission-missing' | 'stale' | 'failed';
      freshness?: DataFreshness;
    }

## 33.13 Actions and Audit

    interface AttentionItem {
      id: EntityId;
      severity: 'critical' | 'high' | 'medium' | 'low' | 'informational';
      label: string;
      dueAt?: ISOInstant;
      source: EntityRef;
    }

    interface Reminder extends VersionedRecord {
      id: EntityId;
      title: string;
      description?: string;
      primaryEntity: EntityRef;
      relatedEntities: EntityRef[];
      dueAt: ISOInstant;
      timezone: TimeZoneId;
      state: 'upcoming' | 'due' | 'overdue' | 'snoozed' | 'waiting' | 'completed' | 'canceled' | 'auto-resolved';
      severity: 'critical' | 'high' | 'medium' | 'low' | 'informational';
      recurrenceRule?: string;
      channels: Array<'in-app' | 'email' | 'telegram'>;
      autoGenerated: boolean;
    }

    interface AuditEvent {
      id: EntityId;
      occurredAt: ISOInstant;
      actor: ActorRef;
      action: string;
      target: EntityRef;
      result: 'succeeded' | 'failed' | 'partial';
      reason?: string;
      correlationId: string;
      changes: Array<{
        field: string;
        beforeMasked?: string;
        afterMasked?: string;
      }>;
      relatedEntities: EntityRef[];
    }

## 33.14 Capability DTOs

Frontend visibility/action availability should come from capabilities:

    interface CenterCapabilities {
      canEdit: boolean;
      canCreatePayment: boolean;
      canChangeDeal: boolean;
      canRestrictProducts: boolean;
      canSuspendCenter: boolean;
      canImpersonateReadOnly: boolean;
      canGenerateDocuments: boolean;
      requiredReauthentication: string[];
    }

Capability flags improve UX but are not a security boundary. The backend must authorize every request.

---

# 34. Mock Service, Fixtures, and Demo Safety

The frontend phase must behave like a coherent product without implying that demo actions affect production. Mock behavior is part of the deliverable, not disposable page-local data.

## 34.1 Mock Adapter Requirements

- Every feature reads and mutates data through the same typed adapter interfaces intended for the future backend.
- Pages and visual components must not import fixtures directly.
- Mock handlers validate request payloads with the same schemas used at the adapter boundary.
- Successful mutations return canonical records, versions, audit IDs, correlation IDs, warnings, and enforcement results where applicable.
- Mutation latency is simulated deterministically enough to expose pending, duplicate-submit, cancellation, and navigation behavior.
- The adapter can deliberately return validation, authorization, conflict, rate-limit, integration, unavailable, and unexpected errors.
- Mock state resets through an explicit developer action and never silently during an operator workflow.

## 34.2 Fixture Rules

Fixtures must be synthetic and must not resemble actual customers, employees, shareholders, credentials, account numbers, or private infrastructure.

Each fixture set includes:

- Stable opaque IDs.
- Multiple currencies and timezones.
- Long and short names, missing optional fields, and realistic text lengths.
- Historical versions for deals, salaries, contracts, ownership, and restrictions.
- Linked records across centers, finance, support, infrastructure, repositories, reminders, and audit.
- Fresh, stale, unknown, partial, and failed integration states.
- Accessible attachment metadata without real private files.

Synthetic records use unmistakable labels such as **Demo Center — Northstar**. Screens backed by mock data display a persistent **Demo data — no production changes** indicator.

## 34.3 Required Scenarios

At minimum, ship deterministic scenarios for:

1. Empty company with guided first actions.
2. Healthy operating month.
3. Overdue center that remains licensed during grace.
4. One product restricted while the rest of the center remains active.
5. Center-wide suspension with partial enforcement failure.
6. Trial expiring with incomplete onboarding tasks.
7. Multi-currency receivable with partial payment and refund.
8. Recurring expense and salary obligation without double counting.
9. Contract generation with missing variables and legal review required.
10. Critical support ticket linked to an incident and deployment.
11. Stale infrastructure, domain renewal, and failed backup.
12. Concurrent edit conflict preserving the operator's draft.
13. Session expiry during a sensitive form.
14. Permission-denied views for future delegated roles.

## 34.4 Time and Randomness

- Tests and story fixtures use an injectable clock.
- Relative dates derive from a declared scenario timestamp and timezone.
- Generated IDs and values are seeded in tests.
- Scenarios cover month-end, year-end, leap-day, daylight-saving transitions, and Asia/Tashkent date boundaries.
- No fixture relies on the developer machine's locale, timezone, or current date.

## 34.5 Demo Document Generation

Client-generated PDF or DOCX artifacts are allowed only for the demo experience and must:

- Be visibly watermarked **DEMO — NOT LEGALLY VALID**.
- Contain synthetic parties and values only.
- Never claim a signature is legally verified.
- Avoid uploading content to an unapproved external service.
- Be replaceable by the asynchronous backend job contract without redesigning the UI.

---

# 35. Responsive, Accessibility, and Localization Implementation

Section 5 defines the product behavior; this section defines frontend acceptance details.

## 35.1 Supported Viewport Behavior

The application must remain usable at widths from 320 CSS pixels through large desktop layouts and at 200% browser zoom.

- Registers may become cards or focused row-detail views on narrow screens.
- Priority, entity, amount, due date, and primary action remain visible without horizontal scrolling.
- Wide comparison tables may scroll inside a named region when transformation would destroy meaning.
- Dialogs that do not fit become full-screen task surfaces on small viewports.
- Sticky controls must not obscure focused fields, validation messages, or mobile browser controls.
- Pointer, keyboard, touch, and screen-reader paths must expose the same consequential actions.

## 35.2 Accessibility Acceptance

- Use semantic landmarks, headings, lists, forms, buttons, links, dialogs, and tables before adding ARIA.
- Every page has one descriptive level-one heading and a meaningful document title.
- Focus moves predictably after navigation, dialog open/close, validation failure, row deletion/archive, and successful creation.
- Status changes and asynchronous results use appropriate live-region announcements without repeated noise.
- Errors are summarized and linked to their fields; fields also expose local error text.
- Tables include captions or equivalent accessible names, correct header associations, and a non-visual description when structure is complex.
- Charts have a textual summary and access to the underlying data table.
- Drag interactions have keyboard alternatives.
- Color contrast, visible focus, target size, reduced motion, forced-colors mode, text spacing, and reflow are tested against WCAG 2.2 AA.

Automated accessibility tests are necessary but do not replace keyboard and screen-reader review of critical flows.

## 35.3 Localization Rules

- All user-visible product copy lives in the message system; do not assemble translated sentences from fragments.
- English is the first complete locale. Russian and Uzbek pseudo-completeness checks run before those locales are declared supported.
- Layouts tolerate at least 40% text expansion.
- Dates, times, currencies, numbers, plural rules, names, and lists use locale-aware formatters.
- Original currency code remains visible even when a localized symbol is shown.
- User-entered names and identifiers are not transliterated automatically.
- Search behavior documents case, diacritic, Cyrillic/Latin, and locale expectations.
- URL identity is locale-independent. A later localized routing policy must not change entity IDs.

## 35.4 Content Safety

- Sensitive values are masked by default and reveal actions are explicit, capability-gated, short-lived, and audited by the future backend.
- Empty, error, stale, and permission-denied copy never exposes hidden record existence.
- Destructive and enforcement language names the target and consequence precisely.
- Legal, accounting, payroll, tax, equity, and AI-policy text shows review status and avoids presenting assumptions as professional advice.

---

# 36. Testing, Performance, and Frontend Quality Gates

## 36.1 Test Layers

| Layer | Required coverage |
|---|---|
| Type and schema | DTO parsing, discriminated unions, money/date invariants, fixture validity |
| Unit | Formatters, entitlement resolution display, status transitions, permission presentation, recurrence helpers |
| Component | Forms, registers, dialogs, error states, keyboard behavior, responsive variants |
| Contract | Every mock adapter request/response against shared schemas and canonical examples |
| Integration | Feature workflows across adapter, cache, routing, and audit-result UI |
| End to end | Critical workflows on desktop and mobile-sized projects |
| Accessibility | Automated axe checks plus manual keyboard and screen-reader checks |
| Visual | Stable Storybook states for core primitives, dense registers, charts, and responsive layouts |

## 36.2 Critical End-to-End Suite

The release-blocking suite covers:

1. Sign in, MFA placeholder flow, session lock, and reauthentication.
2. Create a center through review and demo activation.
3. Record and allocate a payment, including validation and duplicate-submit protection.
4. Restrict one product, review impact, handle pending/partial enforcement, and restore it.
5. Suspend a center and confirm that commercial history remains readable.
6. Enter an expense and verify salary double-count protection.
7. Generate a watermarked demo contract with missing-variable handling.
8. Change salary through a new immutable revision.
9. Record an ownership event with review status.
10. Create, update, and resolve a support ticket.
11. Inspect stale infrastructure and linked incident context.
12. Resolve an optimistic-concurrency conflict without losing draft input.

## 36.3 Browser and Device Matrix

- Latest two stable releases of Chrome, Edge, Firefox, and Safari at release time.
- Current iOS Safari and Android Chrome baselines agreed during project initialization.
- Keyboard-only testing on Windows and macOS.
- At least one screen-reader pass with NVDA plus Chrome/Firefox and VoiceOver plus Safari.
- Touch testing at 320, 375, and 768 CSS-pixel widths, plus desktop at 1280 and 1440.

Record exact versions in the release report rather than freezing them in this long-lived specification.

## 36.4 Performance Budgets

Measure production builds with representative data and throttling agreed by the team.

- Public authentication shell: LCP at or below 2.5 seconds at the 75th percentile target profile.
- Authenticated route transitions: immediate pending feedback within 100 ms.
- INP at or below 200 ms at the 75th percentile target profile for common workflows.
- CLS at or below 0.1.
- Initial route JavaScript budgets are set per route group and checked in CI; heavy editors, document tools, charts, and diff viewers are lazy-loaded.
- Registers render only the visible or paginated working set; no page loads an unbounded ledger.
- Search and filter input remains responsive with the largest supported mock dataset.

If real-user monitoring is not available, label measurements as lab results and preserve the test profile in the report.

## 36.5 CI Quality Gate

A change cannot merge when any required check fails:

- Frozen dependency install.
- Type check.
- ESLint and formatting check.
- Unit/component/contract tests.
- Critical Playwright smoke suite.
- Automated accessibility checks.
- Production build.
- Dependency vulnerability and license-policy review at the agreed severity threshold.
- Secret scanning and fixture scan for forbidden real-looking credentials or personal data.

Flaky tests are defects. Quarantine requires an owner, documented reason, replacement coverage, and expiry date.

---

# 37. Backend Integration and Enforcement Contract

This section defines behavioral invariants for the future backend. HTTP paths, GraphQL selection, framework, database design, and provider choices remain Backend TBD.

## 37.1 Boundary Principles

- The backend authenticates the actor and authorizes every read and mutation.
- Client capability flags improve UX but never grant access.
- Responses contain already-scoped data; the frontend must not receive sensitive fields merely to hide them.
- External provider credentials and privileged operations remain server-side.
- The backend returns canonical records after mutations.
- Sensitive mutations support idempotency and optimistic concurrency.
- Audit records and enforcement results share a correlation ID.
- Long-running operations use persistent jobs that can be resumed after navigation or reconnect.

## 37.2 Request Context

Every authenticated request should make the following context available to server policy and audit logic:

    interface RequestContext {
      requestId: string;
      actorId: EntityId;
      sessionId: EntityId;
      locale: string;
      operatorTimeZone: TimeZoneId;
      idempotencyKey?: string;
      expectedVersion?: string;
      reauthenticationProof?: string;
    }

The browser must not construct trusted actor, permission, or audit identity fields. Transport details for this context are selected during API design.

## 37.3 Command Requirements

Commands that change money, access, licensing, contracts, salary, ownership, infrastructure, integrations, or security require:

- Explicit target ID and expected version.
- Stable idempotency key for safe retry.
- Machine-readable reason category and human explanation where required.
- Effective timing and source timezone when scheduled.
- Reauthentication proof for policy-designated actions.
- Canonical result, warnings, audit event ID, and correlation ID.
- Field-safe validation errors and a conflict response containing the current canonical version.

Idempotent replay returns the original canonical outcome and does not create a second financial record, restriction, document job, or audit event.

## 37.4 Restriction and Suspension Enforcement

The commercial record and actual enforcement state are separate. A request is not reported as enforced until every required target reports its result. Target-level results use `EnforcementTargetResult` from section 32.5.

Required behavior:

1. Validate target, scope, current state, timing, dependencies, and operator authority.
2. Create an immutable restriction command and audit event.
3. Dispatch enforcement to each applicable product/deployment through server-side adapters.
4. Return confirmed, pending, partial, or failed aggregate state.
5. Continue reconciliation asynchronously when any target is pending or unknown.
6. Surface target-level failures without rolling back confirmed targets silently.
7. Restore access through a separate audited command; never delete the restriction history.

Automatic suspension for overdue payment is disabled until an explicit policy is approved. Past due does not imply restricted or suspended.

## 37.5 Financial Invariants

- `Money.amount` follows section 32.7 and is never transported as a binary floating-point number.
- Financial records retain original currency and original amount.
- Allocations cannot exceed the allocatable payment balance or receivable remainder.
- Reversals and refunds create linked records/history; they do not overwrite the original payment.
- Currency conversion stores rate, source, method, rate date, and reporting currency.
- Reporting totals never sum different currencies without an explicit conversion basis.
- Salary obligations linked to expenses follow the double-count rule in section 17.7.
- Finalized or closed-period changes use correction/reversal flows rather than destructive edits.

For `Payment`, `receivedAt` is required for every state except `failed`; a failed digital attempt requires `attemptedAt`. Refund states require `refundedAmount` in the payment currency.

## 37.6 File and Document Invariants

- Upload authorization, malware scanning, classification, retention, and download authorization are backend responsibilities.
- Private artifacts use short-lived authorized download responses, never permanent public URLs.
- Authoritative PDF/DOCX generation occurs in a versioned backend job using an immutable template version and input snapshot.
- Generated artifacts record checksum, template version, generator version, actor, timestamps, and legal-review status.
- Signed evidence is append-only; superseding or voiding preserves prior artifacts.

## 37.7 Synchronization and Freshness

- GitHub, cloud, domain, Telegram, email, monitoring, FX, AI, and deployment integrations synchronize through backend workers.
- Each synchronized DTO identifies source, observed time, and freshness.
- Webhook events are authenticated, deduplicated, replay-safe, and auditable.
- Provider rate limits and partial permissions are represented explicitly.
- Stale or unknown provider data never overwrites newer confirmed operator data without reconciliation.

## 37.8 Minimum Backend Readiness

Before replacing mocks for a feature, the backend team supplies:

- Versioned schemas or generated client types.
- Authentication and capability behavior.
- Pagination/filter/sort contract.
- Error and conflict examples.
- Idempotency rules.
- Audit and correlation behavior.
- Freshness semantics.
- Sandbox/test data and reset method.
- Security and retention review for fields in scope.

---

# 38. Security, Privacy, and Sensitive Data Handling

This product centralizes commercially, personally, legally, and operationally sensitive data. Security requirements apply to design, fixtures, implementation, testing, telemetry, and handoff.

## 38.1 Data Classification

| Class | Examples | Default handling |
|---|---|---|
| Internal | Product catalog, non-sensitive operational status | Authenticated access |
| Confidential | Customer contracts, revenue, expenses, tickets, employee directory | Scoped access, no public caching |
| Restricted | Salary, ownership, identity documents, signed contracts, credential references | Least privilege, masking, reauthentication where appropriate, enhanced audit |
| Secret | Passwords, private keys, provider tokens, bot tokens, signing keys | Never delivered to the frontend |

Fields inherit the strictest classification of the record or source from which they are derived.

## 38.2 Frontend Security Requirements

- Use secure, server-managed session mechanisms selected with the identity provider; do not persist bearer credentials in local storage.
- Apply a restrictive Content Security Policy and other security headers at deployment.
- Render user-provided rich text through an allowlisted, sanitized model; never inject arbitrary HTML.
- Protect state-changing requests against CSRF according to the selected session architecture.
- Prevent sensitive values from entering URLs, page titles, browser history, clipboard automatically, console logs, source maps, analytics, replay tools, or error payloads.
- Disable or redact session replay on confidential and restricted surfaces unless a reviewed policy proves it safe.
- Spreadsheet exports defend against formula injection.
- File previews use safe media handling and never execute uploaded active content in the application origin.
- Dependencies are pinned, reviewed, scanned, and updated through a documented process.

## 38.3 Authentication and Session Policy Inputs

Production launch requires decisions for:

- Identity provider and account recovery.
- MFA methods and recovery codes.
- Idle lock and absolute session duration.
- Reauthentication window by action class.
- Device/session visibility and revocation.
- Failed-login throttling and alerting.
- Break-glass access and recovery ownership.

The frontend may model these states, but backend/security owners approve and enforce the policy.

## 38.4 Privacy and Retention

- Collect only fields required for an approved business purpose.
- Each domain identifies record owner, lawful/business purpose, retention class, archive behavior, and deletion/export authority before production.
- Search indexes, analytics, logs, backups, generated documents, and integration caches are included in retention planning.
- The UI distinguishes archive, anonymization, legal hold, correction, and destructive deletion.
- Production destructive deletion remains unavailable until a reviewed backend workflow exists.
- Export and subject-access workflows require identity, scope, authorization, and audit controls.

## 38.5 Threat Review

Before production, perform and record a threat review covering at least:

- Account takeover and session theft.
- Privilege escalation and future delegated-role mistakes.
- Cross-customer data exposure.
- IDOR/BOLA on entity and file endpoints.
- CSRF, XSS, unsafe rich text, and malicious attachments.
- Duplicate or replayed money/licensing commands.
- Secret leakage through integrations, telemetry, source maps, and fixtures.
- Supply-chain compromise.
- Abuse of impersonation, exports, document generation, and infrastructure actions.
- Audit tampering or gaps between requested and enforced state.

High-risk findings need an owner and resolution or explicit launch-blocking acceptance.

---

# 39. Delivery Plan, Priorities, and Acceptance Management

The confirmed product scope remains the target, but it must be delivered in coherent slices. A page shell without trustworthy workflow behavior does not count as a completed feature.

## 39.1 Priority Definitions

- **P0 — launch blocker:** required for safe operation of the current delivery slice.
- **P1 — committed:** required for the stated release outcome but may follow the first integrated path.
- **P2 — planned:** valuable extension that must not distort P0 architecture.
- **Deferred:** intentionally outside the current funded/approved release; retain in the specification and backlog.

Every requirement ticket records priority, owning domain, source section, acceptance evidence, backend dependency, and release slice.

## 39.2 Recommended Delivery Slices

### Slice A — Frontend Foundation

P0:

- Application shell, authentication/session states, responsive navigation, global feedback, typed adapters, schemas, mock scenarios, localization foundation, design primitives, accessibility baseline, test/CI gates.
- Today and Action Center read models sufficient to prove cross-domain composition.
- Audit-result and concurrency patterns used by all later mutations.

Exit: one representative read flow and one sensitive demo mutation pass the quality gates in section 36.

### Slice B — Customer and Cash MVP

P0:

- Education Centers, branches, contacts, onboarding, deals, subscriptions, product licenses, restrictions, trials, configuration summary.
- Receivables, payment schedules, payment recording/allocation, collections, expenses, and core multi-currency views.
- Center-linked contracts, support tickets, reminders, and audit history.

P1:

- Credits/refunds/write-offs, richer reporting, document-generation demo, on-premise readiness summary.

Exit: workflows 26.1–26.6 and 26.9 operate end to end against deterministic mocks with no unresolved P0 contract mismatch.

### Slice C — Company Operations

P0 for this slice:

- Vendors, recurring obligations, purchases/assets, employee directory, compensation history, salary obligations, onboarding/offboarding, contracts/documents.

P1:

- Hiring pipeline, budgets/monthly close assistance, advanced templates, company founding timeline.

Exit: salary/expense double counting, document review states, masking, and immutable revisions are demonstrated and tested.

### Slice D — Governance and Technical Operations

P0 for this slice:

- Ownership records/events, infrastructure assets, providers, domains, bots, deployments, incidents, repositories, engineering health, advanced audit views.

P1:

- Live integration status models, maintenance planning, on-premise lifecycle, ownership scenarios.

Exit: every technical/governance record has ownership, freshness, related entities, permission classification, and audit behavior.

### Slice E — Backend Integration and Production Readiness

P0:

- Replace feature adapters incrementally using section 37 readiness criteria.
- Complete identity, authorization, audit, file, notification, job, integration, retention, and enforcement decisions.
- Run migration/reconciliation checks between mock assumptions and backend canonical behavior.
- Complete security, accessibility, performance, legal, accounting, and operational launch reviews.

Exit: production Definition of Done in section 40 is satisfied for the approved launch scope.

## 39.3 Requirement Traceability

Use stable IDs in the delivery backlog without rewriting every paragraph in this document:

    SFCP-<DOMAIN>-<NUMBER>

Examples: `SFCP-CENTER-001`, `SFCP-PAY-014`, `SFCP-SEC-006`.

Each item links to:

- Source section and exact requirement.
- User outcome and priority.
- UI states and responsive/accessibility notes.
- DTO/schema and mock scenario.
- Backend decision or endpoint when applicable.
- Automated and manual acceptance evidence.
- Design, engineering, product, security, legal, or accounting approver as required.

## 39.4 Scope Control

- New capabilities enter through the decision register, not through untracked screen additions.
- A deferred integration still receives honest disconnected, stale, and permission-missing states when its UI is in scope.
- Visual polish cannot remove required safety review, audit, accessibility, or data-state behavior.
- Backend limitations that change a confirmed invariant trigger a documented product decision and contract revision.
- Release notes identify intentionally unavailable actions and mock/demo-only behavior.

---

# 40. Decision Register, Handoff, and Definition of Done

## 40.1 Decision Register

Section 3.3 lists the initial production decisions. Maintain them in a durable register with:

    interface ProductDecision {
      id: string;
      title: string;
      domain: string;
      status: 'proposed' | 'accepted' | 'rejected' | 'superseded';
      owner: string;
      decision?: string;
      rationale?: string;
      decidedAt?: ISOInstant;
      reviewOn?: ISODate;
      supersedesId?: string;
      affectedRequirementIds: string[];
    }

Production-blocking decisions cannot remain hidden in chat, design comments, or source code. Accepted decisions update this specification, schemas, fixtures, and acceptance tests together.

## 40.2 Frontend Handoff Package

The frontend delivery includes:

- Runnable Next.js project with pinned dependencies and reproducible setup.
- Environment-variable template containing names and safe descriptions only.
- Route map and feature ownership map.
- Design tokens, component documentation, Storybook states, and responsive behavior.
- Typed adapter interfaces, schemas, canonical examples, and generated/mock client boundary.
- Deterministic synthetic fixtures and the scenario catalog from section 34.
- Test suites and CI configuration from section 36.
- Accessibility review results and known limitations.
- Performance report with build/profile conditions.
- Security/privacy implementation notes with no secrets.
- Backend integration matrix showing mock, partial, integrated, blocked, and production-ready features.
- Decision register, deferred-scope register, and known-risk register.

## 40.3 Definition of Ready for a Feature

A feature is ready for implementation when:

- Outcome, operator, scope, priority, and release slice are identified.
- Required states, permissions, sensitive fields, and audit behavior are known.
- Responsive, accessibility, loading, empty, stale, partial, error, and conflict behavior is specified.
- DTOs and validation schemas compile and have canonical examples.
- Mock scenario and acceptance tests are identified.
- Backend, legal, accounting, security, or provider dependencies are explicitly labeled.
- No unresolved decision would materially change the information architecture or data model.

## 40.4 Frontend Definition of Done

A frontend feature is done when:

- It is reachable through the approved information architecture and canonical URL.
- It uses typed adapters and validated DTOs; visual components do not access transport or fixtures directly.
- All specified states work with deterministic mock scenarios.
- Sensitive actions show target, scope, impact, reason, confirmation, pending behavior, and canonical result.
- Keyboard, screen-reader, touch, zoom, reduced-motion, and responsive checks pass for critical paths.
- Unit/component/contract tests and relevant end-to-end tests pass.
- Storybook or equivalent documents reusable states.
- User-facing copy is localized through message keys and has no secret or sensitive telemetry leakage.
- Product/design review and required specialist reviews are recorded.
- Known limitations and Backend/Policy/Legal TBD items remain visible.

## 40.5 Production Definition of Done

The approved launch scope is production-ready only when:

- No UI presents mock success as production state.
- Identity, MFA, session, authorization, reauthentication, and recovery policies are implemented and tested.
- Money, accounting, tax, payroll, legal, equity, retention, and deletion policies needed by launch scope are approved.
- Backend commands satisfy idempotency, concurrency, canonical-result, audit, and enforcement contracts.
- Secrets remain server-side and security review has no unresolved launch-blocking findings.
- Backup, restore, monitoring, alerting, incident ownership, and operational runbooks exist for backend services.
- Accessibility and browser/device acceptance pass.
- Performance budgets are met or exceptions are explicitly approved with owners and dates.
- Data migration/import has reconciliation evidence and rollback planning.
- Legal documents and generated artifacts use approved templates and rendering.
- Support ownership, escalation, and customer-communication procedures are ready.

## 40.6 Document Maintenance

- Record material changes in version control with the affected requirement and decision IDs.
- Review current prices, products, runtime versions, browser matrix, providers, and policy assumptions before each release.
- Replace local evidence paths with durable repository URLs plus commit/tag references when repositories are available to the team.
- Mark superseded guidance instead of silently erasing the rationale for sensitive business behavior.
- Re-run schema/reference checks whenever lifecycle states or DTOs change.

This file is complete for frontend planning when all P0 decisions for the active delivery slice are accepted or explicitly represented as blocked dependencies. It becomes a production source of truth only after the backend and specialist reviews named above are incorporated.
