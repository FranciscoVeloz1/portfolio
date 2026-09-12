import '@styles/Home/CertificateItem.css'
import type { Certificate } from '@portfolio-types/resume'

type CertificateItemProps = Pick<Certificate, 'image' | 'link' | 'title' | 'date' | 'issuer'> & {
  description?: string
}

const CertificateItem = ({ image, link, title, date, issuer, description }: CertificateItemProps) => {
  return (
    <a href={link} className='card certificate-row' target='_blank' rel='noreferrer'>
      <img className='certificate-logo' src={image} alt={`${issuer} logo`} />

      <div className='certificate-row-body'>
        <h3 className='certificate-row-title'>{title}</h3>
        <p className='certificate-row-meta'>
          {issuer} · {date}
        </p>
        {description
          ? <p className='certificate-row-description'>{description}</p>
          : null}
      </div>

      <i className='fa-solid fa-arrow-up-right-from-square certificate-row-icon' aria-hidden='true' />
    </a>
  )
}

export default CertificateItem
