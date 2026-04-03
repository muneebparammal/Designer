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
const imgArrow = "./arrow-diaganol.svg";

const projects = [
  {
    image: imgImage,
    name: "One Sobha App",
    desc: "Community management mobile app",
    logoType: "icon",
    link: "https://www.behance.net/gallery/199242965/Sobha-Realty-Community-Management-App",
  },
  {
    image: imgImage1,
    name: "AI powered audit management system",
    desc: "An all-in-one, easy-to-edit template for photographers",
    logo: imgLogo1,
    link: "https://www.behance.net/gallery/209856597/Audit-management-System",
  },
  {
    image: imgImage2,
    name: "KULA",
    desc: "Real estate Community & living management product",
    logo: imgLogo2,
    link: "https://www.behance.net/gallery/238529767/KULA-Community-Living-Management-APP-UIUX",
  },
  {
    image: imgImage3,
    name: "Abu Dhabi Airport",
    desc: "Airport management platform",
    logo: imgLogo3,
    link: "https://www.behance.net/gallery/214927569/Airport-Management-Platform",
  },
];

export default function Works() {
  return (
    <section id="Works" className="flex w-full flex-col items-center py-16">
      <div className="mb-12 flex flex-col items-center gap-6 text-center">
        <h2 className="text-[#012970] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-semibold tracking-[-2px] leading-[1.1]">
          Selected Works
        </h2>

        <p className="w-[247px] text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] text-[#072447]">
          Check out some of my favorite & most recent projects.
        </p>
      </div>

      <div className="relative w-full max-w-[550px] md:px-0">
        {projects.map((project, i) => (
          <div
            key={i}
            className="sticky top-24 mb-6"
            style={{ zIndex: i + 1 }}
          >
            {/* 🔥 CLICKABLE CARD */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative w-full overflow-visible rounded-[42px] transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                
                {/* Image */}
                <div className="w-full overflow-hidden rounded-[42px] bg-[#f6f6f6] shadow-sm">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                {/* Bottom Card */}
                <div className="relative mx-[6px] mt-[-40px] flex min-h-[70px] items-center gap-[14px] rounded-[41px] bg-white px-[8px] py-2 shadow-[0px_9px_13px_0px_rgba(0,0,0,0.14)]">
                  
                  {/* Logo */}
                  <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[50px] bg-[#F6F6F6]">
                    {project.logoType === "icon" ? (
                      <img src={imgFrameIcon} className="h-[32px] w-[32px]" />
                    ) : (
                      <img
                        src={project.logo}
                        alt={project.name}
                        className="h-full w-full object-contain p-1"
                      />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex flex-1 flex-col gap-px">
                    <p className="text-[16px] font-semibold tracking-[-0.64px] text-[#171717]">
                      {project.name}
                    </p>

                    <p className="hidden sm:block text-[13px] font-semibold text-[#171717] opacity-80">
                      {project.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="h-[54px] w-[54px] flex-shrink-0">
                    <img
                      src={imgLink}
                      alt="View project"
                      className="h-full w-full"
                    />
                  </div>
                </div>

              </div>
            </a>
          </div>
          
        ))}
        
      </div>
         {/* Bottom prompt */}
       <div className="flex flex-col items-center py-8 gap-3">
  <a
    href="https://www.behance.net/muneebsha"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-[9px] hover:opacity-70 transition-opacity"
  >
    <span className="text-[#171717] text-[14px] font-semibold tracking-[-0.7px] leading-none">
      See more work
    </span>
    <img src={imgArrow} alt="" className="w-[10px] h-[10px]" />
  </a>
</div>
    </section>
  );
}