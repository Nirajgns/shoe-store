import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";

const roboto = Roboto({
  weight: ["300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoes store",
  description:
    "Shoes store website built with Next.js 15, TypeScript, postgres,prisma and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>{children}</body>
    </html>
  );
}
