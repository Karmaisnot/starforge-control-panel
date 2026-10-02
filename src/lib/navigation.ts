import { attentionItems } from "./mock-data";

export type NavigationItem = {
  label: string;
  shortLabel?: string;
  href: string;
  icon:
    | "today"
    | "actions"
    | "centers"
    | "catalog"
    | "revenue"
    | "expenses"
    | "documents"
    | "people"
    | "company"
    | "support"
    | "infrastructure"
    | "repositories"
    | "audit"
    | "settings"
    | "sliders"
    | "wallet"
    | "inventory"
    | "messages"
    | "complaints"
    | "penalties"
    | "organization"
    | "upload"
    | "departments";
  count?: number;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Command",
    items: [
      { label: "Today", href: "/today", icon: "today" },
      { label: "Action Center", shortLabel: "Actions", href: "/actions", icon: "actions", count: attentionItems.length },
    ],
  },
  {
    label: "Customers",
    items: [
      { label: "Education Centers", shortLabel: "Centers", href: "/centers", icon: "centers" },
      { label: "Center Policies", shortLabel: "Policies", href: "/center-controls", icon: "sliders" },
      { label: "Usage & Access", shortLabel: "Usage", href: "/usage", icon: "people" },
    ],
  },
  {
    label: "Academic Departments",
    items: [{ label: "Department Directory", shortLabel: "Departments", href: "/departments", icon: "departments" }],
  },
  {
    label: "Center Operations",
    items: [
      { label: "Organization Chart", shortLabel: "Org chart", href: "/organization", icon: "organization" },
      { label: "Assets & Inventory", shortLabel: "Inventory", href: "/inventory", icon: "inventory" },
      { label: "Penalties", href: "/penalties", icon: "penalties" },
      { label: "Customer Complaints", shortLabel: "Complaints", href: "/complaints", icon: "complaints", count: 3 },
      { label: "Import Workers", shortLabel: "Import", href: "/worker-import", icon: "upload" },
      { label: "Messages", href: "/messages", icon: "messages" },
    ],
  },
  {
    label: "Commercial",
    items: [
      { label: "Plans & Products", shortLabel: "Catalog", href: "/catalog", icon: "catalog" },
      { label: "Revenue & Billing", shortLabel: "Revenue", href: "/revenue", icon: "revenue" },
      { label: "Debt Register", shortLabel: "Debts", href: "/debts", icon: "wallet" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "Expenses & Purchases", shortLabel: "Expenses", href: "/expenses", icon: "expenses" },
      { label: "Contracts & Documents", shortLabel: "Documents", href: "/documents", icon: "documents" },
      { label: "People & HR", shortLabel: "People", href: "/people", icon: "people" },
      { label: "Payroll", href: "/payroll", icon: "expenses" },
      { label: "HR Activity", href: "/people-activity", icon: "audit" },
      { label: "Company & Ownership", shortLabel: "Company", href: "/company", icon: "company" },
    ],
  },
  {
    label: "Operations",
    items: [
      { label: "Support", href: "/support", icon: "support", count: 3 },
      { label: "Infrastructure", href: "/infrastructure", icon: "infrastructure", count: 2 },
      { label: "Repositories", href: "/repositories", icon: "repositories" },
    ],
  },
  {
    label: "Governance",
    items: [
      { label: "Settings", href: "/settings", icon: "settings" },
    ],
  },
];

export const flatNavigation = navigationGroups.flatMap((group) => group.items);
