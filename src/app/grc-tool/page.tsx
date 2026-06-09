import { GrcToolPreview, PageHero } from "@/components/sections";

export default function GrcToolPage() {
  return (
    <>
      <PageHero
        eyebrow="CybHrSec Pro GRC Platform"
        title="CybHrSec Pro helps make cybersecurity and compliance work visible."
        description="CybHrSec Pro is a GRC platform for risk registers, policy libraries, remediation tracking, control visibility, executive reporting, and human-risk visibility, supporting alignment with frameworks such as NIST CSF, ISO 27001, SOC 2, and HIPAA."
        primaryHref="/client-portal"
        primaryLabel="Access Client Portal"
        secondaryHref="/services/business"
        secondaryLabel="Business Services"
      />
      <GrcToolPreview />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-4 lg:px-8">
        {[
          "Risk ownership",
          "Policy adoption",
          "Remediation accountability",
          "Executive reports",
        ].map(
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
