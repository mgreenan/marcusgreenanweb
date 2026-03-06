"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Calculator,
  Download,
  Drill,
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
  Wrench,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { getCurrentTheme, toggleTheme } from "@/components/theme-provider";
import { portfolioCopy, type PortfolioCopy } from "@/lib/portfolio-copy";
import { resumeFile, sections } from "@/lib/portfolio-data";

const CadScene = dynamic(() => import("@/components/three/cad-scene"), {
  ssr: false,
});

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
      className="section-shell relative overflow-hidden px-6 py-10 md:px-10 md:py-14"
    >
      <div className="mb-10 max-w-3xl">
        <div className="eyebrow border-white/10 text-[rgb(var(--muted))]">{eyebrow}</div>
        <h2 className="title font-[family-name:var(--font-display)] text-3xl md:text-5xl">{title}</h2>
        {subtitle ? <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))] md:text-base">{subtitle}</p> : null}
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

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 md:px-6">
      <div className="rounded-full border border-white/10 bg-[rgb(var(--bg-soft)_/_0.82)] px-4 py-3 shadow-glow backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.35em] text-[rgb(var(--fg))]">
            Marcus Greenan
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]"
              >
                {section.label}
              </a>
            ))}
            <Link href="/projects" className="text-sm text-[rgb(var(--muted))] transition hover:text-[rgb(var(--fg))]">
              Project Pages
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 lg:hidden">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-[rgb(var(--muted))]"
              >
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

const skillIcons = {
  design: Drill,
  programming: Calculator,
  tools: Wrench,
};

function Hero({ copy }: { copy: PortfolioCopy }) {
  return (
    <section id="home" className="section-shell relative overflow-hidden px-6 pb-10 pt-16 md:px-10 md:pb-16 md:pt-20">
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgb(var(--accent)_/_0.15)] to-transparent" />
      <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="eyebrow border-[rgb(var(--accent)_/_0.35)] bg-[rgb(var(--accent)_/_0.08)] text-[rgb(var(--accent))]">
            {copy.hero.eyebrow}
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none text-[rgb(var(--fg))] md:text-7xl">
            {copy.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-xl text-[rgb(var(--fg))] md:text-2xl">
            {copy.hero.subheading}
          </p>
          <div className="mt-6 space-y-3 max-w-2xl text-base leading-8 text-[rgb(var(--muted))] md:text-lg">
            {copy.hero.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))] transition hover:translate-y-[-1px]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))] transition hover:border-[rgb(var(--accent))]"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))] transition hover:border-[rgb(var(--accent))]"
            >
              Contact
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {copy.hero.highlights.map((highlight) => (
              <div key={highlight.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-lg font-semibold text-[rgb(var(--fg))] md:text-xl">{highlight.value}</div>
                <div className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(77,181,255,0.25),transparent_55%)] blur-3xl" />
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,40,0.9),rgba(5,7,11,0.8))] shadow-glow">
            <CadScene />
            <div className="absolute inset-x-6 bottom-6 grid gap-4 rounded-3xl border border-white/10 bg-[rgb(var(--bg)_/_0.74)] p-5 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[rgb(var(--muted))]">
                <span>{copy.hero.snapshot.heading}</span>
                <span>{copy.hero.snapshot.areas}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[rgb(var(--muted))]">Primary Track</div>
                  <div className="mt-1 text-sm text-[rgb(var(--fg))]">{copy.hero.snapshot.focus}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[rgb(var(--muted))]">Applied Areas</div>
                  <div className="mt-1 text-sm text-[rgb(var(--fg))]">{copy.hero.snapshot.areas}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[rgb(var(--muted))]">Internship Target</div>
                  <div className="mt-1 text-sm text-[rgb(var(--fg))]">{copy.hero.snapshot.target}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ copy }: { copy: PortfolioCopy }) {
  const headshotCard = (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-zinc-700 shadow-[0_14px_30px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:scale-[1.03] md:h-48 md:w-48 lg:h-52 lg:w-52">
          <Image
            src={copy.about.headshot.src}
            alt={copy.about.headshot.alt}
            fill
            priority={false}
            className="object-cover"
          />
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
  );
  return (
    <MotionSection
      id="about"
      eyebrow={copy.about.eyebrow}
      title={copy.about.title}
      subtitle={copy.about.paragraphs[0]}
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">
          <div className="lg:hidden">{headshotCard}</div>
          {copy.about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3 text-[rgb(var(--accent))]">
              <GraduationCap className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.28em]">Education</span>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-[rgb(var(--fg))]">
              {copy.education.school}
            </h3>
            <div className="mt-3 space-y-2 text-sm leading-7 text-[rgb(var(--muted))]">
              <p>{copy.education.degree}</p>
              <p>{copy.education.specialization}</p>
              <p>{copy.education.honors}</p>
              <p>{copy.education.graduation}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="hidden lg:block">{headshotCard}</div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">Relevant Coursework</div>
            <div className="mt-4 flex flex-wrap gap-2">
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

function ProjectsSection({ copy }: { copy: PortfolioCopy }) {
  const [expanded, setExpanded] = useState<string | null>(copy.projects[0]?.slug ?? null);

  return (
    <MotionSection
      id="projects"
      eyebrow={copy.projectsSection.eyebrow}
      title={copy.projectsSection.title}
      subtitle={copy.projectsSection.subtitle}
    >
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {copy.projectsSection.galleryStats.map((item) => (
          <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-2xl font-semibold text-[rgb(var(--fg))]">{item.value}</div>
            <div className="mt-2 text-sm text-[rgb(var(--muted))]">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="grid gap-6">
        {copy.projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            expanded={expanded === project.slug}
            onToggle={() => setExpanded(expanded === project.slug ? null : project.slug)}
          />
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
    <MotionSection
      id="experience"
      eyebrow={copy.experienceSection.eyebrow}
      title={copy.experienceSection.title}
    >
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
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <p className="text-sm leading-8 text-[rgb(var(--muted))] md:text-base">{item.description}</p>
                {item.organization === "UCSD Jacobs Machine Shop" ? (
                  <div className="w-full">
                    <Image
                      src="/images/plasma-cutting.jpg"
                      alt="Marcus Greenan plasma cutting sheet metal in the UCSD Jacobs Machine Shop"
                      width={1200}
                      height={900}
                      className="rounded-xl shadow-md w-full max-w-[520px] h-auto object-cover"
                    />
                    <p className="mt-3 text-sm text-zinc-400">
                      Plasma cutting sheet metal components at the UCSD Jacobs Machine Shop.
                    </p>
                  </div>
                ) : null}
              </div>
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

function SkillsSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <MotionSection
      id="skills"
      eyebrow={copy.skillsSection.eyebrow}
      title={copy.skillsSection.title}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {copy.skills.map((group) => {
          const Icon = skillIcons[group.iconKey];

          return (
            <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3 text-[rgb(var(--accent))]">
                <Icon className="h-5 w-5" />
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[rgb(var(--fg))]">{group.title}</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[rgb(var(--muted))]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
}

function LeadershipSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <MotionSection
      id="leadership"
      eyebrow={copy.leadershipSection.eyebrow}
      title={copy.leadershipSection.title}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent))]">{copy.leadership.organization}</div>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[rgb(var(--fg))]">{copy.leadership.role}</h3>
          <div className="mt-3 text-sm text-[rgb(var(--muted))]">{copy.leadership.period}</div>
          <p className="mt-5 text-sm leading-8 text-[rgb(var(--muted))] md:text-base">{copy.leadership.description}</p>
        </div>
        <div className="grid gap-4">
          {copy.leadership.responsibilities.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-[rgb(var(--fg))]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function ResumeSection() {
  return (
    <MotionSection
      id="resume"
      eyebrow="Resume"
      title="Thanks for taking the time to look through my work. If you’d like a closer look at my experience, you can view or download my resume below."
    >
      <div className="mb-6 flex flex-wrap gap-3">
        <a
          href={resumeFile}
          download
          className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--fg))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))]"
        >
          Download Resume
          <Download className="h-4 w-4" />
        </a>
        <a
          href={resumeFile}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[rgb(var(--fg))]"
        >
          View PDF
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
        <iframe src={resumeFile} title="Marcus Greenan Resume" className="h-[85vh] w-full" />
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
    <MotionSection
      id="contact"
      eyebrow={copy.contact.eyebrow}
      title={copy.contact.title}
      subtitle={copy.contact.subtitle}
    >
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
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--fg))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))]"
            >
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
      Mechanical engineering portfolio focused on aerospace structures, robotics systems, autonomous vehicles, precision manufacturing, and experimental engineering.
    </footer>
  );
}

export function SiteShell({ copy = portfolioCopy }: { copy?: PortfolioCopy }) {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-12 pt-6 md:px-6">
        <Hero copy={copy} />
        <AboutSection copy={copy} />
        <ProjectsSection copy={copy} />
        <ExperienceSection copy={copy} />
        <SkillsSection copy={copy} />
        <LeadershipSection copy={copy} />
        <ResumeSection />
        <ContactSection copy={copy} />
      </main>
      <Footer />
    </div>
  );
}
