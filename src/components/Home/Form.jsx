import { useState } from 'react'
import '@styles/Home/Form.css'

const Form = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      // eslint-disable-next-line no-undef
      const data = new FormData(event.target)

      const response = await fetch(event.target.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      })

      const result = await response.ok
      if (!result) {
        const data = await response.json()
        if (Object.hasOwn(data, 'errors')) {
          setStatus(data.errors.map((error) => error.message).join(', '))
        } else {
          setStatus('Oops! There was a problem submitting your form')
        }

        return
      }

      setStatus('Thanks for your submission!')
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form')
    }
  }

  return (
    <section className='form-container' aria-labelledby='contact-title'>
      <h2 id='contact-title' className='form-title'>
        Contact me
      </h2>

      <form className='form' action='https://formspree.io/f/mwkzrqzw' method='POST' onSubmit={handleSubmit}>
        <label htmlFor='contact-email'>Email</label>
        <input id='contact-email' type='email' name='email' className='form-control' required />

        <label htmlFor='contact-message'>Message</label>
        <textarea id='contact-message' name='message' className='form-control' required />

        <button className='form-button'>Submit</button>

        <p role='status' aria-live='polite'>
          {status}
        </p>
      </form>
    </section>
  )
}

export default Form
