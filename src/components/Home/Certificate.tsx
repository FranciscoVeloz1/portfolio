import CertificateItem from './CertificateItem'
import { Link } from 'react-router-dom'
import { URL } from '@util/constants'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Certificate.css'

const Certificate = () => {
  const { data } = useResumeData()
  const certificates = data?.certificates || []

  return (
    <section id='certificates' className='certificates section-alt' aria-labelledby='certificates-title'>
      <div className='container'>
        <div className='section-header-row'>
          <h2 id='certificates-title' className='section-header'>
            Licenses and <span className='txt-accent'>certifications</span>
          </h2>

          <Link to={`${URL}/certificates`} className='section-header-link'>
            View all certifications
            <i className='fa-solid fa-arrow-right' aria-hidden='true' />
          </Link>
        </div>

        <div className='certificates-list'>
          {certificates.slice(0, 4).map((certificate) => {
            return (
              <CertificateItem
                key={certificate.id}
                link={certificate.link}
                image={certificate.image}
                title={certificate.title}
                date={certificate.date}
                issuer={certificate.issuer}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certificate
