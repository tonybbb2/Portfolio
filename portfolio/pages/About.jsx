import React from "react";
import Image from "next/image";
import gymAbout from "../public/aboutGym.jpg";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  const socialLinksData = [
    {
      Icon: FaXTwitter,
      href: "https://twitter.com/tonydev35",
      text: "Follow on Twitter",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/dev-tonybui/",
      text: "Follow on LinkedIn",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/tonybbb2",
      text: "Follow on Github",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/tooony____/",
      text: "Follow on Instagram",
    },
  ];

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
                    alt="gym picture"
                    className="aspect-square rotate-3 rounded-4xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  ></Image>
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-display font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  I’m <span className="text-[#DA3028]">Tony Bui</span>. I live
                  in Montreal City, where I work as a Software Developer.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    Growing up, I was always fascinated by technology,
                    especially video games. However, I never thought I'd be into
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
                    In addition to bodybuilding, I'm excited to immerse myself
                    in the world of Muay Thai. I'm eager to dedicate myself to
                    intense training, focusing on improving my skills with the
                    ultimate goal of training alongside the sport's top athletes
                    in Thailand. This is a dream I'm fully committed to
                    achieving. Looking ahead, I plan to compete in Muay Thai
                    tournaments within the next 1-2 years.
                  </p>
                  <p>
                    By dedicating myself to both bodybuilding and Muay Thai, I'm
                    not only sculpting my physique but also fortifying my
                    character. Every challenge I embrace becomes a catalyst for
                    personal growth. Regardless of where my career path leads,
                    the discipline and resilience developed through my physical
                    pursuits will undoubtedly translate into every aspect of my
                    life, including coding.
                  </p>
                  <p>
                    oh and I am also a big fan of cars 
                    but we can keep this subject for our next meeting 😄
                  </p>
                </div>
              </div>
              <div className="lg:pl-20">
                <ul role="list">
                  {socialLinksData.map(({ Icon, href, text }, index) => (
                    <li key={index} className="flex mt-5">
                      <Icon size={22} className="text-zinc-700" />
                      <Link
                        href={href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="ml-4 text-zinc-900 dark:text-white font-display hover:text-red-600 dark:hover:text-red-600">
                          {text}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li className="mt-8 border-t pt-8 border-zinc-700/40 flex">
                    <AiOutlineMail size={22} className="text-zinc-700" />
                    <Link href="mailto:'Bui.tony35@gmail.com'">
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
