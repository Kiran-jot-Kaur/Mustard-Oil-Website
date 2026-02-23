import { DownloadPDFButton } from "@/app/components/DownloadPDFButton";
import { FAQAccordion } from "@/app/components/FAQAccordion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { callLink, whatsappLink } from "@/app/lib/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata(
  "Purity Report",
  "Verify KIRSAANI mustard oil purity with lab report access, FSSAI info, batch data, process transparency, and customer reviews.",
  "/purity"
);

const faqs = [
  {
    question: "Is KIRSAANI oil pure mustard oil?",
    answer: "Yes. Our 1L bottle is 100% mustard oil extracted through cold pressing without blending."
  },
  {
    question: "What is the shelf life?",
    answer: "Best used within 9 months from packing for ideal aroma and taste."
  },
  {
    question: "How should I store it?",
    answer: "Keep bottle sealed, away from direct sunlight, and in a cool dry place."
  },
  {
    question: "What does cold-pressed mean?",
    answer:
      "Seeds are pressed at controlled low temperature to retain natural aroma and character without chemical processing."
  }
];

const verificationRows = [
  { label: "Brand", value: "KIRSAANI" },
  { label: "Product", value: "Kachi Ghani Cold Pressed Mustard Oil (1L)" },
  { label: "Batch", value: "KRN-2025-001 (placeholder)" },
  { label: "Packed on", value: "12 Jan 2025 (placeholder)" },
  { label: "Valid verification page", value: "https://kirsaani.in/purity" }
];

export default function PurityPage() {
  return (
    <>
      <SectionWrapper
        title="Scan Verified Purity"
        subtitle="You reached the official KIRSAANI verification page linked from your bottle QR."
      >
        <div className="rounded-3xl border border-forest/20 bg-forest/5 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-forest">Trust Marker</p>
          <h3 className="mt-2 text-2xl font-semibold text-stone-900">Bottle authenticity and quality details</h3>
          <p className="mt-2 text-stone-700">
            If this page does not open from your bottle QR, please contact us before consuming the product.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Lab Tested</h3>
            <p className="mt-2 text-sm text-stone-700">Download the latest third-party lab report for this product batch.</p>
            <div className="mt-4">
              <DownloadPDFButton />
            </div>
            <p className="mt-3 text-xs text-stone-500">Last report update: Jan 2025 (placeholder)</p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">FSSAI Details</h3>
            <p className="mt-2 text-stone-700">
              License No. <span className="font-semibold">XXXXXXXXXXXXXX</span> (placeholder)
            </p>
            <p className="mt-3 text-sm text-stone-600">Registered food business operating from Kharar, Punjab.</p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">How we extract oil</h3>
            <div className="mt-3 grid h-44 place-items-center rounded-xl border border-dashed border-stone-300 bg-cream text-sm text-stone-600">
              Video placeholder (replace with process video embed)
            </div>
            <p className="mt-3 text-sm text-stone-700">Traditional cold press process with no chemical extraction.</p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Batch verification</h3>
            <dl className="mt-3 space-y-2 text-sm">
              {verificationRows.map((row) => (
                <div key={row.label} className="flex flex-col border-b border-stone-100 pb-2 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="font-medium text-stone-600">{row.label}</dt>
                  <dd className="text-stone-800">{row.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white" title="Customer reviews">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Aroma is natural and strong, exactly what we wanted.",
            "Clean oil quality and transparent process details.",
            "Great flavor for achar and daily cooking.",
            "Feels authentic and consistent in every order."
          ].map((review) => (
            <article key={review} className="rounded-2xl border border-stone-200 p-4 shadow-soft">
              <p className="text-sm text-stone-700">“{review}”</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Frequently asked questions">
        <FAQAccordion items={faqs} />
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-3xl bg-forest p-8 text-white">
          <h3 className="text-2xl font-semibold">Need fresh stock from current batch?</h3>
          <p className="mt-2 text-white/90">Order directly from farmers in Kharar with transparent batch records.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={whatsappLink("Hello KIRSAANI, I scanned the QR and want to order 1L bottle.")}
              className="rounded-full bg-mustard px-5 py-3 text-sm font-semibold text-stone-900"
            >
              Order on WhatsApp
            </a>
            <a href={callLink()} className="rounded-full border border-white/70 px-5 py-3 text-sm font-semibold">
              Call Now
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
