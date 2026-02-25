"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/app/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200/60 bg-cream/95 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        {/* Left: Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-forest"
        >
          <Image src="/logo.svg" alt="KIRSAANI logo" width={36} height={36} />
          <span className="text-lg tracking-wide">KIRSAANI</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-mustard text-stone-900"
                      : "text-stone-700 hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop button */}
        <div className="hidden lg:block">
          <Link
            href="/purity"
            className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-forest/90"
          >
            Verify Purity
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/60 p-2 text-stone-800 hover:bg-white"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`lg:hidden overflow-hidden border-t border-stone-200/60 bg-cream/95 backdrop-blur transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-pad py-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-mustard text-stone-900"
                      : "text-stone-800 hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/purity"
              className="mt-2 rounded-xl bg-forest px-4 py-3 text-center text-sm font-semibold text-white hover:bg-forest/90"
            >
              Verify Purity
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
