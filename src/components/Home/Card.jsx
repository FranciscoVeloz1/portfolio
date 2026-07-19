import { URL } from '@util/constants'
import { Link } from 'react-router-dom'
import { createExcerpt } from '@util/text'
import '@styles/Home/Card.css'

const Card = ({ id, image, title, date, description }) => {
  return (
    <Link to={`${URL}/projects/${id}`} className='projects-card '>
      <img src={image} alt={`${title} project preview`} />

      <div className='projects-card-content'>
        <h3 className='projects-card-title'>{title}</h3>
        <p className='projects-card-small'>{date}</p>
        <p className='projects-card-text'>{createExcerpt(description)}</p>
      </div>
    </Link>
  )
}

export default Card
