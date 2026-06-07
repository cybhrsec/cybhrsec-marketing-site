import Link from "next/link";
import { navItems } from "@/lib/content";
import { Brand } from "@/components/brand";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08071a]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Brand />
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-200/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-[#08071a] shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:bg-white md:inline-flex"
        >
          Book a Consultation
        </Link>
        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15">
            <span className="sr-only">Open navigation</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded bg-white transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="block h-0.5 w-5 rounded bg-white transition group-open:opacity-0" />
              <span className="block h-0.5 w-5 rounded bg-white transition group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-3xl border border-white/15 bg-[#100d2b] p-3 shadow-2xl shadow-black/40">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050514]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Brand />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            CybHrSec helps small and growing businesses manage cybersecurity
            risk, compliance readiness, policies, remediation, and executive
            reporting through practical consulting and a modern client portal.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn
            title="Company"
            links={[
              ["About", "/about"],
              ["Services", "/services"],
              ["Blog", "/blog"],
            ]}
          />
          <FooterColumn
            title="Readiness"
            links={[
              ["ISO 27001", "/iso-27001"],
              ["SOC 1/2", "/soc-readiness"],
              ["GRC Tool", "/grc-tool"],
            ]}
          />
          <FooterColumn
            title="Next step"
            links={[
              ["Contact", "/contact"],
              ["Client Portal", "http://localhost:3000"],
            ]}
          />
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        © 2026 CybHrSec. Cybersecurity, compliance, and GRC support for growing businesses.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-3">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-sm text-slate-400 transition hover:text-cyan-200"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
