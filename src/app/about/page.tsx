import Image from "next/image";
import { PageHero } from "@/components/sections";

const framework = [
  [
    "01",
    "Understand",
    "Security often fails when controls are designed without understanding how people actually work. This step clarifies the people, systems, risks, goals, and pressures shaping the environment.",
  ],
  [
    "02",
    "Assess",
    "Risk is often missed when policies, accounts, suppliers, and evidence are reviewed in isolation. This step connects control gaps to real business, compliance, and human risk.",
  ],
  [
    "03",
    "Simplify",
    "Findings can fail when they are too technical or unclear. This step turns risk into practical priorities, plain-English decisions, and clear ownership.",
  ],
  [
    "04",
    "Embed",
    "Security often breaks down after implementation when routines are not built into daily work. This step helps teams make security and compliance part of normal operations.",
  ],
  [
    "05",
    "Improve",
    "Risk changes as people, systems, suppliers, and regulations change. This step uses reporting, lessons learned, and ongoing review to keep programs relevant over time.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CybHrSec"
        title="Cybersecurity that starts with people and supports real business decisions."
        description="CybHrSec exists to make cybersecurity, digital safety, privacy, governance, risk, and compliance easier to understand and easier to act on."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#160b2c] via-[#0b0718] to-[#1a0713] p-6 md:p-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080719] shadow-2xl shadow-black/30">
            <Image
              src="/images/valerie-founder.png"
              alt="Valerie Arko-Adjei, founder of CybHrSec"
              width={1200}
              height={1400}
              className="aspect-[4/5] h-full w-full object-cover object-center"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080719]/35 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
              Founder perspective
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Founded by Valerie Adjei to make cybersecurity practical, human, and sustainable.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
              <p>
                CybHrSec was founded by Valerie Adjei, a governance, risk,
                compliance, and cybersecurity professional with over 10 years
                of experience spanning behavioral science, human resources,
                governance, risk management, compliance, and cybersecurity.
              </p>
              <p>
                Working across financial services, healthcare, nonprofit, and
                professional services, Valerie observed that many security and
                compliance challenges are not caused by a lack of technology,
                but by gaps between people, processes, and expectations.
                Effective cybersecurity depends not only on controls and
                frameworks but also on communication, behavior, accountability,
                and support for people in making informed decisions.
              </p>
              <p>
                This insight led to the development of the Human-Centered
                Cybersecurity and Compliance (HCC-GRC) approach, which focuses on
                making cybersecurity and compliance practical, understandable,
                and sustainable for all.
              </p>
              <p>
                Today, CybHrSec supports both businesses and individuals, helping
                them navigate cybersecurity, compliance, privacy, and digital
                safety challenges. Whether you&apos;re protecting an organization, a
                brand, a career, or your personal digital life, CybHrSec helps
                you build resilience in an increasingly connected world.
              </p>
              <p className="border-t border-white/10 pt-4 text-sm font-medium leading-7 text-cyan-100/85">
                Credentials: MSIT Cybersecurity, MS Human Resource Development
                &amp; Consultancy, CompTIA Security+, ISO 27001:2022 Lead
                Implementer, Chartered Institute of Personnel Development (CIPD
                L7)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
            Human-centred framework
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A practical method for making security stick.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {framework.map(([number, title, copy]) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-fuchsia-200/40"
            >
              <span className="text-sm font-bold text-cyan-200">{number}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-4 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#12091f] via-[#0b0718] to-[#210817] p-5 shadow-2xl shadow-black/20 md:p-6">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative min-h-48 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080719]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.26),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(217,70,239,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />
              <div className="absolute left-6 top-6 h-16 w-16 rounded-2xl border border-cyan-200/25 bg-cyan-200/10 shadow-lg shadow-cyan-400/10" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <div className="h-2 w-24 rounded-full bg-fuchsia-200/70" />
                <div className="mt-3 h-2 w-40 rounded-full bg-white/25" />
                <div className="mt-2 h-2 w-28 rounded-full bg-cyan-200/35" />
              </div>
              <div className="absolute right-6 top-8 h-28 w-24 rounded-[1.4rem] border border-fuchsia-200/30 bg-fuchsia-300/10 blur-[1px]" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
                Industry Contributions
              </p>
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Published Contributor
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Infosecurity Magazine
                </h3>
                <p className="mt-2 text-sm font-semibold text-fuchsia-100">
                  Article forthcoming
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  Cybersecurity thought leadership on emerging governance, risk,
                  compliance, and human-centered security challenges.
                </p>
                <button
                  type="button"
                  disabled
                  className="mt-5 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-slate-300"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
