'use client';
import { useState } from 'react';

const imgGroup8 = "http://localhost:3845/assets/1fd35d35f7e7b2b210116cda334dabaae26a84fa.svg";
const imgFrame36 = "http://localhost:3845/assets/528a746afd4dc7752478a45d2ef44e4940b26dd0.svg";
const imgFrameCheck = "http://localhost:3845/assets/02e6bd768bdbafbe70b2890b0dff37adff823e7f.svg";
const imgFrameClock = "http://localhost:3845/assets/2126e08aa5e1074aaebfec75a9137e561eab7be4.svg";

const plans = {
  Standard: {
    num: "01",
    price: "$1,999",
    duration: "2 weeks",
    subtitle: "Small projects or personal portfolios",
    features: [
      "Advanced animations",
      "CMS integration for blogs, portfolios, or dynamic content",
      "Up to 10 pages",
      "SEO-friendly structure",
      "Priority email support for faster communication",
    ],
    note: "Everything in the Standard Plan, plus:",
  },
  Pro: {
    num: "02",
    price: "$3,499",
    duration: "4 weeks",
    subtitle: "Growing businesses & brands",
    features: [
      "Everything in Standard",
      "Custom animations & interactions",
      "Up to 20 pages",
      "Advanced SEO",
      "2 months post-launch support",
    ],
    note: "Everything in the Pro Plan, plus:",
  },
  Premium: {
    num: "03",
    price: "$5,999",
    duration: "6 weeks",
    subtitle: "Established businesses & enterprises",
    features: [
      "Everything in Pro",
      "Full e-commerce integration",
      "Unlimited pages",
      "Dedicated account manager",
      "6 months post-launch support",
    ],
    note: "Our most comprehensive package:",
  },
};

type PlanKey = keyof typeof plans;

export default function Pricing() {
  const [active, setActive] = useState<PlanKey>('Standard');
  const plan = plans[active];

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[550px] flex flex-col gap-8">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[#171717] text-[50px] font-semibold tracking-[-2.5px] leading-none w-[368px]">
            Flexible plans for every need
          </h2>
          <p className="text-[#171717] opacity-50 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[425px]">
            Whether you&apos;re starting fresh or need a complete overhaul, choose the plan that fits your project.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="bg-[#F6F6F6] border border-[#E9E9E9] rounded-[50px] p-[4px] flex items-center gap-[28px] pr-[25px]">
            {(Object.keys(plans) as PlanKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`h-[46px] px-[20px] rounded-[50px] text-[14px] font-semibold tracking-[-0.7px] transition-all ${
                  active === key
                    ? 'bg-white text-[#171717] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.09)]'
                    : 'text-[#171717] hover:opacity-70'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Plan card */}
        <div className="bg-[#F6F6F6] border border-[#E9E9E9] rounded-[46px] p-[9px]">
          <div className="bg-white rounded-[41px] p-[50px] flex flex-col gap-6">
            {/* Plan number + done in */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-[10px]">
                <span className="text-[#171717] text-[28px] font-semibold tracking-[-1.4px] leading-none">{plan.num}</span>
                <img src={imgFrame36} alt="" className="h-[7px] w-[27px] mt-2" />
              </div>
              <div className="flex flex-col items-end gap-[5px]">
                <p className="text-[#171717] opacity-50 text-[14px] font-semibold tracking-[-0.7px] leading-none text-right">Done in</p>
                <div className="flex items-center gap-[3px]">
                  <img src={imgFrameClock} alt="" className="w-[13px] h-[13px]" />
                  <p className="text-[#171717] text-[14px] font-semibold tracking-[-0.7px] leading-none">{plan.duration}</p>
                </div>
              </div>
            </div>

            {/* Name + Price */}
            <div className="flex items-end justify-between">
              <h3 className="text-[#171717] text-[38px] font-semibold tracking-[-1.9px] leading-none">{active}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-[#171717] text-[28px] font-semibold tracking-[-1.96px] leading-[38px]">{plan.price}</span>
                <span className="text-[#171717] opacity-50 text-[17px] font-semibold tracking-[-1.19px] leading-none">/project</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-[#171717] opacity-50 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4]">
              {plan.subtitle}
            </p>

            {/* CTA */}
            <button className="bg-[#2A29FF] flex items-center gap-[16px] h-[58px] pl-[28px] pr-[3px] py-[20px] rounded-[100px] hover:opacity-90 transition-opacity self-start">
              <span className="text-white text-[18px] font-semibold tracking-[-0.72px] leading-none">Get Started</span>
              <img src={imgGroup8} alt="" className="w-[52px] h-[52px]" />
            </button>
          </div>

          {/* Features */}
          <div className="px-[50px] py-8 flex flex-col gap-6">
            <p className="text-[#171717] text-[14px] font-semibold tracking-[-0.7px] leading-none">{plan.note}</p>
            <div className="flex flex-col gap-[14px]">
              {plan.features.map((f, i) => (
                <div key={i} className="flex items-center gap-[11px]">
                  <img src={imgFrameCheck} alt="check" className="w-[20px] h-[20px] flex-shrink-0" />
                  <p className="text-[#171717] opacity-50 text-[16px] font-semibold tracking-[-0.64px] leading-none">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
