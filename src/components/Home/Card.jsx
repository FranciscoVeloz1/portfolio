import { URL } from '@util/constants'
import { Link } from 'react-router-dom'
import '@styles/Home/Card.css'

const Card = ({ id, image, title, date, description }) => {
  return (
    <Link to={`${URL}/projects/${id}`} className='projects-card '>
      <img src={image} alt='image' />

      <div className='projects-card-content'>
        <p className='projects-card-title'>{title}</p>
        <p className='projects-card-small'>{date}</p>
        <p className='projects-card-text'>{description.substring(0, 100)}...</p>
      </div>
    </Link>
  )
}

export default Card
