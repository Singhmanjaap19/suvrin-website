"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 font-sans select-none sm:select-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10">
        {/* Top Section: Logo & Description on Left, Address & Direct Desk on Right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 sm:gap-10">
          {/* Left Column: Suvrin Technologies Logo & Mission */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-[#003bbd] rounded-lg mb-4"
              aria-label="Suvrin Technologies Home"
            >
              <Image
                src="/suvrin-logo.png"
                alt="Suvrin Technologies"
                width={150}
                height={40}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              Authoritative enterprise digital transformation and Odoo ERP
              implementation partner for industrial businesses across Dubai, Abu
              Dhabi, and the GCC.
            </p>
          </div>

          {/* Right Column: Entity Details, Marina Address & Direct Contacts */}
          <div className="text-left md:text-right space-y-1">
            {/* Entity Name */}
            <h4 className="text-xs sm:text-[14px] font-bold text-slate-900 tracking-tight">
              Suvrin Technologies / Maxcode Solutions LLC
            </h4>

            {/* Address */}
            <p className="text-xs sm:text-[12.5px] text-slate-500">
              Living Marina Gate, D94 M Floor, Jumeirah, Dubai Marina, UAE
            </p>

            {/* Direct GCC Desk Phone Link */}
            <div>
              <a
                href="tel:+971501359238"
                className="inline-block text-xs sm:text-[13px] font-semibold text-[#003bbd] hover:text-[#002f9e] hover:underline transition-colors"
              >
                Direct GCC Desk: +971 501 359 238
              </a>
            </div>

            {/* Email & Global Locations */}
            <p className="text-[11.5px] sm:text-xs text-slate-400 pt-0.5">
              <span>Email: </span>
              <a
                href="mailto:sudeep@suvrin.com"
                className="hover:text-slate-600 hover:underline transition-colors"
              >
                sudeep@suvrin.com
              </a>
              <span className="mx-1.5">•</span>
              <span>Global: India (Delhi NCR)</span>
              <span className="mx-1.5">•</span>
              <span>USA (Delaware)</span>
            </p>
          </div>
        </div>

        {/* Thin Horizontal Divider Line */}
        <div className="border-t border-slate-100 mt-8 sm:mt-10 mb-6 sm:mb-8" />

        {/* Bottom Bar: Copyright & Compliance Links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] sm:text-xs text-slate-400">
          {/* Copyright */}
          <div>
            <p>
              © 2026 Suvrin Technologies. In collaboration with Maxcode
              Solutions LLC, Dubai.
            </p>
          </div>

          {/* Compliance & Legal Links */}
          <div className="flex items-center space-x-2">
            <Link
              href="#privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="#terms"
              className="hover:text-slate-600 transition-colors"
            >
              Terms
            </Link>
            <span>•</span>
            <span>ISO 9001 / GCC Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
