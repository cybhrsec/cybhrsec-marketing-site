import Link from "next/link";
import { PageHero } from "@/components/sections";
import { careerRoles } from "@/lib/careers";

const values = [
  [
    "Human-Centered Security",
    "We believe cybersecurity succeeds when security requirements align with how people actually work.",
  ],
  [
    "Meaningful Impact",
    "Our work helps individuals, small businesses, and growing organizations strengthen cybersecurity and compliance capabilities.",
  ],
  [
    "Continuous Learning",
    "We encourage professional development, practical experience, and knowledge sharing.",
  ],
  [
    "Flexible Opportunities",
    "Opportunities may include internships, project-based consulting, contract engagements, and future full-time positions.",
  ],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the CybHrSec Team"
        description="Help organizations transform cybersecurity, compliance, governance, and risk management through a practical, human-centered approach. Whether you are an experienced professional or an aspiring cybersecurity practitioner, we are building a network of people committed to making cybersecurity more accessible, actionable, and effective."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Why work with CybHrSec
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical cybersecurity work with people at the center.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map(([title, copy]) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.075]"
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-fuchsia-300 to-cyan-300" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
            Open Roles
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Current opportunities.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {careerRoles.map((role) => (
            <article
              key={role.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-fuchsia-300/[0.04] to-cyan-300/[0.04] p-6 shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-200/35 md:p-8"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                  {role.employmentType}
                </span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-fuchsia-100">
                  {role.location}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                {role.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{role.summary}</p>
              <Link
                href={role.href}
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
              >
                Apply
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
