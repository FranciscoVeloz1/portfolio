import Card from './Card'
import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import { Link } from 'react-router-dom'
import { URL } from '@util/constants'
import useResumeData from '@hooks/useResumeData'
import '@styles/Home/Projects.css'

const Projects = () => {
  const { data, isLoading, isError } = useResumeData()

  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage />

  const { projects } = data

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
