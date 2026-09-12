import type { Skill } from '@portfolio-types/resume'

const SKILL_CLASS_MAP: Record<string, string> = {
  React: 'react',
  'Node.js': 'node',
  JavaScript: 'js',
  TypeScript: 'ts',
  SQL: 'sql',
  'React Native': 'rn',
  Express: 'express',
  'Next.js': 'next',
  'Autodesk Inventor': 'autodesk',
  Robotics: 'robotics',
  C: 'c'
}

const CATEGORY_CLASS_MAP: Record<string, string> = {
  languages: 'js',
  frontend: 'react',
  backend: 'node',
  dataAndAI: 'sql',
  devopsAndCloud: 'express',
  databases: 'sql',
  other: 'c'
}

export const getSkillBadgeClass = (skill?: Skill): string => {
  if (!skill) {
    return 'default'
  }

  return SKILL_CLASS_MAP[skill.name] ?? CATEGORY_CLASS_MAP[skill.category] ?? 'default'
}
