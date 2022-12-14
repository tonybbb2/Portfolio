import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillGitlab } from 'react-icons/ai'
import Link from 'next/link'

export const Main = () => {
    return (
        <div id='main' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-xs text-red-400'>English version coming soon!</p>
                    <p className='uppercase text-sm tracking-widest text-gray-600 mt-6'>Construisons quelque chose ensemble!</p>

                    <h1 className='py-4 text-gray-700'>Salut, je suis <span className='text-[#5651e5]'>Tony</span></h1>
                    <h1 className='py-4 text-gray-700'>
                        Un futur développeur web
                    </h1>
                    <p className='py-4 text-gray-600'>
                        Je suis présentement un étudiant travailleur qui cherche à se perfectionner dans le domaine du développement web en tant que Stagiaire ou Développeur Web Junior.
                        Je suis prêt à utiliser mes compétences et
                        ma passion pour faire avancer la mission d'une entreprise.
                        Étant un expert en technologies, je suis capable de créer des sites web et des applications mobiles de qualité.

                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
                            <Link href='/#contact'><AiOutlineMail /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main