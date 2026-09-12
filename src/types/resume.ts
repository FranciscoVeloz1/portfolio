export type SkillId = number

export interface Skill {
  id: SkillId
  name: string
  category: string
}

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

export interface Summary {
  short: string
  long: string
  highlights?: string[]
}

export interface RawWorkExperience {
  position: string
  company: string
  startDate: string
  duration: string
  location: string
  logo: string
  responsibilities: string[]
  skills: SkillId[]
}

export interface RawProject {
  id: number
  name: string
  date: string
  link: string
  repo: string
  video: string
  demo: string
  skills: SkillId[]
  description: string
  writeup: string
  image: string
}

export interface RawCertification {
  name: string
  issuer: string
  date: string
  link: string
  logo: string
  description: string
}

export interface RawSocialNetwork {
  platform: string
  link: string
}

export interface RawResumeData {
  profile: RawProfile
  summary: Summary
  workExperience: RawWorkExperience[]
  projects: RawProject[]
  certifications: RawCertification[]
  socialNetworks: RawSocialNetwork[]
  skills: Skill[]
}

export interface Profile extends RawProfile {
  summary: string
}

export interface Experience {
  id: number
  image: string
  title: string
  date: string
  startDate: string
  company: string
  responsibilities: string[]
  badges: Skill[]
}

export interface Project {
  id: number
  image: string
  title: string
  date: string
  description: string
  writeup: string
  git: string
  video: string
  demo: string | null
  badges: Skill[]
}

export interface Certificate {
  id: string
  image: string
  title: string
  date: string
  description: string
  link: string
  issuer: string
}

export interface SocialNetwork {
  platform: string
  link: string
}

export interface ResumeData {
  profile: Profile
  summary: Summary
  socialNetworks: SocialNetwork[]
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
  certificates: Certificate[]
}

export interface ResumeDataContextValue {
  data: ResumeData
}
