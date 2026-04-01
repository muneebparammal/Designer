"use client";

import { motion } from "framer-motion";

const imgArrow = "/arrow.svg";

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "Define the problem, users, and context clearly.",
  },
  {
    num: "02",
    title: "Explore",
    desc: "Generate ideas, map flows, and test early concepts.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Refine solutions into clear, scalable interfaces.",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Build, validate, and continuously improve the product.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Process() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="w-full max-w-[550px]">
        <div className="relative flex flex-col gap-[6px] rounded-[28px] border border-[#E9E9E9] bg-[#EEF2F8] p-[6px] md:rounded-[46px] md:p-[9px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[180px] overflow-hidden rounded-[24px] bg-[#012970] px-5 py-6 md:h-[167px] md:rounded-[40px] md:px-0 md:py-0 md:items-center"
          >
            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-[22px] md:pl-[44px] md:pr-4">
              <span className="text-[72px] font-semibold leading-none tracking-[-3px] text-white md:text-[104px] md:tracking-[-6.24px]">
                4
              </span>

              <div className="flex w-full max-w-[260px] flex-col gap-[10px] md:w-[210px]">
                <p className="text-[18px] font-semibold leading-[1.2] tracking-[-0.5px] text-white md:text-[22px] md:tracking-[-0.88px]">
                  Step process
                </p>

                <p className="text-[15px] font-semibold leading-[1.2] tracking-[-0.4px] md:text-[17px] md:tracking-[-0.56px]">
                  <span className="text-white">A flexible process</span>
                  <span className="text-white/60">
                    {" "}
                    ocused on clarity, iteration, and building scalable{" "}
                  </span>
                  <span className="text-white">digital products.</span>
                  <span className="text-white/60">.</span>
                </p>
              </div>
            </div>

            <img
              src="/ladder.svg"
              alt=""
              className="absolute right-0 bottom-0 h-[120px] w-[90px] object-contain opacity-80 md:h-[164px] md:w-[124px]"
            />
          </motion.div>

          {/* Mobile */}
          <div className="flex flex-col gap-[6px] md:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-[24px] bg-white px-5 py-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-3 pt-1">
                    <div
                      className={`h-[26px] w-[26px] rounded-full border-[6px] ${
                        i === 0
                          ? "border-[#012970] bg-[#9EF34A]"
                          : "border-[#012970] bg-white"
                      }`}
                    />
                    <span className="text-[20px] font-bold leading-none tracking-[-0.8px] text-[#012970]">
                      {step.num}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <p className="text-[28px] font-semibold leading-[1] tracking-[-1px] text-[#171717]">
                      {step.title}
                    </p>
                    <p className="text-[15px] font-semibold leading-[1.35] tracking-[-0.4px] text-[#171717]/60">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden flex-col gap-[6px] md:flex">
            {steps.map((step, i) => {
              const titleLeft = i % 2 === 1;

              return (
                <motion.div
                  key={step.num}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[40px] bg-white px-[28px] py-[24px] transition-all duration-500 hover:shadow-[0px_9px_20px_rgba(0,0,0,0.06)]"
                >
                  <div className="grid min-h-[104px] grid-cols-[1fr_70px_1fr] items-center gap-4">
                    {titleLeft ? (
                      <>
                        <div className="flex justify-end">
                          <p className="max-w-[160px] text-[22px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#171717]">
                            {step.title}
                          </p>
                        </div>

                        <CenterTimeline step={step} active={i === 0} />

                        <div className="flex justify-start">
                          <p className="max-w-[190px] text-[16px] font-semibold leading-[1.3] tracking-[-0.64px] text-[#171717]/60">
                            {step.desc}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-end">
                          <p className="max-w-[190px] text-right text-[16px] font-semibold leading-[1.3] tracking-[-0.64px] text-[#171717]/60">
                            {step.desc}
                          </p>
                        </div>

                        <CenterTimeline step={step} active={i === 0} />

                        <div className="flex justify-start">
                          <p className="max-w-[160px] text-[22px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#171717]">
                            {step.title}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom link */}
     
        </div>
      </div>
    </section>
  );
}

function CenterTimeline({
  step,
  active,
}: {
  step: { num: string };
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-[12px]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.45 }}
        className={`h-[26px] w-[26px] rounded-full border-[6px] ${
          active ? "border-[#012970] bg-[#3075CA]" : "border-[#012970] bg-white"
        }`}
      />
      <span className="text-[20px] font-bold leading-none tracking-[-0.8px] text-[#012970]">
        {step.num}
      </span>
    </div>
  );
}