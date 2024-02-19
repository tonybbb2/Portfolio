import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import {NextLink, Link} from 'next/link'
import { postFilePaths, POSTS_PATH } from './lib/mdxUtils'
import Article from './components/Article'



export default function blog({ posts }) {
    console.log(posts);
    return (
        <div id="Blog">
        <div className="sm:px-8 mt-4 md:mt-6">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div className="flex flex-col gap-16">
                    <h1 className="text-4xl font-display text-black dark:text-white uppercase ">
                      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
                      <span className="text-xs text-[#DA3028]">
                        Technology
                      </span>
                      <br />
                        Blogs
                    </h1>
                    {posts.map((post, index) => (
                      <Article
                        key={index}
                        time={post.data.time}
                        title={post.data.title}
                        description={post.data.description}
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