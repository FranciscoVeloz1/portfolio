import useScroll from '@hooks/useScroll'
import Card from '@components/Home/Card'
import { Link } from 'react-router-dom'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Projects.css'

const Projects = () => {
  useScroll()
  const { data } = useResumeData()
  const projects = data?.projects || []
  const profile = data?.profile

  return (
    <section className='page projects-page' aria-labelledby='projects-page-title'>
      <div className='container'>
        <div className='page-back'>
          <Link to='/' className='btn btn-ghost btn-sm'>
            <i className='fa-solid fa-arrow-left' aria-hidden='true' /> Back home
          </Link>
        </div>

        <h1 id='projects-page-title' className='page-title'>
          {profile?.firstName || 'Francisco'}&apos;s <span className='txt-accent'>projects</span>
        </h1>
        <p className='page-subtitle'>All {projects.length} projects — code, demos, and write-ups.</p>

        <div className='project-cards'>
          {projects.map((project) => {
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
      </div>
    </section>
  )
}

export default Projects
