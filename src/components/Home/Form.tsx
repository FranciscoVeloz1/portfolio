import { useState, type FormEvent } from 'react'
import '@styles/Home/Form.css'

interface FormspreeErrorResponse {
  errors: Array<{ message: string }>
}

const isFormspreeErrorResponse = (value: unknown): value is FormspreeErrorResponse => {
  if (typeof value !== 'object' || value === null || !('errors' in value)) {
    return false
  }

  const { errors } = value

  if (!Array.isArray(errors)) {
    return false
  }

  return errors.every((error) => {
    if (typeof error !== 'object' || error === null || !('message' in error)) {
      return false
    }

    return typeof error.message === 'string'
  })
}

const Form = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const form = event.currentTarget
      const data = new FormData(form)

      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      })

      const result = await response.ok
      if (!result) {
        const responseData: unknown = await response.json()
        if (isFormspreeErrorResponse(responseData)) {
          setStatus(responseData.errors.map((error) => error.message).join(', '))
        } else {
          setStatus('Oops! There was a problem submitting your form')
        }

        return
      }

      setStatus('Thanks for your submission!')
    } catch {
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
