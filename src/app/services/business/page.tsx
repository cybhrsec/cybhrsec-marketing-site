import Image from "next/image";
import { PageHero } from "@/components/sections";

const services = [
  ["Cybersecurity Risk Assessments", "Identify practical risks across systems, people, suppliers, data, and day-to-day operations."],
  ["ISO 27001 Readiness", "Prepare your ISMS, risk treatment, policies, evidence, and certification roadmap."],
  ["SOC 2 Readiness", "Map controls, evidence, ownership, and remediation to a realistic SOC 2 readiness plan."],
  ["HIPAA Readiness Support", "Support healthcare and health-adjacent teams with practical privacy and security readiness."],
  ["Third-Party Risk Management", "Review vendors, supplier exposure, due diligence responses, and ongoing risk tracking."],
  ["Governance and Policy Development", "Create policies, roles, reporting routines, and decision structures that teams can actually use."],
  ["Security Awareness Programs", "Deliver business-friendly education on cyber risk, scams, data handling, and everyday security habits."],
  ["CybHrSec GRC Tool Support", "Use the client portal for risks, controls, policies, remediation, evidence, and executive reporting."],
];

const process = ["Discovery", "Assessment", "Roadmap", "Implementation Support", "Continuous Improvement"];
const industries = ["Healthcare", "Technology", "Professional Services", "Ecommerce", "Staffing", "Financial Services"];

export default function BusinessServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Services"
        title="Cybersecurity and GRC support for growing organizations."
        description="Practical advisory for businesses that need clearer risk decisions, stronger governance, compliance readiness, and support using the CybHrSec GRC workspace."
        secondaryHref="/services/individual"
        secondaryLabel="Explore Individual Services"
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-fuchsia-300/[0.04] to-cyan-300/[0.05] p-6 md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
            Company-level support
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build a security program your business can maintain.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            CybHrSec helps leadership teams understand what matters, prioritize
            work, track remediation, and report progress without turning security
            into unnecessary complexity.
          </p>
          <a
            href="https://calendly.com/cybhrsec-info/30min"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
          >
            Book a Business Discovery Call
          </a>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#080719]">
          <Image
            src="/images/advisory-visual.svg"
            alt="Abstract consulting and compliance dashboard"
            width={960}
            height={720}
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, description]) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-[#070719]/75 p-5 transition hover:-translate-y-1 hover:border-fuchsia-200/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-fuchsia-300 to-cyan-300" />
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-16 pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            How engagements work
          </h2>
          <div className="mt-7 grid gap-3 md:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-[#0b081b] p-4">
                <span className="text-xs font-bold text-cyan-200">0{index + 1}</span>
                <p className="mt-3 text-sm font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#170b2d] to-[#080719] p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Industries supported</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span key={industry} className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
