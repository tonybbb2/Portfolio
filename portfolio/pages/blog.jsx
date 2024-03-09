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
                    <div className='grid grid-cols-1 py-8  sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-auto'>
                      {posts.map((post, index) => (
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