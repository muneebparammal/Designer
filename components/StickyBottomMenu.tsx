"use client";

const imgHome = "/home.svg";

const navItems = [
  { label: "Work", href: "/#Works" },
  { label: "About me", href: "/#Services" },
  { label: "Testimonials", href: "/#Testimonials" },
];

export default function StickyBottomMenu() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-[550px] -translate-x-1/2 px-3">
      <div className="flex items-center justify-between rounded-full bg-[#2F2F2F] p-1.5 shadow-lg">
        {/* Home */}
        <a
          href="/#Hero"
          className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80 sm:h-[56px] sm:w-[56px]"
          aria-label="Home"
        >
          <img src={imgHome} alt="Home" className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]" />
        </a>

        {/* Links */}
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1 px-1 sm:gap-2 sm:px-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full px-2 py-2 text-[11px] font-medium text-white transition-opacity hover:opacity-80 sm:px-4 sm:text-[16px]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <a
          href="/#Contact"
          className="shrink-0 rounded-full bg-white px-3 py-2 text-[11px] font-semibold text-black transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-[16px]"
        >
          Contact
        </a>
      </div>
    </div>
  );
}