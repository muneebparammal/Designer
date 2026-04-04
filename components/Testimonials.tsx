"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AUTO_DURATION = 10000;

const testimonials = [
  {
    quote:
      "Working with you has always been a great experience. You consistently deliver high-quality work on time, stay responsive throughout the process, and ask exactly the right questions to get things done properly. What I appreciate most is that you’re genuinely reliable. Even when things get busy, I never have to worry about your part.",
    name: "Madina Sadykova",
    role: "UX/UI Design Manager at PresightAI",
    bgImage: "/madina.png",
  },
  {
    quote:
      "Muneeb played an important role in strengthening our brand and supporting marketing and lead generation at Stryx Sports. He is dependable, responsive, and someone you can always count on. He’s always on top of his work and easy to depend on.",
    name: "Mohamed Elbatouti",
    role: "Chief Commercial Officer at Stryxsports",
    bgImage: "/batouti.png",
  },
  {
    quote:
      "Working with Muneeb on the website project was seamless. He was highly supportive in structuring, planning, and effortlessly executing the entire process, making collaboration easy and efficient throughout.",
    name: "Devika Mathavan",
    role: "Marketing & Brand Manager at 2b Limitless",
    bgImage: "/devika.png",
  },
  // {
  //   quote:
  //     "Great collaboration, clear communication, and a strong eye for detail throughout the project.",
  //   name: "Olivia Carter",
  //   role: "Marketing Manager at Solis",
  //   bgImage: "/client1.jpg",
  // },
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
    <section
      id="Testimonials"
      className="flex w-full justify-center overflow-x-hidden py-16"
    >
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <div className="flex flex-col items-center gap-[30px] text-center">
          <h2 className="text-[36px] font-semibold leading-none tracking-[-1.8px] text-[#171717] md:text-[50px] md:tracking-[-2.5px]">
            From Clients &
            <br />
            Collaborators
          </h2>

          <div className="flex w-[179px] flex-col items-center gap-5">
            <div className="relative flex h-[46px] w-[138px] items-center rounded-[50px] border border-[#E8E8E8] bg-white pl-[3px]">
              <div className="flex items-center">
                {socialProofAvatars.map((img, i) => (
                  <div
                    key={i}
                    className="first:ml-0 h-[40px] w-[40px] overflow-hidden rounded-full border-2 border-white -ml-[17px]"
                    style={{ zIndex: 5 + i }}
                  >
                    <img
                      src={img}
                      alt={`Client ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}

                <div className="z-20 -ml-[17px] flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#012970] text-[12px] font-semibold text-white">
                  <img
                    src="/star.png"
                    alt="Star"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-[14px] font-semibold tracking-[-0.56px]">
              <p className="leading-[1.2] text-[#171717]">Loved by those</p>
              <p className="leading-[1.2] text-[#171717]/60">
                who value thoughtful design.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[860px] w-full overflow-hidden md:h-[900px]">
          <div className="absolute right-0 top-[90px] h-[640px] w-[220px] rounded-[32px] bg-gradient-to-l from-white to-[#F3F3F3] md:h-[720px] md:w-[360px] md:rounded-[46px]" />
          <div className="absolute left-0 top-[90px] h-[640px] w-[220px] rounded-[32px] bg-gradient-to-r from-white to-[#F3F3F3] md:h-[720px] md:w-[360px] md:rounded-[46px]" />

          <img
            src="/hand.png"
            alt=""
            className="pointer-events-none absolute left-1/2 top-[80px] z-10 w-[110%] max-w-[530px] -translate-x-1/2 object-contain"
          />

          <div className="absolute left-1/2 top-[20px] z-20 aspect-[435/860] w-[88vw] max-w-[435px] -translate-x-1/2">
            <div className="absolute left-[4.1%] top-[2.1%] h-[95.8%] w-[91.7%] overflow-hidden rounded-[12%] bg-[#2a29ff]">
              {/* Dynamic background image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bg-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeItem.bgImage}
                    alt={activeItem.name}
                    className="h-full w-full object-cover opacity-[0.22]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Blue overlay */}
              <div className="absolute inset-0 bg-[#012970]/50" />

              {/* Light top glow */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_35%)]" />

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-b from-transparent to-[rgba(1,41,112,0.97)]" />

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
                    <p className="text-[14px] font-semibold leading-none tracking-[-0.56px] text-white md:text-[15px]">
                      Muneeb Parammal
                    </p>
                    <p className="text-[12px] font-semibold leading-none tracking-[-0.48px] text-white/60 md:text-[13px]">
                      UI/UX Designer
                    </p>
                  </div>
                </div>

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
                      <div className="flex gap-[4px] text-[14px] leading-none text-[#5ff8ff]">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>

                      <p className="text-[18px] font-semibold leading-[1.2] tracking-[-0.88px] text-white sm:text-[20px] md:text-[24px]">
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
              className="pointer-events-none absolute inset-0 z-30 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}