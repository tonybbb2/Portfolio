import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import profil from "../../public/PRpic.png";
import interests05 from "../../public/INT0.5.jpg";
import interests2 from "../../public/INT2.jpg";
import interests3 from "../../public/INT3.jpg";
import interests4 from "../../public/INT4.jpg";
import interests5 from "../../public/INT5.jpg";

export const Main = () => {
  return (
    <div id="main" className="w-full h-screen">
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
      <div className="sm:px-8  order-last -mb-3 pt-3 h-[100px]">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
              <div className="relative">
                <div className="absolute left-0 h-[75px] rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                  <Image
                    src={profil}
                    alt="/"
                    className="rounded-full "
                    width={75}
                    height={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 font-display">
                  <span className="text-[#DA3028]">TONY BUI</span>,
                </h1>
                <h1 className="animate-typing overflow-hidden whitespace-nowrap text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100 font-display">
                  A junior web developper
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I'm Tony, a junior web developer based in Montreal, Canada.
                  With a deep passion for coding, I specialize in crafting
                  responsive websites that blend creativity with functionality,
                  while continuously exploring the diverse realms of computer
                  science to expand my knowledge and skills.
                </p>
                <div className="mt-6 flex gap-6 text-2xl text-gray-400">
                  <Link href="/">
                    <FaLinkedin />
                  </Link>
                  <Link href="/">
                    <FaGithub />
                  </Link>
                  <Link href="/">
                    <FaInstagram />
                  </Link>
                  <Link href="/">
                    <AiOutlineMail />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-14 w-full ">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image
              className="absolute z-1 object-fill"
              layout="fill"
              src={interests5}
              alt="/"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image
              className="absolute z-1 object-fill"
              layout="fill"
              src={interests2}
              alt="/"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image
              className="absolute z-1 object-none"
              layout="fill"
              src={interests05}
              alt="/"
            />
            <h1 className="absolute text-white z-0"></h1>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image
              className="absolute z-1 object-none"
              layout="fill"
              src={interests3}
              alt="/"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image
              className="absolute z-1 object-none"
              layout="fill"
              src={interests4}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
