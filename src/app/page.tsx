import {
  Badge,
  BlogPreview,
  ButtonLink,
  ContactCta,
  GlowBackground,
  GrcToolPreview,
  ReadinessPanel,
  SectionHeader,
  ServiceGrid,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GlowBackground />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="self-center">
            <Badge>Cybersecurity readiness for growing businesses</Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Compliance, risk, and reporting without the enterprise overhead.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              CybHrSec helps small and growing businesses manage cybersecurity
              risk, compliance readiness, policies, remediation, and executive
              reporting through practical consulting and a modern client portal.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              <ButtonLink href="http://localhost:3000" variant="secondary">
                Access GRC Tool
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[34rem] rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20">
            <div className="absolute inset-4 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.15),rgba(249,115,22,0.14))]" />
            <div className="relative grid h-full content-between rounded-[1.5rem] border border-white/10 bg-[#08071a]/80 p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
                  Executive view
                </span>
                <span className="text-xs font-semibold text-emerald-200">
                  84% ready
                </span>
              </div>
              <div className="grid gap-4">
                {[
                  ["Risk posture", "High-impact gaps identified", "bg-cyan-300"],
                  ["Policies", "Approval workflow active", "bg-pink-300"],
                  ["Remediation", "Owner-based actions tracked", "bg-orange-300"],
                  ["Reporting", "Board summary prepared", "bg-yellow-300"],
                ].map(([title, note, color]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/[0.07] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`size-3 rounded-full ${color}`} />
                      <h2 className="text-base font-semibold text-white">
                        {title}
                      </h2>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{note}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm font-semibold text-cyan-100">
                  Next best action
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Complete vendor risk reviews and finalize incident response
                  evidence before the next readiness milestone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Security and compliance work built around business reality."
          description="Get the assessment, readiness, policy, vendor, reporting, and GRC support your business needs without vague recommendations or oversized programs."
        />
        <div className="mt-12">
          <ServiceGrid limit={4} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Plain-English guidance",
              "We explain risk and compliance requirements in language your leadership team can act on.",
            ],
            [
              "Practical remediation",
              "Recommendations are prioritized by business impact, audit value, cost, and effort.",
            ],
            [
              "Modern reporting",
              "Your work is organized into dashboards, evidence views, and executive-ready summaries.",
            ],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7"
            >
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ReadinessPanel />
      <GrcToolPreview />
      <BlogPreview />
      <ContactCta />
    </>
  );
}
