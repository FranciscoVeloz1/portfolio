import Badge from '@components/Badge'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/ExperienceItem.css'

const ExperienceItem = ({ image, title, date, company, responsibilities, badges }) => {
  return (
    <div className='experience-item'>
      <img src={image} alt='logo' />

      <div className='experience-wrapper'>
        <div className='experience-subtitle'>
          <p>{title}</p>
          <span className='experience-small'>{date}</span>
        </div>

        <p className='experience-small'>{company}</p>

        <div className='experience-content'>
          {responsibilities.map((responsibility) => {
            return <p key={responsibility}>{responsibility}</p>
          })}
        </div>

        {badges.length > 0 ? (
          <div className='experience-badges'>
            {badges.map((skill) => {
              return <Badge skill={skill} key={skill.id} />
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ExperienceItem
