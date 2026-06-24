import CertificateItem from '@components/Home/CertificateItem'
import useScroll from '@hooks/useScroll'
import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Certificate.css'

const Certificates = () => {
  useScroll()
  const { data } = useResumeData()
  const certificates = data?.certificates || []

  return (
    <section className='certificates'>
      <p className='certificates-title certificate-title'>
        Licenses and <span className='txt-primary'>certifications</span>
      </p>

      <div className='certificates-cards'>
        {certificates.map((certificate) => {
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

export default Certificates
