import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import Image from "next/image";
import { MdWork, MdMarkEmailUnread } from "react-icons/md";
import { GiCloudDownload } from "react-icons/gi";
import Article from "./Article";

export const Recent = ({ posts }) => {

  const router = useRouter()
  const { register, handleSubmit, errors, reset } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: '/api/subscribe',
      headers: {
        'Content-Type': 'application/json'
      },
      data: values,
    };

    try {
      const response = await axios(config)
      if (response.status === 200) {
        reset()
        router.push('/Thank-you')
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  // Import images dynamically as needed
  const images = {
    Primaco: require("../../public/primacoLogo.png"),
    metro: require("../../public/metroLogo.jpg"),
    PLPS: require("../../public/PLPS.png"),
    jeancoutu: require("../../public/jeancoutu.png"),
    JennySpaNails: require("../../public/JennySpaNails.png"),
  };

  const experiences = [
    {
      company: "Primaco",
      role: "Web developer",
      date: "2023 ----- Present",
      image: images.Primaco,
    },
    {
      company: "Metro",
      role: "Cashier",
      date: "2021 ----- 2022",
      image: images.metro,
    },
    {
      company: "PLPS pools",
      role: "Pool technician",
      date: "2021 ----- 2021",
      image: images.PLPS,
    },
    {
      company: "Jean Coutu",
      role: "Floor clerk",
      date: "2019 ----- 2021",
      image: images.jeancoutu,
    },
    {
      company: "Jenny's spa nails",
      role: "Receptionist",
      date: "2015 ----- 2018",
      image: images.JennySpaNails,
    },
  ];

  return (
    <div>
      <div className="sm:px-8 mt-4 sm:mt-8 md:mt-14">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 mt-12 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16 ">
                  <h1 className="text-4xl font-display text-black dark:text-white uppercase ">
                    <span className="text-xs text-[#DA3028]">
                      Blogs
                    </span>
                    <br />
                    How I build my website
                  </h1>
                  {posts
                    .slice() // Create a shallow copy of the array to avoid mutating the original array
                    .sort((a, b) => {
                      // Convert date strings to Date objects
                      const getDate = (str) => new Date(str.replace(/(\d+)(st|nd|rd|th)/, "$1"));
                      const dateA = getDate(a.data.time);
                      const dateB = getDate(b.data.time);
                      // Compare dates
                      return dateA - dateB; // Sort in ascending order (oldest to newest)
                    })
                    .filter(article => article.data.type === "Web development") // Filter based on type
                    .slice(0, 3) // Select first three articles
                    .map((article, index) => (
                      <Article
                        key={index}
                        title={article.data.title}
                        description={article.data.description}
                        time={article.data.time}
                        url={article.fileName.replace(".mdx", "")}
                      />
                    ))}
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
                  <form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" onSubmit={handleSubmit(onSubmitForm)}>
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <MdMarkEmailUnread size={20} />
                      <span className="ml-3">Stay up to date</span>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Get notified when I publish something new, and unsubscribe
                      at any time.
                    </p>
                    <div className="mt-6 flex">
                      <input
                        type="email"
                        placeholder="Email address"
                        aria-label="Email address"
                        name='email'
                        {...register('email', { required: { value: true, message: 'Please enter your email if you would like to join' } })}
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
                      <MdWork size={20} />
                      <span className="ml-3">Experience</span>
                    </h2>
                    <div className="mt-6 space-y-4">
                      {experiences.map((experience, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                              src={experience.image}
                              alt={'experience image'}
                              className="rounded-full object-fill"
                            />
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {experience.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              {experience.role}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                              <time dateTime="2015">{experience.date}</time>
                            </dd>
                          </dl>
                        </div>
                      ))}
                    </div>
                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                      href="/TonyBui_CV.pdf"
                      download="TonyBui_CV"
                    >
                      Download CV <GiCloudDownload />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
