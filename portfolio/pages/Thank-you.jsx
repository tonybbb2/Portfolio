import React from "react";

const Thankyou = () => {
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
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Thankyou;
