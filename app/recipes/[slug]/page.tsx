import { recipes } from "@/app/lib/recipes";
import { callLink, whatsappLink } from "@/app/lib/site";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeDetail({ params }: any) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) return <div className="p-10">Recipe not found</div>;

  return (
    <div className="container-pad py-10 max-w-6xl">
      <h1 className="text-3xl font-bold text-forest">{recipe.title}</h1>

      {/* Top section: Image + Buttons */}
      <div className="mt-5 grid gap-6 lg:grid-cols-[1.6fr_0.9fr] items-start">
        {/* Image */}
        <div className="w-full">
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={1200}
            height={800}
            priority
            className="w-full rounded-2xl object-cover border border-stone-200
                       h-[240px] sm:h-[320px] md:h-[420px] lg:h-[460px]"
          />
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink(
                  "Hello KIRSAANI, I want to order 1L cold pressed mustard oil.",
                )}
                className="w-full text-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/80 transition"
              >
                Order on WhatsApp
              </a>
              <Link
                href="/purity"
                className="w-full text-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/80 transition"
              >
                Verify Purity
              </Link>
              <a
                href={callLink()}
                className="w-full text-center rounded-full bg-mustard px-6 py-3 text-sm font-semibold text-white transition hover:bg-mustard/80"
              >
                Call Now
              </a>
              <p className="pt-2 text-xs text-stone-500">
                Delivery: Kharar • Mohali • Chandigarh
              </p>
              <p className="pt-2 text-xs text-stone-500">
                Order now and get it delivered within 24 hours.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-semibold text-lg">Ingredients</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {recipe.ingredients.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg">Steps</h2>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            {recipe.steps.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}
