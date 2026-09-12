import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Showcase.css'

const Showcase = () => {
  const { data } = useResumeData()
  const profile = data?.profile

  if (!profile) {
    return null
  }

  return (
    <main id='main-content' className='showcase'>
      <div>
        <h1 className='showcase-title'>
          Hi, I'm {profile.firstName} <span className='txt-primary'>{profile.lastName}</span>
        </h1>
        <p className='showcase-content'>{profile.summary}</p>
      </div>

      <img src={profile.profilePhoto} alt={profile.fullName} />
    </main>
  )
}

export default Showcase
