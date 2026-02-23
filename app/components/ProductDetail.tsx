import Image from "next/image";

export function ProductDetail() {
  return (
    <article className="grid gap-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-soft lg:grid-cols-2 lg:p-8">
      {/* TODO: Replace /placeholder.svg with final product packshot. */}
      <Image src="/placeholder.svg" alt="KIRSAANI 1L mustard oil bottle" width={600} height={600} className="rounded-2xl object-cover" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-earth">1 Litre Bottle</p>
        <h3 className="mt-2 text-3xl font-semibold text-stone-900">KIRSAANI Cold Pressed Mustard Oil (Kachi Ghani)</h3>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-stone-700">
          <li>Wood-pressed extraction for natural aroma and flavor</li>
          <li>No chemicals, no blending, no artificial color</li>
          <li>Packed in food-grade bottle with QR-linked purity page</li>
          <li>Batch tracked from seed sourcing to bottling</li>
        </ul>
        <div className="mt-6 rounded-2xl bg-cream p-4">
          <p className="text-sm text-stone-600">Direct-from-farm pricing for families that buy pure.</p>
          <p className="mt-1 text-lg text-stone-700 line-through">MRP ₹360</p>
          <p className="text-3xl font-bold text-forest">Offer ₹340</p>
        </div>
        <p className="mt-4 inline-flex rounded-full bg-mustard/20 px-4 py-2 text-sm font-medium text-earth">Scan QR for Purity</p>
      </div>
    </article>
  );
}
