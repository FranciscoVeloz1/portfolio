import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useResumeData } from '@hooks/useResumeData'
import { useScrollToTop } from '@hooks/useScrollToTop'
import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { Video } from '@components/project/Video'
import { RouteError } from '@components/error/RouteError'
import '@pages/Projects/ProjectDetailPage.css'

const ProjectDetailPage = () => {
  useScrollToTop()

  const { id } = useParams()
  const { data } = useResumeData()
  const project = data.projects.find((item) => {
    return item.id === Number.parseInt(id ?? '', 10)
  })

  useDocumentTitle(project?.title)

  if (!project) {
    return <RouteError title='Project not found' message="This project doesn't exist or may have been removed." />
  }

  const descriptionParagraphs = project.description.split('.').filter((paragraph) => {
    return paragraph.trim() !== ''
  })

  return (
    <div className='container project-detail'>
      <Link to='/projects' className='project-back-link'>
        <ArrowLeft size={16} aria-hidden='true' /> Back to projects
      </Link>

      <div className='project-detail-header'>
        <p className='project-detail-date'>{project.date}</p>
        <h1 className='project-detail-title'>{project.title}</h1>
      </div>

      <div className='project-buttons'>
        {project.demo ? (
          <Button as='a' href={project.demo} target='_blank' rel='noreferrer'>
            <ExternalLink size={16} aria-hidden='true' /> Live demo
          </Button>
        ) : null}

        {project.git ? (
          <Button as='a' href={project.git} target='_blank' rel='noreferrer' variant='secondary'>
            Repository
          </Button>
        ) : null}
      </div>

      <div className='project-content'>
        {project.video ? <Video embedId={project.video} /> : null}

        <div className='project-description'>
          {descriptionParagraphs.map((paragraph) => {
            return <p key={paragraph}>{`${paragraph}.`}</p>
          })}
        </div>

        {project.badges.length > 0 ? (
          <div className='badge-container'>
            {project.badges.map((skill) => {
              return <Badge skill={skill} key={skill.id} />
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ProjectDetailPage
