import { getSkillBadgeClass } from '@lib/skillBadge'
import type { Skill } from '@models/resume'
import '@components/ui/Badge.css'

export const Badge = ({ skill }: { skill: Skill | null | undefined }) => {
  const badgeClass = getSkillBadgeClass(skill)
  const label = skill?.name || ''

  return <span className={`badge badge-${badgeClass}`}>{label}</span>
}
