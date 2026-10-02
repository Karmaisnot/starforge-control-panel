"use client";

import { Building2 } from "lucide-react";
import { MetricCard, PageHeader, Panel, SectionHeader, StatusBadge } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import { centers } from "@/lib/mock-data";

type Center = (typeof centers)[number];

export function CenterDetails({ center }: { center: Center }) {
  const { t } = useLocale();
  const description = [center.location, center.deployment, center.plan].map(t).join(" · ");

  return (
    <div className="page-stack">
      <PageHeader eyebrow={`${t("Customers")} · ${center.code}`} title={center.name} description={description} action="Back to education centers" actionHref="/centers" />
      <div className="metrics-grid">
        <MetricCard label="Branches" value={String(center.branches)} detail="Registered locations" />
        <MetricCard label="Licensed products" value={String(center.products)} detail="Current center coverage" />
        <MetricCard label="Support tickets" value={String(center.tickets)} detail="Open customer requests" tone={center.tickets ? "warning" : "success"} />
        <MetricCard label="Account status" value={center.status} detail={center.freshness} tone={center.tone} />
      </div>
      <div className="overview-grid">
        <Panel>
          <SectionHeader title="Customer account" meta={`Center ID · ${center.id}`} />
          <div className="simple-list">
            <div className="simple-list-row"><Building2 size={17} /><span className="simple-list-copy"><strong>{t("Plan")}</strong><small>{t("Commercial agreement")}</small></span><span className="list-value">{t(center.plan)}</span></div>
            <div className="simple-list-row"><span className="list-tone" /><span className="simple-list-copy"><strong>{t("Deployment")}</strong><small>{t("Hosting arrangement")}</small></span><span className="list-value">{t(center.deployment)}</span></div>
            <div className="simple-list-row"><span className="list-tone list-tone-warning" /><span className="simple-list-copy"><strong>{t("Account status")}</strong><small>{t(center.attention)}</small></span><StatusBadge tone={center.tone}>{center.status}</StatusBadge></div>
          </div>
        </Panel>
        <Panel>
          <SectionHeader title="Billing schedule" meta={t(center.paymentState)} />
          <div className="simple-list">
            <div className="simple-list-row"><span className="list-tone list-tone-warning" /><span className="simple-list-copy"><strong>{t("Next scheduled amount")}</strong><small>{t("Original currency is preserved")}</small></span><span className="list-value">{center.nextPayment}</span></div>
            <div className="simple-list-row"><span className="list-tone" /><span className="simple-list-copy"><strong>{t("Payment state")}</strong><small>{t("Demo record · no payment action")}</small></span><StatusBadge tone={center.tone}>{center.paymentState}</StatusBadge></div>
          </div>
        </Panel>
      </div>
      <p className="prototype-footnote">{t("Center profile and billing details are synthetic demo data. No customer records or payments are changed.")}</p>
    </div>
  );
}
