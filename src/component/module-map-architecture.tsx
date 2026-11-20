"use client";

import React, { useState } from "react";

export interface ModuleItem {
  id: string;
  name: string;
  category: "operations" | "financial" | "growth" | "workforce";
  description?: string;
}

const LEFT_MODULES = [
  { id: "crm", name: "CRM & Pipeline" },
  { id: "sales", name: "Sales & Billing" },
  { id: "inventory", name: "Inventory & Supply" },
];

const RIGHT_MODULES = [
  { id: "manufacturing", name: "Manufacturing & MRP" },
  { id: "accounting", name: "Accounting & VAT" },
  { id: "hr", name: "HR & Workforce" },
];

const CONNECTED_EXTENSIONS = [
  "Custom Modules",
  "AI & OCR Automation",
  "WhatsApp Business",
  "E-Commerce & POS",
  "Bank & API Connectors",
];

export default function ModuleMapArchitecture() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <section
      id="architecture"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden font-sans select-none sm:select-auto"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          {/* Module Map Architecture Tag (Using Suvrin Blue instead of green) */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/60 text-[#003bbd] text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            {/* <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
            <span className="w-2 h-2 rounded-full bg-[#70a647]" />
            <span className="w-2 h-2 rounded-full bg-[#002f9e]" /> */}
            <span className="ml-1 tracking-widest text-[11px] sm:text-xs">
              MODULE MAP ARCHITECTURE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight mb-3">
            One Database, Every Department
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-[14.5px] text-slate-600 leading-relaxed max-w-2xl font-normal">
            Standard modules are configured around a single Odoo core; custom
            modules, AI features, and connectors attach to the same data model —
            no sync jobs or data silos between systems.
          </p>
        </div>

        {/* Large Architecture Canvas Card */}
        <div className="relative rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/40 via-white to-blue-50/20 p-6 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/40 overflow-hidden">
          {/* Inner Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="text-lg sm:text-2xl lg:text-[28px] font-extrabold text-slate-800 tracking-tight uppercase">
              UNIFIED ODOO ENTERPRISE ARCHITECTURE
            </h3>
            <p className="text-[11px] sm:text-[13px] font-bold text-slate-400 tracking-[0.22em] uppercase mt-1 sm:mt-1.5">
              SINGLE SOURCE OF TRUTH • ZERO DATA SILOS
            </p>
          </div>

          {/* ================= DESKTOP & TABLET DIAGRAM VIEW (>= md) ================= */}
          <div className="hidden md:flex items-center justify-between max-w-5xl mx-auto relative min-h-[300px]">
            {/* LEFT 3 MODULE CARDS */}
            <div className="flex flex-col justify-between h-[230px] w-[210px] lg:w-[240px] shrink-0 z-10">
              {LEFT_MODULES.map((item) => {
                const isActive = activeModule === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveModule(item.id)}
                    onMouseLeave={() => setActiveModule(null)}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-2xl bg-white border transition-all duration-200 cursor-default ${
                      isActive
                        ? "border-[#003bbd] shadow-md shadow-blue-500/15 translate-x-1"
                        : "border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    {/* Blue Bullet Point (Replaces green as requested) */}
                    <span className="w-2.5 h-2.5 rounded-full bg-[#003bbd] ring-4 ring-blue-100 shrink-0" />
                    <span className="text-xs sm:text-[13.5px] font-semibold text-slate-800 tracking-tight">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* LEFT SVG CONNECTOR (Smooth Bezier branches converging into center) */}
            <div className="flex-1 h-[230px] px-1 relative">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 100 230"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Branch 1: Top Card to Center */}
                <path
                  d="M 0 25 C 60 25, 55 115, 100 115"
                  stroke={activeModule === "crm" ? "#003bbd" : "#cbd5e1"}
                  strokeWidth={activeModule === "crm" ? 2.5 : 1.75}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-200"
                />
                {/* Branch 2: Middle Card to Center */}
                <path
                  d="M 0 115 L 100 115"
                  stroke={activeModule === "sales" ? "#003bbd" : "#cbd5e1"}
                  strokeWidth={activeModule === "sales" ? 2.5 : 1.75}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-200"
                />
                {/* Branch 3: Bottom Card to Center */}
                <path
                  d="M 0 205 C 60 205, 55 115, 100 115"
                  stroke={activeModule === "inventory" ? "#003bbd" : "#cbd5e1"}
                  strokeWidth={activeModule === "inventory" ? 2.5 : 1.75}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-200"
                />

                {/* Connection Junction Dot */}
                <circle
                  cx="100"
                  cy="115"
                  r="3.5"
                  fill="#003bbd"
                  className="ring-4 ring-blue-100"
                />
              </svg>
            </div>

            {/* CENTER BLUE CARD: Odoo Enterprise Core */}
            <div className="relative w-[210px] lg:w-[235px] h-[245px] shrink-0 z-20">
              {/* Outer Glow Flare */}
              <div
                className="absolute -inset-3 bg-[#003bbd]/20 rounded-3xl blur-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Core Container */}
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1d63ed] via-[#003bbd] to-[#002f9e] p-5 flex flex-col items-center justify-center text-center shadow-2xl shadow-blue-900/35 border border-white/25">
                {/* High-Fidelity 3D Database Cylinder */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-1">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    className="w-full h-full drop-shadow-md"
                  >
                    <defs>
                      <linearGradient
                        id="dbTopCap"
                        x1="20"
                        y1="18"
                        x2="80"
                        y2="34"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="60%" stopColor="#dbeafe" />
                        <stop offset="100%" stopColor="#bfdbfe" />
                      </linearGradient>
                      <linearGradient
                        id="dbBody1"
                        x1="20"
                        y1="26"
                        x2="80"
                        y2="48"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.95" />
                      </linearGradient>
                      <linearGradient
                        id="dbBody2"
                        x1="20"
                        y1="46"
                        x2="80"
                        y2="68"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient
                        id="dbBody3"
                        x1="20"
                        y1="64"
                        x2="80"
                        y2="84"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#cbd5e1" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                    </defs>

                    {/* Bottom Layer Cylinder */}
                    <path
                      d="M 22 62 C 22 72 78 72 78 62 L 78 74 C 78 84 22 84 22 74 Z"
                      fill="url(#dbBody3)"
                    />
                    <ellipse cx="50" cy="62" rx="28" ry="7.5" fill="#93c5fd" />

                    {/* Middle Layer Cylinder */}
                    <path
                      d="M 22 44 C 22 54 78 54 78 44 L 78 56 C 78 66 22 66 22 56 Z"
                      fill="url(#dbBody2)"
                    />
                    <ellipse cx="50" cy="44" rx="28" ry="7.5" fill="#bfdbfe" />

                    {/* Top Layer Cylinder & Cap */}
                    <path
                      d="M 22 26 C 22 36 78 36 78 26 L 78 38 C 78 48 22 48 22 38 Z"
                      fill="url(#dbBody1)"
                    />
                    <ellipse cx="50" cy="26" rx="28" ry="8" fill="url(#dbTopCap)" />
                    <ellipse
                      cx="50"
                      cy="25"
                      rx="24"
                      ry="6"
                      fill="#ffffff"
                      fillOpacity="0.65"
                    />
                  </svg>
                </div>

                {/* Database Title */}
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight mt-1">
                  Odoo Enterprise Core
                </h4>
                <p className="text-[11px] sm:text-xs text-blue-100 font-medium mt-0.5">
                  Single Unified Database
                </p>

                {/* Real-Time Sync Pill */}
                <div className="mt-3">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10.5px] font-semibold tracking-wide shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                    Real-Time Sync
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SVG CONNECTOR (Smooth Bezier branches fanning out from center) */}
            <div className="flex-1 h-[230px] px-1 relative">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 100 230"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Connection Junction Dot */}
                <circle
                  cx="0"
                  cy="115"
                  r="3.5"
                  fill="#003bbd"
                  className="ring-4 ring-blue-100"
                />

                {/* Branch 1: Center to Top Card */}
                <path
                  d="M 0 115 C 45 115, 40 25, 100 25"
                  stroke={activeModule === "manufacturing" ? "#003bbd" : "#cbd5e1"}
                  strokeWidth={activeModule === "manufacturing" ? 2.5 : 1.75}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-200"
                />
                {/* Branch 2: Center to Middle Card */}
                <path
                  d="M 0 115 L 100 115"
                  stroke={activeModule === "accounting" ? "#003bbd" : "#cbd5e1"}
                  strokeWidth={activeModule === "accounting" ? 2.5 : 1.75}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-200"
                />
                {/* Branch 3: Center to Bottom Card */}
                <path
                  d="M 0 115 C 45 115, 40 205, 100 205"
                  stroke={activeModule === "hr" ? "#003bbd" : "#cbd5e1"}
                  strokeWidth={activeModule === "hr" ? 2.5 : 1.75}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-200"
                />
              </svg>
            </div>

            {/* RIGHT 3 MODULE CARDS */}
            <div className="flex flex-col justify-between h-[230px] w-[210px] lg:w-[240px] shrink-0 z-10">
              {RIGHT_MODULES.map((item) => {
                const isActive = activeModule === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveModule(item.id)}
                    onMouseLeave={() => setActiveModule(null)}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-2xl bg-white border transition-all duration-200 cursor-default ${
                      isActive
                        ? "border-[#003bbd] shadow-md shadow-blue-500/15 -translate-x-1"
                        : "border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    {/* Blue Bullet Point (Replaces green as requested) */}
                    <span className="w-2.5 h-2.5 rounded-full bg-[#003bbd] ring-4 ring-blue-100 shrink-0" />
                    <span className="text-xs sm:text-[13.5px] font-semibold text-slate-800 tracking-tight">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= MOBILE DIAGRAM VIEW (< md) ================= */}
          <div className="flex md:hidden flex-col items-center space-y-6">
            {/* Center Core on Top for Mobile Hierarchy */}
            <div className="relative w-full max-w-[280px] h-[220px] rounded-3xl bg-gradient-to-br from-[#1d63ed] via-[#003bbd] to-[#002f9e] p-5 flex flex-col items-center justify-center text-center shadow-xl shadow-blue-900/30 border border-white/20">
              <div className="w-16 h-16 flex items-center justify-center mb-1">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path
                    d="M 22 62 C 22 72 78 72 78 62 L 78 74 C 78 84 22 84 22 74 Z"
                    fill="#3b82f6"
                  />
                  <ellipse cx="50" cy="62" rx="28" ry="7.5" fill="#93c5fd" />
                  <path
                    d="M 22 44 C 22 54 78 54 78 44 L 78 56 C 78 66 22 66 22 56 Z"
                    fill="#60a5fa"
                  />
                  <ellipse cx="50" cy="44" rx="28" ry="7.5" fill="#bfdbfe" />
                  <path
                    d="M 22 26 C 22 36 78 36 78 26 L 78 38 C 78 48 22 48 22 38 Z"
                    fill="#e2e8f0"
                  />
                  <ellipse cx="50" cy="26" rx="28" ry="8" fill="#ffffff" />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-white tracking-tight">
                Odoo Enterprise Core
              </h4>
              <p className="text-[11px] text-blue-100 font-medium">
                Single Unified Database
              </p>
              <span className="mt-2.5 inline-flex items-center px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                Real-Time Sync
              </span>
            </div>

            {/* All 6 Modules Stacked Responsively */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[...LEFT_MODULES, ...RIGHT_MODULES].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-2xs"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#003bbd] ring-4 ring-blue-100 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CONNECTED EXTENSIONS & ECOSYSTEM (Bottom Bar) ================= */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-200/80 text-center">
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 tracking-[0.18em] uppercase mb-4 sm:mb-5">
              CONNECTED EXTENSIONS & ECOSYSTEM
            </h4>

            {/* Pill Tags Row */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {CONNECTED_EXTENSIONS.map((pill, idx) => (
                <div
                  key={idx}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200/90 hover:border-[#003bbd] hover:text-[#003bbd] hover:shadow-xs text-xs sm:text-[13px] font-medium text-slate-700 transition-all duration-200 cursor-default shadow-2xs"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
