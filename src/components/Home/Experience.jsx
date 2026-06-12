import ExperienceItem from './ExperienceItem'
import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import { useState } from 'react'
import useResumeData from '@hooks/useResumeData'
import { resolveSkills } from '@util/resolveSkills'
import '@styles/Home/Experience.css'

const Experience = () => {
  const { data, isLoading, isError } = useResumeData()
  const [load, setLoad] = useState(3)

  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage />

  const { experiences, skills } = data

  const handleLoad = () => {
    if (load > 3) return setLoad(3)

    return setLoad(experiences.length)
  }

  return (
    <section className='experience'>
      <p className='experience-title'>Experience</p>

      {experiences
        .sort((a, b) => b.id - a.id)
        .slice(0, load)
        .map((e) => (
          <ExperienceItem
            key={e.id}
            id={e.id}
            image={e.image}
            title={e.title}
            date={e.date}
            company={e.company}
            description={e.description}
            tags={resolveSkills(e.badges, skills)}
          />
        ))}

      <p className='experience-load-small' onClick={handleLoad}>
        {load === 3 ? 'View all experiences' : 'Hide experiences'}
      </p>
    </section>
  )
}

export default Experience
