import type { Skill } from '@models/resume'

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

export const getSkillBadgeClass = (skill: Skill | null | undefined): string => {
  if (!skill) {
    return 'default'
  }

  if (SKILL_CLASS_MAP[skill.name]) {
    return SKILL_CLASS_MAP[skill.name] as string
  }

  if (skill.category && CATEGORY_CLASS_MAP[skill.category]) {
    return CATEGORY_CLASS_MAP[skill.category] as string
  }

  return 'default'
}
