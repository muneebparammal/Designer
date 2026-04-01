import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Andrew Parker — Web Designer & Developer",
  description: "I create websites that work as hard as you do. UX/UI design, web development, and branding for individuals and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
             <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Manrope,sans-serif] antialiased">{children}</body>
    </html>
  );
}
