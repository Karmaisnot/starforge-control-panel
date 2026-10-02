"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Check, ChevronDown, CircleHelp, LockKeyhole, MessageSquareText, Save, ShieldCheck } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { centers } from "@/lib/mock-data";

type SettingsTab = "privacy" | "admissions" | "groups" | "messages" | "finance";

type CenterPolicy = {
  hideStudentPersonalData: boolean;
  hideTeacherAge: boolean;
  hideDebtRequests: boolean;
  requirePassportPhoto: boolean;
  requirePassportVerification: boolean;
  allowStaffLessonPayments: boolean;
  mergeAdmissionsAndStudents: boolean;
  replaceMedicalWithComment: boolean;
  autoCreateGroups: boolean;
  autoSetCapacity: boolean;
  groupByDepartment: boolean;
  monthlyLevels: boolean;
  separateDebtPage: boolean;
  discountsByGroup: boolean;
  whatsappNotifications: boolean;
  previewMessages: boolean;
  payrollSimpleLabels: boolean;
  requirePhone: boolean;
  requiredFields: string[];
  lessonsPerCourse: number;
  staffLocale: string;
  phonePattern: string;
  emailPattern: string;
  passportPattern: string;
  messageTemplate: string;
  discountGroup: string;
  discountPercent: number;
};

const initialPolicy: CenterPolicy = {
  hideStudentPersonalData: true,
  hideTeacherAge: true,
  hideDebtRequests: true,
  requirePassportPhoto: true,
  requirePassportVerification: true,
  allowStaffLessonPayments: false,
  mergeAdmissionsAndStudents: true,
  replaceMedicalWithComment: true,
  autoCreateGroups: true,
  autoSetCapacity: true,
  groupByDepartment: false,
  monthlyLevels: true,
  separateDebtPage: true,
  discountsByGroup: true,
  whatsappNotifications: true,
  previewMessages: true,
  payrollSimpleLabels: true,
  requirePhone: true,
  requiredFields: ["Full name", "Passport ID", "Passport photo", "Phone number", "Place of birth", "School type"],
  lessonsPerCourse: 7,
  staffLocale: "uz",
  phonePattern: "^\\+?[1-9]\\d{7,14}$",
  emailPattern: "^(?!.*\\.\\.)[A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+[A-Z]{2,63}$",
  passportPattern: "^[A-Z]{2}\\d{7}$",
  messageTemplate: "Assalomu alaykum, {{parent_name}}! {{student_name}} uchun dars {{lesson_status}}.",
  discountGroup: "IELTS evening group",
  discountPercent: 5,
};

const tabItems: Array<{ id: SettingsTab; label: string }> = [
  { id: "privacy", label: "Privacy & access" },
  { id: "admissions", label: "Student records" },
  { id: "groups", label: "Groups & lessons" },
  { id: "messages", label: "Messages" },
  { id: "finance", label: "Finance & language" },
];

const studentFields = ["Full name", "Passport ID", "Passport photo", "Phone number", "Place of birth", "School type", "Parent contact", "Comment"];

function ToggleRow({
  title,
  description,
  checked,
  onChange,
  disabled = false,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}) {
  const { t } = useLocale();
  return (
    <label className={`policy-toggle${disabled ? " policy-toggle-disabled" : ""}`}>
      <span className="policy-toggle-copy"><strong>{t(title)}</strong><small>{t(description)}</small></span>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
      <span className="switch-track" aria-hidden="true"><span /></span>
    </label>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  const { t } = useLocale();
  return <label className="form-field"><span>{t(label)}</span>{children}{hint ? <small>{t(hint)}</small> : null}</label>;
}

export function CenterControls() {
  const { t } = useLocale();
  const [policy, setPolicy] = useState<CenterPolicy>(initialPolicy);
  const [tab, setTab] = useState<SettingsTab>("privacy");
  const [center, setCenter] = useState("Northstar Academy");
  const [saved, setSaved] = useState(false);
  const [formError, setFormError] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [template, setTemplate] = useState(initialPolicy.messageTemplate);
  const [phoneSample, setPhoneSample] = useState("+998901234567");
  const [emailSample, setEmailSample] = useState("parent@example.uz");
  const [passportSample, setPassportSample] = useState("AA1234567");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      try {
        const savedPolicy = window.localStorage.getItem(`sf-center-policy:${center}`);
        if (savedPolicy) {
          const parsed = JSON.parse(savedPolicy) as Partial<CenterPolicy>;
          setPolicy({ ...initialPolicy, ...parsed });
          setTemplate(parsed.messageTemplate ?? initialPolicy.messageTemplate);
        } else {
          setPolicy(initialPolicy);
          setTemplate(initialPolicy.messageTemplate);
        }
      } catch {
        setPolicy(initialPolicy);
        setTemplate(initialPolicy.messageTemplate);
      }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, [center]);

  const selectCenter = (nextCenter: string) => {
    setCenter(nextCenter);
    setSaved(false);
    try {
      const savedPolicy = window.localStorage.getItem(`sf-center-policy:${nextCenter}`);
      if (!savedPolicy) {
        setPolicy(initialPolicy);
        setTemplate(initialPolicy.messageTemplate);
        return;
      }
      const parsed = JSON.parse(savedPolicy) as Partial<CenterPolicy>;
      setPolicy({ ...initialPolicy, ...parsed });
      setTemplate(parsed.messageTemplate ?? initialPolicy.messageTemplate);
    } catch {
      setPolicy(initialPolicy);
      setTemplate(initialPolicy.messageTemplate);
    }
  };

  const setValue = <K extends keyof CenterPolicy>(key: K, value: CenterPolicy[K]) => {
    setPolicy((current) => ({ ...current, [key]: value }));
    setSaved(false);
  };

  const patternResults = useMemo(() => {
    const check = (pattern: string, value: string) => {
      try {
        return new RegExp(pattern, "i").test(value);
      } catch {
        return false;
      }
    };
    return {
      phone: check(policy.phonePattern, phoneSample),
      email: check(policy.emailPattern, emailSample),
      passport: check(policy.passportPattern, passportSample),
    };
  }, [emailSample, passportSample, phoneSample, policy.emailPattern, policy.passportPattern, policy.phonePattern]);

  const renderedMessage = template
    .replaceAll("{{parent_name}}", "Dilnoza opa")
    .replaceAll("{{student_name}}", "Madina")
    .replaceAll("{{lesson_status}}", "kutilmoqda");

  const savePolicy = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!patternResults.phone || !patternResults.email || !patternResults.passport) {
      setFormError("The configured phone, email, and passport patterns must accept their valid sample values.");
      return;
    }
    setFormError("");
    try {
      window.localStorage.setItem(`sf-center-policy:${center}`, JSON.stringify({ ...policy, messageTemplate: template }));
    } catch {
      setFormError("Could not save settings in this browser.");
      return;
    }
    setPolicy((current) => ({ ...current, messageTemplate: template }));
    setSaved(true);
  };

  const toggleRequiredField = (field: string) => {
    const exists = policy.requiredFields.includes(field);
    setValue("requiredFields", exists ? policy.requiredFields.filter((item) => item !== field) : [...policy.requiredFields, field]);
  };

  return (
    <div className="page-stack">
      <header className="workspace-header">
        <div><p className="eyebrow">{t("Center administration")}</p><h1>{t("Education center policies")}</h1><p className="page-description">{t("Configure privacy, enrollment, lessons, messaging, and finance rules for each Starforge customer.")}</p></div>
        <div className="workspace-header-actions">
          <Field label="Applies to">
            <select className="form-control center-select" value={center} onChange={(event) => selectCenter(event.target.value)}>
              {centers.map((item) => <option key={item.id}>{item.name}</option>)}<option value="All centers · default policy">{t("All centers · default policy")}</option>
            </select>
          </Field>
          <button className="button button-primary" type="submit" form="center-policy-form"><Save size={16} />{t("Save policy")}</button>
        </div>
      </header>

      <div className="policy-status-line"><span className="policy-status-dot" /><span>{center}</span><span>·</span><span>{t("Changes are a local demo until the central policy API is connected.")}</span>{saved ? <strong className="save-confirmation"><Check size={14} /> {t("Saved in this browser")}</strong> : null}</div>

      <div className="settings-workspace">
        <aside className="settings-tabs" aria-label={t("Policy categories")}>
          {tabItems.map((item) => <button type="button" key={item.id} className={tab === item.id ? "settings-tab settings-tab-active" : "settings-tab"} onClick={() => setTab(item.id)}>{t(item.label)}<ChevronDown size={14} aria-hidden="true" /></button>)}
          <div className="policy-security-note"><ShieldCheck size={17} /><span><strong>{t("Privacy-first defaults")}</strong><small>{t("Student personal details stay hidden from teacher roles.")}</small></span></div>
        </aside>

        <form className="policy-form" id="center-policy-form" onSubmit={savePolicy}>
          {!hydrated ? <div className="policy-loading">{t("Loading saved center policy…")}</div> : null}
          {formError ? <p className="field-error" role="alert">{t(formError)}</p> : null}
          {tab === "privacy" ? <>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Role visibility")}</h2><p>{t("Limit sensitive student and staff data in Staff Web and Staff Mobile.")}</p></div><LockKeyhole size={19} /></div>
              <ToggleRow title="Hide students’ personal data from teachers" description="Teachers see only the fields needed for their lessons. Guardian contacts, passport details, and private notes stay restricted." checked={policy.hideStudentPersonalData} onChange={(checked) => setValue("hideStudentPersonalData", checked)} />
              <ToggleRow title="Remove age from teacher accounts" description="Do not collect or display age in teacher profiles or staff lists." checked={policy.hideTeacherAge} onChange={(checked) => setValue("hideTeacherAge", checked)} />
              <ToggleRow title="Hide debt requests from teachers" description="Debt request lists and collection actions remain available to authorized finance roles." checked={policy.hideDebtRequests} onChange={(checked) => setValue("hideDebtRequests", checked)} />
              <ToggleRow title="Require passport identity verification" description="Do not complete enrollment until the passport ID has been verified." checked={policy.requirePassportVerification} onChange={(checked) => setValue("requirePassportVerification", checked)} />
              <ToggleRow title="Require a passport photo" description="The student record cannot be submitted without a passport image." checked={policy.requirePassportPhoto} onChange={(checked) => setValue("requirePassportPhoto", checked)} />
            </section>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Input validation")}</h2><p>{t("Use explicit patterns and immediate validation for imported and entered contact data.")}</p></div><CircleHelp size={18} /></div>
              <div className="validation-grid">
                <Field label="Phone number regex" hint="E.164 format; accepts international country codes."><input className="form-control code-input" value={policy.phonePattern} onChange={(event) => setValue("phonePattern", event.target.value)} /></Field>
                <Field label="Email regex"><input className="form-control code-input" value={policy.emailPattern} onChange={(event) => setValue("emailPattern", event.target.value)} /></Field>
                <Field label="Passport ID regex" hint="Two letters followed by seven digits."><input className="form-control code-input" value={policy.passportPattern} onChange={(event) => setValue("passportPattern", event.target.value)} /></Field>
              </div>
              <div className="regex-preview" aria-live="polite">
                <Field label="Phone test"><span className="validation-sample"><input type="tel" inputMode="tel" maxLength={16} pattern={policy.phonePattern} className="form-control" value={phoneSample} onChange={(event) => setPhoneSample(event.target.value)} aria-label={t("Test phone number")} /><small className={patternResults.phone ? "validation-valid" : "validation-invalid"}>{t(patternResults.phone ? "Valid" : "Does not match")}</small></span></Field>
                <Field label="Email test"><span className="validation-sample"><input type="email" maxLength={254} pattern={policy.emailPattern} className="form-control" value={emailSample} onChange={(event) => setEmailSample(event.target.value)} aria-label={t("Test email")} /><small className={patternResults.email ? "validation-valid" : "validation-invalid"}>{t(patternResults.email ? "Valid" : "Does not match")}</small></span></Field>
                <Field label="Passport test"><span className="validation-sample"><input maxLength={9} pattern={policy.passportPattern} className="form-control" value={passportSample} onChange={(event) => setPassportSample(event.target.value.toUpperCase())} aria-label={t("Test passport ID")} /><small className={patternResults.passport ? "validation-valid" : "validation-invalid"}>{t(patternResults.passport ? "Valid" : "Does not match")}</small></span></Field>
              </div>
            </section>
          </> : null}

          {tab === "admissions" ? <>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Student enrollment")}</h2><p>{t("Keep admission and student records in one workflow with a clear set of required details.")}</p></div><UsersIcon /></div>
              <ToggleRow title="Merge admissions and student records" description="Review prospective students in the same workspace as the student register." checked={policy.mergeAdmissionsAndStudents} onChange={(checked) => setValue("mergeAdmissionsAndStudents", checked)} />
              <div className="form-grid">
                <Field label="Place of birth"><select className="form-control" defaultValue="Tashkent">{["Tashkent", "Samarkand", "Bukhara", "Andijan", "Fergana", "Other Uzbekistan region"].map((place) => <option key={place} value={place}>{t(place)}</option>)}</select></Field>
                <Field label="Phone country code"><select className="form-control" defaultValue="+998 Uzbekistan">{["+998 Uzbekistan", "+7 Kazakhstan", "+996 Kyrgyzstan", "+992 Tajikistan", "+1 United States"].map((country) => <option key={country} value={country}>{t(country)}</option>)}</select></Field>
                <Field label="School type"><select className="form-control" defaultValue="Government school">{["Government school", "Private school", "International school", "Not currently enrolled"].map((school) => <option key={school} value={school}>{t(school)}</option>)}</select></Field>
                <Field label="Prospective student status"><select className="form-control" defaultValue="New applicant">{["New applicant", "Trial student", "Returning student", "Transfer student"].map((status) => <option key={status} value={status}>{t(status)}</option>)}</select></Field>
              </div>
              <div className="required-fields"><strong>{t("Required enrollment fields")}</strong><div className="field-check-grid">{studentFields.map((field) => <label key={field}><input type="checkbox" checked={policy.requiredFields.includes(field)} onChange={() => toggleRequiredField(field)} />{t(field)}</label>)}</div></div>
            </section>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Optional information")}</h2><p>{t("Collect only information that supports a defined school workflow.")}</p></div></div>
              <ToggleRow title="Use a comment field instead" description="Provide a general note for relevant context without collecting a medical data category." checked={policy.replaceMedicalWithComment} onChange={(checked) => setValue("replaceMedicalWithComment", checked)} />
            </section>
          </> : null}

          {tab === "groups" ? <>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Group rules")}</h2><p>{t("Automate group creation and keep capacity derived from the center’s plan.")}</p></div><UsersIcon /></div>
              <ToggleRow title="Automatically create groups" description="Create a matching group when a new class or enrollment cohort is approved." checked={policy.autoCreateGroups} onChange={(checked) => setValue("autoCreateGroups", checked)} />
              <ToggleRow title="Set group capacity automatically" description="Use the center’s configured capacity limit instead of asking staff to enter it." checked={policy.autoSetCapacity} onChange={(checked) => setValue("autoSetCapacity", checked)} />
              <ToggleRow title="Group students by department" description="Off: department is not required for group creation." checked={policy.groupByDepartment} onChange={(checked) => setValue("groupByDepartment", checked)} />
              <ToggleRow title="Make levels unique by month" description="A level can be created once per month for a center, preventing duplicate monthly levels." checked={policy.monthlyLevels} onChange={(checked) => setValue("monthlyLevels", checked)} />
            </section>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Central lesson settings")}</h2><p>{t("Change the course lesson count from the central policy endpoint.")}</p></div><span className="demo-endpoint-badge">{t("Demo endpoint")}</span></div>
              <div className="form-grid form-grid-aligned">
                <Field label="Lessons per course" hint="Set the active count; lesson 8 is not hard-coded."><input className="form-control lesson-count-input" type="number" min="1" max="30" value={policy.lessonsPerCourse} onChange={(event) => setValue("lessonsPerCourse", Number(event.target.value))} /></Field>
                <Field label="Central policy endpoint"><input className="form-control code-input" value="/api/centers/{centerId}/settings/academic-policy" readOnly /></Field>
              </div>
              <div className="endpoint-notice"><CircleHelp size={16} /><span>{t("This prototype saves settings in this browser. The endpoint must be connected to the backend before changes affect Staff or CEO products.")}</span></div>
              <div className="lesson-state-preview"><strong>{t("Lesson payment states")}</strong><span className="state-chip state-pending">{t("Pending")}</span><span className="state-chip state-used">{t("Already used")}</span><small>{t("Lesson payments are not collected from the lesson screen.")}</small></div>
            </section>
          </> : null}

          {tab === "messages" ? <>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Message delivery")}</h2><p>{t("Send center notifications through configured messaging providers and keep delivery visible.")}</p></div><MessageSquareText size={19} /></div>
              <ToggleRow title="WhatsApp notifications" description="Use WhatsApp for approved parent and staff message templates." checked={policy.whatsappNotifications} onChange={(checked) => setValue("whatsappNotifications", checked)} />
              <ToggleRow title="Preview before sending" description="Show a recipient-ready preview with substitutions before a message is sent." checked={policy.previewMessages} onChange={(checked) => setValue("previewMessages", checked)} />
              <Field label="Message template" hint="Available variables: {{student_name}}, {{parent_name}}, {{lesson_status}}."><textarea className="form-control message-template" value={template} onChange={(event) => { setTemplate(event.target.value); setSaved(false); }} maxLength={500} /></Field>
              <div className="message-emoji-row"><span>{t("Insert emoji")}</span><button type="button" className="emoji-button" aria-label={t("Insert smiling face")} onClick={() => setTemplate((value) => `${value} 🙂`)}>🙂</button><button type="button" className="emoji-button" aria-label={t("Insert poop emoji")} onClick={() => setTemplate((value) => `${value} 💩`)}>💩</button><small>{template.length}/500</small></div>
              <div className="message-preview"><div className="message-preview-head"><strong>{t("WhatsApp preview")}</strong><span>{t("Northstar Academy · Parent")}</span></div><p>{renderedMessage}</p><small>{t("Preview only · nothing has been sent")}</small></div>
              <div className="endpoint-notice"><CircleHelp size={16} /><span>{t("Delivery requires an approved provider connection. Demo previews do not send external messages.")}</span></div>
            </section>
          </> : null}

          {tab === "finance" ? <>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Center finance permissions")}</h2><p>{t("Separate subscription collection in this control panel from student lesson payment handling.")}</p></div><ShieldCheck size={19} /></div>
              <ToggleRow title="Allow staff to record lesson payments" description="Keep off. Authorized finance users manage student balances; lesson screens only show payment status." checked={policy.allowStaffLessonPayments} onChange={(checked) => setValue("allowStaffLessonPayments", checked)} />
              <ToggleRow title="Show debt requests to teachers" description="Keep debt requests in the dedicated finance workspace and out of teacher navigation." checked={!policy.hideDebtRequests} onChange={(checked) => setValue("hideDebtRequests", !checked)} />
              <ToggleRow title="Use a separate debt page" description="Open the dedicated debt register for center and subscription receivables." checked={policy.separateDebtPage} onChange={(checked) => setValue("separateDebtPage", checked)} />
              <ToggleRow title="Enable discounts by group" description="Allow approved group-level discounts with a visible reason and effective dates." checked={policy.discountsByGroup} onChange={(checked) => setValue("discountsByGroup", checked)} />
              {policy.discountsByGroup ? <div className="form-grid discount-config"><Field label="Discount group"><input className="form-control" maxLength={80} value={policy.discountGroup} onChange={(event) => setValue("discountGroup", event.target.value)} /></Field><Field label="Discount percent" hint="0–100% · attach approval and effective dates when saved."><input className="form-control" type="number" min="0" max="100" step="0.5" value={policy.discountPercent} onChange={(event) => setValue("discountPercent", Number(event.target.value))} /></Field></div> : null}
            </section>
            <section className="settings-section">
              <div className="settings-section-heading"><div><h2>{t("Staff language and payroll")}</h2><p>{t("Use simpler payroll labels and set the default language for the staff workspace.")}</p></div></div>
              <div className="form-grid">
                <Field label="Default staff language"><select className="form-control" value={policy.staffLocale} onChange={(event) => setValue("staffLocale", event.target.value)}><option value="uz">O‘zbekcha</option><option value="ru">Русский</option><option value="en">English</option></select></Field>
                <ToggleRow title="Simplify payroll labels" description="Prefer short, familiar terms for salary, paid, pending, and period." checked={policy.payrollSimpleLabels} onChange={(checked) => setValue("payrollSimpleLabels", checked)} />
              </div>
              <div className="payroll-copy-preview"><span>{t("Payroll preview")} · {policy.staffLocale.toUpperCase()}</span><strong>{policy.staffLocale === "ru" ? "Зарплата · Выплачено · Ожидает · Период" : policy.staffLocale === "uz" ? "Maosh · To‘langan · Kutilmoqda · Davr" : "Salary · Paid · Pending · Period"}</strong></div>
            </section>
          </> : null}

          <div className="policy-form-footer"><span><LockKeyhole size={14} />{t("Only administrators can change center policies.")}</span><button className="button button-primary" type="submit"><Save size={16} />{t("Save policy")}</button></div>
        </form>
      </div>
    </div>
  );
}

function UsersIcon() {
  return <ShieldCheck size={19} aria-hidden="true" />;
}
