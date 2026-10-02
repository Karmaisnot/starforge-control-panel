# Starforge Control Panel

Private operations workspace for managing education centers, customer access, subscriptions, product use, finance, HR, and support.

## Development

Install dependencies with the repository's configured package manager, then run the Next.js development server:

```bash
pnpm install
pnpm dev
```

The app uses synthetic demo data. Demo policy edits are stored in the current browser and can be cleared with **Reset demo**.

## Center administration

The control panel includes center-level privacy and enrollment policy screens, a separate debt register, usage and access views, messages and previews, organization and department views, assets with sticker IDs, penalties, complaints, HR activity, localized payroll copy, and worker CSV preflight checks.

Policy settings and operational mutations remain browser-local demo behavior. The central policy endpoint, authoritative identity and passport checks, WhatsApp delivery, payment integrations, and tenant-side Staff/CEO enforcement require backend and product integrations before they affect live education-center workspaces.
