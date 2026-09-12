import Card from './Card'
import { Link } from 'react-router-dom'
import { URL } from '@util/constants'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Projects.css'

const Projects = () => {
  const { data } = useResumeData()
  const projects = data?.projects || []

  return (
    <section id='projects' className='projects' aria-labelledby='projects-title'>
      <div className='section-header-row'>
        <h2 id='projects-title' className='section-header'>
          Recent <span className='txt-accent'>projects</span>
        </h2>

        <Link to={`${URL}/projects`} className='section-header-link'>
          View all projects
          <i className='fa-solid fa-arrow-right' aria-hidden='true' />
        </Link>
      </div>

      <div className='project-cards'>
        {projects.slice(0, 6).map((project) => {
          return (
            <Card
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              date={project.date}
              description={project.description}
              badges={project.badges}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
