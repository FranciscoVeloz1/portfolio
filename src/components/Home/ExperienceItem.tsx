import Badge from '@components/Badge'
import type { Experience } from '@portfolio-types/resume'
import '@styles/Home/ExperienceItem.css'

type ExperienceItemProps = Pick<Experience, 'image' | 'title' | 'date' | 'company' | 'responsibilities' | 'badges'>

const ExperienceItem = ({ image, title, date, company, responsibilities, badges }: ExperienceItemProps) => {
  return (
    <article className='card experience-item'>
      <div className='experience-item-header'>
        <img className='experience-logo' src={image} alt={`${company} logo`} />

        <div className='experience-heading'>
          <h3 className='experience-position'>{title}</h3>
          <p className='experience-company'>{company}</p>
        </div>

        <span className='badge badge-neutral experience-date'>{date}</span>
      </div>

      <ul className='experience-content'>
        {responsibilities.map((responsibility) => {
          return <li key={responsibility}>{responsibility}</li>
        })}
      </ul>

      {badges.length > 0
        ? (
          <div className='experience-badges'>
            {badges.map((skill) => {
              return <Badge skill={skill} key={skill.id} />
            })}
          </div>
          )
        : null}
    </article>
  )
}

export default ExperienceItem
