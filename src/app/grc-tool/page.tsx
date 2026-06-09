import { GrcToolPreview, PageHero } from "@/components/sections";

export default function GrcToolPage() {
  return (
    <>
      <PageHero
        eyebrow="CybHrSec Pro GRC Tool"
        title="CybHrSec Pro helps organize cybersecurity and compliance work."
        description="CybHrSec Pro is a GRC tool designed to help organizations manage cybersecurity risk, compliance readiness, policies, remediation, evidence, vendor work, and executive reporting."
        primaryHref="/client-portal"
        primaryLabel="Access Client Portal"
        secondaryHref="/services/business"
        secondaryLabel="Business Services"
      />
      <GrcToolPreview />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-4 lg:px-8">
        {["Risk register", "Policy library", "Remediation tracker", "Executive reports"].map(
          (feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center text-base font-semibold text-white"
            >
              {feature}
            </div>
          ),
        )}
      </section>
    </>
  );
}
