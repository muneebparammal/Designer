"use client";

const imgImage = "works/sobha.png";
const imgImage1 = "works/almersad.png";
const imgImage2 = "works/kula.png";
const imgImage3 = "works/ADAC.png";
const imgLink = "/arrow_2.svg";
const imgFrameIcon = "works/sobha-sm.svg";
const imgLogo1 = "works/almersad-sm.svg";
const imgLogo2 = "works/kula-sm.svg";
const imgLogo3 = "works/ADAC-sm.svg";

const projects = [
  {
    image: imgImage,
    name: "One Sobha App",
    desc: "Community management mobile app",
    logoType: "icon",
  },
  {
    image: imgImage1,
    name: "AI powered  audit management system",
    desc: "An all-in-one, easy-to-edit template for photographers",
    logo: imgLogo1,
  },
  {
    image: imgImage2,
    name: "KULA",
    desc: "Real estate Community & living management product",
    logo: imgLogo2,
  },
  {
    image: imgImage3,
    name: "Abu Dhabi Airport",
    desc: "Airport management platform ",
    logo: imgLogo3,
  },
];

export default function Works() {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <div className="flex flex-col items-center gap-6 text-center mb-12">
       <h2 className="text-[#012970] 
text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] 
font-semibold 
tracking-[-0.8px] sm:tracking-[-1.4px] md:tracking-[-2px] lg:tracking-[-2.5px] 
leading-[1.1]">
          Selected Works
        </h2>
        <p className="text-[#072447] text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[247px]">
         Check out some of my favorite & most recent projects.
        </p>
      </div>

      <div className="relative w-full w-[550px]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="sticky top-24 mb-6"
            style={{
              zIndex: i + 1,
            }}
          >
            <div className="relative  w-full w-[550px] h-[400px] rounded-[42px] overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute bottom-[6px] left-[6px] right-[6px] h-[70px] bg-white rounded-[41px] shadow-[0px_9px_13px_0px_rgba(0,0,0,0.14)] flex items-center px-[8px] gap-[14px]">
                <div className="w-[54px] h-[54px] bg-[#F6F6F6] rounded-[50px] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {project.logoType === "icon" ? (
                    <img src={imgFrameIcon} alt="" className="w-[32px] h-[32px]" />
                  ) : (
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-full h-full object-contain p-1"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-px flex-1">
                  <p className="text-[#171717] text-[16px] font-semibold tracking-[-0.64px] leading-[1.4]">
                    {project.name}
                  </p>
                  <p className="text-[#171717] opacity-60 text-[13px] font-semibold tracking-[-0.39px] leading-[20px]">
                    {project.desc}
                  </p>
                </div>

                <div className="w-[54px] h-[54px] flex-shrink-0">
                  <img src={imgLink} alt="View project" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}