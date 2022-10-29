import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-contact'>
          <div className='footer-item'>
            <a href='mailto: franciscoveloz245@gmail.com' target='_blank' rel='noreferrer'>
              <i className='fa-solid fa-envelope' />{' '}
              franciscoveloz245@gmail.com
            </a>

            <a
              href='https://www.youtube.com/channel/UC_OcxydUU_51oT8mbcedriw'
              target='_blank' rel='noreferrer'
            >
              <i className='fa-brands fa-youtube' />{' '}
              Francisco Veloz
            </a>
          </div>

          <div className='footer-item'>
            <a href='https://github.com/FranciscoVeloz1' target='_blank' rel='noreferrer'>
              <i className='fa-brands fa-github' />{' '}
              FranciscoVeloz1
            </a>

            <a
              href='https://www.linkedin.com/in/franciscoveloz/'
              target='_blank' rel='noreferrer'
            >
              <i className='fa-brands fa-linkedin' />{' '}
              Francisco González Veloz
            </a>
          </div>

          <div className='footer-item'>
            <a
              href='https://www.instagram.com/franciscoveloz1/'
              target='_blank' rel='noreferrer'
            >
              <i className='fa-brands fa-instagram' />{' '}
              franciscoveloz1
            </a>

            <a href='tel: +524741309933' target='_blank' rel='noreferrer'>
              <i className='fa-solid fa-phone' />{' '}
              +52 4741309933
            </a>
          </div>
        </div>

        <p className='footer-name'>&copy; Francisco González Veloz</p>
      </div>
    </footer>
  )
}

export default Footer
