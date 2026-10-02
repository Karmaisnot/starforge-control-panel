"use client";

import { ModuleOverview } from "@/components/module-overview";
import { Panel, SectionHeader } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";
import type { ModuleOverviewData } from "@/lib/mock-data";

export function SettingsWorkspace({ data }: { data: ModuleOverviewData }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <ModuleOverview
      data={data}
      beforeMetrics={
        <Panel>
          <SectionHeader title={t("Application language")} meta={t("Choose the language used throughout the control panel.")} />
          <label className="form-field locale-setting-field">
            <span>{t("Language")}</span>
            <select className="form-control" value={locale} onChange={(event) => setLocale(event.target.value as "en" | "ru")}>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
            <small>{t("Applied immediately and saved in this browser.")}</small>
          </label>
        </Panel>
      }
    />
  );
}
