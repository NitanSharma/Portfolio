import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Portfolio 🌐',
  description:
    'A modern personal portfolio built with Next.js, showcasing my projects, skills, and journey as a developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full bg-[#111111] text-white`}
        // ${inter.className} - in className 
      >
        <main className="min-h-screen w-full overflow-hidden  ">
          {children}
        </main>
      </body>
    </html>
  );
}
