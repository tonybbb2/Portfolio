import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import BlogCards from "./components/BlogCards"

export default function Blog({ posts }) {
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
                <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>Join me on my journey as I share my insights and experiences on web development, business, and content creation.</p>
                <p className='text-base text-zinc-600 dark:text-zinc-400'>
                  All of my long-form thoughts on technology, programming, AI, and more, collected in chronological order.
                </p>
                <div className="mt-10 flex justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    required
                    className="w-1/2 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                  ></input>
                  <button
                    className="inline-flex items-center justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                    type="submit"
                  >
                    Join
                  </button>
                </div>
              </header>
              <div className='mt-16 sm:mt-20'>
                <div className='flex justify-between'>
                  <h1 className='text-3xl font-bold font-display tracking-tight p-2 text-zinc-800 sm:text-4xl dark:text-zinc-100'>
                    Latest articles
                  </h1>
                  <div>	&nbsp;</div>
                  <div className='flex items-center'>
                    <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
                      <span class="text-md font-semibold text-black dark:text-white uppercase mr-2">All</span>
                      <svg class="h-4 w-4 text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </label>
                  </div>
                </div>
                <div className='grid grid-cols-1 py-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-auto'>
                  {posts
                    .slice(1, 7) // Create a shallow copy of the array to avoid mutating the original array
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
                <div class="flex justify-center items-center gap-20 mt-6">
                  <button
                    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                      aria-hidden="true" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                    Previous
                  </button>
                  <div class="flex items-center gap-10">
                    <button
                      class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button">
                      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        1
                      </span>
                    </button>
                    <button
                      class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button">
                      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        2
                      </span>
                    </button>
                  </div>
                  <button
                    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                      aria-hidden="true" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                  </button>
                </div>
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