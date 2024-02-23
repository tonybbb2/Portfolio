import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogsImage from '../../public/INT0.5.jpg'
import profil from "../../public/PRpic.png";

const BlogCards = ({ title, description, time, link}) => {
  return (
    <>
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700 flex flex-col transition duration-300 hover:scale-105">
            <div className="flex justify-between">
                <div className="flex px-5 py-4">
                    <div>
                        <Image
                        className="rounded-full max-w-none"
                        src={profil}
                        alt=""
                        width={35}
                        height={35}
                    />
                    </div>
                    <div className="flex flex-col ml-5 text-xs">
                        <div className="inline-block font-bold dark:text-white">Tony Bui</div>
                        <div className="text-slate-500 dark:text-slate-300 dark:text-slate-400">{time}</div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <Image
                    class="rounded-lg"
                    src={BlogsImage}
                    alt=""
                    width={275}
                    height={200}
                />
            </div>
            <h5 class="mt-2 text-lg px-6 py-2 font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <hr class="h-px mx-auto my-2 w-3/4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="px-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>    
                <Link href={`/blog/${link}`}>
                    <div aria-hidden="true" className="relative mt-4 mb-4 flex items-center text-sm font-medium text-sky-300 underline hover:cursor-pointer">Read full blog</div>    
                </Link>
            </div>
            
        </div>
    </>
  );
};

export default BlogCards;
