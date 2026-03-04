import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcus-greenan-portfolio.vercel.app"),
  title: "Marcus Greenan | Mechanical Engineering Portfolio",
  description:
    "Mechanical engineering portfolio for Marcus Greenan, a UC San Diego student specializing in robotics and controls with experience in aerospace structures, multi-agent robotics, autonomous systems, and precision manufacturing.",
  keywords: [
    "mechanical engineering student portfolio",
    "robotics engineering student",
    "UCSD mechanical engineering portfolio",
    "robotics research student",
    "Marcus Greenan",
    "aerospace engineering portfolio",
    "robotics and controls student",
    "autonomous systems engineering student",
  ],
  openGraph: {
    title: "Marcus Greenan | Mechanical Engineering Portfolio",
    description:
      "Engineering portfolio highlighting aerospace structures, robotics systems, autonomous vehicles, and precision manufacturing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Greenan | Mechanical Engineering Portfolio",
    description:
      "UC San Diego mechanical engineering student specializing in robotics and controls with aerospace and autonomy project experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} font-[family-name:var(--font-body)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
