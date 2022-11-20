import Head from 'next/head'
import { useEffect } from 'react';
import { GiAnimalSkull } from 'react-icons/gi'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillGitlab } from 'react-icons/ai'
import Image from 'next/image';
import Tony from '../public/IMG_3544.png';
import { BsPersonBoundingBox } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {

  function showtooltip() {
    document.getElementById("tooltip").classList.remove("hidden");
  }

  function hidetooltip() {
    document.getElementById("tooltip").classList.add("hidden");
  }

  return (
    <div>
      <Head>
        <title>Tony Bui - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-chillblack'>
        <section className='min-h-screen  bg-chillblack '>
          <nav className='py-7  flex justify-between bg-chillblack rounded-full px-1  ml-6 mr-6'>
            <GiAnimalSkull className='text-5xl ml-8 text-white' />
            <ul className='flex items-center mr-12 bg-chillblack animate-bounce cursor-pointer'>
              <Link href='/resume'>
              <div class="relative px-6 py-3 font-bold text-white rounded-lg group">
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-amber-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-amber-300 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span className="relative">Résumé</span>
              </div>
              </Link>

            </ul>
          </nav>
          <div className='p-10'>
            <div id='tooltip' class="max-w-sm p-8 left-32 top-12 bg-black border border-amber-200 rounded-2xl shadow-lg shadow-amber-500 dark:bg-amber-100 dark:border-gray-200  absolute hidden" >
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">A propos de moi</h5>
              <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-amber-500 dark:divide-black">
                <div class="flex flex-col pb-3 mt-6">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-black">Nationalité</dt>
                  <dd class="text-lg font-semibold">Vietnamienne</dd>
                </div>
                <div class="flex flex-col py-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-black">Date de naissance</dt>
                  <dd class="text-lg font-semibold">2003/05/02 - 19ans</dd>
                </div>
                <div class="flex flex-col pt-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-black">Passe-temps/Passion</dt>
                  <dd class="text-lg font-semibold">programmer, technologie(WEB3), bodybuilding ...</dd>
                </div>
              </dl>

            </div>
            <h2 className='text-7xl py-2 text-amber-300 font-medium text-center '><p className='content-center inline-block cursor-pointer underline underline-offset-8 animate-pulse' onMouseEnter={showtooltip} onMouseLeave={hidetooltip}>TONY BUI</p></h2>
            <h3 className='text-2xl py-2 text-amber-200 text-center'>Étudiant - Développements d'applications Web et Mobile</h3>
            <h6 className='text-1xl py-1   -indent-6 text-amber-100 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
          </div>
          <div className='text-5xl flex justify-center gap-14 py-3 text-white'>
            <AiFillLinkedin />
            <a href="https://twitter.com/AlchemyTown"><AiFillTwitterCircle /></a>
            <a href='https://github.com/tonybbb2'><AiFillGithub /></a>
            <a href='https://gitlab.com/Tony.Bui21'><AiFillGitlab /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-amber-400 rounded-full w-80 h-80 mt-20  overflow-hidden'>
            <Image src={Tony} layout='fill' objectFit='cover' />
          </div>
        </section>
      </main>
    </div>
  );
}
