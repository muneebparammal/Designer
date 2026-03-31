const imgBanner = "http://localhost:3845/assets/40f3048372c99de1a2b185e9fc30b50724539f38.png";
const imgGroup8 = "http://localhost:3845/assets/1fd35d35f7e7b2b210116cda334dabaae26a84fa.svg";

export default function Banner() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[550px] h-[450px] rounded-[36px] overflow-hidden relative">
        {/* Background image + overlay */}
        <img src={imgBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(20,20,20,0.6)]" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[40px] px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-white text-[50px] font-semibold tracking-[-2.5px] leading-none w-[301px]">
              Your success is my goal
            </h2>
            <p className="text-[17px] font-semibold tracking-[-0.68px] leading-[1.4]">
              <span className="text-[rgba(255,255,255,0.8)]">I&apos;ve worked with </span>
              <span className="text-white font-bold">55</span>
              <span className="text-[rgba(255,255,255,0.8)]"> clients to build impactful websites that drive results.</span>
            </p>
          </div>

          <button className="bg-[#2A29FF] flex items-center gap-[16px] h-[58px] pl-[28px] pr-[3px] py-[20px] rounded-[100px] hover:opacity-90 transition-opacity">
            <span className="text-white text-[18px] font-semibold tracking-[-0.72px] leading-none">Get started</span>
            <img src={imgGroup8} alt="" className="w-[52px] h-[52px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
