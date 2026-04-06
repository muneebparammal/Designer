import type { Metadata } from "next";
import WorksListPage from "@/components/WorksListPage";

export const metadata: Metadata = {
  title: "Work | Muneeb Parammal",
  description:
    "Selected works by Muneeb Parammal — UI/UX and product design projects across mobile, web, and enterprise platforms.",
};

export default function WorkPage() {
  return <WorksListPage />;
}
