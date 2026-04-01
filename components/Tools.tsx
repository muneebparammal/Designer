const imgFigma = "http://localhost:3845/assets/19af03b3a8b2d6db85d7aa325a0db5c7bd06c92d.svg";
const imgFramer = "http://localhost:3845/assets/5cb0a59c06ca123eec1fae9552ef320f1dffaa11.svg";
const imgPhotoshop = "http://localhost:3845/assets/5b05caa61bebf180adda14ba29742163321ff6bf.svg";

const tools = [
  { icon: imgFigma, name: "Figma", desc: "Leading design tool", pct: 90, fillWidth: 495 },
  { icon: imgFramer, name: "Framer", desc: "No-code website builder", pct: 70, fillWidth: 385 },
  { icon: imgPhotoshop, name: "Adobe Photoshop", desc: "Raster graphics editor", pct: 60, fillWidth: 337 },
];

export default function Tools() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[550px] flex flex-col gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[#171717] text-[50px] font-semibold tracking-[-2.5px] leading-none">
            My toolkit, your advantage
          </h2>
          <p className="text-[#171717] opacity-50 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[283px]">
            See how my expertise with these tools drives better results.
          </p>
        </div>

        {/* Tool bars */}
        <div className="flex flex-col gap-[14px]">
          {tools.map((tool, i) => (
            <div key={i} className="relative w-[550px] h-[80px] rounded-[18px] overflow-hidden border border-[#E9E9E9]">
              {/* Background */}
              <div className="absolute inset-0 bg-[#EEF2F8]" />
              {/* Fill */}
              <div
                className="absolute top-0 left-0 bottom-0 bg-[#012970] rounded-l-[18px]"
                style={{ width: `${tool.fillWidth}px` }}
              />
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-between px-[23px]">
                <div className="flex items-center gap-[20px]">
                  <div className="bg-white rounded-[9px] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.15)] w-[44px] h-[44px] flex items-center justify-center flex-shrink-0 p-[9px]">
                    <img src={tool.icon} alt={tool.name} className="w-[26px] h-[26px] object-contain" />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-white text-[16px] font-semibold tracking-[-0.64px] leading-[1.2]">{tool.name}</p>
                    <p className="text-white opacity-60 text-[14px] font-semibold tracking-[-0.56px] leading-[1.2]">{tool.desc}</p>
                  </div>
                </div>
                <div className="backdrop-blur-[8px] bg-[rgba(0,0,0,0.39)] rounded-[50px] px-[9px] py-[6px]">
                  <span className="text-white text-[14px] font-semibold tracking-[-0.84px] leading-none">{tool.pct}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
