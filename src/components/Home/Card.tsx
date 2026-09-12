import { URL } from '@util/constants'
import { Link } from 'react-router-dom'
import Badge from '@components/Badge'
import type { Project } from '@portfolio-types/resume'
import '@styles/Home/Card.css'

type CardProps = Pick<Project, 'id' | 'image' | 'title' | 'date' | 'description' | 'badges'>

const Card = ({ id, image, title, date, description, badges }: CardProps) => {
  const visibleBadges = badges.slice(0, 3)
  const extraBadgeCount = badges.length - visibleBadges.length

  return (
    <Link to={`${URL}/projects/${id}`} className='card project-card'>
      <img className='project-card-image' src={image} alt={`${title} project preview`} />

      <div className='project-card-body'>
        <h3 className='project-card-title'>{title}</h3>
        <p className='project-card-date'>{date}</p>
        <p className='project-card-description'>{description}</p>

        {badges.length > 0
          ? (
            <div className='project-card-badges'>
              {visibleBadges.map((skill) => {
                return <Badge skill={skill} key={skill.id} />
              })}
              {extraBadgeCount > 0
                ? <span className='badge badge-neutral'>+{extraBadgeCount}</span>
                : null}
            </div>
            )
          : null}
      </div>
    </Link>
  )
}

export default Card
