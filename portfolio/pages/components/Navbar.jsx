import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MdOutlineLanguage } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';
import profil from '../../public/PRpic.png'


export const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [lang, setLang] = useState(false);
    const [shadow, setShadsow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [LinkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    const handleNav = () => {
        setNav(!nav);
    }

    const handleLang = () => {
        setLang(!lang);
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
        <div className={'relative flex justify-center w-full h-10 top-5 z-[100] gap-[10px]' }>
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
                <button type="button" aria-label="Choose your language" onClick={handleLang} class="group rounded-full px-3 py-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                    <MdOutlineLanguage size={20} className='text-white' />
                </button>
                <div id="dropdown-lang" class={lang ? "absolute w-[45px] top-12 z-10 bg-white rounded-lg ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20" : "hidden"}>
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" class="block py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FR</a>
                    </li>
                    <li>
                        <a href="#" class="block mx-auto py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">EN</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className={nav ? 'fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 md:hidden' : 'hidden'}>
                <div className='flex flex-row-reverse items-center justify-between'>
                    <button aria-label="Close menu" class="-m-1 p-1" type="button" data-headlessui-state="open" onClick={handleNav}><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-zinc-500 dark:text-zinc-400"><path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                    <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>Navigation</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar