"use client";

import { useState } from "react";

const imgFrame0 = "/product.svg";
const imgFrame1 = "/ux.svg";
const imgFrame2 = "/interaction.svg";
const imgFrame3 = "/research.svg";
const imgFrame4 = "/visual.svg";
const imgFrame5 = "/dev.svg";
const services = [
  {
    name: "End-to-End Product Design",
    icon: imgFrame0,
    desc: "I work across the full product lifecycle — from early ideas to final delivery. I also define and scale design systems to ensure consistency across products and teams.",
  },
  {
    name: "User Experience Design",
    icon: imgFrame1,
    desc: "I design clear and intuitive user journeys by simplifying complex workflows. Every decision is guided by usability, structure, and real user behavior.",
  },
  {
    name: "Interaction Design",
    icon: imgFrame2,
    desc: "I focus on how things behave — transitions, states, and feedback — making interactions feel natural, responsive, and easy to understand.",
  },
  {
    name: "Research & Validation",
    icon: imgFrame3,
    desc: "I use research and testing to understand user behavior and validate decisions, helping reduce assumptions and improve outcomes.",
  },
  {
    name: "Visual & Brand Design",
    icon: imgFrame4,
    desc: "I create supporting visuals across digital touchpoints — from UI elements to marketing assets — maintaining consistency in design language and brand expression.",
  },
  {
    name: "Front-End Implementation",
    icon: imgFrame5,
    desc: "I translate design into responsive front-end interfaces and work with reusable components aligned with design systems for consistency and scalability.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="Services" className="w-full flex justify-center py-10">
      <div className="w-[550px] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[#012970] 
text-[36px] md:text-[44px] lg:text-[50px] 
font-semibold 
tracking-[-0.8px] sm:tracking-[-1.4px] md:tracking-[-2px] lg:tracking-[-2.5px] 
leading-[1.1]">
           How I Work
          </h2>
          <p className="text-[#072447] text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[220px]">
           Turning ideas into intuitive, scalable digital products.
          </p>
        </div>

        <div className="flex flex-col gap-[30px]">
          {services.map((svc, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="flex flex-col">
                <div className="w-full h-px bg-[#012970]" />

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
                    <h4 className="text-[#012970] text-[20px] lg:text-[22px] font-medium tracking-[-0.88px] leading-[1.4]">
                      {svc.name}
                    </h4>
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
                    <p className="text-[#072447]/80 text-[16px] font-semibold tracking-[-0.64px] leading-[1.3] w-[372px] pb-1">
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