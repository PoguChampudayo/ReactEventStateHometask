import React from 'react'

export const ProjectList = ({projects}) => {
  return (
    <div className="projects">
      {projects.map((project) => (
        <li key={project.img}>
          <img src={project.img} alt="something" className='projectImage'/>
        </li>
      ))}
    </div>
  )
}
