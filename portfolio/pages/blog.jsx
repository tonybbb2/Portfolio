import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import {NextLink, Link} from 'next/link'
import { postFilePaths, POSTS_PATH } from './lib/mdxUtils'



export default function blog({ posts }) {
    console.log(posts);
    return (
        <div>
            <h1>Blog</h1>
            {/* <div className='w-full'>
                {posts.map((post) => (
                    <Link key={post.filepath} href={`/blog/${post.filepath.replace(/\.mdx?$/, '')}`}>
                        {post.data.title}
                    </Link>
                ))}
            </div> */}
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