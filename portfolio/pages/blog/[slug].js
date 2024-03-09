import fs from 'fs';
import matter from 'gray-matter'
import Image from 'next/image';
import { CiCalendar } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '/lib/mdxUtils.js'

const components = {

}

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <div className='sm:px-8 mt-16 sm:mt-32'>
        <div className='mx-auto w-full max-w-7xl lg:px-8'>
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className='text-center'>
                <span className="text-md font-semibold text-[#DA3028]">
                  {frontMatter.type}
                </span>
                <h1 className='w-full text-4xl font-bold tracking-tight p-2 text-zinc-800 sm:text-5xl dark:text-zinc-100'>
                  {frontMatter.title}
                </h1>
                <div className='mt-4 text-center text-zinc-600 dark:text-zinc-400'>
                  <p className='px-10 text-semibold'>{frontMatter.description}</p>
                </div>
                <div className='flex justify-center mt-6 gap-2 text-center text-base text-zinc-600 dark:text-zinc-400'>
                  <CiCalendar className="text-2xl" /><p>{frontMatter.time}</p>
                  <BiTimeFive className="text-2xl ml-2" /><p>{frontMatter.readingTime}</p>
                </div>
                <div className='flex justify-center mt-12 '>
                  <Image src={frontMatter.previewImage} width={785} height={585} className='rounded-3xl overflow-hidden' objectFit="contain" quality={100} unoptimized></Image>
                </div>
              </header>
              
            </div>
          </div>
        </div>
      </div>
      <MDXRemote {...source} components={components} />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf8');

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: postFilePaths,
    fallback: false,
  };
};