'use client';

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex w-full justify-center pt-0 pb-10">
      <div className="relative w-full max-w-[550px]">
        {/* Decorative stripe at top */}
        <div className="mb-[-36px] flex flex-col items-center">
          <div className="z-20 flex flex-col items-center">
            <div className="h-[50px] w-[53px] bg-[#012970]" />
            <div className="h-[36px] w-[63px] rounded-[6px] bg-[#6C6C6C]" />
            <div className="h-[26px] w-[31px] rounded-bl-[4px] rounded-br-[4px] bg-gradient-to-b from-[#080808] to-[#2e2e2e]" />
            <div className="mt-[-3px] h-[19px] w-[63px] rounded-[46px] border border-[#eaeaea] bg-white" />
          </div>
        </div>

        {/* Outer gray card */}
        <div className="relative overflow-hidden rounded-[46px] border border-[#EAEAEA] bg-[#EEF2F8] px-[9px] pt-[50px] pb-[20px]">
          {/* Inner white card */}
          <div className="relative rounded-[24px] bg-white px-4 pt-6 pb-6 shadow-[0px_7px_26.5px_0px_rgba(0,0,0,0.03)] sm:rounded-[36px] sm:px-6 sm:pt-8 sm:pb-8 md:px-8 md:pt-10 md:pb-10 lg:px-[50px]">
            {/* Avatar row */}
            <div className="mb-8 flex items-start justify-between">
              <div className="flex items-center gap-[18px]">
                <div className="h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-[100px]">
                  <img
                    src="/profile.jpg"
                    alt="Muneeb Parammal"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-[12px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="text-[20px] leading-[20px] font-semibold tracking-[-0.6px] text-[#012970]">
                      Muneeb Parammal
                    </p>
                    <p className="text-[14px] leading-[20px] font-semibold tracking-[-0.42px] text-[#072447]">
                      Sr. UI UX Designer / Product Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="mb-8 text-[32px] leading-[1.05] font-bold tracking-tight text-[#012970] sm:text-[42px] sm:tracking-[-0.02em] md:text-[52px] md:tracking-[-0.03em] lg:text-[60px] lg:tracking-[-0.04em]">
              I’m Crafting Meaningful Digital Experiences.
            </h1>

            {/* Subtext */}
            <div className="mb-8 flex flex-col gap-[22px]">
              <p className="max-w-[283px] text-[16px] leading-[1.4] font-semibold tracking-[-0.68px] text-[#072447]">
                I simplify complex problems into intuitive experiences across web and mobile.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mb-4 flex items-center gap-[8px]">
              <a
                href="mailto:muneebyfc@gmail.com?subject=Hello%20Muneeb&body=Hi%20Muneeb%2C%20I%20would%20like%20to%20connect."
                className="flex h-[58px] items-center gap-[16px] rounded-[100px] bg-[#012970] py-[20px] pl-[28px] pr-[3px] transition-opacity hover:opacity-90"
              >
                <span className="text-[14px] font-semibold tracking-[-0.68px] text-white lg:text-[16px]">
                  Say Hello
                </span>
                <img src="/arrow.svg" alt="" className="h-[52px] w-[52px]" />
              </a>

              <Link
                href="#Works"
                className="flex h-[58px] items-center rounded-[100px] bg-[#EEF2F8] px-[28px] transition-colors hover:bg-[#EDEDED]"
              >
                <span className="text-[14px] font-semibold tracking-[-0.68px] text-[#012970] lg:text-[16px]">
                  My work
                </span>
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="mt-4 flex flex-col items-center justify-between px-[9px]">
            <div className="flex items-center gap-[5px]">
              <img src="/map.svg" alt="" className="h-[13px] w-[13px]" />
              <p className="text-[13px] leading-[1.2] font-semibold tracking-[-0.65px]">
                <span className="text-[rgba(23,23,23,0.6)]">Based in </span>
                <span className="text-[#171717]">Dubai</span>
                <span className="text-[rgba(23,23,23,0.6)]">, United Arab Emirates</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}