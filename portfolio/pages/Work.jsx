import React from 'react'
import Image from 'next/image'
import backgroundImg from '/public/mockupVi.png'
import backgroundImg2 from '/public/browsermockup.png'

export default function Work() {


    return (
        <>
            <main className='flex-auto'>
                <div className='sm:px-8 mt-16 sm:mt-32'>
                    <div className='mx-auto w-full max-w-7xl lg:px-8'>
                        <div className='relative px-4 sm:px-8 lg:px-12'>
                            <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                                <header className='max-w-2xl'>
                                    <p className='text-red-600 text-sm font-semibold uppercase'>Projects</p>
                                    <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
                                        Things I’ve made trying to prove myself in this industry
                                    </h1>
                                    <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                                        I’ve worked on some personal and school projects over the years and these are the ones that I’m most proud of. Many of them are open-source, so if you see something that got your attention, check out the code and contribute if you have ideas for how it can be improved.
                                        Many new projects are on the way, I'm only getting started!
                                    </p>
                                </header>
                                <div className='mt-16 sm:mt-20 p-6'>
                                    <div className='grid md:grid-cols-2 gap-8'>
                                        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 inset-0 group hover:cursor-pointer '>
                                            <Image className='rounded-xl grayscale hover:grayscale-0 hover:scale-105 transition duration-500 cursor-pointer object-cover' src={backgroundImg} width={500} height={300} alt='/' />
                                            <div className='hidden w-1/2 h-auto text-center group-hover:block absolute top-[92%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-zinc-700 bg-gradient-to-t from-teal-500 to-teal-400'>
                                                <p className='text-white text-md font-semibold'>VI fitness application</p>
                                            </div>
                                        </div>
                                        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:cursor-pointer '>
                                            <Image className='rounded-xl grayscale hover:grayscale-0  hover:scale-105 transition duration-500 cursor-pointer object-cover' src={backgroundImg2} width={500} height={300} alt='/' />
                                            <div className='hidden w-1/2 h-auto text-center group-hover:block absolute top-[92%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-zinc-700 bg-gradient-to-t from-teal-500 to-teal-400'>
                                                <p className='text-white text-md font-semibold'>FullStack Netflix clone</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}