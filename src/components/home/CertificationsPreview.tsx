import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useResumeData } from '@hooks/useResumeData'
import { CertificateItem } from '@components/home/CertificateItem'
import '@components/home/CertificationsPreview.css'

export const CertificationsPreview = () => {
  const { data } = useResumeData()
  const certificates = data.certificates.slice(0, 3)

  return (
    <section id='certificates' className='section'>
      <div className='container'>
        <div className='certifications-header'>
          <div>
            <span className='section-eyebrow'>Credentials</span>
            <h2 className='section-title'>
              Licenses and <span className='txt-primary'>certifications</span>
            </h2>
          </div>

          <Link to='/certificates' className='certificates-view-all'>
            View all certifications <ArrowRight size={16} aria-hidden='true' />
          </Link>
        </div>

        <div className='certificates-cards'>
          {certificates.map((certificate) => {
            return <CertificateItem key={certificate.id} certificate={certificate} />
          })}
        </div>
      </div>
    </section>
  )
}
