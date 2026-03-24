import type { Metadata } from "next";
import { IntroLoader } from "@/components/IntroLoader";
import "./globals.css";

const introScript = `
(() => {
  try {
    const seen = sessionStorage.getItem('mg_intro_seen');
    document.documentElement.dataset.intro = seen ? 'done' : 'loading';
  } catch (error) {
    document.documentElement.dataset.intro = 'done';
  }
})();
`;

const themeScript = `
(() => {
  try {
    const key = 'marcus-theme';
    const stored = window.localStorage.getItem(key);
    const preferredLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = stored ?? (preferredLight ? 'light' : 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (error) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://marcus-greenan-portfolio.vercel.app"),
  title: "Marcus Greenan | Robotics and Hardware Portfolio",
  description:
    "Portfolio for Marcus Greenan, a UC San Diego mechanical engineering student focused on robotics, controls, hardware integration, fabrication, and autonomous systems.",
  keywords: [
    "Marcus Greenan",
    "robotics portfolio",
    "hardware engineering portfolio",
    "UC San Diego mechanical engineering",
    "robotics and controls student",
    "ROS2 portfolio",
    "mechanical engineering student robotics",
  ],
  openGraph: {
    title: "Marcus Greenan | Robotics and Hardware Portfolio",
    description:
      "Engineering portfolio highlighting robotics systems, controls, fabrication, and integrated hardware projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Greenan | Robotics and Hardware Portfolio",
    description:
      "Portfolio focused on robotics, controls, fabrication, and integrated hardware systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-[family-name:var(--font-body)] antialiased">
        <div id="intro-layer" aria-hidden="true">
          <div id="intro-fallback" />
          <IntroLoader />
        </div>
        <div id="app-shell">{children}</div>
      </body>
    </html>
  );
}
