import { callLink, whatsappLink } from "@/app/lib/site";

export function CTAStrip() {
  return (
    <section className="py-12">
      <div className="container-pad">
        <div className="rounded-3xl bg-forest px-6 py-8 text-white shadow-soft sm:px-10">
          <h3 className="text-2xl font-semibold">Ready to switch to pure Kachi Ghani oil?</h3>
          <p className="mt-2 text-white/90">Order directly from KIRSAANI farmers and get fresh stock from Kharar, Punjab.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappLink("Hello KIRSAANI, please share current offer for 1L mustard oil.")} className="rounded-full bg-mustard px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-mustard/90">Order on WhatsApp</a>
            <a href={callLink()} className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-forest">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
