import React from 'react'
import { ProjectsItem } from './ProjectsItem'
import comingsoon from '../../public/hd-coming-soon-lettering-text-words-png-11639788427fzll9qzquc.png'

export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What ive built</h2>
        <div className='grid md:grid-cols-2 gap-8'>


          <ProjectsItem title='Coming Soon' backgroundImg={comingsoon} projectUrl='/comingsoon' />
          <ProjectsItem title='Coming Soon' backgroundImg={comingsoon} projectUrl='/comingsoon' />
          <ProjectsItem title='Coming Soon' backgroundImg={comingsoon} projectUrl='/comingsoon' />
          <ProjectsItem title='Coming Soon' backgroundImg={comingsoon} projectUrl='/comingsoon' />


        </div>
      </div>
    </div>
  )
}


