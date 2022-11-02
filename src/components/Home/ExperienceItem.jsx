import Badge from '@components/Badge'
import { badges } from '@util/data/badges.data'
import '@styles/Home/ExperienceItem.css'

const ExperienceItem = ({ id, image, title, date, company, description, exBadges }) => {
  let tags = []

  exBadges.map((pb) => {
    badges.map((b) => {
      if (b.id === pb) {
        tags.push(b)
      }
    })
  })

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
