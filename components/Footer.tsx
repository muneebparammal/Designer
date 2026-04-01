const imgAvatar = "./profile.jpg";
const imgCreatedBy = "http://localhost:3845/assets/bc504481125be9693f0aeae1f68aff9c47ef89fa.png";
const imgNameIcon = "http://localhost:3845/assets/6fd814ceb049531dfc464c94ccad5136797fe911.svg";
const imgEmailIcon = "http://localhost:3845/assets/8389c790a3dca41d04a1d14daba857afc6752b13.svg";
const imgGroup24 = "./linkedin.svg";
const imgGroup25 = "./behance.svg";
const imgGroup26 = "./dribble.svg";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-10 pb-8">
      <div className="w-full max-w-[550px] flex flex-col gap-[10px] px-4 md:px-0">
        {/* Designer profile */}
        <div className="flex flex-col items-center gap-5 mb-[60px]">
          {/* Avatar */}
          <div className="w-[80px] h-[80px] rounded-[100px] overflow-hidden border-4 border-white shadow-[0px_7px_26.5px_0px_rgba(0,0,0,0.08)]">
            <img src={imgAvatar} alt="Andrew Parker" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <p className="text-[#171717] text-[22px] font-semibold tracking-[-0.66px] leading-[20px]">Muneeb Parammal</p>
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
        <div className="bg-[#EEF2F8] border border-[#E9E9E9] rounded-[46px] px-[9px] pt-[9px] pb-0">
          {/* Inner white card */}
          <div className="bg-white rounded-[40px] p-[50px] flex flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col items-center gap-7 text-center">
              <div>
                <p className="text-[#171717] text-[38px] font-semibold tracking-[-1.9px] leading-none">Let’s do something</p>
                <p className="text-[#171717] text-[38px] font-semibold tracking-[-1.9px] leading-none">meaningful together</p>
              </div>
         
            </div>

            {/* Form */}
            <div className="flex flex-col gap-[8px]">
              {/* <div className="bg-[#EEF2F8] rounded-[50px] h-[60px] flex items-center px-[20px] gap-[10px]">
                <img src={imgNameIcon} alt="" className="w-[20px] h-[20px]" />
                <span className="text-[#171717] opacity-40 text-[16px] font-semibold tracking-[-0.96px] leading-[24px]">Name</span>
              </div>
              <div className="bg-[#EEF2F8] rounded-[50px] h-[60px] flex items-center px-[20px] gap-[10px]">
                <img src={imgEmailIcon} alt="" className="w-[20px] h-[20px]" />
                <span className="text-[#171717] opacity-40 text-[16px] font-semibold tracking-[-0.96px] leading-[24px]">Email</span>
              </div> */}
              <button className="bg-[#012970] rounded-[100px] h-[58px] flex items-center justify-center hover:opacity-90 transition-opacity mt-2">
                <span className="text-white text-[18px] font-semibold tracking-[-0.72px] leading-none">Let’s Chat</span>
              </button>
             
            </div>
               <div className="flex flex-col gap-[2px] w-full text-center">
                {/* <p className="text-[#171717] text-[18px] font-semibold tracking-[-0.72px] leading-[1.2]">(510) 895-6500</p> */}
                <p className="text-[#171717] text-[24px] font-semibold tracking-[-2.25px] leading-none">muneebyfc@gmail.com</p>
              </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center gap-[22px] px-[50px] py-8">
       
            <p className="text-[#171717] opacity-50 text-[14px] font-semibold tracking-[-0.7px] leading-[1.3] text-center">
              © Copyright 2026. All rights Reserved.
            </p>
          </div>
        </div>

        {/* Created by */}
     
      </div>
    </footer>
  );
}
