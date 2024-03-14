import React from 'react'

export const ProjectList = ({projects}) => {
  return (
    <div className="inline-card">
      {projects.map((project) => (
        <li key={project.img}>
          <img src={project.img} alt="something" />
        </li>
      ))}
    </div>
  )
}
