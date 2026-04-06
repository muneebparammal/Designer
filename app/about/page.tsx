import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import StickyBottomMenu from "@/components/StickyBottomMenu";

export const metadata: Metadata = {
  title: "About | Muneeb Parammal",
  description:
    "Learn more about Muneeb Parammal — UI/UX and product design experience, approach, and how we can work together.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[550px] px-4 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex text-[14px] font-semibold tracking-[-0.42px] text-[#012970] transition-opacity hover:opacity-80"
        >
          ← Back to home
        </Link>

        <section className="mt-8 rounded-[36px] border border-[#EAEAEA] bg-[#EEF2F8] px-[9px] py-[9px]">
          <div className="rounded-[28px] bg-white p-8 shadow-[0px_7px_26.5px_0px_rgba(0,0,0,0.03)] sm:p-10">
            <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight text-[#012970] sm:text-[38px]">
              About
            </h1>
            <p className="mt-6 text-[16px] leading-[1.6] font-medium tracking-[-0.32px] text-[#171717]/85">
              I&apos;m a senior UI/UX and product designer focused on clear, user-centered
              experiences for web and mobile. This site is a snapshot of my work, process,
              and how I collaborate with teams to ship meaningful products.
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] font-medium tracking-[-0.32px] text-[#171717]/85">
              Want to talk about a project? Reach out from the home page or use the contact
              section below.
            </p>
          </div>
        </section>
      </div>

      <Footer />

      <StickyBottomMenu />
    </main>
  );
}
