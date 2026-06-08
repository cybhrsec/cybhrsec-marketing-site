import Link from "next/link";
import { navItems } from "@/lib/content";
import { Brand } from "@/components/brand";

const serviceMenuItems = [
  ["Business", "/services/business"],
  ["Individual", "/services/individual"],
];

const socialLinks = [
  {
    label: "Visit CybHrSec on Instagram",
    href: "https://www.instagram.com/cybhrsec",
    icon: InstagramIcon,
  },
  {
    label: "Read CybHrSec on Substack",
    href: "https://cybhrsec.substack.com",
    icon: SubstackIcon,
  },
];

export function Header() {
  return (
    <header className="nav-reveal sticky top-0 z-50 bg-[#050514]/80 px-4 py-4 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-[0_0_40px_rgba(126,34,206,0.18)] lg:px-5">
        <Brand />
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            item.label === "Services" ? (
              <ServicesDropdown key={item.href} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-200/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/client-portal"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-fuchsia-200/50 hover:bg-white/15"
          >
            Client Portal
          </Link>
          <Link
            href="/services/business"
            className="rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.35)] transition hover:scale-[1.02] hover:from-fuchsia-300 hover:to-violet-400"
          >
            Book a Consultation
          </Link>
        </div>
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
              item.label === "Services" ? (
                <details key={item.href} className="group/services">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
                    Services
                    <span className="text-xs text-fuchsia-100 transition group-open/services:rotate-180">
                      v
                    </span>
                  </summary>
                  <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                    {serviceMenuItems.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="mt-2 grid gap-2 border-t border-white/10 pt-3">
              <Link
                href="/client-portal"
                className="block rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-white/10"
              >
                Client Portal
              </Link>
              <Link
                href="/services/business"
                className="block rounded-2xl bg-gradient-to-r from-fuchsia-400 to-violet-500 px-4 py-3 text-sm font-bold text-white transition hover:from-fuchsia-300 hover:to-violet-400"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}

function ServicesDropdown() {
  return (
    <div className="group relative">
      <Link
        href="/services"
        className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-200/80 transition hover:bg-white/10 hover:text-white group-hover:bg-white/10 group-hover:text-white"
        aria-haspopup="true"
      >
        Services
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-3xl border border-white/12 bg-[#100d2b]/95 p-2 shadow-2xl shadow-black/35 backdrop-blur-xl">
          {serviceMenuItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
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
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-300 transition hover:border-cyan-200/40 hover:bg-white/[0.1] hover:text-cyan-100"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterColumn
            title="Company"
            links={[
              ["About", "/about"],
              ["Insights", "/insights"],
              ["Careers", "/careers"],
              ["Services", "/services"],
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
              ["Client Portal", "/client-portal"],
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

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
        width="16"
        x="4"
        y="4"
      />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7" fill="currentColor" r="1.1" />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 5h12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M6 9h12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path
        d="M6 13h12v6.5l-6-3.3-6 3.3V13Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
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
