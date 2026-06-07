import { ContactCta, GrcToolPreview, PageHero } from "@/components/sections";

export default function GrcToolPage() {
  return (
    <>
      <PageHero
        eyebrow="CybHrSec GRC Tool"
        title="A modern client portal for cybersecurity and compliance work."
        description="The CybHrSec GRC Tool helps clients track risks, policies, remediation, evidence, vendor work, and executive reporting in one organized workspace."
        primaryHref="http://localhost:3000"
        primaryLabel="Access Client Portal"
        secondaryHref="/contact"
        secondaryLabel="Book a Consultation"
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
      <ContactCta />
    </>
  );
}
