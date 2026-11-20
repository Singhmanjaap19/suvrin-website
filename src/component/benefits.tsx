"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface BenefitItem {
  id: string;
  title: string;
  description?: string;
}

export const ODOO_BENEFITS: BenefitItem[] = [
  {
    id: "streamlined-operations",
    title: "Streamlined Operations",
    description: "Centralize business workflows, eliminate data silos, and automate cross-department handoffs.",
  },
  {
    id: "better-financial-management",
    title: "Better Financial Management",
    description: "Multi-currency ledgers, automated bank reconciliations, and GCC FTA / ZATCA tax compliance.",
  },
  {
    id: "improved-decision-making",
    title: "Improved Decision-Making",
    description: "Real-time executive dashboards, live KPI tracking, and AI-powered predictive cashflow models.",
  },
  {
    id: "better-sales-and-roi",
    title: "Better Sales and ROI",
    description: "Integrated CRM, quotation automation, accelerated sales velocity, and lower overhead costs.",
  },
  {
    id: "enhanced-reporting-and-analytics",
    title: "Enhanced Reporting and Analytics",
    description: "Instant customized reports across sales, inventory, manufacturing, and financial statements.",
  },
  {
    id: "maximized-customer-satisfaction",
    title: "Maximized Customer Satisfaction",
    description: "Frictionless customer portals, automated support ticketing, and on-time order fulfillment.",
  },
];

export default function Benefits() {
  const [activeBenefit, setActiveBenefit] = useState<string | null>(null);

  return (
    <section
      id="benefits"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans scroll-mt-20"
    >
      {/* Decorative Technical Background Grid */}
      

      {/* Ambient Radial Gradient Glows in Suvrin Colors (Royal Blue #0052cc & Leaf Green #70a647) */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0052cc]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#70a647]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT COLUMN: Headings, Descriptions & Consultation CTA (Cols 5 on md/lg) */}
          <div className="md:col-span-5 flex flex-col pt-0.5">
            {/* Suvrin Enterprise Stack Micro-Badge */}
            <div className="inline-flex items-center space-x-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
              <span className="w-2 h-2 rounded-full bg-[#70a647]" />
              <span className="w-2 h-2 rounded-full bg-[#002f9e]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                Suvrin Enterprise Advantage
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-4 sm:mb-5">
              Benefits of Using Odoo ERP
            </h2>

            {/* Paragraph Description */}
            <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-600 leading-[1.72] mb-4 sm:mb-5">
              Odoo ERP is an integrated business management solution that
              streamlines various business processes, including marketing,
              sales, manufacturing, accounting, billing, and inventory. Its
              ability to centralize resources and automate processes greatly
              benefits businesses of all sizes and helps them achieve
              sustainable growth.
            </p>

            {/* Punchline Subtitle */}
            <p className="text-xs sm:text-[14px] font-semibold text-slate-900 mb-6 sm:mb-8">
              Revolutionize your business operations with Odoo ERP today!
            </p>

            {/* Primary Action Button linking to #contact */}
            <div>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#003bbd] hover:bg-[#002f9e] transition-all duration-300 shadow-md shadow-blue-900/20 active:scale-[0.99] cursor-pointer group"
              >
                <span>Get a Free Odoo Consultation</span>
                <svg
                  className="ml-2 w-4 h-4 text-white group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: 6 Benefit Cards in Suvrin Color Combination (Cols 7 on md/lg) */}
          <div className="md:col-span-7 space-y-3 sm:space-y-3.5">
            {ODOO_BENEFITS.map((benefit, idx) => {
              const isHovered = activeBenefit === benefit.id;
              return (
                <div
                  key={benefit.id}
                  onMouseEnter={() => setActiveBenefit(benefit.id)}
                  onMouseLeave={() => setActiveBenefit(null)}
                  className={`w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-4.5 lg:p-5 flex items-center justify-between transition-all duration-200 border cursor-pointer group ${
                    isHovered
                      ? "border-[#003bbd]/50 shadow-md shadow-blue-900/10 -translate-y-0.5 bg-gradient-to-r from-blue-50/40 via-white to-white"
                      : "border-slate-200/80 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <div className="flex items-center space-x-3.5 sm:space-x-4">
                    {/* Single Green Bullet Dot as in Suvrin Logo */}
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#003bbd] shrink-0 group-hover:scale-125 transition-transform duration-200 shadow-xs" />

                    {/* Benefit Title */}
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#003bbd] transition-colors">
                        {benefit.title}
                      </h3>
                      {benefit.description && (
                        <p className="text-[11.5px] sm:text-xs text-slate-500 mt-0.5 hidden sm:block">
                          {benefit.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right subtle arrow / index indicator */}
                  <div className="flex items-center space-x-2 pl-2">
                    <span className="text-[11px] font-bold text-slate-300 group-hover:text-[#003bbd] transition-colors">
                      0{idx + 1}
                    </span>
                    <svg
                      className="w-4 h-4 text-slate-300 group-hover:text-[#003bbd] group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
