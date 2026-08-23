import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import viFitnessMockup from "/public/mockupVi.png";
import netflixMockup from "/public/browsermockup.png";
import aiCourseMockup from "/public/browsermockup_2.png";
import semesterSyncMockup from "/public/SemesterSync-mockup.png";
import combatGameMockup from "/public/2D-CombatGame-mockup.png";
import fiveNinesMockup from "/public/FiveNines-mockup.png";
import smartIrrigationMockup from "/public/SmartIrrigationFarm-mockup.png";
import leetCodeGitHubMockup from "/public/LeetCodeGitHub-mockup.svg";
import quickDataMockup from "/public/QuickData-mockup.svg";
import {
  SiC, SiCplusplus, SiCsharp, SiCss3, SiFastapi, SiFirebase, SiFortran, SiGithub, SiGooglecalendar, SiGooglechrome, SiGooglemaps,
  SiHeroku, SiHtml5, SiKotlin, SiNextdotjs, SiOpenai, SiPrisma,
  SiPython, SiReact, SiSupabase, SiTailwindcss, SiTypescript,
  SiUnity, SiVite,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BiLogoJavascript, BiLogoNodejs } from "react-icons/bi";
import { BsGrid, BsGrid3X3Gap, BsStripe, BsYoutube } from "react-icons/bs";
import { TbApi, TbCode, TbSlashes } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { FaJava } from "react-icons/fa";

const technologies = {
  react: { name: "React", icon: SiReact, color: "bg-[#149ECA]", text: "text-white" },
  typescript: { name: "TypeScript", icon: SiTypescript, color: "bg-[#3178C6]", text: "text-white" },
  vite: { name: "Vite", icon: SiVite, color: "bg-[#646CFF]", text: "text-white" },
  tailwind: { name: "Tailwind", icon: SiTailwindcss, color: "bg-[#06B6D4]", text: "text-white" },
  fastapi: { name: "FastAPI", icon: SiFastapi, color: "bg-[#009688]", text: "text-white" },
  python: { name: "Python", icon: SiPython, color: "bg-[#3776AB]", text: "text-white" },
  openai: { name: "OpenAI", icon: SiOpenai, color: "bg-black", text: "text-white" },
  googleCalendar: { name: "Calendar", icon: SiGooglecalendar, color: "bg-[#4285F4]", text: "text-white" },
  unity: { name: "Unity", icon: SiUnity, color: "bg-black", text: "text-white" },
  csharp: { name: "C#", icon: SiCsharp, color: "bg-[#512BD4]", text: "text-white" },
  shaderLab: { name: "ShaderLab", icon: TbCode, color: "bg-[#5B4B8A]", text: "text-white" },
  hlsl: { name: "HLSL", icon: TbCode, color: "bg-[#702963]", text: "text-white" },
  html: { name: "HTML", icon: SiHtml5, color: "bg-[#E34F26]", text: "text-white" },
  supabase: { name: "Supabase", icon: SiSupabase, color: "bg-[#3ECF8E]", text: "text-zinc-900" },
  reactFlow: { name: "React Flow", icon: TbApi, color: "bg-[#FF0072]", text: "text-white" },
  kotlin: { name: "Kotlin", icon: SiKotlin, color: "bg-[#7F52FF]", text: "text-white" },
  node: { name: "Node.js", icon: BiLogoNodejs, color: "bg-[#3C873A]", text: "text-white" },
  javascript: { name: "JavaScript", icon: BiLogoJavascript, color: "bg-[#F7DF1E]", text: "text-zinc-900" },
  mysql: { name: "MySQL", icon: DiMysql, color: "bg-[#4479A1]", text: "text-white" },
  firebase: { name: "Firebase", icon: SiFirebase, color: "bg-[#DD6F00]", text: "text-white" },
  googleMaps: { name: "Google Maps", icon: SiGooglemaps, color: "bg-[#34A853]", text: "text-white" },
  heroku: { name: "Heroku", icon: SiHeroku, color: "bg-[#430098]", text: "text-white" },
  next: { name: "Next.js", icon: SiNextdotjs, color: "bg-black", text: "text-white" },
  shadcn: { name: "shadcn/ui", icon: TbSlashes, color: "bg-[#18181B]", text: "text-white" },
  prisma: { name: "Prisma", icon: SiPrisma, color: "bg-[#2D3748]", text: "text-white" },
  googleAuth: { name: "Google Auth", icon: FcGoogle, color: "bg-zinc-200", text: "text-zinc-900" },
  stripe: { name: "Stripe", icon: BsStripe, color: "bg-[#635BFF]", text: "text-white" },
  youtube: { name: "YouTube API", icon: BsYoutube, color: "bg-[#FF0000]", text: "text-white" },
  movieApi: { name: "TMDB API", icon: TbApi, color: "bg-[#0D253F]", text: "text-white" },
  cpp: { name: "C++", icon: SiCplusplus, color: "bg-[#00599C]", text: "text-white" },
  cython: { name: "Cython", icon: TbCode, color: "bg-[#F7C93E]", text: "text-zinc-900" },
  c: { name: "C", icon: SiC, color: "bg-[#A8B9CC]", text: "text-zinc-900" },
  fortran: { name: "Fortran", icon: SiFortran, color: "bg-[#734F96]", text: "text-white" },
  meson: { name: "Meson", icon: TbCode, color: "bg-[#6EBC6B]", text: "text-zinc-900" },
  css: { name: "CSS", icon: SiCss3, color: "bg-[#1572B6]", text: "text-white" },
  chrome: { name: "Chrome API", icon: SiGooglechrome, color: "bg-[#4285F4]", text: "text-white" },
  githubApi: { name: "GitHub API", icon: SiGithub, color: "bg-[#181717]", text: "text-white" },
  java: { name: "Java", icon: FaJava, color: "bg-[#ED8B00]", text: "text-white" },
};

const projects = [
  {
    title: "FiveNines",
    description: "A system-design canvas for creating, saving, and studying architecture diagrams with authentication, reusable nodes, and interactive reliability tools.",
    image: fiveNinesMockup,
    repository: "https://github.com/tonybbb2/FiveNines",
    demo: "https://five-nines.vercel.app",
    stack: ["react", "typescript", "vite", "tailwind", "supabase", "reactFlow"],
    categories: ["personal", "web"],
  },
  {
    title: "Course Outline Planner",
    description: "A productivity platform that turns course outlines into organized semester schedules and syncs important dates directly with Google Calendar.",
    image: semesterSyncMockup,
    repository: "https://github.com/tonybbb2/CourseOutlinePlanner",
    stack: ["react", "typescript", "vite", "tailwind", "fastapi", "python", "openai", "googleCalendar"],
    categories: ["web", "hackathons"],
  },
  {
    title: "Smart Irrigation Farm",
    description: "A smart farm advisory platform that uses NASA weather history and machine learning to predict conditions and calculate crop irrigation needs.",
    image: smartIrrigationMockup,
    repository: "https://github.com/naderghaddar/NASAA",
    demo: "https://nasa-challenge-app-beta.vercel.app/",
    stack: ["python", "cpp", "cython", "c", "fortran", "meson"],
    categories: ["web", "hackathons"],
  },
  {
    title: "2D Online Combat Game",
    description: "A multiplayer 2D combat game built in Unity, featuring real-time networked battles, custom shaders, and responsive player controls.",
    image: combatGameMockup,
    repository: "https://github.com/Marc187/2d-online-combat-game",
    stack: ["unity", "csharp", "shaderLab", "hlsl", "html"],
    categories: ["game", "school"],
  },
  {
    title: "VI Fitness Application",
    description: "A mobile fitness application that helps users follow structured workouts, track their training, and work toward personal fitness goals.",
    image: viFitnessMockup,
    repository: "https://github.com/MoKhedim/Projet3_Equipe2",
    stack: ["kotlin", "node", "javascript", "openai", "mysql", "firebase", "googleMaps", "heroku"],
    categories: ["mobile", "school"],
  },
  {
    title: "AI Mastery Course",
    description: "An AI-powered learning platform that lets users generate personalized courses on nearly any topic and follow structured educational content.",
    image: aiCourseMockup,
    repository: "https://github.com/tonybbb2/AI_CourseGenerator",
    stack: ["next", "typescript", "shadcn", "prisma", "openai", "googleAuth", "stripe", "youtube"],
    categories: ["personal", "web"],
  },
  {
    title: "Full-Stack Netflix Clone",
    description: "A responsive Netflix-inspired application built to explore familiar streaming interfaces, authentication flows, and dynamic movie catalogue data.",
    image: netflixMockup,
    repository: "https://github.com/tonybbb2/NetflixUI",
    stack: ["react", "firebase", "tailwind", "movieApi"],
    categories: ["personal", "web"],
  },
  {
    title: "LeetCode Accepted to GitHub",
    description: "A Chrome extension that journals accepted LeetCode submissions in a GitHub repository, preserving solutions while keeping contribution activity synchronized.",
    image: leetCodeGitHubMockup,
    repository: "https://github.com/tonybbb2/dsa_lc_journal",
    stack: ["javascript", "html", "java", "chrome", "githubApi"],
    categories: ["personal", "extensions"],
  },
  {
    title: "QuickData",
    description: "A lightweight Chrome extension that generates realistic test data and instantly fills web forms to make development and QA workflows faster.",
    image: quickDataMockup,
    repository: "https://github.com/tonybbb2/quickdata-ext",
    stack: ["javascript", "html", "css", "chrome"],
    categories: ["personal", "extensions"],
  },
];

const filters = ["all", "personal", "web", "hackathons", "extensions", "mobile", "game", "school"];
const VIEW_MODE_STORAGE_KEY = "portfolio-project-view-mode";

const marqueeIcons = [SiReact, SiTypescript, SiNextdotjs, SiPython, SiCsharp, SiUnity, SiSupabase, SiFirebase];

function ProjectCard({ project, eager, compact }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-zinc-800">
      <div className={`relative -mt-4 overflow-hidden rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${compact ? "mx-3 aspect-[16/8]" : "mx-4 aspect-[5/2]"}`}>
        <Image className="object-cover transition duration-500 hover:scale-105" src={project.image} alt={`${project.title} preview`} fill loading={eager ? "eager" : "lazy"} sizes="(min-width: 768px) 440px, calc(100vw - 8rem)" />
      </div>
      <div className={`flex flex-1 flex-col text-center ${compact ? "p-4" : "p-6"}`}>
        <h2 className={`font-bold text-zinc-800 dark:text-white ${compact ? "mb-2 text-base" : "mb-3 text-xl"}`}>{project.title}</h2>
        <p className={`text-zinc-500 dark:text-zinc-400 ${compact ? "mb-3 line-clamp-3 text-xs leading-5" : "mb-5 text-sm leading-6"}`}>{project.description}</p>
        <ul className={`grid grid-cols-2 gap-1.5 ${compact ? "mb-4" : "mb-6 sm:grid-cols-3 lg:grid-cols-4"}`} aria-label={`${project.title} technology stack`}>
          {project.stack.map((technologyKey) => {
            const technology = technologies[technologyKey];
            const Icon = technology.icon;
            return (
              <li key={technologyKey} className={`flex min-h-6 items-center justify-center rounded px-1.5 py-1 text-[10px] ${technology.color} ${technology.text}`}>
                <Icon className="mr-1.5 shrink-0 text-xs" aria-hidden="true" />
                <span className="truncate">{technology.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto flex items-center justify-center gap-2">
          <Link href={project.repository} rel="noopener noreferrer" target="_blank" className={`rounded-full bg-white text-xs font-bold uppercase text-zinc-900 shadow-md ring-1 ring-zinc-900/5 transition hover:ring-[#DA3028] dark:bg-zinc-700 dark:text-white dark:ring-white/10 dark:hover:ring-[#DA3028] ${compact ? "px-3 py-2" : "px-5 py-3"}`}>Source code</Link>
          {project.demo && <Link href={project.demo} rel="noopener noreferrer" target="_blank" className={`rounded-full bg-[#DA3028] text-xs font-bold uppercase text-white shadow-md transition hover:bg-red-700 ${compact ? "px-3 py-2" : "px-5 py-3"}`}>Live demo</Link>}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const visibleProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  useEffect(() => {
    try {
      const savedViewMode = window.localStorage.getItem(VIEW_MODE_STORAGE_KEY);
      if (savedViewMode === "grid" || savedViewMode === "compact") {
        setViewMode(savedViewMode);
      }
    } catch {
      // Keep the default grid view when browser storage is unavailable.
    }
  }, []);

  const changeViewMode = (nextViewMode) => {
    setViewMode(nextViewMode);
    try {
      window.localStorage.setItem(VIEW_MODE_STORAGE_KEY, nextViewMode);
    } catch {
      // The selected view still works for the current session.
    }
  };

  return (
    <main className="flex-auto">
      <div className="mt-16 sm:mt-32 sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-full md:flex">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase text-red-600">Projects & professional skills</p>
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Things I’ve made trying to prove myself in this industry</h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’ve worked on personal, academic, and collaborative projects over the years. These are the ones I’m most proud of, and many are open source for anyone interested in the code.</p>
                </div>
                <div className="hidden w-full self-center overflow-hidden text-center [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] md:block">
                  <div className="inline-flex animate-infinite-scroll items-center gap-10 whitespace-nowrap">
                    {[...marqueeIcons, ...marqueeIcons].map((Icon, index) => <Icon key={index} className="text-3xl text-zinc-600 dark:text-zinc-300" aria-hidden="true" />)}
                  </div>
                </div>
              </header>
              <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
                <nav className="flex flex-wrap gap-2" aria-label="Filter projects">
                  {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                    className={`rounded-full px-4 py-2 text-xs font-semibold capitalize transition ${activeFilter === filter ? "bg-[#DA3028] text-white shadow-md" : "bg-white text-zinc-700 shadow-sm ring-1 ring-zinc-200 hover:text-[#DA3028] dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"}`}
                  >
                    {filter}
                  </button>
                  ))}
                </nav>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400" aria-live="polite">
                    {visibleProjects.length}{activeFilter === "all" ? "" : ` of ${projects.length}`} {visibleProjects.length === 1 ? "project" : "projects"}
                  </span>
                  <div className="flex rounded-full bg-white p-1 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700" role="group" aria-label="Project view mode">
                    <button type="button" onClick={() => changeViewMode("grid")} aria-label="Spacious grid view" aria-pressed={viewMode === "grid"} className={`rounded-full p-2 transition ${viewMode === "grid" ? "bg-[#DA3028] text-white" : "text-zinc-500 hover:text-[#DA3028]"}`}>
                      <BsGrid aria-hidden="true" />
                    </button>
                    <button type="button" onClick={() => changeViewMode("compact")} aria-label="Compact grid view" aria-pressed={viewMode === "compact"} className={`rounded-full p-2 transition ${viewMode === "compact" ? "bg-[#DA3028] text-white" : "text-zinc-500 hover:text-[#DA3028]"}`}>
                      <BsGrid3X3Gap aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <section className={`mt-12 grid gap-x-8 gap-y-14 ${viewMode === "compact" ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`} aria-label="Project portfolio">
                {visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} eager={index < 2} compact={viewMode === "compact"} />)}
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
