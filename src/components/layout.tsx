"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/content";
import { Brand } from "@/components/brand";

const serviceMenuItems = [
  ["Business", "/services/business"],
  ["Executive & Creator", "/services/individual"],
  ["Training & Workshops", "/services/training"],
];

const discoveryCallUrl = "https://calendly.com/cybhrsec-info/30min";

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
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    mobileMenuRef.current?.removeAttribute("open");
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        mobileMenuRef.current.removeAttribute("open");
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  function closeMobileMenu() {
    mobileMenuRef.current?.removeAttribute("open");
    setIsMobileMenuOpen(false);
  }

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
          <a
            href={discoveryCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a Discovery Call"
            className="rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.35)] transition hover:scale-[1.02] hover:from-fuchsia-300 hover:to-violet-400"
          >
            Book Discovery Call
          </a>
        </div>
        {isMobileMenuOpen ? (
          <button
            aria-label="Close navigation"
            className="fixed inset-0 z-[-1] bg-[#050514]/75 backdrop-blur-md lg:hidden"
            onClick={closeMobileMenu}
            type="button"
          />
        ) : null}
        <details
          ref={mobileMenuRef}
          className="group relative lg:hidden"
          onToggle={(event) => setIsMobileMenuOpen(event.currentTarget.open)}
        >
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15">
            <span className="sr-only">Open navigation</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded bg-white transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="block h-0.5 w-5 rounded bg-white transition group-open:opacity-0" />
              <span className="block h-0.5 w-5 rounded bg-white transition group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 max-h-[calc(100svh-7rem)] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-3xl border border-white/15 bg-[#100d2b]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">
            {navItems.map((item) => (
              item.label === "Services" ? (
                <details key={item.href} className="group/services">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
                    Services
                    <span className="text-base text-fuchsia-100 transition group-open/services:rotate-180">
                      v
                    </span>
                  </summary>
                  <div className="ml-3 grid gap-1 border-l border-white/10 pl-3">
                    {serviceMenuItems.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMobileMenu}
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
                  onClick={closeMobileMenu}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="mt-2 grid gap-2 border-t border-white/10 pt-3">
              <Link
                href="/client-portal"
                onClick={closeMobileMenu}
                className="block rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-white/10"
              >
                Client Portal
              </Link>
              <a
                href={discoveryCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a Discovery Call"
                onClick={closeMobileMenu}
                className="block rounded-2xl bg-gradient-to-r from-fuchsia-400 to-violet-500 px-4 py-3 text-sm font-bold text-white transition hover:from-fuchsia-300 hover:to-violet-400"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}

function ServicesDropdown() {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
    >
      <Link
        href="/services"
        onClick={() => setIsOpen(false)}
        className={`rounded-full px-3.5 py-2 text-sm font-medium text-slate-200/80 transition hover:bg-white/10 hover:text-white ${
          isOpen ? "bg-white/10 text-white" : ""
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Services
      </Link>
      <div
        className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 transition duration-200 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="rounded-3xl border border-white/12 bg-[#100d2b]/95 p-2 shadow-2xl shadow-black/35 backdrop-blur-xl">
          {serviceMenuItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
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
            CybHrSec helps individuals, small and growing businesses manage
            cybersecurity risk, compliance readiness, policies, remediation, and
            executive reporting through practical consulting and a modern client
            portal.
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
        <div className="grid gap-8 sm:grid-cols-2">
          <FooterColumn
            title="Company"
            links={[
              ["About", "/about"],
              ["Careers", "/careers"],
              ["Insights", "/insights"],
              ["Services", "/services"],
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
