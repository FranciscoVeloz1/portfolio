import CertificateItem from '@components/Home/CertificateItem'
import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import useScroll from '@hooks/useScroll'
import useResumeData from '@hooks/useResumeData'
import '@styles/Home/Certificate.css'

const Certificates = () => {
  useScroll()
  const { data, isLoading, isError } = useResumeData()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <ErrorMessage />
  }

  const { certificates } = data

  return (
    <section className='certificates'>
      <p className='certificates-title certificate-title'>
        Licenses and <span className='txt-primary'>certifications</span>
      </p>

      <div className='certificates-cards'>
        {certificates.map((c) => (
          <CertificateItem
            key={c.link}
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
