import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@components/ui/Badge'
import type { Project } from '@models/resume'
import '@components/home/ProjectCard.css'

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.id}`} className='card card-interactive project-card'>
      <div className='project-card-media'>
        <img src={project.image} alt={project.title} loading='lazy' />
        <div className='project-card-overlay'>
          View project <ArrowUpRight size={16} aria-hidden='true' />
        </div>
      </div>

      <div className='project-card-content'>
        <p className='project-card-title'>{project.title}</p>
        <p className='project-card-date'>{project.date}</p>
        <p className='project-card-text'>{project.description.substring(0, 100)}...</p>

        {project.badges.length > 0 ? (
          <div className='project-card-tags'>
            {project.badges.slice(0, 3).map((skill) => {
              return <Badge skill={skill} key={skill.id} />
            })}
          </div>
        ) : null}
      </div>
    </Link>
  )
}
