import img1 from '@assets/img/foto.png'
import '@styles/Home/Showcase.css'

const Showcase = () => {
  return (
    <main className='showcase'>
      <div>
        <p className='showcase-title'>
          Hi, I'm Francisco <span className='txt-primary'>Veloz</span>
        </p>
        <p className='showcase-content'>
          I am a computer systems engineer and Fullstack JavaScript/TypeScript developer with +3 years of
          experience. My objective is to participate as a fullstack developer implementing backend and frontend
          solutions with MERN stack or Next.js.
        </p>
      </div>

      <img src={img1} alt='Image' />
    </main>
  )
}

export default Showcase
