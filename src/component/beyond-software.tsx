"use client";

import React, { useState, useRef, useEffect } from "react";

export interface BeyondSoftwareTab {
  id: string;
  step: string;
  title: string;
  lead: string;
  description: string;
  features: string[];
}

const TABS: BeyondSoftwareTab[] = [
  {
    id: "consulting",
    step: "01",
    title: "Business-First Consulting",
    lead: "We audit your shop floor routing, scrap percentages, and multi-currency supply chain before configuring Odoo.",
    description:
      "We walk your production lines and examine operational bottlenecks across Dubai, Sharjah, and Abu Dhabi plants before writing any code. Every workflow is audited against your physical materials, machine cycle times, scrap percentages, and multi-currency supply chain constraints.",
    features: [
      "Shop floor routing audit",
      "Scrap & wastage reduction",
      "Multi-warehouse analysis",
      "Risk & bottleneck assessment",
    ],
  },
  {
    id: "mastery",
    step: "02",
    title: "Odoo Enterprise Mastery",
    lead: "Certified Odoo Enterprise technical architects engineering scalable, upgradable ERP systems.",
    description:
      "We leverage native Odoo modules without bloated code or fragile hacks. Every custom module is built to strict Odoo Community and Enterprise guidelines, ensuring smooth future version upgrades, high query performance, and rock-solid database integrity.",
    features: [
      "Clean upgrade-safe code",
      "Automated regression tests",
      "High-concurrency PostgreSQL tuning",
      "Zero-downtime database migrations",
    ],
  },
  {
    id: "depth",
    step: "03",
    title: "Business Depth",
    lead: "Deep domain expertise spanning manufacturing, EPC contracting, retail, and wholesale distribution.",
    description:
      "Our consultants have led ERP deployments across high-complexity industrial sectors. We understand bills of materials (BOM), subcontracting, multi-level routing, landed cost computations, and finite capacity scheduling down to the factory floor.",
    features: [
      "Multi-level BOM engineering",
      "Landed cost automated calculation",
      "Finite capacity shop floor scheduling",
      "Quality control checkpoints",
    ],
  },
  {
    id: "delivery",
    step: "04",
    title: "UAE & GCC Delivery",
    lead: "Localized compliance for UAE FTA VAT, e-invoicing, corporate tax, and Free Zone multi-entity setups.",
    description:
      "Built specifically for GCC operational realities. From bilingual Arabic/English tax invoices and ZATCA / FTA compliance to unified cross-border consolidation for JAFZA, DAFZA, and mainland entities with localized 24/7 on-site support.",
    features: [
      "UAE FTA 5% VAT & TRN validation",
      "Multi-currency AED / SAR ledgers",
      "Free Zone & mainland consolidation",
      "Bilingual Arabic & English UI",
    ],
  },
];

export default function BeyondSoftware() {
  const [activeTabId, setActiveTabId] = useState<string>("consulting");
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  // Close modal on Escape key press and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isConsultModalOpen) {
        setIsConsultModalOpen(false);
      }
    };
    if (isConsultModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isConsultModalOpen]);

  // Close dropdown on outside tap / click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/i.test(formData.email)) {
      newErrors.email = "Valid work email is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || `Consultation request on ${activeTab.title}`,
          engagementType: `ERP Consultation (${activeTab.title})`,
        }),
      });
    } catch (err) {
      console.warn("Consultation inquiry submission:", err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsConsultModalOpen(false);
    setSubmitted(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section
      id="consulting-methodology"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans select-none sm:select-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-start sm:gap-8 mb-8 sm:mb-12">
          <div>
            {/* Tag in Suvrin Blue */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/60 text-[#003bbd] text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-[#003bbd]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#70a647]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#002f9e]" /> */}
              <span className="tracking-widest text-[11px] sm:text-xs">
                CONSULTING METHODOLOGY
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-[1.16]">
              ERP Implementation That Goes
              <br className="hidden sm:inline" /> Beyond Installing Software
            </h2>
          </div>

          {/* Subtitle Aligned Right on Desktop */}
          <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed max-w-sm md:text-left float-left font-normal pt-4 mt-1 md:mt-8">
            We audit your real-world factory routing, scrap rates, and
            multi-currency supply chain before configuring Odoo.
          </p>
        </div>

        {/* ================= MOBILE OPTION SELECTOR (Option type for < md) ================= */}
        <div ref={mobileDropdownRef} className="block md:hidden w-full mb-6 relative">
          <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            SELECT IMPLEMENTATION PHASE:
          </label>

          {/* Active Trigger Button with border in Suvrin Blue */}
          <button
            type="button"
            onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border-2 border-[#003bbd] bg-white shadow-xs transition-all duration-200 text-left cursor-pointer"
            aria-expanded={isMobileDropdownOpen}
          >
            <div className="flex items-center space-x-3 min-w-0">
              {/* Active Step Badge */}
              <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-[#003bbd] text-white shrink-0">
                {activeTab.step}
              </span>
              {/* Active Tab Title */}
              <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight truncate">
                {activeTab.title}
              </span>
            </div>

            {/* Up/Down Chevron Icon matching user screenshot */}
            <div className="pl-2 shrink-0">
              <svg
                className={`w-5 h-5 text-[#003bbd] transition-transform duration-200 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {/* Collapsible Dropdown Menu */}
          {isMobileDropdownOpen && (
            <div className="mt-2 rounded-2xl border border-slate-200/90 bg-white shadow-xl overflow-hidden divide-y divide-slate-100 z-30 animate-in fade-in slide-in-from-top-1 duration-150">
              {TABS.map((tab) => {
                const isSelected = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTabId(tab.id);
                      setIsMobileDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3.5 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-blue-50/70 text-[#003bbd]"
                        : "bg-white text-slate-700 hover:bg-slate-50 active:bg-blue-50/40"
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <span
                        className={`px-2 py-0.5 rounded-md text-xs font-bold tracking-wider shrink-0 ${
                          isSelected
                            ? "bg-[#003bbd] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tab.step}
                      </span>
                      <span
                        className={`text-sm truncate ${
                          isSelected
                            ? "font-bold text-[#003bbd]"
                            : "font-semibold text-slate-800"
                        }`}
                      >
                        {tab.title}
                      </span>
                    </div>

                    {isSelected && (
                      <svg
                        className="w-4 h-4 text-[#003bbd] shrink-0 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Interactive Layout: Left Selector Tabs (Desktop only) + Right Detailed Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ================= LEFT SELECTOR TABS (Hidden on mobile < md, shown on desktop >= md) ================= */}
          <div className="hidden md:flex md:col-span-5 lg:col-span-4 flex-col space-y-2.5 sm:space-y-3">
            {TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-2xl border transition-all duration-200 text-left cursor-pointer ${
                    isActive
                      ? "bg-[#003bbd] text-white border-[#003bbd] shadow-md shadow-blue-900/15"
                      : "bg-white text-slate-800 border-slate-200/90 hover:border-blue-200 hover:bg-slate-50/60 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    {/* Step Number Badge */}
                    <span
                      className={`px-1.5 py-0.5 rounded text-[11px] font-bold tracking-wider ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tab.step}
                    </span>

                    {/* Tab Title */}
                    <span className="font-bold text-xs sm:text-[13.5px] tracking-tight">
                      {tab.title}
                    </span>
                  </div>

                  {/* Right Arrow Icon */}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? "text-white translate-x-0.5" : "text-slate-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* ================= RIGHT DETAIL DISPLAY CARD ================= */}
          <div className="md:col-span-7 lg:col-span-8 rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/40 via-white to-blue-50/20 p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between">
            <div>
              {/* Active Tab Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                {activeTab.title}
              </h3>

              {/* Lead Summary */}
              <p className="text-xs sm:text-[14px] font-bold text-slate-800 leading-snug mb-3.5">
                {activeTab.lead}
              </p>

              {/* Full Description */}
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal mb-7">
                {activeTab.description}
              </p>

              {/* 2x2 Feature Pills (With Blue Dots as requested) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {activeTab.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center space-x-2.5 px-4 py-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs"
                  >
                    {/* Blue Bullet Point (Replaces green as requested) */}
                    <span className="w-2 h-2 rounded-full bg-[#003bbd] ring-4 ring-blue-100 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4">
              {/* Primary Consultation Button in Suvrin Blue */}
              <button
                type="button"
                onClick={() => {
                  setIsConsultModalOpen(true);
                  setSubmitted(false);
                }}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#003bbd] hover:bg-[#002f9e] shadow-md shadow-blue-800/20 hover:shadow-lg hover:shadow-blue-900/30 active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                Schedule a Consultation
              </button>

              {/* Secondary Link: Ask an Architect */}
              <a
                href="https://wa.me/919306695594?text=Hello%20Suvrin%2C%20I%20would%20like%20to%20consult%20with%20an%20Odoo%20technical%20architect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#003bbd] hover:underline cursor-pointer"
              >
                {/* Chat Bubble Icon */}
                <svg
                  className="w-4 h-4 text-[#003bbd]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Ask an Architect</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCHEDULE A CONSULTATION MODAL ================= */}
      {isConsultModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center space-x-1.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
                  <span className="w-2 h-2 rounded-full bg-[#70a647]" />
                  <span className="w-2 h-2 rounded-full bg-[#002f9e]" />
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Suvrin Consultation
                  </span>
                </div>
                <h3
                  id="consultation-modal-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Schedule a Consultation
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Phase: <span className="font-semibold text-[#003bbd]">{activeTab.title}</span>
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 pt-5">
              {submitted ? (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-[#003bbd] text-[#003bbd] mx-auto flex items-center justify-center shadow-xs">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Thank You, {formData.name || "Partner"}!
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Your consultation request has been received. Our senior Odoo technical consultant will connect with you within 2 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-7 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#003bbd] hover:bg-[#002f9e] transition-colors cursor-pointer shadow-sm hover:shadow"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                /* Consultation Form */
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003bbd]/30 focus:border-[#003bbd] transition-all bg-slate-50/50"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        placeholder="+971 50 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003bbd]/30 focus:border-[#003bbd] transition-all bg-slate-50/50"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="john@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003bbd]/30 focus:border-[#003bbd] transition-all bg-slate-50/50"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Consultation Requirements / Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Consultation Notes / Scope <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Tell us about your requirements for ${activeTab.title}...`}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003bbd]/30 focus:border-[#003bbd] transition-all bg-slate-50/50 resize-none"
                    />
                  </div>

                  {/* Submit Button in Suvrin Blue */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#003bbd] hover:bg-[#002f9e] transition-all duration-200 shadow-md shadow-blue-800/20 active:scale-[0.99] disabled:opacity-70 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <span>Request Free Consultation</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
