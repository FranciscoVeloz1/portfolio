import type {
  Certification,
  Experience,
  Profile,
  Project,
  RawCertification,
  RawProfile,
  RawProject,
  RawResumeData,
  RawSkill,
  RawSocialNetwork,
  RawSummary,
  RawWorkExperience,
  ResumeData,
  Skill,
  SocialNetwork
} from '@models/resume'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const

export const formatProjectDate = (isoDate: string | undefined): string => {
  if (!isoDate) {
    return ''
  }

  const [year, month, day] = isoDate.split('-').map(Number)

  if (!year || !month || !day) {
    return isoDate
  }

  const monthLabel = MONTHS[month - 1]

  if (!monthLabel) {
    return isoDate
  }

  return `${monthLabel} ${day}, ${year}`
}

const parseStartDate = (startDate: string | undefined): number => {
  if (!startDate) {
    return 0
  }

  const parts = startDate.split('-').map(Number)
  const year = parts[0] ?? 0
  const month = parts[1] ?? 1

  return year * 100 + month
}

const parseProjectDate = (date: string | undefined): number => {
  if (!date) {
    return 0
  }

  const parts = date.split('-').map(Number)
  const year = parts[0] ?? 0
  const month = parts[1] ?? 1
  const day = parts[2] ?? 1

  return year * 10000 + month * 100 + day
}

export const adaptProfile = (profile: RawProfile, summary: RawSummary): Profile => {
  return {
    firstName: profile.firstName,
    lastName: profile.lastName,
    fullName: profile.fullName,
    headline: profile.headline,
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    website: profile.website,
    profilePhoto: profile.profilePhoto,
    summary: summary.long || summary.short || ''
  }
}

export const adaptSocialNetworks = (socialNetworks: RawSocialNetwork[]): SocialNetwork[] => {
  return socialNetworks.map((network) => {
    return {
      platform: network.platform,
      link: network.link
    }
  })
}

export const adaptSkills = (skills: RawSkill[]): Skill[] => {
  return skills.map((skill) => {
    return {
      id: skill.id,
      name: skill.name,
      category: skill.category
    }
  })
}

export const adaptWorkExperience = (
  workExperience: RawWorkExperience[],
  skills: Skill[]
): Experience[] => {
  const skillMap = new Map(
    skills.map((skill) => {
      return [skill.id, skill] as const
    })
  )

  return [...workExperience]
    .toSorted((a, b) => {
      return parseStartDate(b.startDate) - parseStartDate(a.startDate)
    })
    .map((experience, index) => {
      const badges = (experience.skills || [])
        .map((skillId) => {
          return skillMap.get(skillId)
        })
        .filter((skill): skill is Skill => {
          return Boolean(skill)
        })

      const isCurrent = experience.endDate === null || experience.duration.includes('Present')

      return {
        id: index + 1,
        image: experience.logo,
        title: experience.position,
        date: experience.duration,
        company: `${experience.company} - ${experience.location}`,
        companyName: experience.company,
        responsibilities: experience.responsibilities || [],
        badges,
        isCurrent
      }
    })
}

export const adaptProjects = (projects: RawProject[], skills: Skill[]): Project[] => {
  const skillMap = new Map(
    skills.map((skill) => {
      return [skill.id, skill] as const
    })
  )

  return [...projects]
    .toSorted((a, b) => {
      return parseProjectDate(b.date) - parseProjectDate(a.date)
    })
    .map((project) => {
      const badges = (project.skills || [])
        .map((skillId) => {
          return skillMap.get(skillId)
        })
        .filter((skill): skill is Skill => {
          return Boolean(skill)
        })

      return {
        id: project.id,
        image: project.image,
        title: project.name,
        date: formatProjectDate(project.date),
        description: project.description,
        git: project.repo || project.link || '',
        video: project.video || '',
        demo: project.demo || null,
        badges
      }
    })
}

export const adaptCertifications = (certifications: RawCertification[]): Certification[] => {
  return certifications.map((certification, index) => {
    return {
      id: certification.link || `cert-${index}`,
      image: certification.logo,
      title: certification.name,
      date: certification.date,
      description: certification.description,
      link: certification.link,
      issuer: certification.issuer
    }
  })
}

export const adaptResumeData = (raw: RawResumeData): ResumeData => {
  const skills = adaptSkills(raw.skills || [])

  return {
    profile: adaptProfile(raw.profile, raw.summary),
    socialNetworks: adaptSocialNetworks(raw.socialNetworks || []),
    skills,
    experiences: adaptWorkExperience(raw.workExperience || [], skills),
    projects: adaptProjects(raw.projects || [], skills),
    certificates: adaptCertifications(raw.certifications || [])
  }
}
