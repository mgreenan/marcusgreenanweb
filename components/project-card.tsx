"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Cpu, Rocket } from "lucide-react";
import type { ProjectRecord } from "@/lib/portfolio-data";

const projectIcons = {
  rocket: Rocket,
  robotics: Bot,
  autonomy: Cpu,
};

export function ProjectCard({
  project,
  expanded,
  onToggle,
}: {
  project: ProjectRecord;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  const Icon = projectIcons[project.iconKey];

  return (
    <motion.article
      layout
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgb(var(--bg-soft)_/_0.7)] transition hover:border-[rgb(var(--accent)_/_0.5)]"
    >
      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.hero}`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_28%)]" />
          <Image
            src={project.image}
            alt={`${project.title} technical diagram`}
            fill
            className="object-cover opacity-60 mix-blend-screen transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="relative flex h-full flex-col justify-between p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/70">{project.organization}</div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white">{project.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">{project.subtitle}</p>
              </div>
              <Icon className="h-8 w-8 text-white/80" />
            </div>
            <div className="grid gap-3 rounded-3xl border border-white/10 bg-black/25 p-4 backdrop-blur">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/70">
                <span>{project.role}</span>
                <span>{project.period}</span>
              </div>
              <p className="text-sm leading-7 text-white/90">{project.overview}</p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {project.gallery.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-[rgb(var(--muted))]">{item.label}</div>
                <div className="mt-2 text-sm leading-7 text-[rgb(var(--fg))]">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-sm text-[rgb(var(--fg))]">
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-4 py-2 text-sm font-semibold text-[rgb(var(--bg))]"
            >
              View Technical Detail
              <ArrowRight className="h-4 w-4" />
            </Link>
            {onToggle ? (
              <button
                type="button"
                onClick={onToggle}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[rgb(var(--fg))] transition hover:border-[rgb(var(--accent))]"
              >
                {expanded ? "Hide Engineering Details" : "Expand Engineering Details"}
              </button>
            ) : null}
          </div>
          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-[rgb(var(--accent))]">Engineering Challenges</div>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-[rgb(var(--muted))]">
                      {project.engineeringChallenges.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-[rgb(var(--accent))]">Validation / Results</div>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-[rgb(var(--muted))]">
                      {project.validationTesting.slice(0, 2).concat(project.resultsImpact.slice(0, 1)).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]"
                  >
                    Open full project page
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}
