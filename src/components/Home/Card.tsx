import { useState } from 'react'
import { URL } from '@util/constants'
import { placeholderColor } from '@util/placeholderColor'
import { Link } from 'react-router-dom'
import Badge from '@components/Badge'
import type { Project } from '@portfolio-types/resume'
import '@styles/Home/Card.css'

type CardProps = Pick<Project, 'id' | 'image' | 'title' | 'date' | 'description' | 'badges'>

const Card = ({ id, image, title, date, description, badges }: CardProps) => {
  const trimmedImage = image.trim()
  const [showImage, setShowImage] = useState(() => {
    return trimmedImage.length > 0
  })
  const visibleBadges = badges.slice(0, 3)
  const extraBadgeCount = badges.length - visibleBadges.length

  const handleImageError = () => {
    setShowImage(() => {
      return false
    })
  }

  let media = (
    <div
      className='project-card-image project-card-image-fallback'
      style={{ backgroundColor: placeholderColor(id) }}
      aria-hidden='true'
    />
  )

  if (showImage && trimmedImage.length > 0) {
    media = (
      <img
        className='project-card-image'
        src={trimmedImage}
        alt={`${title} project preview`}
        onError={handleImageError}
      />
    )
  }

  return (
    <Link to={`${URL}/projects/${id}`} className='card project-card'>
      {media}

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
