import { Metadata } from "next";
import StageOwnership from "@/component/stage-ownership";
import HireDevelopersCta from "@/component/hire-developers-cta";

export const metadata: Metadata = {
  title: "Who Owns What, Stage by Stage | Suvrin Technologies",
  description:
    "Compare your team's expected input directly against Suvrin's guaranteed delivery across Discovery, Blueprint, Build, User Acceptance, Go-Live, and Hypercare milestones.",
};

export default function StagesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-6 sm:pt-10">
        <StageOwnership />
      </div>
      <HireDevelopersCta />
    </main>
  );
}
