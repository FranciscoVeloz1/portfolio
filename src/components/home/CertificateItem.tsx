import { ChevronsRight } from 'lucide-react'
import { Card } from '@components/ui/Card'
import type { Certification } from '@models/resume'
import '@components/home/CertificateItem.css'

export const CertificateItem = ({ certificate }: { certificate: Certification }) => {
  return (
    <Card className='certificate-item'>
      <img className='certificate-logo' src={certificate.image} alt={certificate.title} />

      <div className='certificate-wrapper'>
        <div className='certificate-subtitle'>
          <p>{certificate.title}</p>
          <span className='certificate-small'>{certificate.date}</span>
        </div>

        <p className='certificate-content'>{certificate.description}</p>

        <a href={certificate.link} className='certificate-button' target='_blank' rel='noreferrer'>
          See certificate <ChevronsRight size={16} aria-hidden='true' />
        </a>
      </div>
    </Card>
  )
}
