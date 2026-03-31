const imgEmailIcon = "http://localhost:3845/assets/61397ebe6dc21f9fbcd3cf19d2bc033e7cebc18a.svg";
const imgGroup8 = "http://localhost:3845/assets/7c936d03314a6dfd73496ccaa146e58fea1737df.svg";
const imgLogo0 = "http://localhost:3845/assets/aed120b2aaa7e33f073b486123e1eb17a9976fa0.svg";
const imgLogo1 = "http://localhost:3845/assets/d83b57ed7ed2678dd7cdc3c46cd53d281bf727c1.svg";
const imgLogo2 = "http://localhost:3845/assets/c33ebb271b14bf61d52b52374515ba29af85aaba.svg";
const imgLogo3 = "http://localhost:3845/assets/4b16df6395baa50e64692a64775983a6794b933b.svg";
const imgLogo4 = "http://localhost:3845/assets/858d4fa1b03f682a51fdf5c3a0c5538eaec780d3.svg";

export default function Newsletter() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[550px] flex flex-col gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[#171717] text-[50px] font-semibold tracking-[-2.5px] leading-none">
            Join 150+ professionals elevating their brand
          </h2>
          <p className="text-[#171717] opacity-50 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[425px]">
            Discover design insights, project updates, and tips to elevate your work straight to your inbox.
          </p>
        </div>

        {/* Logo strip */}
        <div className="flex items-center justify-between px-4">
          <img src={imgLogo0} alt="" className="h-[21px] object-contain" />
          <img src={imgLogo1} alt="" className="h-[32px] object-contain" />
          <img src={imgLogo2} alt="" className="h-[31px] object-contain" />
          <img src={imgLogo3} alt="" className="h-[28px] object-contain" />
          <img src={imgLogo4} alt="" className="h-[22px] object-contain" />
        </div>

        {/* Email input */}
        <div className="flex flex-col items-center gap-[22px]">
          <div className="relative w-[360px]">
            <div className="bg-white border border-[#E9E9E9] rounded-[50px] h-[68px] w-full flex items-center px-[20px] gap-[12px]">
              <img src={imgEmailIcon} alt="" className="w-[20px] h-[20px] flex-shrink-0" />
              <span className="text-[#171717] opacity-50 text-[15px] font-semibold tracking-[-0.75px] flex-1">Enter your Email</span>
              <img src={imgGroup8} alt="" className="w-[52px] h-[52px] flex-shrink-0" />
            </div>
          </div>
          <p className="text-[#171717] opacity-50 text-[13px] font-semibold tracking-[-0.65px] leading-[1.3] text-center">
            Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
