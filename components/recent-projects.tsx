import React from 'react'
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data';

export const RecentProjects = () => {
  return (
    <div className='text-white py-20 flex flex-col justify-center items-center w-full'>
        <div className='text-4xl lg:text-6xl text-center font-bold'>
            <h1 className=' header '>
                A small selection of{" "}
            </h1>
            <span className=' text-purple-500'>
                Recent Projects
            </span>
        </div>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-16 mt-10'>
            {
                projects.map( (project, ind) => (
                    <ProjectCard 
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        githubLink={project.githubLink}
                        tech={project.tech}
                        key={`${project.title}-${ind}`}
                    />
                ) )
            }
        </div>
    </div>
  )
}
