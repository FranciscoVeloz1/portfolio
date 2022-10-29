import React from 'react'
import img1 from '../../assets/img/fotoA.jpg'
import '../../styles/Home/Showcase.css'

const Showcase = () => {
  return (
    <main className='showcase'>
      <div>
        <p className='showcase-title'>
          Hi, I'm Francisco <span className='txt-primary'>Veloz</span>
        </p>
        <p className='showcase-content'>
          I am a System Computer Engineer and I am a Frontend Developer with 2
          years of experience. My objective is to participate as a web developer
          in high impact projects where I can show my skills.
        </p>
      </div>

      <img src={img1} alt='Image' />
    </main>
  )
}

export default Showcase
