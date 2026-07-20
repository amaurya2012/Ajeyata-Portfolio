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
    label: "Languages & Data",
    items: ["Python", "SQL", "HTML/CSS/JS (learning)"],
  },
  {
    label: "Frameworks",
    items: ["Django", "Streamlit"],
  },
  {
    label: "AI & Tools",
    items: ["Gemini API", "IBM watsonx", "Git/GitHub"],
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
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "A's Library",
    tag: "Full-Stack Web App",
    description:
      "A full-stack personal digital library with authentication, role-based access, book uploads, reading-status tracking, and an admin analytics dashboard.",
    stack: ["Next.js", "Supabase", "Recharts"],
    linkLabel: "Live Preview",
    linkUrl: "https://a-s-library.vercel.app",
    linkType: "live",
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
  },
    {
    title: "Nutrition Chatbot",
    tag: "Chatbot",
    description:
      "An intelligent chatbot that delivers personalized nutrition insights, built to make everyday dietary guidance more conversational and accessible.",
    stack: ["Python", "IBM watsonx", "NLP"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/Nutrition-Chatbot",
    linkType: "code",
  },
  {
    title: "NBA Accreditation AI Agent",
    tag: "AI Agent",
    description:
      "An AI-driven accreditation agent built on IBM watsonx Orchestrate, designed to automate and streamline evaluation workflows using orchestrated AI reasoning.",
    stack: ["IBM watsonx Orchestrate", "AI Agents", "Python"],
    linkLabel: "View Code",
    linkUrl: "null",
    linkType: "code",
    featured: true,
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
    provider: "RVNS Solution (AICTE Approved)",
    duration: "01 June 2026 – 16 July 2026",
    description:
      "A Python full-stack internship focused on applying data science concepts to real-world, end-to-end application development.",
    image: "/certificates/rvns.jpeg",
  },
  {
    role: "Bootcamp Learner",
    provider: "1M1B (AICTE Approved)",
    duration: "09 June 2026 – 14 July 2026",
    description:
      "The intensive AI-enabled Green Skills & Climate Action Bootcamp helped me in Gaining foundational insights into leveraging AI and Data Analytics to tackle modern sustainability and climate challenges equipped with future-ready skills focused on the intersection of technology, green innovation, and responsible AI application.",
    image: "/certificates/1M1B.jpeg",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  url: string;
  image: string;
};

export const certifications: Certification[] = [
  { title: "GFG Hackfest", issuer: "GeeksforGeeks", image: "/certificates/gfg.png.jpeg", url: "/certificates/gfg.png.jpeg" },
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
  { title: "Claude 101", issuer: "Anthropic", image: "/certificates/claude101.png.jpeg", url: "/certificates/claude101.png.jpeg" },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", image: "/certificates/AI%20Fluency.png.jpeg", url: "/certificates/AI%20Fluency.png.jpeg" },
  { title: "Claude Code in Action", issuer: "Anthropic", image: "/certificates/claude%20code.png.jpeg", url: "/certificates/claude%20code.png.jpeg" },
];