export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  socialLinks: SocialLink[];
  resumeUrl: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  grade?: string;
  location?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
