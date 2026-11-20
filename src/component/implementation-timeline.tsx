"use client";

import React, { useState } from "react";

export interface TimelineTier {
  id: string;
  badge: string;
  title: string;
  duration: string;
  scope: string;
  description: string;
  features: string[];
  isMostCommon?: boolean;
}

const TIMELINE_TIERS: TimelineTier[] = [
  {
    id: "starter",
    badge: "QUICK-START",
    title: "Starter Implementation",
    duration: "6 – 8 Weeks",
    scope: "2–3 Modules • Clean Data",
    description:
      "Smaller starter projects with focused scope and ready master data, delivering rapid time-to-value with standard configurations.",
    features: [
      "Standard Odoo core workflows",
      "Master data clean import",
      "Essential role-based training",
      "Go-live support & handoff",
    ],
  },
  {
    id: "mid-market",
    badge: "MOST COMMON",
    title: "Mid-Market Enterprise",
    duration: "12 – 20 Weeks",
    scope: "50–500 Employees • 4–8 Modules • 3 Integrations",
    description:
      "A typical mid-market implementation runs 12–20 weeks from kickoff to go-live, covering end-to-end departmental operations.",
    features: [
      "End-to-end manufacturing & inventory",
      "UAE FTA VAT & multi-currency accounting",
      "3 external API / ERP integrations",
      "Live UAT sandbox & parallel dry-run",
    ],
    isMostCommon: true,
  },
  {
    id: "large-enterprise",
    badge: "HOLDING GROUPS",
    title: "Large Multi-Entity",
    duration: "6 – 9 Months",
    scope: "Multi-Company • Phased by Business Unit",
    description:
      "Large multi-entity rollouts phased by subsidiary or manufacturing division to maintain complete business continuity.",
    features: [
      "Inter-company automation & consolidation",
      "Phased rollout across divisions/free zones",
      "Multi-facility shop floor tablet routing",
      "Dedicated UAE engineering team on-site",
    ],
  },
];

export default function ImplementationTimeline() {
  // Middle card (index 1: mid-market) remains active by default
  const [activeTier, setActiveTier] = useState<number>(1);

  return (
    <section
      id="timeline"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans select-none sm:select-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          {/* Tag with Suvrin 3 Brand Dots */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/60 text-[#003bbd] text-xs font-bold tracking-wider uppercase mb-3.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003bbd]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#70a647]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#002f9e]" />
            <span className="tracking-widest text-[11px] sm:text-xs">
              REALISTIC ROLLOUT ESTIMATES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
            Typical Implementation Timeline
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
            No fictional promises. Execution duration depends on your operational scale, number of modules, and data readiness.
          </p>
        </div>

        {/* Responsive Cards Grid: 1 col on mobile, 2 cols on tablet (768px-1023px), 3 cols on desktop (1024px+) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-8 items-stretch"
          onMouseLeave={() => setActiveTier(1)} // Reverts to middle card as active when mouse leaves
        >
          {TIMELINE_TIERS.map((tier, idx) => {
            const isActive = activeTier === idx;
            const isMiddle = tier.isMostCommon;
            const isThird = idx === 2;

            return (
              <div
                key={tier.id}
                onMouseEnter={() => setActiveTier(idx)}
                className={`relative rounded-3xl bg-white p-6 sm:p-7 xl:p-8 flex flex-col justify-between transition-all duration-300 cursor-default ${
                  isThird ? "md:col-span-2 lg:col-span-1" : ""
                } ${
                  isActive
                    ? "border-2 border-[#003bbd] shadow-2xl shadow-blue-600/15 -translate-y-1.5 ring-1 ring-[#003bbd]/20"
                    : isMiddle
                    ? "border-2 border-[#003bbd]/70 shadow-lg shadow-blue-500/10"
                    : "border border-slate-200/90 shadow-xs hover:border-[#003bbd] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
                }`}
              >
                {/* Card Content (Responsive 2-col split for 3rd card on tablet) */}
                <div
                  className={
                    isThird
                      ? "md:grid md:grid-cols-2 md:gap-8 lg:block"
                      : ""
                  }
                >
                  {/* Left Section on Tablet / Top on Mobile & Desktop */}
                  <div>
                    {/* Top Header: Badge & Clock Icon */}
                    <div className="flex items-center justify-between mb-4">
                      {/* Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border transition-colors ${
                          isActive || isMiddle
                            ? "bg-blue-50 text-[#003bbd] border-blue-200/80"
                            : "bg-slate-50 text-slate-600 border-slate-200/80"
                        }`}
                      >
                        {tier.badge}
                      </span>

                      {/* Clock Icon in Subtle Circle */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                          isActive
                            ? "bg-blue-50 border-blue-200 text-[#003bbd]"
                            : "bg-slate-50 border-slate-200 text-slate-400"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
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
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                      {tier.title}
                    </h3>

                    {/* Duration in Bold Blue */}
                    <div className="text-2xl sm:text-3xl lg:text-[26px] xl:text-3xl font-extrabold text-[#003bbd] tracking-tight font-mono mb-1">
                      {tier.duration}
                    </div>

                    {/* Scope Subtitle */}
                    <div className="text-xs sm:text-[12.5px] text-slate-400 font-medium mb-3 sm:mb-4">
                      {tier.scope}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-5 lg:min-h-[56px]">
                      {tier.description}
                    </p>
                  </div>

                  {/* Checklist (Right Section on Tablet for 3rd card, Standard on Mobile & Desktop) */}
                  <div
                    className={
                      isThird
                        ? "md:flex md:flex-col md:justify-center lg:block"
                        : ""
                    }
                  >
                    <div className="space-y-3 mb-6">
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2.5">
                          {/* Blue Checkmark Circle */}
                          <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 text-[#003bbd] flex items-center justify-center shrink-0 mt-0.5">
                            <svg
                              className="w-2.5 h-2.5 text-[#003bbd]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-xs sm:text-[13px] text-slate-700 leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Flag Icon & Milestone Indicator */}
                <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs text-slate-400">
                  <svg
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#003bbd]" : "text-slate-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                  <span>Kickoff to Full Go-Live</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
