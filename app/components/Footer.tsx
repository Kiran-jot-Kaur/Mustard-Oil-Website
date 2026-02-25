import Link from "next/link";
import { siteConfig } from "@/app/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-10">
      <div className="container-pad grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-forest">KIRSAANI</h3>
          <p className="mt-3 text-sm text-stone-600">
            Farmer-to-family cold pressed mustard oil from {siteConfig.location}. Honest sourcing, transparent processes, pure taste.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-700">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li><Link href="/purity" className="hover:text-forest">Purity Report</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-forest">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-forest">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-700">Social</h4>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li><a href="#" aria-label="Instagram placeholder" className="hover:text-forest">Instagram (coming soon)</a></li>
            <li><a href="#" aria-label="YouTube placeholder" className="hover:text-forest">YouTube (coming soon)</a></li>
            <li><a href="#" aria-label="Facebook placeholder" className="hover:text-forest">Facebook (coming soon)</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center pt-10 text-xs text-stone-500">Copyright © 2025 Kirsaani. All rights reserved.</p>
    </footer>
  );
}
