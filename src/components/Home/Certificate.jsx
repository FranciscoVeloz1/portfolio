import CertificateItem from './CertificateItem'
import { Link } from 'react-router-dom'
import { URL } from '@util/constants'
import { certificates } from '@util/data/certificates.data'
import '@styles/Home/Certificate.css'

const Certificate = () => {
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

export default Certificate
