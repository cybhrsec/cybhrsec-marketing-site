import { PageHero } from "@/components/sections";

const serviceAreas = [
  [
    "Virtual GRC Support",
    "Ongoing governance, risk, and compliance support that improves ownership, adoption, and control effectiveness across practical frameworks.",
  ],
  [
    "Compliance Readiness",
    "Support for NIST CSF, ISO 27001, SOC 2, HIPAA, and readiness work that turns requirements into evidence, routines, and accountability.",
  ],
  [
    "Risk Assessments",
    "Structured assessments that identify cybersecurity, compliance, and human-driven risk across controls, workflows, suppliers, and decisions.",
  ],
];

const platformFeatures = [
  ["Risk Register", "Track risks, owners, impact, likelihood, status, treatment activities, and human-risk indicators."],
  ["Policy Library", "Store policies and make ownership, review status, and adoption easier to manage."],
  ["Remediation Tracking", "Monitor findings, assign accountability, track progress, and demonstrate resolution efforts."],
  ["Executive Reporting", "Give leadership visibility into risk posture, readiness, ownership, remediation status, and key metrics."],
];

const supportOptions = [
  {
    title: "Self-Service Platform",
    description:
      "Ideal for organizations managing cybersecurity and compliance internally.",
    items: [
      "Risk Register",
      "Policy Library",
      "Remediation Tracking",
      "Executive Reporting",
      "Compliance Tracking",
    ],
    cta: "Request a Demo",
    recommended: false,
  },
  {
    title: "Virtual GRC Consultant + CybHrSec Pro",
    description: "Recommended for teams that want advisory support alongside the platform.",
    items: [
      "Dedicated Virtual GRC Consultant",
      "Risk Assessment Support",
      "Compliance Readiness Guidance",
      "Policy Development & Review",
      "Remediation Planning",
      "Executive Reporting Support",
      "Ongoing Advisory Services",
    ],
    cta: "Book Discovery Call",
    recommended: true,
  },
];

export default function BusinessServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Services"
        title="Human-Centered Cybersecurity & Compliance for Small and Growing Businesses"
        description="CybHrSec is a cybersecurity GRC consultancy and GRC platform provider helping organizations reduce cybersecurity and compliance risk by addressing the human risk layer: ownership, adoption, accountability, and the decisions that make controls work."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {serviceAreas.map(([title, copy]) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-fuchsia-200/40 hover:bg-white/[0.075]"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-fuchsia-300 to-cyan-300" />
              <h2 className="text-xl font-semibold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Business platform
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            CybHrSec Pro GRC Platform
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            CybHrSec Pro is our GRC platform designed to help small and growing
            businesses manage cybersecurity risk, compliance readiness,
            policies, remediation, human-risk visibility, and executive
            reporting in one place while supporting alignment with NIST CSF, ISO
            27001, SOC 2, and HIPAA.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {platformFeatures.map(([title, copy]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <PlatformMockup />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
            Engagement Options
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Choose the Level of Support That Works for Your Organization
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {supportOptions.map((option) => (
            <article
              key={option.title}
              className={`rounded-[2rem] border p-6 md:p-8 ${
                option.recommended
                  ? "border-fuchsia-200/45 bg-gradient-to-br from-fuchsia-400/[0.13] via-white/[0.06] to-cyan-300/[0.07] shadow-[0_0_70px_rgba(168,85,247,0.16)]"
                  : "border-white/10 bg-white/[0.055]"
              }`}
            >
              {option.recommended ? (
                <span className="rounded-full bg-fuchsia-300/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-100">
                  Recommended Option
                </span>
              ) : null}
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {option.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {option.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {option.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-200">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/cybhrsec-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
              >
                {option.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PlatformMockup() {
  return (
    <div className="relative rounded-[2rem] border border-white/10 bg-[#090715] p-4 shadow-[0_0_80px_rgba(168,85,247,0.18)]">
      <div className="absolute -inset-6 -z-10 rounded-[2.4rem] bg-fuchsia-500/10 blur-3xl" />
      <div className="rounded-[1.5rem] border border-white/10 bg-[#05040b] p-5">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200">
              CybHrSec Pro
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Executive dashboard
            </h3>
          </div>
          <div className="rounded-full bg-cyan-300/12 px-4 py-2 text-sm font-bold text-cyan-100">
            82% ready
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            ["Risk Register", "24 open risks"],
            ["Remediation Tracker", "18 actions closed"],
            ["Policy Library", "16 policies"],
            ["Executive Reporting", "Board view ready"],
          ].map(([label, note]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
              <p className="text-sm font-semibold text-white">{label}</p>
              <p className="mt-2 text-xs font-semibold text-fuchsia-100">{note}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm font-semibold text-white">Readiness trend</p>
          <div className="mt-5 space-y-3">
            <div className="h-3 rounded-full bg-white/10">
              <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            </div>
            <div className="h-3 rounded-full bg-white/10">
              <div className="h-3 w-[64%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-300" />
            </div>
            <div className="h-3 rounded-full bg-white/10">
              <div className="h-3 w-[48%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
