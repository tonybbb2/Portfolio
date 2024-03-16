'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import fs from 'fs'
import matter from 'gray-matter'
import axios from 'axios';
import path from 'path'
import { useForm } from 'react-hook-form';
import BlogCards from "./components/BlogCards"

export default function Blog({ posts }) {

  const router = useRouter()

  const [blogsFilter, setBlogsFilter] = useState([]);
  const [filterOption, setfilterOption] = useState("All");
  const [displayedPosts, setDisplayedPosts] = useState(6); // Initial number of displayed posts
  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    let defaultPosts = posts;

    async function filter() {
      let filteredPosts = posts;
      if (filterOption !== "All") {
        filteredPosts = posts.filter((post) => post.data.type === filterOption);
      }

      setBlogsFilter(filteredPosts);
    }

    console.log(defaultPosts);
    setBlogsFilter(defaultPosts);
    filter();
    // Reset displayedPosts to 6 whenever filterOption changes
    setDisplayedPosts(6);
  }, [posts, filterOption]);

  const loadMorePosts = () => {
    // Increase the number of displayed posts to the length of the filtered posts array
    setDisplayedPosts(blogsFilter.length);
  };

  const loadLessPosts = () => {
    // Set the number of displayed posts back to 6
    setDisplayedPosts(6);
  };

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

  return (
    <div id="Blog">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className='w-full text-center'>
                <h1 className='text-4xl font-bold tracking-tight p-2 text-zinc-800 sm:text-5xl dark:text-zinc-100'>
                  Welcome to my <span className='underline underline-offset-8  decoration-4 decoration-red-600'>blog</span>
                </h1>
                <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>Join me on my journey as I share my insights and experiences on web development, programming, and more.</p>
                <p className='text-base text-zinc-600 dark:text-zinc-400'>
                  All of my long-form thoughts are collected in chronological order below.
                </p>
                <div className="mt-10 flex justify-center">
                  <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      aria-label="Enter your email"
                      name='email'
                      {...register('email', { required: { value: true, message: 'Please enter your email if you would like to join' } })}
                      required
                      className="w-1/2 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                    ></input>
                    <button
                      className="inline-flex items-center justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                      type="submit"
                    >
                      Join
                    </button>
                  </form>
                </div>
              </header>
              <div className='mt-16 sm:mt-20'>
                <div className='flex justify-between'>
                  <h1 className='text-3xl font-bold font-display tracking-tight p-2 text-zinc-800 sm:text-4xl dark:text-zinc-100'>
                    Latest articles
                  </h1>
                  <div>	&nbsp;</div>
                  <div className='flex items-center mt-4'>
                    <form class="w-38">
                      <select id="blogs" class="border  border-zinc-700 dark:bg-zinc-700 text-sm tracking-tight font-bold rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2 bg-transparent text-zinc-700 dark:text-white cursor-pointer" onChange={event => setfilterOption(event.target.value)}>
                        <option defaultValue="All">All</option>
                        <option value="Tutorials">Tutorials</option>
                        <option value="Web development">Web development</option>
                        <option value="Virtual reality">Virtual reality</option>
                        <option value="Artificial intelligence">Artificial intelligence</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className='grid grid-cols-1 py-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-auto'>
                  {blogsFilter
                    .slice(0, displayedPosts) // Create a shallow copy of the array to avoid mutating the original array
                    .sort((a, b) => {
                      // Convert date strings to Date objects
                      const getDate = (str) => new Date(str.replace(/(\d+)(st|nd|rd|th)/, "$1"));
                      const dateA = getDate(a.data.time);
                      const dateB = getDate(b.data.time);
                      // Compare dates
                      return dateB - dateA; // Sort in descending order
                    })
                    .map((post, index) => (
                      <BlogCards
                        key={index}
                        title={post.data.title}
                        time={post.data.time}
                        link={post.fileName.replace(".mdx", "")}
                        description={post.data.description}
                        thumbnail={post.data.previewImage}
                        type={post.data.type}
                        minuteRead={post.data.readingTime}
                      />
                    ))}
                </div>
                {/* Load more button */}
                {blogsFilter.length > 6 && displayedPosts < blogsFilter.length ? (
                  <div className="flex justify-center items-center gap-20 mt-6">
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                      type="button"
                      onClick={loadMorePosts}
                    >
                      Load more
                    </button>
                  </div>
                ) : null}
                {/* Load less button */}
                {displayedPosts > 6 ? (
                  <div className="flex justify-center items-center gap-20 mt-6">
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-white uppercase align-middle transition-all rounded-full select-none bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                      type="button"
                      onClick={loadLessPosts}
                    >
                      Load less
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const POSTS_DIR = path.join(process.cwd(), 'pages', 'posts');

export async function getStaticProps() {
  const postFileNames = fs.readdirSync(POSTS_DIR);
  const posts = postFileNames.map(fileName => {
    const fullPath = path.join(POSTS_DIR, fileName);
    const source = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(source);

    return {
      content,
      data,
      fileName, // You can use fileName instead of filepath if needed
    };
  });

  return {
    props: {
      posts,
    },
  };
}