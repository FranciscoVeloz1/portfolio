import { describe, expect, it } from 'vitest'
import { adaptProjects, formatProjectDate } from './resumeAdapters'

describe('formatProjectDate', () => {
  it('formats ISO dates while preserving unparseable values', () => {
    expect(formatProjectDate('2026-07-19')).toBe('Jul 19, 2026')
    expect(formatProjectDate('unknown')).toBe('unknown')
  })
})

describe('adaptProjects', () => {
  it('orders newest projects first and resolves only known skills', () => {
    const projects = [
      { id: 1, name: 'Old', date: '2025-01-01', skills: ['js', 'missing'] },
      { id: 2, name: 'New', date: '2026-01-01', skills: ['js'] }
    ]
    const result = adaptProjects(projects, [{ id: 'js', name: 'JavaScript' }])

    expect(result.map((project) => project.id)).toEqual([2, 1])
    expect(result[1].badges).toEqual([{ id: 'js', name: 'JavaScript' }])
  })
})
