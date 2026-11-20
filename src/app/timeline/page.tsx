import { Metadata } from "next";
import ImplementationTimeline from "@/component/implementation-timeline";
import HireDevelopersCta from "@/component/hire-developers-cta";

export const metadata: Metadata = {
  title: "Typical Implementation Timeline | Suvrin Technologies",
  description:
    "Explore realistic Odoo implementation timelines: Starter Implementation (6–8 weeks), Mid-Market Enterprise (12–20 weeks), and Large Multi-Entity (6–9 months).",
};

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-6 sm:pt-10">
        <ImplementationTimeline />
      </div>
      <HireDevelopersCta />
    </main>
  );
}
