import CertificateItem from './CertificateItem'
import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import { Link } from 'react-router-dom'
import { URL } from '@util/constants'
import useResumeData from '@hooks/useResumeData'
import '@styles/Home/Certificate.css'

const Certificate = () => {
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
        {certificates.slice(0, 3).map((c) => (
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

export default Certificate
