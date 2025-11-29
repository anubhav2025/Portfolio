import {
  PersonalInfo,
  Education,
  Experience,
  Project,
  SkillCategory,
  Achievement,
  NavItem,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Anubhav Pandey",
  title: "Software Engineer",
  email: "anubhavp758@gmail.com",
  phone: "+91 9140216328",
  location: "Gurgaon, India",
  bio: "Passionate software engineer with a fast-learning mindset, skilled in adopting new technologies and building scalable web systems.",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anubhav09/",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/anubhav2025",
      icon: "github",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/akp99376/",
      icon: "code",
    },
  ],
  resumeUrl: "/resume.pdf",
};

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "MNNIT Allahabad",
    degree: "B.Tech.",
    field: "Computer Science & Engineering",
    duration: "2021 – 2025",
    grade: "",
    location: "Prayagraj, India",
  }
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "ArmorCode Inc.",
    position: "Associate Software Engineer",
    duration: "January 2025 – Present",
    location: "Gurgaon, India",
    description: [
      "Designed and implemented Asset Owner functionality across the ArmorCode platform, enabling asset-to-finding owner propagation, filtering, and grouping capabilities that improved vulnerability routing and accountability for RBVM customers.",
      "Built manual asset creation capability via GUI, allowing security engineers to create individual assets directly through the UI with full support for multiple asset types (Host, Images, Cloud Resources), deduplication, and asset-finding correlation.",
      "Migrated Axonius integration from v1 to v2 Device APIs, implementing adapter connection metadata ingestion as asset tags to enable customers to identify security tool coverage gaps across their infrastructure.",
      "Developed configurable exclusion logic for Asset-Finding correlation, implementing exclusion lists for generic hostnames, IP addresses, and regex pattern matching to reduce false positive matches.",
      "Integrated GitGuardian CLI (ggshield) and Axonius metadata tag processing, enabling automated ingestion of secret detection findings and enriched organization details for improved findings routing.",
      "Enhanced Cobalt penetration testing integration by adding organization and pentest name metadata as finding tags, enabling vulnerability triage based on specific pentest engagements.",
    ],
    technologies: ["Java", "Spring Boot", "Kubernetes", "Docker", "Elasticsearch"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Expensio",
    description: "Finance Management App",
    highlights: [
      "Built Expensio, a finance app securing top 5 at Hack36; later transitioned to microservices for scalability.",
      "Developed a personalized NLP-powered Smart Chat Assistant increasing user engagement by 50% and enabling natural-language expense entry with AI-driven summaries.",
      "Resolved data consistency issues with MongoDB/PostgreSQL transactions, idempotency, and SAGA pattern, reducing anomalies by 20%.",
      "Managed deployment using Docker and Kubernetes, improving efficiency by 30%; added secure rate-limited OTP authentication.",
    ],
    technologies: [
      "Microservices",
      "Kafka",
      "Kubernetes",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Socket.io",
      "NLP",
    ],
    githubUrl: "https://github.com/anubhavp28/expensio",
  },
  {
    id: "proj-2",
    title: "BuzzBuy",
    description: "Full-Stack E-Commerce Platform for Electronic Gadgets",
    highlights: [
      "Built a fully functional MERN stack e-commerce platform with role-based access for customers and admins, featuring product browsing, cart management, and secure checkout flow.",
      "Integrated PayPal payment gateway for seamless and secure transactions, enabling customers to complete purchases with real-time payment confirmation.",
      "Implemented comprehensive customer features including product reviews & ratings, order tracking, profile management, and password updates.",
      "Developed admin dashboard with full CRUD operations for product management, order fulfillment with delivery status updates, and user analytics.",
    ],
    technologies: ["MongoDB", "Express.js", "Node.js", "React.js", "Bootstrap", "PayPal API", "JWT", "REST API"],
    githubUrl: "https://github.com/anubhavp28/buzzbuy",
  },
  {
    id: "proj-3",
    title: "Little Sparks",
    description: "Empowering Children For Bright Future",
    highlights: [
      "Engineered a secure web application that digitized and streamlined the entire Bal Asha Trust child adoption process, reducing processing time by 40% and increasing efficiency by 50%.",
      "Established a robust, role-based secure authentication system using React Router and JWT Token, improving user login security by 60%.",
      "Achieved a remarkable 50% improvement in overall process efficiency and reduced cycle time by an impressive 30%.",
    ],
    technologies: ["MongoDB", "Express.js", "Node.js", "React.js", "JWT"],
    githubUrl: "https://github.com/anubhavp28/little-sparks",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "skill-1",
    name: "Languages",
    skills: ["C", "C++", "JavaScript", "Java", "Spring Boot"],
  },
  {
    id: "skill-2",
    name: "Web Technologies",
    skills: [
      "Node.js",
      "Express.js",
      "React.js",
      "HTML/CSS",
      "Material UI",
      "Socket.io",
    ],
  },
  {
    id: "skill-3",
    name: "Databases",
    skills: ["MongoDB", "MySQL", "Elasticsearch"],
  },
  {
    id: "skill-4",
    name: "DevOps & Tools",
    skills: ["Kubernetes", "Docker", "Git", "GitHub"],
  },
  {
    id: "skill-5",
    name: "Foundations",
    skills: [
      "System Design",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Algorithms",
      "Data Structures",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Finalist (Top 4)",
    description: "Morgan Stanley Code To Give 2023",
    icon: "trophy",
  },
  {
    id: "ach-2",
    title: "Top 5",
    description: "Hack36, MNNIT",
    icon: "award",
  },
  {
    id: "ach-3",
    title: "Rank 306",
    description: "CodeChef Starters 117",
    icon: "medal",
  },
  {
    id: "ach-4",
    title: "Rank 656",
    description: "LeetCode Biweekly Contest 133",
    icon: "star",
  },
];

export const navItems: NavItem[] = [
  { id: "nav-home", label: "Home", href: "#home" },
  { id: "nav-about", label: "What I Do", href: "#about" },
  { id: "nav-experience", label: "Experience", href: "#experience" },
  { id: "nav-projects", label: "Projects", href: "#projects" },
  { id: "nav-skills", label: "Skills", href: "#skills" },
  { id: "nav-achievements", label: "Achievements", href: "#achievements" },
  { id: "nav-contact", label: "Contact", href: "#contact" },
];
