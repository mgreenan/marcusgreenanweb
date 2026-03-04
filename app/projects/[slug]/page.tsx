import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { projectRecords, projectsBySlug } from "@/lib/portfolio-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectRecords.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) {
    return {
      title: "Project Not Found | Marcus Greenan",
    };
  }

  return {
    title: `${project.title} | Marcus Greenan`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
