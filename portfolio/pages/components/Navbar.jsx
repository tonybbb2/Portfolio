import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineLanguage } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import profil from "../../public/PRpic.png";
import Switcher from "../components/Switcher";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [lang, setLang] = useState(false);
  const [showProfil, setShowProfil] = useState(false);
  const [shadow, setShadsow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [LinkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLang = () => {
    setLang(!lang);
  };

  useEffect(() => {
    if (router.asPath.match(/^\/(About|Blog|Skills|Contact|Thank-you|Work)(\/[^\/]+)?$/)) {
      setShowProfil(true);
    } else {
      setNavBg("#252529");
      setShowProfil(false);
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 50) {
        setShadsow(true);
      } else {
        setShadsow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    { path: '/Work', label: 'Work' },
    { path: '/Blog', label: 'Blog' },
    { path: '/Contact', label: 'Contact' },
  ];

  return (
    <div
      className={
        "animate-slidein900 opacity-0 relative flex justify-center w-full h-10 top-5 z-[100] gap-[10px]"
      }
    >
      <div className="md:flex md:justify-end md:flex-1 md:pr-32">
        <div
          className={
            showProfil
              ? "hidden sm:block h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 cursor-pointer"
              : "hidden"
          }
        >
          <Link className="pointer-events-auto" href="/">
            <Image src={profil} alt="/" className="rounded-full" />
          </Link>
        </div>
      </div>
      <div onClick={handleNav} className="flex justify-end md:hidden">
        <button
          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded="false"
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden justify-end md:justify-center rounded-full md:flex flex-1 bg-white dark:bg-[#252529] shadow-lg ring-1 ring-zinc-900/5">
        <nav>
          <ul className="flex rounded-full w-full h-full text-black dark:text-white font-semibold font-display text-md">
            {routes.map((route) => (
              <Link key={route.path} href={route.path}>
                <li className={`relative block px-4 py-2 transition ${router.pathname === route.path ? 'text-red-600' : 'text-black dark:text-white'
                  }`}>
                  <p className="hover:text-red-600">{route.label}</p>
                  {router.pathname === route.path && (
                    <span className="absolute inset-x-0 bottom-[-0.5px] h-[2.5px] bg-gradient-to-r from-red-500/0 via-red-600/40 to-red-600/0"></span>
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex justify-start md:flex-1 md:pl-32">
        <button
          type="button"
          aaria-label="Toggle dark mode"
          className="group rounded-full px-3 py-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20  ml-2"
        >
          <Switcher className="text-black dark:text-white" />
        </button>

      </div>
      <div
        className={
          nav
            ? "fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 md:hidden"
            : "hidden"
        }
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <button
            aria-label="Close menu"
            className="-m-1 p-1"
            type="button"
            data-headlessui-state="open"
            onClick={handleNav}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
            >
              <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokewidth-width="1.5"
                stroke-strokelinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
