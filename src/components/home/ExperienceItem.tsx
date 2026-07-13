import { useState } from 'react'
import { Badge } from '@components/ui/Badge'
import { Card } from '@components/ui/Card'
import type { Experience } from '@models/resume'
import '@components/home/ExperienceItem.css'

export const ExperienceItem = ({ experience }: { experience: Experience }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleResponsibilities = isExpanded
    ? experience.responsibilities
    : experience.responsibilities.slice(0, 2)
  const hasMore = experience.responsibilities.length > 2

  const handleToggle = (): void => {
    setIsExpanded((current) => {
      return !current
    })
  }

  return (
    <Card className={`experience-item ${experience.isCurrent ? 'is-current' : ''}`.trim()}>
      <img className='experience-logo' src={experience.image} alt={experience.companyName} />

      <div className='experience-wrapper'>
        <div className='experience-subtitle'>
          <p>{experience.title}</p>
          {experience.isCurrent ? <span className='current-pill'>Current</span> : null}
        </div>

        <p className='experience-meta'>
          {experience.company} &middot; {experience.date}
        </p>

        <ul className='experience-content'>
          {visibleResponsibilities.map((responsibility) => {
            return <li key={responsibility}>{responsibility}</li>
          })}
        </ul>

        {hasMore ? (
          <button type='button' className='experience-expand' onClick={handleToggle} aria-expanded={isExpanded}>
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        ) : null}

        {experience.badges.length > 0 ? (
          <div className='experience-badges'>
            {experience.badges.map((skill) => {
              return <Badge skill={skill} key={skill.id} />
            })}
          </div>
        ) : null}
      </div>
    </Card>
  )
}
