import type { ReactNode } from 'react'
import { useResumeData } from '@hooks/useResumeData'
import { splitParagraphs } from '@util/text'
import '@styles/Home/About.css'

const renderWithHighlights = (paragraph: string, highlights: string[]): ReactNode => {
  if (highlights.length === 0) {
    return paragraph
  }

  const parts: ReactNode[] = []
  const usedPhrases = new Set<string>()
  let rest = paragraph
  let key = 0

  while (rest.length > 0) {
    let earliestIndex = -1
    let earliestPhrase = ''

    for (const phrase of highlights) {
      if (usedPhrases.has(phrase)) {
        continue
      }
      const index = rest.indexOf(phrase)
      if (index !== -1 && (earliestIndex === -1 || index < earliestIndex)) {
        earliestIndex = index
        earliestPhrase = phrase
      }
    }

    if (earliestIndex === -1) {
      parts.push(rest)
      break
    }

    if (earliestIndex > 0) {
      parts.push(rest.slice(0, earliestIndex))
    }

    parts.push(
      <mark className='about-mark' key={key}>
        {earliestPhrase}
      </mark>
    )
    key += 1
    usedPhrases.add(earliestPhrase)
    rest = rest.slice(earliestIndex + earliestPhrase.length)
  }

  return parts
}

const About = () => {
  const { data } = useResumeData()
  const summary = data?.summary

  if (!summary) {
    return null
  }

  const paragraphs = splitParagraphs(summary.long)
  const highlights = summary.highlights || []

  return (
    <section id='about' className='about' aria-labelledby='about-title'>
      <h2 id='about-title' className='section-header'>
        About <span className='txt-accent'>Me</span>
      </h2>

      <div className='about-body'>
        {paragraphs.map((paragraph) => {
          return <p key={paragraph.slice(0, 40)}>{renderWithHighlights(paragraph, highlights)}</p>
        })}
      </div>
    </section>
  )
}

export default About
