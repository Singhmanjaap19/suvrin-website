import { Metadata } from "next";
import ModuleMapArchitecture from "@/component/module-map-architecture";
import HireDevelopersCta from "@/component/hire-developers-cta";

export const metadata: Metadata = {
  title: "Unified Odoo Enterprise Architecture | Suvrin Technologies",
  description:
    "Explore Suvrin's Unified Odoo Enterprise Architecture. One single unified database across CRM, Sales, Inventory, Manufacturing, Accounting, and HR with zero data silos.",
};

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-6 sm:pt-10">
        <ModuleMapArchitecture />
      </div>
      <HireDevelopersCta />
    </main>
  );
}
