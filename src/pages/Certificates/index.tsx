import CertificateItem from '@components/Home/CertificateItem'
import useScroll from '@hooks/useScroll'
import { Link } from 'react-router-dom'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Certificate.css'

const Certificates = () => {
  useScroll()
  const { data } = useResumeData()
  const certificates = data?.certificates || []

  return (
    <section className='page' aria-labelledby='certificates-page-title'>
      <div className='page-back'>
        <Link to='/' className='btn btn-ghost btn-sm'>
          <i className='fa-solid fa-arrow-left' aria-hidden='true' /> Back home
        </Link>
      </div>

      <h1 id='certificates-page-title' className='page-title'>
        Licenses and <span className='txt-accent'>certifications</span>
      </h1>
      <p className='page-subtitle'>All {certificates.length} credentials.</p>

      <div className='certificates-list'>
        {certificates.map((certificate) => {
          return (
            <CertificateItem
              key={certificate.id}
              link={certificate.link}
              image={certificate.image}
              title={certificate.title}
              date={certificate.date}
              issuer={certificate.issuer}
              description={certificate.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Certificates
