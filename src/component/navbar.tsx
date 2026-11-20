"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-200/80 shadow-xs bg-white/98 backdrop-blur-md"
          : "border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[58px] sm:h-[64px]">
          {/* Left: Suvrin Technologies Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#003bbd] rounded-lg p-1"
              aria-label="Suvrin Technologies Home"
            >
              <Image
                src="/suvrin-logo.png"
                alt="Suvrin Technologies"
                width={150}
                height={40}
                className="h-8 sm:h-9 md:h-10 w-auto object-contain max-w-[135px] sm:max-w-[160px]"
                priority
              />
            </Link>
          </div>

          {/* Right: Phone Hotline Pill & WhatsApp Pill */}
          <div className="flex items-center space-x-2 sm:space-x-3.5">
            {/* Phone Hotline Pill */}
            <a
              href="tel:+971501359238"
              className="group inline-flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-200/90 sm:border-slate-300 hover:border-[#003bbd] bg-white hover:bg-blue-50/40 text-slate-800 transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#003bbd]"
              aria-label="Call Suvrin Direct GCC Desk"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#003bbd] group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
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
              <span className="hidden min-[420px]:inline text-[12px] sm:text-[13.5px] font-semibold text-slate-800 tracking-tight whitespace-nowrap">
                +971 501 359 238
              </span>
              <span className="inline min-[420px]:hidden text-[11.5px] font-semibold text-slate-800">
                Call
              </span>
            </a>

            {/* WhatsApp Pill */}
            <a
              href="https://wa.me/971501359238?text=Hello%20Suvrin%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-300 hover:border-emerald-500 bg-[#f0f9f4] hover:bg-[#e4f4ec] text-[#15803d] transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-500"
              aria-label="Chat on WhatsApp"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16a34a] fill-current group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="text-[12px] sm:text-[13.5px] font-semibold text-[#15803d] tracking-tight">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
