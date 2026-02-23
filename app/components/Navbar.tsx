"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/lib/site";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200/60 bg-cream/95 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-forest">
          <Image src="/logo.svg" alt="KIRSAANI logo" width={36} height={36} />
          <span className="text-lg tracking-wide">KIRSAANI</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    isActive ? "bg-mustard text-stone-900" : "text-stone-700 hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/purity" className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-forest/90">
          Verify Purity
        </Link>
      </div>
    </nav>
  );
}
