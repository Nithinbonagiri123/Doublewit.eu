"use client";

import Image from "next/image";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "", label: "LinkedIn" },
  { icon: Twitter, href: "", label: "Twitter" },
  { icon: Facebook, href: "", label: "Facebook" },
  { icon: Instagram, href: "", label: "Instagram" },
].filter((s) => s.href);

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Why Us", href: "#why-us" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Strategy & Planning", href: "#services" },
      { label: "Management Consulting", href: "#services" },
      { label: "Process Improvement", href: "#services" },
      { label: "Project Management", href: "#services" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "seamus@doublewit.eu", href: "mailto:seamus@doublewit.eu" },
      { label: "+353 89 453 7395", href: "tel:+353894537395" },
      { label: "Wexford Town, Ireland", href: "#map" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-midnight-950">
      <div className="container-edge py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#"
              aria-label="Doublewit Consulting Ltd — home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Doublewit Consulting Ltd"
                width={547}
                height={200}
                className="block h-14 w-auto"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              Strategic consultancy helping businesses move from challenges to
              measurable success. Based in Wexford, working with clients across
              Ireland, the EU and beyond.
            </p>
            <ul className="mt-7 flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-ink-300 transition-colors hover:border-accent-500/40 hover:text-accent-400"
                  >
                    <s.icon size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-400">
                  {col.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-300 transition-colors hover:text-ink-50"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Doublewit Consultancy Limited. All
            rights reserved.
          </p>
          <ul className="flex items-center gap-5 text-xs text-ink-400">
            <li>
              <a href="/privacy" className="hover:text-ink-100">
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-ink-100">
                Terms
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:text-ink-100">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
