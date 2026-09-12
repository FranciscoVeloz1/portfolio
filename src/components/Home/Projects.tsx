import Card from './Card'
import { Link } from 'react-router-dom'
import { URL } from '@util/constants'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Projects.css'

const Projects = () => {
  const { data } = useResumeData()
  const projects = data?.projects || []

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
        {projects.slice(0, 3).map((project) => {
          return (
            <Card
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              date={project.date}
              description={project.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
