import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillGitlab } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import profil from '../../public/IMG_3544.png'

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
            router.asPath === '/Portfolio'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }
        else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }


    }, [router])


    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 70) {
                setShadsow(true)
            } else {
                setShadsow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div style={{ backgroundColor: `${navBg}` }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src={profil} alt='/' width='100' height='80' />
                <div>
                    <ul style={{ color: `${LinkColor}` }} className='hidden md:flex'>
                        <Link href='/#main'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Accueil</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>À propos</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Compétences</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projets</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                        <a href='../../public/mycv.pdf' download>
                            <li className='ml-10 text-sm uppercase hover:border-b'>CV</li>
                        </a>

                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80' : ''}>
                <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image src='/../../portfolio/public/IMG_3544.png' alt='/' width='90' height='75' />
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