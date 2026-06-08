import { PageHero, ReadinessPanel } from "@/components/sections";

export default function IsoPage() {
  return (
    <>
      <PageHero
        eyebrow="ISO 27001"
        title="Build an ISO 27001 readiness plan your team can sustain."
        description="CybHrSec helps you prepare your information security management system, risk process, policies, controls, internal readiness, and evidence for ISO 27001 certification."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-2 lg:px-8">
        {[
          "Risk assessment and treatment planning",
          "Statement of Applicability support",
          "Policy and procedure implementation",
          "Evidence organization and remediation tracking",
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-lg font-semibold text-white"
          >
            {item}
          </div>
        ))}
      </section>
      <ReadinessPanel />
    </>
  );
}
