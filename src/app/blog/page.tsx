import { blogPosts } from "@/lib/content";
import { ContactCta, PageHero } from "@/components/sections";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Resources for cybersecurity, compliance, and GRC decisions."
        description="Plain-English guidance for leaders who need to manage risk, prepare for customer reviews, and build sustainable security programs."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-3 lg:px-8">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-7"
          >
            <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-bold text-cyan-100">
              {post.tag}
            </span>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">
              {post.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {post.description}
            </p>
          </article>
        ))}
      </section>
      <ContactCta />
    </>
  );
}
