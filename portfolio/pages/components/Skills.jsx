import React from 'react'
import { IoLogoHtml5 } from 'react-icons/io'
import { RiCss3Fill } from 'react-icons/ri';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa'
import { IoLogoVue } from 'react-icons/io5'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { SiTailwindcss } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import {TbBrandKotlin} from 'react-icons/tb'
import {TbBrandReactNative} from 'react-icons/tb'
import {SiBulma} from 'react-icons/si'
import {DiPython} from 'react-icons/di' 

export const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            {/* <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Compétences</p>
                <h2 className='py-4'>Ce que je peux faire</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <IoLogoHtml5 className='text-5xl text-orange-500 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <RiCss3Fill className='text-5xl text-blue-500 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <TbBrandJavascript className='text-5x text-yellow-400 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <FaReact className='text-5x text-cyan-500 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <IoLogoVue className='text-5xl text-green-600 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Vue</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <AiOutlineConsoleSql className='text-5xl text-black w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <DiPython className='text-5xl w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiTailwindcss className='text-5x text-cyan-600 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiBulma className='text-5xl text-green-300 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Bulma</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <TbBrandKotlin className='text-5 text-fuchsia-700 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Kotlin</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <TbBrandReactNative className='text-5 text-cyan-500 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React Native</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <SiFirebase className='text-5xl text-orange-300 w-[64px] h-[64px]' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Skills