import { useResumeData } from '@hooks/useResumeData'
import '@styles/Home/Stats.css'

const Stats = () => {
  const { data } = useResumeData()

  if (!data) {
    return null
  }

  const { experiences, projects, certificates, skills } = data
  const earliestStartYear = Math.min(
    ...experiences.map((experience) => {
      return parseInt(experience.startDate, 10)
    })
  )
  const yearsOfExperience = new Date().getFullYear() - earliestStartYear

  const stats = [
    { value: `${yearsOfExperience}+`, label: 'Years of experience' },
    { value: `${projects.length}`, label: 'Projects shipped' },
    { value: `${certificates.length}`, label: 'Certifications' },
    { value: `${skills.length}`, label: 'Technologies' }
  ]

  return (
    <div className='stats'>
      {stats.map((stat) => {
        return (
          <div className='stats-cell' key={stat.label}>
            <p className='stats-value'>{stat.value}</p>
            <p className='stats-label'>{stat.label}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Stats
