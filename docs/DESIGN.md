# Starforge Control Panel — UI/UX and Visual Design Specification

<!-- impeccable:design-schema 1 -->

> Status: design source of truth. This document owns the visual direction, interface composition, responsive behavior, interaction patterns, and screen-level UI decisions for the product specified in `PRODUCT.md`.

## 1. Design Mandate

The Starforge Control Panel is a private operating environment for one founder managing customers, money, people, support, infrastructure, software, and company governance. It must feel like a precise company instrument—not a generic admin template, consumer dashboard, or theatrical science-fiction interface.

The chosen design concept is **Orbital Ledger**:

- **Orbital** because every record is connected around centers, products, people, money, and time.
- **Ledger** because the interface protects history, provenance, financial clarity, and auditability.
- The visual character combines a dark Starforge navigation shell with a quiet, high-legibility working canvas.
- Space-inspired details are restrained: orbital lines, small star points, deep indigo, and luminous focus accents. No neon gradients behind data, glassmorphism over tables, decorative planets, or animated star fields.

This specification is authoritative unless a later design decision is recorded and approved through the decision process in `PRODUCT.md` section 40.

## 2. Experience Principles

### 2.1 Attention before navigation

The system should surface exceptions, deadlines, and unresolved decisions before the owner searches for them. The opening screen is a briefing, not a gallery of charts.

### 2.2 Context before action

Risky actions are presented next to the facts needed to judge them: target, current state, linked money or contract, affected products, timing, reason, and restore path.

### 2.3 Density without visual noise

This is a professional operating tool. It may show dense registers, but hierarchy comes from typography, alignment, whitespace, dividers, and grouping—not from placing every fact in a bordered card.

### 2.4 History is visible

Negotiated prices, salary revisions, ownership events, restrictions, payments, contracts, and enforcement results appear as timelines or version stacks. The current value never erases how it became current.

### 2.5 State is honest

Loading, stale, unknown, disconnected, partial, demo, pending, failed, and permission-denied states look different and use explicit text. Missing data never looks healthy or zero.

### 2.6 Calm consequences

Danger is not dramatized everywhere. Red is reserved for actual destructive or service-impacting states. The copy explains impact without jokes, panic language, or vague confirmation buttons.

### 2.7 One system, many domains

Every module uses the same register, entity header, status, money, date, activity, filter, job, and confirmation grammar. Domain differences are expressed through content, not unrelated mini-design systems.

## 3. Visual Identity

### 3.1 Personality

The interface should feel:

- Precise.
- Composed.
- Protective of sensitive information.
- Technical but understandable.
- Distinctively Starforge without becoming decorative.
- Fast enough for repeated daily use.

It should not feel:

- Like a banking app copied into an admin template.
- Like a gaming or crypto dashboard.
- Like a wall of interchangeable cards.
- Like a developer console that assumes technical knowledge.
- Like a spreadsheet with a sidebar attached.

### 3.2 Brand motif

Use a small **orbit mark** as a supporting motif: one thin elliptical line crossing a solid point. It can appear in the product mark, first-use illustration, empty-state watermark, and loading skeleton accent. It must not appear behind tables or compete with data.

The Starforge mark sits at the top of the primary navigation. The product name is rendered as **Starforge** with the secondary label **Control Panel**.

### 3.3 Theme strategy

The default desktop presentation is hybrid:

- Deep-navy navigation shell.
- Light neutral content canvas.
- White or lightly tinted work surfaces.

A complete dark theme is required and uses the same semantic tokens. Theme follows system preference on first use, can be overridden in Settings, and never changes status meaning.

## 4. Color System

All implementation colors come through semantic CSS variables. Raw colors are not used inside feature components.

### 4.1 Core palette

| Role | Light value | Dark value | Use |
|---|---|---|---|
| Canvas | `#F4F6FA` | `#080C17` | Application background |
| Surface | `#FFFFFF` | `#101625` | Cards, panels, dialogs |
| Surface raised | `#FFFFFF` | `#151D2F` | Menus, popovers, elevated regions |
| Surface subtle | `#EEF1F6` | `#192235` | Filters, grouped controls, secondary rows |
| Ink strong | `#121827` | `#F4F7FC` | Primary text |
| Ink | `#344054` | `#C8D1E1` | Body text |
| Ink muted | `#667085` | `#8E9AB0` | Metadata and secondary labels |
| Border | `#DCE1EA` | `#29344A` | Standard separators |
| Border strong | `#B8C0CF` | `#42506A` | Emphasized boundaries |
| Brand | `#5B4FE9` | `#8B82FF` | Primary action and selected state |
| Brand hover | `#473BCF` | `#A49DFF` | Primary interaction hover |
| Brand soft | `#ECEAFF` | `#292550` | Selected rows and info accents |
| Cyan accent | `#087E8B` | `#54D6E2` | Fresh/live technical state |
| Success | `#147D55` | `#45C78D` | Confirmed, paid, healthy |
| Warning | `#A45A08` | `#F3AD4E` | Due soon, degraded, needs review |
| Danger | `#B4232F` | `#FF6B78` | Failed, overdue critical, destructive |
| Info | `#1768AC` | `#65B7FF` | Neutral information |

### 4.2 Shell palette

- Shell background: `#0B1020`.
- Shell surface: `#12192B`.
- Shell text: `#E8ECF5`.
- Shell muted: `#929DB2`.
- Shell border: `#202B41`.
- Shell selected: brand-soft dark with a 3px brand rail.
- Shell critical count: danger fill with white text.

### 4.3 Status mapping

Color supports text and icon; it never replaces them.

| Semantic state | Tone | Icon family |
|---|---|---|
| Healthy, paid, active, confirmed | Success | Check circle |
| Due soon, expiring, degraded, partial | Warning | Clock or alert triangle |
| Overdue, failed, suspended, critical | Danger | Octagon alert or x circle |
| Draft, scheduled, informational | Neutral/info | File, calendar, or info circle |
| Unknown, stale, disconnected | Muted with dashed boundary | Cloud off or circle help |
| Pending enforcement or sync | Brand/cyan with progress | Loader or refresh |

Status tokens must be checked independently in light, dark, forced-colors, and high-contrast environments.

## 5. Typography and Numbers

### 5.1 Typefaces

- UI and headings: **Manrope**, self-hosted, variable weight 400–750, with Latin and Cyrillic subsets.
- Technical identifiers, code, commit hashes, correlation IDs, and tabular diagnostics: **JetBrains Mono**, self-hosted, weights 400–600.
- System fallback: `Inter`, `Segoe UI`, `Roboto`, `Arial`, sans-serif.

Fonts must not block first render. If self-hosting is unavailable, use the system stack without changing layout assumptions.

### 5.2 Type scale

| Token | Size/line | Weight | Use |
|---|---:|---:|---|
| Display | 32/40 | 700 | First-use and major summary only |
| Page title | 26/34 | 700 | Route title |
| Section title | 20/28 | 650 | Major page sections |
| Card title | 16/24 | 650 | Panels and modules |
| Body | 14/21 | 450 | Default UI copy |
| Body strong | 14/21 | 650 | Labels and emphasized facts |
| Compact | 13/18 | 450 | Dense registers and metadata |
| Caption | 12/16 | 550 | Supporting labels |
| Micro | 11/14 | 650 | Uppercase category labels only |

Avoid uppercase sentences. Micro labels use letter spacing of `0.04em` and are limited to short categories.

### 5.3 Numeric presentation

- Money and large metrics use tabular numerals.
- Currency code is always visible: `12,450.00 USD`, not `$12,450` alone.
- Align numeric table columns to the end.
- Use a nonbreaking space between amount and currency in rendered output.
- Negative values use a minus sign and semantic text when meaning is not obvious.
- Percentages show the configured precision and never silently round cap-table totals to 100%.

## 6. Spatial System

### 6.1 Base units

- Spacing grid: 4px.
- Common gaps: 4, 8, 12, 16, 20, 24, 32, 40, 48.
- Desktop page padding: 28px at 1280+, 24px at 1024–1279.
- Tablet page padding: 20px.
- Mobile page padding: 16px.
- Dense table cell padding: 8px vertical, 12px horizontal.
- Comfortable table cell padding: 12px vertical, 14px horizontal.

### 6.2 Shape

- Inputs and standard buttons: 8px radius.
- Cards and panels: 12px radius.
- Dialogs and sheets: 16px radius on desktop; 16px top radius for mobile sheets.
- Pills are reserved for statuses, compact filters, and tags.
- Do not place rounded cards inside rounded cards unless the inner element is interactive or semantically separate.

### 6.3 Elevation

Use borders before shadows.

- Level 0: canvas, no shadow.
- Level 1: surface with 1px border.
- Level 2: popover or sticky element with subtle shadow and border.
- Level 3: modal/dialog with backdrop and stronger shadow.

Dark theme uses light borders and tonal separation rather than heavy black shadows.

## 7. Responsive Framework

### 7.1 Breakpoints

| Name | Range | Primary behavior |
|---|---|---|
| Compact | 320–639 | One column, mobile navigation, full-screen tasks |
| Medium | 640–1023 | One/two columns, overlay navigation, selective split views |
| Wide | 1024–1439 | Persistent collapsed or full navigation, 12-column content |
| Expanded | 1440+ | Full navigation, wide registers, optional context rail |

Breakpoints respond to content failure, not device names. Components may switch earlier when localization or data density requires it.

### 7.2 Content grid

- Use a fluid 12-column grid with 20px gutters on wide screens.
- Default reading regions stop near 760px.
- Forms stop near 720px unless a preview or impact rail occupies the remaining columns.
- Registers, timelines, and topology views can use the full available width up to 1680px.
- Page sections use 24–32px vertical separation, not a separate card for each heading.

## 8. Application Shell

### 8.1 Wide desktop

The shell has three layers:

1. A 264px persistent navigation sidebar.
2. A 56px utility bar above content.
3. A fluid main canvas.

At 1024–1199px the sidebar collapses to a 72px icon rail by default. Hover is not required to operate it; labels appear in an accessible popover and the user can pin the expanded state.

    ┌──────────────────┬──────────────────────────────────────────────────┐
    │ Starforge        │ Breadcrumb / Search        Create  Jobs  User   │
    │ Control Panel    ├──────────────────────────────────────────────────┤
    │                  │ Page title                    Primary actions    │
    │ Today            │ Context / date / freshness                       │
    │ Action Center  7 │                                                  │
    │                  │ Main workspace                      Context rail │
    │ CUSTOMERS        │                                                  │
    │ Centers          │                                                  │
    │ COMMERCIAL       │                                                  │
    │ Plans            │                                                  │
    │ Revenue          │                                                  │
    │ ...              │                                                  │
    │                  │                                                  │
    │ Settings         │                                                  │
    └──────────────────┴──────────────────────────────────────────────────┘

### 8.2 Navigation sidebar

- Header: mark, Starforge, Control Panel, collapse control.
- Group labels: Command, Customers, Commercial, Company, Operations, Governance.
- Each destination: 20px Lucide icon, label, optional actionable count.
- Selected destination: brand-tinted background, strong label, 3px left indicator.
- Counts show only unresolved items; zero counts are omitted.
- Footer: environment/demo badge, sync health, Settings, operator profile.
- Scroll only the destination region; header and footer remain fixed.

### 8.3 Utility bar

Left to right:

- Breadcrumb or current scope.
- Global search/command trigger with `Ctrl/⌘ K` hint.
- Flexible spacer.
- Global create button.
- Jobs tray.
- Connectivity/freshness control.
- Action Center notification button.
- Operator/session menu.

The utility bar becomes sticky after page title scrolls away. It uses a solid surface with border—never blurred glass over data.

### 8.4 Compact navigation

Compact screens use:

- 52px top bar: menu, short page title, urgent Action Center count, create.
- Five-item bottom dock: Today, Actions, Centers, Search, More.
- **More** opens a full-height navigation sheet grouped exactly like desktop.
- Global create opens a bottom sheet with recent and common entity actions.
- The bottom dock respects safe-area insets and never overlays form actions.

### 8.5 Demo and environment identity

Demo mode shows a persistent 28px banner directly below the utility bar:

`Demo data · Changes stay in this browser session · Reset demo`

Production/staging environments use a compact environment badge in the sidebar footer. Dangerous non-production resemblance is avoided: staging receives a visible amber environment rail.

## 9. Page Anatomy

Every primary page uses this order:

1. Breadcrumb when deeper than one level.
2. Page header with title, concise purpose/context, freshness, and actions.
3. Critical page-level warning or demo limitation.
4. View navigation or tabs.
5. Summary/attention region when it changes decisions.
6. Primary workspace.
7. Secondary context, related records, or activity.

### 9.1 Page header

- Title remains short and unique.
- Subtitle is at most two lines and does not repeat navigation text.
- Primary action is on the right on wide screens and in the sticky action area on compact screens.
- No more than one filled primary button per header.
- Secondary actions use outline/text buttons; rare actions move to overflow.
- Freshness is shown beside context, not inside every card.

### 9.2 Entity header

Entity workspaces use a sticky identity strip after the full header scrolls away:

- Entity mark/initial.
- Display name and stable code.
- Primary lifecycle status.
- Two or three decision facts.
- Attention count.
- Contextual create action.
- Overflow containing archive/restrict-sensitive entries.

Sensitive global actions are never placed beside routine actions without separation.

## 10. Core Components

### 10.1 Buttons

Variants:

- Primary: one dominant forward action.
- Secondary: common alternative.
- Quiet: toolbar and low-emphasis action.
- Danger: destructive/service-impacting confirmation only.
- Link: navigation inside prose or compact rows.

Sizes: 32px compact, 40px default, 44px touch. Icon-only controls are at least 40px desktop and 44px compact viewport, with accessible names and tooltips that also appear on keyboard focus.

Button labels use verbs and targets: `Record payment`, `Create center`, `Restrict CEO Web`, `Archive vendor`. Confirmation buttons never say only `Yes` or `OK`.

### 10.2 Status badge

Structure: icon + visible label, optional secondary freshness dot. Badges use soft backgrounds and strong text; critical states may use outlined danger styling to avoid filling the screen with red.

Unknown and stale states use a dashed outline and explicit timestamp on reveal/focus.

### 10.3 Attention item

A reusable row for dashboard, Action Center, and entity pages:

- Severity rail/icon.
- Action-oriented title.
- Primary entity link.
- Due time and relative urgency.
- Amount/currency or affected product when relevant.
- Reason it surfaced.
- Primary action plus snooze/overflow.

Rows are 64–84px tall. They are not generic notification cards.

### 10.4 Metric block

Contains label, main value, comparison or definition, scope/date, and freshness. Metric blocks avoid decorative icons unless the icon communicates state. A metric without comparable data does not show `0%` change.

### 10.5 Register table

Desktop register structure:

- View tabs/saved-view selector.
- Search and structured filter bar.
- Applied filter chips.
- Result count and sort summary.
- Column/density/export controls.
- Table with sticky header.
- Selection action bar only after selection.
- Pagination or load-more footer with freshness.

Rules:

- The first column contains the primary entity link and enough identity to distinguish rows.
- Status appears early; numeric columns align right.
- Row hover is subtle and not the only click affordance.
- Row checkbox is separate from the entity link.
- Overflow action announces the row target.
- Sticky columns are limited to selection and primary identity.
- Empty cells use an em dash; unknown uses an explicit `Unknown` badge.
- Horizontal scroll has a visible boundary and keyboard-operable region.

### 10.6 Mobile register card

At compact widths, each record becomes a structured row-card:

- Top line: entity + status.
- Second line: the two most decision-relevant facts.
- Third line: next obligation or warning.
- Bottom: one primary navigation action and overflow.

Filters open in a full-screen sheet with result count in the apply button. Sort and view controls remain outside the filter sheet.

### 10.7 Filter builder

- Common filters are visible as compact controls.
- Advanced filters open a side sheet.
- Applied filters are readable phrases: `Due date · next 30 days`.
- Clearing one filter does not reset unrelated search/sort state.
- Sensitive filter values do not enter URLs.
- Saved views show whether they are personal or future shared views.

### 10.8 Forms

Fields are arranged by decision sequence, not data-schema order.

- Labels sit above controls.
- Required markers are textual and explained once.
- Help appears below the label or field; tooltips are supplemental only.
- Validation appears after interaction and on submit, not on the untouched first render.
- Section summaries show incomplete/invalid counts.
- Money input is a combined group: amount, currency, optional rate context.
- Date-time input shows timezone in the control.
- Sensitive inputs show classification and reveal policy.
- Full-page forms have a sticky footer with `Cancel`, save draft where supported, and the explicit forward action.

### 10.9 Dialog, drawer, and full-page task

- Confirmations and short edits: modal dialog, maximum 560px.
- Context inspection and medium edits: right drawer, 440–560px.
- Creation wizards, high-risk actions, rich editors, comparison, and multi-section forms: full page.
- On compact screens, drawers and non-trivial dialogs become full-screen sheets.
- Closing a dirty surface asks whether to continue editing or discard changes.

### 10.10 Tabs

- Use path-based tabs for durable entity workspaces.
- Desktop tabs scroll horizontally only when necessary and expose a `More` menu after the six most relevant entries.
- Compact screens use a labeled section selector plus previous/next navigation; twelve tiny tabs are prohibited.
- Tab count badges indicate actionable items, not total records unless labeled.

### 10.11 Timeline and version stack

Timeline items align a date column with a content column. The current event is visually strongest. Sensitive diffs are collapsed by default with a clear `View changes` action. Version comparison uses a two-column before/after layout on wide screens and stacked changed-fields layout on compact screens.

### 10.12 Money display

- Primary: localized amount + ISO code.
- Optional reporting estimate appears beneath in muted text with `Estimated` badge.
- Hover/focus or details shows rate, date, source, and method.
- Native totals are grouped by currency in summaries.
- No chart merges currencies before explicit conversion.

### 10.13 Freshness indicator

`Live`, `Updated 4 min ago`, `Stale · last seen Aug 20`, `Not connected`, or `Unknown` appears with source. It is a button only when it opens sync detail or refresh. Freshness never masquerades as entity health.

### 10.14 Sensitive value

Masked value row includes label, masked content, classification, and a `Reveal` action. Reveal may invoke reauthentication, announces the time-limited state, and provides `Hide now`. Copy is separate and audited when backend policy supports it.

### 10.15 Jobs tray

The persistent tray lists document generation, exports, imports, syncs, and future deployments. Each job shows target, progress/state, start time, safe navigation, and retry/cancel where supported. Completed jobs remain until acknowledged or age out by policy.

### 10.16 Toasts and banners

- Toasts acknowledge reversible/simple outcomes and last 5–7 seconds unless action is required.
- Persistent failures, partial enforcement, stale data, and session issues use banners or inline panels.
- A toast never carries the only copy of an error or audit correlation ID.
- Multiple messages are grouped to avoid covering page actions.

### 10.17 Charts

- Charts answer one question per figure.
- Use brand for the primary series and neutral tones for comparison.
- Warning/danger colors encode states, not arbitrary series order.
- Direct labels are preferred over distant legends.
- Tooltips are keyboard reachable and repeat values in the data table.
- Financial axes identify currency and conversion basis.
- Small charts are removed on compact screens when a summary and table communicate better.

## 11. Interaction and Motion

- Standard hover/focus transition: 120–160ms.
- Drawer/dialog transition: 180–220ms.
- Route content uses no decorative entrance animation; skeleton/content replacement may fade within 120ms.
- Progress indicators rotate or animate only when motion is allowed.
- Reduced-motion mode removes translation and continuous nonessential animation.
- Optimistic visual state is permitted only for low-risk UI preferences and reversible local actions.
- Risky mutations use a stable pending panel and prevent duplicate submission without freezing unrelated navigation.

## 12. Keyboard Model

Global shortcuts:

- `Ctrl/⌘ K`: search and command palette.
- `G` then `T`: Today.
- `G` then `A`: Action Center.
- `G` then `C`: Education Centers.
- `C`: open global create when focus is not in an editable field.
- `?`: shortcut help.
- `Esc`: close the topmost dismissible layer; never discard dirty work without confirmation.

Shortcuts are discoverable, remappable later, and never replace visible controls. Tables use normal tab navigation rather than trapping users in a custom spreadsheet model.

## 13. Content Design

### 13.1 Voice

Copy is direct, calm, specific, and accountable.

- Prefer `Payment is 8 days overdue` over `Payment issue`.
- Prefer `Restriction is pending for Staff Mobile` over `Update in progress`.
- Prefer `Try sync again` over `Something went wrong` when that is the correct next step.
- Use `center` consistently for customer organizations and `Starforge employee` for company staff.

### 13.2 Date copy

Show relative plus absolute wording when action depends on time:

`Due tomorrow · Sep 4, 2026 · Asia/Tashkent`

Past events default to absolute date/time with a shorter relative hint when helpful.

### 13.3 Confirmation copy

Every consequential confirmation contains:

- Action and target.
- Current state.
- Resulting state.
- Affected records/users/products.
- Timing.
- Whether it can be restored.
- Required reason.
- Exact submit label.

### 13.4 Empty-state copy

Pattern:

1. Literal empty state.
2. Operational consequence.
3. Safest next action.

Example: `No payment schedule. Add expected collection dates so Action Center can warn you before revenue is due.`

## 14. Universal States

Every major page and component documents these states in Storybook or equivalent:

- Loading with layout-shaped skeleton.
- First-use empty.
- Filtered empty.
- Partial data.
- Stale.
- Offline with cached data.
- API unavailable.
- Integration disconnected.
- Permission denied.
- Session expired/locked.
- Validation error.
- Concurrent edit conflict.
- Long-running pending.
- Partial success.
- Completed success.
- Demo-only limitation.

Skeletons do not invent plausible values. Stale cached content remains readable with actions disabled only when correctness requires current data.

## 15. Screen Blueprints

### 15.1 Today — `/today`

The opening page is a morning briefing and remains useful throughout the day.

Wide layout:

- Header: `Today`, full local date, operator timezone, last refresh, `Review all actions`.
- First row: one sentence briefing followed by four compact counts—Critical, Overdue, Due today, Waiting.
- Main 8-column region: Decision Queue with 5–8 ranked attention rows.
- Right 4-column region: Business Pulse grouped by native currency, with optional reporting estimate switch.
- Second row: Customer Watch (7 columns) and Service Map (5 columns).
- Quiet healthy modules collapse to a one-line summary; they do not consume equal space with urgent work.

Decision Queue ranking uses severity, due time, business impact, and blocked dependencies. It never uses a hidden “AI score.” Each item explains why it appears.

Compact layout:

- Briefing and count strip.
- Decision Queue first.
- Horizontal native-currency summary chips.
- Customer Watch.
- Service Health summary with link to Infrastructure.

No dashboard module carousel is used; vertical reading preserves urgency and accessibility.

### 15.2 Action Center — `/actions`

Wide screens use a list-detail composition:

- 380–440px inbox column with view tabs and attention rows.
- Fluid detail panel with source facts, checklist, notes, timeline, and action footer.
- Calendar is a separate route, not a hidden mode inside the inbox.

The inbox defaults to `Needs attention`, combining overdue, due today, decision-required, and failed items. Saved views remain available for domain-specific work.

Detail actions are ordered: complete domain action/open source, snooze, reassign, edit, cancel. Completing a reminder without completing its source action requires explicit outcome copy.

On compact screens, selecting an item navigates to a full detail page and browser back returns to the preserved inbox position/filter.

### 15.3 Education Centers — `/centers`

The portfolio is the central customer register.

Header actions: `Add center` primary, compare/export in overflow.

Default table priority:

1. Center identity.
2. Lifecycle.
3. Plan/deployment.
4. Next collection.
5. Attention.
6. Support risk.
7. Freshness.

The `Attention` cell shows the highest-severity item and a count, not a row of unrelated badges. The next collection cell always includes currency and due state.

Saved views appear as a compact horizontal view bar: All, Onboarding, Trials, Due soon, Past due, Restricted, On-premise, Support risk. Less frequent views live under `More views`.

Compare opens a full-page matrix for 2–4 centers. Rows are grouped as commercial, usage, support, and cost; differences can be highlighted without hiding equal values.

### 15.4 Center workspace — `/centers/[centerId]/*`

The full entity header shows center identity, lifecycle, plan/deal, deployment model, local time, owner, and the strongest attention item.

Header actions:

- Primary contextual action changes by state: `Continue onboarding`, `Review trial`, `Record payment`, or `Resolve restriction`.
- `Create` menu: payment, ticket, reminder, document.
- `More`: edit organization, lifecycle change, archive.
- `Restrict access` is visually separated at the end of More with danger icon and divider.

Desktop tabs show Overview, Billing, Licenses, Onboarding, Support, and `More` for Branches, Center team, Contracts, Usage, Configuration, Deployments, Activity. Direct URLs remain stable for every section.

Overview uses four zones:

1. `Needs attention`: actionable full-width panel, omitted when empty.
2. `Commercial and access`: deal, next payment, products, restrictions.
3. `Customer operation`: trial/onboarding, usage, tickets, branches.
4. `Technical and relationship`: contacts, deployments/domains, pinned note, recent activity.

Avoid twelve equal cards. Related facts share sections with aligned rows.

The Billing tab uses a commercial summary header, payment schedule timeline, receivables register, payments register, and negotiation/version rail. Licenses uses one expandable product row per application; inherited and overridden values align in columns.

### 15.5 Center onboarding wizard — `/centers/new`

Desktop composition:

- 232px step rail with ten named steps and completion/error state.
- Main form up to 720px.
- 320px review rail showing current center identity, selected plan, first payment, enabled products, and blockers.
- Sticky footer: Back, Save draft, Continue.

The first step asks only enough identity to create a draft. Optional fields remain accessible but do not obstruct progress.

On compact screens:

- Top progress: `Step 4 of 10 · Deal and plan`.
- Review rail becomes `Review summary` sheet.
- Sticky bottom action remains above the navigation safe area.

Returning to an earlier step never deletes later values. If a change invalidates later data, the affected step gets `Review needed` with an explanation.

The final review groups blockers, warnings, inherited defaults, explicit overrides, financial terms, access to be granted, and reminders to be created. Demo activation results in a canonical result page, not a toast-only success.

### 15.6 Plans & Products — `/catalog/*`

Catalog overview has two primary tabs: Products and Plans. Deals are a related register, not mixed into plan cards.

Product register uses compact product marks, platform, lifecycle, customer/license counts, current version, configuration schema, and health.

Plan register uses versioned rows instead of marketing price cards. Each row shows state/effective date, prices by cadence/currency, headline limits, included product count, and centers using the version.

Plan builder composition:

- Left outline: Identity, Prices, Products, Limits, Support, Trial, Billing defaults, Add-ons, Review.
- Center editor.
- Right diff/impact rail after an existing version is selected.
- Publishing opens a full review showing changed values and existing-customer impact.

Custom deal comparison uses three columns on expanded screens: List plan, Current accepted terms, Proposed terms. On narrower screens, show changed fields in a stacked before/proposed list.

### 15.7 Revenue & Billing — `/revenue/*`

Revenue overview begins with a currency scope control:

- `Original currencies` default.
- `Reporting estimate` secondary and visibly estimated.

The top region shows grouped collected, expected, overdue, and next-30-day figures. Currency groups are horizontally aligned but never summed raw.

Below:

- Collection queue receives more visual weight than charts.
- Aging chart and table.
- Expected vs received trend.
- Centers without next collection.
- Recent payments.

Receivables and payments use separate registers with a shared center/date/currency filter vocabulary. Payment references use monospace only for the identifier, not the entire row.

Record payment is a full-height right sheet on wide screens and full page on compact screens:

1. Center and receivable selection.
2. Amount, currency, received date/time, method, reference.
3. Allocation editor.
4. Evidence and notes.
5. Review summary.

The allocation editor shows payment total, allocated, unapplied, and validation in one sticky calculation block. Confirmation button says `Record 1,250.00 USD payment`.

### 15.8 Expenses & Purchases — `/expenses/*`

Overview mirrors the clarity of Revenue without pretending accounting is complete. It is labeled `Management cash view` until production policies are approved.

Top: paid, unpaid, recurring due, people cost, infrastructure cost—grouped by native currency.

Main area:

- Bills due and missing evidence queue.
- Spend by category with table fallback.
- Recurring obligations.
- Recent purchases/assets.
- Month review checklist.

Expense entry uses a focused sheet for common entries. Turning on `Recurring` or `Track as company asset` reveals additional sections without changing already-entered core values.

Potential salary duplicates appear as a blocking inline comparison, not a small warning toast.

### 15.9 Contracts & Documents — `/documents/*`

Contracts register defaults to `Needs attention`: missing review, awaiting signature, expiring, failed generation.

Document workspace uses:

- Header with contract state, counterparty, version, review, signature, expiry.
- Main rendered preview.
- Right metadata/action rail.
- Tabs for Preview, Variables, Versions, Artifacts, Activity.

Template editor expanded layout:

- 240px outline/clause library.
- Flexible structured editor.
- 40% preview panel that can collapse.
- Validation drawer accessible from a persistent issue count.

Protected variable tokens have a distinct inline style, readable name, and keyboard-safe editing boundary. Missing variables use an issue marker and validation list; they are not represented by raw template syntax alone.

Generation creates a Jobs tray item and a persistent status panel on the document. Demo previews carry the required watermark on every page.

### 15.10 People & HR — `/people/*`

People overview keeps amounts masked. It prioritizes starting employees, probation reviews, contract expiry, salary obligations, missing access/equipment, and offboarding tasks.

Employee directory follows the standard register but uses no salary column. A capability-gated `Compensation review due` indicator may appear without exposing value.

Employee workspace header contains name, role, department, employment state, local time, start/tenure, and next obligation. Compensation is a separate path tab with a classification banner.

Compensation tab:

- Current salary is masked initially.
- Reveal action explains audit/reauthentication.
- Revisions form a vertical effective-date stack.
- Scheduled revision appears above current with `Starts` date.
- Each revision shows basis, frequency, components, reason, approval, supporting contract.

Hiring pipeline uses columns only on wide screens where all stage names fit. Compact and keyboard-first modes use a grouped list. Dragging candidates has an equivalent `Move to stage` action and requires confirmation for rejected/hired outcomes.

### 15.11 Company & Ownership — `/company/*`

Company overview is an internal profile and governance summary, not a marketing page.

Ownership page begins with:

- Verification banner: management record vs verified legal record.
- Total allocated, reserved/unallocated, effective date, authoritative basis.
- Cap table.
- Ownership-event timeline.

The primary visualization is a 100% allocation bar with direct labels plus a complete table. Pie charts are not used for precise cap-table work.

Creating an ownership event is a full-page task with a fixed before/after preview. The preview shows exact variance from 100%, affected holders, class, units, percentage, effective date, and verification state. Finalize remains disabled until required evidence/reason and policy checks pass.

Scenario mode has a persistent violet `Draft scenario · not company record` banner and a different URL/state namespace. Scenario styling never uses green “success” language.

### 15.12 Support — `/support/*`

Support overview focuses on queues and time risk. The default layout shows New/untriaged, Needs response, SLA/service-target risk, Critical/high, and Waiting.

Ticket workspace is a three-part desktop layout:

- 300–360px queue list.
- Flexible conversation and internal notes.
- 320px customer/technical context rail.

Customer-visible replies and internal notes have different composer modes, background, icon, and explicit label. Switching mode requires a deliberate control; color is not the only distinction.

The context rail contains center access, plan/support tier, local time, active incident/deployment, recent related tickets, and contract target. It collapses to a sheet on medium/compact screens.

SLA clocks show absolute deadline and remaining/breached time. Paused clocks identify why and since when.

Resolution opens a structured sheet for summary, root cause, fix/workaround, version/deployment, customer confirmation, and prevention task.

### 15.13 Infrastructure — `/infrastructure/*`

Overview defaults to Service view because it answers impact. A segmented control switches to Asset view.

Service view rows expand:

`Product → environment → deployment → server/provider/domain/bot`

Each level shows health, freshness, owner, cost, affected centers, and open incident. Topology lines are optional enhancement; the accessible hierarchy remains the primary representation.

Asset registers prioritize state/freshness before provider metadata. Stale health uses dashed treatment and timestamp; it never appears as healthy gray.

Domain/certificate rows show two independent expiry tracks to prevent one renewal from hiding the other.

Incident workspace uses a persistent severity/state header, impact summary, chronological incident timeline, current mitigation, linked services/centers, communications, and follow-up actions. Critical incidents reduce decorative UI and keep update action visible.

### 15.14 Repositories — `/repositories/*`

Repository register resembles the operational product—not GitHub's visual design. It shows owner/name, lifecycle, products, owner, last push, release, CI, security/dependency summary, deployment links, and freshness.

Engineering Health presents factual queues:

- Failed default-branch checks.
- Security alerts.
- Deployments behind release.
- Unowned repositories.
- Stale runbooks.
- Review backlog.

No single opaque score or gamified grade is used.

Repository workspace connects source to operation: products, releases, current commits per environment, deployments, incidents, and runbooks. External GitHub links use an external-link icon and accessible leaving-product label.

### 15.15 Audit & Activity — `/audit/*`

Audit is a dense immutable event register. The default columns are timestamp, actor/source, action, target, result, reason indicator, and correlation ID.

Event detail uses:

- Human summary first.
- Actor/session/source metadata.
- Target and related entities.
- Before/after changed fields.
- Enforcement/integration results.
- Correlated events timeline.
- Technical payload behind a capability-gated disclosure.

Sensitive values remain masked in diffs. Failed attempts are not visually diminished. Audit events have no edit/delete controls.

### 15.16 Settings — `/settings/*`

Settings uses a secondary left navigation on wide screens and a section list on compact screens. Each route owns its save state; there is no misleading global `Save all settings` button.

Integration cards are arranged by operational category and show connected state, scope, last sync, permission summary, health, and actions. A disconnected card explains which product surfaces are affected.

Security and Access use restricted visual treatment, explicit policy source, and audit messaging. The future capability matrix is read-only in V1 and clearly marked as a preview.

## 16. Critical Workflow Design

### 16.1 Restrict one product or a whole center

This is a dedicated full-page sequence, never a small confirmation dialog.

Header: `Restrict access` plus center identity and current access state.

Steps:

1. **Scope:** center, branches when supported, products, capability.
2. **Mode and timing:** disabled/read-only/maintenance, start, optional end.
3. **Reason and communication:** internal reason, customer message, linked evidence.
4. **Impact:** affected products, branches, users, sessions, APIs, jobs, contractual conflicts, restore path.
5. **Confirm:** reauthentication status, typed center name for full suspension, exact action summary.

The impact step is a two-column comparison: Current access and Resulting access. Changed items receive an arrow and text label.

After submit, replace the form with an enforcement result screen:

- Aggregate state.
- Target-by-target results.
- Correlation ID and audit link.
- Safe retry/escalation instructions.
- `Create restore reminder` and `Return to center` actions.

Partial success uses warning styling, not green success with a footnote.

### 16.2 Restore access

Restoration starts from the active restriction record. It shows which limits or expired commercial states will remain after restoration. The submit label names the target: `Restore Staff Web access` or `Restore center access`.

### 16.3 Concurrent edit conflict

The conflict surface preserves the user's draft and shows:

- Who or what changed the canonical record and when.
- Field-by-field `Your draft` vs `Current value`.
- Safe fields selectable for reapply.
- Actions: Copy draft, Reapply selected changes, Reload canonical, Cancel.

Money, entitlement, salary, ownership, and restriction conflicts require returning through the normal review step before submission.

### 16.4 Salary revision

Full-page review with employee identity, current terms, proposed terms, effective date, future obligation effect, document requirement, reason, and approval. Salary reveal state never persists after session lock.

### 16.5 Ownership event

Full-page event builder with legal-review banner, authoritative-basis selection, before/after cap table, variance validation, evidence, reason, and reauthentication. Draft save is available; finalization is separate.

### 16.6 Contract generation

Use a visible ten-step progress list only when the flow needs every step; otherwise group into Select, Populate, Review, Generate. Missing variables and unapproved clauses block production generation but can create watermarked demo output when labeled.

## 17. Responsive Transformation Matrix

| Pattern | Wide/expanded | Medium | Compact |
|---|---|---|---|
| Primary nav | 264px sidebar or 72px rail | Overlay drawer | Top bar + bottom dock + More sheet |
| Register | Full table | Reduced columns/table | Structured row-cards |
| List-detail | Side-by-side | Narrow list + detail | Separate routes |
| Context rail | Persistent 300–360px | Collapsible drawer | Full-screen sheet |
| Entity tabs | Visible priority tabs + More | Scroll/More | Section selector |
| Short form | Dialog/drawer | Drawer | Full-screen sheet |
| Long/risky form | Full page + review rail | Full page, collapsible review | Full page, review sheet |
| Before/after | Two columns | Two compact columns | Changed-field stack |
| Charts | Chart + table access | Simplified chart | Summary + table, chart optional |
| Sticky actions | Header/footer | Footer | Bottom action bar above safe area |

## 18. Accessibility Details

### 18.1 Focus

- Route navigation moves focus to the page heading after content is ready.
- Opening a layer moves focus to its title or first required field as appropriate.
- Closing returns focus to the invoker unless the invoker no longer exists; then use the nearest logical heading/action.
- Validation submit moves focus to the error summary.
- Creating an entity moves focus to the success heading or new entity title.
- Live updates do not steal focus.

### 18.2 Screen-reader naming

Icon actions include target: `More actions for Northstar Academy`. Counts include context: `7 unresolved Action Center items`. Status badges expose label and, when needed, freshness: `Deployment healthy, updated four minutes ago`.

### 18.3 Forced colors and non-color cues

Selected, focused, critical, stale, and disabled states retain border, icon, text, or pattern differences in forced-colors mode. Charts use shapes/direct labels and data tables.

### 18.4 Touch and zoom

All critical targets meet 44px on compact/touch layouts. At 200% zoom, the desktop shell may switch to medium/compact behavior. No two-dimensional page scroll is required for common tasks.

## 19. Design Tokens for Implementation

Recommended semantic token groups:

    --sf-color-canvas
    --sf-color-surface
    --sf-color-surface-raised
    --sf-color-surface-subtle
    --sf-color-text-strong
    --sf-color-text
    --sf-color-text-muted
    --sf-color-border
    --sf-color-border-strong
    --sf-color-brand
    --sf-color-brand-hover
    --sf-color-brand-soft
    --sf-color-success
    --sf-color-warning
    --sf-color-danger
    --sf-color-info
    --sf-color-focus

    --sf-space-1 through --sf-space-12
    --sf-radius-control
    --sf-radius-panel
    --sf-radius-dialog
    --sf-shadow-popover
    --sf-shadow-dialog

    --sf-font-ui
    --sf-font-mono
    --sf-text-page-title
    --sf-text-section-title
    --sf-text-body
    --sf-text-compact
    --sf-text-caption

Feature code uses semantic status/component tokens rather than mapping domain states directly to hex colors.

## 20. Component Inventory and Ownership

### Foundation

- Button, IconButton, Link.
- Input, Textarea, Select, Combobox, Checkbox, Radio, Switch.
- Field, FieldGroup, ErrorSummary.
- Dialog, AlertDialog, Drawer, BottomSheet, Popover, Tooltip, Menu.
- Tabs, SectionSelector, Breadcrumbs, Pagination.
- Surface, Divider, ScrollRegion.

### Data and domain presentation

- StatusBadge, FreshnessBadge, ClassificationBadge.
- MoneyValue, MoneyGroup, DateValue, TimezoneValue.
- EntityLink, EntityAvatar, EntityHeader.
- MetricBlock, AttentionItem, DefinitionList.
- Register, MobileRecordCard, FilterBar, SavedViewPicker.
- Timeline, VersionStack, FieldDiff.
- FileArtifactRow, SensitiveValue, CapabilityGuard.
- ChartFrame with TableFallback.

### Workflow

- PageHeader, StickyActionBar, StepRail, ReviewRail.
- ConfirmationSummary, ImpactPreview, ReauthenticationGate.
- MutationResult, EnforcementResult, ConflictResolver.
- JobsTray, ConnectivityBanner, DemoBanner.
- EmptyState, ErrorState, PermissionState, StaleState.

Components live in shared folders only after genuine reuse. Domain composites remain inside their feature package.

## 21. Storybook and Design QA Matrix

Every foundation/workflow component includes:

- Light, dark, and forced-colors evidence.
- Default, hover, focus-visible, active, disabled, loading, and error states as relevant.
- English, long Russian, and long Uzbek copy samples.
- 320px and wide viewport examples.
- Keyboard interaction notes.
- Accessible name/role/state notes.

High-value composite stories:

- Today with critical work, healthy day, and partial integrations.
- Center register dense/comfortable/mobile.
- Center overview active, trial, past due, restricted, suspended.
- Payment allocation exact, partial, overpayment, currency mismatch.
- Restriction review pending/partial/failed/restored.
- Salary masked/revealed/scheduled revision.
- Ownership valid/99.5%/100.5%/scenario.
- Ticket customer reply vs internal note.
- Infrastructure fresh/stale/unknown/incident.
- Conflict resolver with changed financial fields.

## 22. Design Acceptance Checklist

A route is design-complete only when:

- Its primary user question and action hierarchy are explicit.
- Desktop, medium, compact, zoom, and long-localized-copy behavior are specified.
- Loading, empty, filtered empty, stale, partial, offline, error, permission, and demo states are designed.
- Keyboard focus order and post-action focus behavior are known.
- Sensitive values and consequential actions follow the safety patterns.
- Money, dates, timezone, status, source, and freshness are unambiguous.
- The route uses shared patterns without hiding domain-specific risk.
- Visual density has been tested with the largest realistic fixture.
- Automated accessibility support and required manual review are identified.
- Product requirements and mock scenarios are traceable.

## 23. Non-Negotiable Visual Rules

- No generic dashboard template or copied shadcn theme.
- No gradients behind tables, forms, financial values, or critical alerts.
- No glass panels over scrolling content.
- No emoji as functional icons.
- No status expressed only through color.
- No more than one filled primary action in one action cluster.
- No dangerous action next to a routine primary action without separation.
- No masked sensitive value briefly flashing during load.
- No desktop table shrunk below readability to claim mobile support.
- No hidden hover-only facts or actions.
- No all-red screen for an overdue collection that has not suspended access.
- No fabricated percentage comparison when baseline data is missing.
- No total that silently mixes currencies.
- No success state before canonical/enforcement confirmation for sensitive mutations.

## 24. Design Handoff Order

Implementation should establish the design system in this order:

1. Semantic tokens, themes, typography, focus, and motion.
2. Shell, responsive navigation, page header, banners, and global layers.
3. Forms, dialogs/sheets, statuses, money/date/freshness, and error states.
4. Register and mobile record patterns.
5. Attention item, timeline/version, jobs, conflict, and mutation result patterns.
6. Today and Action Center.
7. Center register/workspace/onboarding and customer-cash critical flows.
8. Remaining modules in the delivery slices defined by `PRODUCT.md` section 39.

The visual system is successful when a new domain screen can be assembled from these patterns while still making its specific operational risk obvious.
