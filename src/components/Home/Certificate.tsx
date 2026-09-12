import CertificateItem from './CertificateItem'
import { Link } from 'react-router-dom'
import { URL } from '@util/constants'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Certificate.css'

const Certificate = () => {
  const { data } = useResumeData()
  const certificates = data?.certificates || []

  return (
    <section className='certificates'>
      <div className='certificates-header'>
        <p className='certificates-title'>
          Licenses and <span className='txt-primary'>certifications</span>
        </p>

        <Link to={`${URL}/certificates`} className='certificates-small'>
          View all certifications
          <i className='fa-solid fa-right-long' />
        </Link>
      </div>

      <div className='certificates-cards'>
        {certificates.slice(0, 3).map((certificate) => {
          return (
            <CertificateItem
              key={certificate.id}
              link={certificate.link}
              image={certificate.image}
              title={certificate.title}
              date={certificate.date}
              description={certificate.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Certificate
