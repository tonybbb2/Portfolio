import Head from 'next/head';
import { MdOutlineWork } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import Tony from '../public/IMG_3544.png';
import Image from 'next/image';
import { TbSeparator } from 'react-icons/tb'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { ImLocation } from 'react-icons/im'
import { TbFileDownload } from 'react-icons/tb'
import React from "react";
import { IoMdSchool } from 'react-icons/io'
import { GiSandsOfTime } from 'react-icons/gi'
import { RiStarSFill } from 'react-icons/ri'
import { AiFillCode } from 'react-icons/ai'
import { AiOutlineRead } from 'react-icons/ai'
import { CgGym } from 'react-icons/cg'
import { GiCook } from 'react-icons/gi'
import { GiGamepad } from 'react-icons/gi'
import {TbArrowBackUp} from 'react-icons/tb'
import Link from 'next/link';

export default function Resume() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <Head>
                <title>Tony Bui - Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-chillblack'>
                <section className='min-h-screen  bg-chillblack '>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center mt-14 align-bottom overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                                        {/*body*/}
                                        <div class=" px-4">
                                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-4">Contacte</h2>
                                            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Vous voulez entrer en contact avec moi ? Pas de probleme, écrivez moi un message ci-dessous et je vous reviendrais!</p>
                                            <form action="#" class="space-y-8">
                                                <div>
                                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                                                </div>
                                                <div>
                                                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet</label>
                                                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Comment puis-je me rendre a votre service?" required />
                                                </div>
                                                <div class="sm:col-span-2">
                                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
                                                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Laisser un message..."></textarea>
                                                </div>
                                                <div class="flex justify-end ">
                                                    <button type="submit" class="py-3 px-5 text-sm mb-5 font-medium text-right text-white rounded-lg bg-lime-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                                                </div>
                                            </form>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Fermer
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                    <div className=' flex justify-between py-6 p-12  text-amber-50'>

                        <div className='text-xl mt-4 font-serif'><Link href='/'><TbArrowBackUp className='inline-block text-xl ml-2 hover:scale-150 cursor-pointer'></TbArrowBackUp></Link>&nbsp;accueil</div>
                        <div className='text-6xl font-serif'>Résumé</div>
                        <div className='text-xl text-amber-100  mt-4'>
                            <p className='inline-block text-lg font-medium ml-2 text-white underline underline-offset-2 '>Curriculum vitae</p><a href="../public/" download="Tony.pdf" target="_blank"><TbFileDownload className='inline-block text-2xl ml-2 hover:scale-150 cursor-pointer'></TbFileDownload></a>
                        </div>

                    </div>
                    <div className=" w-1/6 ml-14 mr-3  float-left backdrop-blur-xl bg-white/10 rounded-md hover:scale-105">
                        <div className='relative mx-auto bg-gradient-to-b from-amber-400 rounded-full mt-10 tablet:w-20 tablet:h-20 laptop:w-40 laptop:h-40 desktop:w-60 desktop:h-60 overflow-hidden'>
                            <Image src={Tony} layout='fill' objectFit='cover' />
                        </div>
                        <h3 className='text-5xl text-center'><p className='text3xl font-semibold text-amber-300'>Tony Bui</p></h3>
                        <h3 className='text-xl text-center mt-1'><p className='font-semibold text-amber-100'>Futur full-stack développeur</p></h3>
                        <div className='text-center'>
                            <TbSeparator className='text-white text-7xl inline-block' />
                        </div>
                        <h3 className='text-3xl ml-4'><p className='font-semibold text-amber-200'>A propos de moi</p></h3>
                        <p className=' text-white mt-2 p-1 ml-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,d it e9aining Loredesktop publishing.</p>
                        <h3 className='text-3xl p-4'><p className='font-semibold text-amber-200'>Contact</p></h3>
                        <div className='text-xl mb-2 text-amber-100'>
                            <BsFillTelephoneFill className='inline-block text-2xl ml-4' /><p className='inline-block text-lg font-medium ml-4 text-white'>514 262-6304</p>
                        </div>
                        <div className='text-xl mb-2 text-amber-100'>
                            <MdOutlineAlternateEmail className='inline-block text-2xl ml-4' /><p className='inline-block text-lg font-medium ml-4 text-white'>bui.tony35@gmail.com</p>
                        </div>
                        <div className='text-xl mb-4 text-amber-100'>
                            <ImLocation className='inline-block text-2xl ml-4' /><p className='inline-block text-lg font-medium ml-4 text-white'>Montréal, Québec (Canada)</p>
                        </div>
                        <div className='text-xl mb-11  text-amber-100 text-center'>
                            <button
                                className="bg-amber-400 hover:bg-amber-600 text-white font-bold mt-4 py-2 px-4 border-b-4 border-amber-300 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500 rounded "
                                type="button"
                                onClick={() => setShowModal(true)}
                            >
                                Me contacter
                            </button>
                        </div>


                    </div>
                    <div className=" w-1/4 ml-4 mr-3 float-left backdrop-blur-xl bg-white/10 rounded-md hover:scale-105">
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
                            <li class="mb-8 ml-8">
                                <div class="absolute w-3 h-3 rounded-full mt-1.5 ml-0.5 left-12 border border-white dark:bg-amber-300"></div>
                                <time class="text-2xl font-semibold text-gray-900 dark:text-white">Réceptionniste</time>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Jenny Spa Nail's</h3>
                                <p class="text-xl font-normal text-gray-500 dark:text-gray-400">juin/2015—juillet/2017</p>
                            </li>

                        </ol>

                    </div>
                    <div className="overflow-hidden backdrop-blur-xl bg-white/10 w-1/2 rounded-md hover:scale-105">
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
                        <div className='ml-20 mb-9'>
                            <div class="mb-1 text-base font-medium dark:text-white">Git</div>
                            <div class="w-3/4 bg-orange-500 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-gray-600 h-2.5 rounded-full dark:bg-red-500 w-3/4"></div>
                            </div>
                        </div>

                    </div>
                    <div className="w-1/4 ml-4 mr-3 mt-4 float-left backdrop-blur-xl bg-white/10 rounded-md hover:scale-105">
                        <h3 className='text-5xl p-3 ml-4'><IoMdSchool className='inline-block text-amber-400 mr-2' /><p className='inline-block text-3xl font-semibold text-amber-200'>education</p></h3>
                        <ul class="mb-8 ml-10 space-y-4 text-left">
                            <li class="flex items-center space-x-3 mt-2 text-white font-semibold text-2xl">

                                <GiSandsOfTime className='text-amber-200' />
                                <span>Cégep de Maisonneuve</span>

                            </li>
                            <p className='text-gray-400 text-lg ml-12 '>Automne 2020 - présent</p>
                            <li class="flex items-center space-x-3 text-white font-semibold text-2xl">

                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Académie Michele-Provost </span>
                            </li>
                            <p className='text-gray-400 text-lg ml-12 '>Automne 2020 - présent</p>

                        </ul>
                    </div>
                    <div className="w-1/2 mr-3 mt-4 float-left backdrop-blur-xl bg-white/10 rounded-md hover:scale-105">
                        <h3 className='text-5xl p-3 ml-4'><RiStarSFill className='inline-block text-amber-400 mr-2' /><p className='inline-block text-3xl font-semibold text-amber-200'>intérets</p></h3>
                        <div className='text-8xl flex justify-center gap-12 py-8 mb-12 text-amber-200'>
                            <AiFillCode />
                            <AiOutlineRead />
                            <CgGym />
                            <GiCook />
                            <GiGamepad />
                        </div>
                    </div>
                </section>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </main>
        </div>
    );
}