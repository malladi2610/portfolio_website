import { IconType } from "react-icons";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPython, 
  SiDocker, 
  SiAmazon, 
  SiGit 
} from "react-icons/si";

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Project Management Tool",
    description: "Collaborative project management application",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "AI Image Generator",
    description: "Generate unique images using AI models",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    tags: ["Python", "TensorFlow", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tags: ["Vue.js", "D3.js", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts and fitness progress",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    tags: ["React Native", "GraphQL", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Weather App",
    description: "Real-time weather information and forecasts",
    image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
    tags: ["React", "OpenWeather API", "Charts.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

export const SKILLS: Skill[] = [
  {
    name: "React",
    icon: SiReact,
    level: 90
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 85
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    level: 80
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    level: 90
  },
  {
    name: "Python",
    icon: SiPython,
    level: 75
  },
  {
    name: "Docker",
    icon: SiDocker,
    level: 70
  },
  {
    name: "AWS",
    icon: SiAmazon,
    level: 65
  },
  {
    name: "Git",
    icon: SiGit,
    level: 85
  }
];