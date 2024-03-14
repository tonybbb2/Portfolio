import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export const MainAbout = () => {
    return (
        <div>
            <div className="">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="">
                                <section class="mb-32 text-center px-10">
                                    <div class="">
                                        <div>
                                            <div class="grid items-center lg:grid-cols-2">
                                                <div class="">
                                                    <div
                                                        class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                                        <h2 class="text-3xl text-black dark:text-zinc-300 font-bold uppercase mb-4 tracking-tighter">
                                                            About me
                                                        </h2>
                                                        <hr className="h-px my-8 bg-red-600 border-0"></hr>
                                                        <div className="p-1">
                                                            <p className="text-justify text-md font-normal tracking-normal dark:text-zinc-400 text-black">I'm Tony, sharing my journey blending tech and physical pursuits—from gaming-inspired coding to a career in web development. Beyond screens, I've evolved from basketball to bodybuilding, and now I'm diving into Muay Thai and powerlifting, each pursuit shaping my growth and character.
                                                            </p>
                                                            <div className="flex justify-end">
                                                                <Link href={'/About'}>
                                                                    <div aria-hidden="true" className="relative z-10 mt-4 flex justify-center items-center text-sm font-medium text-red-500 gap-1 cursor-pointer underline ">
                                                                        Read more <MdOutlineKeyboardDoubleArrowRight />
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="md:mb-12 lg:mb-0 transition duration-300 ease-in-out hover:scale-105">
                                                    <img src="https://images.unsplash.com/photo-1645640505245-f23c8289b591?q=100&w=1000&h=850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        class="w-full rounded-lg shadow-lg dark:shadow-black/20 object-cover" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainAbout;
