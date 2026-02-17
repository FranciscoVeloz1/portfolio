import img1 from '@assets/img/foto.webp'
import '@styles/Home/Showcase.css'

const Showcase = () => {
  return (
    <main className='showcase'>
      <div>
        <p className='showcase-title'>
          Hi, I'm Francisco <span className='txt-primary'>Veloz</span>
        </p>
        <p className='showcase-content'>
          Over 8 years of experience in software development. At PwC I'm working as a full stack developer, optimizing
          web applications and implementing data engineering solutions related with blockchain and AI. At Channel Island
          and Del Norte Distribution I developed an inventory management application, reducing the time spent on
          manual processes by 88%.
        </p>
      </div>

      <img src={img1} alt='Image' />
    </main>
  )
}

export default Showcase
