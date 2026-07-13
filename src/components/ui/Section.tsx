import type { ReactNode } from 'react'
import '@components/ui/Section.css'

interface SectionProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  children: ReactNode
  className?: string
}

export const Section = ({ id, eyebrow, title, description, centered = false, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className='container'>
        <div className={`section-header ${centered ? 'centered' : ''}`.trim()}>
          {eyebrow ? <span className='section-eyebrow'>{eyebrow}</span> : null}
          <h2 className='section-title'>{title}</h2>
          {description ? <p className='section-description'>{description}</p> : null}
        </div>

        {children}
      </div>
    </section>
  )
}
