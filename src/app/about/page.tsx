import Image from "next/image";
import { PageHero } from "@/components/sections";

const framework = [
  ["01", "Understand", "Clarify the people, systems, risks, goals, and pressures shaping the work."],
  ["02", "Assess", "Review controls, policies, accounts, suppliers, evidence, and reporting gaps."],
  ["03", "Simplify", "Turn findings into practical priorities, plain-English decisions, and clear ownership."],
  ["04", "Embed", "Help teams build routines that keep security and compliance moving after the first project."],
  ["05", "Improve", "Use reporting, lessons learned, and changing risk to keep the program relevant."],
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
    </>
  );
}
