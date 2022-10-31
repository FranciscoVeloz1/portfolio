import useScroll from '@hooks/useScroll'
import Card from '@components/Projects/Card'
import { projects } from '@util/data/projects.data'

const Projects = () => {
  useScroll()

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
            link={p.link}
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
