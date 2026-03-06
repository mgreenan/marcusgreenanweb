import { SiteShell } from "@/components/site-shell";
import { ThemeProvider } from "@/components/theme-provider";
import { portfolioCopy } from "@/lib/portfolio-copy";

export default function HomePage() {
  return (
    <ThemeProvider>
      <SiteShell copy={portfolioCopy} />
    </ThemeProvider>
  );
}
