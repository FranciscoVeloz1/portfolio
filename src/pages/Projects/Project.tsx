import Video from '@components/Video'
import Badge from '@components/Badge'
import useScroll from '@hooks/useScroll'
import { splitParagraphs } from '@util/text'
import { Link, useParams } from 'react-router-dom'
import { URL } from '@util/constants'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Projects/Project.css'

const Project = () => {
  useScroll()
  const { id } = useParams()
  const { data } = useResumeData()
  const projects = data?.projects || []
  const projectId = Number.parseInt(id ?? '', 10)
  const project = projects.find((item) => {
    return item.id === projectId
  })

  if (!project) {
    return (
      <div className='project-not-found'>
        <h2 className='section-header section-header-center'>
          Project <span className='txt-accent'>not found</span>
        </h2>
        <p className='section-subtitle'>This project doesn&apos;t exist or was removed.</p>
        <Link to={`${URL}/projects`} className='btn btn-primary btn-md'>
          Back to projects
        </Link>
      </div>
    )
  }

  const descriptionParagraphs = splitParagraphs(project.description)

  let demoButton = null

  if (project.demo) {
    demoButton = (
      <a href={project.demo} className='btn btn-primary btn-md' target='_blank' rel='noreferrer'>
        <i className='fa-solid fa-play' aria-hidden='true' /> Live demo
      </a>
    )
  }

  let repositoryButton = null

  if (project.git) {
    repositoryButton = (
      <a href={project.git} className='btn btn-outline btn-md' target='_blank' rel='noreferrer'>
        <i className='fa-brands fa-github' aria-hidden='true' /> Repository
      </a>
    )
  }

  const hasActions = Boolean(demoButton) || Boolean(repositoryButton)

  return (
    <section className='page project-detail' aria-labelledby='project-title'>
      <div className='page-back'>
        <Link to={`${URL}/projects`} className='btn btn-ghost btn-sm'>
          <i className='fa-solid fa-arrow-left' aria-hidden='true' /> Back to projects
        </Link>
      </div>

      <p className='project-detail-date'>{project.date}</p>
      <h1 id='project-title' className='project-detail-title'>
        {project.title}
      </h1>

      {hasActions
        ? (
          <div className='project-actions'>
            {demoButton}
            {repositoryButton}
          </div>
          )
        : null}

      <div className='project-video'>
        <Video embedId={project.video} title={project.title} />
      </div>

      <div className='project-description'>
        {descriptionParagraphs.map((paragraph) => {
          return <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        })}
      </div>

      {project.badges.length > 0
        ? (
          <div className='project-badges'>
            {project.badges.map((skill) => {
              return <Badge skill={skill} key={skill.id} />
            })}
          </div>
          )
        : null}
    </section>
  )
}

export default Project
