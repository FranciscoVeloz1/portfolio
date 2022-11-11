import img1 from '@assets/img/fotoA.jpg'
import '@styles/Home/Showcase.css'

const Showcase = () => {
  return (
    <main className='showcase'>
      <div>
        <p className='showcase-title'>
          Hi, I'm Francisco <span className='txt-primary'>Veloz</span>
        </p>
        <p className='showcase-content'>
          I am a System Computer Engineer and I am a Fullstack JavaScript/TypeScript Developer with +3 years of
          experience. My objective is to participate as a backend or frontend developer in high impact projects
          where I can help and solve different problems and situations in a company.
        </p>
      </div>

      <img src={img1} alt='Image' />
    </main>
  )
}

export default Showcase
