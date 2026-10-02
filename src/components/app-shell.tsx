"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import {
  Activity,
  BellRing,
  BookOpenCheck,
  Bot,
  Boxes,
  Building2,
  CalendarCheck2,
  ChevronDown,
  CircleDollarSign,
  Command,
  FileStack,
  FolderGit2,
  Gauge,
  GraduationCap,
  MessageSquareText,
  Network,
  PackageCheck,
  Landmark,
  Menu,
  Moon,
  Plus,
  ReceiptText,
  Search,
  Settings,
  SlidersHorizontal,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Upload,
  WalletCards,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { centers } from "@/lib/mock-data";
import { flatNavigation, navigationGroups, type NavigationItem } from "@/lib/navigation";
import { useLocale } from "@/components/locale-provider";

const iconMap: Record<NavigationItem["icon"], LucideIcon> = {
  today: Gauge,
  actions: CalendarCheck2,
  centers: Building2,
  catalog: Boxes,
  revenue: CircleDollarSign,
  expenses: ReceiptText,
  documents: FileStack,
  people: Users,
  company: Landmark,
  support: BookOpenCheck,
  infrastructure: Bot,
  repositories: FolderGit2,
  audit: Activity,
  settings: Settings,
  sliders: SlidersHorizontal,
  wallet: WalletCards,
  inventory: PackageCheck,
  messages: MessageSquareText,
  complaints: BookOpenCheck,
  penalties: ShieldCheck,
  organization: Network,
  upload: Upload,
  departments: GraduationCap,
};

const createActions = [
  { label: "Education center", href: "/centers/new", icon: Building2 },
  { label: "Payment", href: "/revenue", icon: WalletCards },
  { label: "Expense", href: "/expenses", icon: ReceiptText },
  { label: "Employee", href: "/people", icon: Users },
  { label: "Support ticket", href: "/support", icon: BookOpenCheck },
  { label: "Contract", href: "/documents", icon: FileStack },
];

function OrbitMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={clsx("orbit-mark", compact && "orbit-mark-compact")} aria-hidden="true">
      <span className="orbit-ring" />
      <span className="orbit-core" />
    </span>
  );
}

function NavLink({ item, compact = false, onSelect }: { item: NavigationItem; compact?: boolean; onSelect?: () => void }) {
  const pathname = usePathname();
  const { t } = useLocale();
  const active = pathname === item.href || (item.href !== "/today" && pathname.startsWith(`${item.href}/`));
  const Icon = iconMap[item.icon];

  return (
    <Link
      href={item.href}
      className={clsx("nav-link", active && "nav-link-active", compact && "nav-link-compact")}
      onClick={onSelect}
      aria-current={active ? "page" : undefined}
      title={compact ? t(item.label) : undefined}
    >
      <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
      {!compact ? <span>{t(item.label)}</span> : <span className="sr-only">{t(item.label)}</span>}
      {item.count ? <span className="nav-count" aria-label={`${item.count} unresolved`}>{item.count}</span> : null}
    </Link>
  );
}

function Navigation({ compact = false, onSelect }: { compact?: boolean; onSelect?: () => void }) {
  const { t } = useLocale();
  return (
    <nav className="primary-navigation" aria-label={t("Primary navigation")}>
      {navigationGroups.map((group) => (
        <div className="nav-group" key={group.label}>
          {!compact ? <p className="nav-group-label">{t(group.label)}</p> : <span className="nav-divider" aria-hidden="true" />}
          {group.items.map((item) => <NavLink key={item.href} item={item} compact={compact} onSelect={onSelect} />)}
        </div>
      ))}
    </nav>
  );
}

function CreateMenu() {
  const { t } = useLocale();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="button button-primary create-button">
          <Plus size={17} aria-hidden="true" />{t("Create")}<ChevronDown size={14} aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdown-content" sideOffset={8} align="end">
          <DropdownMenu.Label className="dropdown-label">{t("Create new")}</DropdownMenu.Label>
          {createActions.map((action) => {
            const Icon = action.icon;
            return (
              <DropdownMenu.Item asChild key={action.label}>
                <Link href={action.href} className="dropdown-item">
                  <Icon size={17} aria-hidden="true" />{t(action.label)}
                </Link>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function NotificationMenu() {
  const [unread, setUnread] = useState(true);
  const { t } = useLocale();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="icon-button notification-trigger" aria-label={t(unread ? "Notifications, 3 unread" : "Notifications")} title={t("Notifications")}>
          <BellRing size={18} />{unread ? <span className="utility-count">3</span> : null}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdown-content notification-menu" sideOffset={8} align="end">
          <div className="notification-heading"><div><DropdownMenu.Label className="dropdown-label">{t("Notifications")}</DropdownMenu.Label><span>{t("Recent center activity")}</span></div><button className="notification-mark-read" onClick={() => setUnread(false)}>{t("Mark all read")}</button></div>
          <DropdownMenu.Item asChild>
            <Link href="/complaints" className="notification-item" onClick={() => setUnread(false)}>{unread ? <span className="notification-unread-dot" /> : null}<span><strong>{t("New customer complaint")}</strong><small>{t("Northstar Academy · 12 min ago")}</small></span></Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link href="/debts" className="notification-item" onClick={() => setUnread(false)}>{unread ? <span className="notification-unread-dot" /> : null}<span><strong>{t("Payment is overdue")}</strong><small>{t("Northstar Academy · 1 hour ago")}</small></span></Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link href="/worker-import" className="notification-item" onClick={() => setUnread(false)}>{unread ? <span className="notification-unread-dot" /> : null}<span><strong>{t("Worker import needs review")}</strong><small>{t("Atlas Education · 2 hours ago")}</small></span></Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="dropdown-separator" />
          <DropdownMenu.Item asChild><Link href="/actions" className="notification-all">{t("Open Action Center")} <ChevronDown size={14} /></Link></DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function CommandSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return { routes: flatNavigation.slice(0, 6), centers: centers.slice(0, 3) };
    return {
      routes: flatNavigation.filter((item) => `${item.label} ${t(item.label)}`.toLowerCase().includes(needle)).slice(0, 6),
      centers: centers.filter((center) => `${center.name} ${center.code}`.toLowerCase().includes(needle)).slice(0, 5),
    };
  }, [query, t]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="search-trigger" aria-label={t("Search and commands")}>
          <Search size={17} aria-hidden="true" /><span>{t("Search or run a command")}</span><kbd>Ctrl K</kbd>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="command-dialog" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">{t("Search and commands")}</Dialog.Title>
          <div className="command-input-wrap">
            <Search size={19} aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("Search centers, pages, payments, people…")} autoFocus />
            <Dialog.Close className="icon-button"><X size={18} /><span className="sr-only">{t("Close search")}</span></Dialog.Close>
          </div>
          <div className="command-results">
            {results.routes.length ? <p className="command-group-label">{t("Destinations")}</p> : null}
            {results.routes.map((item) => {
              const Icon = iconMap[item.icon];
              return <Dialog.Close asChild key={item.href}><Link className="command-result" href={item.href}><Icon size={18} /><span><strong>{t(item.label)}</strong><small>{t("Open workspace")}</small></span><Command size={14} /></Link></Dialog.Close>;
            })}
            {results.centers.length ? <p className="command-group-label">{t("Education centers")}</p> : null}
            {results.centers.map((center) => <Dialog.Close asChild key={center.id}><Link className="command-result" href={`/centers/${center.id}`}><Building2 size={18} /><span><strong>{center.name}</strong><small>{center.code} · {t(center.status)}</small></span></Link></Dialog.Close>)}
            {!results.routes.length && !results.centers.length ? <div className="command-empty"><Search size={24} /><strong>{t("No matching records")}</strong><span>{t("Try a center name, code, or destination.")}</span></div> : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MobileNavigation({ dock = false }: { dock?: boolean }) {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild><button className={clsx("icon-button mobile-menu-button", dock && "mobile-dock-more")} aria-label={dock ? t("More navigation") : t("Open navigation")}><Menu size={20} /><span className={dock ? undefined : "sr-only"}>{dock ? t("More") : t("Open navigation")}</span></button></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="mobile-nav-sheet" aria-describedby={undefined}>
          <div className="mobile-nav-header"><Dialog.Title><OrbitMark />Starforge <span>{t("Control Panel")}</span></Dialog.Title><Dialog.Close className="icon-button"><X size={20} /><span className="sr-only">{t("Close navigation")}</span></Dialog.Close></div>
          <Navigation onSelect={() => setOpen(false)} />
          <div className="mobile-nav-footer"><span className="demo-dot" />{t("Demo environment")}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { locale, t } = useLocale();
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const current = flatNavigation.find((item) => pathname === item.href || (item.href !== "/today" && pathname.startsWith(`${item.href}/`)));

  useEffect(() => {
    const stored = window.localStorage.getItem("sf-theme");
    const initial = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = initial ? "dark" : "light";
    const frame = window.requestAnimationFrame(() => setDark(initial));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("sf-theme", next ? "dark" : "light");
  };

  const resetDemo = () => {
    for (const key of Object.keys(window.localStorage)) {
      if (key !== "sf-theme" && key !== "sf-locale") window.localStorage.removeItem(key);
    }
    window.location.reload();
  };

  return (
    <div className={clsx("app-shell", collapsed && "app-shell-collapsed")} lang={locale}>
      <aside className="sidebar">
        <div className="brand-block"><OrbitMark compact={collapsed} />{!collapsed ? <div><strong>Starforge</strong><span>{t("Control Panel")}</span></div> : null}<button className="sidebar-collapse" onClick={() => setCollapsed((value) => !value)} aria-label={t(collapsed ? "Expand navigation" : "Collapse navigation")}>{collapsed ? "›" : "‹"}</button></div>
        <Navigation compact={collapsed} />
        <div className="sidebar-footer">
          {!collapsed ? <div className="environment-label"><span className="demo-dot" /><div><strong>{t("Demo environment")}</strong><small>{t("No production changes")}</small></div></div> : <span className="demo-dot" title={t("Demo environment")} />}
          <div className="operator"><span className="operator-avatar">SH</span>{!collapsed ? <div><strong>Sheikh</strong><small>{t("Founder · Owner")}</small></div> : null}</div>
        </div>
      </aside>

      <div className="app-frame">
        <header className="utility-bar">
          <div className="mobile-header-left"><MobileNavigation /><OrbitMark compact /><strong>{t(current?.shortLabel ?? current?.label ?? "Starforge")}</strong></div>
          <div className="desktop-scope"><span>Starforge</span><span>/</span><strong>{t(current?.label ?? "Control Panel")}</strong></div>
          <CommandSearch />
          <div className="utility-actions">
            <CreateMenu />
            <NotificationMenu />
            <button className="icon-button utility-secondary" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"} title={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild><button className="profile-trigger"><span>SH</span><ChevronDown size={14} /><span className="sr-only">{t("Open profile menu")}</span></button></DropdownMenu.Trigger>
              <DropdownMenu.Portal><DropdownMenu.Content className="dropdown-content" sideOffset={8} align="end"><DropdownMenu.Label className="dropdown-label">{t("Sheikh · Owner")}</DropdownMenu.Label></DropdownMenu.Content></DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </header>
        <div className="demo-banner"><Sparkles size={14} aria-hidden="true" /><span><strong>{t("Demo data")}</strong> {t("· Changes stay in this browser")}</span><button type="button" onClick={resetDemo}>{t("Reset demo")}</button></div>
        <main id="main-content" className="main-content">{children}</main>
      </div>

      <nav className="mobile-dock" aria-label={t("Mobile primary navigation")}>
        {flatNavigation.slice(0, 3).map((item) => {
          const Icon = iconMap[item.icon]; const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return <Link key={item.href} href={item.href} className={active ? "mobile-dock-active" : undefined}><Icon size={19} /><span>{t(item.shortLabel ?? item.label)}</span></Link>;
        })}
        <button onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}><Search size={19} /><span>{t("Search")}</span></button>
        <MobileNavigation dock />
      </nav>
    </div>
  );
}
