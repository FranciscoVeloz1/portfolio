import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import useResumeData from '@hooks/useResumeData'
import '@styles/Home/Showcase.css'

const Showcase = () => {
  const { data, isLoading, isError } = useResumeData()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <ErrorMessage />
  }

  const { summary, profile } = data

  return (
    <main className='showcase'>
      <div>
        <p className='showcase-title'>
          Hi, I'm {profile.firstName} <span className='txt-primary'>{profile.lastName}</span>
        </p>
        <p className='showcase-content'>{summary}</p>
      </div>

      <img src={profile.profilePhoto} alt='Profile' />
    </main>
  )
}

export default Showcase
