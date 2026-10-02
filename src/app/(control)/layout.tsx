import { AppShell } from "@/components/app-shell";
import { LocaleProvider } from "@/components/locale-provider";

export default function ControlLayout({ children }: { children: React.ReactNode }) {
  return <LocaleProvider><AppShell>{children}</AppShell></LocaleProvider>;
}
