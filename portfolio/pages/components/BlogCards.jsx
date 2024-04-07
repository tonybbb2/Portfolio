import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";

const BlogCards = ({ title, description, time, link, thumbnail, minuteRead, type }) => {
    return (
        <>
            <Link href={`/blog/${link}`}>
                <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-gray-700 flex flex-col transition duration-300 hover:scale-105">
                    <div className="flex justify-center w-full py-4">
                        {thumbnail ? (
                            <Image
                                className="rounded-lg"
                                src={thumbnail}
                                alt="test"
                                width={285}
                                height={200}
                                objectFit="contain"
                                quality={100}
                                layout="fixed"
                                unoptimized
                            />
                        ) : null}
                    </div>
                    <div aria-hidden="true" className="relative px-5 py-2 flex items-center text-sm font-medium text-red-600 hover:cursor-pointer">
                        <p>{type}</p>
                    </div>
                    <h5 className="text-lg px-5 py-1 font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <div className="px-5 mt-2">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-[75px] overflow-y-auto">
                            {description}
                        </p>
                        <div aria-hidden="true" className="mt-4 mb-4 flex items-center text-sm font-medium text-zinc-500">
                            <CiCalendar className="text-lg mr-1" /><p>{time}</p>
                            <BiTimeFive className="text-lg ml-2 mr-1" /><p>{minuteRead}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BlogCards;
