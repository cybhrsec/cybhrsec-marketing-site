import Image from "next/image";
import { PageHero } from "@/components/sections";

const challenges = ["Online scams", "Privacy concerns", "Social media risk", "Identity theft", "Account security", "Creator security"];

const services = [
  ["Digital Safety Audit", "A practical review of your online exposure, account setup, privacy settings, and everyday risk."],
  ["Personal Cybersecurity Consultation", "One-to-one support to understand your risks and create a realistic protection plan."],
  ["Privacy Review", "Guidance on reducing unnecessary exposure across accounts, profiles, data brokers, and public information."],
  ["Creator Security Assessment", "Support for creators and influencers managing audience trust, impersonation risk, brand access, and platforms."],
  ["Online Presence Risk Assessment", "A focused review of public-facing information, search results, profiles, and reputation risk."],
  ["Account Security Review", "MFA, passwords, recovery routes, device habits, and access hygiene for high-value personal accounts."],
];

const steps = ["Consultation", "Assessment", "Recommendations", "Support"];

export default function IndividualServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Individual Services"
        title="Digital safety support for individuals, creators, and professionals."
        description="Practical, human-centred guidance for personal cyber risk, account protection, privacy, online exposure, and safer digital routines."
        primaryHref="/services/business"
        primaryLabel="Explore Business Services"
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#080719]">
          <Image
            src="/images/digital-safety-visual.svg"
            alt="Abstract digital safety visual showing a protected person profile"
            width={960}
            height={720}
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-violet-300/[0.04] to-fuchsia-300/[0.06] p-6 md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
            Individual and creator support
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Reduce personal cyber risk without fear-based advice.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            CybHrSec helps people understand account exposure, privacy risks,
            scams, social engineering, impersonation, and practical ways to
            become safer online.
          </p>
          <a
            href="https://calendly.com/cybhrsec-info/individual-support-introduction"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
          >
            Book an Individual Consultation
          </a>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-7 flex flex-wrap gap-2">
          {challenges.map((challenge) => (
            <span key={challenge} className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200">
              {challenge}
            </span>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, description]) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-[#070719]/75 p-5 transition hover:-translate-y-1 hover:border-fuchsia-200/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300" />
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            What to expect
          </h2>
          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-[#0b081b] p-4">
                <span className="text-xs font-bold text-cyan-200">0{index + 1}</span>
                <p className="mt-3 text-sm font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
