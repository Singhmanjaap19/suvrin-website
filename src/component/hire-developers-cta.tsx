"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export interface HireDevelopersCtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export interface DeveloperInquiryForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function HireDevelopersCta({
  title = "Hire Our Odoo Developers",
  description = "Whether you are planning to implement Odoo for the first time or want to customize or optimize your existing Odoo implementation, our seasoned Odoo developers on demand are here to help you every step of the way.",
  buttonText = "Contact Us",
}: HireDevelopersCtaProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DeveloperInquiryForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Close modal on Escape key press
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

  // Silent Background Submission (No WhatsApp popup for user, admin receives notification)
  const onSubmit = async (data: DeveloperInquiryForm) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.warn("Background notification delivery attempt:", err);
    }

    // Immediately show Thank You state to the user without redirecting or opening WhatsApp
    setSubmittedName(data.name);
    setSubmitted(true);
    reset();
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedName("");
    reset();
    setIsModalOpen(false);
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Banner Card styled with Suvrin Brand Gradient & Lighting */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden p-6 sm:p-10 lg:p-16 text-center shadow-2xl shadow-blue-900/25 ring-1 ring-white/20">
          {/* Suvrin Project Color Gradient */}
          <div
            className="absolute inset-0 bg-[#0043a8]"
            aria-hidden="true"
          />

          {/* Ambient Lighting Spots (Soft Glowing Radial Flares) */}
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#0066eb]/40 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#70a647]/35 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 rounded-full bg-blue-400/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle Concentric Background Circles for Depth */}
          <div
            className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full border border-white/10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -top-16 -right-16 w-60 h-60 rounded-full border border-white/10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Content Container */}
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Top Micro-Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold uppercase tracking-wider mb-5 sm:mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
              <span className="w-2 h-2 rounded-full bg-[#70a647]" />
              <span className="w-2 h-2 rounded-full bg-[#002f9e]" />
              <span className="ml-1">Certified Suvrin Odoo Specialists</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 sm:mb-5">
              {title}
            </h2>

            {/* Description */}
            <p className="text-white/90 text-xs sm:text-[14.5px] lg:text-[15.5px] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-normal">
              {description}
            </p>

            {/* Action Button: "Contact Us" opens modal */}
            <div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-900 bg-white hover:bg-slate-50 hover:text-[#003bbd] transition-all duration-200 shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] cursor-pointer group"
              >
                <span>{buttonText}</span>
                <svg
                  className="ml-2 w-4 h-4 text-slate-700 group-hover:text-[#003bbd] group-hover:translate-x-1 transition-all"
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== CONTACT US MODAL ==================== */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop with Blur */}
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            aria-hidden="true"
          />

          {/* Modal Card (Simple, clean, gradient removed from top) */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 sm:p-7 pb-4 flex items-start justify-between border-b border-slate-100">
              <div>
                <div className="inline-flex items-center space-x-1.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
                  <span className="w-2 h-2 rounded-full bg-[#70a647]" />
                  <span className="w-2 h-2 rounded-full bg-[#002f9e]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Suvrin Technologies
                  </span>
                </div>
                <h3
                  id="modal-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Hire Expert Odoo Developers
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 mt-1">
                  Connect with our GCC senior technical team within 2 hours.
                </p>
              </div>

              {/* Close Button (X) */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 pt-5">
              {submitted ? (
                /* Success Confirmation State (Thank you message without opening WhatsApp) */
                <div className="text-center py-7 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-[#70a647] text-[#70a647] mx-auto flex items-center justify-center shadow-sm">
                    <svg
                      className="w-8 h-8"
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
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Thank You, {submittedName || "Partner"}!
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been submitted successfully. Our senior Odoo technical team has received your details and will connect with you within 2 hours.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-7 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#003bbd] hover:bg-[#002f9e] transition-colors cursor-pointer shadow-sm hover:shadow"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Simple Form with React Hook Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("name", {
                          required: "Full name is required",
                          minLength: { value: 2, message: "Min 2 characters" },
                        })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003bbd]/30 focus:border-[#003bbd] transition-all bg-slate-50/50"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                          minLength: { value: 6, message: "Valid phone required" },
                        })}
                        placeholder="+971 50 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003bbd]/30 focus:border-[#003bbd] transition-all bg-slate-50/50"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1">
                          {errors.phone.message}
                        </p>
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
                      {...register("email", {
                        required: "Work email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      placeholder="john@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003bbd]/30 focus:border-[#003bbd] transition-all bg-slate-50/50"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Requirements <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      {...register("message", {
                        required: "Please enter brief project requirements",
                      })}
                      placeholder="Tell us about your Odoo version, custom modules, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#003bbd]/30 focus:border-[#003bbd] transition-all bg-slate-50/50 resize-none"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#003bbd] hover:bg-[#002f9e] transition-all duration-200 shadow-md shadow-blue-900/20 active:scale-[0.99] disabled:opacity-60 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth={4}
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Developer Inquiry</span>
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
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Direct Reach Out Alternative in Modal Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span className="font-medium text-slate-600">
                  Or connect instantly:
                </span>
                <div className="flex items-center space-x-4">
                  <a
                    href="tel:+971501359238"
                    className="inline-flex items-center space-x-1.5 text-[#003bbd] hover:underline font-medium"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+971 501 359 238</span>
                  </a>

                  <a
                    href="https://wa.me/919306695594?text=Hello%20Suvrin%20Technologies%2C%20I%20would%20like%20to%20discuss%20hiring%20an%20Odoo%20developer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#70a647] hover:underline font-medium"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
