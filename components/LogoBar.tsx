"use client";

const logos = [
  { src: "/logo.svg", alt: "Client 1", w: "w-[88px]", h: "h-[21px]" },
  { src: "/logo.svg", alt: "Client 2", w: "w-[64px]", h: "h-[32px]" },
  { src: "/logo.svg", alt: "Client 3", w: "w-[47px]", h: "h-[31px]" },
  { src: "/logo.svg", alt: "Client 4", w: "w-[104px]", h: "h-[28px]" },
  { src: "/logo.svg", alt: "Client 5", w: "w-[56px]", h: "h-[22px]" },
];

// duplicate for infinite loop
const loopLogos = [...logos, ...logos];

export default function LogoBar() {
  return (
    <section className="w-full overflow-hidden bg-white py-16">
      <div className="mx-auto w-full max-w-[1100px]">
        
        {/* Title */}
        <p className="mb-8 text-center text-[13px] font-semibold tracking-[-0.65px] text-[#171717]/50">
          Proudly worked with:
        </p>

        {/* Marquee container */}
        <div className="relative overflow-hidden">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

          {/* Moving logos */}
          <div className="animate-marquee flex min-w-max items-center gap-16">
            {loopLogos.map((logo, index) => (
              <div
                key={index}
                className="flex h-[42px] shrink-0 items-center justify-center opacity-60 transition duration-300 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.w} ${logo.h} object-contain grayscale transition duration-300 hover:grayscale-0`}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}