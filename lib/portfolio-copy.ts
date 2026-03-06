export type SkillGroupCopy = {
  title: string;
  iconKey: "design" | "programming" | "tools";
  items: string[];
};

export type ProjectCopy = {
  slug: string;
  title: string;
  subtitle: string;
  organization: string;
  role: string;
  period: string;
  hero: string;
  image: string;
  iconKey: "rocket" | "robotics" | "autonomy";
  tools: string[];
  sponsors?: string[];
  gallery: { label: string; value: string }[];
  overview: string;
  engineeringChallenges: string[];
  designApproach: string[];
  validationTesting: string[];
  resultsImpact: string[];
  nextSteps: string[];
};

export type ExperienceCopy = {
  organization: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
};

export type PortfolioCopy = {
  name: string;
  hero: {
    eyebrow: string;
    title: string;
    subheading: string;
    intro: string[];
    highlights: { value: string; label: string }[];
    snapshot: {
      heading: string;
      focus: string;
      areas: string;
      target: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    headshot: {
      src: string;
      alt: string;
      caption: string;
      links: { label: string; href: string; download?: boolean }[];
    };
    focusAreas: { kicker: string; title: string; description: string }[];
  };
  education: {
    school: string;
    degree: string;
    specialization: string;
    honors: string;
    graduation: string;
    coursework: string[];
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    galleryStats: { value: string; label: string }[];
  };
  projects: ProjectCopy[];
  experienceSection: {
    eyebrow: string;
    title: string;
  };
  experience: ExperienceCopy[];
  skillsSection: {
    eyebrow: string;
    title: string;
  };
  skills: SkillGroupCopy[];
  leadershipSection: {
    eyebrow: string;
    title: string;
  };
  leadership: {
    organization: string;
    role: string;
    period: string;
    description: string;
    responsibilities: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinHref: string;
    location: string;
  };
};

export const portfolioCopy: PortfolioCopy = {
  name: "Marcus Greenan",
  hero: {
    eyebrow: "UC San Diego • Mechanical Engineering • Robotics and Controls",
    title: "Marcus Greenan",
    subheading: "I build at the intersection of aerospace structures, robotics, and precision manufacturing.",
    intro: [
      "At UC San Diego, I study mechanical engineering with a robotics and controls specialization.",
      "Most weeks I move between CAD, ROS control loops, and machine shop work, then validate decisions with data.",
    ],
    highlights: [
      { value: "B.S. Mechanical Engineering", label: "UC San Diego" },
      { value: "Robotics and Controls", label: "Specialization" },
      { value: "GPA 3.57", label: "Provost Honors" },
      { value: "Expected June 2027", label: "Graduation timeline" },
      { value: "La Jolla, CA", label: "Based in San Diego" },
    ],
    snapshot: {
      heading: "Engineering Snapshot",
      focus: "Robotics and Controls",
      areas: "Aerospace structures, multi-agent robotics, and precision fabrication",
      target: "Design, controls, fabrication, and validation",
    },
  },
  about: {
    eyebrow: "Profile",
    title: "My best work happens when CAD, controls, fabrication, and testing all have to agree.",
    paragraphs: [
      "I am a mechanical engineering student at UC San Diego with a robotics and controls specialization. My projects sit across aerospace structures, multi-agent robotics, and precision manufacturing.",
      "I work from constraints first, then design details. The workflow is usually quick FEA checks, OpenRocket trade studies, and field testing before I lock decisions.",
      "That loop keeps tolerances, fixturing, and integration grounded in real behavior instead of assumptions. It also helps me adjust quickly when simulation and hardware disagree.",
    ],
    headshot: {
      src: "/headshot.png",
      alt: "Headshot of Marcus Greenan",
      caption: "UC San Diego | Robotics & Controls",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marcus-greenan-944972243/" },
        { label: "Resume", href: "/Marcus_Greenan_Resume.pdf", download: true },
      ],
    },
    focusAreas: [
      {
        kicker: "Aerospace Structures",
        title: "Load paths and tradeoffs",
        description: "I use CAD, tolerance checks, and basic FEA to balance stiffness, mass, and integration constraints.",
      },
      {
        kicker: "Multi-Agent Robotics",
        title: "Coverage and coordination",
        description: "I work on Voronoi coverage, centroid control, localization and mapping, and ROS feedback loops.",
      },
      {
        kicker: "Manufacturing",
        title: "Print to part",
        description: "I machine aluminum and polymer parts on manual mills and lathes with close attention to GD&T intent and fixturing.",
      },
      {
        kicker: "Validation",
        title: "Test-driven iteration",
        description: "I rely on controller tuning, Python logging, system ID, and field validation to decide what to change next.",
      },
    ],
  },
  education: {
    school: "University of California, San Diego (UCSD)",
    degree: "B.S. Mechanical Engineering",
    specialization: "Specialization in Robotics and Controls",
    honors: "Provost Honors",
    graduation: "Expected Graduation: June 2027",
    coursework: ["Fluid Mechanics", "Solid Mechanics", "Thermodynamics", "Dynamics", "Control Systems", "Materials Science"],
  },
  projectsSection: {
    eyebrow: "Projects",
    title: "I write project notes the same way I build: constraints, design choices, then validation.",
    subtitle: "Each project includes what I owned, where things got tricky, and what changed after testing.",
    galleryStats: [
      { value: "3", label: "Core engineering projects" },
      { value: "2", label: "Current robotics projects" },
      { value: "1", label: "Completed rocket structures cycle" },
    ],
  },
  projects: [
    {
      slug: "rocket-propulsion-lab-daedalus",
      title: "Rocket Propulsion Lab – Daedalus",
      subtitle: "Structures lead work for a student rocket targeting ~4,000-ft apogee",
      organization: "UCSD Rocket Propulsion Lab",
      role: "Structures Lead",
      period: "10/2024 – 6/2025",
      hero: "from-slate-950 via-slate-800 to-orange-700",
      image: "/rocket-diagram.svg",
      iconKey: "rocket",
      tools: ["SolidWorks", "OpenRocket", "CAD modeling", "Tolerance analysis", "Basic FEA checks"],
      gallery: [
        { label: "Target", value: "~4,000-ft apogee" },
        { label: "Primary Focus", value: "Structures + integration" },
        { label: "Trade Studies", value: "Stability margin, drag, mass distribution" },
      ],
      overview:
        "I led structures for Daedalus, focusing on CAD modeling, tolerance analysis, and basic FEA checks before fabrication. I also supported propulsion and recovery validation with instrumentation and data collection.",
      engineeringChallenges: [
        "Balancing stiffness and mass was constant, because every structural change affected the full vehicle behavior.",
        "I had to keep aerodynamic stability in view while updates shifted mass distribution and integration constraints.",
      ],
      designApproach: [
        "I built and revised structural CAD with tolerance checks early so assembly issues surfaced before parts were cut.",
        "Quick FEA passes helped me screen options and remove weak concepts without slowing the team down.",
      ],
      validationTesting: [
        "I used OpenRocket trade studies to compare stability margin, drag, and mass distribution options.",
        "During propulsion and recovery validation, I supported instrumentation and data collection to tie design choices to test behavior.",
      ],
      resultsImpact: [
        "The final structure process was more repeatable because CAD, analysis, and test data stayed connected.",
        "I left with a better habit of making structural decisions in the context of the whole system.",
      ],
      nextSteps: [
        "I want stronger pre-test correlation so structural assumptions can be checked earlier in the cycle.",
      ],
    },
    {
      slug: "multi-agent-robotics-coverage",
      title: "Multi-Agent Robotics Coverage",
      subtitle: "Distributed coverage research in simulation and hardware",
      organization: "UCSD Multi-Agent Robotics Lab",
      role: "Undergraduate Researcher",
      period: "10/2025 – Present",
      hero: "from-slate-950 via-cyan-950 to-blue-700",
      image: "/robotics-diagram.svg",
      iconKey: "robotics",
      tools: ["Python", "ROS", "Voronoi coverage", "Centroid control", "System ID"],
      gallery: [
        { label: "Methods", value: "Voronoi coverage + centroid control" },
        { label: "Stack", value: "Python, ROS, logging workflows" },
        { label: "Validation", value: "Simulation + hardware experiments" },
      ],
      overview:
        "I work on multi-agent coverage with Voronoi partitioning and centroid control, then compare simulation and hardware behavior. Most of my time goes into ROS feedback, controller tuning, Python logging, and experimental validation.",
      engineeringChallenges: [
        "Coordination quality drops quickly when localization and mapping drift during real tests.",
        "Controller gains that look good in one run are not always stable across repeated runs.",
      ],
      designApproach: [
        "I build ROS and Python workflows that make each run easy to log, compare, and debug.",
        "System ID is part of the loop so tuning decisions are based on measured behavior.",
      ],
      validationTesting: [
        "I run the same scenarios in simulation and hardware, then inspect where traces diverge.",
        "Those comparisons drive updates to feedback structure and gain selection.",
      ],
      resultsImpact: [
        "The project taught me to treat experiments as evidence, not demos.",
        "It also improved how I structure repeatable robotics tests before performance pushes.",
      ],
      nextSteps: [
        "I am continuing to test broader scenarios and tighten convergence behavior under disturbance.",
      ],
    },
    {
      slug: "mae-148-autonomous-trash-can-retrieval-robot",
      title: "MAE 148 – Autonomous Trash Can Retrieval Robot",
      subtitle: "Mechanical lead role on a 6-person autonomy team",
      organization: "UCSD MAE 148",
      role: "Mechanical Lead",
      period: "1/2026 – Present",
      hero: "from-slate-950 via-emerald-950 to-sky-700",
      image: "/autonomy-diagram.svg",
      iconKey: "autonomy",
      tools: ["SolidWorks", "ROS", "GPS path tracking", "PID tuning", "Field validation"],
      gallery: [
        { label: "Team", value: "6-person interdisciplinary group" },
        { label: "Subsystem", value: "Custom 5-axis arm + mobile base" },
        { label: "Validation", value: "Field testing and tracking error review" },
      ],
      overview:
        "I lead the mechanical subsystem for a six-person team building an autonomous trash can retrieval robot. My scope includes the 5-axis arm, drivetrain geometry, packaging constraints, and integration with ROS navigation and GPS tracking.",
      engineeringChallenges: [
        "The arm needed enough rigidity for repeatable motion while still fitting packaging constraints.",
        "Small geometry and steering changes showed up as tracking error in field runs.",
      ],
      designApproach: [
        "I developed the arm layout around kinematics, actuation control interfaces, and structural stiffness.",
        "I treated drivetrain and arm design as part of the controls problem, then tuned with navigation data.",
      ],
      validationTesting: [
        "We ran field tests, reviewed tracking error, and fed those results back into mechanical updates.",
        "I used ROS navigation behavior, GPS traces, and PID tuning results to prioritize what to change.",
      ],
      resultsImpact: [
        "The platform now tracks more consistently because mechanical and controls decisions are reviewed together.",
        "This project reinforced how strongly packaging and rigidity influence autonomy performance.",
      ],
      nextSteps: [
        "I am continuing to tighten tracking consistency through repeated field validation.",
      ],
    },
  ],
  experienceSection: {
    eyebrow: "Experience",
    title: "I have worked in labs, software pipelines, and machine shop environments, so my process stays grounded in execution.",
  },
  experience: [
    {
      organization: "UCSD Jacobs Machine Shop",
      role: "Tutor / Assistant",
      period: "1/2026 – Present",
      description:
        "I machine aluminum and polymer parts on manual mills and lathes, often for teams trying to recover from rough first designs. I spend real time reading prints before setup so fixturing and tolerance strategy are clear. GD&T interpretation comes up constantly, especially when drawings are technically correct but hard to manufacture. I also help teams diagnose bad setups, adjust their process, and recut parts that missed intent. Most of the value is catching mistakes early so integration does not fail later.",
      skills: ["Manual mills and lathes", "GD&T interpretation", "Fixturing", "Tight-tolerance machining"],
    },
    {
      organization: "Joint BioEnergy Institute (JBEI)",
      role: "Engineering Intern",
      period: "6/2022 – 9/2022",
      description:
        "At JBEI, I ran controlled microbial biofuel experiments and tracked each run methodically. Logging was a big part of the job because small setup differences changed yield and repeatability. After each cycle, I processed the data to compare process efficiency and consistency. I presented results to the team with the supporting records so conclusions were easy to verify.",
      skills: ["Methodical experimentation", "Run logging", "Yield and repeatability analysis", "Technical presentations"],
    },
    {
      organization: "iLAB BioTech Partners",
      role: "Software Engineering Intern",
      period: "6/2022 – 9/2023",
      description:
        "I wrote Python scripts for large bioinformatics datasets and cleaned messy inputs before analysis. The core work was pipeline discipline: clear steps, stable outputs, and reproducible reruns. I added statistical checks to catch issues before downstream decisions were made. That experience made reproducibility a default engineering habit for me, not an afterthought.",
      skills: ["Python scripting", "Data cleaning", "Statistical analysis", "Reproducible pipelines"],
    },
  ],
  skillsSection: {
    eyebrow: "Technical Skills",
    title: "These are the tools and workflows I use most across design, controls, and validation work.",
  },
  skills: [
    {
      title: "Design & Manufacturing",
      iconKey: "design",
      items: ["CAD modeling", "Tolerance analysis", "Basic FEA checks", "Manual mills and lathes", "GD&T", "Fixturing"],
    },
    {
      title: "Programming & Controls",
      iconKey: "programming",
      items: ["Python", "ROS", "Control loops", "PID tuning", "Centroid control", "GPS path tracking"],
    },
    {
      title: "Validation & Analysis",
      iconKey: "tools",
      items: ["OpenRocket trade studies", "Instrumentation", "Data logging", "System ID", "Field testing"],
    },
  ],
  leadershipSection: {
    eyebrow: "Leadership",
    title: "I approached chapter finances with the same discipline I use in engineering work.",
  },
  leadership: {
    organization: "Tau Kappa Epsilon – UCSD Chapter",
    role: "Treasurer",
    period: "1/2025 – 1/2026",
    description:
      "I managed a $75K+ budget and handled allocation planning, dues, and reporting. Clear tracking mattered because everyone needed visibility into real constraints and tradeoffs. I cleaned up how we recorded spending so forecasting was easier and surprises were rarer. That role reinforced habits I use in projects: make constraints explicit, keep status visible, and review decisions before problems compound.",
    responsibilities: [
      "Managed $75K+ annual operating budget",
      "Ran allocation planning, dues collection, and financial reporting",
      "Improved tracking for transparency and forecasting",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "If you are building real hardware systems, I would like to talk.",
    subtitle: "Email is the fastest way to reach me, and I am always open to a direct technical conversation.",
    email: "mgreenan@ucsd.edu",
    phone: "(510) 640-9217",
    linkedin: "linkedin.com/in/marcus-greenan-944972243",
    linkedinHref: "https://www.linkedin.com/in/marcus-greenan-944972243/",
    location: "La Jolla, CA",
  },
};

export const projectsBySlug = Object.fromEntries(portfolioCopy.projects.map((project) => [project.slug, project]));
