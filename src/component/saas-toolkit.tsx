"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface SaasToolkitProps {
  badgeText?: string;
  titleMain?: string;
  titleGradient?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
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

export default function SaasToolkit({
  badgeText = "Suvrin SaaS Infrastructure",
  titleMain = "No More Scaling Barriers!",
  titleGradient = "Create Hundreds of Odoo Instances in Minutes with Suvrin Odoo SaaS Toolkit!",
  description = "Eliminate deployment delays, DevOps complexity, & scaling issues with Suvrin Odoo SaaS Toolkit. Now, launch, manage, and monitor your Odoo SaaS efficiently with rapid deployments and zero DevOps dependency. Built for high scalability, Suvrin Odoo SaaS allows you to create hundreds to thousands of Odoo instances within minutes. Powered by enterprise-grade features, it delivers secure, reliable Odoo hosting so that you can scale with confidence.",
  primaryCtaText = "Get your 30-day Free Trial",
  primaryCtaHref = "#contact",
  secondaryCtaText = "Try Now",
  secondaryCtaHref = "#contact",
  imageSrc = "/saas-toolkit.jpg",
}: SaasToolkitProps) {
  return (
    <section
      id="saas-toolkit"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans scroll-mt-20"
    >
      {/* Decorative Technical Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Gradient Glows in Suvrin Colors (Royal Blue, Leaf Green, Navy) */}
      <div
        className="absolute top-1/2 -left-40 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-[#0052cc]/15 via-[#70a647]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-bl from-[#70a647]/15 via-[#0052cc]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Suvrin Technologies Deployment Build Dashboard Graphic (Cols 6 on lg) */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Outer Ambient Glow matching Dashboard Green/Blue Theme */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#0052cc]/25 via-[#70a647]/25 to-[#0a1931]/30 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* 1.5px Suvrin 3-Color Gradient Frame */}
              <div className="relative rounded-[26px] p-[1.5px] bg-gradient-to-br from-[#0052cc]/80 via-[#70a647]/70 to-[#0a1931] shadow-2xl shadow-blue-950/20 overflow-hidden">
                <div className="relative rounded-[24.5px] overflow-hidden bg-slate-950">
                  <Image
                    src={imageSrc}
                    alt="Suvrin Technologies Odoo SaaS Deployment Build Dashboard"
                    width={1024}
                    height={774}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Copy, Feature Bullets & CTAs (Cols 6 on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category / Badge Row in Suvrin Colors */}
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#003bbd]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#70a647]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#002f9e]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                {badgeText}
              </span>
            </div>

            {/* Primary Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-2 sm:mb-3">
              {titleMain}
            </h2>

            {/* Gradient Colored Subtitle in Suvrin Project Colors */}
            <h3 className="text-lg sm:text-xl lg:text-[23px] font-bold leading-snug tracking-tight mb-4 sm:mb-5">
              <span className="bg-gradient-to-r from-[#0052cc] via-[#0066eb] to-[#70a647] bg-clip-text text-transparent">
                {titleGradient}
              </span>
            </h3>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-600 leading-[1.72] mb-6 sm:mb-8">
              {description}
            </p>

            {/* 2-Column Feature Bullets with Suvrin Brand Concentric Rings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-8 sm:mb-10 text-xs sm:text-[13px] text-slate-800 font-medium">
              {/* Left Column Features */}
              <div className="space-y-3">
                {SAAS_FEATURES_LEFT.map((feat) => (
                  <div key={feat} className="flex items-center space-x-2.5 group">
                    <div className="w-4 h-4 rounded-full border-[2px] border-[#0052cc] flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#70a647] group-hover:scale-125 transition-transform" />
                    </div>
                    <span className="leading-snug text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Right Column Features */}
              <div className="space-y-3">
                {SAAS_FEATURES_RIGHT.map((feat) => (
                  <div key={feat} className="flex items-center space-x-2.5 group">
                    <div className="w-4 h-4 rounded-full border-[2px] border-[#0052cc] flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#70a647] group-hover:scale-125 transition-transform" />
                    </div>
                    <span className="leading-snug text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0a1931] via-[#003d99] to-[#0052cc] hover:from-[#0052cc] hover:to-[#70a647] transition-all duration-300 shadow-md shadow-blue-950/20 active:scale-[0.99] cursor-pointer"
              >
                <span>{primaryCtaText}</span>
              </Link>

              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-800 hover:text-[#0052cc] bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0052cc] transition-all duration-200 shadow-xs active:scale-[0.99] cursor-pointer"
              >
                <span>{secondaryCtaText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
