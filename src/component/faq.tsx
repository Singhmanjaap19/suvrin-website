"use client";

import React, { useState } from "react";

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    number: "1.",
    question: "What is Business ERP vs basic accounting software?",
    answer:
      "Basic accounting software (such as QuickBooks, Zoho Books, or basic Tally) only records post-transaction financial entries and generates retrospective reports. In contrast, an Enterprise Resource Planning (ERP) platform like Odoo seamlessly connects your entire business into one real-time ecosystem—integrating multi-warehouse inventory, procurement, manufacturing (MRP), CRM, sales pipelines, HR/payroll, and automated financial reconciliations under a single source of truth.",
  },
  {
    id: "faq-2",
    number: "2.",
    question: "Why choose Odoo over Tier-1 ERPs (SAP/Oracle)?",
    answer:
      "While legacy Tier-1 systems like SAP and Oracle demand millions in recurring licensing, rigid proprietary stacks, and 12-to-24-month rollout cycles, Odoo offers an agile, modern Python-based architecture at a fraction of the Total Cost of Ownership (TCO). With Odoo, you get complete modular flexibility (pay only for what you deploy), rapid 6-to-12-week go-lives, open API extensibility, and modern intuitive web and mobile interfaces that your teams actually love using.",
  },
  {
    id: "faq-3",
    number: "3.",
    question: "Can Odoo handle multi-level nested BOMs?",
    answer:
      "Yes, absolutely. Odoo Manufacturing natively supports complex multi-level Bills of Materials (BOMs), kit assemblies, subcontractor routing, and phantom BOMs. Suvrin configures automated component replenishment triggers, scrap rate tracking, work order operations, and real-time landed cost calculations across every manufacturing stage.",
  },
  {
    id: "faq-4",
    number: "4.",
    question: "Can Odoo track raw materials and WIP across Emirates?",
    answer:
      "Yes. Odoo’s multi-warehouse and multi-company inventory engines allow you to track raw materials, semi-finished goods, and Work-in-Progress (WIP) across multiple facilities—from JAFZA and Dubai South to Abu Dhabi and Sharjah. We configure automated internal stock transfers, barcoding, batch/lot tracking, and real-time inter-emirate transit status.",
  },
  {
    id: "faq-5",
    number: "5.",
    question: "Is the system compliant with UAE FTA 5% VAT?",
    answer:
      "100% compliant. Suvrin configures Odoo strictly according to UAE Federal Tax Authority (FTA) regulations. This includes automated 5% standard VAT computation, designated zone zero-rating, export tax exemptions, bilingual English/Arabic tax invoices with mandatory QR codes, and 1-click generation of the official FTA VAT 201 audit report file.",
  },
  {
    id: "faq-6",
    number: "6.",
    question: "Can you integrate Odoo with our existing Tally software?",
    answer:
      "Yes. While many UAE enterprises transition entirely from Tally to Odoo, Suvrin also builds real-time bidirectional connectors between Tally and Odoo. We can sync sales vouchers, inventory movements, chart of accounts, and vendor payments automatically via secure automated data pipelines, ensuring historical continuity during or after your transition.",
  },
  {
    id: "faq-7",
    number: "7.",
    question: "How long does a typical implementation take?",
    answer:
      "For standard UAE SME rollouts with core modules (Accounting, Sales, Purchase, Inventory), our AI-accelerated deployment methodology achieves full go-live in 4 to 6 weeks. For larger manufacturing or multi-company enterprises with bespoke integrations and extensive legacy data migrations, implementations typically span 8 to 14 weeks.",
  },
  {
    id: "faq-8",
    number: "8.",
    question: "Do you offer physical on-site audits in Dubai?",
    answer:
      "Yes. Suvrin maintains a dedicated presence in Dubai Marina with certified technical architects across the GCC. We conduct in-person operational audits, factory and warehouse floor workflow assessments, executive blueprinting workshops, and classroom-style end-user training directly at your premises anywhere in Dubai, Abu Dhabi, or the Northern Emirates.",
  },
  {
    id: "faq-9",
    number: "9.",
    question: "How does fixed-scope pricing work and what affects our quote?",
    answer:
      "We believe in complete financial transparency. After an initial discovery session, we provide a fixed-scope milestone quotation that guarantees zero surprise billing. Pricing is influenced by: 1) the number of users and Odoo edition (Community vs. Enterprise), 2) module complexity and custom business logic, 3) volume of historical data to be cleansed and migrated, and 4) third-party integrations (e-commerce, payment gateways, couriers, or legacy databases).",
  },
];

export default function Faq() {
  // First item active/open by default matching the reference photo
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section: Matching reference exactly */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 mb-2 sm:mb-3">
            <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
            <span className="w-2 h-2 rounded-full bg-[#70a647]" />
            <span className="w-2 h-2 rounded-full bg-[#002f9e]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
              Help &amp; Knowledge Base
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight mb-2 sm:mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-500 max-w-2xl">
            Everything you need to know about Odoo ERP implementation for UAE businesses.
          </p>
        </div>

        {/* Clean Accordion List with Horizontal Dividers */}
        <div className="border-t border-slate-100">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-slate-100/90 transition-colors"
              >
                {/* Question Row Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                >
                  <span
                    className={`text-[13.5px] sm:text-[15px] font-semibold tracking-tight transition-colors duration-150 ${
                      isOpen
                        ? "text-[#003bbd]"
                        : "text-slate-900 group-hover:text-[#003bbd]"
                    }`}
                  >
                    {item.number} {item.question}
                  </span>

                  {/* Clean Blue Downward Chevron Icon matching reference */}
                  <div
                    className={`shrink-0 transition-transform duration-200 text-[#003bbd] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                {isOpen && (
                  <div className="pb-5 pt-0 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-600 leading-[1.72] max-w-4xl">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
