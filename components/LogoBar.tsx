"use client";

const logos = [
  { src: "logos/logo1.svg", alt: "Client 1"},
  { src: "logos/logo2.svg", alt: "Client 2"},
  { src: "logos/logo3.svg", alt: "Client 3"},
  { src: "logos/logo4.svg", alt: "Client 4"},
  { src: "logos/logo5.svg", alt: "Client 5"},
  { src: "logos/logo6.svg", alt: "Client 6"},
  { src: "logos/logo7.svg", alt: "Client 7"},
  { src: "logos/logo8.svg", alt: "Client 8"},
  { src: "logos/logo9.svg", alt: "Client 9"},
  { src: "logos/logo10.svg", alt: "Client 10"}, 
  { src: "logos/logo11.svg", alt: "Client 11"}, 
  { src: "logos/logo12.svg", alt: "Client 12"}, 
  { src: "logos/logo13.svg", alt: "Client 13"}, 
  { src: "logos/logo14.svg", alt: "Client 14"}, 
  
];

// duplicate for infinite loop
const loopLogos = [...logos, ...logos];

export default function LogoBar() {
  return (
    <section className="w-full overflow-hidden bg-white py-16">
      <div className="mx-auto w-full max-w-[1100px]">
        
        <p className="mb-8 text-center text-[13px] font-semibold tracking-[-0.65px] text-[#012970]">
          Proudly worked with:
        </p>

        <div className="relative overflow-hidden">

          {/* fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

          {/* marquee */}
          <div className="animate-marquee flex min-w-max items-center gap-8">
            {loopLogos.map((logo, index) => (
              <div
                key={index}
                className="flex h-[60px] w-[100px] shrink-0 items-center justify-center opacity-60 transition duration-300 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
