import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { PhotoWithCaption } from "@/components/photo-with-caption";
import { resumeFile } from "@/lib/portfolio-data";
import type { ProjectCopy } from "@/lib/portfolio-copy";

function DetailSection({
  title,
  paragraphs,
  bullets,
}: {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">{title}</div>
      <div className="mt-4 space-y-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {bullets?.length ? (
        <ul className="mt-5 space-y-3 text-sm leading-8 text-[rgb(var(--fg))] md:text-base">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export function ProjectDetail({ project }: { project: ProjectCopy }) {
  const detailSections =
    project.detailSections ??
    [
      { title: "Engineering Challenges", paragraphs: project.engineeringChallenges },
      { title: "Design Approach", paragraphs: project.designApproach },
      { title: "Validation and Testing", paragraphs: project.validationTesting },
      { title: "Results and Impact", paragraphs: project.resultsImpact },
      { title: "Next Steps", paragraphs: project.nextSteps },
    ];

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 pb-12 pt-8 md:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[rgb(var(--fg))]">
            All Projects
          </Link>
          <a href={resumeFile} download className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-4 py-2 text-sm font-semibold text-[rgb(var(--bg))]">
            Download Resume
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>

      <section className="section-shell relative overflow-hidden px-6 py-10 md:px-10 md:py-14">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.hero}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%)]" />
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="100vw"
          className={`object-cover opacity-35 mix-blend-screen ${project.imageClassName ?? ""}`}
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="eyebrow border-white/15 bg-black/10 text-white/80">Project Detail</div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-white md:text-6xl">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/84 md:text-lg">{project.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span>{project.organization}</span>
              <span>{project.role}</span>
              <span>{project.period}</span>
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-8 text-white/90 md:text-base">{project.overview}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.reportHref ? (
                <a
                  href={project.reportHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
                >
                  {project.reportLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
              <a
                href={resumeFile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
              >
                View Resume
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {project.gallery.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.22em] text-white/70">{item.label}</div>
                <div className="mt-2 text-sm leading-7 text-white">{item.value}</div>
              </div>
            ))}
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.22em] text-white/70">Tools Used</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-sm text-white">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            {project.sponsors ? (
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.22em] text-white/70">Research Sponsors</div>
                <ul className="mt-3 space-y-2 text-sm text-white">
                  {project.sponsors.map((sponsor) => (
                    <li key={sponsor}>{sponsor}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {project.media?.length ? (
        <section className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">Project Media</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {project.media.map((item) => (
              <PhotoWithCaption
                key={item.src}
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4"
                imageClassName={`rounded-xl border border-white/10 bg-white ${item.imageClassName ?? ""}`}
              />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {detailSections.map((section) => (
          <DetailSection key={section.title} title={section.title} paragraphs={section.paragraphs} bullets={section.bullets} />
        ))}
      </div>
    </div>
  );
}
