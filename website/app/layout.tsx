import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VERIDIAN | Real-Time PFAS Water Sensing",
  description:
    "Laboratory-grade PFAS detection in 10 minutes. VERIDIAN's MEMS nanostructured sensor technology detects forever chemicals at sub-parts-per-trillion levels, on-site.",
  keywords: [
    "PFAS detection",
    "forever chemicals",
    "water testing",
    "MEMS sensor",
    "water quality",
    "environmental monitoring",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
