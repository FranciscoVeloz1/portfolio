export interface RawProfile {
  firstName: string
  lastName: string
  fullName: string
  headline: string
  email: string
  phone: string
  location: string
  website: string
  profilePhoto: string
}

export interface RawSummary {
  short: string
  long: string
}

export interface RawSkill {
  id: number
  name: string
  category: string
}

export interface RawSocialNetwork {
  platform: string
  link: string
}

export interface RawWorkExperience {
  position: string
  company: string
  employmentType?: string
  startDate: string
  endDate: string | null
  duration: string
  location: string
  logo: string
  responsibilities: string[]
  skills?: number[]
}

export interface RawProject {
  id: number
  name: string
  date: string
  description: string
  image: string
  repo?: string
  link?: string
  video?: string
  demo?: string
  skills?: number[]
}

export interface RawCertification {
  name: string
  date: string
  description: string
  logo: string
  link: string
  issuer?: string
}

export interface RawResumeData {
  profile: RawProfile
  summary: RawSummary
  skills?: RawSkill[]
  socialNetworks?: RawSocialNetwork[]
  workExperience?: RawWorkExperience[]
  projects?: RawProject[]
  certifications?: RawCertification[]
}

export interface Profile {
  firstName: string
  lastName: string
  fullName: string
  headline: string
  email: string
  phone: string
  location: string
  website: string
  profilePhoto: string
  summary: string
}

export interface Skill {
  id: number
  name: string
  category: string
}

export interface SocialNetwork {
  platform: string
  link: string
}

export interface Experience {
  id: number
  image: string
  title: string
  date: string
  company: string
  companyName: string
  responsibilities: string[]
  badges: Skill[]
  isCurrent: boolean
}

export interface Project {
  id: number
  image: string
  title: string
  date: string
  description: string
  git: string
  video: string
  demo: string | null
  badges: Skill[]
}

export interface Certification {
  id: string
  image: string
  title: string
  date: string
  description: string
  link: string
  issuer?: string
}

export interface ResumeData {
  profile: Profile
  socialNetworks: SocialNetwork[]
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
  certificates: Certification[]
}
