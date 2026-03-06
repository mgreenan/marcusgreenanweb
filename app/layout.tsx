import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { IntroLoader } from "@/components/IntroLoader";
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
    "Mechanical engineering portfolio focused on robotics and controls, with work in aerospace structures, multi-agent robotics, autonomous systems, and precision manufacturing.",
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
      "Mechanical engineering portfolio with robotics, aerospace structures, autonomy, and precision manufacturing work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const preHydrationIntroScript = `
    try {
      var seen = sessionStorage.getItem("mg_intro_seen");
      document.documentElement.dataset.intro = seen ? "done" : "loading";
    } catch (e) {
      document.documentElement.dataset.intro = "done";
    }
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preHydrationIntroScript }} />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable} font-[family-name:var(--font-body)] antialiased`}>
        <div id="intro-layer" aria-hidden="true">
          <div id="intro-fallback" />
          <IntroLoader />
        </div>
        <div id="app-shell">{children}</div>
      </body>
    </html>
  );
}
