import { PageHero } from "@/components/sections";

export default function ClientPortalPage() {
  return (
    <PageHero
      eyebrow="Client Portal"
      title="CybHrSec Client Portal access is coming soon."
      description="The portal will give clients access to CybHrSec Pro, a GRC platform for risks, policies, remediation actions, readiness tracking, human-risk visibility, and executive reporting. For now, request a demo and CybHrSec will guide you through the available options."
      primaryHref="/contact"
      primaryLabel="Request Demo"
      secondaryHref="/grc-tool"
      secondaryLabel="Explore CybHrSec Pro"
    />
  );
}
