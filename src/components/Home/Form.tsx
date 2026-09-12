import { useState, type FormEvent } from 'react'
import { useResumeData } from '@hooks/useResumeData'
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

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FieldErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Form = () => {
  const { data } = useResumeData()
  const profile = data?.profile

  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const nextFieldErrors: FieldErrors = {}
    if (!name) {
      nextFieldErrors.name = 'Please enter your name'
    }
    if (!email || !EMAIL_PATTERN.test(email)) {
      nextFieldErrors.email = 'Please enter a valid email'
    }
    if (!message) {
      nextFieldErrors.message = 'Please write a message'
    }

    setFieldErrors(nextFieldErrors)
    if (Object.keys(nextFieldErrors).length > 0) {
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      if (!response.ok) {
        const responseData: unknown = await response.json()
        if (isFormspreeErrorResponse(responseData)) {
          setErrorMessage(responseData.errors.map((error) => error.message).join(', '))
        } else {
          setErrorMessage('')
        }
        setStatus('error')

        return
      }

      setStatus('success')
    } catch {
      setErrorMessage('')
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section id='contact' className='contact' aria-labelledby='contact-title'>
      <h2 id='contact-title' className='section-header section-header-center'>
        Get in <span className='txt-accent'>touch</span>
      </h2>
      <p className='section-subtitle'>
        Have a project in mind or want to talk shop? My inbox is always open.
      </p>

      {status === 'success'
        ? (
          <div className='card contact-success' role='status'>
            <i className='fa-solid fa-circle-check contact-success-icon' aria-hidden='true' />
            <h3 className='contact-success-title'>Message sent</h3>
            <p className='contact-success-body'>
              Thanks for reaching out — I&apos;ll get back to you within a day or two.
            </p>
          </div>
          )
        : (
          <form
            className='form'
            action='https://formspree.io/f/mwkzrqzw'
            method='POST'
            noValidate
            onSubmit={handleSubmit}
          >
            {status === 'error'
              ? (
                <div className='contact-error' role='alert'>
                  {errorMessage || (
                    <>
                      Something went wrong — please try again or email me directly at{' '}
                      <a href={`mailto:${profile?.email || ''}`}>{profile?.email || 'me'}</a>.
                    </>
                  )}
                </div>
                )
              : null}

            <div className='form-field'>
              <label className='field-label' htmlFor='contact-name'>
                Name
              </label>
              <input
                id='contact-name'
                type='text'
                name='name'
                className={`field ${fieldErrors.name ? 'field--error' : ''}`}
                required
                disabled={isSubmitting}
              />
              {fieldErrors.name
                ? <p className='field-error-message'>{fieldErrors.name}</p>
                : null}
            </div>

            <div className='form-field'>
              <label className='field-label' htmlFor='contact-email'>
                Email
              </label>
              <input
                id='contact-email'
                type='email'
                name='email'
                className={`field ${fieldErrors.email ? 'field--error' : ''}`}
                required
                disabled={isSubmitting}
              />
              {fieldErrors.email
                ? <p className='field-error-message'>{fieldErrors.email}</p>
                : null}
            </div>

            <div className='form-field'>
              <label className='field-label' htmlFor='contact-message'>
                Message
              </label>
              <textarea
                id='contact-message'
                name='message'
                rows={6}
                className={`field ${fieldErrors.message ? 'field--error' : ''}`}
                required
                disabled={isSubmitting}
              />
              {fieldErrors.message
                ? <p className='field-error-message'>{fieldErrors.message}</p>
                : null}
            </div>

            <button
              type='submit'
              className='btn btn-primary btn-md form-submit'
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting
                ? (
                  <>
                    <i className='fa-solid fa-circle-notch fa-spin' aria-hidden='true' /> Sending…
                  </>
                  )
                : (
                    'Send message'
                  )}
            </button>
          </form>
          )}
    </section>
  )
}

export default Form
