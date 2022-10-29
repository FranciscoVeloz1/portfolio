import '@styles/Home/ExperienceItem.css'

const ExperienceItem = ({ id, image, title, date, company, description }) => {
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
      </div>
    </div>
  )
}

export default ExperienceItem
