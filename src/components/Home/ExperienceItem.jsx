import Badge from '@components/Badge'
import '@styles/Home/ExperienceItem.css'

const ExperienceItem = ({ image, title, date, company, description, tags = [] }) => {
  return (
    <div className='experience-item'>
      <img src={image} alt='logo' />

      <div className='experience-wrapper'>
        <div className='experience-subtitle'>
          <p>{title}</p>
          <span className='experience-small'>{date}</span>
        </div>

        <p className='experience-small'>{company}</p>

        <p className='experience-content'>{description}</p>

        {tags.length > 0 ? (
          <div className='experience-badges'>
            {tags.map((t) => (
              <Badge id={t.id} label={t.label} key={t.id} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ExperienceItem
