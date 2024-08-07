import type { Metadata } from "next";
// import { Outfit } from "next/font/google";
import "./globals.css";
// import {twMerge} from 'tailwind-merge'
// const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awesome SaaS landing page",
  description: "Cool animated landing pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logosaas.png" type="image/x-icon" />
      {/* <body className={outfit.className}>{children}</body> */}
      <body className="bg-[#eaeefe]">{children}</body>
    </html>
  );
}
