"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Clock3, ExternalLink, MoreHorizontal } from "lucide-react";
import clsx from "clsx";
import type { ReactNode } from "react";
import type { AttentionItem as AttentionItemData, Tone } from "@/lib/mock-data";
import { useLocale } from "@/components/locale-provider";

export function StatusBadge({ children, tone = "neutral" }: { children: ReactNode; tone?: Tone }) {
  const { t } = useLocale();
  return <span className={clsx("status-badge", `status-${tone}`)}>{typeof children === "string" ? t(children) : children}</span>;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
  actionHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action?: string;
  actionHref?: string;
}) {
  const { t } = useLocale();
  return (
    <header className="page-header">
      <div className="page-header-copy">
        {eyebrow ? <p className="eyebrow">{t(eyebrow)}</p> : null}
        <h1>{t(title)}</h1>
        <p className="page-description">{t(description)}</p>
      </div>
      <div className="page-header-actions">
        <span className="freshness"><span aria-hidden="true" />{t("Updated 4 min ago")}</span>
        {actionHref && action ? <Link href={actionHref} className="button button-primary">{t(action)}</Link> : action ? <button className="button button-primary" disabled title={t("This action is not connected in the frontend demo.")}>{t(action)}</button> : null}
      </div>
    </header>
  );
}

export function MetricCard({
  label,
  value,
  detail,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  tone?: Tone;
}) {
  const { t } = useLocale();
  return (
    <article className={clsx("metric-card", tone && `metric-${tone}`)}>
      <p>{t(label)}</p>
      <strong>{t(value)}</strong>
      <span>{t(detail)}</span>
    </article>
  );
}

export function SectionHeader({ title, meta, href }: { title: string; meta?: string; href?: string }) {
  const { t } = useLocale();
  return (
    <div className="section-header">
      <div>
        <h2>{t(title)}</h2>
        {meta ? <p>{t(meta)}</p> : null}
      </div>
      {href ? (
        <Link href={href} className="text-link">
          {t("View all")} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export function AttentionRow({ item }: { item: AttentionItemData }) {
  const { t } = useLocale();
  return (
    <article className={clsx("attention-row", `attention-${item.tone}`)}>
      <div className="attention-indicator" aria-hidden="true" />
      <div className="attention-copy">
        <div className="attention-title-line">
          <h3>{t(item.title)}</h3>
          <StatusBadge tone={item.tone}>{t(item.due)}</StatusBadge>
        </div>
        <p className="entity-line">{t(item.entity)}</p>
        <p className="meta-line">{t(item.meta)}</p>
      </div>
      <button className="button button-quiet attention-action">
        {t(item.action)}<ChevronRight size={16} aria-hidden="true" />
      </button>
    </article>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={clsx("panel", className)}>{children}</section>;
}

export function EmptyValue() {
  return <span className="empty-value">—</span>;
}

export function MetaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="meta-link">
      {children}<ExternalLink size={13} aria-hidden="true" />
    </Link>
  );
}

export function CompactMenuButton({ label }: { label: string }) {
  return (
    <button className="icon-button" aria-label={label} title={label}>
      <MoreHorizontal size={18} aria-hidden="true" />
    </button>
  );
}

export function DueValue({ children }: { children: ReactNode }) {
  return <span className="due-value"><Clock3 size={14} aria-hidden="true" />{children}</span>;
}
