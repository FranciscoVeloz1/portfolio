import Video from '@components/Video'
import useScroll from '@hooks/useScroll'
import { useParams } from 'react-router-dom'
import { projects } from '@util/data/projects.data'
import '@styles/Projects/Project.css'

const Project = () => {
  useScroll()
  const { id } = useParams()
  const data = projects.find((p) => p.id === parseInt(id))

  return (
    <>
      <p className='project-title'>{data.title}</p>
      <div className='project-content'>
        <div className='project-description'>
          <p>{data.description}</p>
          <p className='project-small'>{data.date}</p>

          <div className='project-buttons'>
            {data.demo
              ? (
                <a href={data.demo} className='project-button btn-dark-primary' target='_blank' rel='noreferrer'>
                  <i className='fa-solid fa-play' /> Live demo
                </a>
                )
              : null}

            {data.git
              ? (
                <a href={data.git} className='project-button btn-secondary' target='_blank' rel='noreferrer'>
                  <i className='fa-brands fa-github' /> Repository
                </a>
                )
              : null}
          </div>
        </div>

        <Video embedId={data.video} />
      </div>
    </>
  )
}

export default Project
