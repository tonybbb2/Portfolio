import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils'

export default function postPage({ source, frontMatter}) {
    return (
        <>
            <div className='w-full'>
                <h1>{frontMatter.title}</h1>
                <MDXRemote {...source} components={components} />
            </div>
        </>
    )
}

export const getStaticProps = async ({params}) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const {content, data} = matter(source)

    const mdxSource = await serialize(content, {
        mdxOptions : {
            remarkPlugins : [],
            rehypePlugins : [],
        },
        scope : data,
    })

    return {
        props : {
            source : mdxSource,
            frontMatter : data,
        }
    }
}

export const getStaticPaths = async () => {
    const paths = postFilePaths
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((slug) => ({ params : {slug}}))

    return {
        paths,
        fallback : false,
    }
}