import {
  Award,
  GraduationCap,
  Code2,
  Briefcase,
  Cloud,
  Coffee,
  Database,
  Heart,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Server,
  BookOpen,
  Zap,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECTS_IMG_1 from "../assets/images/1-E-COMMERCE PLATFORM.png";
import PROJECTS_IMG_2 from "../assets/images/2-BLOG APP WITH AI POST GENERATOR.png";
import PROJECTS_IMG_3 from "../assets/images/3-TASK MANAGEMENT.png";
import PROJECTS_IMG_4 from "../assets/images/4-AI-POWERED INTERVIEW PREPARATION.png";
import PROJECTS_IMG_5 from "../assets/images/5-RESUME BUILDER.png";
import PROJECTS_IMG_6 from "../assets/images/6-EXPENSE-TRACKER.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interface",
    skills: [
      { name: "React.js", level: 90, color: "bg-blue-500" },
      { name: "Next.js", level: 88, color: "bg-blue-700" },
      { name: "Tailwind CSS", level: 85, color: "bg-gray-600" },
      { name: "TypeScript  ", level: 80, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 90, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "Phyton", level: 85, color: "bg-yellow-500" },
      { name: "GraphQL  ", level: 80, color: "bg-pink-600" },
      { name: "REST APIs", level: 90, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
      { name: "DBeaver", level: 85, color: "bg-blue-600" },
      { name: "Redis", level: 80, color: "bg-red-500" },
      { name: "Prisma", level: 82, color: "bg-indigo-600" },
      { name: "Firebase", level: 78, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scalling application",
    skills: [
      { name: "Docker", level: 82, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-green-600" },
      { name: "Git", level: 95, color: "bg-orange-900" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Sass",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Figma",
  "Adobe XD",
  "Notion",
  "Slack",
];

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaciton" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration and real-time inventory management.",
    image: PROJECTS_IMG_1,
    tags: ["React.js", "TypeScript", "Node.js", "Framer motion"],
    liveUrl: "https://youtube.com",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 2,
    title: "Blog App with AI Post Generator",
    description:
      "A full-stack blog app using the MERN stack - with full Markdown support, tag filtering, and an integrated Gemini API.",
    image: PROJECTS_IMG_2,
    tags: ["React.js", "TypeScript", "Node.js", "MongodDB", "Tailwind"],
    liveUrl: "https://youtube.com",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team chat, and analytic dashboard.",
    image: PROJECTS_IMG_3,
    tags: ["Next.js", "TypeScript", "Node.js", "MongodDB"],
    liveUrl: "https://youtube.com",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },
  {
    id: 4,
    title: "AI-powered Interview Preparation App",
    description:
      "A SMART AI-powered Interview Preparation App using the MERN stack, along with Gemini API.",
    image: PROJECTS_IMG_4,
    tags: ["Next.js", "TypeScript", "Node.js", "MongodDB"],
    liveUrl: "https://youtube.com",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 5,
    title: "Resume Builder App",
    description:
      "a fully functional Resume Builder App using the MERN stack along with Tailwind CSS for a clean, moden Interface",
    image: PROJECTS_IMG_5,
    tags: ["Next.js", "TypeScript", "Node.js", "MongodDB"],
    liveUrl: "https://youtube.com",
    githubUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: 6,
    title: "Expense Tracker App",
    description:
      "This app includes user authentication with JWT, income and expense tracking, and interactive charts",
    image: PROJECTS_IMG_6,
    tags: ["Next.js", "TypeScript", "Node.js", "MongodDB"],
    liveUrl: "https://youtube.com",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },
];

export const JOURNEY_STEPS = [
  {
    years: "2021",
    title: "Start coding journey",
    company: "Selft-taught",
    description:
      "Joined as a frontend intern, working with react and learning modern development practices. Contribute in some projects.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    years: "2022",
    title: "Computer Science Degree",
    company: "University of Technologies",
    description:
      "Graduated with honors, specializing in web technologies and software engineering.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    years: "2023",
    title: "Fullstack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Promoted to full-time developer role. Built end-to-end applications using MERN stack and led junior development",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    years: "2023",
    title: "Freelance and Opensource",
    company: "Independent",
    description:
      "Started freelancing and contributing to open source projects. Launched 3 successful web applications",
    icon: Award,
    color: "bg-pink-500",
  },
  {
    years: "2025",
    title: "Senior Developer",
    company: "Present",
    description:
      "Currently building innovative solutions and exploring new technologies like AI integration",
    icon: Zap,
    color: "bg-cyan-500",
  },
];
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Continuous Learning",
    description: "Turning complex challenge into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];
export const SOCIAL_LINK = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-500/10",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "ockytumocky@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "San Fransisco, CA",
  },
  {
    icon: Mail,
    label: "Emaill",
    value: "ockytumocky@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 878 5434 8108",
  },
];
