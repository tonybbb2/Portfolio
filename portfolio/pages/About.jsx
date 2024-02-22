import React from "react";
import Image from "next/image";
import gymAbout from "../public/aboutGym.jpg";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <main className="flex-auto">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <Image
                    src={gymAbout}
                    width={800}
                    height={800}
                    className="aspect-square rotate-3 rounded-4xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  ></Image>
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-display font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  I’m <span className="text-[#DA3028]">Tony Bui</span>. I live
                  in Montreal City, where I work as a Web Developper.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    Growing up, I was always fascinated by technology,
                    especially video games. But I never thought I'd be into
                    coding until I built my first PC. It was a significant
                    turning point for me—I suddenly knew I wanted to study
                    computer science. After three years of college, I graduated
                    in 2023 and landed a job as a web developer.
                  </p>
                  <p>
                    Aside from my tech adventures, I used to dream of becoming a
                    professional athlete. I played basketball throughout high
                    school, but my height and the pandemic threw some obstacles
                    my way. So, I shifted gears and discovered a new passion:
                    bodybuilding. For the past two years, hitting the gym has
                    been my happy place. It's like sculpting my own character in
                    a game, but in real life. Taking care of my body has become
                    a big part of my routine—work, eat, and gym sessions.
                  </p>
                  <p>
                    In addition to bodybuilding, I have ambitious plans to dive
                    into the world of Muay Thai. I'm eager to dedicate myself to
                    rigorous training, honing my skills with the aim of one day
                    journeying to Thailand to train alongside the sport's
                    finest. It's a dream I'm unwaveringly committed to
                    realizing. As I look forward, I'm thrilled to embark on my
                    newfound passion for powerlifting, with competing in
                    powerlifting competitions as a primary goal.
                  </p>
                  <p>
                    By pursuing both powerlifting and Muay Thai, I'm
                    continuously shaping and strengthening not just my body, but
                    also my character. Each challenge I undertake is an
                    opportunity for growth, and I eagerly anticipate the journey
                    ahead.
                  </p>
                </div>
              </div>
              <div className="lg:pl-20">
                <ul role="list">
                  <li className="flex">
                    <FaXTwitter size={22} className="text-zinc-700" />
                    <Link href="/">
                      <span className="ml-4 text-zinc-900 dark:text-white font-display hover:text-red-600 dark:hover:text-red-600 ">
                        Follow on X
                      </span>
                    </Link>
                  </li>
                  <li className="mt-4 flex">
                    <FaLinkedin size={22} className="text-zinc-700" />
                    <Link href="https://www.linkedin.com/in/dev-tonybui/">
                      <span className="ml-4 text-zinc-900 dark:text-white font-display hover:text-red-600 dark:hover:text-red-600 ">
                        Follow on LinkedIn
                      </span>
                    </Link>
                  </li>
                  <li className="mt-4 flex">
                    <FaGithub size={22} className="text-zinc-700" />
                    <Link href="https://github.com/tonybbb2">
                      <span className="ml-4 text-zinc-900 dark:text-white font-display hover:text-red-600 dark:hover:text-red-600">
                        Follow on Github
                      </span>
                    </Link>
                  </li>
                  <li className="mt-4 flex">
                    <FaInstagram size={22} className="text-zinc-700" />
                    <Link href="https://www.instagram.com/tooony____/">
                      <span className="ml-4 text-zinc-900 dark:text-white font-display hover:text-red-600 dark:hover:text-red-600">
                        Follow on Instagram
                      </span>
                    </Link>
                  </li>
                  <li className="mt-8 border-t pt-8 border-zinc-700/40 flex">
                    <AiOutlineMail size={22} className="text-zinc-700" />
                    <Link href="/">
                      <span className="ml-4 text-zinc-900 dark:text-white font-display hover:text-red-600 dark:hover:text-red-600">
                        Bui.tony35@gmail.com
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
