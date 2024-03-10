import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { ProgressBar } from "../components/ProgressBar";
import { CiCalendar, CiShare1 } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { FaXTwitter } from "react-icons/fa6";
import { RiFileCopy2Line } from "react-icons/ri";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import profil from "../../public/PRpic.png";
import path from "path";
import { postFilePaths, POSTS_PATH } from "/lib/mdxUtils.js";
import { useRef } from "react";

const components = {};

export default function PostPage({ source, frontMatter }) {

  const mainRef = useRef(null);

  return (
    <>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl" ref={mainRef}>
              <ProgressBar target={mainRef}/>
              <div className="flex justify-start px-10 text-black dark:text-white">
                <Link href={"/Blog"}>
                  <IoMdArrowBack className="text-2xl" />
                </Link>
                <p className="text-md px-1">return</p>
              </div>
              <header className="mt-8 text-center">
                <span className="text-md font-semibold text-[#DA3028]">
                  {frontMatter.type}
                </span>
                <h1 className="w-full text-4xl font-bold tracking-tight p-2 text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  {frontMatter.title}
                </h1>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <p className="px-10 text-semibold">
                    {frontMatter.description}
                  </p>
                </div>
                <div className="flex justify-center mt-6 gap-2 text-center text-base text-zinc-600 dark:text-zinc-400">
                  <CiCalendar className="text-2xl" />
                  <p>{frontMatter.time}</p>
                  <BiTimeFive className="text-2xl ml-2" />
                  <p>{frontMatter.readingTime}</p>
                </div>
                <div className="flex justify-center mt-12 ">
                  <Image
                    src={frontMatter.previewImage}
                    width={785}
                    height={585}
                    className="rounded-3xl overflow-hidden"
                    objectFit="contain"
                    quality={100}
                    unoptimized
                  ></Image>
                </div>
                <div className="flex justify-around text-sm text-base text-zinc-600 dark:text-zinc-400 py-2">
                  <div className="flex justify-between">
                    <Link className="pointer-events-auto" href="/">
                      <Image
                        src={profil}
                        width={30}
                        height={30}
                        alt="/profil picture"
                        className="rounded-full"
                      />
                    </Link>
                    <p className="mt-1 ml-2">{frontMatter.time}</p>
                  </div>
                  <div>&nbsp;</div>
                  <div className="flex justify-between mt-1">
                    <CiShare1 className="text-2xl" />
                    <p className="ml-2">Share</p>
                  </div>
                </div>
              </header>
              <div className="grid grid-cols-2 md:grid-cols-5 mt-16">
                <div>&nbsp;</div>
                <div className="col-span-3">
                  <MDXRemote {...source} components={components} />
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <div className="flex justify-between">
                    <div className="text-xl text-red-600 font-bold mt-2">
                      <p>Share article</p>
                    </div>
                    <div>&nbsp;</div>
                    <div className="flex justify-center gap-2 mt-1 text-zinc-700 dark:text-white">
                      <button class="bg-transparent flex justify-center border-2 border-zinc-600 px-4 py-2  rounded-full text-sm">
                        <RiFileCopy2Line size={20} className="mr-2" /> Copy link
                      </button>
                      <FaLinkedin size={25} className="ml-2 mt-2" />
                      <FaInstagram size={25} className=" mt-2" />
                      <FaXTwitter size={25} className=" mt-2" />
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
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, "utf8");

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism, rehypeCodeTitles],
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
