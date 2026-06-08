import type { InsightPost } from "@/lib/insights";
import { getLatestInsights, SUBSTACK_FEED_URL } from "@/lib/insights";
import { PageHero } from "@/components/sections";

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Latest insight";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default async function InsightsPage() {
  let posts: InsightPost[] = [];
  let hasError = false;

  try {
    posts = await getLatestInsights();
  } catch {
    hasError = true;
  }

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical cybersecurity, compliance, and digital safety thinking."
        description="Latest CybHrSec articles from Substack, brought into the website so visitors can browse before opening the full post."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        {hasError || posts.length === 0 ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Insights are temporarily unavailable.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              The Substack feed could not be loaded right now. You can still
              read CybHrSec directly on Substack.
            </p>
            <a
              href="https://cybhrsec.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 text-sm font-bold text-[#08071a] transition hover:bg-white"
            >
              Open Substack
            </a>
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">
                  Latest from Substack
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Fresh thinking for safer decisions.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-400">
                Feed source: <span className="text-slate-200">{SUBSTACK_FEED_URL}</span>
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.link}
                  className="group flex overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-fuchsia-200/40 hover:bg-white/[0.09] max-md:flex-col md:min-h-[31rem] md:flex-col"
                >
                  <div className="relative h-52 overflow-hidden bg-[#0b081b]">
                    {post.image ? (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${JSON.stringify(post.image)})` }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_16rem),radial-gradient(circle_at_75%_70%,rgba(217,70,239,0.2),transparent_18rem)]" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                      {formatDate(post.publishedAt)}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                      {post.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                      {post.excerpt}
                    </p>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 text-sm font-bold text-white transition hover:border-cyan-200/50 hover:bg-white/15"
                    >
                      Read Insight
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
