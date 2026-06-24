import '@styles/Badge.css'
import { getSkillBadgeClass } from '@util/skillBadgeClass'

const Badge = ({ skill }) => {
  const badgeClass = getSkillBadgeClass(skill)
  const label = skill?.name || ''

  return <span className={`badge badge-${badgeClass}`}>{label}</span>
}

export default Badge
