import React from 'react'
import { ProjectsItem } from './ProjectsItem'
import comics from '../../public/comics.jpg'
import anime from '../../public/anime.jpg'
import pokemon from '../../public/pokemon.jpg'
import podcasts from '../../public/podcasts.jpg'

export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What ive built</h2>
        <div className='grid md:grid-cols-2 gap-8'>


          <ProjectsItem title='Comics Application' backgroundImg={comics} projectUrl='/Comics' />
          <ProjectsItem title='Anime Application' backgroundImg={anime} projectUrl='/Anime' />
          <ProjectsItem title='Pokemon Application' backgroundImg={pokemon} projectUrl='/Pokemon' />
          <ProjectsItem title='Podcasts Application' backgroundImg={podcasts} projectUrl='/Podcasts' />


        </div>
      </div>
    </div>
  )
}


