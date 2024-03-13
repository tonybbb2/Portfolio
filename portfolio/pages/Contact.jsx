import React from 'react';
import Image from 'next/image';

const Contact = () => {

    return (
        <>
            <div id="Contact">
                <div className="sm:px-8 mt-16 sm:mt-32">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <header className='max-w-2xl'>
                                    <p className=' text-md uppercase text-[#DA3028] font-display font-semibold'>Contact</p>
                                    <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
                                        Get connected with me to grow better business.
                                    </h1>
                                </header>
                                <div className='mt-16 sm:mt-20'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div className='w-full h-full border border-gray-200 dark:border-zinc-700 shadow bg-white dark:bg-zinc-800  rounded-lg'>
                                            <div className='p-6'>
                                                <Image src={'https://media.istockphoto.com/id/1323765737/photo/close-up-of-a-businessman-using-a-laptop-computer-and-a-mobile-phone.jpg?b=1&s=170667a&w=0&k=20&c=xhxUuce47qfFXME0SyZH1B4rYtxLU2f9GWY5Y46ABhA='} className='rounded-xl' width={450} height={400}/>
                                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                            </div>
                                        </div>
                                        <div className='p-6'>
                                            <p className='text-2xl text-center uppercase text-zinc-700 dark:text-white font-bold tracking-tight'>Let's get in touch 👋</p>
                                            <form>
                                                <div className='mt-12'>
                                                    <label class="block mb-2 text-sm font-semibold text-zinc-700 dark:text-white">Name</label>
                                                    <input
                                                        type="Name"
                                                        placeholder="John Doe"
                                                        aria-label="Enter your name"
                                                        required
                                                        className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                                    ></input>
                                                </div>
                                                <div className='mt-6'>
                                                    <label class="block mb-2 text-sm font-semibold text-zinc-700 dark:text-white">Email</label>
                                                    <input
                                                        type="Email"
                                                        placeholder="Portfolio@gmail.com"
                                                        aria-label="Enter your email"
                                                        required
                                                        className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                                    ></input>
                                                </div>
                                                <div className='mt-6'>
                                                    <label class="block mb-2 text-sm font-semibold text-zinc-700 dark:text-white">Phone</label>
                                                    <input
                                                        type="Phone"
                                                        placeholder="+1 (800) 123-4567"
                                                        aria-label="Enter your phone number"
                                                        required
                                                        className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                                    ></input>
                                                </div>
                                                <div className='mt-6'>
                                                    <label class="block mb-2 text-sm font-semibold text-zinc-700 dark:text-white">Message</label>
                                                    <textarea
                                                        type="Message"
                                                        placeholder="Give me some of your feedback"
                                                        aria-label="Enter a message"
                                                        required
                                                        className="w-full h-28 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                                    ></textarea >
                                                </div>
                                            </form>
                                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                            <button class="w-full px-6 py-3 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-700 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                Send message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;