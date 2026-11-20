"use client";

import React from "react";

export interface StageData {
  id: string;
  step: string;
  name: string;
  timeline: string;
  yourTeam: {
    title: string;
    description: string;
  };
  suvrin: {
    title: string;
    description: string;
  };
}

const STAGES: StageData[] = [
  {
    id: "discovery",
    step: "01",
    name: "Discovery",
    timeline: "Week 1",
    yourTeam: {
      title: "Process Walkthroughs & Data Access",
      description:
        "Process walkthroughs with department heads; access to current ERP and historical data.",
    },
    suvrin: {
      title: "Diagnostic & Risk Register",
      description:
        "A written diagnostic report with complete module map and pre-emptive risk register.",
    },
  },
  {
    id: "blueprint",
    step: "02",
    name: "Blueprint",
    timeline: "Weeks 2 – 3",
    yourTeam: {
      title: "Scope & Spec Sign-Off",
      description:
        "Sign off the fixed-scope quote, custom workflow list, and configuration spec.",
    },
    suvrin: {
      title: "Guaranteed Architecture Quote",
      description:
        "Fixed-price quote, config spec, custom-dev list, integration and data migration plans.",
    },
  },
  {
    id: "build",
    step: "03",
    name: "Build",
    timeline: "Weeks 4 – 9",
    yourTeam: {
      title: "Weekly Review & Feedback",
      description:
        "Weekly demo reviews and continuous hands-on validation in the dedicated UAT sandbox.",
    },
    suvrin: {
      title: "2-Week Sprints & Live UAT",
      description:
        "Iterative two-week agile sprints, with a live working UAT environment from week one.",
    },
  },
  {
    id: "user-acceptance",
    step: "04",
    name: "User Acceptance",
    timeline: "Weeks 9 – 10",
    yourTeam: {
      title: "Real Workflow Execution",
      description:
        "End users run their day-to-day operational workflows against a sign-off checklist.",
    },
    suvrin: {
      title: "Role Training & Bug Triage",
      description:
        "Hands-on role training, onboarding playbooks, and rapid 24h bug triage before cutover.",
    },
  },
  {
    id: "go-live",
    step: "05",
    name: "Go-Live",
    timeline: "Cutover Weekend",
    yourTeam: {
      title: "Cutover Availability",
      description:
        "Key department leads available across cutover weekend for final balance validation.",
    },
    suvrin: {
      title: "72h On-Call & Rollback Plan",
      description:
        "Delta data migration, rehearsed rollback protocols, and 72 hours of uninterrupted cover.",
    },
  },
  {
    id: "hypercare",
    step: "06",
    name: "Hypercare",
    timeline: "60 Days Post-Launch",
    yourTeam: {
      title: "Direct Ticket Channel",
      description:
        "Raise queries and operational tweak requests through the dedicated named channel.",
    },
    suvrin: {
      title: "Dedicated UAE Support Team",
      description:
        "60 days of dedicated UAE-based support with named senior Odoo consultants.",
    },
  },
];

export default function StageOwnership() {
  return (
    <section
      id="stages"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans select-none sm:select-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          {/* Micro Tag with Suvrin 3-Dots */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/60 text-[#003bbd] text-xs font-bold tracking-wider uppercase mb-3.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003bbd]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#70a647]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#002f9e]" />
            <span className="ml-1 tracking-widest text-[11px] sm:text-xs">
              PROJECT DELIVERY FRAMEWORK
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
            Who Owns What, Stage by Stage
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
            So you can plan your team&apos;s time before you sign, not after. Compare your team&apos;s expected input directly against Suvrin&apos;s guaranteed delivery at every milestone.
          </p>
        </div>

        {/* Outer Bordered Container (As shown in screenshot) */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-5 lg:p-6 shadow-xs">
          {/* Table Header Bar */}
          <div className="hidden md:grid grid-cols-12 gap-4 lg:gap-6 px-5 sm:px-6 py-3.5 rounded-xl bg-slate-50/90 border border-slate-200/70 mb-3.5 text-xs font-bold tracking-wider">
            {/* Column 1: Stage & Timeline */}
            <div className="col-span-3 text-slate-700 uppercase flex items-center ">
              <span>STAGE &amp; TIMELINE</span>
            </div>

            {/* Column 2: Your Team */}
            <div className="col-span-4 lg:col-span-4 text-slate-700 uppercase flex items-center">
              <span>YOUR TEAM</span>
            </div>

            {/* Column 3: Suvrin Technology (Blue instead of green as requested) */}
            <div className="col-span-5 lg:col-span-5 text-[#003bbd] uppercase flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003bbd]" />
              <span>SUVRIN TECHNOLOGY</span>
            </div>
          </div>

          {/* Stages List (Each row in its own crisp border card) */}
          <div className="space-y-3">
            {STAGES.map((stage) => (
              <div
                key={stage.id}
                className="group rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:border-[#003bbd]/40 hover:shadow-xs transition-all duration-200 p-4 sm:p-5 lg:px-6 lg:py-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-start">
                  {/* Column 1: Stage Number, Name & Timeline */}
                  <div className="md:col-span-3 flex flex-col justify-center space-y-2">
                    <div className="flex items-center space-x-2.5">
                      {/* Step Number Badge (Blue border & background) */}
                      <span className="px-1.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-[#003bbd] border border-blue-200/70 shrink-0">
                        {stage.step}
                      </span>
                      <h3 className="font-bold text-sm sm:text-[15px] text-slate-900 tracking-tight">
                        {stage.name}
                      </h3>
                    </div>

                    {/* Timeline Pill with Clock Icon */}
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 text-[11px] sm:text-xs font-medium w-fit">
                      <svg
                        className="w-3.5 h-3.5 text-slate-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{stage.timeline}</span>
                    </div>
                  </div>

                  {/* Column 2: Your Team Responsibilities */}
                  <div className="md:col-span-4 lg:col-span-4 space-y-1 pt-1 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="md:hidden text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Your Team
                    </div>
                    <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 tracking-tight leading-snug">
                      {stage.yourTeam.title}
                    </h4>
                    <p className="text-[11.5px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                      {stage.yourTeam.description}
                    </p>
                  </div>

                  {/* Column 3: Suvrin Technology Deliverables (Blue Icon & Accents) */}
                  <div className="md:col-span-5 lg:col-span-5 flex items-start space-x-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    {/* Blue Checkmark Circle (Replacing green as requested) */}
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/90 text-[#003bbd] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                      <svg
                        className="w-3 h-3 text-[#003bbd]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <div className="md:hidden text-[10px] font-bold uppercase tracking-wider text-[#003bbd] mb-0.5">
                        Suvrin Technology
                      </div>
                      <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 tracking-tight leading-snug">
                        {stage.suvrin.title}
                      </h4>
                      <p className="text-[11.5px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                        {stage.suvrin.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
