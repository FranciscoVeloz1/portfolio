import { useResumeData } from '@hooks/useResumeData'
import Badge from '@components/Badge'
import '@styles/Home/Skills.css'

const SKILL_GROUPS = [
  { key: 'languages', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'dataAndAI', label: 'Data & AI' },
  { key: 'devopsAndCloud', label: 'DevOps & Cloud' },
  { key: 'databases', label: 'Databases' },
  { key: 'other', label: 'Other' }
] as const

const Skills = () => {
  const { data } = useResumeData()
  const skills = data?.skills || []

  if (!data) {
    return null
  }

  return (
    <section id='skills' className='skills section-alt' aria-labelledby='skills-title'>
      <h2 id='skills-title' className='section-header'>
        Technologies I <span className='txt-accent'>work with</span>
      </h2>

      {SKILL_GROUPS.map((group) => {
        const groupSkills = skills.filter((skill) => {
          return skill.category === group.key
        })

        if (groupSkills.length === 0) {
          return null
        }

        return (
          <div className='skills-group' key={group.key}>
            <h3 className='skills-group-label'>{group.label}</h3>
            <div className='skills-pills'>
              {groupSkills.map((skill) => {
                return <Badge skill={skill} key={skill.id} />
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Skills
