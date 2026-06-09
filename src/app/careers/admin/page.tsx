import { CareersAdminDashboard } from "@/components/careers-admin-dashboard";
import { PageHero } from "@/components/sections";

export default function CareersAdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Admin Only"
        title="Careers Application Dashboard"
        description="Review candidate profiles, filter submissions, update application status, and manage private notes for active CybHrSec roles."
      />
      <CareersAdminDashboard />
    </>
  );
}
