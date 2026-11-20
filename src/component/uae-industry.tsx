"use client";

import React from "react";

const CHECKLIST_ITEMS = [
  {
    bold: "FTA UAE VAT-Ready",
    text: "Automated 5% tax reports and electronic tax invoice generation.",
  },
  {
    bold: "AED-Centric Accounting",
    text: "Multi-currency conversion (USD, EUR, SAR) with live FX rates.",
  },
  {
    bold: "Multi-Company & Free Zones",
    text: "Unified consolidation for mainland and JAFZA/DAFZA/KIZAD.",
  },
  {
    bold: "Multi-Warehouse Routing",
    text: "Inter-warehouse transfers between Dubai, Abu Dhabi, and Sharjah depots.",
  },
  {
    bold: "Bilingual System",
    text: "Native Arabic and English documentation, reports, and UI toggles.",
  },
  {
    bold: "On-Site Factory Audits",
    text: "Suvrin engineers physically walk your production lines in JAFZA, DIC, or Al Quoz.",
  },
];

const SECTORS = [
  { name: "Metal & Steel", sub: "MT/KG & scrap" },
  { name: "Equipment & ETO", sub: "Serial tracking" },
  { name: "Plastics & Polymers", sub: "Extrusion & regrind" },
  { name: "Packaging", sub: "GSM & die-cuts" },
  { name: "Joinery & Wood", sub: "Project BOMs" },
  { name: "Food & Beverage", sub: "Halal & expiry" },
  { name: "Switchgear", sub: "Testing sign-offs" },
  { name: "Chemicals", sub: "MSDS & blending" },
];

export default function UaeIndustry() {
  return (
    <section
      id="uae-regulations"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans select-none sm:select-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ================= LEFT LARGE CARD ================= */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-sm transition-all duration-200">
            {/* Tag in Blue with Suvrin Brand Dots */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/60 text-[#003bbd] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-[#003bbd]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#70a647]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#002f9e]" /> */}
              <span className="ml-1 tracking-widest">
                BUILT FOR UAE REGULATIONS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
              Odoo ERP Implementation for UAE Industry
            </h2>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
              Suvrin combines international Odoo enterprise architecture with
              localized UAE business practices, Federal Tax Authority
              compliance, and free zone structures.
            </p>

            {/* Checklist with Blue Checkmarks & Subtle Row Dividers */}
            <div className="space-y-3.5 mb-8">
              {CHECKLIST_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0"
                >
                  {/* Blue Checkmark Icon Circle (Replaces green as requested) */}
                  <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/90 text-[#003bbd] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
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

                  {/* Item Content */}
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    <strong className="font-bold text-slate-900">
                      {item.bold}:{" "}
                    </strong>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Section: Supported UAE Business Sectors */}
            <div className="border-t border-slate-200/80 pt-6 sm:pt-7">
              <h4 className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-slate-700 mb-5">
                SUPPORTED UAE BUSINESS SECTORS
              </h4>

              {/* 2x4 Grid of Business Sectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                {SECTORS.map((sector, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-xs sm:text-[13px] text-slate-900 tracking-tight">
                      {sector.name}
                    </div>
                    <div className="text-[11px] text-slate-400 font-normal">
                      {sector.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (2 STACKED CARDS) ================= */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Card 1: FTA Ready */}
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-[#003bbd]/40 transition-all duration-200 space-y-2.5">
              <div className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#003bbd]">
                FTA READY
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-tight">
                5% VAT • TRN Validated
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                Bilingual Arabic / English tax invoices and VAT 201 returns,
                configured for UAE business.
              </p>
            </div>

            {/* Card 2: Free Zone Coverage */}
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-[#003bbd]/40 transition-all duration-200 space-y-2.5">
              <div className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#003bbd]">
                FREE ZONE COVERAGE
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-tight">
                JAFZA • DAFZA • KIZAD
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                Multi-company consolidation across mainland and free-zone
                entities in one ledger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
