import { ContactCta, PageHero, ServiceGrid } from "@/components/sections";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Cybersecurity, compliance, and GRC services that move the work forward."
        description="CybHrSec helps you understand your risk, prepare for audits, implement policies, manage vendors, and report progress through a practical consulting model and modern client portal."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <ServiceGrid />
      </section>
      <ContactCta />
    </>
  );
}
