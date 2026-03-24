export type SkillGroupCopy = {
  title: string;
  iconKey: "design" | "programming" | "tools";
  items: string[];
};

export type ProjectDetailSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  imageClassName?: string;
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
  imageAlt: string;
  imageClassName?: string;
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
  detailSections?: ProjectDetailSection[];
  media?: ProjectMedia[];
  reportHref?: string;
  reportLabel?: string;
  featured?: boolean;
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
    subheading: "Mechanical engineering student building robotics hardware for robotics, autonomy, and hardware internships.",
    intro: [
      "I work on systems that have to run on real hardware: CAD, brackets, wiring, sensing, ROS2 interfaces, and the tuning work that gets a robot from partial subsystems to repeatable behavior.",
      "Most of my work is in robotics, controls, fabrication, and systems integration, especially when packaging, bandwidth, power, and field testing all matter at once.",
    ],
    highlights: [
      { value: "Robotics / Hardware Internships", label: "Target roles" },
      { value: "ROS2 + CAD + Fabrication", label: "Systems stack" },
      { value: "UC San Diego", label: "Mechanical Engineering" },
      { value: "GPA 3.57", label: "Provost Honors" },
      { value: "Expected June 2027", label: "Graduation timeline" },
    ],
    snapshot: {
      heading: "Engineering Snapshot",
      focus: "Robotics, controls, and hardware integration",
      areas: "Mobile robotics, machine shop work, manipulator packaging, and test-driven iteration",
      target: "Robotics / hardware internships across autonomy, aerospace, defense, and advanced manufacturing",
    },
  },
  about: {
    eyebrow: "Profile",
    title: "I build systems and keep working on them until the mechanical layout, sensing, and control behavior make sense on real hardware.",
    paragraphs: [
      "I am a mechanical engineering student at UC San Diego specializing in robotics and controls. I work best on projects where the mechanical, software, and electrical pieces all affect each other and someone has to make the whole thing behave.",
      "That usually means moving between CAD, printed or machined parts, sensor placement, ROS2 interfaces, and repeated bench or field tests. I care about whether the package is serviceable, whether the sensing geometry matches the control logic, and whether the system still works once power and bandwidth become real constraints.",
      "I am targeting robotics and hardware internships where hands-on integration matters: mobile robotics, autonomy, aerospace hardware, defense systems, and advanced manufacturing.",
    ],
    headshot: {
      src: "/headshot.png",
      alt: "Headshot of Marcus Greenan",
      caption: "UC San Diego | Robotics and Controls",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marcus-greenan-944972243/" },
        { label: "Resume", href: "/Marcus_Greenan_Resume.pdf", download: true },
      ],
    },
    focusAreas: [
      {
        kicker: "Robotics Integration",
        title: "From sensors to actuator behavior",
        description: "I work at the point where camera geometry, LiDAR processing, ROS2 messaging, and physical packaging directly affect how the robot moves.",
      },
      {
        kicker: "Mechanical Execution",
        title: "CAD, hardware packaging, and fabrication",
        description: "I design brackets, mounts, and integrated assemblies with service access, stiffness, wiring paths, and manufacturability in mind.",
      },
      {
        kicker: "Controls and Validation",
        title: "Test until the system explains itself",
        description: "I tune controllers from logged behavior and iterate from failure modes instead of assuming the first architecture is the right one.",
      },
      {
        kicker: "Machine Shop",
        title: "Prints, setup, and recuts",
        description: "I work in manual machining environments where bad fixturing, loose tolerances, and rushed setup decisions show up immediately in the part.",
      },
    ],
  },
  education: {
    school: "University of California, San Diego",
    degree: "B.S. Mechanical Engineering",
    specialization: "Specialization in Robotics and Controls",
    honors: "Provost Honors",
    graduation: "Expected Graduation: June 2027",
    coursework: ["Controls", "Dynamics", "Solid Mechanics", "Fluid Mechanics", "Thermodynamics", "Materials Science"],
  },
  projectsSection: {
    eyebrow: "Projects",
    title: "These are the projects that best show how I work: build the system, test it, and fix what breaks.",
    subtitle: "MAE 148 is first because it is the clearest example of the robotics work I want to do: sensing, control, packaging, and hardware integration under real constraints.",
    galleryStats: [
      { value: "1", label: "Flagship mobile robotics system" },
      { value: "3", label: "Core engineering case studies" },
      { value: "2", label: "Projects with real hardware validation" },
    ],
  },
  projects: [
    {
      slug: "mae-148-autonomous-trash-can-retrieval-robot",
      title: "MAE 148 - Autonomous Trash Collection Robot",
      subtitle: "Built an autonomous robot that could detect trash, drive to it, stop at the right distance, and pick it up on real hardware",
      organization: "UCSD MAE 148",
      role: "Mechanical Lead and Systems Integration",
      period: "Winter 2026",
      hero: "from-slate-950 via-emerald-950 to-sky-700",
      image: "/images/mae148-arm-cad.png",
      imageAlt: "Custom SO101 robotic arm CAD used for the MAE 148 autonomous trash collection robot",
      iconKey: "autonomy",
      featured: true,
      tools: ["ROS2", "OAK-D Lite", "YOLO", "LD19 LiDAR", "SolidWorks", "Raspberry Pi 5", "/cmd_vel control"],
      gallery: [
        { label: "System", value: "Vision-guided mobile manipulation" },
        { label: "Stop Logic", value: "Forward-cone clustering with ~0.16 m standoff" },
        { label: "Primary Ownership", value: "LiDAR processing, arm integration, CAD, and packaging" },
      ],
      overview:
        "I built and integrated an autonomous trash collection robot that used OAK-D Lite vision, YOLO-based detection, LD19 LiDAR stop logic, ROS2 /cmd_vel control, and a custom-mounted SO101 robotic arm. I worked on the LiDAR stop logic, arm integration, and CAD for the system, and then tested the package on the real vehicle until the sensing and control behavior lined up.",
      engineeringChallenges: [
        "Sensor placement directly affected controller behavior because image-centroid steering and LiDAR stop logic had to reference the same physical target line.",
        "USB bandwidth, limited onboard compute, and power instability forced us to simplify the stack until the robot could run repeatably on the Raspberry Pi host.",
        "The arm, bin, camera, LiDAR, and power hardware all competed for the same chassis volume, so packaging decisions changed reach, visibility, and serviceability at the same time.",
      ],
      designApproach: [
        "I built the LiDAR processing path that filtered LD19 scans to a forward cone, clustered adjacent returns, and reduced them to a centroid-based stop distance for the approach controller.",
        "I integrated the robotic arm mechanically and in CAD so the manipulator, sensor mast, and trash bin could coexist on the platform without breaking line of sight or the arm reach envelope.",
        "We kept the autonomy deliberately reactive: image-centroid steering for alignment, LiDAR for standoff control, and ROS2 velocity commands simple enough to tune on hardware.",
      ],
      validationTesting: [
        "Subsystem testing was staged: standalone OAK-D validation, standalone LiDAR clustering validation, then integrated ROS2 navigation on the vehicle.",
        "I used repeated approach tests to tune cone width, centroid clustering, and the stop distance needed to hand off cleanly to the arm.",
        "The integrated control loop ran at roughly 10 Hz after we reduced camera and LiDAR rates to stay inside bandwidth and timing limits.",
      ],
      resultsImpact: [
        "We got the robot to detect a target, follow it, stop before contact, and hand off to the arm from a usable vehicle package.",
        "The main result was getting the sensing scope, compute budget, power stability, and control simplicity to work together on real hardware.",
      ],
      nextSteps: [
        "Add identity matching between camera detections and LiDAR returns, then replace the binary stop threshold with a continuous near-target controller.",
        "Improve power isolation and logging so arm actuation and perception can run more reliably during longer integrated tests.",
      ],
      detailSections: [
        {
          title: "Overview",
          paragraphs: [
            "I built an autonomous robot that could detect trash, drive into a manipulation-ready pose, stop at the right distance, and hand off to an onboard arm for pickup and deposit. The stack used a YOLO-derived detector on an OAK-D Lite, ROS2 velocity control on the mobile base, and LD19 LiDAR processing for final standoff control.",
            "The hard part was not getting one subsystem to work by itself. I had to get the sensing geometry, packaging, update rates, and mechanical layout to support the same pickup sequence on the real vehicle.",
          ],
        },
        {
          title: "My Contributions",
          paragraphs: [
            "I worked on the LiDAR coding and processing, LiDAR-based stop logic, robotic arm integration, and the CAD and hardware packaging for the manipulator and sensor stack.",
            "That meant writing and tuning the forward-cone clustering logic, choosing where sensors sat relative to the chassis and arm, and making packaging decisions that improved both reach and controllability.",
          ],
          bullets: [
            "Filtered LD19 scans to a forward cone and converted clustered returns into a centroid-based stop measurement.",
            "Integrated the SO101 arm and mounting hardware into the vehicle package.",
            "Worked the sensor-placement problem so visual steering and LiDAR stopping referenced usable geometry.",
          ],
        },
        {
          title: "System Architecture",
          paragraphs: [
            "The robot followed a staged reactive pipeline: OAK-D Lite detection picked the target, image-centroid error generated steering corrections, LD19 LiDAR estimated forward standoff distance, and a ROS2 node published /cmd_vel until the robot reached a manipulation-ready position.",
            "We kept the architecture light enough for the platform. Inference ran on the OAK-D Myriad X accelerator to reduce USB load, queue depth stayed low to keep the data fresh, and the controller stayed simple enough that we could tune it on hardware.",
          ],
        },
        {
          title: "LiDAR and Control",
          paragraphs: [
            "I used forward-cone clustering instead of trying to reconstruct the full scene. I filtered returns to roughly +/-20 degrees, rejected points outside about 0.15 m to 1.50 m, grouped adjacent returns with a 0.08 m clustering threshold, and used the nearest cluster centroid as the stop signal.",
            "The approach controller used image-centroid steering and published ROS2 /cmd_vel commands at about 10 Hz. Steering came from normalized image error, while the robot kept moving forward slowly until the centroid-based LiDAR distance reached about 0.16 m.",
          ],
          bullets: [
            "OAK-D Lite plus YOLO detection for target nomination.",
            "Image-centroid steering for short-horizon visual alignment.",
            "Centroid-based LD19 stop logic for consistent arm reach setup.",
          ],
        },
        {
          title: "Arm and CAD Integration",
          paragraphs: [
            "The arm package was not a bolt-on subsystem. The manipulator base, camera, LiDAR, wiring, and trash bin all competed for the same deck space, so the CAD and bracket work directly affected whether the robot could see and reach the object.",
            "I built the arm geometry around reach, visibility, and service access rather than kinematics alone. Keeping the arm on the centerline helped stability, while the forward sensor package kept a usable view of low targets during the approach phase.",
          ],
        },
        {
          title: "Engineering Tradeoffs",
          paragraphs: [
            "Sensor placement changed control performance directly. If the camera and LiDAR axes drifted apart mechanically, the robot could center a target visually while stopping relative to the wrong physical line. That made sensor packaging part of the controls problem, not just a mounting task.",
            "The other major constraints were USB bandwidth, compute, and power stability. We reduced camera and LiDAR rates to about 10 Hz, ran inference on-device, and kept the controller simple because the system needed to run reliably on the hardware we had.",
          ],
        },
        {
          title: "Outcome",
          paragraphs: [
            "The finished system could detect a target, follow it, stop before contact, and support arm-based collection from a coherent vehicle package.",
            "It also gave me direct experience with the kind of robotics work I want to keep doing: CAD, sensing, wiring, ROS2 nodes, and controller tuning all coming together on a robot that actually runs.",
          ],
        },
      ],
      media: [
        {
          src: "/images/mae148-arm-cad.png",
          alt: "Custom SO101 arm CAD used in the MAE 148 trash collection robot",
          caption: "Custom arm package used to fit the manipulator, sensor mast, and bin geometry on the vehicle.",
          width: 1642,
          height: 1272,
        },
        {
          src: "/images/mae148-detection.png",
          alt: "OAK-D Lite detection output used for target following in the MAE 148 robot",
          caption: "OAK-D Lite detection output used to generate image-centroid steering commands.",
          width: 530,
          height: 568,
        },
        {
          src: "/images/mae148-lidar.png",
          alt: "LD19 LiDAR forward-cone clustering visualization used for MAE 148 stop control",
          caption: "Forward-cone LD19 clustering reduced to the nearest centroid distance for stop control.",
          width: 954,
          height: 1044,
        },
      ],
      reportHref: "/documents/mae148-report.pdf",
      reportLabel: "View Full Technical Report",
    },
    {
      slug: "multi-agent-robotics-coverage",
      title: "Multi-Agent Robotics Coverage",
      subtitle: "Distributed coverage and controls work in simulation and Crazyflie hardware experiments",
      organization: "UCSD Multi-Agent Robotics Lab",
      role: "Undergraduate Researcher",
      period: "2025 - Present",
      hero: "from-slate-950 via-cyan-950 to-blue-700",
      image: "/images/muro-drone.jpg",
      imageAlt: "Crazyflie micro-drone used in multi-agent robotics experiments",
      imageClassName: "-scale-x-100",
      iconKey: "robotics",
      tools: ["Python", "ROS", "Crazyflie", "Centroid control", "Voronoi coverage", "System identification"],
      gallery: [
        { label: "Research Focus", value: "Coverage control and hardware validation" },
        { label: "Platform", value: "Crazyflie micro-quadrotors" },
        { label: "My Work", value: "ROS feedback, tuning, logging, and experiment execution" },
      ],
      overview:
        "I work on distributed coverage and control problems in the UCSD Multi-Agent Robotics Lab and test how they hold up in both simulation and hardware. Most of the work is in the loop between ROS feedback, tuning, logging, and seeing what changes once the controller leaves the clean simulation case.",
      engineeringChallenges: [
        "Coverage performance depends heavily on localization quality, so hardware runs can diverge quickly from clean simulation assumptions.",
        "Controller gains that look stable in one scenario do not always transfer across disturbances, battery state, or platform setup changes.",
      ],
      designApproach: [
        "I use ROS and Python tooling to make runs easy to log, compare, and debug rather than treating hardware experiments as one-off demos.",
        "The work combines centroid control, coverage logic, and repeatable experiment structure so controller changes can be tied to measured behavior.",
      ],
      validationTesting: [
        "I compare simulation traces against Crazyflie hardware runs and use those gaps to refine controller structure and gain selection.",
        "System identification and logging are part of the workflow because repeatability matters more than single-run performance.",
      ],
      resultsImpact: [
        "The work sharpened how I think about disturbance, measurement quality, and controller robustness on small robotic platforms.",
        "It also reinforced a useful habit: isolate the variable, log the run, and treat the hardware as the real test of the control design.",
      ],
      nextSteps: [
        "Push broader scenarios and tighter convergence under disturbance while keeping the experiments comparable across runs.",
      ],
      media: [
        {
          src: "/images/muro-drone.jpg",
          alt: "Crazyflie drone used in multi-agent robotics work",
          caption: "Crazyflie hardware used to connect coverage-control ideas to repeatable lab experiments.",
          width: 3024,
          height: 4032,
          imageClassName: "-scale-x-100",
        },
      ],
    },
    {
      slug: "rocket-propulsion-lab-daedalus",
      title: "Rocket Propulsion Lab - Daedalus",
      subtitle: "Structures work for a student rocket targeting roughly 4,000 ft apogee",
      organization: "UCSD Rocket Propulsion Lab",
      role: "Structures Lead",
      period: "2024 - 2025",
      hero: "from-slate-950 via-slate-800 to-orange-700",
      image: "/rocket-diagram.svg",
      imageAlt: "Rocket technical diagram representing the Daedalus project",
      iconKey: "rocket",
      tools: ["SolidWorks", "OpenRocket", "Tolerance analysis", "Basic FEA checks", "Instrumentation"],
      gallery: [
        { label: "Vehicle Goal", value: "~4,000 ft apogee" },
        { label: "Primary Scope", value: "Structures and integration" },
        { label: "Engineering Lens", value: "Mass, stiffness, and stability tradeoffs" },
      ],
      overview:
        "I worked on structures for Daedalus, a student rocket project where stiffness, mass, assembly tolerance, and aerodynamic stability all had to be balanced together. I built the structural CAD, checked tolerances, and used quick FEA passes before fabrication and validation.",
      engineeringChallenges: [
        "Every structural change shifted mass distribution and therefore changed stability and integration behavior elsewhere in the vehicle.",
        "Tolerance choices needed to support repeatable assembly without adding unnecessary mass or overcomplicating fabrication.",
      ],
      designApproach: [
        "I used CAD and tolerance analysis early to expose assembly problems before fabrication rather than finding them during integration.",
        "Quick FEA passes and OpenRocket trade studies helped narrow concepts before the team committed time and material.",
      ],
      validationTesting: [
        "I supported propulsion and recovery validation with instrumentation and data collection tied back to design assumptions.",
        "Trade studies on stability margin, drag, and mass distribution informed structural decisions before fabrication.",
      ],
      resultsImpact: [
        "The work improved how I make structural decisions in the context of the whole system instead of optimizing one part in isolation.",
        "It also built stronger habits around pre-fabrication checks, assembly realism, and design-for-test thinking.",
      ],
      nextSteps: [
        "Tighten correlation between structural assumptions and pre-test evidence earlier in the design cycle.",
      ],
    },
  ],
  experienceSection: {
    eyebrow: "Experience",
    title: "My experience is strongest where drawings, hardware setup, and execution quality all matter.",
  },
  experience: [
    {
      organization: "UCSD Jacobs Machine Shop",
      role: "Tutor / Assistant",
      period: "2026 - Present",
      description:
        "I help students move from rough part concepts to manufacturable setups on manual mills and lathes. A lot of the work is catching bad assumptions before material gets cut: prints that are technically correct but hard to fixture, tolerance callouts that do not match the process, or setups that will drift once the part is clamped. I also recut failed parts and help diagnose what actually went wrong at the machine.",
      skills: ["Manual mills and lathes", "GD&T interpretation", "Fixturing", "Tolerance troubleshooting"],
    },
    {
      organization: "Joint BioEnergy Institute",
      role: "Engineering Intern",
      period: "2022",
      description:
        "I ran controlled microbial biofuel experiments, kept the logging disciplined, and processed each run to compare yield and repeatability. That work reinforced habits I still use in engineering projects: isolate variables, record conditions clearly, and make conclusions traceable to the data.",
      skills: ["Experiment design", "Run logging", "Repeatability analysis", "Technical reporting"],
    },
    {
      organization: "iLAB BioTech Partners",
      role: "Software Engineering Intern",
      period: "2022 - 2023",
      description:
        "I wrote Python scripts for large bioinformatics datasets and built cleaner analysis pipelines around messy inputs. The useful transfer from that role was reproducibility: clear steps, stable outputs, and enough checking that downstream work was not built on bad assumptions.",
      skills: ["Python scripting", "Data pipelines", "Data cleaning", "Reproducible workflows"],
    },
  ],
  skillsSection: {
    eyebrow: "Technical Skills",
    title: "These are the tools and workflows I use most across design, robotics, and validation work.",
  },
  skills: [
    {
      title: "Design and Manufacturing",
      iconKey: "design",
      items: ["SolidWorks", "CAD modeling", "Tolerance analysis", "Manual mills and lathes", "Fixturing", "3D-printed hardware"],
    },
    {
      title: "Programming and Controls",
      iconKey: "programming",
      items: ["Python", "ROS2", "LiDAR processing", "PID tuning", "Centroid control", "Embedded bring-up"],
    },
    {
      title: "Validation and Systems Work",
      iconKey: "tools",
      items: ["Field testing", "System identification", "Data logging", "Trade studies", "Instrumentation", "Integration debugging"],
    },
  ],
  leadershipSection: {
    eyebrow: "Leadership",
    title: "I apply the same constraint-first thinking to operations as I do to engineering.",
  },
  leadership: {
    organization: "Tau Kappa Epsilon - UCSD Chapter",
    role: "Treasurer",
    period: "2025 - 2026",
    description:
      "I managed a chapter budget above $75K and kept spending, forecasting, and reporting visible enough that tradeoffs were explicit before they became problems. The useful overlap with engineering is the same one I value in projects: make constraints obvious, track the system state, and fix drift early.",
    responsibilities: [
      "Managed a $75K+ annual budget",
      "Ran allocation planning and reporting",
      "Improved visibility into spending and forecasting",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "If you are hiring for robotics or hardware work, I would like to talk.",
    subtitle: "Email is the fastest way to reach me for internship opportunities, project discussions, or direct technical conversations.",
    email: "mgreenan@ucsd.edu",
    phone: "(510) 640-9217",
    linkedin: "linkedin.com/in/marcus-greenan-944972243",
    linkedinHref: "https://www.linkedin.com/in/marcus-greenan-944972243/",
    location: "La Jolla, CA",
  },
};

export const projectsBySlug = Object.fromEntries(portfolioCopy.projects.map((project) => [project.slug, project]));
