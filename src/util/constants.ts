// const URL = ''
const URL: string = '/portfolio'

const SECTION_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
] as const

type SectionId = (typeof SECTION_LINKS)[number]['id']

export { URL, SECTION_LINKS }
export type { SectionId }
