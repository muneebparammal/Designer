const imgAvatar = "./profile.jpg";
const imgGroup24 = "./linkedin.svg";
const imgGroup25 = "./behance.svg";
const imgGroup26 = "./dribble.svg";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center pt-10 pb-8">
      <div className="flex w-full max-w-[550px] flex-col gap-[10px] px-4 md:px-0">
        {/* Designer profile */}
        <div className="mb-[60px] flex flex-col items-center gap-5">
          {/* Avatar */}
          <div className="h-[80px] w-[80px] overflow-hidden rounded-[100px] border-4 border-white shadow-[0px_7px_26.5px_0px_rgba(0,0,0,0.08)]">
            <img
              src={imgAvatar}
              alt="Muneeb Parammal"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-[8px]">
            <p className="text-[22px] leading-[20px] font-semibold tracking-[-0.66px] text-[#171717]">
              Muneeb Parammal
            </p>
            <p className="text-[14px] leading-[20px] font-semibold tracking-[-0.42px] text-[#171717] opacity-60">
              Web-designer, developer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-[6px]">
            <img src={imgGroup24} alt="LinkedIn" className="h-[34px] w-[34px]" />
            <img src={imgGroup25} alt="Behance" className="h-[34px] w-[34px]" />
            <img src={imgGroup26} alt="Dribbble" className="h-[34px] w-[34px]" />
          </div>
        </div>

        {/* Contact card */}
        <div className="rounded-[46px] border border-[#E9E9E9] bg-[#EEF2F8] px-[9px] pt-[9px] pb-0">
          {/* Inner white card */}
          <div className="flex flex-col gap-8 rounded-[40px] bg-white p-[50px]">
            {/* Heading */}
            <div className="flex flex-col items-center gap-7 text-center">
              <div>
                <p className="text-[38px] leading-none font-semibold tracking-[-1.9px] text-[#171717]">
                  Let’s do something
                </p>
                <p className="text-[38px] leading-none font-semibold tracking-[-1.9px] text-[#171717]">
                  meaningful together
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-[8px]">
              <a
                href="mailto:muneebyfc@gmail.com?subject=Hello%20Muneeb&body=Hi%20Muneeb%2C%20I%20would%20like%20to%20connect."
                className="mt-2 flex h-[58px] items-center justify-center rounded-[100px] bg-[#012970] px-6 transition-opacity hover:opacity-90"
              >
                <span className="text-[18px] leading-none font-semibold tracking-[-0.72px] text-white">
                  Let’s Chat
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="flex w-full flex-col gap-[2px] text-center">
              <a
                href="mailto:muneebyfc@gmail.com"
                className="text-[24px] leading-none font-semibold tracking-[-2.25px] text-[#171717] hover:underline"
              >
                muneebyfc@gmail.com
              </a>
            </div>
          </div>

          {/* Footer note */}
          <div className="flex flex-col items-center gap-[22px] px-[50px] py-8">
            <p className="text-center text-[14px] leading-[1.3] font-semibold tracking-[-0.7px] text-[#171717] opacity-50">
              © Copyright 2026. All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}