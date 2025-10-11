import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Main = () => {

  // Import images dynamically as needed
  const images = {
    profil: require("../../public/PRpic.png"),
    interests05: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000&h=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    interests2: require("../../public/INT2.jpg"),
    interests3: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    interests4: require("../../public/INT00.jpg"),
    interests5: "https://images.unsplash.com/photo-1601588462060-470011bd9a18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Primaco: require("../../public/primacoLogo.png"),
    metro: require("../../public/metroLogo.jpg"),
    PLPS: require("../../public/PLPS.png"),
    jeancoutu: require("../../public/jeancoutu.png"),
    JennySpaNails: require("../../public/JennySpaNails.png"),
  };

  return (
    <>
      <div id="main" className="w-full h-screen">
        <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
        <div className="sm:px-8  order-last -mb-3 pt-3 h-[100px]">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
                <div className="animate-slidein300 opacity-0 relative">
                  <div className="absolute left-0 h-[75px] rounded-full bg-white/90  shadow-xl ring-4 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                    <Image
                      src={images.profil}
                      alt="/hero-image"
                      className="rounded-full"
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
          <div className="sm:px-8 mt-9 mx-auto w-full max-w-7xl lg:px-8 relative px-4">
            <div className="animate-slidein500 opacity-0 mx-auto max-w-2xl lg:max-w-5xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 font-display">
                <span className="text-[#DA3028]">TONY BUI</span>,
              </h1>
              <h1 className="animate-typing overflow-hidden whitespace-nowrap text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100 font-display">
                A Software Developer
              </h1>
              <p className="w-full md:w-3/4 mt-6 text-base tracking-wide text-zinc-600 dark:text-zinc-400">
                I'm Tony, a Montreal-based Software Developer passionate about coding. My expertise lies in creating responsive websites that seamlessly merge creativity with functionality. I specialize in both backend and frontend development, constantly delving into the expansive realms of computer science to enhance my skills and knowledge.
              </p>
              <div className="mt-6 flex gap-6 text-2xl text-zinc-700 dark:text-gray-400">
                {[
                  { href: 'https://twitter.com/tonydev35', icon : <FaXTwitter className="cursor-pointer" /> },
                  { href: 'https://www.linkedin.com/in/dev-tonybui/', icon: <FaLinkedin className="cursor-pointer" /> },
                  { href: 'https://github.com/tonybbb2', icon: <FaGithub className="cursor-pointer" /> },
                  { href: 'https://www.instagram.com/tooony____/', icon: <FaInstagram className="cursor-pointer" /> },
                  { href: '/Contact', icon: <AiOutlineMail className="cursor-pointer animate-bounce" /> },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    rel={link.href !== '/' ? "noopener noreferrer" : undefined}
                    target={link.href !== '/Contact' ? "_blank" : undefined}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="animate-slidein700 opacity-0 mt-20 sm:mt-24 w-full">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            {[images.interests5, images.interests2, images.interests05, images.interests3, images.interests4].map((interest, index) => (
              <div key={index} className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <Image
                  className={`absolute z-1 object-fill'}`}
                  layout="fill"
                  src={interest}
                  alt="/"
                />
                {index === 2 && <h1 className="absolute text-white z-0"></h1>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
