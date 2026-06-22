import Video from '@components/Video'
import Badge from '@components/Badge'
import useScroll from '@hooks/useScroll'
import { useParams } from 'react-router-dom'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Projects/Project.css'

const Project = () => {
  useScroll()
  const { id } = useParams()
  const { data } = useResumeData()
  const projects = data?.projects || []
  const project = projects.find((item) => {
    return item.id === parseInt(id, 10)
  })

  if (!project) {
    return (
      <div className='project-not-found'>
        <p>Project not found.</p>
      </div>
    )
  }

  const descriptionParagraphs = project.description
    .split('.')
    .filter((paragraph) => {
      return paragraph !== ''
    })

  let demoButton = null

  if (project.demo) {
    demoButton = (
      <a href={project.demo} className='project-button btn-dark-primary' target='_blank' rel='noreferrer'>
        <i className='fa-solid fa-play' /> Live demo
      </a>
    )
  }

  let repositoryButton = null

  if (project.git) {
    repositoryButton = (
      <a href={project.git} className='project-button btn-secondary' target='_blank' rel='noreferrer'>
        <i className='fa-brands fa-github' /> Repository
      </a>
    )
  }

  let badgesSection = null

  if (project.badges.length > 0) {
    badgesSection = (
      <div className='badge-container'>
        {project.badges.map((skill) => {
          return <Badge skill={skill} key={skill.id} />
        })}
      </div>
    )
  }

  return (
    <>
      <p className='project-small'>{project.date}</p>
      <p className='project-title'>{project.title}</p>

      <div className='project-buttons'>
        {demoButton}
        {repositoryButton}
      </div>

      <div className='project-content'>
        <Video embedId={project.video} />

        <div className='project-description'>
          {descriptionParagraphs.map((paragraph) => {
            return <p key={paragraph}>{`${paragraph}.`}</p>
          })}
        </div>

        {badgesSection}
      </div>
    </>
  )
}

export default Project
