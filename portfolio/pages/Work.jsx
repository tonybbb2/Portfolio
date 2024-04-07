import React from "react";
import Image from "next/image";
import Link from "next/link";
import backgroundImg from "/public/mockupVi.png";
import backgroundImg2 from "/public/browsermockup.png";
import backgroundImg3 from "/public/browsermockup_2.png";
import {
  SiKotlin,
  SiOpenai,
  SiFirebase,
  SiGooglemaps,
  SiHeroku,
  SiAuthelia,
  SiNextdotjs,
  SiPrisma,
  SiPhp,
  SiJquery,
  SiBootstrap,
  SiDotnet,
  SiBlazor,
  SiCsharp,
  SiVisualstudiocode,
  SiPostman,
  SiPhpstorm,
} from "react-icons/si";
import { DiMysql, DiReact, DiCodeigniter } from "react-icons/di";
import {
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsStripe, BsYoutube } from "react-icons/bs";
import { TbApi, TbSlashes, TbJson } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

// NOT OPTIMIZED CODE!!
export default function Work() {
  return (
    <>
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <header className="max-w-full none md:flex">
                  <div className="max-w-2xl">
                    <p className="text-red-600 text-sm font-semibold uppercase">
                      Projects & professional skills
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      Things I’ve made trying to prove myself in this industry
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                      I’ve worked on some personal and school projects over the
                      years and these are the ones that I’m most proud of. Many
                      of them are open-source, so if you see something that got
                      your attention, check out the code and contribute if you
                      have ideas for how it can be improved. Many new projects
                      are on the way, I'm only getting started!
                    </p>
                  </div>
                  <div className="self-center text-center h-full w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <div class="w-full inline-flex flex-nowrap mt-5">
                      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                          <SiPhp className="text-2xl text-[#7b7fb5]" />
                        </li>
                        <li>
                          <SiJquery className="text-2xl text-[#106daf]" />
                        </li>
                        <li>
                          <BiLogoJavascript className="text-2xl text-[#EDD729]" />
                        </li>
                        <li>
                          <SiBootstrap className="text-2xl text-[#7f18f9]" />
                        </li>
                        <li>
                          <DiCodeigniter className="text-2xl text-[#f0472a]" />
                        </li>
                      </ul>
                      <ul
                        class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll"
                        aria-hidden="true"
                      >
                        <li>
                          <SiPhp className="text-2xl text-[#7b7fb5]" />
                        </li>
                        <li>
                          <SiJquery className="text-2xl text-[#106daf]" />
                        </li>
                        <li>
                          <BiLogoJavascript className="text-2xl text-[#EDD729]" />
                        </li>
                        <li>
                          <SiBootstrap className="text-2xl text-[#7f18f9]" />
                        </li>
                        <li>
                          <DiCodeigniter className="text-2xl text-[#f0472a]" />
                        </li>
                      </ul>
                    </div>
                    <div class="w-full inline-flex flex-nowrap mt-4">
                      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-7 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                          <SiDotnet className="text-2xl text-black dark:text-white" />
                        </li>
                        <li>
                          <SiBlazor className="text-2xl text-[#613494]" />
                        </li>
                        <li>
                          <SiCsharp className="text-2xl text-[#34a037]" />
                        </li>
                        <li>
                          <GrMysql className="text-2xl text-[#4c83a3]" />
                        </li>
                        <li>
                          <TbJson className="text-2xl text-black dark:text-white" />
                        </li>
                      </ul>
                      <ul
                        class="flex items-center justify-center md:justify-start [&_li]:mx-7 [&_img]:max-w-none animate-infinite-scroll"
                        aria-hidden="true"
                      >
                        <li>
                          <SiDotnet className="text-2xl text-black dark:text-white" />
                        </li>
                        <li>
                          <SiBlazor className="text-2xl text-[#613494]" />
                        </li>
                        <li>
                          <SiCsharp className="text-2xl text-[#34a037]" />
                        </li>
                        <li>
                          <GrMysql className="text-2xl text-[#4c83a3]" />
                        </li>
                        <li>
                          <TbJson className="text-2xl text-black dark:text-white" />
                        </li>
                      </ul>
                    </div>
                    <div class="w-full inline-flex flex-nowrap mt-4">
                      <ul
                        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                        aria-hidden="true"
                      >
                        <li>
                          <SiVisualstudiocode className="text-2xl text-[#a175d7]" />
                        </li>
                        <li>
                          <SiVisualstudiocode className="text-2xl text-[#22a7ea]" />
                        </li>
                        <li>
                          <SiPhpstorm className="text-2xl text-black dark:text-white" />
                        </li>
                        <li>
                          <SiPostman className="text-2xl text-[#f76935]" />
                        </li>
                        <li>
                          <FaGitAlt className="text-2xl text-[#e84e31]" />
                        </li>
                      </ul>
                      <ul
                        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                        aria-hidden="true"
                      >
                        <li>
                          <SiVisualstudiocode className="text-2xl text-[#a175d7]" />
                        </li>
                        <li>
                          <SiVisualstudiocode className="text-2xl text-[#22a7ea]" />
                        </li>
                        <li>
                          <SiPhpstorm className="text-2xl text-black dark:text-white" />
                        </li>
                        <li>
                          <SiPostman className="text-2xl text-[#f76935]" />
                        </li>
                        <li>
                          <FaGitAlt className="text-2xl text-[#e84e31]" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </header>
                <div className="mt-16 sm:mt-20 p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div class="mb-6 lg:mb-0">
                      <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-zinc-800">
                        <div class="flex">
                          <div class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <Image
                              className="rounded-xl hover:scale-150 transition duration-500 cursor-pointer object-cover"
                              src={backgroundImg}
                              width={500}
                              height={200}
                              alt="/"
                            />
                          </div>
                        </div>
                        <div class="p-6 text-center">
                          <h5 class="mb-4 text-xl font-bold text-zinc-800 dark:text-white">
                            VI fitness application
                          </h5>
                          <p class="mb-6 text-zinc-500 dark:text-zinc-400">
                            VI fitness is an application that allow people who
                            want to follow a workout to achieve their fitness
                            goals.
                          </p>
                          <div className="flex grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-1 p-2">
                            <span class="flex items-center justify-center bg-blue-900 text-[10px] me-2 py-0.5 rounded text-white">
                              <SiKotlin className="text-xs mr-2" />
                              Kotlin
                            </span>
                            <span class="flex items-center justify-center bg-[#3C983C] text-[10px] me-2 py-0.5 rounded text-white">
                              <BiLogoNodejs className="text-xs mr-2" />
                              Node.js
                            </span>
                            <span class="flex items-center justify-center bg-[#EDD729] text-[10px] me-2 py-0.5 rounded text-white">
                              <BiLogoJavascript className="text-black text-xs mr-2" />
                              JavaScript
                            </span>
                            <span class="flex items-center justify-center bg-black text-[10px] me-2 py-0.5 rounded text-white">
                              <SiOpenai className="text-xs mr-2" />
                              OpenAI
                            </span>
                            <span class="flex items-center justify-center bg-[#4E7EA2] text-[10px] me-2 py-0.5 rounded text-white">
                              <DiMysql className="text-xs mr-2" />
                              MySQL
                            </span>
                            <span class="flex items-center justify-center bg-orange-700 text-[10px] me-2 py-0.5 rounded text-white">
                              <SiFirebase className="text-xs mr-2" />
                              Firebase
                            </span>
                            <span class="flex items-center justify-center bg-[#46AF61] text-[10px] me-2 py-0.5 rounded text-white">
                              <SiGooglemaps className="text-xs mr-2" />
                              GoogleMaps
                            </span>
                            <span class="flex items-center justify-center bg-[#4A0E97] text-[10px] me-2 py-0.5 rounded text-white">
                              <SiHeroku className="text-xs mr-2" />
                              Heroku
                            </span>
                          </div>
                          <div className="flex justify-center items-center mt-6 gap-2">
                            <Link
                              href={"https://github.com/MoKhedim/Projet3_Equipe2"}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-700 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                                type="button"
                              >
                                Source code
                              </button>
                            </Link>
                            <button
                              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-700 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                              type="button"
                            >
                              Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6 lg:mb-0">
                      <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-zinc-800">
                        <div class="flex">
                          <div class="relative mx-4 -mt-4 w-full overflow-hidden rounded-xl bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <Image
                              className="rounded-xl hover:scale-150 transition duration-500 cursor-pointer object-cover"
                              src={backgroundImg3}
                              width={500}
                              height={200}
                              alt="/"
                            />
                          </div>
                        </div>
                        <div class="p-6 text-center">
                          <h5 class="mb-4 text-xl font-bold text-zinc-800 dark:text-white">
                            AI Mastery Course
                          </h5>
                          <p class="mb-6 text-zinc-500 dark:text-zinc-400">
                            AI Mastery Course is an application that allow users
                            to create their own course on any subject they want.
                          </p>
                          <div className="flex grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-1 p-2">
                            <span class="flex items-center justify-center bg-black text-[10px] me-2 py-0.5 rounded text-white">
                              <SiNextdotjs className="text-xs mr-2" />
                              Next.js
                            </span>
                            <span class="flex items-center justify-center bg-[#3b7bc2] text-[10px] me-2 py-0.5 rounded text-white">
                              <BiLogoTypescript className="text-xs mr-2" />
                              Typescript
                            </span>
                            <span class="flex items-center justify-center bg-[#090e43] text-[10px] me-2 py-0.5 rounded text-white">
                              <TbSlashes className="text-xs mr-2" />
                              Shadcn
                            </span>
                            <span class="flex items-center justify-center bg-[#212733] text-[10px] me-2 py-0.5 rounded text-white">
                              <SiPrisma className="text-xs mr-2" />
                              Prisma
                            </span>
                            <span class="flex items-center justify-center bg-black text-[10px] me-2 py-0.5 rounded text-white">
                              <SiOpenai className="text-xs mr-2" />
                              OpenAI
                            </span>
                            <span class="flex items-center justify-center bg-zinc-400 text-[10px] me-2 py-0.5 rounded text-white">
                              <FcGoogle className="text-xs mr-2" />
                              Google auth
                            </span>
                            <span class="flex items-center justify-center bg-[#635bff] text-[10px] me-2 py-0.5 rounded text-white">
                              <BsStripe className="text-xs mr-2" />
                              Stripe
                            </span>
                            <span class="flex items-center justify-center bg-[#ff0000] text-[10px] me-2 py-0.5 rounded text-white">
                              <BsYoutube className="text-xs mr-2" />
                              YT api
                            </span>
                          </div>
                          <div className="flex justify-center items-center mt-6 gap-2">
                            <Link
                              href={"https://github.com/tonybbb2/AI_CourseGenerator"}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-700 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                                type="button"
                              >
                                Source code
                              </button>
                            </Link>
                            <button
                              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-700 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                              type="button"
                            >
                              Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6 lg:mb-0">
                      <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-zinc-800">
                        <div class="flex">
                          <div class="relative mx-4 -mt-4 w-full overflow-hidden rounded-xl bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <Image
                              className="rounded-xl hover:scale-150 transition duration-500 cursor-pointer object-cover"
                              src={backgroundImg2}
                              width={500}
                              height={200}
                              alt="/"
                            />
                          </div>
                        </div>
                        <div class="p-6 text-center">
                          <h5 class="mb-4 text-xl font-bold text-zinc-800 dark:text-white">
                            Full stack Netflix clone
                          </h5>
                          <p class="mb-6 text-zinc-500 dark:text-zinc-400">
                            This full stack Netlix clone is made for people to
                            understand how simple and efficient Netflix is
                            created.
                          </p>
                          <div className="flex grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-1 p-2">
                            <span class="flex items-center justify-center bg-[#67D4F2] text-[10px] me-2 py-0.5 rounded text-white">
                              <DiReact className="text-xs mr-2" />
                              React.js
                            </span>
                            <span class="flex items-center justify-center bg-orange-700 text-[10px] me-2 py-0.5 rounded text-white">
                              <SiFirebase className="text-xs mr-2" />
                              Firebase
                            </span>
                            <span class="flex items-center justify-center bg-orange-400 text-[10px] me-2 py-0.5 rounded text-white">
                              <SiAuthelia className="text-xs mr-2" />
                              Firebase auth
                            </span>
                            <span class="flex items-center justify-center bg-[#17B5D0] text-[10px] me-2 py-0.5 rounded text-white">
                              <BiLogoTailwindCss className="text-xs mr-2" />
                              Tailwind CSS
                            </span>
                            <span class="flex items-center justify-center bg-[#0D253F] text-[10px] me-2 py-0.5 rounded text-white">
                              <TbApi className="text-xs mr-2" />
                              theMovieStore
                            </span>
                          </div>
                          <div className="flex justify-center items-center mt-6 gap-2">
                            <Link
                              href={"https://github.com/tonybbb2/NetflixUI"}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-700 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                                type="button"
                              >
                                Source code
                              </button>
                            </Link>
                            <button
                              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-700 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                              type="button"
                            >
                              Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
