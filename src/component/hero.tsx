"use client";

import React from "react";
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-22 min-h-[460px] lg:min-h-[520px] flex items-center">
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
            <a
              href={ctaHref}
              onClick={(e) => {
                if (onCtaClick) {
                  e.preventDefault();
                  onCtaClick();
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
