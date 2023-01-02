import React from 'react'
import ProjectsItem from './ProjectsItem'
import comics from '../public/comics.jpg'
import anime from './Anime.jpg'
import pokemon from './Pokemon.jpg'
import podcasts from './Podcasts.jpg'
import Vi from '../public/Vi.png'
import portfolio from '../public/portfolio.png'
import netflix from '../public/Netflix.png'

export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projets</p>
        <h2 className='py-4'>Ce que j'ai construis</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectsItem title='ViFitness mobile Application ' backgroundImg={Vi} projectUrl='/Vi' />
          <ProjectsItem title='NetflixUI clone' backgroundImg={netflix} projectUrl='/Netflix' />
          <ProjectsItem title='Comics Application' backgroundImg={comics} projectUrl='/Comics' />
          <ProjectsItem title='Anime Application' backgroundImg={anime} projectUrl='/Anime' />
          <ProjectsItem title='Podcasts Application' backgroundImg={podcasts} projectUrl='/Podcasts' />
          <ProjectsItem title='Pokemon Application' backgroundImg={pokemon} projectUrl='/Pokemon' />
          <ProjectsItem title='Mon site web (portfolio)' backgroundImg={portfolio} projectUrl='/Portfolio' />
        </div>
      </div>
    </div>
  )
}


export default Projects