import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Contact = () => {

    const [mailSent, setMailSent] = useState(false);
    const { register, handleSubmit, errors, reset } = useForm();

    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: '/api/contact',
            headers: {
                'Content-Type': 'application/json'
            },
            data: values,
        };

        try {
            const response = await axios(config)
            if (response.status === 200) {
                setMailSent(true);
                reset()
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (mailSent) {
            const timer = setTimeout(() => {
                setMailSent(false);
            }, 3000); // 3000 milliseconds = 3 seconds

            return () => clearTimeout(timer);
        }
    }, [mailSent]);

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
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                                        <div className='w-full h-[80%] border border-gray-200 dark:border-zinc-700 shadow bg-white dark:bg-zinc-800  rounded-xl'>
                                            <div className='p-6'>
                                                <Image src={'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=100&w=450&h=375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Contact preview image" className='rounded-xl' width={450} height={550} />
                                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                <div className='flex justify-around p-2 text-black dark:text-white'>
                                                    <FaXTwitter size={25} className="" />
                                                    <FaLinkedin size={25} className="" />
                                                    <FaGithub size={25} className="" />
                                                    <FaInstagram size={25} className="" />
                                                    <AiOutlineMail size={25} className="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='p-5'>
                                            <p className='text-3xl uppercase text-zinc-700 dark:text-white font-bold tracking-tight'>Let's get in touch 👋</p>
                                            <p className='text-md text-zinc-700 dark:text-zinc-500 tracking-tight'>I will usually hit you back within an hour.</p>
                                            <form onSubmit={handleSubmit(onSubmitForm)}>
                                                <div className='mt-12'>
                                                    <label class="block mb-2 text-sm font-semibold text-zinc-700 dark:text-white" for='name'>Name</label>
                                                    <input
                                                        type="Name"
                                                        placeholder="John Doe"
                                                        name="name"
                                                        aria-label="Enter your name"
                                                        {...register('name', { required: { value: true, message: 'Please enter your name' } })}
                                                        required
                                                        className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                                    ></input>
                                                </div>
                                                <div className='mt-6'>
                                                    <label class="block mb-2 text-sm font-semibold text-zinc-700 dark:text-white" for='email'>Email</label>
                                                    <input
                                                        type="Email"
                                                        placeholder="portfolio@gmail.com"
                                                        aria-label="Enter your email"
                                                        name='email'
                                                        {...register('email', { required: { value: true, message: 'Please enter your email' } })}
                                                        required
                                                        className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                                    ></input>
                                                </div>
                                                <div className='mt-6'>
                                                    <label class="block mb-2 text-sm font-semibold text-zinc-700 dark:text-white" for='telephone'>Phone</label>
                                                    <input
                                                        type="text"
                                                        placeholder="+1 (800) 123-4567"
                                                        name='telephone'
                                                        aria-label="Enter your phone number"
                                                        {...register('telephone', { required: { value: true, message: 'Please enter your phone number' } })}
                                                        required
                                                        className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                                    ></input>
                                                </div>
                                                <div className='mt-6'>
                                                    <label class="block mb-2 text-sm font-semibold text-zinc-700 dark:text-white" for='message'>Message</label>
                                                    <textarea
                                                        type="Message"
                                                        placeholder="Give me some of your feedback"
                                                        name='message'
                                                        aria-label="Enter a message"
                                                        {...register('message', {
                                                            required: { value: true, message: 'Please enter a message' }, maxLength: {
                                                                value: 500,
                                                                message: 'Please enter a message that is less than 500 characters'
                                                            }
                                                        })}
                                                        required
                                                        className="w-full h-28 appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                                    ></textarea >
                                                </div>
                                                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                                {mailSent &&
                                                    <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-zinc-700 dark:text-green-400" role="alert">
                                                        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                                        </svg>
                                                        <span className="sr-only">Info</span>
                                                        <div>
                                                            <span className="font-medium ml-2">Success!</span> the email has been sent.
                                                        </div>
                                                    </div>
                                                }
                                                <button class="w-full px-6 py-3 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-700 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                    Send message
                                                </button>
                                            </form>
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