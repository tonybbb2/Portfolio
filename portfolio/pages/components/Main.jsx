import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillGitlab } from 'react-icons/ai'
import Link from 'next/link'
import profil from '../../public/PRpic.png'

export const Main = () => {
    return (
        <div id='main' className='w-full h-screen'>
            <div className='sm:px-8  order-last -mb-3 pt-3'>
                <div className='relative px-4 sm:px-8 lg:px-12'>
                    <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                        <div className='top-[var(--avatar-top,theme(spacing.3))] w-full'>
                            <div className='relative'>
                                <div className='absolute left-0 h-[75px] rounded-full top-[100px] bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'>
                                    <Image src={profil} alt='/' className='rounded-full ' width={75} height={75}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main