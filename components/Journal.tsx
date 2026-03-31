const imgPost1 = "http://localhost:3845/assets/722f436e65f27eb367c9a259205f92ef1ac3ade7.png";
const imgPost2 = "http://localhost:3845/assets/b443674a690a07323195b02491f8ab78a2cda219.png";
const imgPost3 = "http://localhost:3845/assets/672a3fffd3f25b43cfe04f1147c49125dae40dd8.png";
const imgArrow = "http://localhost:3845/assets/1cb976ea746d17f8fefb41cf545f26bc3da9d042.svg";

const posts = [
  { img: imgPost1, title: "Why minimalism works for modern portfolios", date: "Nov 9, 2024" },
  { img: imgPost2, title: "Design Beyond Aesthetics: Crafting for Functionality", date: "Oct 25, 2024" },
  { img: imgPost3, title: "The tools that shaped my workflow", date: "Sep 1, 2024" },
];

export default function Journal() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[550px] flex flex-col gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[#171717] text-[50px] font-semibold tracking-[-2.5px] leading-none">
            Journal
          </h2>
          <p className="text-[#171717] opacity-50 text-[17px] font-semibold tracking-[-0.68px] leading-[1.4] w-[425px]">
            A space where I share updates, insights, and reflections on design, creativity, and growth.
          </p>
        </div>

        {/* Posts container */}
        <div className="bg-[#F6F6F6] border border-[#E9E9E9] rounded-[46px] p-[9px]">
          <div className="flex flex-col gap-[6px]">
            {posts.map((post, i) => (
              <div key={i} className="bg-white rounded-[41px] h-[76px] flex items-center px-[8px] gap-[14px]">
                {/* Thumbnail */}
                <div className="w-[54px] h-[54px] rounded-[50px] overflow-hidden flex-shrink-0">
                  <img src={post.img} alt="" className="w-full h-full object-cover" />
                </div>
                {/* Title */}
                <p className="text-[#171717] text-[16px] font-semibold tracking-[-0.64px] leading-[1.4] flex-1 w-[245px]">
                  {post.title}
                </p>
                {/* Date */}
                <p className="text-[#171717] opacity-50 text-[14px] font-semibold tracking-[-0.7px] leading-none whitespace-nowrap">
                  {post.date}
                </p>
              </div>
            ))}
          </div>

          {/* View all */}
          <button className="flex items-center gap-[9px] justify-center w-full py-4 hover:opacity-70 transition-opacity">
            <span className="text-[#171717] text-[14px] font-semibold tracking-[-0.7px] leading-none">View all</span>
            <img src={imgArrow} alt="" className="w-[10px] h-[10px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
