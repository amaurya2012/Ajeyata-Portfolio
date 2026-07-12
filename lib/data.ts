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
    title: "NBA Accreditation AI Agent",
    tag: "AI Agent",
    description:
      "An AI-driven accreditation agent built on IBM watsonx Orchestrate, designed to automate and streamline evaluation workflows using orchestrated AI reasoning.",
    stack: ["IBM watsonx Orchestrate", "AI Agents", "Python"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012",
    linkType: "code",
    featured: true,
  },
  {
    title: "Nutrition Chatbot",
    tag: "Chatbot",
    description:
      "An intelligent chatbot that delivers personalized nutrition insights, built to make everyday dietary guidance more conversational and accessible.",
    stack: ["Python", "IBM watsonx", "NLP"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012",
    linkType: "code",
  },
  {
    title: "E-Commerce Platform",
    tag: "Full-Stack",
    description:
      "A full-stack e-commerce application built with Django, covering product listings, cart flow, and order handling end to end.",
    stack: ["Django", "Python", "SQL"],
    linkLabel: "View Code",
    linkUrl: "https://github.com/amaurya2012/E-COMMERCE-DJANGO-",
    linkType: "code",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  url: string;
  image: string;
};

export const certifications: Certification[] = [
  { title: "GFG Hackfest",issuer: "GeeksforGeeks", image: "https://photos.app.goo.gl/LHmMPgLyQUQrcr5L7", url: "https://photos.app.goo.gl/LHmMPgLyQUQrcr5L7" },
  { title: "Getting Started with Artificial Intelligence", issuer: "IBM", image: "https://photos.app.goo.gl/kyVcrXqCfRnXdh9UA", url: "https://photos.app.goo.gl/kyVcrXqCfRnXdh9UA" },
  { title: "Getting Started with Cybersecurity", issuer:"IBM", image: "https://photos.app.goo.gl/yoND5GLUkuhzUu98A", url: "https://photos.app.goo.gl/yoND5GLUkuhzUu98A" },
  { title: "Exploring Quantum Computing", issuer:"IBM", image: "https://photos.app.goo.gl/kfKWPG64qDfR5Vjc6", url: "https://photos.app.goo.gl/kfKWPG64qDfR5Vjc6" },
  { title: "Level UP Cybersecurity with Generative AI", issuer:"IBM", image: "https://photos.app.goo.gl/eeqTTwBEup11htet5", url: "https://photos.app.goo.gl/eeqTTwBEup11htet5" },
  { title: "Lab: Troubleshoot Your Code Using IBM Bob", issuer:"IBM", image: "https://photos.app.goo.gl/b6hRJdzA8UFkt7zT9", url: "https://photos.app.goo.gl/b6hRJdzA8UFkt7zT9" },
  { title: "Data Analytics Job Simulation", issuer:"Deloitte", image:"https://photos.app.goo.gl/CQRCG77iNW7b4HLp8", url: "https://photos.app.goo.gl/CQRCG77iNW7b4HLp8" },
  { title: "Cybersecurity Job Simulation", issuer:"Deloitte", image:"https://photos.app.goo.gl/Xe3jX2cPwFTKxZFKA", url: "https://photos.app.goo.gl/Xe3jX2cPwFTKxZFKA" },
  { title: "Technology Job Simulation", issuer:"Deloitte", image:"https://photos.app.goo.gl/KmYEsFy4Yyk2tTQQ6", url: "https://photos.app.goo.gl/KmYEsFy4Yyk2tTQQ6" },
  { title: "GenAI Powered Data Analytics Job Simulation", issuer:"TATA", image: "https://photos.app.goo.gl/RCvYw5bBUPu13NYx8", url: "https://photos.app.goo.gl/RCvYw5bBUPu13NYx8" },
  { title: "Data Visualisation: Empowering Business with Effective Insights", issuer:"TATA", image: "https://photos.app.goo.gl/sxmF5FYqdnpruDUE9", url: "https://photos.app.goo.gl/sxmF5FYqdnpruDUE9" },
  { title: "Software Engineering Job Simulation", issuer:"JP Morgan Chase & Co.", image: "https://photos.app.goo.gl/oHCYV2AdTP68j1VNA", url: "https://photos.app.goo.gl/oHCYV2AdTP68j1VNA" },
  { title: "Advanced Software Engineering Job Simulation", issuer:"Walmart", image: "https://photos.app.goo.gl/YojeW7eqdpoAUd4E9", url: "https://photos.app.goo.gl/YojeW7eqdpoAUd4E9" },
  { title: "SQL and Relational Databases 101", issuer:"Cognitiveclass.ai", image: "https://photos.app.goo.gl/2gteVgUgHWCs1Rvt7", url: "https://photos.app.goo.gl/2gteVgUgHWCs1Rvt7" },
  { title: "Claude 101", issuer:"Anthropic", image: "https://photos.app.goo.gl/CwsKf4ERczkvfUEb8", url: "https://photos.app.goo.gl/CwsKf4ERczkvfUEb8" },
  { title: "AI Fluency: Framework & Foundations", issuer:"Anthropic", image: "https://photos.app.goo.gl/jUfAgSqFAQ1kHsn4A", url: "https://photos.app.goo.gl/jUfAgSqFAQ1kHsn4A" },
  { title: "Claude Code in Action", issuer:"Anthropic", image: "https://photos.app.goo.gl/f8QT912rQfocLxqL6", url: "https://photos.app.goo.gl/f8QT912rQfocLxqL6" },
];
