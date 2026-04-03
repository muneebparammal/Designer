'use client';
import { useState } from 'react';

const imgPlus = "./plus-sm.svg";
const imgMinus = "./minus-sm.svg";
const imgArrow = "./arrow-diaganol.svg";

const faqs = [
  {
    q: "What kind of projects do you usually work on?",
    a: "I work on web and mobile products, including internal tools, enterprise platforms, and customer-facing applications — focusing on usability, scalability, and real-world use.",
  },
  {
    q: "What is your role in a project?",
    a: "I typically work end-to-end — from understanding requirements and defining flows to designing UI and supporting development with clear handoffs.",
  },
  {
    q: "Do you work with teams or independently?",
    a: "Both. I’ve worked closely with product managers, developers, and stakeholders, and I’m also comfortable handling projects independently when needed.",
  },
  {
    q: "How do you handle feedback and iterations?",
    a: "Design is iterative. I work in cycles — sharing early, gathering feedback, and refining continuously to reach the best outcome.",
  },
  {
    q: "What tools and workflows do you use?",
    a: "I mainly use Figma for design and prototyping, along with collaborative tools like FigJam and Miro. I also use AI tools to speed up exploration and iteration.",
  },
  {
    q: "Do you work beyond UX and product design?",
    a: "Yes, I also work on front-end development and visual design, including marketing assets, presentations, social media, motion, and video editing — helping maintain consistency across product and brand touchpoints.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-full w-[550px] flex flex-col gap-8">
        {/* Heading */}
        <h2 className="text-[#012970] 
text-[36px] md:text-[44px] lg:text-[50px] 
font-semibold 
tracking-[-0.8px] sm:tracking-[-1.4px] md:tracking-[-2px] lg:tracking-[-2.5px] 
leading-[1.1] text-center">
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
                <p className="text-[#012970] text-[16px] font-semibold tracking-[-0.64px] leading-[1.4]">
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
                  <p className="w-full text-[#171717] opacity-80 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[350px]">
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
