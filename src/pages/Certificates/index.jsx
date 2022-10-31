import CertificateItem from '@components/Home/CertificateItem'
import useScroll from '@hooks/useScroll'
import { certificates } from '@util/data/certificates.data'
import '@styles/Home/Certificate.css'

const Certificates = () => {
  useScroll()

  return (
    <section className='certificates'>
      <p className='certificates-title certificate-title'>
        Licenses and <span className='txt-primary'>certifications</span>
      </p>

      <div className='certificates-cards'>
        {certificates.map((c) => (
          <CertificateItem
            key={c.id}
            id={c.id}
            link={c.link}
            image={c.image}
            title={c.title}
            date={c.date}
            description={c.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Certificates
