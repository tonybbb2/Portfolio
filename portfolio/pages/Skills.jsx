import React from 'react'
import Image from 'next/image'
import { IoLogoHtml5 } from 'react-icons/io'
import { RiCss3Fill } from 'react-icons/ri';
import { TbBrandJavascript, TbBrandReactNative, TbBrandRedux, TbBrandKotlin } from 'react-icons/tb';
import { BiLogoTypescript, BiLogoJava  } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiBlazor, SiBulma, SiExpress, SiPhp, SiCodeigniter, SiCsharp, SiMongodb, SiSqlite, SiPrisma, SiFirebase, SiCplusplus  } from 'react-icons/si'
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { DiJqueryLogo, DiDotnet, DiMysql, DiPython   } from 'react-icons/di'
import imageJS from '/public/javascript-3.png'
import imageCSS from '/public/css-29-256.png'


export const Skills = () => {

    const frontEndSkills = [
        { name: "HTML5", icon: <IoLogoHtml5 className='text-5xl text-orange-500 w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-orange-500'},
        { name: "CSS3", icon: <Image src={imageCSS} className='text-5xl text-[#2299f8] w-[64px] h-[64px] ' />, hoverColor: 'hover:shadow-[#2299f8]'},
        { name: "JavaScript", icon: <Image src={imageJS} className='text-5xl text-[#f0dc55] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#f0dc55]'},
        { name: "TypeScript", icon: <BiLogoTypescript className='text-5xl text-[#2f74c0] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#2f74c0]'},
        { name: "jQuery", icon: <DiJqueryLogo className='text-5xl text-[#21ace2] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#21ace2]'},
        { name: "ReactJS", icon: <TbBrandReactNative className='text-5xl text-[#017fa5] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#017fa5]'},
        { name: "NextJS", icon: <SiNextdotjs className='text-5xl text-black w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-black'},
        { name: "VueJS", icon: <FaVuejs className='text-5xl text-[#47ba87] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#47ba87]'},
        { name: "Blazor .net", icon: <SiBlazor className='text-5xl text-[#5c2c91] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#5c2c91]'},
        { name: "Tailwind CSS", icon: <SiTailwindcss className='text-5xl text-[#1cc3bf] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#1cc3bf]'},
        { name: "Bootstrap CSS", icon: <SiBootstrap className='text-5xl text-[#563d7c] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#563d7c]'},
        { name: "Bulma", icon: <SiBulma className='text-5xl text-[#08d2b4] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#08d2b4]'},
        { name: "Redux", icon: <TbBrandRedux className='text-5xl text-[#7a50be] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#7a50be]'},
        { name: "Kotlin", icon: <TbBrandKotlin className='text-5xl text-[#e17565] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#e17565]'},
    ];

    const backEndSkills = [
        { name: "NodeJS", icon: <Image src={imageJS} className='text-5xl text-[#75ad63] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#75ad63]'},
        { name: "Express", icon: <SiExpress className='text-5xl text-black w-[64px] h-[64px]'/>, hoverColor: 'hover:shadow-black'},
        { name: "PHP", icon: <SiPhp  className='text-5xl text-[#787cb4] w-[64px] h-[64px]'/>, hoverColor: 'hover:shadow-[#787cb4]'},
        { name: "Codeigniter", icon: <SiCodeigniter className='text-5xl text-[#f14a2b] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#f14a2b]'},
        { name: "C#", icon: <SiCsharp className='text-5xl text-[#9843af] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#9843af]'},
        { name: "C++", icon: <SiCplusplus className='text-5xl text-[#659bd3] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#659bd3]'},
        { name: "ASP.NET Core", icon: <DiDotnet className='text-5xl text-[#0d8fc1] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#0d8fc1]'},
        { name: "MySQL", icon: <DiMysql  className='text-5xl text-[#e48c00] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#e48c00]'},
        { name: "MongoDB", icon: <SiMongodb className='text-5xl text-[#55ad47] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#55ad47]'},
        { name: "SQLite", icon: <SiSqlite className='text-5xl text-[#003a55] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#003a55]'},
        { name: "Prisma", icon: <SiPrisma className='text-5xl text-[#143a51] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#143a51]'},
        { name: "Firebase", icon: <SiFirebase className='text-5xl text-[#ffcc30] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#ffcc30]'},
        { name: "Python", icon: <DiPython className='text-5xl text-[#346c99] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#346c99]'},
        { name: "Java", icon: <BiLogoJava  ython className='text-5xl text-[#e00e0f] w-[64px] h-[64px]' />, hoverColor: 'hover:shadow-[#e00e0f]'},
    ]

    return (
        <>
            <div id="Skills">
                <div className="sm:px-8 mt-16 sm:mt-32">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <header className='max-w-2xl'>
                                    <p className=' text-md uppercase text-[#DA3028] font-display font-semibold'>Skills</p>
                                    <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
                                        Dive into my world of web wizardry
                                    </h1>
                                </header>
                                <div className='mt-16'>
                                    <h1 className='text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100'>
                                        FrontEnd
                                    </h1>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mt-4 '>
                                        {frontEndSkills.map(skill => (
                                            <div className={`p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  dark:border-gray-700 border-gray-200 ${skill.hoverColor}`}>
                                                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                                    <div className='m-auto'>
                                                        {skill.icon}
                                                    </div>
                                                    <div className='flex flex-col items-center justify-center text-black dark:text-gray-300'>
                                                        <h3>{skill.name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='mt-16'>
                                    <h1 className='text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100'>
                                        BackEnd
                                    </h1>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mt-4 '>
                                        {backEndSkills.map(skill => (
                                            <div className={`p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 dark:border-gray-700 border-gray-200 ${skill.hoverColor}`}>
                                                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                                    <div className='m-auto'>
                                                        {skill.icon}
                                                    </div>
                                                    <div className='flex flex-col items-center justify-center text-black dark:text-gray-300'>
                                                        <h3>{skill.name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Skills