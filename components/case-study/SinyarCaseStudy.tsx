"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import StickyBottomMenu from "@/components/StickyBottomMenu";
import { sinyarAssets } from "@/lib/sinyar-assets";
import CaseStudyImage from "./CaseStudyImage";

/* ─── framer variants — same as Process.tsx ────────────────────────────────── */
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

/* ─── CenterTimeline — identical to Process.tsx ─────────────────────────────── */
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

/* ─── layout containers ─────────────────────────────────────────────────────
 *  Figma uses exactly two column widths:
 *    Narrow  550 px  →  text, hero card, challenges, footer
 *    Wide   1012 px  →  image galleries, laptop visuals, solution rows
 * ─────────────────────────────────────────────────────────────────────────── */
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

/* ─── tiny helpers ──────────────────────────────────────────────────────────── */

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

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-[68px] items-center gap-3 rounded-[41px] bg-white pl-2 pr-8 py-2 sm:min-h-[76px]">
      <div className="flex size-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[50px] sm:size-[54px]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold tracking-[-0.04em] text-[#072447]/80 sm:text-[14px]">
          {label}
        </p>
      </div>
      <p className="max-w-[52%] text-right text-[13px] font-semibold leading-snug tracking-[-0.03em] text-[#012970] sm:max-w-[55%] sm:text-[16px]">
        {value}
      </p>
    </div>
  );
}

/* ─── image helpers ─────────────────────────────────────────────────────────
 *  GalleryPair  two images side-by-side, each 451×338 (aspect ≈ 4:3)
 *  LaptopImage  full-width, 1012×690 (aspect ≈ 3:2)
 * ─────────────────────────────────────────────────────────────────────────── */
function GalleryPair({ left, right }: { left: string; right: string }) {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      {[left, right].map((src, i) => (
        <div
          key={i}
          className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px]"
          style={{ aspectRatio: "451/338" }}
        >
          <CaseStudyImage
            src={src}
            alt={`App screen ${i + 1}`}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function LaptopImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] mt-8"
      style={{ aspectRatio: "1012/690" }}
    >
      <CaseStudyImage src={src} alt={alt} className="absolute inset-0 " />
    </div>
  );
}

/* ─── solution row ──────────────────────────────────────────────────────────
 *  Within the 1012px wide container:
 *    text  ≈ 550px (flex-1)
 *    image ≈ 451px (shrink-0)
 * ─────────────────────────────────────────────────────────────────────────── */
function SolutionRow({
  reverse,
  title,
  children,
  imageSrc,
  imageAlt,
}: {
  reverse?: boolean;
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div
      className={`flex flex-col gap-6 lg:items-center lg:gap-[50px] ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* text side — 550 px on desktop */}
      <div className="min-w-0 flex-1 space-y-3 lg:max-w-[550px]">
        <h4 className="text-[20px] font-medium leading-[1.3] tracking-[-0.03em] text-[#012970]/100 sm:text-[22px] lg:text-[24px]">
          {title}
        </h4>
        <div className="text-[14px] font-semibold leading-[1.6] tracking-[-0.03em] text-[#072447]/80 sm:text-[15px] lg:text-[18px] [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </div>

      {/* image side — 451 px on desktop */}
      <div
        className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] lg:w-[451px] lg:shrink-0"
        style={{ aspectRatio: "451/338" }}
      >
        <CaseStudyImage
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  );
}

/* ─── data ──────────────────────────────────────────────────────────────────── */

const challenges = [
  {
    n: "01",
    title: "Platform limitations (Power Apps)",
    outcome: "Designed simplified, scalable UI using native components",
  },
  {
    n: "02",
    title: "Complex workflows",
    outcome: "Broke into smaller, manageable steps",
  },
  {
    n: "03",
    title: "Engagement constraints",
    outcome: "Introduced lightweight gamification",
  },
  {
    n: "04",
    title: "Consistency issues",
    outcome: "Created reusable UI patterns within platform limits",
  },
] as const;

const moreProjects = [
  {
    title: "One Sobha App",
    subtitle: "Community management mobile app",
    image: "works/sobha.png",
    href: "https://www.behance.net/gallery/199242965/Sobha-Realty-Community-Management-App",
  },
  {
    title: "KULA",
    subtitle: "Real estate community & living management product",
    image: "works/kula.png",
    href: "https://www.behance.net/gallery/238529767/KULA-Community-Living-Management-APP-UIUX",
  },
  {
    title: "Abu Dhabi Airport",
    subtitle: "Airport management platform",
    image: "works/ADAC.png",
    href: "https://www.behance.net/gallery/214927569/Airport-Management-Platform",
  },
] as const;

/* ─── page ──────────────────────────────────────────────────────────────────── */

export default function SinyarCaseStudy() {
  return (
    <main className="min-h-screen bg-white pb-10 pt-0">

    

      {/* ── hero card — NARROW — matches Hero.tsx exactly ── */}
      <Narrow>
        <section className="relative w-full">

          {/* Decorative lanyard — identical DOM to Hero.tsx */}
          <div className="mb-[-36px] flex flex-col items-center">
            <div className="z-20 flex flex-col items-center">
              <div className="h-[50px] w-[53px] bg-[#012970]" />
              <div className="h-[36px] w-[63px] rounded-[6px] bg-[#6C6C6C]" />
              <div className="h-[26px] w-[31px] rounded-bl-[4px] rounded-br-[4px] bg-gradient-to-b from-[#080808] to-[#2e2e2e]" />
              <div className="mt-[-3px] h-[19px] w-[63px] rounded-[46px] border border-[#eaeaea] bg-white" />
            </div>
          </div>

          {/* Outer gray card — identical to Hero.tsx */}
          <div className="relative overflow-hidden rounded-[46px] border border-[#EAEAEA] bg-[#EEF2F8] px-[9px] pt-[50px] pb-[20px]">

            {/* Hero image — fills the inner card, no text content (matches Figma) */}
            <div
              className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[36px]"
              style={{ aspectRatio: "532/386" }}
            >
              <CaseStudyImage
                src={sinyarAssets.hero}
                alt="Emiratisation learning app hero mockup"
                className="absolute inset-0 size-full object-cover"
              />
            </div>

            {/* Meta rows — mt-4 px-[9px] matches Hero.tsx location bar */}
            <div className="mt-4 flex flex-col gap-1.5 px-[9px]">
              <MetaRow
                icon={
                  <div className="flex size-full items-center justify-center rounded-[50px] bg-[#0b1f41]">
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white">AF</span>
                  </div>
                }
                label="Client"
                value="Al-Futtaim Group"
              />
              <MetaRow
                icon={
                  <div className="flex size-full items-center justify-center rounded-[50px] bg-[#f6f6f6]">
                    <img src="/visual.svg" alt="" className="size-[20px] opacity-80 sm:size-[22px]" />
                  </div>
                }
                label="Category"
                value="Mobile UX/UI Design, Power Apps"
              />
              <MetaRow
                icon={
                  <div className="flex size-full items-center justify-center rounded-[50px] bg-[#f6f6f6]">
                    <img src="/Interaction.svg" alt="" className="size-[20px] opacity-80 sm:size-[22px]" />
                  </div>
                }
                label="Role"
                value="Lead UX/UI Designer"
              />
            </div>

            {/* Visit website — same placement as Hero.tsx location text */}
            {/* <div className="mt-5 flex items-center justify-center">
              <a
                href="#"
                className="flex items-center gap-[6px] text-[13px] font-semibold tracking-[-0.04em] text-[#012970]/70 transition-opacity hover:opacity-80"
              >
                Visit website
                <img src="/arrow-diaganol.svg" alt="" className="h-[10px] w-[10px]" />
              </a>
            </div> */}
          </div>
        </section>
      </Narrow>

      {/* ── article — each section picks its own width ── */}
      <article className="mt-16 flex flex-col gap-14">

        {/* Intro block — NARROW  title → tagline → Project overview → body (Figma gap-[30px]) */}
        <Narrow className="flex flex-col gap-[30px]">
          <h1 className="text-[40px] font-semibold leading-none tracking-[-2px] text-[#012970] sm:text-[44px] md:text-[50px] md:tracking-[-2.5px]">
            Emiratisation Training App
          </h1>
          <p className="text-[16px] font-semibold leading-[1.4] tracking-[-0.72px] text-[#072447]/80 sm:text-[17px] md:text-[18px]">
            Designing a gamified mobile experience on a low-code platform (Power Apps)
          </p>
          <SectionTitle>Project overview</SectionTitle>
          <Body>
            <p className="mb-3">
              SINYAR is a mobile-first application designed to support an Emiratisation
              development program by helping candidates complete structured learning journeys
              while enabling managers to track performance and approvals in real time.
            </p>
            <p>
              The solution was built using Microsoft Power Apps, requiring the design to
              align with platform capabilities while still delivering a seamless user experience.
            </p>
          </Body>
        </Narrow>

        {/* my role — NARROW */}
        <Narrow className="space-y-5">
          <SectionTitle>My role</SectionTitle>
          <Body>
            <p className="mb-3">
              I led the end-to-end UX/UI design with a strong focus on designing within
              low-code constraints:
            </p>
            <ul>
              <li>UX research and stakeholder alignment</li>
              <li>Journey mapping and workflow structuring</li>
              <li>Designing within Power Apps UI and interaction limitations</li>
              <li>Creating scalable UI patterns aligned with platform components</li>
              <li>Wireframes, UI design, and prototypes</li>
              <li>Close collaboration with developers for feasibility</li>
            </ul>
          </Body>
        </Narrow>

        {/* gallery 1 — WIDE */}
        <Wide>
          <GalleryPair left={sinyarAssets.gallery1} right={sinyarAssets.gallery2} />
        </Wide>

        {/* problem — NARROW */}
        <Narrow className="space-y-5">
          <SectionTitle>Problem</SectionTitle>
          <Body>
            <p className="mb-3">Along with business challenges, there were platform constraints:</p>
            <ul>
              <li>No existing system for tracking learning progress</li>
              <li>Limited manager visibility</li>
              <li>Low engagement in training programs</li>
              <li>Manual workflows for approvals</li>
              <li>Design limitations due to low-code platform (Power Apps)</li>
            </ul>
          </Body>
        </Narrow>

        {/* approach — NARROW */}
        <Narrow className="space-y-5">
          <SectionTitle>Approach</SectionTitle>
          <Body>
            <p className="mb-3">I adapted the UX process to balance user needs + platform constraints:</p>
            <ul>
              <li>Defined user journeys for candidates and managers</li>
              <li>Simplified flows to match Power Apps capabilities</li>
              <li>Used reusable UI patterns for consistency</li>
              <li>Prioritized clarity over complex interactions</li>
              <li>Collaborated closely with developers to ensure feasibility</li>
            </ul>
          </Body>
        </Narrow>

        {/* laptop 1 — WIDE */}
        <Wide>
           <SectionTitle>Customer Journey Map</SectionTitle>
          <LaptopImage src={sinyarAssets.laptop1} alt="Customer Journey Map" />
        </Wide>

        {/* solution title — NARROW */}
  

        {/* solution rows — WIDE (text ≈ 550 + gap + image ≈ 451 = 1012) */}
        <Wide className="space-y-10">
    
          <SectionTitle>Solution</SectionTitle>
  
          <SolutionRow
            title="Candidate Features"
            imageSrc={sinyarAssets.sinyar8}
            imageAlt="Candidate Features"
          >
            <ul>
              <li>Task tracking with deadlines </li>
              <li>Engagement through gamified challenges</li>
              <li>AI chatbot for guidance</li>
              <li>Easy access to support</li>
            </ul>
          </SolutionRow>
          <SolutionRow
            reverse
            title="Admin Features"
            imageSrc={sinyarAssets.sinyar9}
            imageAlt="Admin Features"
          >
            <ul>
              <li>Program and task setup </li>
              <li>Approval workflows </li>
              <li>Timeline management</li>
              <li>Overall progress tracking </li>
            </ul>
          </SolutionRow>
          <SolutionRow
            title="Manager Features "
            imageSrc={sinyarAssets.sinyar10}
            imageAlt="Manager Features "
          >
            <ul>
              <li>Real-time visibility into candidate progress </li>
              <li>Monitoring performance across modules  </li>
              <li>Task approvals </li>
            </ul>
          </SolutionRow>
         
        </Wide>

              {/* approach — NARROW */}
        <Narrow className="space-y-5">
          <SectionTitle>Key Design Decisions</SectionTitle>
          <Body>
            <ul>
              <li>Designed within Power Apps constraints, avoiding over-complex UI</li>
              <li>Focused on clarity and usability over visual-heavy design</li>
              <li>Built reusable components to maintain consistency</li>
              <li>Simplified interactions to match platform behavior</li>
              <li>Ensured developer feasibility from early stages</li>
            </ul>
          </Body>
        </Narrow>


        {/* outcome — NARROW */}
        <Narrow className="space-y-5">
          <SectionTitle>Outcome</SectionTitle>
          <Body>
            <p>
             The final product is a practical, scalable, and user-friendly mobile application, successfully delivered within a low-code environment while maintaining strong UX principles.
            </p>
          </Body>
        </Narrow>

         {/* approach — NARROW */}
        <Narrow className="space-y-5">
          <SectionTitle>Business Impact</SectionTitle>
          <Body>
            <ul>
              <li>Improved candidate engagement</li>
              <li>Enhanced transparency across stakeholders  </li>
              <li>Real-time performance tracking</li>
              <li>Streamlined onboarding workflows</li>
              <li>Better sentiment tracking through feedback</li>
            </ul>
          </Body>
        </Narrow>


        {/* challenges — NARROW, same component style as Process.tsx */}
        <Narrow>
          <div className="relative flex flex-col gap-[6px] rounded-[28px] border border-[#E9E9E9] bg-[#EEF2F8] p-[6px] md:rounded-[46px] md:p-[9px]">

            {/* Header — identical to Process.tsx header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex min-h-[120px] items-center overflow-hidden rounded-[24px] bg-[#012970] px-5 py-6 md:h-[80px] md:rounded-[40px] md:px-0 md:py-0"
            >
              <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-[22px] md:pl-[44px] md:pr-4">
               
                <div className="flex w-full max-w-[260px] flex-col gap-[10px] md:w-[210px]">
                  <p className="text-[18px] font-semibold leading-[1.2] tracking-[-0.5px] text-white md:text-[22px] md:tracking-[-0.88px]">
                   Challenges & How I Solved Them
                  </p>
              
                </div>
              </div>
              <img
                src="/ladder.svg"
                alt=""
                className="absolute bottom-0 right-0 h-[120px] w-[90px] object-contain opacity-80 md:h-[164px] md:w-[124px]"
              />
            </motion.div>

            {/* Mobile cards — identical style to Process.tsx mobile */}
            <div className="flex flex-col gap-[6px] md:hidden">
              {challenges.map((c, i) => (
                <motion.div
                  key={c.n}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-[24px] bg-white px-5 py-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-3 pt-1">
                      <div
                        className={`h-[26px] w-[26px] rounded-full border-[6px] ${
                          i === 0 ? "border-[#012970] bg-[#9EF34A]" : "border-[#012970] bg-white"
                        }`}
                      />
                      <span className="text-[20px] font-bold leading-none tracking-[-0.8px] text-[#012970]">
                        {c.n}
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                      <h4 className="text-[20px] font-medium leading-[1] tracking-[-1px] text-[#171717]">
                        {c.title}
                      </h4>
                      <p className="text-[15px] font-semibold leading-[1.35] tracking-[-0.4px] text-[#171717]/80">
                        {c.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop cards — alternating center-timeline layout identical to Process.tsx */}
            <div className="hidden flex-col gap-[6px] md:flex">
              {challenges.map((c, i) => {
                const titleLeft = i % 2 === 1;
                return (
                  <motion.div
                    key={c.n}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-[40px] bg-white px-[28px] py-[24px] transition-all duration-500 hover:shadow-[0px_9px_20px_rgba(0,0,0,0.06)]"
                  >
                    <div className="grid min-h-[104px] grid-cols-[1fr_70px_1fr] items-center gap-4">
                      {titleLeft ? (
                        <>
                          <div className="flex justify-end">
                            <p className="max-w-[160px] text-right text-[22px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#012970]">
                              {c.title}
                            </p>
                          </div>
                          <CenterTimeline n={c.n} active={i === 0} />
                          <div className="flex justify-start">
                            <p className="max-w-[190px] text-[16px] font-semibold leading-[1.3] tracking-[-0.64px] text-[#171717]/80">
                              {c.outcome}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-end">
                            <p className="max-w-[190px] text-right text-[16px] font-semibold leading-[1.3] tracking-[-0.64px] text-[#171717]/80">
                              {c.outcome}
                            </p>
                          </div>
                          <CenterTimeline n={c.n} active={i === 0} />
                          <div className="flex justify-start">
                            <p className="max-w-[160px] text-[22px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#012970]">
                              {c.title}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </Narrow>
         {/* gallery 2 + laptop 2 — WIDE */}
         <Wide className="space-y-2.5">
         
         <LaptopImage src={sinyarAssets.sinyar11} alt="SINYAR on laptop — angled view" />
       </Wide>


        {/* video — NARROW */}
        <Wide className="space-y-2.5">
          <div className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px]" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1181466934?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="training_video"
            />
          </div>
        </Wide>

       
     
      </article>

      <div className="mt-16">
        <Footer />
      </div>

      <StickyBottomMenu />
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </main>
  );
}
