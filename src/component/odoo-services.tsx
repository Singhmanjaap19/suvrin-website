"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export interface OdooServiceItem {
  id: string;
  name: string;
  tagline: string;
  title: string;
  description: string;
  aiDescription: string;
  features: string[];
  metricLabel: string;
  metricValue: string;
}

const ODOO_SERVICES: OdooServiceItem[] = [
  {
    id: "implementation",
    name: "Odoo Implementation",
    tagline: "End-to-End Enterprise ERP Rollout & Localization",
    title: "Odoo Implementation Services",
    description:
      "Accelerate your enterprise digital transformation with Suvrin’s certified Odoo implementation methodology. From comprehensive business process analysis and workflow blueprinting to multi-company configuration and go-live deployment, our team ensures a frictionless rollout tailored to your exact industry requirements across Dubai, Abu Dhabi, and the GCC.",
    aiDescription:
      "AI-assisted business mapping and automated data validation drastically accelerate your implementation timeline, cutting risk by 45% and eliminating redundant manual data verification.",
    features: [
      "Turnkey Multi-Company & Multi-Currency Setup",
      "UAE FTA & Saudi ZATCA Phase 2 E-Invoicing Compliance",
      "Custom Role-Based Access & Security Matrices",
      "Onsite & Remote User Training with Post-Go-Live SLA",
    ],
    metricLabel: "On-Time Go-Live Rate",
    metricValue: "99.4%",
  },
  {
    id: "migration",
    name: "Odoo Migration",
    tagline: "Zero Data-Loss Version Upgrades & Legacy Transitions",
    title: "Seamless Odoo Version & Data Migration",
    description:
      "Upgrade from older Odoo versions (Community or Enterprise) or migrate from legacy ERPs like SAP, Microsoft Dynamics, and Oracle to the latest Odoo release without downtime. At Suvrin, our senior technical architects perform rigorous schema audits, automated data cleansing, and custom module refactoring to ensure flawless business continuity.",
    aiDescription:
      "Proprietary AI schema converters analyze legacy customizations, flag code deprecations, and refactor module dependencies with 99.8% data fidelity.",
    features: [
      "Legacy ERP to Odoo Full Data Migration",
      "Direct Version Upgrades (v14, v15, v16, v17 to v18+)",
      "Zero-Downtime Database Migration Protocols",
      "Historical Financial & Inventory Ledger Reconciliations",
    ],
    metricLabel: "Data Integrity Guaranteed",
    metricValue: "100%",
  },
  {
    id: "support-maintenance",
    name: "Odoo Support & Maintenance",
    tagline: "24/7 Proactive Monitoring & Enterprise SLA",
    title: "24/7 Managed Odoo Support & Maintenance",
    description:
      "Ensure peak operational performance and business continuity with Suvrin’s dedicated Odoo support desk. Our GCC-based team delivers real-time infrastructure monitoring, emergency bug resolution, security patch deployments, and periodic performance tuning to keep your operations running at full throttle.",
    aiDescription:
      "AI predictive monitoring proactively monitors PostgreSQL query execution times and server resource utilization, identifying bottlenecks before they impact your daily business transactions.",
    features: [
      "Guaranteed 15-Minute Critical SLA Response Time",
      "Regular Security Vulnerability Audits & Patching",
      "PostgreSQL Database Tuning & Index Optimization",
      "Dedicated Account Manager & GCC Hotline Support",
    ],
    metricLabel: "System Uptime Maintained",
    metricValue: "99.98%",
  },
  {
    id: "customization",
    name: "Odoo Customization",
    tagline: "Tailored Workflows Designed Around Your Business",
    title: "Bespoke Odoo ERP Customization",
    description:
      "Every business has distinctive operational nuances that off-the-shelf software cannot address. Suvrin customizes core Odoo modules—including CRM, Sales, Purchase, Inventory, Manufacturing (MRP), and HR—adapting the ERP to your exact operational workflows while maintaining standard upgrade compatibility.",
    aiDescription:
      "AI-powered rapid prototyping generates custom field logic, automated approval triggers, and business validations in minutes rather than weeks.",
    features: [
      "Custom Approval Hierarchies & Departmental Workflows",
      "Automated Inventory Replenishment & Routing Rules",
      "Custom Financial Reports, Invoicing & VAT Templates",
      "Strict Adherence to Odoo Upgrade-Friendly Standards",
    ],
    metricLabel: "Faster Feature Delivery",
    metricValue: "3x",
  },
  {
    id: "consulting",
    name: "Odoo Consulting",
    tagline: "Strategic Advisory & Business Process Re-Engineering",
    title: "Strategic Odoo Consulting & Architecture",
    description:
      "Maximize your ERP return on investment with guidance from certified enterprise consultants. Suvrin assesses your current operational bottlenecks, conducts comprehensive gap analyses, and crafts a technical roadmap that aligns software capabilities directly with your high-level business goals across the GCC.",
    aiDescription:
      "AI process-mining tools simulate your business transactions to pinpoint operational friction points and recommend optimal Odoo module configurations.",
    features: [
      "Comprehensive Enterprise Gap Analysis & Discovery",
      "Business Process Re-Engineering (BPR)",
      "Total Cost of Ownership (TCO) Optimization",
      "Third-Party Vendor RFP & Evaluation Consulting",
    ],
    metricLabel: "Operational Efficiency Boost",
    metricValue: "+40%",
  },
  {
    id: "integration",
    name: "Odoo Integration",
    tagline: "Unified Multi-System Ecosystem & API Connectors",
    title: "Robust Odoo API & 3rd-Party Integrations",
    description:
      "Unify your business ecosystem by integrating Odoo seamlessly with e-commerce storefronts, POS terminals, regional payment gateways, 3PL logistics providers, and government compliance portals. Suvrin designs secure, fault-tolerant REST and webhook integrations ensuring real-time bidirectional synchronization.",
    aiDescription:
      "Self-healing API pipelines detect dropped webhook payloads, automatically retry interrupted requests, and log anomalous data transfers without human intervention.",
    features: [
      "E-Commerce Connectors (Shopify, WooCommerce, Amazon)",
      "GCC Payment Gateways (HyperPay, Network Intl, Stripe)",
      "3PL Courier & Shipping APIs (Aramex, DHL, FedEx)",
      "Government Portals & E-Invoicing Compliance (ZATCA / FTA)",
    ],
    metricLabel: "Average Sync Latency",
    metricValue: "<200ms",
  },
  {
    id: "website-app-development",
    name: "Odoo Website/Application Development",
    tagline: "High-Performance Portals & Native Mobile Apps",
    title: "Odoo Website/Application Development",
    description:
      "Get cutting-edge web or mobile solutions developed immediately with our Odoo website and application development service! At Suvrin, we specialize in crafting user-friendly websites and applications specific to your business requirements. Whether you need a simple website, a complex e-commerce platform, web app, or native Android and iOS apps, our adept team has the expertise to develop and customize it flawlessly.",
    aiDescription:
      "AI-assisted development enables us to accelerate build cycles, improve code quality, and deliver polished digital experiences faster than traditional development timelines.",
    features: [
      "Full Responsive Web Portals & Customer Self-Service Dashboards",
      "Native iOS & Android Mobile Apps with Odoo Backend Sync",
      "Integrated B2B & B2C E-Commerce Storefronts",
      "Optimized Core Web Vitals with Sub-Second Page Loads",
    ],
    metricLabel: "Average Conversion Lift",
    metricValue: "2.4x",
  },
  {
    id: "module-development",
    name: "Odoo Module Development",
    tagline: "Bespoke Extensions Built from the Ground Up",
    title: "Custom Odoo Module Development",
    description:
      "When your business requires proprietary features not available in existing standard or third-party apps, Suvrin’s senior Python/Odoo engineers develop standalone, modular Odoo extensions. Built strictly in line with official Odoo best practices, our modules integrate seamlessly and ensure clean future migrations.",
    aiDescription:
      "AI test suites auto-generate hundreds of edge-case unit tests and security scans for models, views, and controllers, certifying enterprise-grade stability before deployment.",
    features: [
      "Modular, Independent Python & JavaScript Architecture",
      "Strict Compliance with Odoo Coding Guidelines & PEP8",
      "Comprehensive Automated AI Unit & Integration Testing",
      "Seamless Version Portability & Clean Documentation",
    ],
    metricLabel: "Upgradable Code Standard",
    metricValue: "100%",
  },
  {
    id: "theme-development",
    name: "Odoo Theme Development",
    tagline: "Bespoke UX/UI Design & Brand Modernization",
    title: "Custom Odoo Theme Development & UI/UX",
    description:
      "Transform standard Odoo interfaces into visually striking, brand-aligned, and lightning-fast digital storefronts and portals. Suvrin crafts fully responsive, accessible, and high-performance Odoo themes built on modern HTML5, SCSS, and Tailwind design systems that captivate your customers.",
    aiDescription:
      "AI-driven design tokens dynamically balance typography scale, color contrast, and touch targets to achieve full WCAG 2.1 accessibility compliance.",
    features: [
      "Custom SCSS & Modern Tailwind UI Framework",
      "Mobile-First UX Architecture & Lightning Rendering",
      "Bespoke Snippets & Drag-and-Drop Odoo Website Builder Blocks",
      "Strict Cross-Browser & Device Compatibility",
    ],
    metricLabel: "Google Lighthouse Score",
    metricValue: "98+",
  },
];

export default function OdooServices() {
  // Default active item set to 1st service ("implementation")
  const [activeServiceId, setActiveServiceId] = useState<string>("implementation");
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const listContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const dragStartYRef = useRef(0);
  const dragStartScrollTopRef = useRef(0);

  const activeService =
    ODOO_SERVICES.find((s) => s.id === activeServiceId) || ODOO_SERVICES[0];
  const activeServiceIndex = ODOO_SERVICES.findIndex((s) => s.id === activeServiceId);
  const currentStepNumber = String((activeServiceIndex >= 0 ? activeServiceIndex : 0) + 1).padStart(2, "0");

  // Close mobile dropdown on outside click
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

  // Update scrollProgress whenever the list container scrolls
  const handleScroll = () => {
    if (!listContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = listContainerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    setScrollProgress(progress);
  };

  // Scroll to target service when clicked
  const handleSelectService = (id: string, index: number) => {
    setActiveServiceId(id);
    const targetElement = itemRefs.current[index];
    if (targetElement && listContainerRef.current) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  // Dragging the single 3-color scrollbar thumb with mouse cursor pointer
  const handleThumbPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!listContainerRef.current || !trackRef.current) return;

    setIsDragging(true);
    dragStartYRef.current = e.clientY;
    dragStartScrollTopRef.current = listContainerRef.current.scrollTop;

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!listContainerRef.current || !trackRef.current) return;
      const deltaY = moveEvent.clientY - dragStartYRef.current;
      const trackHeight = trackRef.current.clientHeight;
      const thumbHeight = trackHeight * 0.35; // 35% height
      const maxThumbTravel = trackHeight - thumbHeight;

      if (maxThumbTravel <= 0) return;

      const maxScroll =
        listContainerRef.current.scrollHeight -
        listContainerRef.current.clientHeight;
      const scrollDelta = (deltaY / maxThumbTravel) * maxScroll;

      listContainerRef.current.scrollTop = Math.max(
        0,
        Math.min(maxScroll, dragStartScrollTopRef.current + scrollDelta)
      );
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  // Clicking anywhere along the track jumps scrollbar directly
  const handleTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!listContainerRef.current || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const trackHeight = rect.height;
    const thumbHeight = trackHeight * 0.35;
    const targetThumbCenter = clickY - thumbHeight / 2;
    const maxThumbTravel = trackHeight - thumbHeight;

    if (maxThumbTravel <= 0) return;

    const ratio = Math.max(0, Math.min(1, targetThumbCenter / maxThumbTravel));
    const maxScroll =
      listContainerRef.current.scrollHeight -
      listContainerRef.current.clientHeight;

    listContainerRef.current.scrollTo({
      top: ratio * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="relative w-full bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-100 overflow-hidden font-sans scroll-mt-20"
    >
      {/* Decorative Technical Background Grid */}
     

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Title on Left, Subtitle on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-slate-100 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#003bbd]" />
              <span className="w-2 h-2 rounded-full bg-[#70a647]" />
              <span className="w-2 h-2 rounded-full bg-[#002f9e]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                Suvrin Enterprise Stack
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 leading-[1.2]">
              Our AI-Enabled Odoo <br className="hidden sm:inline" />
              Services
            </h2>
          </div>

          <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-600 max-w-md leading-relaxed md:text-right">
            Suvrin Technologies offers a suite of AI-enabled Odoo development
            services, from initial consultation and implementation to migration to
            the latest Odoo version.
          </p>
        </div>

        {/* ================= MOBILE OPTION SELECTOR (Option type for < md) ================= */}
        <div ref={mobileDropdownRef} className="block md:hidden w-full mb-6 relative">
          <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            SELECT SERVICE:
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
                {currentStepNumber}
              </span>
              {/* Active Service Name */}
              <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight truncate">
                {activeService.name}
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
            <div className="mt-2 rounded-2xl border border-slate-200/90 bg-white shadow-xl overflow-hidden divide-y divide-slate-100 z-30 max-h-[380px] overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
              {ODOO_SERVICES.map((service, idx) => {
                const isSelected = service.id === activeServiceId;
                const step = String(idx + 1).padStart(2, "0");
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setActiveServiceId(service.id);
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
                        {step}
                      </span>
                      <span
                        className={`text-sm truncate ${
                          isSelected
                            ? "font-bold text-[#003bbd]"
                            : "font-semibold text-slate-800"
                        }`}
                      >
                        {service.name}
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

        {/* Main Content Grid: Balanced Equal Height on Left and RHS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* LEFT SIDE: Exactly 6 services visible by default with small normal height and low spacing, equal height box to RHS (Cols 5 on md/lg, hidden on mobile < md) */}
          <div className="hidden md:flex md:col-span-5 flex-col justify-between h-full min-h-[440px] sm:min-h-[460px] lg:min-h-[480px]">
            {/* Services List and Draggable Scrollbar Track */}
            <div className="flex items-stretch space-x-3.5 h-[362px] sm:h-[370px]">
              {/* Scrollable Container (h-[362px] fits exactly 6 items with 52px height + 10px spacing; items 7-9 hidden) */}
              <div
                ref={listContainerRef}
                onScroll={handleScroll}
                className="flex-1 h-full overflow-y-auto pr-1.5 space-y-2.5 select-none focus:outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden no-scrollbar"
              >
                {ODOO_SERVICES.map((service, idx) => {
                  const isActive = service.id === activeServiceId;
                  return (
                    <button
                      key={service.id}
                      ref={(el) => {
                        itemRefs.current[idx] = el;
                      }}
                      type="button"
                      onClick={() => handleSelectService(service.id, idx)}
                      className={`w-full text-left px-4 sm:px-5 h-[52px] rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-[#003bbd] text-white shadow-md shadow-blue-500/20 font-semibold"
                          : "bg-transparent text-slate-800 hover:text-[#003bbd] hover:bg-slate-50/80 font-medium"
                      }`}
                    >
                      <span className="text-[13.5px] sm:text-[14px] leading-snug pr-3">
                        {service.name}
                      </span>

                      {/* Right Chevron > Arrow Icon matching photo */}
                      <svg
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isActive
                            ? "text-white translate-x-0.5"
                            : "text-slate-400 group-hover:text-[#003bbd] group-hover:translate-x-0.5"
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

              {/* ONLY ONE Single 3-Color Draggable Scrollbar Track (Cursor Pointer Draggable) */}
              <div
                ref={trackRef}
                onPointerDown={handleTrackPointerDown}
                className="w-1.5 sm:w-2 bg-slate-200/70 hover:bg-slate-300/80 rounded-full relative self-stretch overflow-hidden shrink-0 cursor-pointer transition-colors"
                title="Click or drag with mouse pointer to scroll services"
                aria-label="Interactive 3-color scrollbar"
              >
                {/* Draggable Thumb running by Cursor Pointer with 3-Color Gradient */}
                <div
                  ref={thumbRef}
                  onPointerDown={handleThumbPointerDown}
                  className={`w-full rounded-full transition-shadow duration-150 shadow-xs cursor-grab active:cursor-grabbing hover:scale-125 ${
                    isDragging ? "ring-2 ring-blue-400/50 scale-125" : ""
                  }`}
                  style={{
                    height: "35%",
                    transform: `translateY(${scrollProgress * 185.7}%)`,
                    background:
                      "linear-gradient(to bottom, #0052cc 0%, #70a647 50%, #0a1931 100%)",
                  }}
                />
              </div>
            </div>

            {/* Bottom Info Status Strip: Equalizes visual baseline with RHS footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 select-none">
              <span>• 6 of 9 services visible</span>
              <button
                type="button"
                className="hover:text-[#0052cc] transition-colors cursor-pointer text-left"
                onClick={() => {
                  if (listContainerRef.current) {
                    listContainerRef.current.scrollBy({ top: 120, behavior: "smooth" });
                  }
                }}
              >
                Drag scrollbar or scroll for more ↓
              </button>
            </div>
          </div>

          {/* RIGHT SIDE (RHS): Matching Reference Image (Cols 7 on md/lg) */}
          <div className="md:col-span-7">
            {/* Outer Wrapper creating the 1.5px Suvrin 3-Color Gradient Border */}
            <div className="relative rounded-3xl p-[1.5px] bg-linear-to-br from-[#0052cc] via-[#003bbd] to-[#25477e] shadow-xl shadow-slate-200/50 h-full">
              {/* Inner Card Canvas */}
              <div className="bg-white rounded-[22.5px] p-6 sm:p-7 lg:p-8 relative overflow-hidden h-full flex flex-col justify-between">
                {/* Decorative Bottom-Right Ribbon Arcs in Suvrin Colors */}
                <div
                  className="absolute -bottom-16 -right-16 w-80 h-80 pointer-events-none select-none overflow-hidden opacity-25"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 360 360"
                    fill="none"
                    className="w-full h-full"
                  >
                    <circle
                      cx="330"
                      cy="330"
                      r="130"
                      stroke="url(#suvrin-arc-1)"
                      strokeWidth="28"
                    />
                    <circle
                      cx="330"
                      cy="330"
                      r="200"
                      stroke="url(#suvrin-arc-2)"
                      strokeWidth="20"
                    />
                    <circle
                      cx="330"
                      cy="330"
                      r="270"
                      stroke="url(#suvrin-arc-3)"
                      strokeWidth="12"
                    />
                    <defs>
                      <linearGradient
                        id="suvrin-arc-1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#0052cc" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#70a647" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient
                        id="suvrin-arc-2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#70a647" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#0a1931" stopOpacity="0.1" />
                      </linearGradient>
                      <linearGradient
                        id="suvrin-arc-3"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#0052cc" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Card Content Area with subtle fade animation */}
                <div
                  key={activeService.id}
                  className="relative z-10 space-y-4 animate-in fade-in duration-200"
                >
                  {/* Tagline Pill + Metric Badge Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold bg-blue-50 text-[#003bbd] border border-blue-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#003bbd] animate-pulse" />
                      <span>{activeService.tagline}</span>
                    </span>

                    <div className="flex items-center space-x-1.5 text-xs">
                      <span className="text-slate-500 font-medium">
                        {activeService.metricLabel}:
                      </span>
                      <span className="font-bold text-slate-900 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/70">
                        {activeService.metricValue}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {activeService.title}
                  </h3>

                  {/* Main Paragraph Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-[1.68]">
                    {activeService.description}
                  </p>

                  {/* AI-Accelerated Advantage Card */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs sm:text-[12.5px] text-slate-700 leading-relaxed flex items-start space-x-3">
                    <div className="mt-0.5 w-6 h-6 rounded-md bg-gradient-to-tr from-[#0052cc] to-[#003bbd] text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-xs">
                      AI
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">
                        AI-Accelerated Advantage
                      </span>
                      <p className="text-slate-600">{activeService.aiDescription}</p>
                    </div>
                  </div>

                  {/* Core Deliverables & Capabilities Checklist */}
                  <div className="pt-1">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Core Deliverables & Capabilities
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[12px] text-slate-700">
                      {activeService.features.map((feat) => (
                        <div key={feat} className="flex items-start space-x-2">
                          <svg
                            className="w-4 h-4 text-[#003bbd] shrink-0 mt-0.5"
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
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Row inside the Card */}
                <div className="relative z-10 pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 font-medium">
                    <span>Certified GCC Architects • Dubai Marina Hub</span>
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-xs sm:text-[13px] text-white bg-[#003bbd] hover:bg-[#002f9e] transition-all duration-150 active:scale-[0.99] shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>Inquire About This Service</span>
                    <svg
                      className="ml-1.5 w-3.5 h-3.5"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
