"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface BrandLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
}

// Row 1 Brands (Exact sequence from reference image)
const ROW_1_BRANDS: BrandLogo[] = [
  { id: "suzuki", name: "Suzuki", src: "/brands/suzuki.png", alt: "Suzuki logo" },
  { id: "hitachi", name: "Hitachi", src: "/brands/hitachi.png", alt: "Hitachi logo" },
  { id: "dlf", name: "DLF", src: "/brands/dlf.png", alt: "DLF logo" },
  { id: "apollo", name: "Apollo", src: "/brands/apollo.svg", alt: "Apollo logo" },
  { id: "douglas-elliman", name: "Douglas Elliman", src: "/brands/douglas-elliman.png", alt: "Douglas Elliman logo" },
  { id: "deloitte", name: "Deloitte", src: "/brands/deloitte.png", alt: "Deloitte logo" },
  { id: "ey", name: "EY", src: "/brands/ey.png", alt: "EY logo" },
  { id: "kpmg", name: "KPMG", src: "/brands/kpmg.jpg", alt: "KPMG logo" },
  { id: "honda", name: "Honda", src: "/brands/honda.png", alt: "Honda logo" },
];

// Row 2 Brands (Exact sequence from reference image)
const ROW_2_BRANDS: BrandLogo[] = [
  { id: "ficci", name: "FICCI", src: "/brands/ficci.png", alt: "FICCI logo" },
  { id: "conic-automotive", name: "Conic Automotive", src: "/brands/conic-automotive.webp", alt: "Conic Automotive logo" },
  { id: "hazet", name: "HAZET", src: "/brands/hazet.png", alt: "HAZET logo" },
  { id: "velocity", name: "Velocity Eyewear", src: "/brands/velocity.svg", alt: "Velocity Eyewear logo" },
  { id: "compass", name: "Compass", src: "/brands/compass.svg", alt: "Compass logo" },
  { id: "ezma", name: "EZMA Fine Cashmere", src: "/brands/ezma.jpg", alt: "EZMA Fine Cashmere logo" },
  { id: "charu-parashar", name: "Charu Parashar", src: "/brands/charu-parashar.png", alt: "Charu Parashar logo" },
  { id: "udrive", name: "Udrive", src: "/brands/udrive.png", alt: "Udrive logo" },
  { id: "bfast", name: "BFAST", src: "/brands/bfast.svg", alt: "BFAST logo" },
  { id: "and-precision", name: "AND Discover Precision", src: "/brands/and-precision.png", alt: "AND Discover Precision logo" },
];

// Tripled to guarantee continuous, seamless infinite loop on any screen resolution
const MARQUEE_ROW_1 = [...ROW_1_BRANDS, ...ROW_1_BRANDS, ...ROW_1_BRANDS];
const MARQUEE_ROW_2 = [...ROW_2_BRANDS, ...ROW_2_BRANDS, ...ROW_2_BRANDS];

export default function Banner() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      aria-label="Our Trusted Partners"
      className="relative w-full bg-slate-50/70 py-16 sm:py-20 lg:py-24 border-b border-slate-100 select-none overflow-hidden font-sans"
    >
      {/* Hardware-Accelerated Marquee Styles */}
      <style>{`
        @keyframes marquee-scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
            -webkit-transform: translate3d(-33.333333%, 0, 0);
          }
        }
        @keyframes marquee-scroll-right {
          0% {
            transform: translate3d(-33.333333%, 0, 0);
            -webkit-transform: translate3d(-33.333333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
          }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-scroll-left 42s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-scroll-right 46s linear infinite;
        }
        .marquee-container:hover .marquee-track-left,
        .marquee-container:hover .marquee-track-right {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Header Section (Matching Reference Exactly) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        {/* Micro Tag: A TRUSTED ODOO SERVICE PROVIDER */}
        <div className="inline-flex items-center space-x-1.5 text-[11px] sm:text-xs font-bold text-[#003bbd] tracking-[0.2em] uppercase mb-2">
          <span>A TRUSTED ODOO SERVICE PROVIDER</span>
        </div>

        {/* Heading: Our Trusted Partners */}
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight">
          Our Trusted Partners
        </h2>
      </div>

      {/* Two-Row Infinite Marquee Area */}
      <div
        className="marquee-container relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left Edge Horizon Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Right Edge Horizon Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Marquee Content: 2 Rows of Bordered Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          {/* Row 1: Leftward Scrolling Cards */}
          <div
            className="marquee-track-left flex items-center space-x-3.5 sm:space-x-4 lg:space-x-5"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {MARQUEE_ROW_1.map((brand, idx) => (
              <div
                key={`r1-${brand.id}-${idx}`}
                className="w-40 sm:w-48 lg:w-52 h-18 sm:h-20 shrink-0 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex items-center justify-center p-3.5 sm:p-4 group cursor-default"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={150}
                    height={55}
                    className="max-h-9 sm:max-h-11 max-w-[80%] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Rightward Scrolling Cards (Staggered Offset) */}
          <div
            className="marquee-track-right flex items-center space-x-3.5 sm:space-x-4 lg:space-x-5"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {MARQUEE_ROW_2.map((brand, idx) => (
              <div
                key={`r2-${brand.id}-${idx}`}
                className="w-40 sm:w-48 lg:w-52 h-18 sm:h-20 shrink-0 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex items-center justify-center p-3.5 sm:p-4 group cursor-default"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={150}
                    height={55}
                    className="max-h-9 sm:max-h-11 max-w-[80%] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
