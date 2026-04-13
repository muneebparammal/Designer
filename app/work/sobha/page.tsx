import type { Metadata } from "next";
import SobhaCaseStudy from "@/components/case-study/SobhaCaseStudy";

export const metadata: Metadata = {
  title: "One Sobha App | Muneeb Parammal",
  description:
    "Case study: One Sobha App — a comprehensive community management mobile platform for Sobha Realty residents, covering facility booking, maintenance, payments, and visitor management.",
};

export default function SobhaCaseStudyPage() {
  return <SobhaCaseStudy />;
}
