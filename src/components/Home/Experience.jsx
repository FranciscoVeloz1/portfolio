import ExperienceItem from './ExperienceItem'
import { experiences } from '@util/data/experience.data'
import '@styles/Home/Experience.css'

const Experience = () => {
  return (
    <section className='experience'>
      <p className='experience-title'>Experience</p>

      {experiences.map((e) => (
        <ExperienceItem
          key={e.id}
          id={e.id}
          image={e.image}
          title={e.title}
          date={e.date}
          company={e.company}
          description={e.description}
        />
      ))}
    </section>
  )
}

export default Experience
