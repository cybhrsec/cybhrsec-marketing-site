import { ContactForm, PageHero } from "@/components/sections";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s map your next cybersecurity and compliance step."
        description="Share your goals, current pressure points, and timeline. CybHrSec can help turn the work into a clear readiness and reporting plan."
        primaryHref="/client-portal"
        primaryLabel="Access Client Portal"
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Book a consultation
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Use the form to start a conversation about cyber risk assessments,
            ISO 27001, SOC 1 or SOC 2 readiness, policy implementation, vendor
            risk, GRC support, or the CybHrSec client portal.
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              Response focus
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              You will get a practical next-step conversation, not a generic
              sales pitch.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
