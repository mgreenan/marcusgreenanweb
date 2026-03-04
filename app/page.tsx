import { SiteShell } from "@/components/site-shell";
import { ThemeProvider } from "@/components/theme-provider";

export default function HomePage() {
  return (
    <ThemeProvider>
      <SiteShell />
    </ThemeProvider>
  );
}
