import { useDeferredValue, useMemo, useState } from 'react'
import { useResumeData } from '@hooks/useResumeData'
import { useScrollToTop } from '@hooks/useScrollToTop'
import { useDocumentTitle } from '@hooks/useDocumentTitle'
import { ProjectCard } from '@components/home/ProjectCard'
import '@pages/Projects/ProjectsPage.css'

const ProjectsPage = () => {
  useScrollToTop()
  useDocumentTitle('Projects')

  const { data } = useResumeData()
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const deferredTag = useDeferredValue(activeTag)

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()

    data.projects.forEach((project) => {
      project.badges.forEach((badge) => {
        tagSet.add(badge.name)
      })
    })

    return Array.from(tagSet).sort()
  }, [data.projects])

  const filteredProjects = useMemo(() => {
    if (!deferredTag) {
      return data.projects
    }

    return data.projects.filter((project) => {
      return project.badges.some((badge) => {
        return badge.name === deferredTag
      })
    })
  }, [data.projects, deferredTag])

  const handleTagClick = (tag: string): void => {
    setActiveTag((current) => {
      return current === tag ? null : tag
    })
  }

  return (
    <div className='container' style={{ padding: '64px 0' }}>
      <div className='projects-page-header'>
        <p className='projects-page-title'>
          {data.profile.firstName}&apos;s <span className='txt-primary'>projects</span>
        </p>

        {allTags.length > 0 ? (
          <div className='projects-filter'>
            {allTags.map((tag) => {
              return (
                <button
                  key={tag}
                  type='button'
                  className={`filter-chip ${activeTag === tag ? 'active' : ''}`.trim()}
                  onClick={() => {
                    handleTagClick(tag)
                  }}
                  aria-pressed={activeTag === tag}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        ) : null}
      </div>

      {filteredProjects.length > 0 ? (
        <div className='page-project-cards'>
          {filteredProjects.map((project) => {
            return <ProjectCard key={project.id} project={project} />
          })}
        </div>
      ) : (
        <p className='projects-page-empty'>No projects match this filter.</p>
      )}
    </div>
  )
}

export default ProjectsPage
