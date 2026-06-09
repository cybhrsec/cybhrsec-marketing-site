import Image from "next/image";
import { PageHero } from "@/components/sections";

const services = [
  [
    "Executive Digital Safety Assessment",
    "A practical review of personal and professional exposure, account security, privacy settings, and high-value digital access.",
  ],
  [
    "Creator Security Assessment",
    "Support for creators and public-facing professionals managing audience trust, impersonation risk, brand access, and platform security.",
  ],
  [
    "Personal + Business Digital Risk Review",
    "A combined review for founders, executives, and creators whose personal accounts, public profile, and business presence overlap.",
  ],
];

const areasCovered = [
  "Social Media Security",
  "Account Protection",
  "Multi-Factor Authentication",
  "Phishing & Impersonation Risks",
  "Privacy Settings Review",
  "Digital Footprint Analysis",
  "Personal & Business Account Separation",
];

export default function IndividualServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive & Creator Services"
        title="Protect Your Personal and Professional Digital Presence"
        description="Cybersecurity risks do not stop at the workplace. Founders, executives, and creators are increasingly targeted through social media, email, personal devices, and public-facing profiles."
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
            Personal and professional protection
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Reduce exposure before it becomes a crisis.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            CybHrSec helps public-facing professionals understand account
            exposure, privacy risks, scams, social engineering, impersonation,
            and practical ways to protect their digital presence.
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
        <div className="grid gap-4 md:grid-cols-3">
          {services.map(([title, description]) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-[#070719]/75 p-6 transition hover:-translate-y-1 hover:border-fuchsia-200/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-300" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Areas covered
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areasCovered.map((area) => (
              <div key={area} className="rounded-2xl border border-white/10 bg-[#0b081b] p-4">
                <p className="text-sm font-semibold text-white">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
