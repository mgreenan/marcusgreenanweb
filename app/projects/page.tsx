import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projectRecords } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects | Marcus Greenan",
  description:
    "Detailed engineering projects from Marcus Greenan covering rocket structures, multi-agent robotics, and autonomous robotic systems.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 pb-12 pt-8 md:px-6">
      <div className="mb-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>
      <section className="section-shell px-6 py-10 md:px-10 md:py-14">
        <div className="eyebrow border-white/10 text-[rgb(var(--muted))]">Projects</div>
        <h1 className="title font-[family-name:var(--font-display)] text-4xl md:text-6xl">
          Technical project pages for aerospace, robotics, and autonomy work.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[rgb(var(--muted))] md:text-base">
          This page collects the detailed engineering work that supports Marcus Greenan&apos;s portfolio. Each
          project includes the problem context, design approach, testing methods, and engineering impact.
        </p>
      </section>
      <div className="mt-6 grid gap-6">
        {projectRecords.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
