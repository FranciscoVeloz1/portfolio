const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const formatProjectDate = (isoDate) => {
  if (!isoDate) {
    return ''
  }

  const [year, month, day] = isoDate.split('-').map(Number)

  if (!year || !month || !day) {
    return isoDate
  }

  return `${MONTHS[month - 1]} ${day}, ${year}`
}

const parseStartDate = (startDate) => {
  if (!startDate) {
    return 0
  }

  const [year, month] = startDate.split('-').map(Number)
  return year * 100 + (month || 1)
}

export const adaptProfile = (profile, summary) => {
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

export const adaptSocialNetworks = (socialNetworks) => {
  return socialNetworks.map((network) => {
    return {
      platform: network.platform,
      link: network.link
    }
  })
}

export const adaptSkills = (skills) => {
  return skills.map((skill) => {
    return {
      id: skill.id,
      name: skill.name,
      category: skill.category
    }
  })
}

export const adaptWorkExperience = (workExperience, skills) => {
  const skillMap = new Map(skills.map((skill) => {
    return [skill.id, skill]
  }))

  return [...workExperience]
    .sort((a, b) => {
      return parseStartDate(b.startDate) - parseStartDate(a.startDate)
    })
    .map((experience, index) => {
      const badges = (experience.skills || [])
        .map((skillId) => {
          return skillMap.get(skillId)
        })
        .filter(Boolean)

      return {
        id: index + 1,
        image: experience.logo,
        title: experience.position,
        date: experience.duration,
        company: `${experience.company} - ${experience.location}`,
        responsibilities: experience.responsibilities || [],
        badges
      }
    })
}

export const adaptProjects = (projects, skills) => {
  const skillMap = new Map(skills.map((skill) => {
    return [skill.id, skill]
  }))

  return [...projects]
    .sort((a, b) => {
      return b.id - a.id
    })
    .map((project) => {
      const badges = (project.skills || [])
        .map((skillId) => {
          return skillMap.get(skillId)
        })
        .filter(Boolean)

      return {
        id: project.id,
        image: project.image,
        title: project.name,
        date: formatProjectDate(project.date),
        description: project.description,
        git: project.repo || project.link || '',
        video: project.video,
        demo: project.demo || null,
        badges
      }
    })
}

export const adaptCertifications = (certifications) => {
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

export const adaptResumeData = (raw) => {
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
