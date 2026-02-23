import { HeroSection } from "@/app/components/HeroSection";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { FeatureCardsGrid } from "@/app/components/FeatureCardsGrid";
import { TrustBadgesRow } from "@/app/components/TrustBadgesRow";
import { ProductDetail } from "@/app/components/ProductDetail";
import { TestimonialCards } from "@/app/components/TestimonialCards";
import { CTAStrip } from "@/app/components/CTAStrip";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata(
  "KIRSAANI Cold Pressed Mustard Oil",
  "Premium Kachi Ghani mustard oil from Kharar, Punjab. Lab tested, chemical free, and directly supplied from farmers.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionWrapper title="Why families trust KIRSAANI" subtitle="Pure mustard oil made in small batches with complete transparency.">
        <FeatureCardsGrid />
      </SectionWrapper>
      <SectionWrapper className="bg-white" title="Trust you can verify" subtitle="Every bottle carries a QR so you can check quality details anytime.">
        <TrustBadgesRow />
      </SectionWrapper>
      <SectionWrapper title="Our 1L bottle" subtitle="Simple offering, consistent quality, and fair pricing.">
        <ProductDetail />
      </SectionWrapper>
      <SectionWrapper className="bg-white" title="What customers say">
        <TestimonialCards />
      </SectionWrapper>
      <CTAStrip />
    </>
  );
}
