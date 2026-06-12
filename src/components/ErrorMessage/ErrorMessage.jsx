import '@styles/ErrorMessage.css'

const ErrorMessage = ({ message = 'Could not load resume data. Please try again later.' }) => {
  return (
    <div className='error-message' role='alert'>
      <p>{message}</p>
    </div>
  )
}

export default ErrorMessage
