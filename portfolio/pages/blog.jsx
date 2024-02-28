import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '/lib/mdxUtils.js'
import BlogCards from "./components/BlogCards"

export default function Blog({ posts }) {
  console.log(posts)
    return (
        <div id="Blog">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <header className='max-w-2xl'>
                  <p className=' text-md uppercase text-[#DA3028] font-display font-semibold'>blogs</p>
                  <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
                  Exploring modern trends and news in the technology sector through informative blogs
                  </h1>
                  <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                     All of my long-form thoughts on technology, programming, AI, and more, collected in chronological order.
                  </p>
                </header>
                <div className='mt-16 sm:mt-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full h-auto'>
                      {posts.map((post, index) => (
                          <BlogCards
                            key={index}
                            title={post.data.title}
                            time={post.data.time}
                            link={post.filepath.replace(".mdx", "")}
                            description={post.data.description}
                            thumbnail={post.data.image}
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

export function getStaticProps() {
    const posts = postFilePaths.map((filepath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filepath))
        const { content, data } = matter(source)

        return {
            content,
            data,
            filepath
        }
    })

    return { props : {posts}}
}

