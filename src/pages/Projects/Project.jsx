import Video from '@components/Video'
import Badge from '@components/Badge'
import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import useScroll from '@hooks/useScroll'
import { useParams } from 'react-router-dom'
import useResumeData from '@hooks/useResumeData'
import { resolveSkills } from '@util/resolveSkills'
import '@styles/Projects/Project.css'

const Project = () => {
  useScroll()
  const { id } = useParams()
  const { data, isLoading, isError } = useResumeData()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <ErrorMessage />
  }

  const project = data.projects.find((p) => p.id === parseInt(id))

  if (!project) {
    return <ErrorMessage message='Project not found.' />
  }

  const tags = resolveSkills(project.badges, data.skills)

  return (
    <>
      <p className='project-small'>{project.date}</p>
      <p className='project-title'>{project.title}</p>

      <div className='project-buttons'>
        {project.demo
          ? (
            <a href={project.demo} className='project-button btn-dark-primary' target='_blank' rel='noreferrer'>
              <i className='fa-solid fa-play' /> Live demo
            </a>
            )
          : null}

        {project.git
          ? (
            <a href={project.git} className='project-button btn-secondary' target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-github' /> Repository
            </a>
            )
          : null}
      </div>

      <div className='project-content'>
        {project.video ? <Video embedId={project.video} /> : null}

        <div className='project-description'>
          {project.description
            .split('.')
            .filter((d) => d !== '')
            .map((d) => (
              <p key={d}>{`${d}.`}</p>
            ))}
        </div>

        {tags.length > 0
          ? (
            <div className='badge-container'>
              {tags.map((t) => (
                <Badge id={t.id} label={t.label} key={t.id} />
              ))}
            </div>
            )
          : null}
      </div>
    </>
  )
}

export default Project
