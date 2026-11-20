import { Metadata } from "next";
import UaeIndustry from "@/component/uae-industry";
import HireDevelopersCta from "@/component/hire-developers-cta";

export const metadata: Metadata = {
  title: "Odoo ERP Implementation for UAE Industry | Suvrin Technologies",
  description:
    "Suvrin combines international Odoo enterprise architecture with localized UAE business practices, Federal Tax Authority compliance (5% VAT), and free zone structures (JAFZA, DAFZA, KIZAD).",
};

export default function UaeIndustryPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-6 sm:pt-10">
        <UaeIndustry />
      </div>
      <HireDevelopersCta />
    </main>
  );
}
