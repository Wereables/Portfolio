import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin Le Roux | Senior Product Designer",
  description: "Portfolio of Martin Le Roux, Senior Product Designer specializing in UX/UI and AI heuristics.",
  keywords: ["UX Design", "UI Design", "Product Design", "AI UX", "Design Portfolio", "Martin Le Roux"],
  authors: [{ name: "Martin Le Roux" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-ucmm.vercel.app",
    siteName: "Martin Le Roux Portfolio",
    title: "Martin Le Roux | Senior Product Designer",
    description: "Portfolio of Martin Le Roux, Senior Product Designer specializing in UX/UI and AI heuristics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Le Roux | Senior Product Designer",
    description: "Portfolio of Martin Le Roux, Senior Product Designer specializing in UX/UI and AI heuristics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16 pb-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
