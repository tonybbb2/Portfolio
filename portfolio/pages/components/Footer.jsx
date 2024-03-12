import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className='mt-32 flex-none '>
            <div className='sm:px-8'>
                <div className='mx-auto w-full max-w-7xl lg:px-8'>
                    <div className='border-t border-zinc-700/40 pb-16 pt-10'>
                        <div className='relative px-4 sm:px-8 lg:px-12'>
                            <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                                <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
                                    <div className='flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                                        <Link href='/About'><p className='transition hover:text-red-600 cursor-pointer'>Home</p></Link>
                                        <Link href='/About'><p className='transition hover:text-red-600 cursor-pointer'>About</p></Link>
                                        <Link href='/Work'><p className='transition hover:text-red-600 cursor-pointer'>Work</p></Link>
                                        <Link href='/Blog'><p className='transition hover:text-red-600 cursor-pointer'>Blog</p></Link>
                                        <Link href='/Contact'><p className='transition hover:text-red-600 cursor-pointer'>Contact</p></Link>
                                    </div>
                                    <p className='text-sm text-zinc-400 dark:text-zinc-500'>© 2024 Tony Bui. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer