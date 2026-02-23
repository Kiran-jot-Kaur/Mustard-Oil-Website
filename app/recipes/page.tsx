import { SectionWrapper } from "@/app/components/SectionWrapper";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata(
  "Recipes",
  "Explore Punjabi and everyday recipes that pair beautifully with KIRSAANI cold pressed mustard oil.",
  "/recipes"
);

const recipes = [
  "Sarson Wali Aloo Sabzi",
  "Punjabi Kadhi Tadka",
  "Mustard Oil Achari Paneer",
  "Lahori Style Fish Fry",
  "Ghar Ka Mango Pickle",
  "Mixed Veg Tawa Stir Fry"
];

export default function RecipesPage() {
  return (
    <SectionWrapper title="Kitchen inspiration" subtitle="Six home-style recipes where pure mustard aroma makes all the difference.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, index) => (
          <article key={recipe} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-earth">Recipe {index + 1}</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">{recipe}</h3>
            <p className="mt-3 text-sm text-stone-700">Simple family-friendly steps with bold taste from cold-pressed mustard oil.</p>
            <button type="button" className="mt-4 text-sm font-semibold text-forest">Read recipe (placeholder) →</button>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
