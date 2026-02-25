import Image from "next/image";
import { whatsappLink, callLink } from "@/app/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white py-16 sm:py-24">
      <div className="container-pad grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="inline-flex rounded-full bg-mustard/20 px-4 py-1 text-sm font-medium text-earth">
            Kachi Ghani | Cold Pressed Mustard Oil
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
            Pure mustard oil from our Punjab farms to your family kitchen.
          </h1>
          <p className="mt-5 text-lg text-stone-700">
            KIRSAANI in Kharar delivers honest, unblended mustard oil with
            natural aroma and full traceability through our purity page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(
                "Hello KIRSAANI, I want to order 1L cold pressed mustard oil.",
              )}
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90"
            >
              Order on WhatsApp
            </a>
            <a
              href={callLink()}
              className="rounded-full bg-mustard px-6 py-3 text-sm font-semibold text-white hover:bg-mustard/90"
            >
              Call Now
            </a>
          </div>
        </div>
        <div className="relative">
          {/* TODO: Replace /placeholder.svg with final hero photography asset. */}
          <Image
            src="/Kirsaani-hero.jpg"
            alt="KIRSAANI mustard oil on farm table"
            width={700}
            height={700}
            className="rounded-3xl object-cover shadow-soft"
            priority
          />
        </div>
      </div>
    </section>
  );
}
