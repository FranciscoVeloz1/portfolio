import { useResumeData } from '@hooks/useResumeData'
import { useScrollToTop } from '@hooks/useScrollToTop'
import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { CertificateItem } from '@components/home/CertificateItem'
import '@pages/Certificates/CertificatesPage.css'

const CertificatesPage = () => {
  useScrollToTop()
  useDocumentTitle('Certificates')

  const { data } = useResumeData()

  return (
    <div className='container certificates-page'>
      <p className='certificates-page-title'>
        Licenses and <span className='txt-primary'>certifications</span>
      </p>

      {data.certificates.length > 0 ? (
        <div className='certificates-page-list'>
          {data.certificates.map((certificate) => {
            return <CertificateItem key={certificate.id} certificate={certificate} />
          })}
        </div>
      ) : (
        <p className='certificates-page-empty'>No certifications to show yet.</p>
      )}
    </div>
  )
}

export default CertificatesPage
