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
    <div className='form-container'>
      <p className='form-title'>Contact me</p>

      <form className='form' action='https://formspree.io/f/mwkzrqzw' method='POST' onSubmit={handleSubmit}>
        <input type='email' name='email' className='form-control' placeholder='Email' required />

        <textarea name='message' className='form-control' placeholder='Message' required />

        <button className='form-button'>Submit</button>

        <p>{status}</p>
      </form>
    </div>
  )
}

export default Form
