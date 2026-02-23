import { CTAStrip } from "@/app/components/CTAStrip";
import { ProductDetail } from "@/app/components/ProductDetail";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata(
  "Product - 1L Mustard Oil",
  "KIRSAANI 1L cold pressed mustard oil. MRP ₹360, offer ₹340 with direct-from-farm pricing.",
  "/product"
);

export default function ProductPage() {
  return (
    <>
      <SectionWrapper title="Our Product" subtitle="One bottle. One promise of purity.">
        <ProductDetail />
      </SectionWrapper>
      <CTAStrip />
    </>
  );
}
