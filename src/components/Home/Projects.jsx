import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { URL } from '../../util/constants'
import { projects } from '../../util/data/projects.data'
import '../../styles/Home/Projects.css'

const Projects = () => {
  return (
    <section className='projects'>
      <div className='projects-header'>
        <p className='projects-title'>
          Recent <span className='txt-primary'>projects</span>
        </p>

        <Link to={`${URL}/projects`} className='projects-small'>
          View all projects
          <i className='fa-solid fa-right-long' />
        </Link>
      </div>

      <div className='project-cards'>
        {projects.slice(0, 3).map((p) => (
          <Card
            key={p.id}
            id={p.id}
            link={p.link}
            image={p.image}
            title={p.title}
            date={p.date}
            description={p.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
