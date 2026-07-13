import { useState, type FormEvent } from 'react'
import { Section } from '@components/ui/Section'
import { Button } from '@components/ui/Button'
import '@components/home/ContactForm.css'

type SubmitState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success' }
  | { status: 'error'; message: string }

const FORM_ACTION = 'https://formspree.io/f/mwkzrqzw'

export const ContactForm = () => {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: 'idle' })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    setSubmitState({ status: 'submitting' })

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      if (!response.ok) {
        setSubmitState({ status: 'error', message: 'Oops! There was a problem submitting your form.' })

        return
      }

      setSubmitState({ status: 'success' })
      form.reset()
    } catch {
      setSubmitState({ status: 'error', message: 'Oops! There was a problem submitting your form.' })
    }
  }

  const isSubmitting = submitState.status === 'submitting'

  return (
    <Section id='contact' eyebrow='Say hello' title='Contact me' centered>
      <form className='contact-form' action={FORM_ACTION} method='POST' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label className='form-label' htmlFor='contact-email'>
            Email
          </label>
          <input
            id='contact-email'
            type='email'
            name='email'
            className='form-control'
            placeholder='you@example.com'
            required
          />
        </div>

        <div className='form-field'>
          <label className='form-label' htmlFor='contact-message'>
            Message
          </label>
          <textarea
            id='contact-message'
            name='message'
            className='form-control'
            placeholder='How can I help?'
            rows={5}
            required
          />
        </div>

        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>

        {submitState.status === 'success' ? (
          <p className='form-status success' role='status'>
            Thanks for your submission!
          </p>
        ) : null}

        {submitState.status === 'error' ? (
          <p className='form-status error' role='alert'>
            {submitState.message}
          </p>
        ) : null}
      </form>
    </Section>
  )
}
