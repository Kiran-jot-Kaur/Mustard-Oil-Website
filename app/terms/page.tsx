import { SectionWrapper } from "@/app/components/SectionWrapper";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata("Terms", "Terms and conditions for KIRSAANI website and direct ordering.", "/terms");

export default function TermsPage() {
  return (
    <SectionWrapper title="Terms & Conditions">
      <div className="space-y-4 text-stone-700">
        <p>Pricing and offers may change based on crop cycle, packaging, and logistics.</p>
        <p>Orders are confirmed after payment or call verification from our team.</p>
        <p>By placing an order, you agree to share accurate delivery details and contact information.</p>
      </div>
    </SectionWrapper>
  );
}
