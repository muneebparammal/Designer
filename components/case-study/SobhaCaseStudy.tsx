"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import StickyBottomMenu from "@/components/StickyBottomMenu";
import { sobhaAssets } from "@/lib/sobha-assets";
import CaseStudyImage from "./CaseStudyImage";

/* ─── framer variants ───────────────────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ─── CenterTimeline ────────────────────────────────────────────────────────── */
function CenterTimeline({ n, active }: { n: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[12px]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.45 }}
        className={`h-[26px] w-[26px] rounded-full border-[6px] ${
          active ? "border-[#012970] bg-[#3075CA]" : "border-[#012970] bg-white"
        }`}
      />
      <span className="text-[20px] font-bold leading-none tracking-[-0.8px] text-[#012970]">
        {n}
      </span>
    </div>
  );
}

/* ─── layout containers ─────────────────────────────────────────────────────── */
function Narrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[550px] px-4 ${className}`}>
      {children}
    </div>
  );
}

function Wide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1012px] px-4 ${className}`}>
      {children}
    </div>
  );
}

/* ─── typography helpers ─────────────────────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[26px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#012970] sm:text-[30px] md:text-[32px]">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[15px] font-semibold leading-[1.6] tracking-[-0.03em] text-[#072447]/80 sm:text-[16px] md:text-[17px] [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
      {children}
    </div>
  );
}

/* ─── hero meta row ─────────────────────────────────────────────────────────── */
function MetaRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex min-h-[68px] items-center gap-3 rounded-[41px] bg-white pl-2 pr-8 py-2 sm:min-h-[76px]">
      <div className="flex size-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[50px] sm:size-[54px]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold tracking-[-0.04em] text-[#072447]/80 sm:text-[14px]">{label}</p>
      </div>
      <p className="max-w-[52%] text-right text-[13px] font-semibold leading-snug tracking-[-0.03em] text-[#012970] sm:max-w-[55%] sm:text-[16px]">
        {value}
      </p>
    </div>
  );
}

/* ─── image helpers ─────────────────────────────────────────────────────────── */
function ImagePair({ left, right }: { left: string; right: string }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {[left, right].map((src, i) => (
        <div key={i} className="overflow-hidden rounded-[24px] sm:rounded-[28px]">
          <CaseStudyImage src={src} alt={`Image ${i + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

function FullWidthImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden">
      <CaseStudyImage src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}


/* ─── UIScreenBlock ─────────────────────────────────────────────────────────── */
function UIScreenBlock({
  label, imageSrc, imageAlt, features, highlights,
}: {
  label: string; imageSrc: string; imageAlt: string;
  features: string[]; highlights: string[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[24px] font-bold text-[#012970]">{label}</p>
      <div className="overflow-hidden rounded-[20px] sm:rounded-[24px]">
        <CaseStudyImage src={imageSrc} alt={imageAlt} className="w-full h-auto" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-3">
          <p className="text-[16px] font-bold  text-[#012970]">Features</p>
          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[14px] font-semibold leading-[1.5] tracking-[-0.03em] text-[#072447]/80 sm:text-[15px]">
                <span className="mt-[5px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#012970]/40" />{f}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-[16px] font-bold  text-[#012970]">Highlights</p>
          <ul className="space-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-[14px] font-semibold leading-[1.5] tracking-[-0.03em] text-[#072447]/80 sm:text-[15px]">
                <span className="mt-[5px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#012970]/40" />{h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── data ───────────────────────────────────────────────────────────────────── */

const scopeItems = [
  {
    icon: "/digitization.svg",
    title: "Complete Digitalization",
    body: "Implementing entirely new digital flows for Move-In/Out processes, eliminating paperwork and creating seamless digital experiences.",
  },
  {
    icon: "/utility.svg",
    title: "Utility and Control",
    body: "Integrating high-value, complex features like Home Automation controls and comprehensive Visitor Management systems.",
  },
  {
    icon: "/selfservice.svg",
    title: "Self-Service Adoption",
    body: "Creating efficient flows for routine tasks: Amenity Booking, Service Requests, Account Renewal, Visitor Management, and Access Cards.",
  },
] as const;

const myRoleItems = [
  {
    icon: "/casestudy/sobha/strategy.svg",
    title: "Strategy & Requirements",
    desc: "I collaborated closely with all cross-functional teams and stakeholders (including Operations and Engineering) to define project scope and requirements. I led design workshops to align business needs with core user objectives early in the process.",
  },
  {
    icon: "/casestudy/sobha/foundation.svg",
    title: "Strategy & Foundation",
    desc: "I established the project's direction through research. I conducted competitor analysis and benchmarking against best-in-class utility apps to define essential features and design standards.",
  },
  {
    icon: "/casestudy/sobha/blueprint.svg",
    title: "UX Structure & Blueprint",
    desc: "I created all the low-fidelity wireframes to define the product's new, efficient Information Architecture (IA). This structure was the foundation for consolidating over a dozen separate services into a coherent user flow.",
  },
  {
    icon: "/casestudy/sobha/design.svg",
    title: "Design Execution & Quality",
    desc: "DI established the foundational design system to ensure visual consistency, quality, and scalability across the entire platform. I assigned work and mentored other designers responsible for creating the high-fidelity mockups, ensuring all final designs met usability standards .",
  },
] as const;

const challenges = [
  {
    n: "01",
    title: "High number of steps and excessive input fields increased user effort",
    outcome: "Reduced steps and replaced manual inputs with selection-based options, smart defaults, and contextual inputs",
  },
  {
    n: "02",
    title: "Managing multiple modules within a single platform created complexity",
    outcome: "Designed a modular structure with clear navigation and focused user flows",
  },
  {
    n: "03",
    title: "Inconsistent experience across different features",
    outcome: "Established reusable UI patterns and standardized interaction behaviors",
  },
  {
    n: "04",
    title: "Users lacked clarity on status and progress of actions",
    outcome: "Introduced clear status indicators, confirmations, and real-time feedback",
  },
  {
    n: "05",
    title: "Balancing feature richness with simplicity",
    outcome: "Prioritized key actions and used progressive disclosure to avoid overload",
  },
  {
    n: "06",
    title: "Handling different user types (resident, manager, security)",
    outcome: "Designed flexible flows catering to multiple roles with relevant access and actions",
  },
  {
    n: "07",
    title: "Reducing friction in frequently used actions",
    outcome: "Streamlined high-frequency tasks like booking, requests, and access management",
  },
  {
    n: "08",
    title: "Ensuring scalability for future modules",
    outcome: "Built a flexible design system and component-based structure",
  },
] as const;

/* ─── page ───────────────────────────────────────────────────────────────────── */

export default function SobhaCaseStudy() {
  const [openRole, setOpenRole] = useState<number | null>(1);

  return (
    <main className="min-h-screen bg-white pb-10 pt-0">

      {/* ── HERO CARD — NARROW ── */}
      <Narrow>
        <section className="relative w-full">
          <div className="mb-[-36px] flex flex-col items-center">
            <div className="z-20 flex flex-col items-center">
              <div className="h-[50px] w-[53px] bg-[#012970]" />
              <div className="h-[36px] w-[63px] rounded-[6px] bg-[#6C6C6C]" />
              <div className="h-[26px] w-[31px] rounded-bl-[4px] rounded-br-[4px] bg-gradient-to-b from-[#080808] to-[#2e2e2e]" />
              <div className="mt-[-3px] h-[19px] w-[63px] rounded-[46px] border border-[#eaeaea] bg-white" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[46px] border border-[#EAEAEA] bg-[#EEF2F8] px-[9px] pt-[50px] pb-[20px]">
            <div className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[36px]" style={{ aspectRatio: "532/386" }}>
              <CaseStudyImage src={sobhaAssets.hero} alt="One Sobha App hero mockup" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="mt-4 flex flex-col gap-1.5 px-[9px]">
              <MetaRow
                icon={
                  <div className="flex size-full items-center justify-center overflow-hidden rounded-[50px] bg-[#0b1f41]">
                    <img src="/works/sobha-white.svg" alt="Sobha logo" className="size-[32px] object-contain" />
                  </div>
                }
                label="Client" value="Sobha Realty"
              />
              <MetaRow
                icon={
                  <div className="flex size-full items-center justify-center rounded-[50px] bg-[#f6f6f6]">
                    <img src="/category.svg" alt="" className="size-[20px] opacity-80 sm:size-[22px]" />
                  </div>
                }
                label="Category" value="Mobile UX/UI Design"
              />
              <MetaRow
                icon={
                  <div className="flex size-full items-center justify-center rounded-[50px] bg-[#f6f6f6]">
                    <img src="/role.svg" alt="" className="size-[20px] opacity-80 sm:size-[22px]" />
                  </div>
                }
                label="Role" value="Lead UX/UI Designer"
              />
            </div>
            <div className="mt-5 flex items-center justify-center">
              <a
                href="https://apps.apple.com/ae/app/one-sobha-app/id6453471270"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-[6px] text-[13px] font-semibold tracking-[-0.04em] text-[#012970]/70 transition-opacity hover:opacity-80"
              >
                View on Live App
                <img src="/arrow-diaganol.svg" alt="" className="h-[10px] w-[10px]" />
              </a>
            </div>
          </div>
        </section>
      </Narrow>

      {/* ── ARTICLE ── */}
      <article className="mt-16 flex flex-col gap-14">

        {/* ── 1. INTRO — NARROW ── */}
        <Narrow className="flex flex-col gap-[30px]">
          <h1 className="text-[40px] font-semibold leading-none tracking-[-2px] text-[#012970] sm:text-[44px] md:text-[50px] md:tracking-[-2.5px]">
            Community Management APP
          </h1>
          <p className="text-[16px] font-semibold leading-[1.4] tracking-[-0.72px] text-[#072447]/80 sm:text-[17px] md:text-[18px]">
            From a Basic Sales Tool to an Integrated Digital Utility Platform
          </p>

          <SectionTitle>Project Goal</SectionTitle>
          <Body>
            <p className="mb-3">
              A Major Product Expansion and UX Transformation of Existing APP. Earlier, the app
              was mainly a basic sales and listing tool — it only supported property sales and
              didn't offer much beyond that. The goal was to transform it into a fully integrated
              digital utility platform.
            </p>
            <ul>
              <li>From basic sales tool to comprehensive platform</li>
              <li>Integrated digital utility services</li>
              <li>Enhanced resident experience ecosystem</li>
            </ul>
          </Body>

          <SectionTitle>The Problem</SectionTitle>
          <Body>
            <p className="mb-4 font-bold text-[#012970]">A Disconnected Post-Purchase Experience</p>
            <ul className="mb-4">
              <li>UX research and stakeholder alignment</li>
              <li>Journey mapping and workflow structuring</li>
              <li>Designing within Power Apps UI and interaction limitations</li>
              <li>Creating scalable UI patterns aligned with platform components</li>
              <li>Wireframes, UI design, and prototypes</li>
              <li>Close collaboration with developers for feasibility</li>
            </ul>
            <p className="mb-3 font-bold text-[#012970]">Initial State</p>
            <p className="mb-4 text-[14px] font-semibold leading-[1.6] text-[#072447]/80 sm:text-[15px]">
              The original application was only focused on marketing and pre-sales.
              It was great for listing properties or submitting an inquiry. Crucially, it provided
              zero utility to residents after they completed a purchase and moved in.
            </p>

            <p className="mb-3 font-bold text-[#012970]">Critical Pain Points</p>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-[#E9E9E9] bg-[#F8FAFC] p-4">
                <p className="mb-1 text-[15px] font-bold text-[#012970] sm:text-[16px]">Operational Inefficiency</p>
                <p className="text-[14px] font-semibold leading-[1.6] text-[#072447]/80 sm:text-[15px]">
                  All essential post-sale community services (amenity booking, visitor access,
                  renewals) were conducted through outdated, costly physical processes like phone
                  calls, emails, paper forms, and in-person visits.
                </p>
              </div>
              <div className="rounded-[20px] border border-[#E9E9E9] bg-[#F8FAFC] p-4">
                <p className="mb-1 text-[15px] font-bold text-[#012970] sm:text-[16px]">Poor Resident Experience</p>
                <p className="text-[14px] font-semibold leading-[1.6] text-[#072447]/80 sm:text-[15px]">
                  Residents, expecting a seamless, modern digital experience, were met with low
                  transparency, high frustration, and a diminished brand experience post-move-in.
                </p>
              </div>
            </div>
          </Body>
        </Narrow>

        {/* ── 2. THE MANDATE — NARROW ── */}
        <Narrow className="space-y-5">
          <SectionTitle>The Mandate</SectionTitle>
          <Body>
            <p className="mb-3 font-bold text-[#012970]">
              A &quot;One-Stop Solution&quot; for the Entire Resident Lifecycle
            </p>
            <p>
              Designing and launching a comprehensive digital platform that digitizes the entire
              resident lifecycle, integrating services previously handled by disparate physical
              departments.
            </p>
          </Body>
        </Narrow>

        {/* ── 3. SCOPE EXPANSION — NARROW — Process-card style ── */}
        <Narrow>
          <div className="relative flex flex-col gap-[6px] rounded-[28px] border border-[#E9E9E9] bg-[#EEF2F8] p-[6px] md:rounded-[40px] md:p-[9px]">
            {/* dark header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex min-h-[100px] items-center overflow-hidden rounded-[22px] bg-[#012970] px-5 py-6 md:rounded-[34px]"
            >
              <p className="relative z-10 text-[18px] font-semibold leading-[1.2] tracking-[-0.5px] text-white md:text-[22px] md:tracking-[-0.88px]">
                Scope Expansion Examples
              </p>
              <img src="/ladder.svg" alt="" className="absolute bottom-0 right-0 h-[100px] w-[80px] object-contain opacity-80" />
            </motion.div>
            {/* items */}
            {scopeItems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.07 }}
                className="rounded-[22px] bg-white px-5 py-5 md:rounded-[34px]"
              >
                <div className="flex items-center gap-4">
                  <img src={item.icon} alt="" className="w-[60px] h-[60px] flex-shrink-0" />
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[16px] font-bold leading-[1.2] tracking-[-0.5px] text-[#012970] sm:text-[17px]">
                      {item.title}
                    </p>
                    <p className="text-[14px] font-semibold leading-[1.6] tracking-[-0.03em] text-[#072447]/80 sm:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Narrow>

        {/* ── 4. WIDE MOCKUP IMAGE ── */}
        <Wide>
          <FullWidthImage src={sobhaAssets.mockupWide} alt="One Sobha App — product mockup" />
        </Wide>

        {/* ── 5. MY ROLE — NARROW — same accordion as Services / How I Work ── */}
        <Narrow className="space-y-6">
          <div>
            <SectionTitle>My Role</SectionTitle>
            <p className="mt-1 text-[15px] font-semibold tracking-[-0.03em] text-[#072447]/60 sm:text-[16px]">
              Lead UX/UI Designer
            </p>
          </div>

          <div className="flex flex-col gap-[24px]">
            {myRoleItems.map((item, i) => {
              const isOpen = openRole === i;
              return (
                <div key={i} className="flex flex-col">
                  {/* blue top line — same as Services.tsx */}
                  <div className="w-full h-px bg-[#012970]" />

                  <button
                    type="button"
                    onClick={() => setOpenRole(isOpen ? null : i)}
                    className="flex items-start justify-between pt-5 text-left w-full group"
                  >
                    <div className="flex items-center gap-[16px]">
                      <img src={item.icon} alt={item.title} className="w-[24px] h-[24px] flex-shrink-0" />
                      <h4 className="text-[#012970] text-[18px] sm:text-[22px] font-medium tracking-[-0.72px] leading-[1.4]">
                        {item.title}
                      </h4>
                    </div>
                    <span
                      className={`text-[28px] leading-none transition-transform duration-300 ease-in-out flex-shrink-0 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* animated expand — identical grid trick from Services.tsx */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#072447]/80 text-[15px] sm:text-[16px] font-semibold tracking-[-0.64px] leading-[1.5] pb-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Narrow>

        {/* ── 6. COMPETITOR ANALYSIS — WIDE — kept as image ── */}
        <Wide className="space-y-4">
          <SectionTitle>Competitor Analysis</SectionTitle>
          <div className="bg-[#EEF2F8] rounded-[32px] p-4">
            <FullWidthImage src={sobhaAssets.competitorAnalysis}  alt="Competitor Analysis — Sobha vs Emaar vs DAMAC" />
          </div>
        </Wide>

        {/* ── 7. USER PERSONA — WIDE — kept as image ── */}
        <Wide className="space-y-4">
          <SectionTitle>User Persona</SectionTitle>
          <div className="bg-[#EEF2F8] rounded-[32px] p-4">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
                <CaseStudyImage src={sobhaAssets.personaOne} alt="user persona" className="w-full h-auto" />
              </div>
              <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
                <CaseStudyImage src={sobhaAssets.personaTwo} alt="user persona" className="w-full h-auto" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
              <CaseStudyImage src={sobhaAssets.personaThree} alt="user persona" className="w-full h-auto" />
            </div>
          </div>
          </div>
         
        </Wide>

        {/* ── 7. Empathy map — WIDE — kept as image ── */}
        <Wide className="space-y-4">
          <SectionTitle>Empathy Map</SectionTitle>
          <div className="bg-[#EEF2F8] rounded-[32px] p-4">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
                <CaseStudyImage src={sobhaAssets.empathyOne} alt="Empathy map" className="w-full h-auto" />
              </div>
              <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
                <CaseStudyImage src={sobhaAssets.empathyTwo} alt="Empathy map" className="w-full h-auto" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
              <CaseStudyImage src={sobhaAssets.empathyThree} alt="Empathy map" className="w-full h-auto" />
            </div>
          </div>
          </div>
         
        </Wide>

        {/* ── 8. CUSTOMER JOURNEY MAP — WIDE — 4 flows ── */}
        <Wide className="space-y-8">
          <SectionTitle>Customer Journey Map</SectionTitle>

          {[
            {
              subtitle: "Amenity Booking Journey",
              description: "How can residents easily book amenities in a few steps?",
              src: sobhaAssets.journeyMapAmenity,
              alt: "Amenity Booking Journey Map",
            },
            {
              subtitle: "Service Request Journey",
              description: "How can residents report and track service issues without confusion?",
              src: sobhaAssets.journeyMapServiceRequest,
              alt: "Service Request Journey Map",
            },
            {
              subtitle: "Move-In Journey",
              description: "How can new residents complete the entire move-in process digitally?",
              src: sobhaAssets.journeyMapMoveIn,
              alt: "Move-In Journey Map",
            },
            {
              subtitle: "Access Control Journey",
              description: "How can residents manage vehicle and community access from one place?",
              src: sobhaAssets.journeyMapAccessControl,
              alt: "Access Control Journey Map",
            },
          ].map(({ subtitle, description, src, alt }) => (
            <div key={subtitle} className="space-y-3">
              <p className="text-[18px] font-bold leading-snug tracking-[-0.03em] text-[#012970] sm:text-[20px]">
                {subtitle}
              </p>
              <p className="text-[14px] font-semibold leading-[1.6] tracking-[-0.02em] text-[#072447]/60 sm:text-[15px]">
                {description}
              </p>
              <FullWidthImage src={src} alt={alt} />
            </div>
          ))}
        </Wide>

        {/* ── 9. UI SCREENS — WIDE — 4 separate cards ── */}
        <Wide className="space-y-6">
          <SectionTitle>UI Screens</SectionTitle>
          <div className="flex flex-col gap-4">

            <div className="overflow-hidden rounded-[28px] bg-[#EEF2F8] p-5 sm:rounded-[36px] sm:p-8">
              <UIScreenBlock
                label="Service Request screens"
                imageSrc={sobhaAssets.uiScreensServiceRequest}
                imageAlt="Service Request app screens"
                features={["Manage all home-related tasks in one place", "Unit / Community selection", "Media & audio upload", "Quick submission flow"]}
                highlights={["Faster reporting (no categories)", "Simple and intuitive flow", "Better clarity with media support"]}
              />
            </div>

            <div className="overflow-hidden rounded-[28px] bg-[#EEF2F8] p-5 sm:rounded-[36px] sm:p-8">
              <UIScreenBlock
                label="Amenity Booking"
                imageSrc={sobhaAssets.uiScreensAmenityBooking}
                imageAlt="Amenity Booking app screens"
                features={["Real-time availability viewing", "Date & time slot selection", "Free and paid booking flow", "Booking history tracking"]}
                highlights={["Quick and easy booking", "Clear slot visibility", "Smooth payment experience", "Instant confirmation"]}
              />
            </div>

            <div className="overflow-hidden rounded-[28px] bg-[#EEF2F8] p-5 sm:rounded-[36px] sm:p-8">
              <UIScreenBlock
                label="Access Control"
                imageSrc={sobhaAssets.uiScreensAccessControl}
                imageAlt="Access Control app screens"
                features={["Vehicle and community access management", "Access card activation and new card request and Update Card", "Parking slot and vehicle assignment", "Status tracking for cards and access"]}
                highlights={["Clear separation between vehicle and community access", "Unified control in a single interface", "Easy understanding with status indicators"]}
              />
            </div>

            {/* Additional Features — text LEFT, images RIGHT */}
            <div className="overflow-hidden rounded-[28px] bg-[#EEF2F8] sm:rounded-[36px]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
                <div className="flex flex-col gap-4 lg:w-[340px] lg:shrink-0 p-8">
                  <p className="text-[24px] font-bold text-[#012970]">Additional Features</p>
                  <p className="text-[15px] font-semibold leading-[1.6] tracking-[-0.03em] text-[#072447]/80 sm:text-[16px]">
                    The platform includes several additional modules that contribute to a
                    comprehensive community management experience.
                  </p>
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <CaseStudyImage src={sobhaAssets.uiScreensAdditional} alt="Additional Features app screens" className="w-full h-auto" />
                </div>
              </div>
            </div>

          </div>
        </Wide>

        {/* ── 10. KEY DESIGN DECISIONS — NARROW ── */}
        <Narrow className="space-y-5">
          <SectionTitle>Key Design Decisions</SectionTitle>
          <Body>
            <ul>
              <li>Designed a unified platform experience to manage all community services in one place</li>
              <li>Structured the application using modular architecture for scalability and flexibility</li>
              <li>Simplified user interactions through guided and consistent flows across modules</li>
              <li>Focused on reducing user effort by minimizing steps and inputs</li>
              <li>Ensured clear visibility of actions and statuses throughout the app</li>
              <li>Maintained consistency in UI patterns to create a seamless experience</li>
            </ul>
          </Body>
        </Narrow>

        {/* ── 11. OUTCOME — NARROW ── */}
        <Narrow className="space-y-5">
          <SectionTitle>Outcome</SectionTitle>
          <Body>
            <ul>
              <li>Delivered a streamlined and intuitive user experience across all modules</li>
              <li>Reduced complexity in managing daily community activities</li>
              <li>Improved efficiency for both residents and management teams</li>
              <li>Enabled a scalable system to support future features and integrations</li>
              <li>Strengthened overall usability and accessibility of the platform</li>
            </ul>
          </Body>
        </Narrow>

        {/* ── 12. CHALLENGES — WIDE — alternating center-timeline ── */}
        <Wide>
          <div className="relative flex flex-col gap-[6px] rounded-[28px] border border-[#E9E9E9] bg-[#EEF2F8] p-[6px] md:rounded-[46px] md:p-[9px]">

            {/* dark header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex min-h-[120px] items-center overflow-hidden rounded-[24px] bg-[#012970] px-5 py-6 md:h-[80px] md:rounded-[40px] md:px-0 md:py-0"
            >
              <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-[22px] md:pl-[44px] md:pr-4">
                <p className="w-full max-w-[260px] text-[18px] font-semibold leading-[1.2] tracking-[-0.5px] text-white md:w-[260px] md:text-[22px] md:tracking-[-0.88px]">
                  Challenges & How I Solved Them
                </p>
              </div>
              <img src="/ladder.svg" alt="" className="absolute bottom-0 right-0 h-[120px] w-[90px] object-contain opacity-80 md:h-[164px] md:w-[124px]" />
            </motion.div>

            {/* Mobile cards */}
            <div className="flex flex-col gap-[6px] md:hidden">
              {challenges.map((c, i) => (
                <motion.div
                  key={c.n}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-[24px] bg-white px-5 py-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-3 pt-1">
                      <div className={`h-[26px] w-[26px] rounded-full border-[6px] ${i === 0 ? "border-[#012970] bg-[#9EF34A]" : "border-[#012970] bg-white"}`} />
                      <span className="text-[20px] font-bold leading-none tracking-[-0.8px] text-[#012970]">{c.n}</span>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                      <h4 className="text-[16px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#012970]">{c.title}</h4>
                      <p className="text-[14px] font-semibold leading-[1.4] tracking-[-0.4px] text-[#171717]/80">{c.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop — alternating center-timeline */}
            <div className="hidden flex-col gap-[6px] md:flex">
              {challenges.map((c, i) => {
                // Even rows (0,2,4,6): challenge LEFT, solution RIGHT
                // Odd rows (1,3,5,7): solution LEFT, challenge RIGHT
                const challengeLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={c.n}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-[40px] bg-white px-[28px] py-[24px] transition-all duration-500 hover:shadow-[0px_9px_20px_rgba(0,0,0,0.06)]"
                  >
                    <div className="grid min-h-[100px] grid-cols-[1fr_70px_1fr] items-center gap-4">
                      {challengeLeft ? (
                        <>
                          <div className="flex justify-end">
                            <p className="w-100 text-right text-[16px] font-semibold leading-[1.3] tracking-[-0.64px] text-[#012970]">{c.title}</p>
                          </div>
                          <CenterTimeline n={c.n} active={i === 0} />
                          <div className="flex justify-start">
                            <p className="w-100 text-[15px] font-semibold leading-[1.4] tracking-[-0.5px] text-[#171717]/80">{c.outcome}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-end">
                            <p className="w-100 text-right text-[15px] font-semibold leading-[1.4] tracking-[-0.5px] text-[#171717]/80">{c.outcome}</p>
                          </div>
                          <CenterTimeline n={c.n} active={i === 0} />
                          <div className="flex justify-start">
                            <p className="w-100 text-[16px] font-semibold leading-[1.3] tracking-[-0.64px] text-[#012970]">{c.title}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </Wide>

        {/* ── 13. DESIGN SYSTEM — WIDE — row1: 2 cols, row2: 1 full ── */}
        <Wide className="space-y-6">
          <SectionTitle>Design System</SectionTitle>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
                <CaseStudyImage src={sobhaAssets.designSystemColors} alt="Design System — Colour Palette" className="w-full h-auto" />
              </div>
              <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
                <CaseStudyImage src={sobhaAssets.designSystemTypography} alt="Design System — Typography" className="w-full h-auto" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
              <CaseStudyImage src={sobhaAssets.designSystemComponents} alt="Design System — Components & Icons" className="w-full h-auto" />
            </div>
          </div>
        </Wide>

      </article>

      <div className="mt-16">
        <Footer />
      </div>
      <StickyBottomMenu />
    </main>
  );
}
