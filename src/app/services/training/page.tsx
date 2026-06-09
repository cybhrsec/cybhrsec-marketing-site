import { PageHero } from "@/components/sections";

const services = [
  [
    "Cybersecurity Awareness Training",
    "Practical education that helps employees and leaders understand common cyber risks and how to respond effectively.",
  ],
  [
    "Digital Safety Education",
    "Clear guidance for creators, professionals, students, families, and communities navigating online risk.",
  ],
  [
    "Individual Digital Safety Guidance",
    "One-to-one guidance for individuals seeking help understanding cybersecurity, privacy, scams, online safety, and digital risk.",
  ],
  [
    "Team Workshops",
    "Customized workshops for organizations, schools, nonprofits, and community groups.",
  ],
];

const topics = [
  "Phishing & Scam Awareness",
  "Password Security",
  "Social Media Safety",
  "AI & Cybersecurity Risks",
  "Privacy Protection",
  "Online Fraud Awareness",
  "Safe Remote Working Practices",
];

export default function TrainingServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Workshops"
        title="Practical Cybersecurity Education for Individuals and Teams"
        description="Cybersecurity is ultimately about people. CybHrSec delivers practical, easy-to-understand education designed to help individuals and organizations make safer digital decisions."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(([title, description]) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.075]"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300" />
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#170b2d] to-[#080719] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
            Topics
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Practical topics people can use immediately.
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <div key={topic} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                <p className="text-sm font-semibold text-white">{topic}</p>
              </div>
            ))}
          </div>
          <a
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
          >
            Request Training or Workshop
          </a>
        </div>
      </section>
    </>
  );
}
