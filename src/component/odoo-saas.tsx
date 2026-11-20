"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface OdooSaasProps {
  badgeText?: string;
  titleMain?: string;
  titlePart1?: string;
  titlePart2?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  imageSrc?: string;
}

const SAAS_FEATURES_LEFT = [
  "Streamlined Operations",
  "Odoo-Native Architecture",
  "Zero-Downtime Updates",
  "Rapid Deployment",
];

const SAAS_FEATURES_RIGHT = [
  "Staging and Production Environments",
  "99.9% Uptime with High Availability",
  "No DevOps or Infrastructure Hassles",
  "Real-time Monitoring",
];

export default function OdooSaas({
  badgeText = "Suvrin SaaS Infrastructure",
  titleMain = "No More Scaling Barriers!",
  titlePart1 = "Create Hundreds of Odoo Instances in ",
  titlePart2 = "Minutes with Odoo SaaS Toolkit!",
  description = "Eliminate deployment delays, DevOps complexity, & scaling issues with Suvrin Odoo SaaS Toolkit. Now, launch, manage, and monitor your Odoo SaaS efficiently with rapid deployments and zero DevOps dependency. Built for high scalability, our Odoo SaaS engine allows you to create hundreds to thousands of Odoo instances within minutes. Powered by enterprise-grade features, it delivers secure, reliable Odoo hosting so that you can scale with confidence.",
  primaryCtaText = "Get your 30-day Free Trial",
  secondaryCtaText = "Try Now",
  imageSrc = "/image.png",
}: OdooSaasProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"trial" | "demo">("trial");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    region: "UAE / Dubai (Middle East)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      region: "UAE / Dubai (Middle East)",
      message: "",
    });
    setIsModalOpen(false);
  };

  const openTrialModal = () => {
    setModalType("trial");
    setSubmitted(false);
    setIsModalOpen(true);
  };

  const openDemoModal = () => {
    setModalType("demo");
    setSubmitted(false);
    setIsModalOpen(true);
  };

  return (
    <section
      id="odoo-saas"
      className="relative w-full bg-white py-14 sm:py-18 lg:py-22 border-b border-slate-100 overflow-hidden font-sans scroll-mt-20"
    >
      {/* Decorative Technical Background Grid */}
     

      {/* Ambient Gradient Glows matching reference soft palette & Suvrin branding */}
      <div
        className="absolute top-1/2 -left-40 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-[#0052cc]/10 via-[#70a647]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-bl from-pink-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Light Dashboard Graphic with Suvrin logo branding (Cols 6 on md/lg) */}
          <div className="md:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[560px] group">
              {/* Soft ambient background glow matching Suvrin brand colors */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#0052cc]/10 via-[#70a647]/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Clean high-res rendering of the Suvrin Odoo SaaS dashboard */}
              <div className="relative transition-transform duration-500 group-hover:scale-[1.015]">
                <Image
                  src={imageSrc}
                  alt="Suvrin Technologies Odoo SaaS Deployment Build Dashboard"
                  width={623}
                  height={566}
                  className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Copy, Feature Bullets & CTAs (Cols 6 on md/lg) */}
          <div className="md:col-span-6 flex flex-col justify-center">
            {/* Category / Badge Row in Suvrin Colors */}
            <div className="inline-flex items-center space-x-1.5 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
              <span className="w-2 h-2 rounded-full bg-[#70a647]" />
              <span className="w-2 h-2 rounded-full bg-[#002f9e]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                {badgeText}
              </span>
            </div>

            {/* Primary Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-2 sm:mb-2.5">
              {titleMain}
            </h2>

            {/* Subheading with Suvrin Blue + Green Split */}
            <h3 className="text-lg sm:text-xl lg:text-[23px] font-bold leading-snug tracking-tight mb-4 sm:mb-5">
              <span className="text-[#003bbd]">{titlePart1}</span>
              <span className="text-[#003bbd]">{titlePart2}</span>
            </h3>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-600 leading-[1.72] mb-6 sm:mb-8">
              {description}
            </p>

            {/* 2-Column Feature Bullets with LEAF GREEN (#70a647) Concentric Circles from Suvrin Logo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5 mb-8 sm:mb-9 text-xs sm:text-[13px] text-slate-800 font-medium">
              {/* Left Column Features */}
              <div className="space-y-3">
                {SAAS_FEATURES_LEFT.map((feat) => (
                  <div key={feat} className="flex items-center space-x-2.5 group">
                    {/* Concentric Circle Bullet in Leaf Green (#70a647) as in Suvrin Logo */}
                    <div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#003bbd] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-110">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#003bbd]" />
                    </div>
                    <span className="leading-snug text-slate-800 font-medium text-xs sm:text-[13px]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column Features */}
              <div className="space-y-3">
                {SAAS_FEATURES_RIGHT.map((feat) => (
                  <div key={feat} className="flex items-center space-x-2.5 group">
                    {/* Concentric Circle Bullet in Leaf Green (#70a647) as in Suvrin Logo */}
                    <div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#003bbd] flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-110">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#003bbd]" />
                    </div>
                    <span className="leading-snug text-slate-800 font-medium text-xs sm:text-[13px]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons Matching Reference: Solid Suvrin Blue + White Outlined */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={openTrialModal}
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-[#003bbd] hover:bg-[#002f9e] text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                {primaryCtaText}
              </button>

              <button
                type="button"
                onClick={openDemoModal}
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs sm:text-[13.5px] font-semibold transition-colors active:scale-[0.98] cursor-pointer"
              >
                {secondaryCtaText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Free Trial / Demo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-6 sm:p-8 z-10 transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <div>
                {/* Modal Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-1.5 mb-2">
                    {/* <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
                    <span className="w-2 h-2 rounded-full bg-[#70a647]" />
                    <span className="w-2 h-2 rounded-full bg-[#002f9e]" /> */}
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">
                      {modalType === "trial" ? "30-Day Free Trial" : "Schedule Live Demo"}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {modalType === "trial"
                      ? "Launch Your Odoo SaaS Instance"
                      : "Experience Odoo SaaS Toolkit"}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
                    Zero DevOps complexity. Deploy and manage hundreds of isolated Odoo ERP
                    containers in seconds.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#003bbd] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tariq@company.ae"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#003bbd] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Al-Mansoor Trading LLC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#003bbd] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Deployment Region
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#003bbd] focus:border-transparent transition-all bg-white"
                    >
                      <option value="UAE / Dubai (Middle East)">UAE / Dubai (Middle East)</option>
                      <option value="Saudi Arabia (Riyadh / Jeddah)">Saudi Arabia (Riyadh / Jeddah)</option>
                      <option value="Europe (Frankfurt)">Europe (Frankfurt)</option>
                      <option value="US East (N. Virginia)">US East (N. Virginia)</option>
                      <option value="Asia Pacific (Singapore)">Asia Pacific (Singapore)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Instance Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Looking to host 20 multi-tenant client instances with custom accounting modules."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-[13px] rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#003bbd] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-lg bg-[#003bbd] hover:bg-[#002f9e] text-white text-xs sm:text-[13px] font-semibold transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          <span>Provisioning Trial Access...</span>
                        </>
                      ) : (
                        <span>
                          {modalType === "trial" ? "Start 30-Day Free Trial" : "Request Live Demo"}
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-[#70a647] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Trial Provisioning Initiated!
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our cloud infrastructure engineers have received your request. Check your inbox at <span className="font-semibold text-slate-800">{formData.email}</span> for your instant SaaS sandbox login credentials.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#003bbd] hover:bg-[#002f9e] text-white text-xs sm:text-[13px] font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
