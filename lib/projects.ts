export type Project = {
  image: string;
  name: string;
  desc: string;
  logo: string;
  logoType?: "icon" | "img";
  href: string;
  /** internal Next.js route — uses <Link>, otherwise opens in new tab */
  internal?: boolean;
};

export const projects: Project[] = [
  {
    image: "/casestudy/sinyar-cover.png",
    name: "Emiratisation Training App",
    desc: "Gamified mobile learning on Microsoft Power Apps",
    logo: "/product.svg",
    href: "/work/sinyar",
    internal: true,
  },
  {
    image: "works/sobha.png",
    name: "One Sobha App",
    desc: "Community management mobile app",
    logo: "works/sobha-sm.svg",
    logoType: "icon",
    href: "/work/sobha",
    internal: true,
  },
  {
    image: "works/almersad.png",
    name: "AI Powered Audit Management System",
    desc: "Enterprise audit platform for Al Mersad",
    logo: "works/almersad-sm.svg",
    href: "https://www.behance.net/gallery/209856597/Audit-management-System",
  },
  {
    image: "works/kula.png",
    name: "KULA",
    desc: "Real estate community & living management product",
    logo: "works/kula-sm.svg",
    href: "https://www.behance.net/gallery/238529767/KULA-Community-Living-Management-APP-UIUX",
  },
  {
    image: "works/ADAC.png",
    name: "Abu Dhabi Airport",
    desc: "Airport management platform",
    logo: "works/ADAC-sm.svg",
    href: "https://www.behance.net/gallery/214927569/Airport-Management-Platform",
  },
];
