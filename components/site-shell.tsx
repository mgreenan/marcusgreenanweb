"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Download,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  SunMedium,
  X,
} from "lucide-react";
import { PhotoWithCaption } from "@/components/photo-with-caption";
import { ProjectCard } from "@/components/project-card";
import { getCurrentTheme, toggleTheme } from "@/components/theme-provider";
import { portfolioCopy, type PortfolioCopy, type ProjectCopy } from "@/lib/portfolio-copy";
import { resumeFile, sections } from "@/lib/portfolio-data";

function MotionSection({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="section-shell relative overflow-hidden px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mb-10 max-w-4xl">
        <div className="eyebrow border-white/10 text-[rgb(var(--muted))]">{eyebrow}</div>
        <h2 className="title font-[family-name:var(--font-display)] text-3xl md:text-[2.9rem]">{title}</h2>
        {subtitle ? <p className="mt-4 max-w-3xl text-sm leading-7 text-[rgb(var(--muted))] md:text-base">{subtitle}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => {
        toggleTheme();
        setTheme(getCurrentTheme());
      }}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--fg))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
    >
      {theme === "dark" ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 md:px-6">
      <div className="rounded-2xl border border-white/10 bg-[rgb(var(--bg-soft)_/_0.78)] px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.28em] text-[rgb(var(--fg))]">
            Marcus Greenan
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="text-sm text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]">
                {section.label}
              </a>
            ))}
            <a href={resumeFile} className="text-sm text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]">
              Resume
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <div id="mobile-navigation" className="mt-4 grid gap-3 border-t border-white/10 pt-4 lg:hidden">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} onClick={() => setOpen(false)} className="text-sm text-[rgb(var(--muted))]">
                {section.label}
              </a>
            ))}
            <Link href="/projects" onClick={() => setOpen(false)} className="text-sm text-[rgb(var(--muted))]">
              Project Pages
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function Hero({ copy }: { copy: PortfolioCopy }) {
  return (
    <section id="home" className="section-shell relative overflow-hidden px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-18">
      <div className="rounded-[1.2rem] border border-white/10 bg-[#06080c] px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="text-[11px] uppercase tracking-[0.24em] text-zinc-300/70 md:text-xs">Mechanical Engineering • Robotics • Aerospace Systems</div>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.2rem,6.8vw,5.25rem)] tracking-[0.03em] text-[#d6dce3]">
            {copy.hero.title}
          </h1>
        </div>
      </div>
      <div className="relative mt-8">
        <div className="eyebrow border-[rgb(var(--accent)_/_0.28)] bg-[rgb(var(--accent)_/_0.06)] text-[rgb(var(--accent))]">
          {copy.hero.eyebrow}
        </div>
        <p className="max-w-4xl font-[family-name:var(--font-display)] text-[1.35rem] leading-tight text-[rgb(var(--fg))] md:text-[2.25rem]">
          {copy.hero.subheading}
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3 text-base leading-8 text-[rgb(var(--muted))] md:text-lg">
            {copy.hero.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[rgb(var(--accent))]">{copy.hero.snapshot.heading}</div>
            <div className="mt-4 grid gap-4 text-sm leading-7">
              <div>
                <div className="text-[rgb(var(--muted))]">Primary focus</div>
                <div className="text-[rgb(var(--fg))]">{copy.hero.snapshot.focus}</div>
              </div>
              <div>
                <div className="text-[rgb(var(--muted))]">Applied areas</div>
                <div className="text-[rgb(var(--fg))]">{copy.hero.snapshot.areas}</div>
              </div>
              <div>
                <div className="text-[rgb(var(--muted))]">Target roles</div>
                <div className="text-[rgb(var(--fg))]">{copy.hero.snapshot.target}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))] transition hover:opacity-90"
          >
            View Flagship Project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))] transition hover:border-white/30"
          >
            Download Resume
            <Download className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))] transition hover:border-white/30"
          >
            Contact
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {copy.hero.highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="text-sm font-semibold text-[rgb(var(--fg))] md:text-base">{highlight.value}</div>
              <div className="mt-1 text-sm leading-6 text-[rgb(var(--muted))]">{highlight.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <MotionSection id="about" eyebrow={copy.about.eyebrow} title={copy.about.title} subtitle={copy.about.paragraphs[0]}>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 shadow-[0_14px_30px_rgba(0,0,0,0.32)] md:h-48 md:w-48">
                <Image src={copy.about.headshot.src} alt={copy.about.headshot.alt} fill className="object-cover" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[rgb(var(--muted))]">{copy.about.headshot.caption}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {copy.about.headshot.links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    download={item.download}
                    target={item.href.startsWith("https://") ? "_blank" : undefined}
                    rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-[rgb(var(--fg))] transition hover:border-[rgb(var(--accent))]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <PhotoWithCaption
            src="/images/machine-shop.jpg"
            alt="Marcus Greenan cutting sheet metal in the machine shop"
            caption="Using a plasma cutter at the machine shop gave me a better feel for fabrication, fixturing, and what actually works on real parts."
            width={4032}
            height={3024}
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4"
            imageClassName="rounded-[1.2rem] border border-white/10"
          />
        </div>
        <div className="space-y-5">
          {copy.about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph} className="text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
              {paragraph}
            </p>
          ))}
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3 text-[rgb(var(--accent))]">
              <GraduationCap className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.28em]">Education</span>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-[rgb(var(--fg))]">{copy.education.school}</h3>
            <div className="mt-3 space-y-2 text-sm leading-7 text-[rgb(var(--muted))]">
              <p>{copy.education.degree}</p>
              <p>{copy.education.specialization}</p>
              <p>{copy.education.honors}</p>
              <p>{copy.education.graduation}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {copy.education.coursework.map((course) => (
                <span key={course} className="rounded-full border border-white/10 px-3 py-1 text-sm text-[rgb(var(--fg))]">
                  {course}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.about.focusAreas.map((area) => (
              <div key={area.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--accent))]">{area.kicker}</div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl text-[rgb(var(--fg))]">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))]">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function FeaturedProject({ project }: { project: ProjectCopy }) {
  const overview = project.detailSections?.find((section) => section.title === "Overview");
  const contributions = project.detailSections?.find((section) => section.title === "My Contributions");
  const architecture = project.detailSections?.find((section) => section.title === "System Architecture");
  const tradeoffs = project.detailSections?.find((section) => section.title === "Engineering Tradeoffs");
  const outcome = project.detailSections?.find((section) => section.title === "Outcome");

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 md:p-7">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-5">
          <div className="rounded-[1.6rem] border border-white/10 bg-[rgb(var(--bg-soft)_/_0.48)] p-5">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--accent))]">
              <span>Flagship Project</span>
              <span>{project.organization}</span>
              <span>{project.period}</span>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[rgb(var(--fg))] md:text-[3.2rem]">{project.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[rgb(var(--fg))]">{project.subtitle}</p>
            <p className="mt-5 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">{project.overview}</p>
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
                className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))]"
              >
                View Full Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
              {project.reportHref ? (
                <a
                  href={project.reportHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))]"
                >
                  {project.reportLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {project.gallery.map((item) => (
              <div key={item.label} className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--muted))]">{item.label}</div>
                <div className="mt-3 text-sm leading-7 text-[rgb(var(--fg))]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <PhotoWithCaption
            src={project.image}
            alt={project.imageAlt}
            caption="Arm package and mounting geometry for the MAE 148 autonomous trash collection robot."
            width={1642}
            height={1272}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-4"
            imageClassName="rounded-[1.15rem] border border-white/10 bg-white"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {project.media?.slice(1).map((item) => (
              <PhotoWithCaption
                key={item.src}
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-3"
                imageClassName="rounded-xl border border-white/10 bg-white"
                captionClassName="text-xs leading-6"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {[overview, contributions, architecture, tradeoffs, outcome].filter(Boolean).map((section) => (
          <div key={section?.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--accent))]">{section?.title}</div>
            <div className="mt-3 space-y-3 text-sm leading-7 text-[rgb(var(--muted))]">
              {section?.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            {section?.bullets?.length ? (
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[rgb(var(--fg))]">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection({ copy }: { copy: PortfolioCopy }) {
  const featured = copy.projects.find((project) => project.featured) ?? copy.projects[0];
  const supportingProjects = copy.projects.filter((project) => project.slug !== featured.slug);

  return (
    <MotionSection id="projects" eyebrow={copy.projectsSection.eyebrow} title={copy.projectsSection.title} subtitle={copy.projectsSection.subtitle}>
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {copy.projectsSection.galleryStats.map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-2xl font-semibold text-[rgb(var(--fg))]">{item.value}</div>
            <div className="mt-2 text-sm text-[rgb(var(--muted))]">{item.label}</div>
          </div>
        ))}
      </div>
      <FeaturedProject project={featured} />
      <div className="mt-8 grid gap-6">
        {supportingProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]"
        >
          Browse all project detail pages
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </MotionSection>
  );
}

function ExperienceSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <MotionSection id="experience" eyebrow={copy.experienceSection.eyebrow} title={copy.experienceSection.title}>
      <div className="relative ml-3 border-l border-white/10 pl-6">
        {copy.experience.map((item) => (
          <div key={`${item.organization}-${item.period}`} className="relative pb-10 last:pb-0">
            <div className="absolute -left-[2.05rem] top-1 h-4 w-4 rounded-full border border-[rgb(var(--accent))] bg-[rgb(var(--bg))]" />
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">{item.organization}</div>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[rgb(var(--fg))]">{item.role}</h3>
                </div>
                <div className="text-sm text-[rgb(var(--muted))]">{item.period}</div>
              </div>
              <p className="mt-4 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-3 py-1 text-sm text-[rgb(var(--fg))]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}

function ContactSection({ copy }: { copy: PortfolioCopy }) {
  const [submitted, setSubmitted] = useState(false);
  const contactItems = useMemo(
    () => [
      { label: "Email", value: copy.contact.email, href: `mailto:${copy.contact.email}`, icon: Mail },
      { label: "Phone", value: copy.contact.phone, href: `tel:${copy.contact.phone.replace(/[^0-9]/g, "")}`, icon: Phone },
      { label: "LinkedIn", value: copy.contact.linkedin, href: copy.contact.linkedinHref, icon: Linkedin },
      { label: "Location", value: copy.contact.location, href: "#contact", icon: MapPin },
    ],
    [copy.contact.email, copy.contact.linkedin, copy.contact.linkedinHref, copy.contact.location, copy.contact.phone]
  );

  return (
    <MotionSection id="contact" eyebrow={copy.contact.eyebrow} title={copy.contact.title} subtitle={copy.contact.subtitle}>
      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="grid gap-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("https://") ? "_blank" : undefined}
              rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-[rgb(var(--accent))]"
            >
              <div className="flex items-center gap-3 text-[rgb(var(--accent))]">
                <item.icon className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.28em]">{item.label}</span>
              </div>
              <div className="mt-3 text-sm text-[rgb(var(--fg))]">{item.value}</div>
            </a>
          ))}
        </div>
        <form
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");

            window.location.href = `mailto:${copy.contact.email}?subject=${encodeURIComponent(
              `Portfolio inquiry from ${name}`
            )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            setSubmitted(true);
            event.currentTarget.reset();
          }}
        >
          <div className="grid gap-4">
            <input
              required
              name="name"
              placeholder="Name"
              className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-[rgb(var(--fg))] outline-none transition focus:border-[rgb(var(--accent))]"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-[rgb(var(--fg))] outline-none transition focus:border-[rgb(var(--accent))]"
            />
            <textarea
              required
              name="message"
              placeholder="Message"
              rows={6}
              className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-[rgb(var(--fg))] outline-none transition focus:border-[rgb(var(--accent))]"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--fg))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))]">
              Send Message
            </button>
            {submitted ? <p className="text-sm text-[rgb(var(--muted))]">Your email client should open with the message prefilled.</p> : null}
          </div>
        </form>
      </div>
    </MotionSection>
  );
}

function Footer() {
  return (
    <footer className="pb-10 pt-2 text-center text-sm text-[rgb(var(--muted))]">
      Portfolio focused on robotics, controls, fabrication, and integrated hardware systems.
    </footer>
  );
}

export function SiteShell({ copy = portfolioCopy }: { copy?: PortfolioCopy }) {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 md:px-6">
        <Hero copy={copy} />
        <div className="flex flex-col gap-8">
          <AboutSection copy={copy} />
          <ProjectsSection copy={copy} />
          <ExperienceSection copy={copy} />
          <ContactSection copy={copy} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
