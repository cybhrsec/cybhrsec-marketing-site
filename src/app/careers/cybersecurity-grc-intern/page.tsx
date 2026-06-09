import Link from "next/link";
import { CareersApplicationForm } from "@/components/careers-application-form";
import { PageHero } from "@/components/sections";
import type { CareerRole } from "@/lib/careers";
import { getCareerRole } from "@/lib/careers";

const role = getCareerRole("Cybersecurity & GRC Intern");

export default function CybersecurityGrcInternPage() {
  if (!role) return null;

  return (
    <>
      <PageHero
        eyebrow="Open Role"
        title={role.title}
        description={role.overview}
      />
      <JobDetail role={role} />
      <ApplicationSection positionAppliedFor={role.title} />
    </>
  );
}

function JobDetail({ role }: { role: CareerRole }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Role Details
          </p>
          <dl className="mt-6 grid gap-4 text-sm text-slate-300">
            <div>
              <dt className="font-semibold text-white">Employment type</dt>
              <dd className="mt-1">{role.employmentType}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Location</dt>
              <dd className="mt-1">{role.location}</dd>
            </div>
          </dl>
          <Link
            href="#application-form"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
          >
            Apply
          </Link>
        </aside>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-fuchsia-300/[0.04] to-cyan-300/[0.04] p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Full role overview
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300">{role.overview}</p>
          <RoleList title="Responsibilities" items={role.responsibilities} />
          <RoleList title="Preferred Qualifications" items={role.qualifications} />
        </div>
      </div>
    </section>
  );
}

function RoleList({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ApplicationSection({ positionAppliedFor }: { positionAppliedFor: string }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#170b2d] to-[#080719] p-6 md:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
          Application
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Apply for this role.
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          Your application will be submitted specifically for the{" "}
          {positionAppliedFor} role and sent to CybHrSec for review.
        </p>
      </div>
      <CareersApplicationForm positionAppliedFor={positionAppliedFor} />
    </section>
  );
}
