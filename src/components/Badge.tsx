import type { Skill } from '@portfolio-types/resume'

interface BadgeProps {
  skill?: Skill
}

const Badge = ({ skill }: BadgeProps) => {
  const label = skill?.name || ''

  return <span className='badge'>{label}</span>
}

export default Badge
