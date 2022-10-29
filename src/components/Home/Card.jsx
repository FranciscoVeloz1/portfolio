import { Link } from 'react-router-dom'
import '@styles/Home/Card.css'

const Card = ({ link, image, title, date, description }) => {
  return (
    <Link to={link} className='projects-card '>
      <img src={image} alt='image' />

      <div className='projects-card-content'>
        <p className='projects-card-title'>{title}</p>
        <p className='projects-card-small'>{date}</p>
        <p className='projects-card-text'>
          {description}
        </p>
      </div>
    </Link>
  )
}

export default Card
