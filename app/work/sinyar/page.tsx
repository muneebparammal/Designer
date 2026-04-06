import type { Metadata } from "next";
import SinyarCaseStudy from "@/components/case-study/SinyarCaseStudy";

export const metadata: Metadata = {
  title: "Emiratisation Learning App (SINYAR) | Muneeb Parammal",
  description:
    "Case study: a gamified mobile learning experience on Microsoft Power Apps for an Emiratisation development program — UX research, Power Apps constraints, and scalable UI patterns.",
};

export default function SinyarCaseStudyPage() {
  return <SinyarCaseStudy />;
}
