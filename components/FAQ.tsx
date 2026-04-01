'use client';
import { useState } from 'react';

const imgPlus = "./plus-sm.svg";
const imgMinus = "./minus-sm.svg";
const imgArrow = "./arrow-diaganol.svg";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I specialize in UX/UI design, web development, and branding for individuals and businesses.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "Project timelines vary depending on complexity. A standard website takes 2–4 weeks, while larger projects may take 6–8 weeks.",
  },
  {
    q: "Can I request additional revisions?",
    a: "Yes! I offer revision rounds as part of each package. Additional revisions can be arranged at an agreed rate.",
  },
  {
    q: "What tools do you use for design?",
    a: "I use Figma for design, Framer for no-code websites, and Adobe Photoshop for image editing.",
  },
  {
    q: "Is coding required to manage the designs you create?",
    a: "Not at all. I build sites with easy-to-use CMS systems so you can update content without any coding knowledge.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[550px] flex flex-col gap-8">
        {/* Heading */}
        <h2 className="text-[#171717] text-[50px] font-semibold tracking-[-2.5px] leading-none text-center">
          FAQ
        </h2>

        {/* Items */}
        <div className="flex flex-col gap-[8px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-[#E9E9E9] bg-white transition-all ${
                open === i ? 'rounded-[36px]' : 'rounded-[50px]'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-[32px] py-[29px] text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <p className="text-[#171717] text-[16px] font-semibold tracking-[-0.64px] leading-[1.4]">
                  {faq.q}
                </p>
                <img
                  src={open === i ? imgMinus : imgPlus}
                  alt={open === i ? 'close' : 'open'}
                  className="w-[42px] h-[42px] flex-shrink-0"
                />
              </button>
              {open === i && (
                <div className="px-[32px] pb-[29px]">
                  <p className="text-[#171717] opacity-50 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[350px]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-[rgba(23,23,23,0.5)] text-[13px] font-semibold tracking-[-0.65px] text-center leading-[1.3]">
            Do you have any other questions?
          </p>
          <button className="flex items-center gap-[9px] hover:opacity-70 transition-opacity">
            <span className="text-[#171717] text-[14px] font-semibold tracking-[-0.7px] leading-none">Ask me directly</span>
            <img src={imgArrow} alt="" className="w-[10px] h-[10px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
