import { PageHero } from "@/components/sections";

export default function SocReadinessPage() {
  return (
    <>
      <PageHero
        eyebrow="SOC 1/2 Readiness"
        title="Prepare for SOC 1 or SOC 2 without guessing what auditors need."
        description="CybHrSec turns trust service criteria, control ownership, evidence requests, and remediation work into a clear readiness path for service organizations."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            [
              "SOC 1 readiness",
              "Support for controls related to financial reporting, outsourced services, ownership, and evidence preparation.",
            ],
            [
              "SOC 2 readiness",
              "Security, availability, confidentiality, processing integrity, and privacy readiness mapped to practical business controls.",
            ],
            [
              "Evidence planning",
              "A clear view of what you have, what is missing, who owns it, and when it needs to be ready.",
            ],
            [
              "Remediation support",
              "Prioritized actions that reduce audit friction and improve real security posture.",
            ],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-7"
            >
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
