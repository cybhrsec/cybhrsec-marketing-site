import { CareersApplicationForm } from "@/components/careers-application-form";
import { PageHero } from "@/components/sections";

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

const roles = [
  {
    title: "Virtual GRC Consultant",
    employmentType: "Contract / Project-Based",
    location: "Remote",
    overview:
      "CybHrSec is seeking a Virtual GRC Consultant to support cybersecurity, governance, risk management, compliance, and advisory initiatives for clients. This role will help organizations understand cybersecurity risks, improve compliance readiness, develop practical governance structures, and implement human-centered cybersecurity practices.",
    responsibilities: [
      "Conduct cybersecurity and compliance assessments",
      "Support ISO 27001 readiness and implementation activities",
      "Support SOC 2 readiness initiatives",
      "Perform risk assessments and maintain risk registers",
      "Develop and review policies, standards, and procedures",
      "Support third-party and vendor risk assessments",
      "Prepare executive reports and compliance documentation",
      "Assist with remediation planning and risk treatment activities",
      "Support cybersecurity awareness and training initiatives",
      "Contribute to implementation of the CybHrSec HCC-GRC framework",
    ],
    qualifications: [
      "Experience in cybersecurity, governance, risk management, audit, compliance, privacy, or information security",
      "Familiarity with frameworks such as ISO 27001, NIST CSF, SOC 2, HIPAA, PCI DSS, or similar standards",
      "Strong communication and stakeholder engagement skills",
      "Ability to translate technical concepts into business language",
    ],
    certifications: ["Security+", "ISO 27001", "CISA", "CRISC", "CGRC", "CISM", "CISSP"],
  },
  {
    title: "Cybersecurity & GRC Intern",
    employmentType: "Internship",
    location: "Remote",
    overview:
      "CybHrSec is seeking motivated students, career changers, and aspiring cybersecurity professionals interested in gaining practical experience in cybersecurity, governance, risk management, compliance, digital safety, and consulting. This role is designed to provide hands-on experience supporting client projects, cybersecurity research, awareness initiatives, and operational activities.",
    responsibilities: [
      "Assist with cybersecurity research",
      "Support development of client deliverables",
      "Participate in risk assessment activities",
      "Support policy and documentation reviews",
      "Assist with cybersecurity awareness initiatives",
      "Help create educational cybersecurity content",
      "Support administrative and operational activities",
      "Contribute to research related to emerging cybersecurity threats and trends",
    ],
    qualifications: [
      "Current student, recent graduate, or career changer",
      "Interest in cybersecurity, governance, compliance, privacy, risk management, or information security",
      "Strong written and verbal communication skills",
      "Eagerness to learn and contribute",
      "Experience is not required.",
    ],
    certifications: [],
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers & Talent Network"
        title="Join the CybHrSec Team"
        description="Help organizations transform cybersecurity, compliance, governance, and risk management through a practical, human-centered approach. Whether you are an experienced professional or an aspiring cybersecurity practitioner, we are building a network of people committed to making cybersecurity more accessible, actionable, and effective."
        primaryHref="#open-roles"
        primaryLabel="View Open Roles"
        secondaryHref="#talent-network"
        secondaryLabel="Join Our Talent Network"
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

      <section id="open-roles" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
            Open Roles
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Future-focused opportunities.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-fuchsia-300/[0.04] to-cyan-300/[0.04] p-6 shadow-2xl shadow-black/10 md:p-8"
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
              <p className="mt-4 text-sm leading-7 text-slate-300">{role.overview}</p>

              <RoleList title="Responsibilities" items={role.responsibilities} />
              <RoleList title="Preferred Qualifications" items={role.qualifications} />

              {role.certifications.length > 0 ? (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">
                    Preferred certifications may include:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.certifications.map((certification) => (
                      <span
                        key={certification}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200"
                      >
                        {certification}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <a
                href="#talent-network"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
              >
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#170b2d] to-[#080719] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Talent Network
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Share your interest in current or future opportunities.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Applications are reviewed for open roles, future consulting needs,
            internships, project-based support, and talent network opportunities.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              "Applications are sent securely to CybHrSec for review.",
              "Applicants receive an automatic confirmation email.",
              "Resume and optional cover letter uploads are supported.",
              "Private candidate review tools are available to administrators.",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm text-slate-200">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <CareersApplicationForm />
      </section>
    </>
  );
}

function RoleList({ items, title }: { items: string[]; title: string }) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-3 grid gap-2">
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
