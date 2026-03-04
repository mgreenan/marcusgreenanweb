import { Calculator, Drill, Wrench } from "lucide-react";

export const resumeFile = "/Marcus_Greenan_Resume.pdf";

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export type ProjectRecord = {
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
  overview: string;
  engineeringChallenges: string[];
  designApproach: string[];
  validationTesting: string[];
  resultsImpact: string[];
  nextSteps: string[];
  gallery: { label: string; value: string }[];
};

export const projectRecords: ProjectRecord[] = [
  {
    slug: "rocket-propulsion-lab-daedalus",
    title: "Rocket Propulsion Lab – Daedalus",
    subtitle: "Student-built rocket structures, aerodynamic trades, and test instrumentation",
    organization: "UCSD Rocket Propulsion Lab",
    role: "Structures Lead",
    period: "10/2024 – 6/2025",
    hero: "from-slate-950 via-slate-800 to-orange-700",
    image: "/rocket-diagram.svg",
    iconKey: "rocket",
    tools: ["SolidWorks", "OpenRocket", "CAD Modeling", "Structural Analysis", "Experimental Testing"],
    overview:
      "Worked within UCSD Rocket Propulsion Lab to design and validate structural components for a student-built rocket targeting a 4,000-ft apogee. The work combined structural design, aerodynamic trade studies, and integrated validation across propulsion and recovery interfaces.",
    engineeringChallenges: [
      "Balancing structural rigidity with weight constraints so the vehicle remained robust without driving unnecessary mass growth.",
      "Maintaining a stable aerodynamic configuration while accounting for drag, stability margin, and mass distribution shifts.",
      "Integrating structural components cleanly with propulsion and recovery systems without creating assembly or test bottlenecks.",
    ],
    designApproach: [
      "Designed load-bearing rocket structures using CAD modeling, interface definition, and tolerance analysis.",
      "Performed basic FEA in SolidWorks to check stress behavior and identify weak points before fabrication.",
      "Ran OpenRocket trade studies to compare stability margins, drag coefficients, and center-of-mass sensitivity across configurations.",
    ],
    validationTesting: [
      "Supported propulsion and recovery validation with structured instrumentation and data collection during subsystem testing.",
      "Compared predicted aerodynamic behavior against measured configuration changes to guide iteration before integration.",
      "Reviewed part interfaces and manufacturability constraints to reduce misalignment risk during assembly.",
    ],
    resultsImpact: [
      "Established a more defensible structural design process linking CAD, FEA, and aerodynamic analysis.",
      "Improved confidence in the rocket's structural configuration before full-system integration.",
      "Contributed to a design workflow that treated structures, propulsion, and recovery as coupled engineering problems rather than isolated subsystems.",
    ],
    nextSteps: [
      "Expand structural validation with higher-fidelity load cases and additional test correlation.",
      "Refine mass accounting and interface tolerance stack-ups earlier in the design cycle.",
      "Add more automated instrumentation review to improve the feedback loop between test data and design updates.",
    ],
    gallery: [
      { label: "Target", value: "4,000-ft apogee" },
      { label: "Focus", value: "Structures, aero stability, integration" },
      { label: "Methods", value: "CAD, FEA, OpenRocket, testing" },
    ],
  },
  {
    slug: "multi-agent-robotics-coverage",
    title: "Multi-Agent Robotics Coverage",
    subtitle: "Distributed control, ROS integration, and experimental coverage efficiency",
    organization: "UCSD Multi-Agent Robotics Lab",
    role: "Undergraduate Researcher",
    period: "10/2025 – Present",
    hero: "from-slate-950 via-cyan-950 to-blue-700",
    image: "/robotics-diagram.svg",
    iconKey: "robotics",
    tools: ["Python", "ROS", "Multi-agent Algorithms", "Experimental Robotics Platforms"],
    sponsors: [
      "National Science Foundation",
      "AFOSR",
      "Naval Research Laboratory",
      "Northrop Grumman",
    ],
    overview:
      "Research project in UCSD Multi-Agent Robotics Lab focusing on distributed robotic coverage using Voronoi-based algorithms. The work connects theory, control, localization, and experimental performance on real robotic platforms.",
    engineeringChallenges: [
      "Making distributed coverage logic converge reliably when localization, mapping quality, and communication imperfections affect robot behavior.",
      "Integrating control laws with ROS feedback loops so theoretical updates remain stable on physical hardware.",
      "Measuring coverage efficiency and convergence with enough experimental discipline to support real research conclusions.",
    ],
    designApproach: [
      "Developed Voronoi-based coverage and centroid control algorithms for distributed workspace allocation.",
      "Integrated localization, mapping, and ROS feedback control to support repeatable robot operation.",
      "Implemented multi-agent coordination logic and evaluated convergence behavior and coverage efficiency.",
    ],
    validationTesting: [
      "Performed system identification and controller tuning using experimental data logging.",
      "Observed closed-loop behavior on multi-agent robotic platforms rather than relying only on simulation.",
      "Tracked convergence quality and controller response to refine gains and coordination behavior.",
    ],
    resultsImpact: [
      "Built a stronger bridge between distributed robotics theory and experimentally validated system behavior.",
      "Improved controller tuning and measurement discipline for multi-agent coverage experiments.",
      "Contributed research infrastructure relevant to autonomy, control, and robotics experimentation.",
    ],
    nextSteps: [
      "Expand testing across larger workspaces and more diverse multi-robot scenarios.",
      "Refine robustness against localization error and dynamic disturbances.",
      "Compare coverage performance across alternative coordination and feedback strategies.",
    ],
    gallery: [
      { label: "Domain", value: "Distributed robotics" },
      { label: "Core Method", value: "Voronoi coverage + centroid control" },
      { label: "Stack", value: "Python, ROS, data logging" },
    ],
  },
  {
    slug: "mae-148-autonomous-trash-can-retrieval-robot",
    title: "MAE 148 – Autonomous Trash Can Retrieval Robot",
    subtitle: "Mechanical subsystem leadership for a field-tested autonomous robotics platform",
    organization: "UCSD MAE 148",
    role: "Mechanical Lead",
    period: "1/2026 – Present",
    hero: "from-slate-950 via-emerald-950 to-sky-700",
    image: "/autonomy-diagram.svg",
    iconKey: "autonomy",
    tools: ["SolidWorks", "ROS", "GPS Navigation", "PID Control", "Mechanical Fabrication"],
    overview:
      "Led mechanical subsystem design within a six-member interdisciplinary robotics team building an autonomous trash can retrieval system. The project required mechanical design, actuator integration, navigation coordination, and iterative field debugging.",
    engineeringChallenges: [
      "Designing a custom 5-axis robotic arm that remained rigid enough for repeatable motion while staying manufacturable and serviceable.",
      "Integrating mechanical systems with GPS path tracking, PID loops, and the ROS navigation stack without creating unstable cross-coupling.",
      "Tuning drivetrain geometry and steering response so the robot could track paths reliably during outdoor field tests.",
    ],
    designApproach: [
      "Designed and fabricated a custom 5-axis robotic arm with attention to kinematic layout, actuation control, and structural stiffness.",
      "Integrated mechanical systems with GPS path tracking, PID control loops, and ROS-based navigation.",
      "Iterated drivetrain geometry and steering configuration based on field-test observations instead of freezing the design early.",
    ],
    validationTesting: [
      "Used iterative field testing to measure steering response and path tracking error.",
      "Improved tracking accuracy through integrated system testing and controller tuning.",
      "Validated subsystem interactions by observing how mechanical changes affected navigation and closed-loop control.",
    ],
    resultsImpact: [
      "Created a more robust mechanical foundation for the autonomous retrieval platform.",
      "Improved field tracking behavior through repeated mechanical and controls iteration.",
      "Demonstrated the ability to lead mechanical execution inside a multidisciplinary autonomy project.",
    ],
    nextSteps: [
      "Further refine arm dynamics and end-effector behavior for more reliable retrieval.",
      "Increase path tracking consistency through tighter actuator characterization and tuning.",
      "Package the platform more cleanly for repeatable deployment and maintenance.",
    ],
    gallery: [
      { label: "Team", value: "6-member interdisciplinary robotics team" },
      { label: "Subsystem", value: "5-axis arm + mobile platform" },
      { label: "Testing", value: "Outdoor iteration and control tuning" },
    ],
  },
];

export const projectsBySlug = Object.fromEntries(projectRecords.map((project) => [project.slug, project]));

export const portfolioData = {
  name: "Marcus Greenan",
  title: "Mechanical Engineering Student – Robotics & Controls",
  email: "mgreenan@ucsd.edu",
  phone: "(510) 640-9217",
  location: "La Jolla, California",
  linkedin: "linkedin.com/in/marcus-greenan",
  linkedinHref: "https://linkedin.com/in/marcus-greenan",
  gpa: "3.57",
  introduction:
    "Mechanical engineering student at UC San Diego specializing in robotics and controls with hands-on experience in aerospace structures, multi-agent robotics systems, and precision manufacturing. Passionate about aerospace and autonomous systems with strong foundations in CAD, FEA, dynamics, control systems, and experimental validation.",
  highlights: [
    { value: "GPA 3.57", label: "Quantitative engineering foundation" },
    { value: "UC San Diego", label: "Mechanical Engineering, Robotics & Controls" },
    { value: "Robotics Researcher", label: "Distributed robotics and ROS-based experimentation" },
    { value: "Rocket Structures Lead", label: "Student launch vehicle design and validation" },
    { value: "Machine Shop Manufacturing", label: "Precision machining and fabrication support" },
  ],
  about:
    "Marcus Greenan is a mechanical engineering student at the University of California San Diego specializing in robotics and controls. His experience spans aerospace structures, multi-agent robotic systems, autonomous vehicles, and machine shop manufacturing, with a consistent focus on engineering problems that require both analytical rigor and physical validation.",
  aboutDetail:
    "He is strongest in environments where CAD, controls, dynamics, fabrication, and experimental testing have to work together. Across rocket structures, robotics research, and precision manufacturing, he builds systems by iterating from design assumptions to measured performance instead of stopping at theoretical analysis.",
  education: {
    school: "University of California, San Diego (UCSD)",
    degree: "B.S. Mechanical Engineering",
    specialization: "Specialization in Robotics and Controls",
    honors: "Provost Honors",
    graduation: "Expected Graduation: June 2027",
    coursework: [
      "Fluid Mechanics",
      "Solid Mechanics",
      "Thermodynamics",
      "Dynamics",
      "Control Systems",
      "Materials Science",
    ],
  },
  focusAreas: [
    {
      kicker: "Aerospace Structures",
      title: "Mass-efficient design under load",
      description: "Structural design, tolerance analysis, and basic FEA tied directly to real vehicle integration and test constraints.",
    },
    {
      kicker: "Robotics Systems",
      title: "Sensing, control, and mechanism integration",
      description: "Mechanical design paired with ROS, feedback control, and experimental validation on physical robotic platforms.",
    },
    {
      kicker: "Autonomy",
      title: "Path tracking and distributed coordination",
      description: "Systems thinking across multi-agent coverage, GPS navigation, PID tuning, and performance measurement.",
    },
    {
      kicker: "Manufacturing",
      title: "Precision fabrication and shop execution",
      description: "Manual machining, fixturing awareness, GD&T interpretation, and manufacturability support for student engineering teams.",
    },
  ],
  projectGallery: [
    { value: "3", label: "Major engineering programs highlighted" },
    { value: "2", label: "Robotics and autonomy systems in active development" },
    { value: "1", label: "Rocket structures leadership role completed" },
  ],
  experience: [
    {
      organization: "UCSD Jacobs Machine Shop",
      role: "Tutor / Assistant",
      period: "1/2026 – Present",
      description:
        "Machined aluminum and polymer components maintaining tight tolerances using manual mills and lathes. Interpreted engineering drawings and GD&T specifications, and assisted student teams with manufacturability analysis, fixturing design, and machining corrections.",
      skills: ["Precision machining", "Manufacturing strategy", "GD&T interpretation", "Engineering fabrication"],
    },
    {
      organization: "UCSD Multi-Agent Robotics Lab",
      role: "Undergraduate Researcher",
      period: "10/2025 – Present",
      description:
        "Developing Voronoi-based coverage and centroid control algorithms, integrating ROS feedback control, and tuning multi-agent robotic behavior using experimental data logging.",
      skills: ["ROS integration", "Distributed control", "Data logging", "Controller tuning"],
    },
    {
      organization: "UCSD Rocket Propulsion Lab",
      role: "Structures Lead",
      period: "10/2024 – 6/2025",
      description:
        "Designed load-bearing rocket structures, performed basic FEA, ran aerodynamic trade studies in OpenRocket, and supported propulsion and recovery validation through instrumentation and structured testing.",
      skills: ["Structures", "Basic FEA", "OpenRocket", "Validation testing"],
    },
    {
      organization: "Joint BioEnergy Institute (JBEI)",
      role: "Engineering Intern",
      period: "6/2022 – 9/2022",
      description:
        "Conducted controlled microbial biofuel experiments, analyzed yield, repeatability, and process efficiency, and processed experimental datasets for presentation to research teams.",
      skills: ["Experimental research", "Process analysis", "Data presentation", "Repeatability"],
    },
    {
      organization: "iLAB BioTech Partners",
      role: "Software Engineering Intern",
      period: "6/2022 – 9/2023",
      description:
        "Processed large-scale bioinformatics datasets using Python scripting, performed data cleaning and statistical analysis, and built reproducible workflows and clean data pipelines.",
      skills: ["Python", "Data cleaning", "Statistical analysis", "Reproducible workflows"],
    },
  ],
  skills: [
    {
      title: "Design & Manufacturing",
      icon: Drill,
      items: ["SolidWorks (Basic FEA)", "Fusion 360", "AutoCAD", "CNC Machining", "Manual Mills & Lathes", "3D Printing", "GD&T"],
    },
    {
      title: "Programming & Controls",
      icon: Calculator,
      items: ["MATLAB", "Python", "Linux", "ROS", "PID Tuning", "GPS Path Tracking"],
    },
    {
      title: "Engineering Tools",
      icon: Wrench,
      items: ["OpenRocket", "Experimental Testing", "Data Logging"],
    },
  ],
  leadership: {
    organization: "Tau Kappa Epsilon – UCSD Chapter",
    role: "Treasurer",
    period: "1/2025 – 1/2026",
    description:
      "Managed a $75K+ annual operating budget while overseeing allocation planning, dues collection, and financial reporting. Implemented structured financial tracking that improved transparency and budget forecasting.",
    responsibilities: [
      "Managed $75K+ annual operating budget",
      "Oversaw allocation planning, dues collection, and financial reporting",
      "Implemented structured financial tracking improving transparency and forecasting",
    ],
  },
};
