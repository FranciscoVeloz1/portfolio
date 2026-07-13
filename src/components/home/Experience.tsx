import { useState } from 'react'
import { useResumeData } from '@hooks/useResumeData'
import { Section } from '@components/ui/Section'
import { Button } from '@components/ui/Button'
import { ExperienceItem } from '@components/home/ExperienceItem'
import '@components/home/Experience.css'

const COLLAPSED_COUNT = 3

export const Experience = () => {
  const { data } = useResumeData()
  const experiences = data.experiences
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleExperiences = isExpanded ? experiences : experiences.slice(0, COLLAPSED_COUNT)
  const hasMore = experiences.length > COLLAPSED_COUNT

  const handleToggle = (): void => {
    setIsExpanded((current) => {
      return !current
    })
  }

  return (
    <Section id='experience' eyebrow='Career' title='Experience'>
      <div className='experience-list'>
        {visibleExperiences.map((experience) => {
          return <ExperienceItem key={experience.id} experience={experience} />
        })}
      </div>

      {hasMore ? (
        <div className='experience-toggle'>
          <Button variant='ghost' onClick={handleToggle} aria-expanded={isExpanded}>
            {isExpanded ? 'Hide experiences' : 'View all experiences'}
          </Button>
        </div>
      ) : null}
    </Section>
  )
}
