"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface HeroProps {
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  onCtaClick?: () => void;
}

export default function Hero({
  badgeText = "DUBAI & UAE BUSINESS ERP",
  titleLine1 = "Business ERP for",
  titleLine2 = "Dubai & UAE Industry",
  subtitle = "Connect Production, Multi-Warehouse Inventory, Procurement & UAE VAT Accounting",
  description = "Suvrin helps UAE businesses implement and customise Odoo ERP around real-world factory routing, finite capacity, scrap control, and bilingual compliance across Dubai, Sharjah, and Abu Dhabi plants.",
  ctaText = "Schedule a Discovery Call",
  ctaHref = "#contact",
  imageSrc = "/client.png",
  // imageSrc = "/hero-uae-highfive.webp",
  onCtaClick,
}: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Close modal on Escape key press and manage body scroll
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
          message: formData.message || "Discovery call request from Hero section",
          engagementType: "Discovery Call (Hero)",
        }),
      });
    } catch (err) {
      console.warn("Discovery call inquiry submission:", err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setErrors({});
  };
  return (
    <section className="relative w-full overflow-hidden bg-white text-slate-900 border-b border-slate-100 select-none sm:select-auto min-h-[460px] lg:min-h-[520px] font-sans">
      {/* Background Subtle Technical Grid */}
      

      {/* Right-Side Clean High-Five Photography (No Text Artifacts) */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full md:w-[48%] lg:w-[50%] xl:w-[52%] pointer-events-none md:pointer-events-auto overflow-hidden opacity-20 sm:opacity-35 md:opacity-100 transition-opacity duration-300 z-0 md:z-[5]"
        aria-hidden="true"
      >
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt="Suvrin Odoo Business ERP Dubai & UAE Industry"
            fill
            priority
            quality={98}
            className="object-cover object-[center_top] select-none"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Smooth left-edge fade into pure white */}
          <div className="absolute inset-y-0 left-0 w-32 sm:w-44 lg:w-64 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />

          {/* Subtle bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 min-h-[460px] lg:min-h-[520px] flex items-center">
        <div className="relative w-full md:max-w-[540px] lg:max-w-[600px] xl:max-w-[640px]">
          {/* Top Category Tag in Suvrin Blue with 3 Brand Dots */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-200/80 bg-blue-50/70 text-[#003bbd] text-xs font-bold tracking-wider uppercase mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003bbd]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#70a647]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#002f9e]" />
            <span className="tracking-widest text-[11px] sm:text-xs">
              {badgeText}
            </span>
          </div>

          {/* Main Headline: Responsive clean typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-slate-900 tracking-tight leading-[1.16] mb-3 sm:mb-4">
            <span className="block">{titleLine1}</span>
            <span className="block text-slate-900">{titleLine2}</span>
          </h1>

          {/* Subtitle Headline */}
          <p className="text-xs sm:text-[13.5px] md:text-[14.5px] font-bold text-slate-800 tracking-tight leading-snug mb-2.5 sm:mb-3 max-w-xl">
            {subtitle}
          </p>

          {/* Supporting Paragraph Description */}
          <p className="text-xs sm:text-[13.5px] md:text-[14px] text-slate-600 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal">
            {description}
          </p>

          {/* Call to Action Button in Suvrin Blue with Calendar Icon */}
          <div>
            <button
              type="button"
              onClick={() => {
                if (onCtaClick) {
                  onCtaClick();
                } else {
                  setIsModalOpen(true);
                  setSubmitted(false);
                }
              }}
              className="inline-flex items-center justify-center px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#003bbd] hover:bg-[#002f9e] shadow-md shadow-blue-800/20 hover:shadow-lg hover:shadow-blue-900/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003bbd] group"
            >
              {/* Calendar Icon on Left */}
              <svg
                className="w-4 h-4 mr-2.5 text-white shrink-0 group-hover:scale-105 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{ctaText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= SCHEDULE A DISCOVERY CALL MODAL ================= */}
      {isModalOpen && (
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
            aria-labelledby="hero-modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center space-x-1.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
                  <span className="w-2 h-2 rounded-full bg-[#70a647]" />
                  <span className="w-2 h-2 rounded-full bg-[#002f9e]" />
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Dubai &amp; UAE ERP
                  </span>
                </div>
                <h3
                  id="hero-modal-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Schedule a Discovery Call
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Connect with a senior UAE Odoo ERP implementation architect.
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
                    Your discovery call request has been received. Our senior Odoo technical architect will contact you within 2 business hours.
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
                /* Discovery Call Form */
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

                  {/* Operational Notes / Scope */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Operational Focus / Requirements <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Manufacturing routing, multi-warehouse in JAFZA/DIC, FTA VAT accounting..."
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
                        <span>Schedule Free Discovery Call</span>
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
