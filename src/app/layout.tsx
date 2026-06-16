import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | [Your Name]",
  description: "Showcasing my work, skills, and project case studies",
  keywords: ["portfolio", "web development", "design", "case studies"],
  authors: [{ name: "[Your Name]" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    siteName: "[Your Name] Portfolio",
    title: "[Your Name] | Portfolio",
    description: "Showcasing my work, skills, and project case studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Name] | Portfolio",
    description: "Showcasing my work, skills, and project case studies",
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
        {children}
      </body>
    </html>
  );
}
