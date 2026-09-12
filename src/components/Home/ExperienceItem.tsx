import Badge from '@components/Badge'
import type { Experience } from '@portfolio-types/resume'
import '@styles/Home/ExperienceItem.css'

type ExperienceItemProps = Pick<Experience, 'image' | 'title' | 'date' | 'company' | 'responsibilities' | 'badges'>

const ExperienceItem = ({ image, title, date, company, responsibilities, badges }: ExperienceItemProps) => {
  return (
    <div className='experience-item'>
      <img src={image} alt='logo' />

      <div className='experience-wrapper'>
        <div className='experience-subtitle'>
          <p>{title}</p>
          <span className='experience-small'>{date}</span>
        </div>

        <p className='experience-small'>{company}</p>

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
      </div>
    </div>
  )
}

export default ExperienceItem
