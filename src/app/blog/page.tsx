import Image from "next/image";
import { blogCategories, blogPosts, featuredPost } from "@/lib/blog";
import { PageHero } from "@/components/sections";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical resources for cybersecurity, compliance, and digital safety."
        description="Plain-English guidance for leaders, creators, professionals, and teams who want to reduce cyber risk without unnecessary complexity."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-fuchsia-300/[0.04] to-cyan-300/[0.04] p-5 md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Image
            src={featuredPost.thumbnail}
            alt=""
            width={960}
            height={720}
            className="h-full min-h-[300px] rounded-[1.5rem] object-cover"
          />
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-bold text-cyan-100">
              {featuredPost.category}
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {featuredPost.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {featuredPost.summary}
            </p>
            <a
              href={featuredPost.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-white"
            >
              Read on Substack
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.28fr_0.72fr] lg:px-8">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6">
          <label className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200" htmlFor="blog-search">
            Search resources
          </label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search topics"
            className="mt-4 w-full rounded-full border border-white/10 bg-[#080719] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-200"
          />
          <div className="mt-8 space-y-2">
            {blogCategories.map((category) => (
              <span
                key={category}
                className="block rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200"
              >
                {category}
              </span>
            ))}
          </div>
        </aside>
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:border-fuchsia-200/40"
            >
              <Image
                src={post.thumbnail}
                alt=""
                width={960}
                height={720}
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-bold text-cyan-100">
                  {post.category}
                </span>
                <h2 className="mt-5 text-lg font-semibold tracking-tight text-white">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {post.summary}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {post.date} / {post.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
