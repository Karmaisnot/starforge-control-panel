"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { MetricCard, PageHeader, Panel, SectionHeader, StatusBadge } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import type { ModuleOverviewData } from "@/lib/mock-data";

export function ModuleOverview({ data, beforeMetrics }: { data: ModuleOverviewData; beforeMetrics?: ReactNode }) {
  const { t } = useLocale();
  return (
    <div className="page-stack">
      <PageHeader eyebrow={data.eyebrow} title={data.title} description={data.description} action={data.primaryAction} actionHref={data.primaryActionHref} />
      {beforeMetrics}
      <div className="metrics-grid">
        {data.metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </div>
      <div className="overview-grid">
        <Panel>
          <SectionHeader title={data.attentionTitle} meta={`${data.attention.length} ${t("items need a decision or follow-up")}`} />
          <div className="simple-list">
            {data.attention.map((item) => (
              <div className="simple-list-row" key={item.title}>
                <span className={`list-tone list-tone-${item.tone}`} aria-hidden="true" />
                <span className="simple-list-copy"><strong>{t(item.title)}</strong><small>{t(item.meta)}</small></span>
                <StatusBadge tone={item.tone}>{t(item.status)}</StatusBadge>
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            ))}
          </div>
        </Panel>
        <Panel>
          <SectionHeader title={data.recentTitle} meta="Canonical demo data · original values preserved" />
          <div className="simple-list">
            {data.recent.map((item) => (
              <div className="simple-list-row" key={`${item.title}-${item.value}`}>
                <CheckCircle2 className="list-check" size={17} aria-hidden="true" />
                <span className="simple-list-copy"><strong>{t(item.title)}</strong><small>{t(item.meta)}</small></span>
                <span className="list-value">{t(item.value)}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
      <Panel className="roadmap-panel">
        <div><p className="eyebrow">{t("Frontend delivery")}</p><h2>{t("Connected workspace foundation")}</h2><p>{t("This module uses the shared Orbital Ledger shell, status, money, freshness, responsive, and mock-state system. Detailed registers and mutation flows follow the product delivery slices.")}</p></div>
        <StatusBadge tone="info">Mock adapter · ready</StatusBadge>
      </Panel>
    </div>
  );
}
