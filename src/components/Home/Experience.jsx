import ExperienceItem from './ExperienceItem'
import { useState } from 'react'
import { experiences } from '@util/data/experience.data'
import '@styles/Home/Experience.css'

const Experience = () => {
  const [load, setLoad] = useState(3)

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
            exBadges={e.badges}
          />
        ))}

      <p className='experience-load-small' onClick={handleLoad}>
        {load === 3 ? 'View all experiences' : 'Hide experiences'}
      </p>
    </section>
  )
}

export default Experience
