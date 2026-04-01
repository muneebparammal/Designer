'use client';

const imgAvatar = "http://localhost:3845/assets/2b43cae28e933c836b2792d31030d21cf4780c59.png";
const imgVector = "http://localhost:3845/assets/b4d7af0e11670a91f499168ef7f107b3d79843b0.svg";
const imgIcon = "http://localhost:3845/assets/629876cae06a0472cd7b72d2888dbc78063744e9.svg";
const imgGroup8 = "http://localhost:3845/assets/1fd35d35f7e7b2b210116cda334dabaae26a84fa.svg";
const imgStars = "http://localhost:3845/assets/82730ecfd4e4c1301cbb06ba23f30f384b0fe40b.svg";
const imgXdark = "http://localhost:3845/assets/dae35453e0d6ca9c09de98cee2889645d1ead818.svg";
const imgIndark = "http://localhost:3845/assets/8b60bcfec63c3b0be1c70ca5436529b4cb7aad90.svg";
const imgDrdark = "http://localhost:3845/assets/a8f065f2aa73dbd4ca5fcbbf819c1c98fce70cbe.svg";
const imgEllipse = "http://localhost:3845/assets/3e4121aa84a20c848e78a8b93b3bb4b5c7df29d0.svg";

export default function Hero() {
  return (
    <section className="relative w-full flex justify-center pt-0 pb-10">
      <div className="relative w-full w-[550px]">
        {/* Decorative stripe at top */}
        <div className="flex flex-col items-center mb-[-36px]">
          <div className="flex flex-col items-center z-20">
            <div className="bg-[#012970] h-[50px] w-[53px] rounded-tl-[0px] rounded-tr-[0px]" />
            <div className="bg-[#6C6C6C] h-[36px] rounded-[6px] w-[63px]" />
            <div className="bg-gradient-to-b from-[#080808] to-[#2e2e2e] h-[26px] rounded-bl-[4px] rounded-br-[4px] w-[31px]" />
            <div className="bg-white border border-[#eaeaea] h-[19px] w-[63px] rounded-[46px] mt-[-3px]" />
          </div>
        </div>

        {/* Outer gray card */}
        <div className="bg-[#EEF2F8] border border-[#EAEAEA] rounded-[46px] pt-[50px] pb-[20px]  px-[9px] relative overflow-hidden">
          {/* Inner white card */}
          <div class="bg-white rounded-[24px] sm:rounded-[36px] 
shadow-[0px_7px_26.5px_0px_rgba(0,0,0,0.03)] 
px-4 sm:px-6 md:px-8 lg:px-[50px] 
pt-6 sm:pt-8 md:pt-10 
pb-6 sm:pb-8 md:pb-10 
relative">
            {/* Slots bar */}
        

            {/* Avatar row */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex gap-[18px] items-center">
                <div className="w-[60px] h-[60px] rounded-[100px] overflow-hidden flex-shrink-0">
                  <img src="/profile.jpg" alt="Andrew Parker" className="w-full h-full object-cover" />
               
                </div>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="text-[#012970] text-[20px] font-semibold tracking-[-0.6px] leading-[20px]">Muneeb Parammal</p>
                    <p className="text-[#072447] text-[14px] font-semibold tracking-[-0.42px] leading-[20px]">Sr. UI UX Designer / Product Designer</p>
                  </div>
             
                </div>
              </div>

     
            </div>

            {/* Main headline */}
            <h1 className="text-[#012970] 
text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] 
font-bold 
tracking-tight sm:tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.04em] 
leading-[1.05] mb-8">
              I’m Crafting Meaningful Digital Experiences.
            </h1>

            {/* Rating badge + subtext */}
            <div className="flex flex-col gap-[22px] mb-8">
        
              <p className="text-[#072447] text-[16px] font-semibold tracking-[-0.68px] leading-[1.4] max-w-[283px]">
               I simplify complex problems into intuitive experiences across web and mobile.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-[8px] items-center mb-4">
              <button className="bg-[#012970] flex items-center gap-[16px] h-[58px] pl-[28px] pr-[3px] py-[20px] rounded-[100px] hover:opacity-90 transition-opacity">
                <span className="text-white text-[14px] lg:text-[16px] font-semibold tracking-[-0.68px]">Say Hello</span>
                <img src="/arrow.svg" alt="" className="w-[52px] h-[52px]" />
              </button>
              <button className="bg-[#EEF2F8] h-[58px] px-[28px] py-[0px] rounded-[100px] hover:bg-[#EDEDED] transition-colors">
                <span className="text-[#012970] text-[14px] lg:text-[16px] font-semibold tracking-[-0.68px]">My work</span>
              </button>
            </div>
          </div>

          {/* Location + Template link */}
          <div className="flex flex-col items-center justify-between mt-4 px-[9px]">
            <div className="flex items-center gap-[5px]">
              <img src="/map.svg" alt="" className="w-[13px] h-[13px]" />
              <p className="text-[13px] font-semibold tracking-[-0.65px] leading-[1.2]">
                <span className="text-[rgba(23,23,23,0.6)]">Based in </span>
                <span className="text-[#171717]">Dubai</span>
                <span className="text-[rgba(23,23,23,0.6)]">, United Arab Emirates</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
