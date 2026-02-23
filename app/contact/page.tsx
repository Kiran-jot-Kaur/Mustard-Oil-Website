import { SectionWrapper } from "@/app/components/SectionWrapper";
import { callLink, whatsappLink } from "@/app/lib/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Contact KIRSAANI in Kharar, Punjab for mustard oil orders, wholesale enquiries, and support.",
  "/contact"
);

export default function ContactPage() {
  return (
    <SectionWrapper title="Contact KIRSAANI" subtitle="For orders, retail, and wholesale enquiries from Kharar, Punjab.">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-semibold">Reach us</h3>
          <p className="mt-3 text-stone-700">Kharar, Punjab, India</p>
          <p className="mt-1 text-sm text-stone-600">Mon-Sat: 9:00 AM – 7:00 PM</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={whatsappLink("Hello KIRSAANI, I need details for mustard oil order.")} className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white">WhatsApp</a>
            <a href={callLink()} className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold">Call</a>
          </div>
        </article>
        <article className="rounded-2xl border border-dashed border-stone-300 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-semibold">Map</h3>
          <div className="mt-3 grid h-52 place-items-center rounded-xl bg-cream text-sm text-stone-600">Map embed placeholder</div>
        </article>
      </div>
    </SectionWrapper>
  );
}
