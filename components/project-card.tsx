"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Rocket } from "lucide-react";
import type { ProjectCopy } from "@/lib/portfolio-copy";

const projectIcons = {
  rocket: Rocket,
  robotics: Bot,
  autonomy: Cpu,
};

export function ProjectCard({ project }: { project: ProjectCopy }) {
  const Icon = projectIcons[project.iconKey];

  return (
    <motion.article
      layout
      className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-[rgb(var(--bg-soft)_/_0.48)] transition hover:border-white/25"
    >
      <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className={`object-cover transition duration-700 group-hover:scale-[1.02] ${project.imageClassName ?? ""}`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,16,0.1),rgba(7,10,16,0.82))]" />
          <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
            <div className="mb-3 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-white/72">
              <span>{project.organization}</span>
              <Icon className="h-5 w-5 text-white/75" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-white md:text-[1.9rem]">{project.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/82">{project.subtitle}</p>
          </div>
        </div>
        <div className="p-5 md:p-7">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
            <span>{project.role}</span>
            <span>{project.period}</span>
          </div>
          <p className="mt-4 text-sm leading-8 text-[rgb(var(--fg))] md:text-base">{project.overview}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {project.gallery.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">{item.label}</div>
                <div className="mt-2 text-sm leading-7 text-[rgb(var(--fg))]">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.slice(0, 6).map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-sm text-[rgb(var(--fg))]">
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--accent))]">Engineering Focus</div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[rgb(var(--muted))]">
                {project.designApproach.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--accent))]">Validation and Outcome</div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[rgb(var(--muted))]">
                {project.validationTesting.slice(0, 1).concat(project.resultsImpact.slice(0, 1)).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-4 py-2 text-sm font-semibold text-[rgb(var(--bg))] transition hover:opacity-90"
            >
              View Technical Detail
              <ArrowRight className="h-4 w-4" />
            </Link>
            {project.reportHref ? (
              <a
                href={project.reportHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[rgb(var(--fg))] transition hover:border-white/30"
              >
                {project.reportLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
