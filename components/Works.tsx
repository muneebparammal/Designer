"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";

const imgFrameIcon = "works/sobha-sm.svg";
const imgLink = "/arrow_2.svg";
const imgArrow = "/arrow-diaganol.svg";

export default function Works() {
  return (
    <section id="Works" className="flex w-full flex-col items-center py-16">
      <div className="mb-12 flex flex-col items-center gap-6 text-center">
        <h2 className="text-[#012970] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-semibold tracking-[-2px] leading-[1.1]">
          Selected Works
        </h2>
        <p className="w-[247px] text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] text-[#072447]">
          Check out some of my favorite &amp; most recent projects.
        </p>
      </div>

      <div className="relative w-full max-w-[550px] md:px-0">
        {projects.map((project, i) => {
          const card = (
            <div className="relative w-full cursor-pointer overflow-visible rounded-[42px] transition-all duration-500 hover:-translate-y-1">
              <div className="w-full overflow-hidden rounded-[42px] bg-[#f6f6f6] shadow-sm">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="relative mx-[0px] mt-[-40px] flex min-h-[90px] items-center gap-[14px] rounded-[16px] px-[8px] pl-[24px] py-2 bg-[#EEF2F8]">
                {/* <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[50px] bg-[#F6F6F6]">
                  {project.logoType === "icon" ? (
                    <img src={imgFrameIcon} className="h-[32px] w-[32px]" alt="" />
                  ) : (
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="h-full w-full object-contain p-1"
                    />
                  )}
                </div> */}

                <div className="flex flex-1 flex-col gap-px">
                  <p className="text-[16px] font-semibold tracking-[-0.64px] text-[#012970]">
                    {project.name}
                  </p>
                  <p className="hidden sm:block text-[13px] font-semibold text-[#171717] opacity-80">
                    {project.desc}
                  </p>
                </div>

                <div className="h-[54px] w-[54px] flex-shrink-0">
                  <img src={imgLink} alt="View project" className="h-full w-full" />
                </div>
              </div>
            </div>
          );

          return (
            <div
              key={project.name}
              className="sticky top-24 mb-6"
              style={{ zIndex: i + 1 }}
            >
              {/* 🔥 CLICKABLE CARD */}
              {project.internal ? (
                <Link href={project.href} className="block">
                  {card}
                </Link>
              ) : (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* "See all work" → links to /work list page */}
      <div className="flex flex-col items-center py-8 gap-3">
        <Link
          href="/work"
          className="flex items-center gap-[9px] hover:opacity-70 transition-opacity"
        >
          <span className="text-[#171717] text-[14px] font-semibold tracking-[-0.7px] leading-none">
            See all work
          </span>
          <img src={imgArrow} alt="" className="w-[10px] h-[10px]" />
        </Link>
      </div>
    </section>
  );
}
