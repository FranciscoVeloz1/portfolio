import useScroll from '@hooks/useScroll'
import Card from '@components/Projects/Card'
import Spinner from '@components/Spinner/Spinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import useResumeData from '@hooks/useResumeData'

const Projects = () => {
  useScroll()
  const { data, isLoading, isError } = useResumeData()

  if (isLoading) return <Spinner />
  if (isError) return <ErrorMessage />

  const { projects } = data

  return (
    <section className='projects'>
      <div className='page-projects-header'>
        <p className='page-projects-title'>
          Francisco's <span className='txt-primary'>projects</span>
        </p>
      </div>

      <div className='page-project-cards'>
        {projects.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            image={p.image}
            title={p.title}
            date={p.date}
            description={p.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
