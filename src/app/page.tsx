import Link from "next/link";
import { Brand } from "@/components/brand";
import { ButtonLink } from "@/components/sections";
import { ScrollReveal } from "@/components/scroll-reveal";

const servicesOverview = [
  {
    title: "Business Services",
    description:
      "Manage cybersecurity risk, compliance, and governance with practical support tailored to small and growing businesses.",
    offerings: [
      "Virtual GRC Support",
      "Compliance Readiness",
      "Risk Assessments",
      "HCC-GRC Platform",
    ],
    cta: "Learn More",
    href: "/services/business",
  },
  {
    title: "Executive & Creator Services",
    description:
      "Protect your personal and professional digital presence with assessments designed for founders, executives, creators, and public-facing professionals.",
    offerings: [
      "Executive Digital Safety Assessments",
      "Creator Security Assessments",
      "Personal + Business Digital Risk Reviews",
    ],
    cta: "Learn More",
    href: "/services/individual",
  },
  {
    title: "Training & Workshops",
    description:
      "Build digital confidence through cybersecurity awareness training, digital safety education, one-to-one guidance, and practical workshops.",
    offerings: [
      "Cybersecurity Awareness Training",
      "Digital Safety Education",
      "Individual Digital Safety Guidance",
      "Team Workshops",
    ],
    cta: "Learn More",
    href: "/services/training",
  },
];

const approachSteps = [
  {
    title: "Understand",
    description:
      "Translate cyber and compliance risk into plain business language.",
  },
  {
    title: "Assess",
    description:
      "Identify risks, gaps, and priorities across people, process, technology, and third parties.",
  },
  {
    title: "Simplify",
    description:
      "Turn complex requirements into practical actions, policies, and controls.",
  },
  {
    title: "Embed",
    description:
      "Help businesses and individuals adopt secure practices that can be sustained.",
  },
  {
    title: "Improve",
    description:
      "Use reporting and lessons learned to keep the program relevant as risks change.",
  },
];

const speakingCards = [
  {
    title: "Keynote Speaking",
    description:
      "Clear, engaging sessions on human-centered cybersecurity, digital safety, and practical risk decisions.",
  },
  {
    title: "Workshops & Panels",
    description:
      "Interactive sessions for teams, communities, schools, nonprofits, and professional audiences.",
  },
  {
    title: "GRC & Awareness Education",
    description:
      "Practical education on governance, risk, compliance, cybersecurity awareness, and digital safety.",
  },
];

const complexityCards = [
  [
    "People are targeted first",
    "Phishing, scams, social engineering, and impersonation exploit pressure, distraction, and trust.",
  ],
  [
    "Digital exposure is expanding",
    "Account compromise, privacy risks, public profiles, and shared access can affect individuals and organizations.",
  ],
  [
    "Compliance can feel disconnected",
    "Policies and frameworks often fail when they are not translated into everyday action and ownership.",
  ],
  [
    "Security fatigue slows progress",
    "Too much complexity makes it harder for people to adopt secure habits and sustain them over time.",
  ],
];

const serviceMenuItems = [
  ["Business", "/services/business"],
  ["Executive & Creator", "/services/individual"],
  ["Training & Workshops", "/services/training"],
];

const discoveryCallUrl = "https://calendly.com/cybhrsec-info/30min";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="home-scroll relative -mt-28 overflow-hidden">
        <ScrollReveal />
        <ComplexitySection />
        <ServicesOverviewSection />
        <ApproachSection />
        <SpeakingSection />
        <FinalCtaSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section className="home-hero relative isolate -mb-10 overflow-hidden bg-[#07030f] px-4 pb-28 pt-8 sm:px-6 lg:px-8">
      <div className="hero-bg-drift pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.22),transparent_26rem),radial-gradient(circle_at_90%_36%,rgba(217,70,239,0.16),transparent_22rem),linear-gradient(140deg,#13051f_0%,#08040d_52%,#19062b_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 hidden h-[36rem] w-[42rem] -rotate-[14deg] rounded-[3rem] border border-white/10 bg-[#0a0710]/80 shadow-[0_0_80px_rgba(168,85,247,0.18)] lg:block" />
      <div className="pointer-events-none absolute -right-32 top-12 hidden h-[32rem] w-[30rem] rotate-[13deg] rounded-[2.5rem] border border-fuchsia-200/10 bg-[#120a1f]/80 shadow-[0_0_70px_rgba(217,70,239,0.16)] lg:block" />
      <div className="pointer-events-none absolute bottom-0 right-10 hidden h-[26rem] w-[28rem] rotate-[18deg] rounded-[2rem] border border-violet-200/10 bg-[#08060d]/85 lg:block" />
      <div className="hero-shell-reveal relative mx-auto min-h-[calc(100svh-4rem)] max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#050407]/95 px-5 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_35px_120px_rgba(0,0,0,0.55),0_0_80px_rgba(168,85,247,0.20)] sm:rounded-[2rem] sm:px-8 lg:min-h-[45rem] lg:rotate-[-4deg] lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(168,85,247,0.34),transparent_20rem),radial-gradient(circle_at_44%_64%,rgba(34,211,238,0.11),transparent_16rem),linear-gradient(120deg,rgba(255,255,255,0.06)_0%,transparent_28%,rgba(168,85,247,0.08)_72%,transparent_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[58%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100/10 bg-[radial-gradient(circle_at_48%_44%,rgba(255,255,255,0.16),rgba(168,85,247,0.26)_28%,rgba(9,4,14,0.68)_55%,transparent_72%)] shadow-[inset_0_0_80px_rgba(255,255,255,0.08),0_0_80px_rgba(168,85,247,0.28)] sm:h-[42rem] sm:w-[42rem]" />
        <div className="pointer-events-none absolute left-1/2 top-[58%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-80 sm:h-[48rem] sm:w-[48rem]" />
        <div className="pointer-events-none absolute bottom-[-9rem] left-[36%] h-[24rem] w-20 -rotate-[22deg] rounded-full bg-gradient-to-t from-white via-fuchsia-200/65 to-transparent blur-xl" />
        <div className="pointer-events-none absolute right-8 top-24 hidden h-28 w-44 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 opacity-80 blur-2xl lg:block" />

        <HeroPanelHeader />

        <div className="relative z-20 flex min-h-[34rem] items-center justify-center pb-14 pt-20 text-center lg:min-h-[37rem] lg:rotate-[4deg] lg:pb-20 lg:pt-28">
          <div className="hero-text-flow mx-auto max-w-5xl">
            <h1 className="text-balance text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-[0.86em]">
                Human-Centred{" "}
                <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-purple-500 bg-clip-text text-transparent">
                  GRC
                </span>
              </span>
              <br />
              Cybersecurity for
              <br />
              Businesses and
              <span className="bg-gradient-to-r from-violet-200 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Individuals.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-none whitespace-nowrap text-[clamp(0.72rem,1.55vw,1.125rem)] leading-7 text-slate-300">
              Protecting people. Strengthening businesses. Making cybersecurity practical.
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-56 bg-gradient-to-b from-transparent via-[#07030f]/75 to-[#050514]" />
    </section>
  );
}

function HeroPanelHeader() {
  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Insights", "/insights"],
    ["Contact", "/contact"],
  ];

  return (
    <div className="hero-nav-reveal relative z-30 flex items-center justify-between gap-4 lg:rotate-[4deg]">
      <Brand />
      <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/35 p-1 text-sm font-semibold text-slate-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:flex">
        {links.map(([label, href]) => (
          label === "Services" ? (
            <HeroServicesDropdown key={href} />
          ) : (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </Link>
          )
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <HeroMobileMenu links={links} />
        <Link
          href="/client-portal"
          className="hidden rounded-full border border-white/15 bg-black/30 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-fuchsia-200/50 hover:bg-fuchsia-400/10 sm:inline-flex"
        >
          Client Portal
        </Link>
        <a
          href={discoveryCallUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a Discovery Call"
          className="rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.35)] transition hover:from-fuchsia-300 hover:to-violet-400"
        >
          Book Discovery Call
        </a>
      </div>
    </div>
  );
}

function HeroServicesDropdown() {
  return (
    <div className="group relative">
      <Link
        href="/services"
        className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white group-hover:bg-white/10 group-hover:text-white"
        aria-haspopup="true"
      >
        Services
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
        <div className="rounded-3xl border border-white/12 bg-[#100d2b]/95 p-2 shadow-2xl shadow-black/35 backdrop-blur-xl">
          {serviceMenuItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroMobileMenu({ links }: { links: string[][] }) {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-white/15 bg-black/30 text-white transition hover:bg-white/10">
        <span className="sr-only">Open navigation</span>
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 rounded bg-white transition group-open:translate-y-2 group-open:rotate-45" />
          <span className="block h-0.5 w-5 rounded bg-white transition group-open:opacity-0" />
          <span className="block h-0.5 w-5 rounded bg-white transition group-open:-translate-y-2 group-open:-rotate-45" />
        </span>
      </summary>
      <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-3xl border border-white/15 bg-[#100d2b] p-3 text-left shadow-2xl shadow-black/40">
        {links.map(([label, href]) =>
          label === "Services" ? (
            <details key={href} className="group/services">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
                Services
                <span className="text-xs text-fuchsia-100 transition group-open/services:rotate-180">
                  v
                </span>
              </summary>
              <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                {serviceMenuItems.map(([serviceLabel, serviceHref]) => (
                  <Link
                    key={serviceHref}
                    href={serviceHref}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {serviceLabel}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link
              key={href}
              href={href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
            >
              {label}
            </Link>
          ),
        )}
        <div className="mt-2 grid gap-2 border-t border-white/10 pt-3">
          <Link
            href="/client-portal"
            className="block rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-white/10"
          >
            Client Portal
          </Link>
          <a
            href={discoveryCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a Discovery Call"
            className="block rounded-2xl bg-gradient-to-r from-fuchsia-400 to-violet-500 px-4 py-3 text-sm font-bold text-white transition hover:from-fuchsia-300 hover:to-violet-400"
          >
            Book Discovery Call
          </a>
        </div>
      </div>
    </details>
  );
}

function ComplexitySection() {
  return (
    <section className="relative overflow-hidden px-5 py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(168,85,247,0.14),transparent_24rem),radial-gradient(circle_at_84%_75%,rgba(127,29,29,0.16),transparent_24rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p
            className="scroll-heading text-sm font-bold uppercase tracking-[0.24em] text-cyan-200"
            data-scroll-reveal
          >
            Human-centered cybersecurity
          </p>
          <h2
            className="scroll-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            data-scroll-reveal
          >
            Human-Centered Cybersecurity That Turns Complexity Into Action
          </h2>
          <p
            className="scroll-copy mt-5 text-base leading-8 text-slate-300 sm:text-lg"
            data-scroll-reveal
            style={{ transitionDelay: "120ms" }}
          >
            Cybersecurity and compliance challenges affect everyone, from small
            teams and leaders to creators, professionals, and individuals. The
            harder part is often translating risk into clear behavior, practical
            decisions, and routines people can sustain.
          </p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {complexityCards.map(([title, copy], index) => (
            <article
              key={title}
              className="scroll-card rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.075]"
              data-scroll-reveal
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-fuchsia-300 to-cyan-300" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
        <p
          className="scroll-copy mt-8 max-w-3xl rounded-[1.5rem] border border-white/10 bg-[#080611]/80 p-5 text-base leading-8 text-slate-200"
          data-scroll-reveal
          style={{ transitionDelay: "260ms" }}
        >
          CybHrSec helps turn cybersecurity and compliance complexity into
          practical actions people can understand, adopt, and sustain.
        </p>
      </div>
    </section>
  );
}

function ServicesOverviewSection() {
  return (
    <section id="services" className="relative overflow-hidden px-5 py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(168,85,247,0.16),transparent_23rem),radial-gradient(circle_at_86%_80%,rgba(34,211,238,0.08),transparent_24rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p
            className="scroll-heading text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200"
            data-scroll-reveal
          >
            Services
          </p>
          <h2
            className="scroll-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            data-scroll-reveal
          >
            Three practical ways to work with CybHrSec.
          </h2>
          <p
            className="scroll-copy mt-5 text-base leading-8 text-slate-300 sm:text-lg"
            data-scroll-reveal
            style={{ transitionDelay: "120ms" }}
          >
            Choose the right support for your organization, your public-facing
            role, or the people who need practical cybersecurity education.
          </p>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {servicesOverview.map((service, index) => (
            <article
              key={service.title}
              className="scroll-card group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#080611]/90 p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-200/40 hover:bg-white/[0.065]"
              data-scroll-reveal
              style={{ transitionDelay: `${index * 130}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-200/70 to-transparent" />
              <ServiceIcon title={service.title} index={index} />
              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {service.offerings.map((offering) => (
                  <li key={offering} className="flex gap-3 text-sm text-slate-200">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-fuchsia-200/50 hover:bg-fuchsia-400/15"
              >
                {service.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientPortalSection() {
  return (
    <section className="relative overflow-hidden px-5 py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(88,28,135,0.10)_42%,transparent_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p
            className="scroll-heading text-sm font-bold uppercase tracking-[0.24em] text-cyan-200"
            data-scroll-reveal
          >
            Client Portal
          </p>
          <h2
            className="scroll-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            data-scroll-reveal
          >
            Access the CybHrSec Client Portal
          </h2>
          <p
            className="scroll-copy mt-5 text-lg leading-8 text-slate-300"
            data-scroll-reveal
            style={{ transitionDelay: "120ms" }}
          >
            A GRC workspace for risks, policies, remediation, and reporting.
          </p>
          <p
            className="scroll-copy mt-5 text-base leading-8 text-slate-400"
            data-scroll-reveal
            style={{ transitionDelay: "190ms" }}
          >
            Clients can use the CybHrSec GRC Tool to manage risk registers,
            policies, remediation actions, compliance readiness, and executive
            reporting. The platform can be used as a self-service subscription
            or paired with a Virtual GRC Consultant for guided support.
          </p>
          <div
            className="scroll-copy mt-8 flex flex-col gap-3 sm:flex-row"
            data-scroll-reveal
            style={{ transitionDelay: "260ms" }}
          >
            <ButtonLink href="/client-portal">
              Access Client Portal
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request Demo
            </ButtonLink>
          </div>
        </div>
        <GrcDashboardMockup />
      </div>
    </section>
  );
}

function GrcDashboardMockup() {
  const ragItems = [
    ["ISO 27001", "Ready", "bg-emerald-300"],
    ["Vendor risk", "Review", "bg-amber-300"],
    ["Actions", "Due", "bg-rose-300"],
  ];

  return (
    <div
      className="dashboard-reveal relative rounded-[2rem] border border-white/10 bg-[#090715] p-4 shadow-[0_0_80px_rgba(168,85,247,0.18)]"
      data-scroll-reveal
      style={{ transitionDelay: "160ms" }}
    >
      <div className="absolute -inset-6 -z-10 rounded-[2.4rem] bg-fuchsia-500/10 blur-3xl" />
      <div className="rounded-[1.5rem] border border-white/10 bg-[#05040b] p-5">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200">
              GRC Workspace
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Readiness dashboard
            </h3>
          </div>
          <div className="rounded-full bg-cyan-300/12 px-4 py-2 text-sm font-bold text-cyan-100">
            82% ready
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["Risks", "24", "5 high priority"],
            ["Policies", "16", "11 approved"],
            ["Remediation", "31", "18 complete"],
          ].map(([label, value, note]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-2 text-4xl font-semibold text-white">{value}</p>
              <p className="mt-2 text-xs font-semibold text-fuchsia-100">{note}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-white">RAG status</p>
            <div className="mt-4 grid gap-3">
              {ragItems.map(([label, status, color]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-black/30 px-4 py-3">
                  <span className="text-sm text-slate-200">{label}</span>
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-100">
                    <span className={`size-2.5 rounded-full ${color}`} />
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Reporting panel</p>
              <span className="text-xs text-slate-400">Board pack</span>
            </div>
            <div className="mt-5 space-y-3">
              <div className="h-3 rounded-full bg-white/10">
                <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <div className="h-3 w-[64%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-300" />
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <div className="h-3 w-[48%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-300" />
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Policies, actions, risks, and readiness are organized into a simple executive view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApproachSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_18%_20%,rgba(127,29,29,0.22),transparent_22rem),radial-gradient(circle_at_88%_30%,rgba(168,85,247,0.18),transparent_24rem)]" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_90px_rgba(88,28,135,0.14)] md:p-10">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-200/60 to-transparent" />
        <div className="mx-auto max-w-3xl text-center">
        <p
          className="scroll-heading text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200"
          data-scroll-reveal
        >
          The CybHrSec Approach
        </p>
        <h2
          className="scroll-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          data-scroll-reveal
        >
          Human-centred cybersecurity that turns complexity into action.
        </h2>
        <p
          className="scroll-copy mt-5 text-base leading-8 text-slate-300 sm:text-lg"
          data-scroll-reveal
          style={{ transitionDelay: "120ms" }}
        >
          The work is designed around people, decisions, and sustainable habits,
          not fear or unnecessary technical noise.
        </p>
      </div>
      <div className="relative mt-10 grid gap-5 lg:grid-cols-5">
        <div className="pointer-events-none absolute left-10 right-10 top-9 hidden h-px bg-gradient-to-r from-transparent via-fuchsia-200/45 to-transparent lg:block" />
        {approachSteps.map((step, index) => (
          <article
            key={step.title}
            className="scroll-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.045] to-fuchsia-400/[0.035] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-fuchsia-200/45 hover:shadow-[0_0_42px_rgba(168,85,247,0.16)]"
            data-scroll-reveal
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
            <div className="relative grid size-16 place-items-center rounded-2xl border border-white/15 bg-black/35 text-lg font-black text-white shadow-[0_0_32px_rgba(168,85,247,0.28)]">
              <span className="absolute inset-1 rounded-[1rem] bg-gradient-to-br from-fuchsia-400/35 to-cyan-300/15 blur-sm transition group-hover:from-fuchsia-300/45" />
              <span className="relative">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-7 text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {step.description}
            </p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function SpeakingSection() {
  return (
    <section className="relative overflow-hidden px-5 py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_70%,rgba(34,211,238,0.08),transparent_22rem),radial-gradient(circle_at_82%_22%,rgba(127,29,29,0.18),transparent_24rem)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p
            className="scroll-heading text-sm font-bold uppercase tracking-[0.24em] text-cyan-200"
            data-scroll-reveal
          >
            Speaking & Thought Leadership
          </p>
          <h2
            className="scroll-heading mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            data-scroll-reveal
          >
            Cybersecurity education for real audiences.
          </h2>
          <p
            className="scroll-copy mt-5 text-base leading-8 text-slate-300 sm:text-lg"
            data-scroll-reveal
            style={{ transitionDelay: "120ms" }}
          >
            CybHrSec supports keynote speaking, workshops, panels,
            cybersecurity awareness sessions, human-centered cybersecurity
            education, GRC education, and digital safety education.
          </p>
          <div
            className="scroll-copy mt-8 flex flex-col gap-3 sm:flex-row"
            data-scroll-reveal
            style={{ transitionDelay: "220ms" }}
          >
            <ButtonLink href="/contact">Request a Speaking Engagement</ButtonLink>
            <ButtonLink href="/services/training" variant="secondary">
              View Speaking Topics
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-4">
          <SpeakingVisual />
          <div className="grid gap-4 md:grid-cols-3">
            {speakingCards.map((card, index) => (
              <article
                key={card.title}
                className="scroll-card rounded-[1.5rem] border border-white/10 bg-[#080611]/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.06]"
                data-scroll-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ title, index }: { title: string; index: number }) {
  if (title === "Executive & Creator Services") {
    return <PersonIcon />;
  }

  if (title === "Business Services") {
    return <GroupIcon />;
  }

  return <AbstractIcon index={index} />;
}

function PersonIcon() {
  return (
    <div className="icon-reveal relative grid size-20 place-items-center rounded-3xl border border-fuchsia-200/20 bg-white/[0.045] shadow-[0_0_32px_rgba(168,85,247,0.14)]">
      <div className="absolute inset-0 rounded-3xl bg-fuchsia-400/10 blur-2xl transition group-hover:bg-fuchsia-300/20" />
      <svg
        aria-hidden="true"
        className="relative size-10 text-fuchsia-100 transition duration-300 group-hover:scale-105 group-hover:text-white"
        fill="none"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M12 38c2.5-8 6.8-12 12-12s9.5 4 12 12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

function GroupIcon() {
  return (
    <div className="icon-reveal relative grid size-20 place-items-center rounded-3xl border border-cyan-200/20 bg-white/[0.045] shadow-[0_0_32px_rgba(34,211,238,0.12)]">
      <div className="absolute inset-0 rounded-3xl bg-cyan-300/10 blur-2xl transition group-hover:bg-fuchsia-300/16" />
      <svg
        aria-hidden="true"
        className="relative size-11 text-cyan-100 transition duration-300 group-hover:scale-105 group-hover:text-white"
        fill="none"
        viewBox="0 0 52 48"
      >
        <circle cx="19" cy="16" r="6" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="34" cy="18" r="5" stroke="currentColor" strokeWidth="2.4" opacity="0.75" />
        <path
          d="M8 38c2.4-7.2 6-10.8 11-10.8S27.6 30.8 30 38"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M29 32c1.7-3 3.8-4.5 6.2-4.5 3.8 0 6.8 3.5 8.8 10.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.4"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}

function SpeakingVisual() {
  return (
    <div
      className="dashboard-reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07050f]/90 p-6 shadow-[0_0_70px_rgba(88,28,135,0.16)]"
      data-scroll-reveal
      style={{ transitionDelay: "140ms" }}
    >
      <div className="absolute -right-12 -top-16 size-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-20 left-12 size-56 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative grid gap-5 md:grid-cols-[0.82fr_1.18fr] md:items-center">
        <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
          <div className="mx-auto grid size-24 place-items-center rounded-full border border-fuchsia-200/20 bg-fuchsia-300/10">
            <svg
              aria-hidden="true"
              className="size-12 text-fuchsia-100"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M17 20v-4a7 7 0 0 1 14 0v4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <path
                d="M14 20h20v10a10 10 0 0 1-20 0V20Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
              <path
                d="M24 29v5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <p className="mt-5 text-center text-sm font-semibold text-white">
            Practical cyber learning
          </p>
        </div>
        <div className="grid gap-3">
          {["Keynotes", "Team workshops", "Awareness sessions"].map((item, index) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3"
            >
              <span className="text-sm font-medium text-slate-200">{item}</span>
              <span className="rounded-full bg-fuchsia-300/12 px-3 py-1 text-xs font-bold text-fuchsia-100">
                {index === 0 ? "Inspire" : index === 1 ? "Practice" : "Embed"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AbstractIcon({ index }: { index: number }) {
  const shapes = [
    "rounded-[45%_55%_52%_48%]",
    "rounded-[60%_40%_45%_55%]",
    "rounded-[42%_58%_36%_64%]",
  ];

  return (
    <div className="icon-reveal relative size-20">
      <div className="absolute inset-0 rounded-full bg-fuchsia-400/10 blur-2xl transition group-hover:bg-fuchsia-300/20" />
      <div
        className={`absolute inset-2 ${shapes[index % shapes.length]} border border-white/20 bg-[conic-gradient(from_120deg,rgba(34,211,238,0.26),rgba(168,85,247,0.44),rgba(249,115,22,0.30),rgba(34,211,238,0.22))] shadow-[0_0_32px_rgba(168,85,247,0.18)]`}
      />
      <div className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/30 bg-black/30 backdrop-blur" />
    </div>
  );
}

function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div
        className="scroll-card overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-orange-300 p-1"
        data-scroll-reveal
      >
        <div className="rounded-[1.8rem] bg-[#050506]/95 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to make cybersecurity practical?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Explore practical support for small businesses, executives,
            creators, teams, and people who need cybersecurity to make sense.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/services">Explore Services</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
