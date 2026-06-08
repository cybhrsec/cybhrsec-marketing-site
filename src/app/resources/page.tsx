import Image from "next/image";
import { featuredResources, resourceCategories } from "@/lib/resources";
import { PageHero } from "@/components/sections";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Cybersecurity resources built for practical action."
        description="A growing education hub for business risk, individual digital safety, cyber awareness, governance, readiness, and sustainable security habits."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-violet-300/[0.04] to-cyan-300/[0.05] p-6 md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
            Education hub
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Guides, checklists, templates, and playbooks.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Resources are designed to help people understand what to do next,
            whether they are preparing for compliance, reviewing vendors,
            securing accounts, or building awareness across a team.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#080719]">
          <Image
            src="/images/resources-visual.svg"
            alt="Abstract resource library visual"
            width={960}
            height={720}
            className="h-full min-h-[340px] w-full object-cover"
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {featuredResources.map((resource) => (
            <article
              key={resource.title}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-fuchsia-200/40"
            >
              <span className="rounded-full bg-fuchsia-300/15 px-3 py-1 text-xs font-bold text-fuchsia-100">
                {resource.type}
              </span>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">
                {resource.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {resource.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {resourceCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-[2rem] border border-white/10 bg-[#070719]/80 p-6"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {category.title}
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {category.items.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
