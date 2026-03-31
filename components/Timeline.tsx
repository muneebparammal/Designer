const imgGroup8 = "http://localhost:3845/assets/1fd35d35f7e7b2b210116cda334dabaae26a84fa.svg";
const imgEllipse54 = "http://localhost:3845/assets/3c2fec7ccdd04113c3e266460eb6675337418c63.svg";
const imgEllipse53 = "http://localhost:3845/assets/b22d3ab6934fa9217c1fd1ba6890cbbf8da7da6d.svg";

const jobs = [
  { title: "Senior Product Designer", company: "Innovate Digital", period: "Nov '20 - Current" },
  { title: "UI/UX Designer", company: "Creative Studios", period: "May '17 - Dec '19" },
  { title: "Junior Web Designer", company: "Pixel Perfect Agency", period: "Jul '14 - Apr '17" },
  { title: "Design Intern", company: "Bright Ideas Co.", period: "Sep '13 - Jun '14" },
];

const years = ["2023", "2022", "2021", "2020"];

export default function Timeline() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[550px] flex flex-col gap-8 pl-[50px]">
        {/* Year timeline */}
        <div className="relative">
          <div className="absolute top-[5px] left-0 right-0 h-px bg-[#E9E9E9]" />
          <div className="relative flex items-start gap-[27px]">
            {/* Current year */}
            <div className="flex flex-col items-start gap-0 relative">
              <img src={imgEllipse53} alt="" className="w-[14px] h-[14px]" />
              <span className="text-[#171717] text-[52px] font-semibold tracking-[-3.12px] leading-none mt-2">2024</span>
            </div>
            {/* Past years */}
            {years.map((y, i) => (
              <div key={i} className="flex flex-col items-start gap-0 relative">
                <img src={imgEllipse54} alt="" className="w-[10px] h-[10px] mt-[2px]" />
                <span className="text-[#171717] opacity-40 text-[18px] font-semibold tracking-[-1.08px] leading-none mt-3">{y}</span>
              </div>
            ))}
            {/* Gradient fade to right */}
            <div className="absolute right-0 top-0 bottom-0 w-[138px] bg-gradient-to-r from-transparent to-white pointer-events-none" />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-[16px]">
          <p className="text-[#171717] text-[22px] font-semibold tracking-[-0.88px] leading-[1.4]">
            My journey through design
          </p>
          <p className="text-[#171717] opacity-50 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[342px]">
            Explore the milestones and experiences that have shaped my career, year by year.
          </p>
        </div>

        {/* Job list */}
        <div className="flex flex-col gap-[36px]">
          {jobs.map((job, i) => (
            <div key={i} className="flex flex-col gap-0">
              <div className="w-full h-px bg-[#E9E9E9]" />
              <div className="flex items-baseline justify-between pt-[22px]">
                <p className="text-[#171717] text-[16px] font-semibold tracking-[-0.64px] leading-[1.4]">{job.title}</p>
                <p className="text-[#171717] text-[14px] font-semibold tracking-[-0.56px] leading-[1.2] text-right">{job.company}</p>
                <p className="text-[#171717] opacity-60 text-[14px] font-semibold tracking-[-0.56px] leading-[1.2] text-right">{job.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button className="bg-[#2A29FF] flex items-center gap-[16px] h-[58px] pl-[28px] pr-[3px] py-[20px] rounded-[100px] hover:opacity-90 transition-opacity self-start mt-2">
          <span className="text-white text-[18px] font-semibold tracking-[-0.72px] leading-none">Contact me</span>
          <img src={imgGroup8} alt="" className="w-[52px] h-[52px]" />
        </button>
      </div>
    </section>
  );
}
