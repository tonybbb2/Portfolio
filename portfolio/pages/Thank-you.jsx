import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { IoMdArrowBack } from "react-icons/io";

const Thankyou = () => {
    const router = useRouter();

    return (
        <>
            <main className="flex-auto h-[675px]">
                <div className="sm:px-8 mt-16 sm:mt-32">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <header className="max-w-2xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                                        Thanks for subscribing 😄
                                    </h1>
                                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                        I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, by sending me a quick email.
                                    </p>
                                </header>
                            </div>
                            <div className="flex justify-start px-10 mt-8 text-black dark:text-white">
                                <Link href={"/Blog"}>
                                    <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                                            onClick={() => router.back()}>
                                        <IoMdArrowBack />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Thankyou;
