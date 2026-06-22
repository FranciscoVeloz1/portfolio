import { useResumeData } from '@hooks/useResumeData'

const ResumeDataBoundary = ({ children }) => {
  const { status, error } = useResumeData()

  if (status === 'loading') {
    return (
      <div className='resume-data-state'>
        <p>Loading portfolio data...</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className='resume-data-state'>
        <p>Unable to load portfolio data.</p>
        {error?.message ? <p className='resume-data-error'>{error.message}</p> : null}
      </div>
    )
  }

  return children
}

export default ResumeDataBoundary
