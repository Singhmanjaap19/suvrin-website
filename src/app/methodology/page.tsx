import { Metadata } from "next";
import BeyondSoftware from "@/component/beyond-software";
import HireDevelopersCta from "@/component/hire-developers-cta";

export const metadata: Metadata = {
  title: "ERP Implementation That Goes Beyond Installing Software | Suvrin Technologies",
  description:
    "We audit your real-world factory routing, scrap rates, and multi-currency supply chain before configuring Odoo. Explore Suvrin's business-first ERP consulting methodology.",
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-6 sm:pt-10">
        <BeyondSoftware />
      </div>
      <HireDevelopersCta />
    </main>
  );
}
