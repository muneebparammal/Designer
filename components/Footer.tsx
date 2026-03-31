const imgAvatar = "http://localhost:3845/assets/2b43cae28e933c836b2792d31030d21cf4780c59.png";
const imgCreatedBy = "http://localhost:3845/assets/bc504481125be9693f0aeae1f68aff9c47ef89fa.png";
const imgNameIcon = "http://localhost:3845/assets/6fd814ceb049531dfc464c94ccad5136797fe911.svg";
const imgEmailIcon = "http://localhost:3845/assets/8389c790a3dca41d04a1d14daba857afc6752b13.svg";
const imgGroup24 = "http://localhost:3845/assets/bd632f9cecf14ef67501288eeb81f89a80d0361d.svg";
const imgGroup25 = "http://localhost:3845/assets/bcf5de419063da225e737b48986d054562b29f29.svg";
const imgGroup26 = "http://localhost:3845/assets/f6980cec6fbf855e7a0769271d3cffd5a06ff95a.svg";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-10 pb-8">
      <div className="w-full max-w-[550px] flex flex-col gap-[10px] px-4 md:px-0">
        {/* Designer profile */}
        <div className="flex flex-col items-center gap-5 mb-[104px]">
          {/* Avatar */}
          <div className="w-[80px] h-[80px] rounded-[100px] overflow-hidden border-4 border-white shadow-[0px_7px_26.5px_0px_rgba(0,0,0,0.08)]">
            <img src={imgAvatar} alt="Andrew Parker" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <p className="text-[#171717] text-[22px] font-semibold tracking-[-0.66px] leading-[20px]">Andrew Parker</p>
            <p className="text-[#171717] opacity-60 text-[14px] font-semibold tracking-[-0.42px] leading-[20px]">Web-designer, developer</p>
          </div>
          {/* Social links */}
          <div className="flex gap-[6px] items-center">
            <img src={imgGroup24} alt="X" className="w-[34px] h-[34px]" />
            <img src={imgGroup25} alt="LinkedIn" className="w-[34px] h-[34px]" />
            <img src={imgGroup26} alt="Dribbble" className="w-[34px] h-[34px]" />
          </div>
        </div>

        {/* Contact card */}
        <div className="bg-[#F6F6F6] border border-[#E9E9E9] rounded-[46px] px-[9px] pt-[9px] pb-8">
          {/* Inner white card */}
          <div className="bg-white rounded-[40px] p-[50px] flex flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col items-center gap-7 text-center">
              <div>
                <p className="text-[#171717] text-[38px] font-semibold tracking-[-1.9px] leading-none">Ready to</p>
                <p className="text-[#171717] text-[38px] font-semibold tracking-[-1.9px] leading-none">get started?</p>
              </div>
              <p className="text-[#171717] opacity-60 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[277px]">
                Fill out the form, or reach out directly. I&apos;ll respond within 24 hours.
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-[8px]">
              <div className="bg-[#F6F6F6] rounded-[50px] h-[60px] flex items-center px-[20px] gap-[10px]">
                <img src={imgNameIcon} alt="" className="w-[20px] h-[20px]" />
                <span className="text-[#171717] opacity-40 text-[16px] font-semibold tracking-[-0.96px] leading-[24px]">Name</span>
              </div>
              <div className="bg-[#F6F6F6] rounded-[50px] h-[60px] flex items-center px-[20px] gap-[10px]">
                <img src={imgEmailIcon} alt="" className="w-[20px] h-[20px]" />
                <span className="text-[#171717] opacity-40 text-[16px] font-semibold tracking-[-0.96px] leading-[24px]">Email</span>
              </div>
              <button className="bg-[#2A29FF] rounded-[100px] h-[58px] flex items-center justify-center hover:opacity-90 transition-opacity mt-2">
                <span className="text-white text-[18px] font-semibold tracking-[-0.72px] leading-none">Send message</span>
              </button>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center gap-[22px] px-[50px] py-8">
            <div className="flex flex-col items-center gap-[14px] text-center w-full">
              <p className="text-[#171717] opacity-60 text-[14px] font-semibold tracking-[-0.56px] leading-[20px] w-full">
                Let&apos;s chat!
              </p>
              <div className="flex flex-col gap-[2px] w-full text-center">
                <p className="text-[#171717] text-[18px] font-semibold tracking-[-0.72px] leading-[1.2]">(510) 895-6500</p>
                <p className="text-[#171717] text-[24px] font-semibold tracking-[-2.25px] leading-none">hello@praxis.com</p>
              </div>
            </div>
            <p className="text-[#171717] opacity-50 text-[14px] font-semibold tracking-[-0.7px] leading-[1.3] text-center">
              © Copyright 2024. All rights Reserved.
            </p>
          </div>
        </div>

        {/* Created by */}
        <div className="flex items-center justify-center gap-[6px] mt-6">
          <p className="text-[#171717] opacity-60 text-[13px] font-semibold tracking-[-0.52px] leading-[1.4]">Created by</p>
          <img src={imgCreatedBy} alt="" className="w-[28px] h-[28px]" />
          <p className="text-[#171717] text-[13px] font-semibold tracking-[-0.52px] leading-[1.4]">Anatolii Dmitrienko</p>
        </div>
      </div>
    </footer>
  );
}
