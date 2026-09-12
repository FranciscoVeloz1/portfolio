import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { placeholderColor } from '@util/placeholderColor'
import Card from './Card'

afterEach(() => {
  cleanup()
})

const renderCard = (image: string) => {
  return render(
    <MemoryRouter>
      <Card
        id={12}
        image={image}
        title='Kanban CLI'
        date='Aug 23, 2026'
        description='CLI client'
        badges={[]}
      />
    </MemoryRouter>
  )
}

describe('Card', () => {
  it('renders a color fallback and no img when image is empty', () => {
    const { container } = renderCard('')

    expect(screen.queryByRole('img')).not.toBeInTheDocument()

    const fallback = container.querySelector('.project-card-image-fallback')

    expect(fallback).toBeInTheDocument()
    expect(fallback).toHaveStyle({ backgroundColor: placeholderColor(12) })
  })

  it('replaces a failed image with the color fallback', () => {
    const { container } = renderCard('https://example.com/missing.webp')
    const image = screen.getByRole('img', { name: 'Kanban CLI project preview' })

    fireEvent.error(image)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()

    const fallback = container.querySelector('.project-card-image-fallback')

    expect(fallback).toBeInTheDocument()
    expect(fallback).toHaveStyle({ backgroundColor: placeholderColor(12) })
  })

  it('renders the short card description', () => {
    renderCard('')

    expect(screen.getByText('CLI client')).toBeInTheDocument()
  })
})
