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
    loadLabel = 'Show less'
  }

  return (
    <section id='experience' className='experience' aria-labelledby='experience-title'>
      <div className='container'>
        <h2 id='experience-title' className='section-header'>
          Work <span className='txt-accent'>experience</span>
        </h2>

        <div className='experience-list'>
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
        </div>

        <button type='button' className='btn btn-ghost btn-md experience-toggle' onClick={handleLoad}>
          {loadLabel}
        </button>
      </div>
    </section>
  )
}

export default Experience
