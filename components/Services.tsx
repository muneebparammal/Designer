"use client";

import { useState } from "react";

const imgFrame0 = "/icon1.svg";
const imgFrame1 = "/icon2.svg";
const imgFrame2 = "/icon3.svg";
const imgFrame3 = "/icon4.svg";
const imgFrame4 = "/icon5.svg";

const services = [
  {
    name: "Web Design",
    icon: imgFrame0,
    desc: "Designing clean, modern websites that are easy to use and visually engaging.",
  },
  {
    name: "Web Development",
    icon: imgFrame1,
    desc: "Crafting visually appealing, user-friendly designs that reflect your brand. From wireframes to final prototypes, every detail is considered.",
  },
  {
    name: "Brand Identity",
    icon: imgFrame2,
    desc: "Building strong visual identities that help brands feel clear, consistent, and memorable.",
  },
  {
    name: "UX/UI Design",
    icon: imgFrame3,
    desc: "Creating intuitive digital experiences through thoughtful user flows, wireframes, and polished interfaces.",
  },
  {
    name: "Consultation Services",
    icon: imgFrame4,
    desc: "Helping teams improve digital products with practical design direction and UX thinking.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[550px] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[#171717] text-[50px] font-semibold tracking-[-2.5px] leading-none">
            My services
          </h2>
          <p className="text-[#171717]/50 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[220px]">
            Here&apos;s how I can help bring your vision to life:
          </p>
        </div>

        <div className="flex flex-col gap-[30px]">
          {services.map((svc, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="flex flex-col">
                <div className="w-full h-px bg-[#E9E9E9]" />

                <button
                  type="button"
                  onClick={() => toggleService(i)}
                  className="flex items-start justify-between pt-6 text-left w-full group"
                >
                  <div className="flex items-center gap-[16px]">
                    <img
                      src={svc.icon}
                      alt={svc.name}
                      className="w-[24px] h-[24px] flex-shrink-0"
                    />
                    <p className="text-[#171717] text-[22px] font-semibold tracking-[-0.88px] leading-[1.4]">
                      {svc.name}
                    </p>
                  </div>

                  <span
                    className={`text-[28px] leading-none transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#171717]/60 text-[16px] font-semibold tracking-[-0.64px] leading-[1.3] w-[372px] pb-1">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}