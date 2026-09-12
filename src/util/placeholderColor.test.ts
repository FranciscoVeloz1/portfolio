import { describe, expect, it } from 'vitest'
import { placeholderColor } from './placeholderColor'

describe('placeholderColor', () => {
  it('returns a stable hsl color per id and different hues for nearby ids', () => {
    expect(placeholderColor(12)).toBe('hsl(204 55% 42%)')
    expect(placeholderColor(12)).toBe(placeholderColor(12))
    expect(placeholderColor(14)).toBe('hsl(298 55% 42%)')
    expect(placeholderColor(12)).not.toBe(placeholderColor(14))
  })
})
