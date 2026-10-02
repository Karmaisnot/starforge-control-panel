import { notFound } from "next/navigation";
import { ModuleOverview } from "@/components/module-overview";
import { CenterControls } from "@/components/center-controls";
import { OperationsWorkspace } from "@/components/operations-workspaces";
import { SettingsWorkspace } from "@/components/settings-workspace";
import { moduleOverview } from "@/lib/mock-data";
import { flatNavigation } from "@/lib/navigation";

const workspaces = [...new Set([...flatNavigation.map((item) => item.href.slice(1)), "audit"])] as string[];

export const dynamicParams = false;

export function generateStaticParams() {
  return workspaces.map((workspace) => ({ workspace }));
}

export default async function WorkspacePage({ params }: { params: Promise<{ workspace: string }> }) {
  const { workspace } = await params;
  if (workspace === "center-controls") return <CenterControls />;
  if (["debts", "inventory", "complaints", "penalties", "organization", "worker-import", "messages", "payroll", "people-activity", "departments", "usage"].includes(workspace)) {
    return <OperationsWorkspace kind={workspace as "debts" | "inventory" | "complaints" | "penalties" | "organization" | "worker-import" | "messages" | "payroll" | "people-activity" | "departments" | "usage"} />;
  }
  if (workspace === "settings") {
    const data = moduleOverview[workspace];
    if (!data) notFound();
    return <SettingsWorkspace data={data} />;
  }
  if (workspace === "audit") return <OperationsWorkspace kind="people-activity" />;
  const data = moduleOverview[workspace];
  if (!data) notFound();
  return <ModuleOverview data={data} />;
}
