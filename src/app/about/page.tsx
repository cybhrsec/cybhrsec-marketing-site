import { ContactCta, PageHero } from "@/components/sections";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CybHrSec"
        title="Cybersecurity and compliance support for teams that need clarity."
        description="CybHrSec is built for small and growing businesses that need practical security leadership, compliance readiness, and reporting without turning daily operations into an audit project."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-3 lg:px-8">
        {[
          [
            "Business-first security",
            "We connect controls, policies, vendors, and remediation to the way your company actually works.",
          ],
          [
            "Compliance readiness",
            "We help teams prepare for ISO 27001, SOC 1, SOC 2, and customer security reviews with organized evidence and realistic plans.",
          ],
          [
            "Clear executive reporting",
            "We translate technical findings into ownership, timelines, risk decisions, and leadership-ready updates.",
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
      </section>
      <ContactCta />
    </>
  );
}
