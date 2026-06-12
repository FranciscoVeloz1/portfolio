export function resolveSkills (skillIds = [], skills = []) {
  if (!skillIds.length || !skills.length) return []

  const skillMap = new Map(skills.map((skill) => [skill.id, skill]))

  return skillIds
    .map((id) => skillMap.get(id))
    .filter(Boolean)
}
