import { SectionWrapper } from "@/app/components/SectionWrapper";
import { createPageMetadata } from "@/app/lib/metadata";
import Link from "next/link";
import { recipes } from "@/app/lib/recipes";
import Image from "next/image";
export const metadata = createPageMetadata(
  "Recipes",
  "Explore Punjabi and everyday recipes that pair beautifully with KIRSAANI cold pressed mustard oil.",
  "/recipes",
);

export default function RecipesPage() {
  return (
    <SectionWrapper
      title="Kitchen inspiration"
      subtitle="Six home-style recipes where pure mustard aroma makes all the difference."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, index) => (
          <article
            key={recipe.slug}
            className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-earth">
              Recipe {index + 1}
            </p>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={600}
              height={400}
              className="my-4 h-40 w-full rounded-xl object-cover border border-stone-200"
            />
            <h3 className="mt-2 text-xl font-semibold text-stone-900">
              {recipe.title}
            </h3>

            <p className="mt-3 text-sm text-stone-700">
              Simple family-friendly steps with bold taste from cold-pressed
              mustard oil.
            </p>

            <Link
              href={`/recipes/${recipe.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-forest hover:underline"
            >
              Read recipe →
            </Link>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
