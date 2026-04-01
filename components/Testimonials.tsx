"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AUTO_DURATION = 4500;

const testimonials = [
  {
    quote:
      "Muneeb delivered exceptional work—creative, detailed, and perfectly aligned with our vision. Highly recommend!",
    name: "Stanley Black",
    role: "Creative Director at Lumina",
  },
  {
    quote:
      "Working with Muneeb was smooth from start to finish. The final design felt thoughtful, polished, and easy to use.",
    name: "Sarah Bennett",
    role: "Founder at Northlane",
  },
  {
    quote:
      "He understood our brand quickly and translated it into a clean, modern digital experience that exceeded expectations.",
    name: "Daniel Reed",
    role: "Product Lead at Avero",
  },
  {
    quote:
      "Great collaboration, clear communication, and a strong eye for detail throughout the project.",
    name: "Olivia Carter",
    role: "Marketing Manager at Solis",
  },
];

const socialProofAvatars = [
  "/client-1.png",
  "/client-2.png",
  "/client-3.png",
  "/client-4.png",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setProgressKey((prev) => prev + 1);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setProgressKey((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, AUTO_DURATION);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeItem = testimonials[activeIndex];

  return (
    <section className="w-full flex justify-center py-16 overflow-x-hidden">
      <div className="w-full max-w-[550px] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-[30px] text-center">
          <h2 className="text-[#171717] text-[36px] md:text-[50px] font-semibold tracking-[-1.8px] md:tracking-[-2.5px] leading-none">
           From Clients & 
            <br />
            Collaborators
          </h2>

          <div className="flex flex-col items-center gap-5 w-[179px]">
            <div className="relative h-[46px] w-[138px] border border-[#E8E8E8] rounded-[50px] flex items-center pl-[3px] bg-white">
              <div className="flex items-center">
                {socialProofAvatars.map((img, i) => (
                  <div
                    key={i}
                    className="w-[40px] h-[40px] rounded-full overflow-hidden -ml-[17px] first:ml-0 border-2 border-white"
                    style={{ zIndex: 5 + i }}
                  >
                    <img
                      src={img}
                      alt={`Client ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                <div className="z-20 w-[40px] h-[40px] -ml-[17px] rounded-full bg-[#012970] text-white text-[12px] font-semibold flex items-center justify-center border-2 border-white overflow-hidden">
                  <img
                    src="/star.png"
                    alt="Star"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-[14px] font-semibold tracking-[-0.56px]">
              <p className="text-[#171717] leading-[1.2]">Loved by those</p>
              <p className="text-[#171717]/60 leading-[1.2]">
                who value thoughtful design.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[860px] md:h-[900px] overflow-hidden">
          <div className="absolute right-0 top-[90px] w-[220px] md:w-[360px] h-[640px] md:h-[720px] rounded-[32px] md:rounded-[46px] bg-gradient-to-l from-white to-[#F3F3F3]" />
          <div className="absolute left-0 top-[90px] w-[220px] md:w-[360px] h-[640px] md:h-[720px] rounded-[32px] md:rounded-[46px] bg-gradient-to-r from-white to-[#F3F3F3]" />

          <img
            src="/hand.png"
            alt=""
            className="absolute left-1/2 top-[80px] z-10 w-[110%] max-w-[530px] -translate-x-1/2 object-contain pointer-events-none"
          />

          <div className="absolute left-1/2 top-[20px] z-20 w-[88vw] max-w-[435px] -translate-x-1/2 aspect-[435/860]">
            <div className="absolute left-[4.1%] top-[2.1%] h-[95.8%] w-[91.7%] overflow-hidden rounded-[12%] bg-[#012970]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_35%)]" />
              <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-b from-transparent to-[rgba(42,41,255,0.97)]" />

              {/* Static top profile */}
              <div className="absolute left-[7%] right-[7%] top-[13%] z-10 flex flex-col gap-[12px]">
                <div className="flex items-center gap-[10px]">
                  <div className="h-[33px] w-[33px] overflow-hidden rounded-full">
                    <img
                      src="/profile.jpg"
                      alt="Muneeb Parammal"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[14px] md:text-[15px] font-semibold leading-none tracking-[-0.56px] text-white">
                      Muneeb Parammal
                    </p>
                    <p className="text-[12px] md:text-[13px] font-semibold leading-none tracking-[-0.48px] text-white/60">
                      UI/UX Designer
                    </p>
                  </div>
                </div>

                {/* Dynamic progress only */}
                <div className="flex items-center gap-[10px]">
                  {testimonials.map((_, i) => (
                    <button
                      key={`${i}-${progressKey}`}
                      type="button"
                      onClick={() => goToSlide(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/30"
                    >
                      {i < activeIndex && (
                        <span className="absolute inset-0 rounded-full bg-white" />
                      )}

                      {i === activeIndex && (
                        <motion.span
                          key={`${activeIndex}-${progressKey}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: AUTO_DURATION / 1000,
                            ease: "linear",
                          }}
                          className="absolute left-0 top-0 h-full rounded-full bg-white"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic bottom content */}
              <div className="absolute bottom-[5%] left-[7%] right-[7%] z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="flex flex-col gap-[30px] md:gap-[36px]"
                  >
                    <div className="flex flex-col gap-[18px] md:gap-[20px]">
                      <div className="flex gap-[4px] text-white text-[14px] leading-none">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>

                      <p className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold leading-[1.2] tracking-[-0.88px] text-white">
                        {activeItem.quote}
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-col gap-[8px]">
                        <p className="text-[14px] font-semibold leading-none tracking-[-0.56px] text-white">
                          {activeItem.name}
                        </p>
                        <p className="text-[12px] font-semibold leading-none tracking-[-0.48px] text-white/60">
                          {activeItem.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={prevSlide}
                          aria-label="Previous testimonial"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-base text-white transition hover:bg-white/10"
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          onClick={nextSlide}
                          aria-label="Next testimonial"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-base text-white transition hover:bg-white/10"
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <img
              src="/phone-frame.png"
              alt="Phone mockup"
              className="absolute inset-0 z-30 h-full w-full object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}