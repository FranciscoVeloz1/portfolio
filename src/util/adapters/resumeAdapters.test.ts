import { describe, expect, it } from 'vitest'
import type { RawProject, Skill } from '@portfolio-types/resume'
import { adaptProjects, formatProjectDate } from './resumeAdapters'

describe('formatProjectDate', () => {
  it('formats ISO dates while preserving unparseable values', () => {
    expect(formatProjectDate('2026-07-19')).toBe('Jul 19, 2026')
    expect(formatProjectDate('unknown')).toBe('unknown')
  })
})

describe('adaptProjects', () => {
  it('orders newest projects first and resolves only known skills', () => {
    const projects: RawProject[] = [
      {
        id: 1,
        name: 'Old',
        date: '2025-01-01',
        link: 'https://github.com/example/old',
        repo: 'https://github.com/example/old',
        video: 'old-video',
        demo: '',
        skills: [1, 999],
        description: 'Old project',
        writeup: 'Old what.\n\nOld why.\n\nOld how.',
        image: 'old.webp'
      },
      {
        id: 2,
        name: 'New',
        date: '2026-01-01',
        link: 'https://github.com/example/new',
        repo: 'https://github.com/example/new',
        video: 'new-video',
        demo: '',
        skills: [1],
        description: 'New project',
        writeup: '',
        image: 'new.webp'
      }
    ]
    const skills: Skill[] = [{ id: 1, name: 'JavaScript', category: 'languages' }]
    const result = adaptProjects(projects, skills)

    expect(result.map((project) => project.id)).toEqual([2, 1])
    expect(result[1].badges).toEqual([{ id: 1, name: 'JavaScript', category: 'languages' }])
    expect(result[0].writeup).toBe('New project')
    expect(result[1].writeup).toBe('Old what.\n\nOld why.\n\nOld how.')
  })
})
