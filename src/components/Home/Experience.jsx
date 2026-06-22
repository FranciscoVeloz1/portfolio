import { useState } from 'react'
import ExperienceItem from './ExperienceItem'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Experience.css'

const Experience = () => {
  const { data } = useResumeData()
  const [load, setLoad] = useState(3)
  const experiences = data?.experiences || []

  const handleLoad = () => {
    if (load > 3) {
      setLoad(3)
      return
    }

    setLoad(experiences.length)
  }

  const visibleExperiences = experiences.slice(0, load)
  let loadLabel = 'View all experiences'

  if (load > 3) {
    loadLabel = 'Hide experiences'
  }

  return (
    <section className='experience'>
      <p className='experience-title'>Experience</p>

      {visibleExperiences.map((experience) => {
        return (
          <ExperienceItem
            key={experience.id}
            image={experience.image}
            title={experience.title}
            date={experience.date}
            company={experience.company}
            responsibilities={experience.responsibilities}
            badges={experience.badges}
          />
        )
      })}

      <p className='experience-load-small' onClick={handleLoad}>
        {loadLabel}
      </p>
    </section>
  )
}

export default Experience
