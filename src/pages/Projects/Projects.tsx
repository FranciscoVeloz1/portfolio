import useScroll from '@hooks/useScroll'
import Card from '@components/Projects/Card'
import { useResumeData } from '@hooks/useResumeData'

const Projects = () => {
  useScroll()
  const { data } = useResumeData()
  const projects = data?.projects || []
  const profile = data?.profile

  return (
    <section className='projects'>
      <div className='page-projects-header'>
        <p className='page-projects-title'>
          {profile?.firstName || 'Francisco'}'s <span className='txt-primary'>projects</span>
        </p>
      </div>

      <div className='page-project-cards'>
        {projects.map((project) => {
          return (
            <Card
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              date={project.date}
              description={project.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
