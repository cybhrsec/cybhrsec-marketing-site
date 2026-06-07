import Link from "next/link";
import { blogPosts, readinessSteps, services } from "@/lib/content";

export function GlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[30rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute right-[-10rem] top-40 h-[28rem] w-[28rem] rounded-full bg-pink-500/15 blur-3xl" />
      <div className="absolute bottom-10 left-[-12rem] h-[26rem] w-[26rem] rounded-full bg-orange-400/10 blur-3xl" />
    </div>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-cyan-300 text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-white"
      : "border border-white/15 bg-white/10 text-white hover:border-cyan-200/50 hover:bg-white/15";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Book a Consultation",
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <GlowBackground />
      <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid({ limit }: { limit?: number }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {visibleServices.map((service) => (
        <article
          key={service.title}
          className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.09]"
        >
          <div
            className={`mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r ${service.accent}`}
          />
          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {service.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export function ReadinessPanel() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-cyan-300/[0.05] to-pink-400/[0.08] p-6 md:grid-cols-[1fr_1.1fr] md:p-10">
        <div>
          <Badge>Compliance readiness</Badge>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Audit preparation with a practical business lens.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            CybHrSec helps you understand what is required, what already works,
            what needs remediation, and how to show progress to leadership
            without drowning your team in compliance noise.
          </p>
        </div>
        <div className="grid gap-4">
          {readinessSteps.map((step, index) => (
            <div
              key={step}
              className="flex gap-4 rounded-3xl border border-white/10 bg-[#08071a]/70 p-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-pink-300 text-sm font-black text-[#08071a]">
                {index + 1}
              </span>
              <p className="self-center text-sm font-medium leading-6 text-slate-100">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GrcToolPreview() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-pink-200">
          Client portal
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A GRC workspace for risks, policies, remediation, and reporting.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          The CybHrSec GRC Tool gives clients one place to see assessment
          findings, track remediation, manage policies, organize evidence, and
          prepare clear updates for executives or auditors.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/grc-tool">Explore the GRC Tool</ButtonLink>
          <ButtonLink href="/client-portal" variant="secondary">
            Access Client Portal
          </ButtonLink>
        </div>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-[#0f0c2a] p-4 shadow-2xl shadow-cyan-950/30">
        <div className="rounded-[1.5rem] border border-white/10 bg-[#070719] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                Readiness cockpit
              </p>
              <p className="mt-1 text-sm text-slate-400">Q3 compliance program</p>
            </div>
            <div className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-bold text-emerald-200">
              On track
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Risks", "18", "6 high"],
              ["Policies", "12", "9 approved"],
              ["Actions", "34", "21 closed"],
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-2xl bg-white/[0.07] p-4">
                <p className="text-xs text-slate-400">{label}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-xs font-medium text-cyan-200">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3">
            {["Vendor review", "Access control policy", "Incident response test"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                  <span className="text-xs font-bold text-orange-200">
                    {index === 0 ? "Due soon" : "In progress"}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader
        eyebrow="Resources"
        title="Compliance guidance written for operators."
        description="Short, useful articles for founders, operations leaders, and security owners who need to make better decisions quickly."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 transition hover:border-pink-200/40 hover:bg-white/[0.09]"
          >
            <span className="rounded-full bg-pink-300/15 px-3 py-1 text-xs font-bold text-pink-100">
              {post.tag}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-300 via-pink-300 to-orange-300 p-1">
        <div className="rounded-[1.8rem] bg-[#08071a]/95 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to make cybersecurity and compliance manageable?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Book a consultation to map your risks, readiness goals, and the
            fastest practical path toward better governance.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Name
          <input
            className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Email
          <input
            type="email"
            className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Company
        <input
          className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
          placeholder="Company name"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        What do you need help with?
        <select className="rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition focus:border-cyan-200">
          <option>Cyber risk assessment</option>
          <option>ISO 27001 readiness</option>
          <option>SOC 1 or SOC 2 readiness</option>
          <option>GRC program support</option>
          <option>CybHrSec GRC Tool</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Message
        <textarea
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-[#070719] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
          placeholder="Tell us about your business, timeline, and compliance goals."
        />
      </label>
      <button
        type="button"
        className="mt-2 min-h-12 rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] transition hover:bg-white"
      >
        Send Inquiry
      </button>
    </form>
  );
}
