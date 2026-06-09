import { ContactForm, PageHero } from "@/components/sections";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell CybHrSec what you need help with."
        description="Use the form for business services, executive and creator support, partnerships, speaking, training, or general enquiries."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-5">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#170b2d] to-[#080719] p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Contact details
            </h2>
            <dl className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <div>
                <dt className="font-semibold text-cyan-200">Email</dt>
                <dd>info@cybhrsec.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-200">Expected response time</dt>
                <dd>Most enquiries receive a response within 1 to 2 business days.</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Prefer to book directly?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Discovery calls are best for business services, GRC support,
              platform questions, training, workshops, and next-step planning.
            </p>
            <a
              href="https://calendly.com/cybhrsec-info/30min"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
            >
              Discovery Call
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
