import Head from 'next/head';
import { MdOutlineWork } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';

export default function Resume() {
    return (
        <div>
            <Head>
                <title>Tony Bui - Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-chillblack'>
                <section className='min-h-screen  bg-chillblack '>
                    <h1 className="text-6xl py-6 p-12 text-amber-50">smtg.</h1>
                    <div className=" w-1/4 ml-12 mr-3 float-left backdrop-blur-xl bg-white/10 rounded-md hover:scale-105">
                        <h3 className='text-5xl p-3 ml-4'><MdOutlineWork className='inline-block text-amber-400 mr-2' /><p className='inline-block text-3xl font-semibold text-amber-200'>expériences</p></h3>
                        <ol class="ml-14 border-l border-amber-100">
                            <li class="mb-10 ml-8 mt-2 ">
                                <div class="absolute w-3 h-3 rounded-full mt-1.5 ml-0.5 left-12 border border-white dark:bg-amber-300"></div>
                                <time class="text-2xl font-semibold text-gray-900 dark:text-white hover:text-amber-200">Emballeur</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Metro</h3>
                                <p class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">décembre/2021—avril/2022</p>

                            </li>
                            <li class="mb-10 ml-8">
                                <div class="absolute w-3 h-3 rounded-full mt-1.5 ml-0.5 left-12 border border-white dark:bg-amber-300"></div>
                                <time class="text-2xl font-semibold text-gray-900 dark:text-white">Technicien piscine</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">PLPS pool inc</h3>
                                <p class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">mai/2021—aout/2021</p>

                            </li>
                            <li class="mb-10 ml-8">
                                <div class="absolute w-3 h-3 rounded-full mt-1.5 ml-0.5 left-12 border border-white dark:bg-amber-300"></div>
                                <time class="text-2xl font-semibold text-gray-900 dark:text-white">Commis étalagiste</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Jean-Coutu</h3>
                                <p class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">septembre/2019—mars/2021</p>

                            </li>
                            <li class="mb-8 ml-0">
                                <div class="absolute w-3 h-3 rounded-full mt-1.5 ml-0.5 left-12 border border-white dark:bg-amber-300"></div>
                                <time class="text-2xl font-semibold text-gray-900 dark:text-white">Réceptionniste</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Jenny Spa Nail's</h3>
                                <p class="text-xl font-normal text-gray-500 dark:text-gray-400">juin/2015—juillet/2017</p>
                            </li>

                        </ol>

                    </div>
                    <div className="overflow-hidden backdrop-blur-xl bg-white/10 w-1/2 rounded-md">
                        <h3 className='text-5xl p-3 ml-4'><FaCode className='inline-block text-amber-400 mr-4' /><p className='inline-block text-3xl font-semibold text-amber-200'>compétences programmation</p></h3>
                        <div className='ml-20 mt-2'>
                            <div class="mb-1 text-base font-medium dark:text-white">HTML</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-orange-500 w-full"></div>
                            </div>
                        </div>
                        <div className='ml-20'>
                            <div class="mb-1 text-base font-medium dark:text-white">CSS</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-cyan-600 w-full"></div>
                            </div>
                        </div>
                        <div className='ml-20'>
                            <div class="mb-1 text-base font-medium dark:text-white">JavaScript</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-yellow-300 w-full"></div>
                            </div>
                        </div>
                        <div className='ml-20'>
                            <div class="mb-1 text-base font-medium dark:text-white">React</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-cyan-700 w-2/3"></div>
                            </div>
                        </div>
                        <div className='ml-20'>
                            <div class="mb-1 text-base font-medium dark:text-white">Vue</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-green-600 w-3/5"></div>
                            </div>
                        </div>
                        <div className='ml-20'>
                            <div class="mb-1 text-base font-medium dark:text-white">Tailwind</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-sky-600 w-2/3"></div>
                            </div>
                        </div>
                        <div className='ml-20'>
                            <div class="mb-1 text-base font-medium dark:text-white">SQL</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-amber-200 w-full"></div>
                            </div>
                        </div>
                        <div className='ml-20'>
                            <div class="mb-1 text-base font-medium dark:text-white">Python/Java</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-red-600 w-3/5"></div>
                            </div>
                        </div>
                        <div className='ml-20 mb-8'>
                            <div class="mb-1 text-base font-medium dark:text-white">Git</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-red-500 w-3/4"></div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}