import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Link from "next/link";
import profil from "../../public/PRpic.png";
import interests05 from "../../public/INT0.5.jpg";
import interests2 from "../../public/INT2.jpg";
import interests3 from "../../public/INT3.jpg";
import interests4 from "../../public/INT4.jpg";
import interests5 from "../../public/INT5.jpg";
import Article from "./Article";
import Primaco from "../../public/primacoLogo.png";
import PLPS from "../../public/PLPS.png";
import JennySpaNails from "../../public/JennySpaNails.png";

export const Main = () => {
  const [news, setNews] = useState([]);

  const newsAPI = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=Technology&from=2024-02-01&sortBy=popularity&apiKey=522437cc2f7e4cdaa4038cc4689b2b70`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      // Check if articles are available
      if (data.articles && data.articles.length > 0) {
        // Get the top 3 articles
        const top3Articles = data.articles.slice(0, 2);
        setNews(top3Articles);
      } else {
        console.log("No articles found.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newsAPI();
    console.log(news);
  }, []);

  return (
    <>
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
                    responsive websites that blend creativity with
                    functionality, while continuously exploring the diverse
                    realms of computer science to expand my knowledge and
                    skills.
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
        <div className="mt-20 sm:mt-24 w-full">
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
                className="absolute z-1 object-fill md:object-none"
                layout="fill"
                src={interests05}
                alt="/"
              />
              <h1 className="absolute text-white z-0"></h1>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
              <Image
                className="absolute z-1 object-fill md:object-none"
                layout="fill"
                src={interests3}
                alt="/"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
              <Image
                className="absolute z-1 object-fill"
                layout="fill"
                src={interests4}
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
        <div id="Blog">
          <div className="sm:px-8 mt-24 md:mt-28">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                      <h1 className="text-4xl font-display text-white uppercase ">
                        <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
                        <span className="text-xs text-[#DA3028]">
                          Read my blogs!
                        </span>
                        <br />
                        Featured blogs
                      </h1>
                      {news.map((article, index) => (
                        <Article
                          key={index}
                          title={article.title}
                          description={article.description}
                          time={article.publishedAt}
                        />
                      ))}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
                      <form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          <span className="ml-3">Stay up to date</span>
                        </h2>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          Get notified when I publish something new, and
                          unsubscribe at any time.
                        </p>
                        <div className="mt-6 flex">
                          <input
                            type="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            required
                            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                          ></input>
                          <button
                            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                            type="submit"
                          >
                            Join
                          </button>
                        </div>
                      </form>
                      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          <span className="ml-3">Experience</span>
                        </h2>
                        <ol className="mt-6 space-y-4">
                          <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <Image
                                src={Primaco}
                                className="rounded-full object-fill"
                              ></Image>
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                              <dt className="sr-only">Company</dt>
                              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Primaco
                              </dd>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                Junior web developper
                              </dd>
                              <dt className="sr-only">Date</dt>
                              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                                <time dateTime="2023">2023</time>
                                <span aria-hidden="true"> ----- </span>
                                <time dateTime="2024">Present</time>
                              </dd>
                            </dl>
                          </li>
                          <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <Image
                                src={PLPS}
                                className="rounded-full object-fill"
                              ></Image>
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                              <dt className="sr-only">Company</dt>
                              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                PLPS pools
                              </dd>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                Pool technician
                              </dd>
                              <dt className="sr-only">Date</dt>
                              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                                <time dateTime="2022">2022</time>
                                <span aria-hidden="true"> ----- </span>
                                <time dateTime="2022">2022</time>
                              </dd>
                            </dl>
                          </li>
                          <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <Image
                                src={JennySpaNails}
                                className="rounded-full object-fill"
                              ></Image>
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                              <dt className="sr-only">Company</dt>
                              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Jenny's spa nails
                              </dd>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                Receptionist
                              </dd>
                              <dt className="sr-only">Date</dt>
                              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                                <time dateTime="2015">2015</time>
                                <span aria-hidden="true"> ----- </span>
                                <time dateTime="2018">2018</time>
                              </dd>
                            </dl>
                          </li>
                          <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <Image
                                src={JennySpaNails}
                                className="rounded-full object-fill"
                              ></Image>
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                              <dt className="sr-only">Company</dt>
                              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Primaco
                              </dd>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                Junior web developper
                              </dd>
                              <dt className="sr-only">Date</dt>
                              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                                <time dateTime="2023">2023</time>
                                <span aria-hidden="true"> ----- </span>
                                <time dateTime="2024">Present</time>
                              </dd>
                            </dl>
                          </li>
                          <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <Image
                                src={JennySpaNails}
                                className="rounded-full object-fill"
                              ></Image>
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                              <dt className="sr-only">Company</dt>
                              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Primaco
                              </dd>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                Junior web developper
                              </dd>
                              <dt className="sr-only">Date</dt>
                              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                                <time dateTime="2023">2023</time>
                                <span aria-hidden="true"> ----- </span>
                                <time dateTime="2024">Present</time>
                              </dd>
                            </dl>
                          </li>
                        </ol>
                        <a
                          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                          href=""
                        >
                          Download CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
