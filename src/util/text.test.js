import { describe, expect, it } from 'vitest'
import { createExcerpt, splitParagraphs } from './text'

describe('createExcerpt', () => {
  it('adds an ellipsis only when truncating', () => {
    expect(createExcerpt('Short', 100)).toBe('Short')
    expect(createExcerpt('abcdef', 3)).toBe('abc…')
  })
})

describe('splitParagraphs', () => {
  it('uses authored blank lines without corrupting abbreviations', () => {
    expect(splitParagraphs('Built with Node.js.\n\nSecond paragraph.')).toEqual([
      'Built with Node.js.',
      'Second paragraph.'
    ])
  })
})
