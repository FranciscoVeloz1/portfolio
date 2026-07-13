import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useResumeData } from '@hooks/useResumeData'
import { ProjectCard } from '@components/home/ProjectCard'
import '@components/home/ProjectsPreview.css'

export const ProjectsPreview = () => {
  const { data } = useResumeData()
  const projects = data.projects.slice(0, 3)

  return (
    <section id='projects' className='section'>
      <div className='container'>
        <div className='projects-header'>
          <div>
            <span className='section-eyebrow'>Work</span>
            <h2 className='section-title'>
              Recent <span className='txt-primary'>projects</span>
            </h2>
          </div>

          <Link to='/projects' className='projects-view-all'>
            View all projects <ArrowRight size={16} aria-hidden='true' />
          </Link>
        </div>

        {projects.length > 0 ? (
          <div className='project-cards'>
            {projects.map((project) => {
              return <ProjectCard key={project.id} project={project} />
            })}
          </div>
        ) : (
          <p className='projects-empty'>No projects to show yet.</p>
        )}
      </div>
    </section>
  )
}
