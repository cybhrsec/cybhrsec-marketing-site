export const SUBSTACK_FEED_URL = "https://cybhrsec.substack.com/feed";

export type InsightPost = {
  title: string;
  link: string;
  publishedAt: string;
  excerpt: string;
  image?: string;
};

function decodeEntities(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripHtml(value: string) {
  return decodeEntities(value)
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTag(item: string, tag: string) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeEntities(match[1]).trim() : "";
}

function getFeaturedImage(item: string) {
  const mediaMatch = item.match(/<media:content[^>]+url=["']([^"']+)["']/i);
  if (mediaMatch) return decodeEntities(mediaMatch[1]);

  const enclosureMatch = item.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\//i);
  if (enclosureMatch) return decodeEntities(enclosureMatch[1]);

  const html = getTag(item, "content:encoded") || getTag(item, "description");
  const imageMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imageMatch ? decodeEntities(imageMatch[1]) : undefined;
}

export function parseSubstackFeed(xml: string, limit = 6): InsightPost[] {
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];

  return items.slice(0, limit).map((item) => {
    const title = stripHtml(getTag(item, "title"));
    const link = getTag(item, "link");
    const publishedAt = getTag(item, "pubDate");
    const rawExcerpt = getTag(item, "description") || getTag(item, "content:encoded");
    const excerpt = stripHtml(rawExcerpt).slice(0, 190);

    return {
      title,
      link,
      publishedAt,
      excerpt: excerpt.length === 190 ? `${excerpt}...` : excerpt,
      image: getFeaturedImage(item),
    };
  });
}

export async function getLatestInsights() {
  const response = await fetch(SUBSTACK_FEED_URL, {
    next: { revalidate: 60 * 30 },
  });

  if (!response.ok) {
    throw new Error("Unable to load Substack feed");
  }

  const xml = await response.text();
  return parseSubstackFeed(xml, 6);
}
