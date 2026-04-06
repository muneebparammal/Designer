"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import StickyBottomMenu from "@/components/StickyBottomMenu";
import { projects } from "@/lib/projects";

/* ─── reusable project card (matches Works.tsx card exactly) ─────────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const card = (
    <div className="group relative w-full cursor-pointer overflow-visible rounded-[42px] transition-all duration-500 hover:-translate-y-1">
      {/* cover image */}
      <div
        className="relative w-full overflow-hidden rounded-[42px] bg-[#f6f6f6]"
        style={{ aspectRatio: "550/400" }}
      >
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      {/* floating bottom pill */}
      <div className="relative mx-[6px] -mt-[40px] flex min-h-[70px] items-center gap-[14px] rounded-[41px] bg-white px-[8px] py-2 shadow-[0px_9px_13px_0px_rgba(0,0,0,0.14)]">
        <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center overflow-hidden rounded-[50px] bg-[#F6F6F6]">
          <img
            src={project.logo}
            alt=""
            className="h-full w-full object-contain p-1"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-px">
          <p className="truncate text-[16px] font-semibold tracking-[-0.64px] text-[#012970]">
            {project.name}
          </p>
          <p className="text-[13px] font-semibold leading-5 tracking-[-0.39px] text-[#072447]/80">
            {project.desc}
          </p>
        </div>

        {/* arrow */}
        <div className="h-[54px] w-[54px] shrink-0">
          <img src="/arrow_2.svg" alt="View project" className="h-full w-full" />
        </div>
      </div>
    </div>
  );

  if (project.internal) {
    return (
      <Link href={project.href} className="block">
        {card}
      </Link>
    );
  }
  return (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
      {card}
    </a>
  );
}

/* ─── page ──────────────────────────────────────────────────────────────────── */
export default function WorksListPage() {
  return (
    <main className="min-h-screen bg-white pb-0 pt-6">

      {/* nav bar */}
      {/* <div className="mx-auto w-full max-w-[550px] px-4">
        <header className="relative mb-10 flex h-[52px] items-center justify-center">
          <Link
            href="/"
            className="absolute left-0 flex items-center gap-2 text-[14px] font-semibold tracking-[-0.04em] text-[#012970] transition-opacity hover:opacity-70"
          >
            <span className="flex size-[44px] items-center justify-center rounded-full bg-[#EEF2F8] sm:size-[52px]">
              <span className="text-[16px] leading-none">←</span>
            </span>
            <span className="hidden sm:inline">Go back</span>
          </Link>
          <span className="text-[14px] font-semibold tracking-[-0.04em] text-[#072447]/80">
            Work
          </span>
        </header>
      </div> */}

      {/* heading — NARROW centered */}
      <div className="mx-auto mb-12 w-full max-w-[550px] px-4 text-center">
        <h1 className="text-[40px] font-semibold leading-none tracking-[-2px] text-[#012970] sm:text-[44px] md:text-[50px] md:tracking-[-2.5px]">
          My work
        </h1>
        <p className="mx-auto mt-6 w-[247px] text-[17px] font-semibold leading-[1.4] tracking-[-0.68px] text-[#072447]/80">
          Check out some of my favorite &amp; most recent projects.
        </p>
      </div>

      {/* grid — 1 col mobile → 2 col desktop (Figma: two 550px columns, gap 10px) */}
      <div className="mx-auto w-full max-w-[550px] px-4 lg:max-w-[1110px]">
        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* see more */}
        <div className="flex flex-col items-center py-10 gap-3">
          <a
            href="https://www.behance.net/muneebsha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[9px] transition-opacity hover:opacity-70"
          >
            <span className="text-[14px] font-semibold tracking-[-0.7px] leading-none text-[#171717]">
              See more on Behance
            </span>
            <img src="/arrow-diaganol.svg" alt="" className="h-[10px] w-[10px]" />
          </a>
        </div>
      </div>

      <Footer />
      <StickyBottomMenu />
    </main>
  );
}
