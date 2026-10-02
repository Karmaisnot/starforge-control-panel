"use client";

import { useState, type FormEvent } from "react";
import { Check, CircleAlert } from "lucide-react";
import { Panel, PageHeader, SectionHeader } from "@/components/ui";
import { useLocale } from "@/components/locale-provider";

export function NewCenterForm() {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("UZ");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [created, setCreated] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCreated(false);
    if (!name.trim()) {
      setError("Center name is required.");
      return;
    }
    if (!/^(?!.*\.\.)[A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,63}$/i.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setCreated(true);
  };

  return (
    <div className="page-stack">
      <PageHeader eyebrow="Customers" title="Add an education center" description="Create a draft customer profile with the minimum commercial details for review." action="Back to education centers" actionHref="/centers" />
      <Panel>
        <SectionHeader title="Center profile" meta="Demo only · no customer data is sent to the server" />
        <div className="endpoint-notice"><CircleAlert size={16} /><span>{t("Center creation remains a demo action; no customer record is sent to the server.")}</span></div>
        <form className="asset-create-form new-center-form" onSubmit={submit}>
          <label className="form-field"><span>{t("Center name")}</span><input className="form-control" required minLength={2} maxLength={120} autoComplete="organization" value={name} onChange={(event) => setName(event.target.value)} /></label>
          <label className="form-field"><span>{t("Country")}</span><select className="form-control" value={country} onChange={(event) => setCountry(event.target.value)}><option value="UZ">{t("Uzbekistan")}</option><option value="KZ">{t("Kazakhstan")}</option><option value="KG">{t("Kyrgyzstan")}</option><option value="TJ">{t("Tajikistan")}</option><option value="RU">{t("Russia")}</option></select></label>
          <label className="form-field"><span>{t("Primary contact email")}</span><input className="form-control" type="email" required maxLength={254} autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
          <label className="form-field"><span>{t("Reporting currency")}</span><select className="form-control" value={currency} onChange={(event) => setCurrency(event.target.value)}><option value="USD">{t("USD · US dollar")}</option><option value="UZS">{t("UZS · Uzbekistani som")}</option><option value="RUB">{t("RUB · Russian ruble")}</option><option value="KZT">{t("KZT · Kazakhstani tenge")}</option></select></label>
          {error ? <p className="field-error" role="alert"><CircleAlert size={15} />{t(error)}</p> : null}
          {created ? <p className="inline-success"><Check size={15} />{t("A new education center draft is ready for review.")} · {name} · {country} · {currency}</p> : null}
          <button className="button button-primary" type="submit">{t("Create demo draft")}</button>
        </form>
      </Panel>
    </div>
  );
}
