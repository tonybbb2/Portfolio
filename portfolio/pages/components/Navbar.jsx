import React, {useState} from 'react'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';


export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src='/../../portfolio/public/IMG_3544.png' alt='/' width='100' height='80' />
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>

                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>

                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>

                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>

                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
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
                            <Image src='/../../portfolio/public/IMG_3544.png' alt='/' width='90' height='75' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's build something together!</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <li className='py-4 text-sm'>Home</li>
                            <li className='py-4 text-sm'>About</li>
                            <li className='py-4 text-sm'>Skills</li>
                            <li className='py-4 text-sm'>Projects</li>
                            <li className='py-4 text-sm'>Contact</li>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-red-500'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <FaLinkedinIn/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <FaGithub/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <AiOutlineMail/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                                    <BsFillPersonLinesFill/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;