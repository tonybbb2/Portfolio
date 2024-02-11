import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillGitlab } from 'react-icons/ai';
import { MdOutlineLanguage } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';
import profil from '../../public/PRpic.png'


export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadsow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [LinkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        if (
            router.asPath === '/Comics' ||
            router.asPath === '/Anime' ||
            router.asPath === '/Pokemon' ||
            router.asPath === '/Podcasts' ||
            router.asPath === '/Vi' ||
            router.asPath === '/Portfolio' ||
            router.asPath === '/Netflix'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }
        else {
            setNavBg('#252529')
            setLinkColor('#1f2937')
        }


    }, [router])


    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 50) {
                setShadsow(true)
            } else {
                setShadsow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div className={shadow ? 'fixed flex justify-center w-full h-10 top-5 z-[100] gap-[10px]' : 'relative flex justify-center w-full h-10 top-5 z-[100] gap-[10px]' }>
            <div className='hidden md:flex md:justify-end md:flex-1 md:pr-32'>
                <div class="hidden h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"><a aria-label="Home" class="pointer-events-auto" href="/"></a>
                    <Image src={profil} alt='/' className='rounded-full' />
                </div>
            </div>
            <div onClick={handleNav} className='flex justify-end md:hidden'>
                <button class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" type="button" aria-expanded="false">Menu<svg viewBox="0 0 8 6" aria-hidden="true" class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"><path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
            </div>
            <div style={{ backgroundColor: `${navBg}` }} className='hidden justify-end md:justify-center rounded-full md:flex flex-1'>
                <nav>
                    <ul className='flex rounded-full w-full h-full text-white font-semibold text-md'>
                        <Link href='/#main'>
                            <li className='relative block px-4 py-2 transition hover:text-red dark:hover:text-red-600'>About</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='relative block px-4 py-2 transition hover:text-red dark:hover:text-red-600'>Blog</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='relative block px-4 py-2 transition hover:text-red dark:hover:text-red-600'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='relative block px-4 py-2 transition hover:text-red dark:hover:text-red-600'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='relative block px-4 py-2 transition hover:text-red dark:hover:text-red-600'>Contact</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className='flex justify-start md:flex-1 md:pl-32'>
                <button type="button" aria-label="Choose your language" class="group rounded-full px-3 py-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                    <MdOutlineLanguage size={20} className='text-white' />
                </button>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80' : ''}>
                <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image src={profil} alt='/' width='90' height='75' />
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Construisons quelque chose ensemble!</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Accueil</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>À propos </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Compétences</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projets</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-red-500'>Connectez-vous avec moi!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <Link href='https://www.linkedin.com/in/tony-bui-383a52253/'><FaLinkedin /></Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <Link href='https://github.com/tonybbb2'><FaGithub /></Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <Link href='https://gitlab.com/Tony.Bui21'><AiFillGitlab /></Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <Link href='/#contact'><AiOutlineMail onClick={() => setNav(false)} /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar