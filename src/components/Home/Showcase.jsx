import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Showcase.css'

const Showcase = () => {
  const { data } = useResumeData()
  const profile = data?.profile

  if (!profile) {
    return null
  }

  return (
    <main className='showcase'>
      <div>
        <p className='showcase-title'>
          Hi, I'm {profile.firstName} <span className='txt-primary'>{profile.lastName}</span>
        </p>
        <p className='showcase-content'>{profile.summary}</p>
      </div>

      <img src={profile.profilePhoto} alt={profile.fullName} />
    </main>
  )
}

export default Showcase
