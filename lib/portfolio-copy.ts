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
  type?: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  poster?: string;
  imageClassName?: string;
};

export type ProjectCaseStudy = {
  anchorLabel: string;
  snapshot: { label: string; value: string; note?: string }[];
  overviewFigure?: ProjectMedia;
  responsibilities?: { title: string; body: string }[];
  noseCone?: {
    title: string;
    paragraphs: string[];
    specs: { label: string; value: string }[];
    takeaway: string;
  };
  architecture?: {
    title: string;
    intro?: string;
    systems: { title: string; items: string[] }[];
    note?: string;
  };
  avionics?: {
    title: string;
    paragraphs: string[];
    figure: ProjectMedia;
  };
  tradeoffs?: { title: string; body: string }[];
  openRocket?: {
    title: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
    figures: ProjectMedia[];
  };
  flow?: {
    title: string;
    paragraphs: string[];
    figure: ProjectMedia;
  };
  structural?: {
    title: string;
    paragraphs: string[];
    loadCase: string;
    figures: ProjectMedia[];
  };
  process?: { title: string; body: string }[];
  lessons?: {
    title: string;
    paragraphs: string[];
  };
  finalSummary?: {
    heading: string;
    text: string;
  };
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
  caseStudy?: ProjectCaseStudy;
  reportHref?: string;
  reportLabel?: string;
  featured?: boolean;
  metaTitle?: string;
  metaDescription?: string;
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
    subheading: "Mechanical engineering student building real systems across robotics, aerospace, and hardware-focused engineering roles.",
    intro: [
      "I work on systems that have to run on real hardware: CAD, brackets, wiring, sensing, ROS2 interfaces, and the tuning work that gets a robot from partial subsystems to repeatable behavior.",
      "Most of my work sits in controls, fabrication, and systems integration, especially when packaging, power, sensing, and field testing all have to work together on the same build.",
    ],
    highlights: [
      { value: "Mechanical Engineering Internships", label: "Target roles" },
      { value: "ROS2 + CAD + Fabrication", label: "Systems stack" },
      { value: "UC San Diego", label: "Mechanical Engineering" },
      { value: "GPA 3.61", label: "Provost Honors" },
      { value: "Expected June 2027", label: "Graduation timeline" },
    ],
    snapshot: {
      heading: "Engineering Snapshot",
      focus: "Systems, controls, and hardware integration",
      areas: "Mobile robotics, machine shop work, manipulator packaging, and test-driven iteration",
      target: "Mechanical engineering roles across robotics, aerospace, biotech, defense, and advanced manufacturing",
    },
  },
  about: {
    eyebrow: "Profile",
    title: "I build systems and keep working on them until the mechanical layout, sensing, and control behavior make sense on real hardware.",
    paragraphs: [
      "I am a mechanical engineering student at UC San Diego specializing in robotics and controls. I work best on projects where the mechanical, electrical, and software pieces all affect each other and someone has to make the whole system behave.",
      "That usually means moving between CAD, machined or printed parts, sensor placement, control interfaces, and repeated bench or field tests. I care about whether the package is serviceable, whether the sensing geometry matches the control logic, and whether the system still works once power, bandwidth, and access constraints become real.",
      "I am targeting mechanical engineering roles where hands-on integration matters: robotics systems, aerospace hardware, biotech equipment, defense systems, and advanced manufacturing.",
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
    subtitle: "MAE 148 is first because it is the clearest example of real hardware integration, while the rest show how I handle controls, structures, data, and validation from different angles.",
    galleryStats: [
      { value: "1", label: "Flagship mobile robotics system" },
      { value: "4", label: "Core engineering case studies" },
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
          type: "video",
          src: "/videos/mae148-robot-demo.mp4",
          alt: "MAE 148 autonomous trash collection robot hardware test video",
          caption: "Hardware test footage from the MAE 148 autonomous trash collection robot, showing the integrated mobile base, sensor stack, and arm package.",
          width: 854,
          height: 480,
        },
        {
          src: "/images/mae148-finished-robot.jpg",
          alt: "Finished MAE 148 autonomous trash collection robot with camera, arm, and electronics integrated on the vehicle",
          caption: "Finished vehicle package with the OAK-D Lite camera, onboard electronics, and SO101 arm integrated onto the mobile base.",
          width: 918,
          height: 1056,
        },
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
      slug: "robot-navigation-command-classification",
      title: "Robot Navigation Command Classification",
      subtitle: "Supervised machine learning study classifying wall-following robot commands from ultrasonic sensor readings",
      organization: "Machine Learning Coursework",
      role: "Student Research Project",
      period: "2026",
      hero: "from-slate-950 via-zinc-900 to-cyan-800",
      image: "/images/ml-robot-poster-preview.png",
      imageAlt: "Final poster for the robot navigation command classification machine learning project",
      iconKey: "autonomy",
      tools: ["Python", "scikit-learn", "SVM", "MLP neural network", "GridSearchCV", "Confusion matrices"],
      gallery: [
        { label: "Dataset", value: "UCI Wall-Following Robot Navigation Data Set" },
        { label: "Best Model", value: "MLP neural network, 94.0% test accuracy" },
        { label: "Evaluation", value: "Held-out test set, macro F1, confusion-matrix error analysis" },
      ],
      overview:
        "I built an offline supervised learning pipeline that classified pre-labeled robot wall-following commands from ultrasonic sensor snapshots. The useful part was treating it like an engineering validation problem: build a baseline, compare model families, keep preprocessing inside the training folds, and explain where the classifier still confused commands.",
      engineeringChallenges: [
        "The target labels came from robot navigation commands, but the data were static ultrasonic snapshots, so I had to avoid claiming this was deployed robot control.",
        "Class imbalance made accuracy alone too thin, especially with a majority-class baseline that could look acceptable while failing minority commands.",
        "The sensor-ablation results were not as simple as more channels being better, so the interpretation had to stay tied to the data instead of forcing a neat story.",
      ],
      designApproach: [
        "I built the pipeline around scikit-learn models, including a dummy majority baseline, logistic regression, linear SVM, RBF-kernel SVM, and an MLP neural network.",
        "I used stratified 5-fold GridSearchCV with macro F1 so model selection paid attention to every command class, not just the largest labels.",
        "Preprocessing used Pipeline objects so scaling was fit only inside training folds, which kept the validation setup cleaner.",
      ],
      validationTesting: [
        "I evaluated the final models on a held-out stratified test set and compared accuracy, precision, recall, macro F1, and confusion matrices.",
        "The MLP neural network reached 94.0% test accuracy and 0.934 macro F1, while the best class-report RBF SVM reached 92.9% test accuracy and 0.925 macro F1.",
        "The largest confusion I found was Move-Forward predicted as Sharp-Right-Turn on 16 test samples, which gave me a concrete failure mode to discuss.",
      ],
      resultsImpact: [
        "The project connected machine learning back to robotics in a grounded way: sensor readings, command labels, model comparison, and error analysis.",
        "It also gave me practice presenting model results with the right boundaries, especially around what an offline classifier can and cannot prove about a real robot.",
      ],
      nextSteps: [
        "Test temporal models that include recent sensor history instead of single snapshots.",
        "Evaluate calibrated probabilities and only consider deployment after robot-in-the-loop validation.",
      ],
      detailSections: [
        {
          title: "Overview",
          paragraphs: [
            "This was a machine learning class project using the UCI Wall-Following Robot Navigation Data Set. I worked with ultrasonic sensor readings from a SCITOS G5 robot and trained classifiers to predict pre-labeled wall-following commands.",
            "I kept the project framed as offline supervised classification. That matters because the model is learning from labeled snapshots, not controlling a robot in the loop.",
          ],
        },
        {
          title: "Modeling Setup",
          paragraphs: [
            "The main experiment used 5,456 samples with 24 ultrasonic sensor features and four command labels: Move-Forward, Slight-Right-Turn, Sharp-Right-Turn, and Slight-Left-Turn.",
            "I compared a dummy majority baseline, logistic regression, linear SVM, RBF-kernel SVM, and an MLP neural network. Hyperparameters were selected with stratified 5-fold GridSearchCV using macro F1.",
          ],
          bullets: [
            "Used scikit-learn Pipeline objects so scaling stayed inside training folds.",
            "Reported held-out test metrics instead of only training or cross-validation scores.",
            "Used macro F1 to keep minority command classes visible in the evaluation.",
          ],
        },
        {
          title: "Results",
          paragraphs: [
            "The MLP neural network was the strongest portfolio model, reaching 94.0% test accuracy and 0.934 macro F1 on the held-out test set. The best class-report model was the RBF SVM, with 92.9% test accuracy and 0.925 macro F1.",
            "The model comparison was useful because the linear models lagged behind the nonlinear models, while the dummy baseline showed why accuracy alone was not enough for this dataset.",
          ],
        },
        {
          title: "Error Analysis",
          paragraphs: [
            "I used confusion matrices to look at the actual failure modes instead of stopping at one score. The largest off-diagonal error was Move-Forward predicted as Sharp-Right-Turn on 16 test samples.",
            "That kind of mistake is important in a robotics context because adjacent command errors are not just abstract labels. They would need robot-in-the-loop testing before any classifier was trusted for control.",
          ],
        },
        {
          title: "Sensor Ablation",
          paragraphs: [
            "I also compared official reduced-sensor versions of the dataset. The reduced-sensor results did not support a simple claim that more raw sensor channels always improved classification.",
            "That was a good reminder to keep model interpretation tied to the split, the dataset version, and the experimental setup instead of turning one result into a general rule.",
          ],
        },
      ],
      media: [
        {
          src: "/images/ml-robot-model-comparison.png",
          alt: "Macro F1 comparison across robot navigation command classifiers",
          caption: "Macro F1 comparison across baseline, linear, kernel, and neural network classifiers.",
          width: 1800,
          height: 990,
        },
        {
          src: "/images/ml-robot-confusion-matrix.png",
          alt: "Confusion matrix for the best robot navigation command classifier",
          caption: "Confusion matrix used to inspect command-level failure modes on the held-out test set.",
          width: 1260,
          height: 1080,
        },
        {
          src: "/images/ml-robot-sensor-ablation.png",
          alt: "Sensor ablation comparison for robot navigation command classification",
          caption: "Sensor ablation comparison across 24-sensor, 4-sensor, and 2-sensor dataset versions.",
          width: 1800,
          height: 990,
        },
      ],
      reportHref: "/documents/robot-navigation-ml-report.pdf",
      reportLabel: "View ML Report",
    },
    {
      slug: "rocket-propulsion-lab-daedalus",
      title: "Rocket Propulsion Lab – Project Daedalus",
      subtitle: "Structural design and simulation for a student rocket targeting a simulated 4,000-foot apogee",
      organization: "UCSD Rocket Propulsion Lab",
      role: "Structures Lead",
      period: "10/2024 - 6/2025",
      hero: "from-slate-950 via-slate-800 to-orange-700",
      image: "/rocket-diagram.svg",
      imageAlt: "Rocket technical diagram representing the Project Daedalus case study",
      iconKey: "rocket",
      tools: ["SolidWorks", "OpenRocket", "FEA", "3D Printing", "Tolerance Analysis", "Aerospace Structures"],
      gallery: [
        { label: "Simulated Apogee", value: "Approx. 4,086 ft" },
        { label: "Simulated Stability", value: "1.23 calibers" },
        { label: "Modeled Mass", value: "0.471 kg" },
      ],
      overview:
        "I led structural design work for Project Daedalus, including CAD development, component interfaces, manufacturing constraints, tolerance checks, and early simulation. I also worked with the avionics and propulsion teams to keep the rocket mechanically integrated as the design changed.",
      engineeringChallenges: [
        "The rocket had to approach a simulated 4,000-foot apogee while staying stable, manufacturable, and recoverable.",
        "Structural changes affected total mass, center of gravity, center of pressure, drag, assembly behavior, and recovery packaging.",
        "The nose-cone interface needed enough retention for handling and ascent without preventing deployment near modeled apogee.",
      ],
      designApproach: [
        "I developed structural CAD around the body tube, fin assembly, nose cone, avionics bay, motor region, and recovery hardware interfaces.",
        "I used OpenRocket as a design guide to compare geometry, component placement, mass distribution, and predicted stability before fabrication decisions.",
        "I checked manufacturing limits, clearances, friction-fit behavior, and printed-part geometry before the team committed material and time.",
      ],
      validationTesting: [
        "I used preliminary FEA as an early design check, not as formal structural qualification.",
        "OpenRocket predictions guided the design, but I did not treat simulated apogee, velocity, or acceleration as measured flight data.",
        "I supported fabrication planning, assembly decisions, and team testing activities tied to structural and subsystem interfaces.",
      ],
      resultsImpact: [
        "The project changed how I make structural decisions because every part had to be checked against assembly, mass distribution, recovery motion, and neighboring subsystems.",
        "My strongest contribution was keeping structural work connected to CAD, simulation, manufacturing limits, and subsystem communication.",
      ],
      nextSteps: [
        "Tighten the connection between simulated assumptions, physical fit checks, and documented test evidence earlier in the design cycle.",
      ],
      metaTitle: "Rocket Propulsion Lab – Project Daedalus | Marcus Greenan",
      metaDescription:
        "Structural design, OpenRocket simulation, preliminary FEA, manufacturing, and subsystem-integration work for a UC San Diego student rocket targeting a simulated 4,000-foot apogee.",
      reportHref: "/documents/rpl-daedalus-technical-report.pdf",
      reportLabel: "View Technical Report",
      caseStudy: {
        anchorLabel: "Explore the Engineering",
        snapshot: [
          { label: "Vehicle length", value: "25 in" },
          { label: "Max diameter", value: "1.5 in" },
          { label: "Modeled mass", value: "1.038 lb / 0.471 kg" },
          { label: "Simulated stability", value: "1.23 calibers" },
          { label: "Simulated apogee", value: "Approx. 4,086 ft / 1,245 m" },
          { label: "Simulated peak velocity", value: "791 ft/s / 241 m/s" },
          { label: "Simulated peak acceleration", value: "675 ft/s² / 205.74 m/s²" },
          { label: "Selected motor", value: "AeroTech G80T" },
          { label: "Simulated time to apogee", value: "Approx. 14 s" },
        ],
        overviewFigure: {
          src: "/projects/rpl-daedalus/openrocket-vehicle-model.png",
          alt: "OpenRocket model of the Project Daedalus student rocket showing vehicle geometry and component placement",
          caption: "OpenRocket model used to evaluate vehicle geometry, component placement, mass distribution, and predicted stability.",
          width: 1408,
          height: 334,
          imageClassName: "object-contain bg-white",
        },
        responsibilities: [
          {
            title: "Structural CAD",
            body: "I developed structural CAD for the rocket and reviewed how the nose cone, body tube, fin assembly, avionics bay, motor region, and recovery hardware fit together.",
          },
          {
            title: "Nose-Cone Design",
            body: "I worked on the nose-cone geometry and its interface with the body tube. The part needed to support the aerodynamic profile, fit the available 3D printer, maintain adequate stiffness, and separate during parachute deployment.",
          },
          {
            title: "Manufacturing and Tolerances",
            body: "I considered printer limits, material selection, wall geometry, infill, component clearances, and friction-fit behavior before fabrication. Small dimensional errors could prevent assembly or interfere with recovery deployment.",
          },
          {
            title: "Subsystem Integration",
            body: "I worked with teammates responsible for avionics and propulsion to understand packaging, mounting, access, and wiring requirements. That communication helped keep mechanical changes from creating problems for another subsystem.",
          },
        ],
        noseCone: {
          title: "Designing the Nose Cone as More Than an Aerodynamic Surface",
          paragraphs: [
            "The nose cone had several jobs at once. It defined the leading aerodynamic geometry, added structural mass near the front of the vehicle, connected to the body tube, and separated as part of the recovery sequence.",
            "The Von Kármán profile gave the team a practical aerodynamic shape for the available length and diameter. The design also had to fit within the available printer volume and avoid geometry that created unnecessary printing difficulty.",
            "Using a high infill increased rigidity, but it also increased forward mass. That mass affected the vehicle's center of gravity, which meant the nose-cone design had to be evaluated in the context of the complete OpenRocket model.",
            "The shoulder used a friction-fit connection with the body tube. The fit needed to remain secure during handling and ascent while still allowing the recovery system to separate the nose cone near apogee.",
          ],
          specs: [
            { label: "Length", value: "6 in" },
            { label: "Maximum diameter", value: "1.5 in" },
            { label: "Fineness ratio", value: "4.0" },
            { label: "Profile", value: "Haack Series, Von Kármán, C = 0" },
            { label: "Material", value: "PLA" },
            { label: "Infill", value: "100%" },
            { label: "Manufacturing", value: "In-house 3D printing" },
            { label: "Shoulder outer diameter", value: "1.4 in" },
            { label: "Shoulder inner diameter", value: "1.3 in" },
            { label: "Shoulder height", value: "0.5 in" },
          ],
          takeaway:
            "The nose cone was simultaneously an aerodynamic component, a printed structural part, a mass-distribution input, and a recovery-system interface.",
        },
        architecture: {
          title: "Vehicle Architecture",
          intro:
            "The complete vehicle mattered because each subsystem created structural interfaces. I did not own every subsystem, but their packaging and load paths affected the mechanical design.",
          systems: [
            {
              title: "Body Structure",
              items: [
                "25-inch total vehicle length",
                "1.5-inch maximum diameter",
                "Approximately 19-inch body tube",
                "Approximately 1.4-inch inner diameter",
                "Engine block separating the motor and avionics regions",
              ],
            },
            {
              title: "Fin Assembly",
              items: [
                "Four fins",
                "Approximately 1.7-inch root chord",
                "Approximately 1.02-inch fin height",
                "Airfoil-style cross section",
                "Integrated with a printed fin-can or sleeve structure",
              ],
            },
            {
              title: "Recovery",
              items: [
                "24-inch ripstop nylon parachute",
                "Nose-cone deployment",
                "Approximately 10.5 ft/s predicted ground-contact velocity",
                "Deployment near simulated apogee",
              ],
            },
            {
              title: "Propulsion",
              items: [
                "AeroTech G80T motor",
                "133 N·s total impulse",
                "Approximately 78 N average thrust",
                "Approximately 1.71-second burn duration",
              ],
            },
            {
              title: "Avionics",
              items: [
                "Arduino Pro Mini",
                "BMP280 pressure sensor",
                "MPU6050 inertial sensor",
                "SD-card data logging",
                "7.4 V LiPo battery",
              ],
            },
          ],
          note:
            "The propulsion, recovery, and avionics systems are included to show the interfaces and constraints that affected my structural work. They were collaborative team systems rather than solely my individual designs.",
        },
        avionics: {
          title: "Designing Around the Avionics Package",
          paragraphs: [
            "The avionics package affected the mechanical design even though my primary role was structural. The Arduino, pressure sensor, inertial sensor, SD-card module, battery, wiring, and mounting hardware all had to fit within the available internal diameter.",
            "Mechanical design decisions had to preserve enough room for wiring, sensor placement, assembly, and removal. I regularly communicated with the electrical team to understand what space they needed and where mechanical access mattered.",
          ],
          figure: {
            src: "/projects/rpl-daedalus/avionics-layout.png",
            alt: "Arduino-based avionics layout with pressure, inertial, and data-logging components",
            caption: "Early avionics circuit and sensor architecture used to define packaging and mechanical-interface requirements.",
            width: 1288,
            height: 898,
            imageClassName: "object-contain bg-zinc-950",
          },
        },
        tradeoffs: [
          {
            title: "Aerodynamics versus Manufacturability",
            body: "The external geometry influenced drag, but the part still had to fit the available printer, print reliably, and connect to the body tube without excessive post-processing.",
          },
          {
            title: "Stiffness versus Mass",
            body: "Increasing material, infill, or thickness improved rigidity but also changed total vehicle mass and shifted the center of gravity.",
          },
          {
            title: "Retention versus Deployment",
            body: "The nose-cone interface needed enough friction to remain assembled before deployment without preventing the recovery system from separating it.",
          },
          {
            title: "Packaging versus Stability",
            body: "Moving the motor, avionics, battery, recovery hardware, or printed components changed the mass distribution. Packaging choices therefore affected both mechanical integration and aerodynamic stability.",
          },
        ],
        openRocket: {
          title: "Predicting Vehicle Performance in OpenRocket",
          paragraphs: [
            "OpenRocket allowed the team to see how structural changes affected the complete flight model. A change that improved one component could also shift the center of gravity, change stability, add drag, or reduce predicted altitude.",
            "I used these results as design guidance rather than treating the simulation as a substitute for physical validation. The model helped identify weak concepts and compare alternatives before fabrication.",
          ],
          highlights: [
            { label: "Simulated apogee", value: "Approx. 4,086 ft" },
            { label: "Simulated stability", value: "1.23 calibers" },
            { label: "Simulated time to apogee", value: "Approx. 14.1 s" },
          ],
          figures: [
            {
              src: "/projects/rpl-daedalus/openrocket-vehicle-model.png",
              alt: "OpenRocket model of the Project Daedalus student rocket showing vehicle geometry and component placement",
              caption: "OpenRocket vehicle model showing component placement and the modeled center of gravity and center of pressure.",
              width: 1408,
              height: 334,
              imageClassName: "object-contain bg-white",
            },
            {
              src: "/projects/rpl-daedalus/openrocket-flight-simulation.png",
              alt: "OpenRocket graph of simulated altitude, vertical velocity, and vertical acceleration over time",
              caption: "OpenRocket prediction of altitude, vertical velocity, and vertical acceleration over the modeled flight.",
              width: 1276,
              height: 794,
              imageClassName: "object-contain bg-white",
            },
          ],
        },
        flow: {
          title: "Qualitative Flow and Pressure Review",
          paragraphs: [
            "The flow simulation gave the team an early qualitative view of the pressure field and flow paths around the rocket geometry. It helped us identify areas of the vehicle worth examining and communicate how the external geometry interacted with the surrounding flow.",
            "I treat this as an exploratory design study, not validated computational fluid dynamics. The project records I have do not document enough about the mesh, boundary conditions, turbulence model, convergence, or experimental correlation to claim more than that.",
          ],
          figure: {
            src: "/projects/rpl-daedalus/flow-simulation.png",
            alt: "Qualitative flow and pressure visualization surrounding the rocket geometry",
            caption:
              "Qualitative flow and pressure visualization around the rocket geometry. Cooler colors indicate lower displayed pressure and warmer colors indicate higher displayed pressure.",
            width: 258,
            height: 886,
            imageClassName: "object-contain bg-white",
          },
        },
        structural: {
          title: "Preliminary Structural Simulation Review",
          paragraphs: [
            "The structural simulations were used as preliminary design checks rather than formal qualification. They provided a way to inspect where deformation, strain, and stress concentrated under the modeled load before the team committed to fabrication.",
            "The documented loading case applied approximately 39.25 lb to the modeled structure. The visual results helped the team review the body and fin region for concerning behavior and identify geometry that deserved closer attention.",
          ],
          loadCase: "Documented modeled load: approximately 39.25 lb",
          figures: [
            {
              src: "/projects/rpl-daedalus/pressure-stress.png",
              alt: "Von Mises stress plot of the rocket body and fin assembly",
              caption: "Von Mises stress visualization used as an early structural design check.",
              width: 502,
              height: 680,
              imageClassName: "object-contain bg-white",
            },
          ],
        },
        process: [
          {
            title: "Requirements",
            body: "Defined the approximate altitude target, vehicle envelope, stability needs, recovery approach, motor constraints, and manufacturing limits.",
          },
          {
            title: "Concept Development",
            body: "Created and reviewed early CAD for the nose cone, body structure, fins, avionics bay, and subsystem interfaces.",
          },
          {
            title: "Simulation",
            body: "Used OpenRocket and preliminary structural studies to review stability, predicted performance, and structural behavior.",
          },
          {
            title: "Integration",
            body: "Coordinated with propulsion and avionics teammates as their packaging and hardware requirements developed.",
          },
          {
            title: "Refinement",
            body: "Adjusted geometry, fit, material use, and component placement based on integration and manufacturing constraints.",
          },
          {
            title: "Fabrication and Testing Support",
            body: "Supported fabrication planning, physical assembly, and team testing activities.",
          },
        ],
        lessons: {
          title: "What I Learned",
          paragraphs: [
            "This project changed how I think about mechanical design. A part can look correct in isolation and still cause problems when tolerances, manufacturing limits, wiring, mass distribution, recovery motion, and neighboring subsystems become real.",
            "I learned to check interfaces earlier, use simulation to eliminate weak concepts before fabrication, and evaluate structural decisions in the context of the complete vehicle.",
            "Working with teammates focused on avionics and propulsion also improved how I communicate across disciplines. I needed enough understanding of their systems to design around packaging, access, wiring, mounting, and deployment requirements.",
          ],
        },
        finalSummary: {
          heading: "Core Engineering Takeaway",
          text:
            "Project Daedalus taught me to connect CAD, simulation, manufacturing, and subsystem communication. My strongest contribution was not a single isolated component. It was making structural decisions while accounting for how the complete rocket needed to assemble, remain stable, package its hardware, and support recovery.",
        },
      },
    },
  ],
  experienceSection: {
    eyebrow: "Experience",
    title: "My experience is strongest where drawings, hardware setup, integration, and execution quality all matter.",
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
    title: "Open to mechanical engineering roles focused on hardware, systems, and real-world implementation.",
    subtitle: "Email is the fastest way to reach me for internship opportunities, project discussions, or direct technical conversations across robotics, aerospace, biotech, and related hardware work.",
    email: "mgreenan@ucsd.edu",
    phone: "(510) 640-9217",
    linkedin: "linkedin.com/in/marcus-greenan-944972243",
    linkedinHref: "https://www.linkedin.com/in/marcus-greenan-944972243/",
    location: "La Jolla, CA",
  },
};

export const projectsBySlug = Object.fromEntries(portfolioCopy.projects.map((project) => [project.slug, project]));
