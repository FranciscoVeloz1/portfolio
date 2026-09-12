import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { ResumeDataProvider } from '@context/ResumeDataContext'
import { URL } from '@util/constants'
import Project from './Project'

window.scrollTo = () => {}

afterEach(() => {
  cleanup()
})

const renderProject = (id: string) => {
  return render(
    <ResumeDataProvider>
      <MemoryRouter initialEntries={[`${URL}/projects/${id}`]}>
        <Routes>
          <Route path={`${URL}/projects/:id`} element={<Project />} />
        </Routes>
      </MemoryRouter>
    </ResumeDataProvider>
  )
}

describe('Project', () => {
  it('embeds a YouTube iframe when the project has a video id', () => {
    const { container } = renderProject('10')

    expect(screen.getByTitle('React Native Speed Art project video')).toBeInTheDocument()
    expect(container.querySelector('.project-detail-image')).not.toBeInTheDocument()
  })

  it('shows a screenshot when there is no video, then hides media after the image fails', () => {
    const { container } = renderProject('13')

    expect(screen.queryByTitle(/project video$/)).not.toBeInTheDocument()

    const image = screen.getByRole('img', { name: 'Kanban Dashboard project preview' })

    expect(image).toBeInTheDocument()

    fireEvent.error(image)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(container.querySelector('.project-video')).not.toBeInTheDocument()
    expect(container.querySelectorAll('.project-description p')).toHaveLength(3)
    expect(screen.getByText(/three-column board/)).toBeInTheDocument()
  })

  it('omits media when video and image are empty and shows three writeup paragraphs', () => {
    const { container } = renderProject('12')

    expect(screen.queryByTitle(/project video$/)).not.toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(container.querySelector('.project-video')).not.toBeInTheDocument()

    const paragraphs = container.querySelectorAll('.project-description p')

    expect(paragraphs).toHaveLength(3)
    expect(paragraphs[0].textContent).toMatch(/terminal client/)
    expect(paragraphs[1].textContent).toMatch(/same board/)
    expect(paragraphs[2].textContent).toMatch(/TypeScript Node process/)
  })
})
