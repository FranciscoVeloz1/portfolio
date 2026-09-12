import '@styles/Badge.css'
import { getSkillBadgeClass } from '@util/skillBadgeClass'
import type { Skill } from '@portfolio-types/resume'

interface BadgeProps {
  skill?: Skill
}

const Badge = ({ skill }: BadgeProps) => {
  const badgeClass = getSkillBadgeClass(skill)
  const label = skill?.name || ''

  return <span className={`badge badge-${badgeClass}`}>{label}</span>
}

export default Badge
