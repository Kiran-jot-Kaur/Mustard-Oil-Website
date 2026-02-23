import Image from "next/image";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata(
  "About KIRSAANI",
  "Learn the farmer story and mission behind KIRSAANI cold pressed mustard oil from Kharar, Punjab.",
  "/about"
);

export default function AboutPage() {
  return (
    <SectionWrapper title="From our fields in Kharar to your family table" subtitle="We are farmers bringing pure oil to families.">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        {/* TODO: Replace /placeholder.svg with real farm/founder story image. */}
        <Image src="/placeholder.svg" alt="Farmers in Punjab mustard field" width={700} height={520} className="rounded-3xl shadow-soft" />
        <div className="space-y-4 text-stone-700">
          <p>
            KIRSAANI started with a simple frustration—good mustard oil was becoming hard to trust. We grow and source mustard with local farming partners, then extract oil using a traditional cold-press process.
          </p>
          <p>
            Our mission is honest food. No blending, no shortcuts, and no fancy claims. Just natural aroma, robust flavor, and transparent information that every family can verify.
          </p>
          <p>
            We keep one flagship product—1L Kachi Ghani mustard oil—so we can focus on quality in every batch. From soil to seal, our team documents the journey and shares it openly.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
