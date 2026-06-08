export type BlogPost = {
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  href: string;
  thumbnail: string;
};

export const featuredPost: BlogPost = {
  title: "Making cybersecurity practical for small businesses",
  summary:
    "A plain-English guide to turning cybersecurity from an overwhelming checklist into a manageable operating rhythm.",
  category: "Cybersecurity Strategy",
  date: "Featured",
  readTime: "6 min read",
  href: "https://cybhrsec.substack.com",
  thumbnail: "/images/blog-featured.svg",
};

export const blogPosts: BlogPost[] = [
  {
    title: "What to prepare before an ISO 27001 readiness project",
    summary:
      "The documents, decisions, and ownership details that make ISO 27001 work feel less chaotic.",
    category: "Compliance Readiness",
    date: "Guide",
    readTime: "5 min read",
    href: "https://cybhrsec.substack.com",
    thumbnail: "/images/resources-visual.svg",
  },
  {
    title: "A creator's guide to reducing account takeover risk",
    summary:
      "Practical steps for protecting high-value accounts, brand access, private data, and recovery routes.",
    category: "Digital Safety",
    date: "Guide",
    readTime: "4 min read",
    href: "https://cybhrsec.substack.com",
    thumbnail: "/images/digital-safety-visual.svg",
  },
  {
    title: "How to explain cyber risk to leadership",
    summary:
      "A simple way to translate findings into business impact, ownership, priorities, and decisions.",
    category: "Governance",
    date: "Briefing",
    readTime: "5 min read",
    href: "https://cybhrsec.substack.com",
    thumbnail: "/images/advisory-visual.svg",
  },
];

export const blogCategories = [
  "Compliance Readiness",
  "Digital Safety",
  "Governance",
  "Risk Management",
  "Cyber Awareness",
];
