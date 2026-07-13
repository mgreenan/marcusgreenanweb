import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { PhotoWithCaption } from "@/components/photo-with-caption";
import { resumeFile } from "@/lib/portfolio-data";
import type { ProjectCaseStudy, ProjectCopy, ProjectMedia } from "@/lib/portfolio-copy";

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

function TechnicalFigure({
  media,
  priority = false,
  className = "",
}: {
  media: ProjectMedia;
  priority?: boolean;
  className?: string;
}) {
  return (
    <PhotoWithCaption
      src={media.src}
      alt={media.alt}
      caption={media.caption}
      width={media.width}
      height={media.height}
      loading={priority ? "eager" : "lazy"}
      sizes="(min-width: 1280px) 960px, 100vw"
      className={`rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-3 md:p-4 ${className}`}
      imageClassName={`max-h-[760px] rounded-xl border border-white/10 object-contain ${media.imageClassName ?? ""}`}
      captionClassName="leading-6"
    />
  );
}

function ProjectMediaItem({ item }: { item: ProjectMedia }) {
  if (item.type === "video") {
    return (
      <figure className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4 md:col-span-2 xl:col-span-2">
        <video
          className="aspect-video w-full rounded-xl border border-white/10 bg-black object-cover"
          controls
          playsInline
          preload="metadata"
          poster={item.poster}
          aria-label={item.alt}
        >
          <source src={item.src} type="video/mp4" />
          Your browser does not support embedded video playback.
        </video>
        <figcaption className="mt-3 text-sm leading-6 text-zinc-400">{item.caption}</figcaption>
      </figure>
    );
  }

  return (
    <PhotoWithCaption
      src={item.src}
      alt={item.alt}
      caption={item.caption}
      width={item.width}
      height={item.height}
      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 100vw"
      className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-4"
      imageClassName={`rounded-xl border border-white/10 bg-white ${item.imageClassName ?? ""}`}
    />
  );
}

function MetricGrid({ metrics }: { metrics: ProjectCaseStudy["snapshot"] }) {
  return (
    <section id="engineering-case-study" className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">Engineering Snapshot</div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.2rem] border border-white/10 bg-black/10 p-4">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">{metric.label}</div>
            <div className="mt-2 text-base font-semibold leading-7 text-[rgb(var(--fg))]">{metric.value}</div>
            {metric.note ? <div className="mt-1 text-xs leading-5 text-[rgb(var(--muted))]">{metric.note}</div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function CardGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-5">
          <h3 className="font-[family-name:var(--font-display)] text-xl text-[rgb(var(--fg))]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function CaseStudySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      {eyebrow ? <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">{eyebrow}</div> : null}
      <h2 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-[rgb(var(--fg))] md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function RocketCaseStudy({ caseStudy, project }: { caseStudy: ProjectCaseStudy; project: ProjectCopy }) {
  return (
    <>
      <MetricGrid metrics={caseStudy.snapshot} />

      <CaseStudySection eyebrow="Project Overview" title="Compact rocket design as an integrated system">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
            <p>
              Project Daedalus challenged our team to design a compact rocket that could approach a simulated 4,000-foot apogee
              while remaining stable, manufacturable, and recoverable. The structure could not be designed independently from the
              rest of the vehicle.
            </p>
            <p>
              Changes to the nose cone, fins, avionics packaging, motor placement, or recovery hardware affected total mass, center
              of gravity, center of pressure, drag, assembly, and deployment. I worked primarily on the mechanical and structural
              side: structural CAD, component interfaces, manufacturing considerations, tolerance checks, and early simulation.
            </p>
            <p>
              I also communicated closely with teammates working on avionics and propulsion so their hardware could fit inside the
              vehicle and remain accessible during assembly.
            </p>
          </div>
          {caseStudy.overviewFigure ? <TechnicalFigure media={caseStudy.overviewFigure} priority /> : null}
        </div>
      </CaseStudySection>

      {caseStudy.responsibilities?.length ? (
        <CaseStudySection eyebrow="Ownership" title="My Responsibilities">
          <CardGrid items={caseStudy.responsibilities} />
        </CaseStudySection>
      ) : null}

      {caseStudy.noseCone ? (
        <CaseStudySection eyebrow="Nose-Cone Design" title={caseStudy.noseCone.title}>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <div className="space-y-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
              {caseStudy.noseCone.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="rounded-[1.25rem] border border-[rgb(var(--accent)_/_0.35)] bg-[rgb(var(--accent)_/_0.08)] p-5 text-[rgb(var(--fg))]">
                {caseStudy.noseCone.takeaway}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {caseStudy.noseCone.specs.map((spec) => (
                <div key={spec.label} className="rounded-xl border border-white/10 bg-black/10 p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[rgb(var(--muted))]">{spec.label}</div>
                  <div className="mt-2 text-sm font-semibold leading-6 text-[rgb(var(--fg))]">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </CaseStudySection>
      ) : null}

      {caseStudy.architecture ? (
        <CaseStudySection eyebrow="Vehicle Architecture" title={caseStudy.architecture.title}>
          {caseStudy.architecture.intro ? (
            <p className="max-w-4xl text-sm leading-8 text-[rgb(var(--muted))] md:text-base">{caseStudy.architecture.intro}</p>
          ) : null}
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {caseStudy.architecture.systems.map((system) => (
              <article key={system.title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[rgb(var(--fg))]">{system.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[rgb(var(--muted))]">
                  {system.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {caseStudy.architecture.note ? (
            <p className="mt-5 rounded-[1.25rem] border border-white/10 bg-black/10 p-5 text-sm leading-7 text-[rgb(var(--muted))]">
              {caseStudy.architecture.note}
            </p>
          ) : null}
        </CaseStudySection>
      ) : null}

      {caseStudy.avionics ? (
        <CaseStudySection eyebrow="Avionics Integration" title={caseStudy.avionics.title}>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="space-y-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
              {caseStudy.avionics.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <TechnicalFigure media={caseStudy.avionics.figure} />
          </div>
        </CaseStudySection>
      ) : null}

      {caseStudy.tradeoffs?.length ? (
        <CaseStudySection eyebrow="Engineering Tradeoffs" title="Where the structural design had to compromise">
          <CardGrid items={caseStudy.tradeoffs} />
        </CaseStudySection>
      ) : null}

      {caseStudy.openRocket ? (
        <CaseStudySection eyebrow="OpenRocket Analysis" title={caseStudy.openRocket.title}>
          <div className="space-y-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
            {caseStudy.openRocket.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {caseStudy.openRocket.highlights.map((highlight) => (
              <div key={highlight.label} className="rounded-[1.2rem] border border-white/10 bg-black/10 p-4">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">{highlight.label}</div>
                <div className="mt-2 text-base font-semibold text-[rgb(var(--fg))]">{highlight.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-5">
            {caseStudy.openRocket.figures.map((figure) => (
              <TechnicalFigure key={figure.src} media={figure} />
            ))}
          </div>
        </CaseStudySection>
      ) : null}

      {caseStudy.flow ? (
        <CaseStudySection eyebrow="Flow Simulation" title={caseStudy.flow.title}>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
            <div className="space-y-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
              {caseStudy.flow.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <TechnicalFigure media={caseStudy.flow.figure} />
          </div>
        </CaseStudySection>
      ) : null}

      {caseStudy.structural ? (
        <CaseStudySection eyebrow="Structural Pressure Simulation" title={caseStudy.structural.title}>
          <div className="space-y-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
            {caseStudy.structural.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-5 rounded-[1.15rem] border border-white/10 bg-black/10 p-4 text-sm text-[rgb(var(--fg))]">
            {caseStudy.structural.loadCase}
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {caseStudy.structural.figures.map((figure) => (
              <TechnicalFigure key={figure.src} media={figure} />
            ))}
          </div>
        </CaseStudySection>
      ) : null}

      {caseStudy.process?.length ? (
        <CaseStudySection eyebrow="Design Process" title="How the rocket moved from requirements to refinement">
          <div className="relative border-l border-white/10 pl-6">
            {caseStudy.process.map((step) => (
              <div key={step.title} className="relative pb-6 last:pb-0">
                <div className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full border border-[rgb(var(--accent))] bg-[rgb(var(--bg))]" />
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[rgb(var(--fg))]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))]">{step.body}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>
      ) : null}

      {caseStudy.lessons ? (
        <CaseStudySection eyebrow="What I Learned" title={caseStudy.lessons.title}>
          <div className="space-y-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
            {caseStudy.lessons.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CaseStudySection>
      ) : null}

      {caseStudy.finalSummary ? (
        <section className="mt-6 rounded-[1.75rem] border border-[rgb(var(--accent)_/_0.28)] bg-[rgb(var(--accent)_/_0.06)] p-6 md:p-8">
          <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">{caseStudy.finalSummary.heading}</div>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[rgb(var(--fg))]">{caseStudy.finalSummary.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))]">
              Back to All Projects
            </Link>
            {project.reportHref ? (
              <a
                href={project.reportHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-[rgb(var(--fg))]"
              >
                {project.reportLabel ?? "View Technical Report"}
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-[rgb(var(--fg))]">
              Contact Me
            </Link>
          </div>
        </section>
      ) : null}

      <div className="sr-only" aria-label={`${project.title} case study complete`} />
    </>
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
              {project.caseStudy ? (
                <>
                  <a
                    href="#engineering-case-study"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
                  >
                    {project.caseStudy.anchorLabel}
                  </a>
                  <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white">
                    Back to Projects
                  </Link>
                  {project.reportHref ? (
                    <a
                      href={project.reportHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
                    >
                      {project.reportLabel ?? "View Technical Report"}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </>
              ) : project.reportHref ? (
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
              {!project.caseStudy ? (
                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
                >
                  View Resume
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
          <div className="grid gap-4">
            {project.gallery.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.18)]">
                <div className="text-xs uppercase tracking-[0.22em] text-white/70">{item.label}</div>
                <div className="mt-2 text-sm leading-7 text-white">{item.value}</div>
              </div>
            ))}
            <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.18)]">
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
              <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.18)]">
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

      {project.caseStudy ? (
        <RocketCaseStudy caseStudy={project.caseStudy} project={project} />
      ) : (
        <>
          {project.media?.length ? (
            <section className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">Project Media</div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {project.media.map((item) => (
                  <ProjectMediaItem key={item.src} item={item} />
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {detailSections.map((section) => (
              <DetailSection key={section.title} title={section.title} paragraphs={section.paragraphs} bullets={section.bullets} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
