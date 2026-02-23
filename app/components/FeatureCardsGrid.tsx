import { highlights } from "@/app/lib/site";

export function FeatureCardsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {highlights.map((item) => (
        <article key={item} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft hover:-translate-y-1">
          <p className="text-sm font-semibold text-forest">{item}</p>
        </article>
      ))}
    </div>
  );
}
