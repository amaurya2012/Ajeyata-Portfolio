export const profile = {
  name: "Ajeyata Maurya",
  email: "mauryaajeyata@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajeyata-maurya-a53495334",
  github: "https://github.com/amaurya2012",
  roles: [
    "B.Tech CSE-DS Student",
    "Python & AI Developer",
    "Full-Stack Enthusiast",
    "Storyteller at Heart",
  ],
  status: "Building projects, learning web development, growing my portfolio",
  openTo: ["Internships", "Collaboration", "Learning opportunities"],
};

export const about = {
  paragraphs: [
    "Hi, I'm Ajeyata Maurya, a Computer Science and Engineering student specializing in Data Science, with a strong focus on building AI-driven and data-centric applications. My work revolves around turning data and models into usable products — from an AI accreditation agent built with IBM watsonx Orchestrate, to an intelligent nutrition chatbot that delivers personalized insights.",
    "Alongside data science, I also build full-stack applications — including a complete library management system with role-based access and analytics dashboards, and e-commerce platforms using Django — which helps me understand how data-driven features fit into real, end-to-end products.",
    "I enjoy the full cycle of a project: exploring data, building and integrating models, and shipping something functional. I bring consistency, curiosity, and a detail-oriented approach to every project, and I'm constantly working to grow as a data science practitioner while contributing to solutions that create real impact.",
  ],
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    items: ["Python", "Java", "C",],
  },
  {
    label: "Web Development",
    items: ["HTML/CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks",
    items: ["Django", "Flask"],
  },
  {
    label: "Databases",
    items: ["SQL"],
  },
  {
    label: "AI & Tools",
    items: ["IBM watsonx", "VS Code", "Vercel", "Git/GitHub"],
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  linkLabel: string;
  linkUrl: string;
  linkType: "live" | "code";
  image?: string | null;
};

export const projects: Project[] = [
  {
    title: "Nutrition Chatbot",
    tag: "Chatbot",
    description:
      "An intelligent chatbot that delivers personalized nutrition insights, built to make everyday dietary guidance more conversational and accessible.",
    stack: ["Python", "IBM watsonx", "NLP"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/Nutrition-Chatbot",
    linkType: "code",
    image : "/projects/nutrition chatbot.jpeg",
  },
  {
    title: "AURELLE — E-Commerce Funnel Analysis",
    tag: "Data Analytics",
    description:
      "An end-to-end telemetry pipeline for a simulated storefront: a React frontend logs every user action to a Node/Express backend, a traffic simulator generates thousands of sessions, and a Python analytics module produces funnel charts.",
    stack: ["React", "Node/Express", "Python", "A/B Testing"],
    linkLabel: "Live Preview",
    linkUrl: "https://ecommerce-funnel-analysis-pi.vercel.app",
    linkType: "live",
    image : "/projects/aurelle-ecommerce.jpeg",
  },
  {
    title: "FinSight",
    tag: "Fintech & Dashboard Analytics",
    description:
      "A sleek, receipt-aesthetic financial tracking and ledger dashboard system featuring real-time transaction management, persistent local storage, dynamic multi-category expense breakdowns.",
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript", "LocalStorage"],
    linkLabel: "Live Preview",
    linkUrl: "https://finsight-frontend-lac.vercel.app/",
    linkType: "live",
    image : "/projects/finsight.jpeg",
  },
  {
    title: "A's Library",
    tag: "Full-Stack Web App",
    description:
      "A full-stack personal digital library with authentication, role-based access, book uploads, reading-status tracking, and an admin analytics dashboard.",
    stack: ["Next.js", "Supabase", "Recharts"],
    linkLabel: "Live Preview",
    linkUrl: "https://a-s-library.vercel.app",
    linkType: "live",
    image : "/projects/as-library.jpeg",
  },
  {
    title: "Inkhaven",
    tag: "PWA",
    description:
      "A distraction-free, offline-first PWA for novel writing — with chapter management, rich text editing, ambient writing sounds, and export to DOCX/PDF.",
    stack: ["Next.js", "TypeScript", "Dexie.js", "TipTap"],
    linkLabel: "Live Preview",
    linkUrl: "https://inkhaven-orpin.vercel.app",
    linkType: "live",
    image : "/projects/inkhaven.jpeg",
  },
  {
    title: "Currency Converter",
    tag: "Web App",
    description:
      "A real-time currency converter that fetches live exchange rates and converts between currencies instantly.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    linkLabel: "Live Preview",
    linkUrl: "https://currency-converter-zeta-beige-79.vercel.app",
    linkType: "live",
    image : "/projects/currency-converter.jpeg",
  },
  {
    title: "Weather App",
    tag: "Web App",
    description:
      "A responsive weather application that fetches real-time weather data and forecasts for any city, with a clean interface.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    linkLabel: "Live Preview",
    linkUrl: "https://weather-app-eight-rho-24.vercel.app",
    linkType: "live",
    image : "/projects/weather.jpeg",
  },
  {
    title: "To Do List",
    tag: "Web App",
    description:
      "A To-Do List web application built with HTML, CSS, and JavaScript, features a dynamic task management (adding, deleting, and reordering via drag-and-drop).",
    stack: ["HTML5", "CSS3", "JavaScript"],
    linkLabel: "Live Preview",
    linkUrl: "https://to-do-list-two-taupe-78.vercel.app/",
    linkType: "live",
    image : "/projects/to-do-list.jpeg",
  },
  {
    title: "Calculator",
    tag: "Web App",
    description:
      "A clean, responsive calculator built with vanilla HTML, CSS, and JavaScript, featuring full keyboard support and error handling for invalid expressions.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    linkLabel: "Live Preview",
    linkUrl: "https://calculator-one-flax-99.vercel.app",
    linkType: "live",
    image : "/projects/calculator.jpeg",
  },
  {
    title: "Tic-Tac-Toe",
    tag: "Web App",
    description:
      "A classic two-player Tic-Tac-Toe game with a clean, responsive interface and win/draw detection.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    linkLabel: "Live Preview",
    linkUrl: "https://tic-tac-toe-omega-five-39.vercel.app",
    linkType: "live",
    image : "/projects/tic-tac-toe.jpeg",
  },
  {
    title: "Rock Paper Scissors",
    tag: "Web App",
    description:
      "An interactive Rock Paper Scissors game with score tracking and instant round-by-round results against the computer.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    linkLabel: "Live Preview",
    linkUrl: "https://rock-paper-scissors-five-sage.vercel.app",
    linkType: "live",
    image : "/projects/rock-paper-scissors.jpeg",
  },
  {
    title: "Vendor Invoice Intelligence & Freight Cost ML Pipeline",
    tag: "Machine Learning / Data Analytics",
    description:
      "An end-to-end data analytics and ML system built to detect invoice discrepancies and predict freight shipping costs. Features automated feature engineering from SQLite inventory tables, risk-flagging classification via tuned Random Forest models, and an interactive Streamlit inference dashboard.",
    stack: ["Python","Scikit-Learn", "Streamlit", "SQLite", "Pandas", "NumPy", "Joblib"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/Invoice-Intelligence-ML-Project",
    linkType: "code",
    image: null,
  },
  {
    title: "EcoWatt",
    tag: "AI for Sustainability",
    description:
      "An AI-powered household energy advisor that forecasts consumption, detects waste events in real time, and generates plain-language sustainability tips — built for the 1M1B x Microsoft.",
    stack: ["Python", "Streamlit", "RandomForest", "Claude API"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/EcoWatt",
    linkType: "code",
    image : "/projects/ecowatt.jpeg",
  },
  {
    title: "Job Portal",
    tag: "Full-Stack",
    description:
      "A Flask-based job portal with resume uploads, application tracking, and automated email notifications for applicants and recruiters.",
    stack: ["Flask", "Python", "SQLite"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/Job-Portal",
    linkType: "code",
    image : "/projects/job portal.jpeg",
  },
  {
    title: "Rental & Purchase E-Commerce",
    tag: "Full-Stack",
    description:
      "A dual-model e-commerce platform supporting both product purchase and time-based rentals, with role-based dashboards for Admin, Seller, and Buyer, deposit handling, and AI-ready interaction logging for future recommendations.",
    stack: ["Flask", "SQLAlchemy", "Bootstrap"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/Rental-Purchase-AI-Ecommerce",
    linkType: "code",
    image : "/projects/Ecommerce rental & purchase.jpeg",
  },
  {
    title: "CodeMaster",
    tag: "Full-Stack",
    description:
      "A coding practice platform with difficulty-tiered problems, code submission, an admin panel for problem management, and a competitive leaderboard.",
    stack: ["Flask", "Python", "MySQL"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/Codemaster",
    linkType: "code",
    image : "/projects/codemaster.jpeg",
  },
    {
    title: "TextUtils",
    tag: "Django",
    description: 
      "A Django-based text utility web app that lets users clean and transform text — remove punctuation, convert to uppercase, strip extra spaces and newlines, and count characters — all through a simple checkbox interface.",
    stack: ["Python", "Django", "HTML", "SQLite"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/Text-Utils",
    linkType: "code",
    image: "/projects/textutils.jpeg",
  },
  {
    title: "NBA Accreditation AI Agent",
    tag: "AI Agent",
    description:
      "An AI-driven accreditation agent built on IBM watsonx Orchestrate, designed to automate and streamline evaluation workflows using orchestrated AI reasoning.",
    stack: ["IBM watsonx Orchestrate", "AI Agents", "Python"],
    linkLabel: "null",
    linkUrl: "null",
    linkType: "code",
    image : "/projects/accredipath.jpeg",
  },
];

export type Experience = {
  role: string;
  provider: string;
  duration: string;
  description: string;
  image: string | null;
};

export const experience: Experience[] = [
  {
    role: "Data Science Intern",
    provider: "RVNS Solution x AICTE",
    duration: "01 June 2026 – 16 July 2026",
    description:
      "A Python full-stack internship focused on applying data science concepts to real-world, end-to-end application development.",
    image: "/certificates/rvns.jpeg",
  },
  {
    role: "Emerging Technologies Intern",
    provider: "Edunet Foundation x IBM SkillsBuild x AICTE",
    duration: "12 June 2026 – 10 July 2026",
    description:
      "A 4-week internship covering Agentic AI, Cyber Security, and Quantum Computing, culminating in an industry-relevant project built using IBM Cloud and IBM SkillsBuild.",
    image: "/certificates/edunet_certificate.jpeg",
  },
  {
    role: "Bootcamp Learner",
    provider: "1M1B x Microsoft x MeitY Startup Hub x AICTE",
    duration: "June 2026",
    description:
      "The intensive AI-enabled Green Skills & Climate Action Bootcamp helped me in Gaining foundational insights into leveraging AI and Data Analytics to tackle modern sustainability and climate challenges equipped with future-ready skills focused on the intersection of technology, green innovation, and responsible AI application.",
    image: "/certificates/1M1B.jpeg",
  },
  {
  role: "Green Skills & Applied AI Intern",
  provider: "1M1B x Microsoft x MeitY Startup Hub x AICTE",
  duration: "09 June 2026 – 14 August 2026",
  description:
    "70+ hours of experiential learning in Green Skills, Artificial Intelligence, and Data Analysis, culminating in a real-world AI-enabled sustainability project — EcoWatt.",
  image: "/certificates/1M1B_Completion.jpeg",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  url: string;
  image: string;
};

export const certifications: Certification[] = [
  { title: "Women Who Master Hackathon", issuer: "Logitech x Aspire For Her", image: "/certificates/Women%20Who%20Master%20Hackathon.jpeg", url: "/certificates/Women%20Who%20Master%20Hackathon.jpeg" },
  { title: "AI Quiz", issuer: "Campus Crew", image: "/certificates/Campus_Crew_Certificate.jpeg", url: "/certificates/Campus_Crew_Certificate.jpeg" },
  { title: "Techquest - Future-Proof Skills and Tech Careers", issuer: "Naukri Campus", image: "/certificates/Techquest-Certificate.jpeg", url: "/certificates/Techquest-Certificate.jpeg" },
  { title: "GenQuezt: Independence Day Quiz", issuer: "Naukri Campus", image: "/certificates/Independence-Day-Certificate.jpeg", url: "/certificates/Independence-Day-Certificate.jpeg" },
  { title: "BrandQuezt: The Viral Formula", issuer: "Naukri Campus", image: "/certificates/viral formula.jpeg", url: "/certificates/viral formula.jpeg" },
  { title: "Internshala Student Partner", issuer: "Internshala", image: "/certificates/Webinar Certificate.jpeg", url: "/certificates/Webinar Certificate.jpeg" },
  { title: "GFG Hackfest", issuer: "Geeks for Geeks", image: "/certificates/gfg.png.jpeg", url: "/certificates/gfg.png.jpeg" },
  { title: "Getting Started with Artificial Intelligence", issuer: "IBM", image: "/certificates/AI.png.jpeg", url: "/certificates/AI.png.jpeg" },
  { title: "Getting Started with Cybersecurity", issuer: "IBM", image: "/certificates/cybersecurity.png.jpeg", url: "/certificates/cybersecurity.png.jpeg" },
  { title: "Exploring Quantum Computing", issuer: "IBM", image: "/certificates/quantum%20computing.png.jpeg", url: "/certificates/quantum%20computing.png.jpeg" },
  { title: "Level Up Cybersecurity with Generative AI", issuer: "IBM", image: "/certificates/cybersecurity%20with%20genAI.png.jpeg", url: "/certificates/cybersecurity%20with%20genAI.png.jpeg" },
  { title: "Lab: Troubleshoot Your Code Using IBM Bob", issuer: "IBM", image: "/certificates/IBM%20bob.png.jpeg", url: "/certificates/IBM%20bob.png.jpeg" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte", image: "/certificates/Deloitte%20analytics.png.jpeg", url: "/certificates/Deloitte%20analytics.png.jpeg" },
  { title: "Cyber Job Simulation", issuer: "Deloitte", image: "/certificates/deloitte%20cyber.png.jpeg", url: "/certificates/deloitte%20cyber.png.jpeg" },
  { title: "Technology Job Simulation", issuer: "Deloitte", image: "/certificates/technology.png.jpeg", url: "/certificates/technology.png.jpeg" },
  { title: "GenAI Powered Data Analytics Job Simulation", issuer: "TATA", image: "/certificates/tata%20genAI.png.jpeg", url: "/certificates/tata%20genAI.png.jpeg" },
  { title: "Data Visualisation: Empowering Business with Effective Insights", issuer: "TATA", image: "/certificates/empowering%20business%20tata.png.jpeg", url: "/certificates/empowering%20business%20tata.png.jpeg" },
  { title: "Software Engineering Job Simulation", issuer: "JP Morgan Chase & Co.", image: "/certificates/JP.png.jpeg", url: "/certificates/JP.png.jpeg" },
  { title: "Advanced Software Engineering Job Simulation", issuer: "Walmart", image: "/certificates/Walmart.png.jpeg", url: "/certificates/Walmart.png.jpeg" },
  { title: "SQL and Relational Databases 101", issuer: "Cognitiveclass.ai", image: "/certificates/SQL.png.jpeg", url: "/certificates/SQL.png.jpeg" },
  { title: "Data Science & Analytics", issuer: "HP Foundation", image: "/certificates/HP.jpeg", url: "/certificates/HP.jpeg" },
  { title: "Data Analytics", issuer: "Unstop", image: "/certificates/Data Analytics.jpeg", url: "/certificates/Data Analytics.jpeg" },
  { title: "React JS", issuer: "Unstop", image: "/certificates/ReactJS.jpeg", url: "/certificates/ReactJS.jpeg" },
  { title: "Claude 101", issuer: "Anthropic", image: "/certificates/claude101.png.jpeg", url: "/certificates/claude101.png.jpeg" },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", image: "/certificates/AI%20Fluency.png.jpeg", url: "/certificates/AI%20Fluency.png.jpeg" },
  { title: "Claude Code in Action", issuer: "Anthropic", image: "/certificates/claude%20code.png.jpeg", url: "/certificates/claude%20code.png.jpeg" },
];