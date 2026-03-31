"use client";

const imgAbout = "/about.png";
const imgPlus = "/plus.svg";
const imgFrame = "/frame.svg";

export default function Advantages() {
  return (
    <section className="w-full py-10">
      <div className="w-full max-w-[550px] flex flex-col gap-[10px] px-4 md:px-0">
        {/* Top stat */}
        <div className="flex min-h-[140px] items-center rounded-[24px] border border-[#E9E9E9] bg-white px-5 py-6 md:h-[183px] md:rounded-[36px] md:px-[50px]">
          <div className="flex items-center gap-4 md:gap-[22px]">
            <div className="relative flex items-start gap-0">
              <span className="text-[48px] font-semibold leading-none tracking-[-2.5px] text-[#171717] md:text-[65px] md:tracking-[-3.9px]">
                10
              </span>
              <img src={imgPlus} alt="+" className="mt-1 h-[18px] w-[18px] md:h-[22px] md:w-[22px]" />
            </div>

            <div className="text-[13px] font-semibold leading-[1.2] tracking-[-0.4px] md:text-[14px] md:tracking-[-0.56px]">
              <p className="text-[rgba(35,35,35,0.6)]">Years of experience</p>
              <p className="text-[#232323]">in design and development</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-[10px] md:flex-row">
          {/* Photo */}
          <div className="h-[240px] w-full overflow-hidden rounded-[24px] md:h-[273px] md:w-[273px] md:rounded-[36px] md:flex-shrink-0">
            <img src={imgAbout} alt="About" className="h-full w-full object-cover" />
          </div>

          {/* 95% card */}
          <div className="relative flex min-h-[240px] flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-[#2A29FF] p-6 md:h-[273px] md:rounded-[36px] md:p-[40px]">
            {/* Decorative dot grid */}
            <div className="absolute right-6 top-6 grid grid-cols-5 gap-[8px] opacity-30 md:right-[40px] md:top-[40px] md:gap-[10px]">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="h-[4px] w-[4px] rounded-full bg-white" />
              ))}
            </div>

            <div className="relative z-10 flex flex-col gap-[14px]">
              <div className="flex items-end gap-0">
                <span className="text-[52px] font-semibold leading-none tracking-[-2.8px] text-white md:text-[65px] md:tracking-[-3.9px]">
                  95
                </span>
                <span className="mb-1 text-[18px] font-semibold leading-none tracking-[-1px] text-white md:mb-2 md:text-[23px] md:tracking-[-1.38px]">
                  %
                </span>
              </div>

              <div className="max-w-[180px] text-[13px] font-semibold leading-[1.2] tracking-[-0.4px] md:text-[14px] md:tracking-[-0.56px]">
                <p className="text-[rgba(255,255,255,0.6)]">Client satisfaction rate</p>
                <p className="text-white">built on trust and results.</p>
              </div>
            </div>

            {/* Icon button */}
            <div className="absolute bottom-6 left-6 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.39)] backdrop-blur-[8px] md:bottom-[40px] md:left-[40px]">
              <img src={imgFrame} alt="" className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}