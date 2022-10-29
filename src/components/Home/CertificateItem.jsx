import '@styles/Home/CertificateItem.css'

const CertificateItem = ({ id, image, link, title, date, description }) => {
  return (
    <div className='certificate-item'>
      <img src={image} alt='logo' />

      <div className='certificate-wrapper'>
        <div className='certificate-subtitle'>
          <p>{title}</p>
          <span className='certificate-small'>{date}</span>
        </div>

        <p className='certificate-content'>{description}</p>

        <a href={link} className='certificate-button' target='_blank' rel='noreferrer'>
          See certificate
          <i className='fa-solid fa-angles-right' />
        </a>
      </div>
    </div>
  )
}

export default CertificateItem
