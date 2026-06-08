import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections";

const servicePaths = [
  {
    title: "Business Services",
    href: "/services/business",
    image: "/images/advisory-visual.svg",
    description:
      "Cybersecurity consulting, GRC advisory, ISO 27001 and SOC 2 readiness, risk assessments, policy support, and GRC dashboard guidance.",
    items: ["GRC advisory", "Compliance readiness", "Risk assessments", "Security awareness"],
  },
  {
    title: "Individual Services",
    href: "/services/individual",
    image: "/images/digital-safety-visual.svg",
    description:
      "Digital safety audits, personal cyber consultations, account reviews, privacy support, and creator security guidance.",
    items: ["Digital safety", "Account security", "Privacy", "Creator risk"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Choose the support that fits your situation."
        description="CybHrSec supports organizations, creators, professionals, and individuals with practical cybersecurity and digital safety services."
        primaryHref="/services/business"
        primaryLabel="Business Services"
        secondaryHref="/services/individual"
        secondaryLabel="Individual Services"
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {servicePaths.map((path) => (
            <article
              key={path.href}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-fuchsia-300/[0.04] to-cyan-300/[0.04] shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-fuchsia-200/40"
            >
              <Image
                src={path.image}
                alt=""
                width={960}
                height={720}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 md:p-8">
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  {path.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {path.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {path.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={path.href}
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
                >
                  Explore {path.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
