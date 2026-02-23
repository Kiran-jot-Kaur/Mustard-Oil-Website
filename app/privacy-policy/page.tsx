import { SectionWrapper } from "@/app/components/SectionWrapper";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata("Privacy Policy", "Privacy policy for KIRSAANI website visitors and customers.", "/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper title="Privacy Policy">
      <div className="space-y-4 text-stone-700">
        <p>We collect only basic contact details shared by you for order support and communication.</p>
        <p>Your information is never sold to third parties. We use it solely for order fulfilment, customer support, and updates related to KIRSAANI.</p>
        <p>For data update or removal requests, contact us through the details on the Contact page.</p>
      </div>
    </SectionWrapper>
  );
}
